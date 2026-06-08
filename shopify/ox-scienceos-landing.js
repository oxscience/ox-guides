/**
 * OX ScienceOS — Landing (Campus-Pivot-Story, öffentlich lesbar)
 *
 * Self-contained Shadow-DOM Web Component. Erzählt den Einmalkauf-Pivot,
 * stellt das Angebot (499 € einmalig) nach vorne und sammelt Neukunden
 * über ein Eintrage-Formular ein, das den Tag `vault-newcomer-web` setzt.
 * Pats Automation (Shopify Flow) mailt diesen Eintragungen den 50-€-Code.
 *
 * Einbindung:
 *   <script src="{{ 'ox-scienceos-landing.js' | file_url }}"></script>
 *   <ox-scienceos-landing></ox-scienceos-landing>
 *
 * WICHTIG: Alle Größen in px (Ride-Theme setzt html{font-size:10px} → rem zu klein).
 */

class OxScienceOsLanding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const SIGNUP_TAG = 'vault-newcomer-web';
    const PRODUCT_URL = 'https://outoftheb-ox.de/products/ox-scienceos';
    const TEAM_URL = 'https://outoftheb-ox.de/pages/erstgesprach';

    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0f0f11;
  --surface:#1a1a1f;
  --surface-2:#15151a;
  --border:rgba(255,255,255,0.07);
  --border-hover:rgba(255,255,255,0.16);
  --text:#e8e6e3;
  --muted:#9b9894;
  --accent:#ff4477;
  --accent-hover:#ff5d88;
  --blue:#6d8cff;
  --purple:#a78bfa;
  --radius:14px;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  display:block;
  background:var(--bg);
  color:var(--text);
  font-family:var(--font);
  line-height:1.7;
  font-size:17px;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit}

.wrap{max-width:1120px;margin:0 auto;padding:0 24px}
.narrow{max-width:760px;margin:0 auto}

