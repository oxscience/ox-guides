class CampusUpgrade extends HTMLElement {
  connectedCallback() {
    // Light DOM — damit <stripe-pricing-table> korrekt funktioniert
    this.innerHTML = `
      <style>
campus-upgrade *,campus-upgrade *::before,campus-upgrade *::after{box-sizing:border-box;margin:0;padding:0}
campus-upgrade{
  --bg:#0a0a0a;--surface:#111827;--surface-alt:#0f172a;
  --border:#1a1a1a;--border-accent:#6366f1;
  --text:#d4d4d4;--text-secondary:#b0b0b0;--text-muted:#888;
  --white:#fff;
  --primary:#6366f1;--primary-light:#a5b4fc;
  --green-bg:#064e3b;--green-text:#6ee7b7;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.75;
  -webkit-font-smoothing:antialiased;min-height:100vh;
}
campus-upgrade a{color:var(--primary);text-decoration:none}
campus-upgrade a:hover{text-decoration:underline}

.cu-container{max-width:960px;margin:0 auto;padding:64px 24px 80px}

.cu-eyebrow{
  display:inline-block;font-size:11.2px;text-transform:uppercase;
  letter-spacing:0.12em;color:var(--primary);margin-bottom:12px;font-weight:600;
}

.cu-hero h1{
  font-size:40px;font-weight:700;color:var(--white);
  margin-bottom:16px;letter-spacing:-0.02em;line-height:1.2;
}

.cu-hero .cu-lede{
  font-size:18px;color:var(--text-secondary);margin-bottom:48px;max-width:680px;line-height:1.6;
}

.cu-benefits{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:16px;margin-bottom:56px;
}

.cu-benefit{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:18px 22px;border-radius:0 8px 8px 0;
}

.cu-benefit-title{color:var(--white);font-weight:600;font-size:15.2px;margin-bottom:4px;display:block}
.cu-benefit-desc{color:var(--text-muted);font-size:13.6px;line-height:1.55}

.cu-pricing{
  margin:0 auto 48px;max-width:900px;
}

.cu-pricing-heading{
  text-align:center;margin-bottom:32px;
}
.cu-pricing-heading h2{
  font-size:24px;font-weight:600;color:var(--white);margin-bottom:8px;letter-spacing:-0.01em;
}
.cu-pricing-heading p{
  color:var(--text-muted);font-size:14.4px;
}

.cu-stripe-wrap{
  background:var(--surface-alt);border:1px solid var(--border);
  border-radius:16px;padding:24px;
}

.cu-footer{
  text-align:center;margin-top:48px;padding:32px;
  background:var(--surface);border-radius:12px;max-width:720px;margin-left:auto;margin-right:auto;
}
.cu-footer-title{
  display:inline-block;padding:4px 12px;background:var(--green-bg);color:var(--green-text);
  font-size:11.2px;text-transform:uppercase;letter-spacing:0.08em;border-radius:999px;
  font-weight:600;margin-bottom:16px;
}
.cu-footer p{color:var(--text-secondary);font-size:14.4px;line-height:1.6}
.cu-footer p + p{margin-top:12px}

@media (max-width:640px){
  .cu-container{padding:40px 20px 64px}
  .cu-hero h1{font-size:30px}
  .cu-hero .cu-lede{font-size:16px}
}
      </style>

      <div class="cu-container">
        <div class="cu-hero">
          <span class="cu-eyebrow">OX Campus · Upgrade</span>
          <h1>Dein Zugang zur OX Campus Community</h1>
          <p class="cu-lede">
            Kuratierte Inhalte zu Training, Rehab, Wissenschaft und Ernährung —
            für Wissensarbeiter, Trainer und Therapeuten, die tiefer gehen wollen.
          </p>
        </div>

        <div class="cu-benefits">
          <div class="cu-benefit">
            <span class="cu-benefit-title">Science &amp; Training</span>
            <span class="cu-benefit-desc">Evidenz-basierte Deep Dives, kein Bullshit.</span>
          </div>
          <div class="cu-benefit">
            <span class="cu-benefit-title">Rehab &amp; Ernährung</span>
            <span class="cu-benefit-desc">Praxisnahe Konzepte aus der täglichen Arbeit.</span>
          </div>
          <div class="cu-benefit">
            <span class="cu-benefit-title">Nur Jährlich: Symposien &amp; P&amp;P</span>
            <span class="cu-benefit-desc">Exklusive Inhalte plus alle Webinar-Aufzeichnungen.</span>
          </div>
        </div>

        <div class="cu-pricing">
          <div class="cu-pricing-heading">
            <h2>Wähle dein Paket</h2>
            <p>Zahlung sicher über Stripe. Monatlich oder jährlich kündbar.</p>
          </div>
          <div class="cu-stripe-wrap">
            <stripe-pricing-table
              pricing-table-id="prctbl_1TKRKjHqn6yoMI2oqlWd4qHU"
              publishable-key="pk_live_51L5Ur1Hqn6yoMI2ordQGVMXD7rgTgFuJCy3ZnPWUDlrV1F5hJcA9nXqaXCnyymrncFzCc7rn2lzT5CZ0t34KW6Hr00JMGmtBat">
            </stripe-pricing-table>
          </div>
        </div>

        <div class="cu-footer">
          <span class="cu-footer-title">Sofortiger Zugang</span>
          <p>
            Nach erfolgreicher Zahlung wirst du automatisch in die passende Gruppe auf
            <a href="https://campus.outoftheb-ox.de">campus.outoftheb-ox.de</a>
            aufgenommen und kannst direkt loslegen.
          </p>
          <p>Du kannst jederzeit in deinem Stripe-Account kündigen.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('campus-upgrade', CampusUpgrade);
