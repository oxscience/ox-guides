/**
 * OX Guide Gate — Email-Gate für Guides und Tools.
 *
 * Verhalten:
 *  - Eingeloggte Kunden werden direkt zum Guide weitergeleitet.
 *  - Nicht eingeloggte sehen eine Email-Form.
 *  - Nach Submit: Shopify-Newsletter-Subscribe + Redirect zum Guide.
 *
 * Nutzung:
 *  <script src="https://cdn.shopify.com/.../ox-guide-gate.js"></script>
 *  <ox-guide-gate
 *    guide="6-stufen-ki-nutzung"
 *    title="Die 6 Stufen der KI-Nutzung"
 *    description="Von besseres Google bis zu autonomen Agenten."
 *  ></ox-guide-gate>
 */

class OxGuideGate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const guide = this.getAttribute('guide') || '';
    const title = this.getAttribute('title') || 'Kostenlos Zugang erhalten';
    const description = this.getAttribute('description') || '';
    const guideUrl = '/pages/' + guide;

    // Check login via /account — Shopify redirects unauthenticated users to /login
    let isLoggedIn = false;
    try {
      const resp = await fetch('/account', { redirect: 'manual' });
      // Logged in: 200. Logged out: opaqueredirect (to /login) or 302
      isLoggedIn = resp.type === 'basic' && resp.status === 200;
    } catch (e) {
      isLoggedIn = false;
    }

    if (isLoggedIn) {
      // Direct redirect for logged-in users
      window.location.href = guideUrl;
      return;
    }

    // Render the email gate
    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0a0a0a;--surface:#141414;
  --border:#222;--border-hover:#444;
  --text:#e0e0e0;--text-secondary:#999;--text-muted:#666;
  --primary:#6366f1;--primary-hover:#5558e6;
  --white:#fff;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.6;
  -webkit-font-smoothing:antialiased;
}

.gate{max-width:560px;margin:0 auto;padding:72px 24px 96px;text-align:center}

.icon{font-size:48px;margin-bottom:16px}

h1{
  font-size:32px;font-weight:700;color:var(--white);
  letter-spacing:-0.02em;line-height:1.25;margin-bottom:12px;
}
.desc{
  color:var(--text-secondary);font-size:15.2px;line-height:1.55;
  margin-bottom:32px;max-width:440px;margin-left:auto;margin-right:auto;
}

.form{
  background:var(--surface);border:1px solid var(--border);
  border-radius:16px;padding:28px 24px;
  display:flex;flex-direction:column;gap:12px;
}

label{display:none}
input[type=email]{
  background:var(--bg);border:1px solid var(--border);
  border-radius:10px;padding:13px 16px;font-size:14.4px;
  color:var(--white);font-family:var(--font);
  transition:border-color 0.15s;
}
input[type=email]:focus{outline:none;border-color:var(--primary)}
input::placeholder{color:var(--text-muted)}

button{
  background:var(--primary);color:var(--white);
  border:none;border-radius:10px;
  padding:13px 16px;font-size:14.4px;font-weight:600;
  font-family:var(--font);cursor:pointer;
  transition:background 0.15s;
}
button:hover{background:var(--primary-hover)}
button:disabled{opacity:0.5;cursor:not-allowed}

.consent{
  font-size:12px;color:var(--text-muted);
  line-height:1.5;margin-top:4px;
}
.consent a{color:var(--text-secondary);text-decoration:underline}

.login-link{
  margin-top:24px;font-size:13.6px;color:var(--text-muted);
}
.login-link a{color:var(--primary);text-decoration:none}
.login-link a:hover{text-decoration:underline}

.error{
  font-size:13px;color:#ef4444;
  background:rgba(239,68,68,0.08);
  border:1px solid rgba(239,68,68,0.2);
  border-radius:8px;padding:10px 12px;
  margin-bottom:12px;
}

.trust{
  margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);
  font-size:12.8px;color:var(--text-muted);
}
.trust strong{color:var(--text-secondary)}

@media(max-width:600px){
  .gate{padding:48px 16px 64px}
  h1{font-size:25.6px}
}
      </style>

      <div class="gate">
        <div class="icon">&#128274;</div>
        <h1>${title}</h1>
        ${description ? `<p class="desc">${description}</p>` : ''}

        <form class="form" action="/contact" method="post" accept-charset="UTF-8">
          <input type="hidden" name="form_type" value="customer">
          <input type="hidden" name="utf8" value="&#10003;">
          <input type="hidden" name="contact[tags]" value="ox-guide-subscriber,${guide}">
          <input type="hidden" name="contact[accepts_marketing]" value="true">
          <input type="hidden" name="return_to" value="${guideUrl}">

          <label for="ox-gate-email">E-Mail-Adresse</label>
          <input
            id="ox-gate-email"
            type="email"
            name="contact[email]"
            placeholder="deine@email.de"
            required
            autocomplete="email"
          >

          <button type="submit">Zum Guide &rarr;</button>

          <p class="consent">
            Mit dem Absenden stimmst du zu, dass wir dir gelegentlich Updates zu neuen Guides und Tools schicken.
            Abmeldung jederzeit in jeder Email. Siehe <a href="/policies/privacy-policy">Datenschutz</a>.
          </p>
        </form>

        <p class="login-link">
          Schon OX-Kunde? <a href="/account/login?return_url=${encodeURIComponent(guideUrl)}">Einloggen &rarr;</a>
        </p>

        <div class="trust">
          <strong>100% kostenlos.</strong> Kein Verkaufsgespräch, kein Spam.
          Dein Zugang zum Guide ist einmalig — die Updates kannst du jederzeit abbestellen.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-gate', OxGuideGate);
