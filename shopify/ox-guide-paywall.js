/**
 * OX Guide Paywall — Substack-Style Overlay
 *
 * Zeigt einen Content-Teaser mit Fade-Out und ein Modal-Overlay mit
 * Email-Form. Eingeloggte Kunden sehen den Content ohne Overlay.
 *
 * Einbindung in Guide-Templates:
 *   <script src="{{ 'ox-guide-paywall.js' | file_url }}"></script>
 *   <ox-guide-XYZ></ox-guide-XYZ>
 *   <ox-guide-paywall
 *     guide="6-stufen-ki-nutzung"
 *     title="Die 6 Stufen der KI-Nutzung"
 *     description="..."
 *     benefits="Eins, Zwei, Drei"
 *   ></ox-guide-paywall>
 */

class OxGuidePaywall extends HTMLElement {
  async connectedCallback() {
    const guide = this.getAttribute('guide') || '';
    const title = this.getAttribute('title') || 'Kostenloser Zugang';
    const description = this.getAttribute('description') || '';
    const benefits = (this.getAttribute('benefits') || '').split(',').map(b => b.trim()).filter(Boolean);
    const pages = this.getAttribute('pages') || '';
    const teaserLines = parseInt(this.getAttribute('teaser-lines') || '12');

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
      return;
    }

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
          background: #111827;
          border: 1px solid rgba(99,102,241,0.3);
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
          color: #a5b4fc;
          padding: 4px 10px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.25);
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
          color: #6366f1;
          font-weight: 700;
        }

        #ox-paywall-modal form {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        #ox-paywall-modal input[type=email] {
          flex: 1;
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
          border-color: #6366f1;
        }
        #ox-paywall-modal input::placeholder { color: #666; }

        #ox-paywall-modal button {
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 11px 18px;
          font-size: 13.5px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          white-space: nowrap;
        }
        #ox-paywall-modal button:hover { background: #5558e6; }

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

        #ox-paywall-modal .login {
          text-align: center;
          font-size: 12.5px;
          color: #666;
          padding-top: 14px;
          border-top: 1px solid #222;
        }
        #ox-paywall-modal .login a {
          color: #a5b4fc;
          text-decoration: none;
        }
        #ox-paywall-modal .login a:hover { text-decoration: underline; }

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

        <form action="/contact" method="post" accept-charset="UTF-8">
          <input type="hidden" name="form_type" value="customer">
          <input type="hidden" name="utf8" value="&#10003;">
          <input type="hidden" name="contact[tags]" value="ox-guide-subscriber,${guide}">
          <input type="hidden" name="contact[accepts_marketing]" value="true">
          <input type="hidden" name="return_to" value="${window.location.pathname}">

          <input type="email" name="contact[email]" placeholder="deine@email.de" required autocomplete="email">
          <button type="submit">Weiterlesen →</button>
        </form>

        <p class="consent">
          Mit dem Absenden stimmst du zu, dass wir dir gelegentlich Updates zu neuen Guides schicken.
          Abmeldung jederzeit. <a href="/policies/privacy-policy">Datenschutz</a>.
        </p>

        <div class="login">
          Schon OX-Kunde? <a href="/account/login?return_url=${encodeURIComponent(window.location.pathname)}">Einloggen &rarr;</a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Find the previous sibling (the guide web component) and wrap it in cutoff
    const paywallEl = this;
    const guideEl = paywallEl.previousElementSibling;
    if (guideEl) {
      const cutoff = document.createElement('div');
      cutoff.id = 'ox-paywall-cutoff';
      guideEl.parentNode.insertBefore(cutoff, guideEl);
      cutoff.appendChild(guideEl);

      const fade = document.createElement('div');
      fade.id = 'ox-paywall-fade';
      cutoff.appendChild(fade);
    }

    // Block scrolling below the fold
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }
}

customElements.define('ox-guide-paywall', OxGuidePaywall);