.gradient{
  background:linear-gradient(135deg,#6d8cff 0%,#a78bfa 50%,#6d8cff 100%);
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
}

/* ===== Buttons ===== */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-size:16px;font-weight:600;font-family:inherit;
  padding:14px 28px;border-radius:50px;border:1px solid transparent;
  cursor:pointer;text-decoration:none;transition:all .18s ease;white-space:nowrap;
}
.btn--primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn--primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);transform:translateY(-1px)}
.btn--ghost{background:transparent;color:var(--text);border-color:var(--border-hover)}
.btn--ghost:hover{border-color:#fff;background:rgba(255,255,255,0.04)}

/* ===== Hero ===== */
.hero{text-align:center;padding:80px 0 48px;position:relative;overflow:hidden}
.hero::before{
  content:"";position:absolute;top:-40px;left:50%;transform:translateX(-50%);
  width:640px;height:420px;pointer-events:none;
  background:radial-gradient(ellipse at center,rgba(109,140,255,0.10) 0%,rgba(167,139,250,0.05) 40%,transparent 70%);
}
.eyebrow{
  position:relative;font-size:13px;font-weight:700;letter-spacing:0.14em;
  text-transform:uppercase;margin-bottom:20px;
}
.hero h1{
  position:relative;font-size:52px;font-weight:800;letter-spacing:-0.03em;
  line-height:1.08;margin-bottom:22px;color:#fff;
}
.hero .sub{
  position:relative;font-size:20px;color:var(--muted);max-width:660px;
  margin:0 auto 36px;line-height:1.6;
}
.hero .cta{position:relative;display:flex;gap:14px;justify-content:center;flex-wrap:wrap}

/* ===== Offer band ===== */
.offer{
  display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
  background:var(--border);border:1px solid var(--border);border-radius:var(--radius);
  overflow:hidden;margin:8px 0 72px;
}
.offer__cell{background:var(--surface);padding:26px 22px;text-align:center}
.offer__cell strong{display:block;font-size:22px;color:#fff;font-weight:800;margin-bottom:6px}
.offer__cell span{font-size:14px;color:var(--muted);line-height:1.5}

/* ===== Story ===== */
.story{padding:0 0 24px}
.block{margin:0 auto 52px}
.label{
  display:inline-block;font-size:12px;font-weight:700;letter-spacing:0.12em;
  text-transform:uppercase;color:var(--accent);margin-bottom:10px;
}
.block h2{font-size:30px;font-weight:700;color:#fff;letter-spacing:-0.02em;line-height:1.2;margin-bottom:16px}
.block p{font-size:17.5px;color:var(--text);margin-bottom:16px}
.block p:last-child{margin-bottom:0}
.block .muted{color:var(--muted)}

/* ===== Signup card ===== */
.signup{
  background:linear-gradient(160deg,#1d1622 0%,#15151a 60%);
  border:1px solid rgba(255,68,119,0.28);border-radius:18px;
  padding:44px 40px;margin:8px auto 64px;text-align:center;position:relative;overflow:hidden;
}
.signup::before{
  content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;pointer-events:none;
  background:radial-gradient(circle,rgba(255,68,119,0.14),transparent 65%);
}
.signup .pill{
  display:inline-block;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
  color:var(--accent);background:rgba(255,68,119,0.12);border:1px solid rgba(255,68,119,0.3);
  padding:5px 14px;border-radius:50px;margin-bottom:18px;position:relative;
}
.signup h2{font-size:30px;font-weight:800;color:#fff;margin-bottom:12px;position:relative}
.signup p{font-size:17px;color:var(--muted);max-width:520px;margin:0 auto 24px;position:relative}
.signup form{display:flex;gap:10px;max-width:480px;margin:0 auto;position:relative}
.signup input[type=email]{
  flex:1;background:#0c0c0e;border:1px solid #2a2a30;border-radius:50px;
  padding:14px 20px;font-size:16px;color:#fff;font-family:inherit;
}
.signup input[type=email]:focus{outline:none;border-color:var(--accent)}
.signup input::placeholder{color:#6b6b70}
.signup .consent{font-size:12.5px;color:#6b6b70;margin:16px auto 0;max-width:480px;position:relative}
.signup .consent a{color:#9b9894;text-decoration:underline}
.signup__done .check{font-size:40px;margin-bottom:10px}

/* ===== Mini FAQ ===== */
.faq{border-top:1px solid var(--border);padding:56px 0 24px}
.faq h2{text-align:center;font-size:30px;font-weight:800;color:#fff;margin-bottom:28px}
details{border-bottom:1px solid var(--border)}
summary{
  list-style:none;cursor:pointer;font-size:18px;font-weight:600;color:#fff;
  padding:18px 0;display:flex;justify-content:space-between;align-items:center;gap:16px;
}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";color:var(--muted);font-size:22px;font-weight:400}
details[open] summary::after{content:"\\2212"}
details p{color:var(--muted);font-size:16px;line-height:1.7;padding:0 0 18px}
details p a{color:var(--accent)}

/* ===== Team note + final ===== */
.teamnote{
  text-align:center;background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius);padding:28px 32px;margin:40px auto 0;
}
.teamnote p{font-size:16px;color:var(--muted);margin-bottom:14px}
.final{text-align:center;padding:72px 0 96px}
.final h2{font-size:34px;font-weight:800;color:#fff;letter-spacing:-0.02em;margin-bottom:10px}
.final p{font-size:17px;color:var(--muted);margin-bottom:26px}
.final .small{margin-top:18px;font-size:14px}
.final .small a{color:var(--muted);text-decoration:underline}
.final .small a:hover{color:#fff}

/* ===== Reveal ===== */
.reveal{opacity:0;transform:translateY(18px);transition:opacity .4s ease,transform .4s ease}
.reveal.in{opacity:1;transform:none}

/* ===== Mobile ===== */
@media (max-width:749px){
  :host{font-size:16px}
  .hero{padding:56px 0 36px}
  .hero h1{font-size:34px}
  .hero .sub{font-size:17px}
  .offer{grid-template-columns:repeat(2,1fr);margin-bottom:48px}
  .block h2{font-size:24px}
  .block p{font-size:16.5px}
  .signup{padding:32px 22px}
  .signup h2{font-size:24px}
  .signup form{flex-direction:column}
  .signup input[type=email],.signup .btn{width:100%}
  .final h2{font-size:26px}
}
      </style>

      <div class="wrap">

        <!-- HERO -->
        <section class="hero">
          <div class="eyebrow gradient">OX ScienceOS · Der Campus</div>
          <h1>Einmal kaufen,<br>für immer behalten.</h1>
          <p class="sub">Der OX Campus ist jetzt ein einmaliger Kauf. 499 Euro, dauerhafter Zugang, alle Updates inklusive. Kein Abo, keine monatliche Abbuchung, keine Folgerechnung.</p>
          <div class="cta">
            <a href="${PRODUCT_URL}" class="btn btn--primary">Zugang sichern</a>
            <a href="#signup" class="btn btn--ghost">50 € Willkommensgutschein</a>
          </div>
        </section>

        <!-- OFFER BAND -->
        <section class="offer reveal">
          <div class="offer__cell"><strong>499 €</strong><span>Einmalig statt Abo</span></div>
          <div class="offer__cell"><strong>Angerechnet</strong><span>Was du bisher gekauft hast, zieht den Preis</span></div>
          <div class="offer__cell"><strong>0 €</strong><span>Updates und neue Reihen kostenlos</span></div>
          <div class="offer__cell"><strong>Dauerhaft</strong><span>Eigener Server plus PDF-Backup</span></div>
        </section>

        <!-- STORY -->
        <div class="story narrow">

          <div class="block reveal">
            <div class="label">Warum wir das ändern</div>
            <h2>Wir sind selbst abo-müde geworden</h2>
            <p>Ständig neue monatliche Abbuchungen, bei denen man irgendwann den Überblick verliert, was man eigentlich noch nutzt. Mit OX wollen wir nicht einer von vielen Posten auf deiner Liste sein, der jeden Monat abgeht.</p>
            <p>Darum gibt es den Campus jetzt einmal zu kaufen. Du zahlst einen Preis, und dann gehört er dir.</p>
          </div>

          <div class="block reveal">
            <div class="label">Das Vorbild</div>
            <h2>Wie Hello Games es macht</h2>
            <p>Die Idee dahinter kennst du vielleicht von Hello Games. Die haben ihr Spiel 2016 einmal verkauft und liefern seitdem fast zehn Jahre lang kostenlose Updates, ohne DLCs und ohne Season-Pässe.</p>
            <p>Genau so handhaben wir den Campus: Du zahlst einmal, und neue Reihen und Inhalte kommen ohne Aufpreis dazu.</p>
          </div>

          <div class="block reveal">
            <div class="label">Wofür du bezahlst</div>
            <h2>Wissen ist frei. Kuration ist die Arbeit.</h2>
            <p>Studien und Fachwissen sind heute überall verfügbar. Was wir verkaufen, ist das Filtern, das Prüfen der Quellen und der didaktische Aufbau, damit aus tausenden Einzelbefunden ein klarer roter Faden wird.</p>
            <p class="muted">Diese Arbeit rechtfertigt einen einmaligen Preis statt eines Abos, das einfach weiterläuft.</p>
          </div>

          <div class="block reveal">
            <div class="label">Was drin ist</div>
            <h2>Alle Reihen, alle Symposien, alle Guides</h2>
            <p>Im Campus stecken die Gesundheitsreihen, die Pain-&-Performance-Symposien, alle Webinare und die OX Guides. Erst kürzlich ist eine komplette Neurowissenschafts-Reihe dazugekommen: 18 Kapitel auf Deutsch, aufgebaut auf dem Brain Facts Book der Society for Neuroscience und mit aktuellen Studien verknüpft.</p>
            <p>Solche Reihen kommen weiter dazu, ohne dass du dafür noch einmal zahlst.</p>
          </div>

          <div class="block reveal">
            <div class="label">Verfügbarkeit</div>
            <h2>Dein Zugang hängt nicht an einer Plattform</h2>
            <p>Der Campus läuft auf unserem eigenen Server, den wir ohnehin für weitere OX-Projekte betreiben. Und falls doch einmal etwas sein sollte, gibt es alle Inhalte als PDF-Backup zum Download. So bleibt dir das Wissen, auch wenn sich morgen irgendwo die Technik ändert.</p>
          </div>

        </div>

        <!-- SIGNUP (50 €) -->
        <section class="signup reveal" id="signup">
          <span class="pill">Neu bei OX?</span>
          <h2>50 Euro Willkommensgutschein</h2>
          <p>Wenn du den Campus noch nicht kennst, trag dich hier ein. Wir schicken dir per Mail einen Code über 50 Euro für deinen Zugang. Kein Spam, nur der Gutschein und ab und zu eine Nachricht, wenn es etwas Relevantes Neues gibt.</p>
          <form id="ox-signup-form">
            <input type="email" name="email" placeholder="deine@email.de" required autocomplete="email">
            <button type="submit" class="btn btn--primary">Gutschein anfordern</button>
          </form>
          <p class="consent">Mit dem Absenden stimmst du zu, dass wir dir den Code und gelegentlich Updates schicken. Abmeldung jederzeit. <a href="https://outoftheb-ox.de/policies/privacy-policy">Datenschutz</a>.</p>
        </section>

        <!-- FAQ -->
        <section class="faq narrow">
          <h2>Häufige Fragen</h2>

          <details open>
            <summary>Ist das wirklich einmalig, ohne Abo?</summary>
            <p>Ja. Du zahlst einmal 499 Euro und behältst dauerhaften Zugang. Es gibt keine monatliche Gebühr und keine automatische Verlängerung.</p>
          </details>

          <details>
            <summary>Ich habe schon Sachen bei OX gekauft. Zählt das?</summary>
            <p>Ja, wir rechnen an, was du bisher bei uns investiert hast, und ziehen das vom Preis ab. Den passenden Code hast du per Mail bekommen. Falls er dir fehlt, antworte einfach kurz, dann schicken wir ihn dir.</p>
          </details>

          <details>
            <summary>Was kostet mich der Campus nach dem Kauf?</summary>
            <p>Nichts. Updates und neue Reihen sind inklusive, dauerhaft und ohne Folgerechnung.</p>
          </details>

          <details>
            <summary>Gibt es etwas für Teams und Praxen?</summary>
            <p>Ja. Für Teams gibt es weiterhin Jahreslizenzen mit eigenem Raum, Onboarding und Beratung. <a href="${TEAM_URL}">Sprich uns an</a>, dann finden wir das passende Modell.</p>
          </details>
        </section>

        <!-- TEAM NOTE -->
        <div class="teamnote narrow">
          <p>Du willst den Campus für ein ganzes Team? Die Jahreslizenz bringt OX-Bot, einen eigenen Team-Raum und einen Onboarding-Call mit Pat.</p>
          <a href="${TEAM_URL}" class="btn btn--ghost">Team-Zugang anfragen</a>
        </div>

        <!-- FINAL CTA -->
        <section class="final">
          <h2>Bereit, den Campus zu deinem zu machen?</h2>
          <p>Einmal kaufen, alle Updates kostenlos, dauerhafter Zugang.</p>
          <a href="${PRODUCT_URL}" class="btn btn--primary">Zugang sichern für 499 €</a>
          <div class="small"><a href="#signup">Oder erst den 50-Euro-Gutschein sichern</a></div>
        </section>

      </div>
    `;

    this._initSignup(SIGNUP_TAG);
    this._initReveal();
  }

  _initSignup(tag) {
    const form = this.shadowRoot.getElementById('ox-signup-form');
    const card = this.shadowRoot.getElementById('signup');
    if (!form || !card) return;

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const email = form.querySelector('input[type=email]').value.trim();
      if (!email) return;

      // Shopify-Customer mit Tag anlegen (gleicher Mechanismus wie die OX-Guide-Paywall).
      const data = new FormData();
      data.append('form_type', 'customer');
      data.append('utf8', '✓');
      data.append('contact[email]', email);
      data.append('contact[tags]', tag);
      data.append('contact[accepts_marketing]', 'true');
      fetch('/contact', { method: 'POST', body: data, credentials: 'same-origin' }).catch(() => {});

      card.classList.add('signup__done');
      card.innerHTML = `
        <div class="check">✓</div>
        <h2>Danke, du bist drauf.</h2>
        <p>Dein 50-Euro-Code ist auf dem Weg in dein Postfach. Schau gleich mal rein (und wirf einen Blick in den Spam-Ordner, falls er sich versteckt).</p>
        <a href="https://outoftheb-ox.de/products/ox-scienceos" class="btn btn--primary" style="position:relative">Zum Campus</a>
      `;
    });
  }

  _initReveal() {
    const els = this.shadowRoot.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
  }
}

customElements.define('ox-scienceos-landing', OxScienceOsLanding);
