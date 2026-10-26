/**
 * OX Guide Paywall — Substack-Style Overlay
 *
 * Zeigt einen Content-Teaser mit Fade-Out und ein Modal-Overlay mit
 * Email-Form. Eingeloggte Kunden sehen den Content ohne Overlay.
 *
 * WICHTIG (2026-06): Die Anmeldung läuft NICHT mehr über Shopifys /contact.
 * Grund: Shopifys reCAPTCHA lädt auf den Custom-Guide-Pages nicht, verlangt aber
 * einen Token -> "Missing CAPTCHA token", jede Anmeldung ging verloren. Stattdessen
 * postet das Formular an unseren eigenen Endpoint (signup.outoftheb-ox.de), der den
 * Kunden per Shopify-Admin-API anlegt. Der Endpoint umgeht /contact komplett.
 *
 * Robust: wir warten auf die Antwort (await). Erfolg -> entsperren. Fehler ->
 * sichtbare Meldung + Retry (KEIN stilles Entsperren wie früher).
 */

const OX_SIGNUP_ENDPOINT = 'https://signup.outoftheb-ox.de/signup';
const OX_VIEW_ENDPOINT = 'https://signup.outoftheb-ox.de/view';

// Anonymer Aufrufzaehler: Guide + Status, "first" = erster Aufruf in diesem Browser.
// Keine Cookies, keine IP-Speicherung. Darf nie etwas kaputt machen -> alles in try.
function oxTrackView(guide, state) {
  let first = false;
  try {
    first = !localStorage.getItem('ox-seen-' + guide);
    localStorage.setItem('ox-seen-' + guide, '1');
  } catch (e) {}
  try { navigator.sendBeacon(OX_VIEW_ENDPOINT, JSON.stringify({ guide, state, first })); } catch (e) {}
}

class OxGuidePaywall extends HTMLElement {
  async connectedCallback() {
    const guide = this.getAttribute('guide') || '';
    const title = this.getAttribute('title') || 'Kostenloser Zugang';
    const description = this.getAttribute('description') || '';
    const benefits = (this.getAttribute('benefits') || '').split(',').map(b => b.trim()).filter(Boolean);
    const pages = this.getAttribute('pages') || '';
    const teaserLines = parseInt(this.getAttribute('teaser-lines') || '12');

    // Soft-Unlock: wenn der User schon Email eingegeben hat, Paywall komplett skippen
    try {
      if (localStorage.getItem('ox-paywall-unlocked') === '1') return oxTrackView(guide, 'unlocked');
    } catch (e) { /* localStorage disabled */ }

    // Check login
    let isLoggedIn = false;
    try {
      const resp = await fetch('/account', { redirect: 'follow' });
      const finalUrl = resp.url || '';
      isLoggedIn = resp.ok && !finalUrl.includes('/login') && !finalUrl.includes('/register');
    } catch (e) {
      isLoggedIn = false;
    }

    if (isLoggedIn) {
      // Eingeloggte User: Modal & Teaser-Abschneiden entfernen
      return oxTrackView(guide, 'member');
    }

    oxTrackView(guide, 'paywall');

    // Build overlay + modal in Light DOM so it can cover the whole page
    const overlay = document.createElement('div');
    overlay.id = 'ox-paywall-root';
    overlay.innerHTML = `
      <style>
        #ox-paywall-fade {
          position: absolute;
          left: 0; right: 0;
          top: calc(${teaserLines * 28}px + 200px);
          height: 300px;
          background: linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.95) 80%, rgba(10,10,10,1) 100%);
          pointer-events: none;
          z-index: 100;
        }

        /* Everything below the teaser fold is hidden */
        #ox-paywall-cutoff {
          position: relative;
          max-height: calc(${teaserLines * 28}px + 200px);
          overflow: hidden;
        }

        #ox-paywall-modal {
          position: fixed;
          left: 50%;
          bottom: 40px;
          transform: translateX(-50%);
          width: 90%;
          max-width: 520px;
          background: #1a1a1f;
          border: 1px solid rgba(111,189,187,0.3);
          border-radius: 16px;
          padding: 32px 28px 24px;
          z-index: 9999;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          color: #d4d4d4;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
          animation: paywall-slide-up 0.4s ease-out;
        }

        @keyframes paywall-slide-up {
          from { opacity: 0; transform: translate(-50%, 30px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        #ox-paywall-modal .badge {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #a7ccd7;
          padding: 4px 10px;
          background: rgba(111,189,187,0.1);
          border: 1px solid rgba(111,189,187,0.25);
          border-radius: 20px;
          margin-bottom: 12px;
        }

        #ox-paywall-modal h2 {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin: 0 0 8px;
        }

        #ox-paywall-modal .desc {
          color: #999;
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 16px;
        }

        #ox-paywall-modal .benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        #ox-paywall-modal .benefits li {
          padding: 4px 0 4px 22px;
          position: relative;
          font-size: 13.5px;
          color: #c9d1d9;
          line-height: 1.45;
        }
        #ox-paywall-modal .benefits li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #6fbdbb;
          font-weight: 700;
        }

        #ox-paywall-modal form {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }
        #ox-paywall-modal input[type=email] {
          flex: 1;
          min-width: 180px;
          background: #0a0a0a;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          color: #fff;
          font-family: inherit;
        }
        #ox-paywall-modal input[type=email]:focus {
          outline: none;
          border-color: #6fbdbb;
        }
        #ox-paywall-modal input::placeholder { color: #666; }
        /* Honeypot — für Menschen unsichtbar, Bots füllen es aus */
        #ox-paywall-modal .ox-hp {
          position: absolute !important;
          left: -9999px !important;
          width: 1px; height: 1px;
          opacity: 0; overflow: hidden;
        }

        #ox-paywall-modal button[type=submit] {
          background: #6fbdbb;
          color: #0f0f11;
          border: none;
          border-radius: 8px;
          padding: 11px 18px;
          font-size: 13.5px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          white-space: nowrap;
        }
        #ox-paywall-modal button[type=submit]:hover { background: #5aa8a6; }
        #ox-paywall-modal button[type=submit]:disabled { opacity: 0.6; cursor: default; }

        #ox-paywall-error {
          min-height: 0;
          font-size: 12.5px;
          color: #f0a0a0;
          line-height: 1.4;
          margin: 0 0 8px;
        }

        #ox-paywall-modal .why-email {
          font-size: 12px;
          color: #8a8f98;
          line-height: 1.5;
          margin: 0 0 12px;
          padding-left: 12px;
          border-left: 2px solid rgba(111,189,187,0.4);
        }
        #ox-paywall-modal .why-email strong {
          color: #c9d1d9;
          font-weight: 600;
        }

        #ox-paywall-modal .consent {
          font-size: 11.5px;
          color: #666;
          line-height: 1.5;
          margin: 0 0 14px;
        }
        #ox-paywall-modal .consent a {
          color: #999;
          text-decoration: underline;
        }

        #ox-paywall-modal .skip {
          text-align: center;
          margin: 0 0 14px;
        }
        #ox-paywall-modal .skip button {
          background: none;
          border: none;
          padding: 4px 6px;
          font-size: 12px;
          font-family: inherit;
          color: #777;
          text-decoration: underline;
          cursor: pointer;
        }
        #ox-paywall-modal .skip button:hover { color: #a7ccd7; }

        #ox-paywall-modal .login {
          text-align: center;
          font-size: 12.5px;
          color: #666;
          padding-top: 14px;
          border-top: 1px solid #222;
        }
        #ox-paywall-modal .login a {
          color: #a7ccd7;
          text-decoration: none;
        }
        #ox-paywall-modal .login a:hover { text-decoration: underline; }

        #ox-paywall-modal .back {
          text-align: center;
          font-size: 12px;
          margin-top: 10px;
        }
        #ox-paywall-modal .back a {
          color: #777;
          text-decoration: none;
        }
        #ox-paywall-modal .back a:hover { color: #a7ccd7; }

        @media (max-width: 600px) {
          #ox-paywall-modal {
            left: 12px;
            right: 12px;
            width: auto;
            transform: none;
            padding: 24px 20px;
          }
          @keyframes paywall-slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      </style>

      <div id="ox-paywall-modal">
        <div class="badge">${pages ? pages + '-Seiten-Guide · ' : ''}Kostenlos</div>
        <h2>${title}</h2>
        ${description ? `<p class="desc">${description}</p>` : ''}

        ${benefits.length > 0 ? `
        <ul class="benefits">
          ${benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
        ` : ''}

        <form novalidate>
          <input type="email" name="email" placeholder="deine@email.de" required autocomplete="email">
          <input type="text" class="ox-hp" name="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
          <button type="submit">Weiterlesen →</button>
        </form>
        <p id="ox-paywall-error"></p>

        <p class="why-email">
          <strong>Warum wir nach deiner Mail fragen:</strong> Auf Instagram und Co. entscheidet der Algorithmus, ob wir uns überhaupt noch sehen. Da hält Big Tech die Strippe zwischen uns beiden in der Hand. Mit deiner Mail haben wir einen direkten Draht: Neue Guides wie diesen bekommst du kostenlos ins Postfach, ohne dass ein Algorithmus dazwischen entscheidet.
        </p>
        <p class="consent">
          Mit dem Absenden stimmst du zu, dass wir dir gelegentlich Updates zu neuen Guides schicken.
          Abmeldung jederzeit. <a href="/policies/privacy-policy">Datenschutz</a>.
        </p>
        <div class="skip">
          <button type="button" id="ox-paywall-skip">Ist mir zu doof, ich will einfach so lesen</button>
        </div>

        <div class="login">
          Schon OX-Kunde? <a href="/account/login?return_url=${encodeURIComponent(window.location.pathname)}">Einloggen &rarr;</a>
        </div>

        <div class="back">
          <a href="/pages/kostenlose-ox-guides">&larr; Zurück zur Guide-Übersicht</a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Find the previous sibling (the guide web component) and wrap it in cutoff
    const paywallEl = this;
    const guideEl = paywallEl.previousElementSibling;
    let cutoff = null;
    let fade = null;
    if (guideEl) {
      cutoff = document.createElement('div');
      cutoff.id = 'ox-paywall-cutoff';
      guideEl.parentNode.insertBefore(cutoff, guideEl);
      cutoff.appendChild(guideEl);

      fade = document.createElement('div');
      fade.id = 'ox-paywall-fade';
      cutoff.appendChild(fade);
    }

    // Block scrolling below the fold
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // remember=false beim Ueberspringen: dann fragt die Paywall beim naechsten Besuch wieder
    const unlockPage = (remember = true) => {
      if (remember) { try { localStorage.setItem('ox-paywall-unlocked', '1'); } catch (e) {} }
      if (cutoff && guideEl) {
        cutoff.parentNode.insertBefore(guideEl, cutoff);
        if (fade) fade.remove();
        cutoff.remove();
      }
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };

    const form = overlay.querySelector('form');
    const modal = overlay.querySelector('#ox-paywall-modal');
    const errEl = overlay.querySelector('#ox-paywall-error');
    const skipBtn = overlay.querySelector('#ox-paywall-skip');

    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        oxTrackView(guide, 'skip');
        unlockPage(false);
        overlay.remove();
      });
    }

    if (form && modal) {
      form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const email = (form.querySelector('input[name=email]').value || '').trim();
        const hp = (form.querySelector('input[name=hp]').value || '').trim();
        const btn = form.querySelector('button[type=submit]');
        if (errEl) errEl.textContent = '';
        if (!email) return;

        if (btn) { btn.disabled = true; btn.textContent = 'Senden …'; }

        let ok = false;
        try {
          const resp = await fetch(OX_SIGNUP_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, guide, hp }),
          });
          const data = await resp.json().catch(() => ({}));
          ok = resp.ok && data && data.ok === true;
          if (!ok && errEl) {
            errEl.textContent = (data && data.error === 'email')
              ? 'Bitte gib eine gültige E-Mail-Adresse ein.'
              : 'Hat gerade nicht geklappt, bitte nochmal versuchen.';
          }
        } catch (e) {
          if (errEl) errEl.textContent = 'Verbindungsfehler, bitte nochmal versuchen.';
        }

        if (!ok) {
          if (btn) { btn.disabled = false; btn.textContent = 'Weiterlesen →'; }
          return;
        }

        // Erfolg: entsperren + Danke
        unlockPage();
        modal.innerHTML = `
          <div class="badge">Freigeschaltet</div>
          <h2>Danke, du bist drauf.</h2>
          <p class="desc">Wir schicken dir gelegentlich Updates zu neuen Guides. Viel Spaß beim Lesen, scroll einfach weiter.</p>
          <div style="text-align:center;margin-top:18px">
            <button type="button" id="ox-paywall-close">Weiter zum Guide</button>
          </div>
        `;
        const closeBtn = modal.querySelector('#ox-paywall-close');
        if (closeBtn) closeBtn.addEventListener('click', () => overlay.remove());
        setTimeout(() => overlay.remove(), 3000);
      });
    }
  }
}

customElements.define('ox-guide-paywall', OxGuidePaywall);
