class EuDigitalStack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0f0f11;--surface:#1a1a1f;--surface-hover:#222228;
  --border:#2a2a32;--border-hover:#3a3a44;
  --text:#e8e6e3;--text-secondary:#a09a92;--text-tertiary:#6b6560;
  --primary:#6d8cff;--primary-light:#1e2a4a;--primary-dark:#8da4ff;
  --accent:#f0a030;--accent-light:#2d2210;
  --green:#34d399;--green-light:#0d2818;
  --red:#f87171;--red-light:#2d1215;
  --purple:#a78bfa;--purple-light:#1e1630;
  --radius:10px;--radius-sm:6px;--radius-lg:14px;
  --shadow-sm:0 1px 2px rgba(0,0,0,0.2);
  --shadow:0 1px 3px rgba(0,0,0,0.3),0 1px 2px rgba(0,0,0,0.2);
  --shadow-md:0 4px 6px -1px rgba(0,0,0,0.3),0 2px 4px -2px rgba(0,0,0,0.2);
  --shadow-lg:0 10px 15px -3px rgba(0,0,0,0.3),0 4px 6px -4px rgba(0,0,0,0.2);
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,sans-serif;
  --mono:"SF Mono","Fira Code","JetBrains Mono",Menlo,monospace;
  display:block;
  font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

/* Hero */
.hero{max-width:1200px;margin:0 auto;padding:64px 24px 48px;text-align:center}
.hero h1{font-size:44px;font-weight:800;letter-spacing:-0.03em;line-height:1.15;margin-bottom:16px}
.hero h1 .highlight{background:linear-gradient(135deg,#6d8cff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{font-size:18.4px;color:var(--text-secondary);max-width:640px;margin:0 auto 32px;line-height:1.7}
.hero-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:32px}
.hero-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:var(--surface);border:1px solid var(--border);border-radius:20px;font-size:12.8px;font-weight:500;color:var(--text-secondary)}
.hero-badge svg{width:14px;height:14px}

/* Search */
.search-wrap{max-width:520px;margin:0 auto 16px;position:relative}
.search-input{width:100%;padding:12px 16px 12px 42px;border:1px solid var(--border);border-radius:var(--radius);font-size:15.2px;background:var(--surface);color:var(--text);font-family:var(--font);transition:all 0.2s;box-shadow:var(--shadow-sm)}
.search-input:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-light)}
.search-input::placeholder{color:var(--text-tertiary)}
.search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-tertiary);width:18px;height:18px}

/* Stats Bar */
.stats-bar{max-width:1200px;margin:0 auto 40px;padding:0 24px;display:flex;justify-content:center;gap:32px;flex-wrap:wrap}
.stat{text-align:center}
.stat-num{font-size:24px;font-weight:700;color:var(--primary)}
.stat-label{font-size:12.48px;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.05em}

/* Category Nav */
.cat-nav{max-width:1200px;margin:0 auto 32px;padding:0 24px;display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
.cat-btn{padding:7px 16px;border-radius:20px;border:1px solid var(--border);background:var(--surface);font-size:13.12px;font-weight:500;color:var(--text-secondary);cursor:pointer;transition:all 0.15s;font-family:var(--font);white-space:nowrap}
.cat-btn:hover{border-color:var(--border-hover);color:var(--text);background:var(--surface-hover)}
.cat-btn.active{background:var(--primary);color:#fff;border-color:var(--primary)}

/* Grid */
.grid-section{max-width:1200px;margin:0 auto;padding:0 24px 64px}
.category-group{margin-bottom:48px;display:none}
.category-group.visible{display:block}
.category-header{display:flex;align-items:center;gap:10px;margin-bottom:20px;padding-bottom:12px;border-bottom:1px solid var(--border)}
.category-icon{width:32px;height:32px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:17.6px}
.category-title{font-size:18.4px;font-weight:700}
.category-replaces{font-size:13.12px;color:var(--text-tertiary);margin-left:auto}

/* Cards */
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;transition:all 0.2s;cursor:pointer;position:relative;overflow:hidden}
.card:hover{border-color:var(--border-hover);box-shadow:var(--shadow-md);transform:translateY(-1px)}
.card-top{display:flex;align-items:flex-start;gap:12px;margin-bottom:12px}
.card-logo{width:44px;height:44px;border-radius:var(--radius);background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:var(--primary);flex-shrink:0}
.card-info{flex:1;min-width:0}
.card-name{font-size:16.8px;font-weight:700;display:flex;align-items:center;gap:8px}
.card-company{font-size:12.48px;color:var(--text-tertiary);margin-top:1px}
.card-flag{font-size:14.4px}
.card-desc{font-size:13.6px;color:var(--text-secondary);margin-bottom:12px;line-height:1.55;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}

/* Badges */
.badges{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:4px;font-size:11.2px;font-weight:600;letter-spacing:0.01em}
.badge-green{background:var(--green-light);color:var(--green)}
.badge-blue{background:var(--primary-light);color:var(--primary)}
.badge-amber{background:var(--accent-light);color:var(--accent)}
.badge-purple{background:var(--purple-light);color:var(--purple)}
.badge-red{background:var(--red-light);color:var(--red)}
.badge-gray{background:#25252b;color:var(--text-secondary)}

/* Metrics */
.metrics{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.metric{display:flex;align-items:baseline;gap:6px;font-size:12.48px;color:var(--text-secondary);min-width:0}
.metric-icon{width:14px;height:14px;flex-shrink:0;color:var(--text-tertiary)}
.metric-label{color:var(--text-tertiary);min-width:0}
.metric-value{font-weight:600;color:var(--text);word-break:break-word}

/* Expandable Details */
.card-details{display:none;margin-top:14px;padding-top:14px;border-top:1px solid var(--border)}
.card.expanded .card-details{display:block}
.card.expanded .card-desc{-webkit-line-clamp:unset}
.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.8px}
.detail-item{display:flex;flex-direction:column;gap:2px}
.detail-label{color:var(--text-tertiary);font-size:11.52px;text-transform:uppercase;letter-spacing:0.04em}
.detail-value{color:var(--text);font-weight:500}
.card-link{display:inline-flex;align-items:center;gap:4px;margin-top:12px;padding:6px 14px;background:var(--primary);color:#fff;border-radius:var(--radius-sm);font-size:13.12px;font-weight:600;transition:all 0.15s}
.card-link:hover{background:var(--primary-dark);text-decoration:none;color:#fff}

/* Expand Indicator */
.expand-hint{text-align:center;margin-top:8px;font-size:12px;color:var(--text-tertiary)}
.card.expanded .expand-hint .hint-more{display:none}
.card:not(.expanded) .expand-hint .hint-less{display:none}

/* Comparison Table */
.compare-section{max-width:1200px;margin:0 auto;padding:0 24px 64px}
.compare-table-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--surface)}
table{width:100%;border-collapse:collapse;font-size:13.12px}
th{background:var(--bg);padding:10px 14px;text-align:left;font-weight:600;border-bottom:1px solid var(--border);position:sticky;top:0;white-space:nowrap}
td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:middle}
tr:last-child td{border-bottom:none}
tr:hover td{background:var(--surface-hover)}
.check{color:var(--green);font-weight:700}
.cross{color:var(--red);font-weight:700}
.partial{color:var(--accent);font-weight:700}

/* Legend */
.legend{max-width:1200px;margin:0 auto;padding:0 24px 48px}
.legend-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
.legend-item{display:flex;align-items:flex-start;gap:10px;padding:14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.legend-icon{font-size:20px;flex-shrink:0;width:28px;text-align:center}
.legend-text h4{font-size:13.6px;font-weight:600;margin-bottom:2px}
.legend-text p{font-size:12.48px;color:var(--text-secondary);line-height:1.45}

/* Section Titles */
.section-title{max-width:1200px;margin:0 auto;padding:0 24px 24px;font-size:21.6px;font-weight:700}

/* Inline Footer */
.inline-footer{max-width:1200px;margin:0 auto;padding:32px 24px;border-top:1px solid var(--border);text-align:center;font-size:13.12px;color:var(--text-tertiary);line-height:1.6}
.inline-footer a{color:var(--primary)}
.inline-footer a:hover{text-decoration:underline}

/* Responsive */
@media(max-width:768px){
  .hero h1{font-size:29.6px}
  .hero p{font-size:16px}
  .cards-grid{grid-template-columns:1fr}
  .stats-bar{gap:20px}
  .detail-grid{grid-template-columns:1fr}
  .category-replaces{display:none}
}
@media(max-width:480px){
  .hero{padding:40px 16px 32px}
  .grid-section{padding:0 16px 48px}
  .cat-nav{padding:0 16px}
  .metrics{grid-template-columns:1fr}
}

/* Animations */
@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.card{animation:fadeIn 0.3s ease both}
.cards-grid .card:nth-child(2){animation-delay:0.05s}
.cards-grid .card:nth-child(3){animation-delay:0.1s}
      </style>

      <div class="wrapper">

<!-- Hero -->
<section class="hero" id="top">
  <h1>Europäische Alternativen<br>zu <span class="highlight">Big Tech</span></h1>
  <p>Datenschutzfreundliche, unabhängige Software aus Europa. DSGVO-konform, transparent und frei von Tech-Giganten.</p>
  <p style="font-size:13.6px;color:var(--text-tertiary);margin-bottom:24px">Zusammengestellt von <strong style="color:var(--text-secondary)">Pat Preilowski</strong> · <a href="https://outoftheb-ox.de" target="_blank" rel="noopener" style="color:var(--primary)">Out Of The Box Science</a></p>
  <div class="hero-badges">
    <span class="hero-badge">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1l1.5 3.2L13 4.8l-2.5 2.4.6 3.5L8 9l-3.1 1.7.6-3.5L3 4.8l3.5-.6z"/></svg>
      29 geprüfte Tools
    </span>
    <span class="hero-badge">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z"/><path d="M8 5v3l2 1.5"/></svg>
      Stand: April 2026
    </span>
    <span class="hero-badge">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="12" height="8" rx="1.5"/><path d="M5 6V4a3 3 0 0 1 6 0v2"/></svg>
      DSGVO-fokussiert
    </span>
  </div>
  <div class="search-wrap">
    <svg class="search-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7.5" cy="7.5" r="5.5"/><path d="M12 12l4 4"/></svg>
    <input type="text" class="search-input" id="searchInput" placeholder="Suche nach Tools, Kategorien oder Big-Tech-Alternativen..." autocomplete="off">
  </div>
</section>

<!-- Stats -->
<div class="stats-bar">
  <div class="stat"><div class="stat-num">29</div><div class="stat-label">Tools</div></div>
  <div class="stat"><div class="stat-num">14</div><div class="stat-label">EU-Länder</div></div>
  <div class="stat"><div class="stat-num">19</div><div class="stat-label">Open Source</div></div>
  <div class="stat"><div class="stat-num">12</div><div class="stat-label">Kategorien</div></div>
</div>

<!-- Category Navigation -->
<div class="cat-nav" id="catNav">
  <button class="cat-btn active" data-cat="all">Alle</button>
  <button class="cat-btn" data-cat="kommunikation">Kommunikation</button>
  <button class="cat-btn" data-cat="produktivitaet">Produktivität</button>
  <button class="cat-btn" data-cat="sicherheit">Sicherheit</button>
  <button class="cat-btn" data-cat="infrastruktur">Infrastruktur</button>
  <button class="cat-btn" data-cat="entwicklung">Entwicklung</button>
  <button class="cat-btn" data-cat="web">Web & Analytics</button>
</div>

<!-- Tools Grid -->
<section class="grid-section" id="tools">

  <!-- KOMMUNIKATION -->
  <div class="category-group visible" data-category="kommunikation">
    <div class="category-header">
      <div class="category-icon" style="background:#dbeafe">📧</div>
      <div class="category-title">Kommunikation</div>
      <div class="category-replaces">Ersetzt Gmail, Zoom, WhatsApp, Slack</div>
    </div>
    <div class="cards-grid">

      <!-- Tuta Mail -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#e8153a20;color:#e8153a">T</div>
          <div class="card-info">
            <div class="card-name">Tuta Mail <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Tutao GmbH · Hannover, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Ende-zu-Ende-verschlüsselter E-Mail-Dienst mit Post-Quanten-Kryptografie. Erster Anbieter mit Schutz gegen Quantencomputer-Angriffe. Null-Wissen-Architektur.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E-verschlüsselt</span>
          <span class="badge badge-amber">Selbstfinanziert</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Deutschland</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 3€/M</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">ISO 27001</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Gmail, Outlook</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2011</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">Post-Quanten (TutaCrypt), AES-256</span></div>
            <div class="detail-item"><span class="detail-label">Lizenz</span><span class="detail-value">GPL v3</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">100% Gründer-finanziert, keine VC</span></div>
            <div class="detail-item"><span class="detail-label">Gratis-Plan</span><span class="detail-value">1 GB Speicher, 1 Adresse</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">1,5M€ Bundesförderung für PQ-Crypto</span></div>
          </div>
          <a href="https://tuta.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Jitsi Meet -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#17a5e820;color:#17a5e8">J</div>
          <div class="card-info">
            <div class="card-name">Jitsi Meet <span class="card-flag">🇫🇷</span></div>
            <div class="card-company">Community-Projekt · Ursprung: Universität Straßburg</div>
          </div>
        </div>
        <div class="card-desc">Vollständig quelloffene Videokonferenz-Plattform. Kein Account erforderlich, unbegrenzte Teilnehmer. Selbst-Hosting möglich für volle Datensouveränität.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E optional</span>
          <span class="badge badge-green">Kostenlos</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Selbst-Hosting / EU</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">Apache 2.0</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Zoom, Teams, Meet</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2003</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">TLS + optionale E2E</span></div>
            <div class="detail-item"><span class="detail-label">Selbst-Hosting</span><span class="detail-value">Ja, Docker / bare metal</span></div>
            <div class="detail-item"><span class="detail-label">EU-Instanz</span><span class="detail-value">Kmeet (Infomaniak, Schweiz)</span></div>
            <div class="detail-item"><span class="detail-label">Teilnehmer</span><span class="detail-value">Unbegrenzt (self-hosted)</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Kein Account nötig</span></div>
          </div>
          <a href="https://jitsi.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Element -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#0dbd8b20;color:#0dbd8b">E</div>
          <div class="card-info">
            <div class="card-name">Element <span class="card-flag">🇬🇧</span></div>
            <div class="card-company">Element (New Vector Ltd) · London, UK</div>
          </div>
        </div>
        <div class="card-desc">Dezentraler Messenger auf Basis des Matrix-Protokolls. Ende-zu-Ende-verschlüsselt, föderiert und von der Bundeswehr, NATO und französischer Regierung genutzt.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E Standard</span>
          <span class="badge badge-gray">Regierungs-erprobt</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">EU / Selbst-Hosting</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 5$/User</span></div>
          <div class="metric"><span class="metric-label">Protokoll:</span> <span class="metric-value">Matrix (offen)</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">WhatsApp, Slack, Teams</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2017</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">Megolm/Olm (Signal-basiert)</span></div>
            <div class="detail-item"><span class="detail-label">Nutzer</span><span class="detail-value">10+ Regierungen weltweit</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">48M$ VC (kein Big Tech)</span></div>
            <div class="detail-item"><span class="detail-label">Föderiert</span><span class="detail-value">Ja — dezentrales Netzwerk</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Bundeswehr & NATO nutzen es</span></div>
          </div>
          <a href="https://element.io" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

    </div>
  </div>

  <!-- PRODUKTIVITÄT -->
  <div class="category-group visible" data-category="produktivitaet">
    <div class="category-header">
      <div class="category-icon" style="background:#fef3c7">📝</div>
      <div class="category-title">Produktivität</div>
      <div class="category-replaces">Ersetzt Notion, Asana, Google Docs, AirDrop</div>
    </div>
    <div class="cards-grid">

      <!-- OnlyOffice -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#ff642020;color:#ff6420">O</div>
          <div class="card-info">
            <div class="card-name">OnlyOffice <span class="card-flag">🇱🇻</span></div>
            <div class="card-company">Ascensio System SIA · Riga, Lettland</div>
          </div>
        </div>
        <div class="card-desc">Quelloffene Office-Suite mit exzellenter Microsoft-Office-Kompatibilität. Dokumente, Tabellen, Präsentationen mit Echtzeit-Kollaboration und Dokumentenverschlüsselung.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E-verschlüsselt</span>
          <span class="badge badge-gray">ISO 27001</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">EU / Selbst-Hosting</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 8$/User</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">AGPL v3</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">MS Office, Google Docs</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2009</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">AES-256, E2E für Dokumente</span></div>
            <div class="detail-item"><span class="detail-label">Formate</span><span class="detail-value">DOCX, XLSX, PPTX nativ</span></div>
            <div class="detail-item"><span class="detail-label">Selbst-Hosting</span><span class="detail-value">Ja, Docker / Linux</span></div>
            <div class="detail-item"><span class="detail-label">Zertifikate</span><span class="detail-value">ISO 27001</span></div>
            <div class="detail-item"><span class="detail-label">Desktop</span><span class="detail-value">Windows, macOS, Linux</span></div>
          </div>
          <a href="https://www.onlyoffice.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- OpenProject -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#35c5f020;color:#0b9fca">O</div>
          <div class="card-info">
            <div class="card-name">OpenProject <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">OpenProject GmbH · Berlin, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Führende Open-Source-Projektmanagement-Software aus Deutschland. Gantt-Diagramme, agile Boards, Zeiterfassung. Weit verbreitet im europäischen öffentlichen Sektor.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-gray">ISO 27001</span>
          <span class="badge badge-amber">Öffentlicher Sektor</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Deutschland</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 7,25€/User</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">GPL v3</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Asana, Trello, Monday</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2012</span></div>
            <div class="detail-item"><span class="detail-label">Zertifikate</span><span class="detail-value">ISO 27001, ISO 27018</span></div>
            <div class="detail-item"><span class="detail-label">Features</span><span class="detail-value">Gantt, Agile, BIM, Kosten</span></div>
            <div class="detail-item"><span class="detail-label">Selbst-Hosting</span><span class="detail-value">Ja, Docker / DEB / RPM</span></div>
            <div class="detail-item"><span class="detail-label">Nutzer</span><span class="detail-value">EU-Behörden, Siemens, Audi</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Umsatzfinanziert</span></div>
          </div>
          <a href="https://www.openproject.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Organic Maps -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#4caf5020;color:#4caf50">🗺</div>
          <div class="card-info">
            <div class="card-name">Organic Maps <span class="card-flag">🇪🇺</span></div>
            <div class="card-company">Community-Projekt · EU-gefördert (NLnet/NGI)</div>
          </div>
        </div>
        <div class="card-desc">Kostenlose Offline-Karten auf OpenStreetMap-Basis. Sammelt keinerlei Nutzerdaten — kein Tracking, keine Werbung, keine Analyse. Funktioniert komplett offline.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-green">Zero Tracking</span>
          <span class="badge badge-amber">EU-gefördert</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Offline (kein Server)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">Apache 2.0</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Google Maps, Apple Maps</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2020 (Fork von MAPS.ME)</span></div>
            <div class="detail-item"><span class="detail-label">Datenerhebung</span><span class="detail-value">Null — absolut keine</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Android, iOS</span></div>
            <div class="detail-item"><span class="detail-label">Kartendaten</span><span class="detail-value">OpenStreetMap</span></div>
            <div class="detail-item"><span class="detail-label">Förderung</span><span class="detail-value">NLnet / EU NGI0 Entrust</span></div>
            <div class="detail-item"><span class="detail-label">Ideal für</span><span class="detail-value">Wandern, Radfahren, Reisen</span></div>
          </div>
          <a href="https://organicmaps.app" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- CryptPad -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#0087ff20;color:#0087ff">C</div>
          <div class="card-info">
            <div class="card-name">CryptPad <span class="card-flag">🇫🇷</span></div>
            <div class="card-company">XWiki SAS · Paris, Frankreich</div>
          </div>
        </div>
        <div class="card-desc">Vollständig Ende-zu-Ende-verschlüsselte Office-Suite: Dokumente, Tabellen, Kanban, Präsentationen. Zero-Knowledge — selbst der Server kann deine Daten nicht lesen. Von der UN genutzt.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E-verschlüsselt</span>
          <span class="badge badge-gray">BSI C5</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Frankreich (OVHcloud)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis (1 GB) / ab 5€/M</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">AGPL v3</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Notion, Google Docs</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2016</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">Zero-Knowledge E2E für alles</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">BPI France Förderung, unabhängig</span></div>
            <div class="detail-item"><span class="detail-label">Zertifikate</span><span class="detail-value">BSI C5-konform</span></div>
            <div class="detail-item"><span class="detail-label">Nutzer</span><span class="detail-value">Vereinte Nationen (UN)</span></div>
            <div class="detail-item"><span class="detail-label">Selbst-Hosting</span><span class="detail-value">Ja, Docker / npm</span></div>
          </div>
          <a href="https://cryptpad.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Anytype -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#f5c54220;color:#f5c542">A</div>
          <div class="card-info">
            <div class="card-name">Anytype <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Anytype · Berlin, Deutschland / Schweiz</div>
          </div>
        </div>
        <div class="card-desc">Local-first Workspace für Notizen, Wikis, Aufgaben und Datenbanken. Daten liegen auf deinem Gerät, nicht in der Cloud. Ende-zu-Ende-verschlüsselt mit eigenem P2P-Sync-Protokoll.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E-verschlüsselt</span>
          <span class="badge badge-amber">Local-first</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Lokal / P2P-Sync</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / Paid für Cloud</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">Any Source (Protokoll MIT)</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Notion, Obsidian</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2018</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">E2E mit eigenem Schlüssel</span></div>
            <div class="detail-item"><span class="detail-label">Sync</span><span class="detail-value">AnySync P2P-Protokoll (MIT)</span></div>
            <div class="detail-item"><span class="detail-label">Mitarbeiter</span><span class="detail-value">175</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Win, Mac, Linux, iOS, Android</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Offline-first, kein Cloud-Zwang</span></div>
          </div>
          <a href="https://anytype.io" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- LocalSend -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#2196f320;color:#2196f3">L</div>
          <div class="card-info">
            <div class="card-name">LocalSend <span class="card-flag">🇪🇺</span></div>
            <div class="card-company">Community-Projekt · Open Source</div>
          </div>
        </div>
        <div class="card-desc">Dateien und Nachrichten direkt zwischen Geräten im lokalen Netzwerk teilen. Kein Internet, kein Account, kein Cloud-Upload nötig. Funktioniert plattformübergreifend.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-green">Kostenlos</span>
          <span class="badge badge-amber">Kein Internet nötig</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Kein Server (P2P lokal)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">MIT</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">AirDrop, WeTransfer</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2022</span></div>
            <div class="detail-item"><span class="detail-label">Protokoll</span><span class="detail-value">REST + TLS im lokalen Netz</span></div>
            <div class="detail-item"><span class="detail-label">Downloads</span><span class="detail-value">8+ Millionen</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Win, Mac, Linux, iOS, Android</span></div>
            <div class="detail-item"><span class="detail-label">Datenschutz</span><span class="detail-value">Keine Daten verlassen LAN</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Funktioniert offline, kein Account</span></div>
          </div>
          <a href="https://localsend.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

    </div>
  </div>

  <!-- SICHERHEIT -->
  <div class="category-group visible" data-category="sicherheit">
    <div class="category-header">
      <div class="category-icon" style="background:#d1fae5">🔒</div>
      <div class="category-title">Sicherheit & Privatsphäre</div>
      <div class="category-replaces">Ersetzt NordVPN, Google DNS, 1Password, Chrome</div>
    </div>
    <div class="cards-grid">

      <!-- Mullvad VPN -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#294a1b20;color:#294a1b">M</div>
          <div class="card-info">
            <div class="card-name">Mullvad VPN <span class="card-flag">🇸🇪</span></div>
            <div class="card-company">Mullvad VPN AB · Göteborg, Schweden</div>
          </div>
        </div>
        <div class="card-desc">Privacy-first VPN, das keine E-Mail, keinen Namen und keine persönlichen Daten bei der Anmeldung verlangt. Fester Preis seit 2009. RAM-only Server ohne Festplatten.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">No-Logs</span>
          <span class="badge badge-amber">Selbstfinanziert</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">RAM-only, weltweit</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">5€/Monat (fest)</span></div>
          <div class="metric"><span class="metric-label">Audits:</span> <span class="metric-value">Cure53, Assured AB</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">NordVPN, ExpressVPN</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2009</span></div>
            <div class="detail-item"><span class="detail-label">Protokoll</span><span class="detail-value">WireGuard only (OpenVPN Jan 2026 entfernt)</span></div>
            <div class="detail-item"><span class="detail-label">Anmeldung</span><span class="detail-value">Zufällige Kontonummer, kein Name</span></div>
            <div class="detail-item"><span class="detail-label">Zahlung</span><span class="detail-value">Bargeld, Crypto, Karte</span></div>
            <div class="detail-item"><span class="detail-label">Lizenz</span><span class="detail-value">GPL v3</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Gründer-finanziert, keine VC</span></div>
          </div>
          <a href="https://mullvad.net" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Quad9 -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#007aff20;color:#007aff">Q</div>
          <div class="card-info">
            <div class="card-name">Quad9 <span class="card-flag">🇨🇭</span></div>
            <div class="card-company">Quad9 Foundation · Zürich, Schweiz</div>
          </div>
        </div>
        <div class="card-desc">Kostenloser, datenschutzfreundlicher DNS-Resolver als Schweizer Stiftung. Blockiert bekannte Schad-Domains und loggt keine IP-Adressen. Schweizer Datenschutzrecht für alle Nutzer.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-green">Nonprofit</span>
          <span class="badge badge-purple">DNS-over-TLS</span>
          <span class="badge badge-green">Kostenlos</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Schweiz (300+ global)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Logging:</span> <span class="metric-value">Keine IP-Adressen</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Google DNS, Cloudflare</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2016/2017</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">DNS-over-TLS, DNS-over-HTTPS, DNSCrypt</span></div>
            <div class="detail-item"><span class="detail-label">Organisationsform</span><span class="detail-value">Schweizer Stiftung (gemeinnützig)</span></div>
            <div class="detail-item"><span class="detail-label">Schutz</span><span class="detail-value">Malware/Phishing-Blockierung</span></div>
            <div class="detail-item"><span class="detail-label">DNS-IPs</span><span class="detail-value">9.9.9.9 / 149.112.112.112</span></div>
            <div class="detail-item"><span class="detail-label">Förderer</span><span class="detail-value">Global Cyber Alliance, PCH</span></div>
          </div>
          <a href="https://quad9.net" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- heylogin -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#6c63ff20;color:#6c63ff">h</div>
          <div class="card-info">
            <div class="card-name">heylogin <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">heylogin GmbH · Braunschweig, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Passwort-Manager ohne Master-Passwort. Nutzt Hardware-basierte E2E-Verschlüsselung via Smartphone-Secure-Element oder FIDO2-Keys. 2FA standardmäßig sicher.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-purple">HW-Verschlüsselt</span>
          <span class="badge badge-gray">ISO 27001</span>
          <span class="badge badge-amber">Mozilla Ventures</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Deutschland</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 3,99€/User</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">ISO 27001</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">1Password, LastPass</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2018</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">Hardware-E2E via Secure Element</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Kein Master-Passwort nötig</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Mozilla Ventures + Business Angels</span></div>
            <div class="detail-item"><span class="detail-label">Auth</span><span class="detail-value">FIDO2 / Smartphone / Biometrie</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Browser-Extension, Mobile</span></div>
          </div>
          <a href="https://www.heylogin.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Vivaldi -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#ef342120;color:#ef3421">V</div>
          <div class="card-info">
            <div class="card-name">Vivaldi <span class="card-flag">🇳🇴</span></div>
            <div class="card-company">Vivaldi Technologies AS · Oslo, Norwegen</div>
          </div>
        </div>
        <div class="card-desc">Hochgradig anpassbarer, datenschutzfreundlicher Browser vom ehemaligen Opera-Mitgründer. Mitarbeiter-Eigenbesitz, kein VC. Eingebauter Werbeblocker, Mail-Client und Kalender.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Teilw. Open Source</span>
          <span class="badge badge-amber">Selbstfinanziert</span>
          <span class="badge badge-green">Kostenlos</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Norwegen (EWR)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Tracking:</span> <span class="metric-value">Keins</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Chrome, Edge</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2013</span></div>
            <div class="detail-item"><span class="detail-label">Basis</span><span class="detail-value">Chromium (BSD-3, Open Source)</span></div>
            <div class="detail-item"><span class="detail-label">Eigentümer</span><span class="detail-value">Mitarbeiter-eigenes Unternehmen</span></div>
            <div class="detail-item"><span class="detail-label">Features</span><span class="detail-value">Werbeblocker, Mail, RSS, Kalender</span></div>
            <div class="detail-item"><span class="detail-label">Sync</span><span class="detail-value">E2E-verschlüsselt</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Windows, macOS, Linux, Android</span></div>
          </div>
          <a href="https://vivaldi.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

    </div>
  </div>

  <!-- INFRASTRUKTUR -->
  <div class="category-group visible" data-category="infrastruktur">
    <div class="category-header">
      <div class="category-icon" style="background:#ede9fe">☁️</div>
      <div class="category-title">Infrastruktur & Cloud</div>
      <div class="category-replaces">Ersetzt AWS, Stripe, Google Drive, Google Search</div>
    </div>
    <div class="cards-grid">

      <!-- Hetzner -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#d5233820;color:#d52338">H</div>
          <div class="card-info">
            <div class="card-name">Hetzner <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Hetzner Online GmbH · Gunzenhausen, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Einer der größten europäischen Rechenzentrumsbetreiber. Extrem preisstarke Cloud-Server, Dedicated Server und Managed Hosting aus deutschen und finnischen Rechenzentren.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-gray">ISO 27001</span>
          <span class="badge badge-gray">BSI C5</span>
          <span class="badge badge-amber">Familienunternehmen</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">DE, FI (EU)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Ab 4,49€/Monat (Preiserhöh. Apr 2026)</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">ISO 27001, BSI C5 Type 2, KRITIS</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">AWS, Azure, GCP</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">1997</span></div>
            <div class="detail-item"><span class="detail-label">Umsatz</span><span class="detail-value">~447M€ (2022)</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Familienunternehmen, keine VC</span></div>
            <div class="detail-item"><span class="detail-label">Rechenzentren</span><span class="detail-value">Nürnberg, Falkenstein, Helsinki</span></div>
            <div class="detail-item"><span class="detail-label">Cloud VPS</span><span class="detail-value">Ab 2 vCPU, 4 GB RAM</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">KRITIS-Betreiber (BSI)</span></div>
          </div>
          <a href="https://www.hetzner.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Tresorit -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#00875120;color:#008751">T</div>
          <div class="card-info">
            <div class="card-name">Tresorit <span class="card-flag">🇨🇭</span></div>
            <div class="card-company">Tresorit AG (Schweizerische Post) · Zürich, Schweiz</div>
          </div>
        </div>
        <div class="card-desc">Schweizer E2E-verschlüsselter Cloud-Speicher mit Zero-Knowledge-Architektur. Im Besitz der Schweizerischen Post. Eine der am besten zertifizierten Cloud-Speicher-Lösungen.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-purple">Zero-Knowledge</span>
          <span class="badge badge-gray">ISO 27001</span>
          <span class="badge badge-gray">SOC 2 Type II</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Schweiz, EU</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 10€/M</span></div>
          <div class="metric"><span class="metric-label">Audit:</span> <span class="metric-value">Ernst & Young (PenTest)</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Dropbox, Google Drive</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2011</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">Client-seitig, Zero-Knowledge</span></div>
            <div class="detail-item"><span class="detail-label">Eigentümer</span><span class="detail-value">Schweizerische Post (seit 2021)</span></div>
            <div class="detail-item"><span class="detail-label">Zertifikate</span><span class="detail-value">ISO 27001, SOC 2, HIPAA</span></div>
            <div class="detail-item"><span class="detail-label">Gratis-Plan</span><span class="detail-value">3 GB Speicher</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Web, Desktop, Mobile</span></div>
          </div>
          <a href="https://tresorit.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Mollie -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#0a0a0a15;color:#0a0a0a">M</div>
          <div class="card-info">
            <div class="card-name">Mollie <span class="card-flag">🇳🇱</span></div>
            <div class="card-company">Mollie B.V. · Amsterdam, Niederlande</div>
          </div>
        </div>
        <div class="card-desc">Europäischer Zahlungsdienstleister mit Fokus auf den europäischen Markt. Unterstützt 30+ europäische Zahlungsmethoden (iDEAL, Bancontact, SOFORT, Giropay etc.).</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-gray">PCI-DSS Level 1</span>
          <span class="badge badge-amber">EU-fokussiert</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Amsterdam, NL</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Pro Transaktion, kein Abo</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">PCI-DSS Level 1</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Stripe, PayPal</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2004</span></div>
            <div class="detail-item"><span class="detail-label">Zahlarten</span><span class="detail-value">30+ EU-Zahlungsmethoden</span></div>
            <div class="detail-item"><span class="detail-label">Bewertung</span><span class="detail-value">6,5 Mrd. USD (2021)</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">TLS, Tokenisierung, 3D Secure</span></div>
            <div class="detail-item"><span class="detail-label">Investoren</span><span class="detail-value">EQT (SE), Blackstone, TCV</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Keine Monatsgebühren</span></div>
          </div>
          <a href="https://www.mollie.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Wero -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#00b4d820;color:#00b4d8">W</div>
          <div class="card-info">
            <div class="card-name">Wero <span class="card-flag">🇪🇺</span></div>
            <div class="card-company">EPI Company SE · Brüssel, Belgien</div>
          </div>
        </div>
        <div class="card-desc">Europas eigene digitale Wallet für Sofortzahlungen, aufgebaut auf SEPA Instant. 50+ Mio. Nutzer (Feb 2026), E-Commerce-Akzeptanz live (FR, DE, BE). Kostenlos für Verbraucher.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-gray">PSD2-reguliert</span>
          <span class="badge badge-green">Kostenlos</span>
          <span class="badge badge-amber">100% EU-Banken</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Brüssel, Belgien</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis (Verbraucher)</span></div>
          <div class="metric"><span class="metric-label">Nutzer:</span> <span class="metric-value">50+ Mio. (Feb 2026)</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">PayPal, Apple Pay</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2020 (EPI) / Launch Juli 2024</span></div>
            <div class="detail-item"><span class="detail-label">Standard</span><span class="detail-value">SEPA Instant Credit Transfer</span></div>
            <div class="detail-item"><span class="detail-label">Länder</span><span class="detail-value">DE, FR, BE, LU (2025+)</span></div>
            <div class="detail-item"><span class="detail-label">Banken</span><span class="detail-value">16 Gründer + Commerzbank (Feb 2026)</span></div>
            <div class="detail-item"><span class="detail-label">NFC POS</span><span class="detail-value">Rollout 2026 (live in DE/FR/BE)</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">100% EU-Banken, kein Big Tech</span></div>
          </div>
          <a href="https://wero-wallet.eu" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Startpage -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#6573c320;color:#6573c3">S</div>
          <div class="card-info">
            <div class="card-name">Startpage <span class="card-flag">🇳🇱</span></div>
            <div class="card-company">Startpage B.V. · Den Haag, Niederlande</div>
          </div>
        </div>
        <div class="card-desc">Google-Suchergebnisse ohne Tracking. Speichert keine persönlichen Daten und bietet eine Anonymous-View-Proxy-Funktion. EuroPriSe-zertifiziert.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-purple">EuroPriSe</span>
          <span class="badge badge-green">Kostenlos</span>
          <span class="badge badge-red">US-Mehrheit</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Niederlande</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">EuroPriSe</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Google Search</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2006</span></div>
            <div class="detail-item"><span class="detail-label">Datenschutz</span><span class="detail-value">Keine Speicherung persönl. Daten</span></div>
            <div class="detail-item"><span class="detail-label">Feature</span><span class="detail-value">Anonymous View (Proxy-Browsing)</span></div>
            <div class="detail-item"><span class="detail-label">Achtung</span><span class="detail-value">US-Firma System1 = Mehrheitseigner</span></div>
            <div class="detail-item"><span class="detail-label">Alternative</span><span class="detail-value">Ecosia (DE) oder Qwant (FR)</span></div>
            <div class="detail-item"><span class="detail-label">Jurisdiktion</span><span class="detail-value">Niederl. Recht, EU DSGVO</span></div>
          </div>
          <a href="https://www.startpage.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Proton Drive -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#6d4aff20;color:#6d4aff">P</div>
          <div class="card-info">
            <div class="card-name">Proton Drive <span class="card-flag">🇨🇭</span></div>
            <div class="card-company">Proton AG · Genf, Schweiz</div>
          </div>
        </div>
        <div class="card-desc">Ende-zu-Ende-verschlüsselter Cloud-Speicher aus dem Proton-Ökosystem. Dateien werden clientseitig verschlüsselt — Proton hat keinen Zugriff auf deine Daten. Schweizer Datenschutzrecht.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-purple">E2E-verschlüsselt</span>
          <span class="badge badge-gray">ISO 27001</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Schweiz</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis (5 GB) / ab 4€/M</span></div>
          <div class="metric"><span class="metric-label">Ökosystem:</span> <span class="metric-value">Mail, VPN, Kalender, Pass, Sheets</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Google Drive, iCloud, Dropbox</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2014 (CERN-Forscher)</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">E2E + Zero-Access</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Selbstfinanziert, FONGIT-gefördert</span></div>
            <div class="detail-item"><span class="detail-label">Nutzer</span><span class="detail-value">100+ Millionen weltweit</span></div>
            <div class="detail-item"><span class="detail-label">Plattformen</span><span class="detail-value">Web, Win, Mac, Linux, iOS, Android</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Teil des größten EU-Privacy-Ökosystems</span></div>
          </div>
          <a href="https://proton.me/drive" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

    </div>
  </div>

  <!-- ENTWICKLUNG -->
  <div class="category-group visible" data-category="entwicklung">
    <div class="category-header">
      <div class="category-icon" style="background:#fee2e2">⚙️</div>
      <div class="category-title">Entwicklung & DevOps</div>
      <div class="category-replaces">Ersetzt GitHub, GitHub Actions, Auth0, Datadog</div>
    </div>
    <div class="cards-grid">

      <!-- Codeberg -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#2185d020;color:#2185d0">C</div>
          <div class="card-info">
            <div class="card-name">Codeberg <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Codeberg e.V. · Berlin, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Gemeinnützige Git-Hosting-Plattform eines deutschen Vereins. Community-eigentum, keine Werbung, keine Investoren. Zig und Gentoo sind hierher migriert.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-green">Nonprofit</span>
          <span class="badge badge-green">Kostenlos</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">EU</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Basis:</span> <span class="metric-value">Forgejo</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">GitHub, GitLab</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2018</span></div>
            <div class="detail-item"><span class="detail-label">Organisationsform</span><span class="detail-value">eingetragener Verein (e.V.)</span></div>
            <div class="detail-item"><span class="detail-label">CI/CD</span><span class="detail-value">Woodpecker CI + Forgejo Actions</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Spenden + Mitgliedsbeiträge</span></div>
            <div class="detail-item"><span class="detail-label">Projekte</span><span class="detail-value">Zig, Gentoo, uvm.</span></div>
            <div class="detail-item"><span class="detail-label">Features</span><span class="detail-value">Repos, Pages, CI, Weblate</span></div>
          </div>
          <a href="https://codeberg.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Woodpecker CI -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#4caf5020;color:#4caf50">W</div>
          <div class="card-info">
            <div class="card-name">Woodpecker CI <span class="card-flag">🇪🇺</span></div>
            <div class="card-company">Community-Projekt · Open Source</div>
          </div>
        </div>
        <div class="card-desc">Leichtgewichtige, community-gesteuerte CI/CD-Engine, geforkt von Drone CI. Offizielle CI/CD bei Codeberg. Braucht nur ~100 MB RAM.</div>
        <div class="badges">
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-green">Kostenlos</span>
          <span class="badge badge-amber">Community</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Hosting:</span> <span class="metric-value">Selbst-Hosting</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">Apache 2.0</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">GitHub Actions, Jenkins</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2019 (Fork von Drone CI)</span></div>
            <div class="detail-item"><span class="detail-label">RAM-Bedarf</span><span class="detail-value">~100 MB</span></div>
            <div class="detail-item"><span class="detail-label">Integration</span><span class="detail-value">GitHub, GitLab, Gitea, Forgejo</span></div>
            <div class="detail-item"><span class="detail-label">Governance</span><span class="detail-value">2 jährlich gewählte Maintainer</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Community, keine Firma</span></div>
            <div class="detail-item"><span class="detail-label">Secrets</span><span class="detail-value">Verschlüsselte Secret-Verwaltung</span></div>
          </div>
          <a href="https://woodpecker-ci.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- ZITADEL -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#00685620;color:#006856">Z</div>
          <div class="card-info">
            <div class="card-name">ZITADEL <span class="card-flag">🇨🇭</span></div>
            <div class="card-company">ZITADEL · St. Gallen, Schweiz</div>
          </div>
        </div>
        <div class="card-desc">Schweizer Open-Source-Identity-Infrastruktur mit SSO, MFA, Passkeys, OIDC, SAML und SCIM. Developer-first Alternative zu Auth0 und Okta.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-gray">ISO 27001</span>
          <span class="badge badge-gray">SOC 2</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">EU, CH, US, AU wählbar</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis-Tier / Pay-as-you-go</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">Apache 2.0</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Auth0, Okta</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2019</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">AES-256, TLS überall</span></div>
            <div class="detail-item"><span class="detail-label">Auth-Methoden</span><span class="detail-value">Passkeys, FIDO2, TOTP, OIDC, SAML</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">15,5M$ VC (kein Big Tech)</span></div>
            <div class="detail-item"><span class="detail-label">Zertifikate</span><span class="detail-value">ISO 27001, SOC 2 Type II</span></div>
            <div class="detail-item"><span class="detail-label">Selbst-Hosting</span><span class="detail-value">Ja, Docker / K8s</span></div>
          </div>
          <a href="https://zitadel.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Checkly -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#3ddc8420;color:#00a86b">✓</div>
          <div class="card-info">
            <div class="card-name">Checkly <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Checkly Inc. · Berlin, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Berliner Synthetic-Monitoring-Plattform basierend auf Playwright und OpenTelemetry. Monitoring-as-Code für API- und Browser-Checks mit CI/CD-Integration.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-gray">SOC 2</span>
          <span class="badge badge-blue">Teilw. Open Source</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Berlin, Deutschland</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / ab 24$/M</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">SOC 2 Type 1</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Datadog, Pingdom</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2018</span></div>
            <div class="detail-item"><span class="detail-label">Stack</span><span class="detail-value">Playwright, OpenTelemetry</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">32,3M$ (Balderton, Accel, CRV)</span></div>
            <div class="detail-item"><span class="detail-label">Open Source</span><span class="detail-value">CLI + Terraform Provider</span></div>
            <div class="detail-item"><span class="detail-label">Konzept</span><span class="detail-value">Monitoring-as-Code</span></div>
            <div class="detail-item"><span class="detail-label">Alternative</span><span class="detail-value">Grafana (AGPL, schwed. Gründer)</span></div>
          </div>
          <a href="https://www.checklyhq.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

    </div>
  </div>

  <!-- WEB & ANALYTICS -->
  <div class="category-group visible" data-category="web">
    <div class="category-header">
      <div class="category-icon" style="background:#fce7f3">📊</div>
      <div class="category-title">Web, Medien & KI</div>
      <div class="category-replaces">Ersetzt Google Analytics, Mailchimp, ChatGPT, Google Search</div>
    </div>
    <div class="cards-grid">

      <!-- Plausible -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#5850ec20;color:#5850ec">P</div>
          <div class="card-info">
            <div class="card-name">Plausible Analytics <span class="card-flag">🇪🇪</span></div>
            <div class="card-company">Plausible Insights OÜ · Tartu, Estland</div>
          </div>
        </div>
        <div class="card-desc">Leichtgewichtiges, cookiefreies Web-Analytics. Kein Cookie-Banner nötig. Von einem Datenschutzanwalt unabhängig als DSGVO-konform bestätigt. 100% bootstrapped.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-green">Cookiefrei</span>
          <span class="badge badge-amber">Bootstrapped</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Deutschland (Hetzner)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Ab 9€/M / Self-Host gratis</span></div>
          <div class="metric"><span class="metric-label">Cookies:</span> <span class="metric-value">Keine</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Google Analytics</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2018</span></div>
            <div class="detail-item"><span class="detail-label">Lizenz</span><span class="detail-value">AGPL</span></div>
            <div class="detail-item"><span class="detail-label">Datenerhebung</span><span class="detail-value">Keine persönl. Daten, IP gehasht</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">100% bootstrapped, keine VC</span></div>
            <div class="detail-item"><span class="detail-label">Hosting</span><span class="detail-value">Hetzner Falkenstein, Deutschland</span></div>
            <div class="detail-item"><span class="detail-label">Script-Größe</span><span class="detail-value">< 1 KB</span></div>
          </div>
          <a href="https://plausible.io" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Keila -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#e91e6320;color:#e91e63">K</div>
          <div class="card-info">
            <div class="card-name">Keila <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Pentacent · Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Open-Source-Newsletter-Tool aus Deutschland. Kampagnen-Management, Anmeldeformulare und SMTP-Integration. EU-gehostete Cloud-Option auf europäischer Infrastruktur.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-amber">100% EU-Hosting</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Deutschland, Frankreich</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Self-Host gratis / ab 9,60€/M</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">AGPL v3</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Mailchimp, Brevo</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">~2020</span></div>
            <div class="detail-item"><span class="detail-label">Stack</span><span class="detail-value">Elixir (Hochperformant)</span></div>
            <div class="detail-item"><span class="detail-label">Cloud</span><span class="detail-value">100% EU-Infrastruktur</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">Unabhängig, kein VC</span></div>
            <div class="detail-item"><span class="detail-label">Integration</span><span class="detail-value">SMTP, SES, Sendgrid</span></div>
            <div class="detail-item"><span class="detail-label">Selbst-Hosting</span><span class="detail-value">Ja, Docker</span></div>
          </div>
          <a href="https://www.keila.io" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Mistral AI -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#ff720020;color:#ff7200">M</div>
          <div class="card-info">
            <div class="card-name">Mistral AI <span class="card-flag">🇫🇷</span></div>
            <div class="card-company">Mistral AI SAS · Paris, Frankreich</div>
          </div>
        </div>
        <div class="card-desc">Europas führendes KI-Unternehmen mit Frontier-LLMs aus Paris. Open-Weight-Modelle (Mistral, Mixtral), starke mehrsprachige Fähigkeiten und Enterprise Self-Hosting. Baut EU-eigene Rechenzentren in Frankreich und Schweden (2026).</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-blue">Teilw. Open Source</span>
          <span class="badge badge-gray">ISO 27001</span>
          <span class="badge badge-gray">SOC 2</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Paris, Frankreich</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Gratis / Pro 14,99$/M</span></div>
          <div class="metric"><span class="metric-label">Zertifikate:</span> <span class="metric-value">ISO 27001, SOC 2, ANSSI</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">ChatGPT, OpenAI API</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">April 2023</span></div>
            <div class="detail-item"><span class="detail-label">Finanzierung</span><span class="detail-value">$3 Mrd. gesamt + $830M Kredit (März 2026)</span></div>
            <div class="detail-item"><span class="detail-label">Modelle</span><span class="detail-value">Mistral, Mixtral, Le Chat</span></div>
            <div class="detail-item"><span class="detail-label">Verschlüsselung</span><span class="detail-value">AES-256, optionale Kundenschlüssel</span></div>
            <div class="detail-item"><span class="detail-label">Investor</span><span class="detail-value">ASML (NL, 11%), Bpifrance (FR)</span></div>
            <div class="detail-item"><span class="detail-label">Self-Hosting</span><span class="detail-value">Enterprise On-Premises möglich</span></div>
          </div>
          <a href="https://mistral.ai" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Ghost -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#15171a20;color:#15171a">G</div>
          <div class="card-info">
            <div class="card-name">Ghost <span class="card-flag">🌍</span></div>
            <div class="card-company">Ghost Foundation (Nonprofit) · Remote</div>
          </div>
        </div>
        <div class="card-desc">Gemeinnützige Open-Source-Publishing-Plattform. Memberships, Newsletter und Fediverse-Integration. 0% Umsatzbeteiligung. Ideale Basis für Selbst-Hosting in der EU.</div>
        <div class="badges">
          <span class="badge badge-blue">Open Source</span>
          <span class="badge badge-green">Nonprofit</span>
          <span class="badge badge-green">MIT-Lizenz</span>
          <span class="badge badge-amber">0% Revenue Share</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Self-Host:</span> <span class="metric-value">Ja (EU möglich)</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Self-Host gratis / ab 15$/M</span></div>
          <div class="metric"><span class="metric-label">Lizenz:</span> <span class="metric-value">MIT</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">WordPress, Substack</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2013 (Kickstarter)</span></div>
            <div class="detail-item"><span class="detail-label">Organisationsform</span><span class="detail-value">Nonprofit, selbsttragend</span></div>
            <div class="detail-item"><span class="detail-label">Features</span><span class="detail-value">Newsletter, Memberships, Fediverse</span></div>
            <div class="detail-item"><span class="detail-label">Revenue Share</span><span class="detail-value">0% — behalt alles</span></div>
            <div class="detail-item"><span class="detail-label">Version</span><span class="detail-value">6.0+ (ActivityPub, Aug 2025)</span></div>
            <div class="detail-item"><span class="detail-label">Hinweis</span><span class="detail-value">Nicht EU, aber ideal self-hostbar</span></div>
          </div>
          <a href="https://ghost.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Qobuz -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#1a73e820;color:#1a73e8">Q</div>
          <div class="card-info">
            <div class="card-name">Qobuz <span class="card-flag">🇫🇷</span></div>
            <div class="card-company">Xandrie SA (Thébaud Group) · Paris, Frankreich</div>
          </div>
        </div>
        <div class="card-desc">Französischer Hi-Res-Musikstreaming-Dienst mit Studio-Qualität bis 24-Bit/192 kHz FLAC. Zahlt Künstlern ca. 5x mehr pro Stream als Spotify. Kein KI-generierter Füll-Content.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-purple">Hi-Res Audio</span>
          <span class="badge badge-amber">Privat FR-Besitz</span>
          <span class="badge badge-green">Faire Vergütung</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">HQ:</span> <span class="metric-value">Paris, Frankreich</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Ab 4,99$/M (Student)</span></div>
          <div class="metric"><span class="metric-label">Verfügbar:</span> <span class="metric-value">26 Länder</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Spotify, Apple Music</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2007</span></div>
            <div class="detail-item"><span class="detail-label">Audioqualität</span><span class="detail-value">24-Bit/192 kHz FLAC (Studio)</span></div>
            <div class="detail-item"><span class="detail-label">Eigentümer</span><span class="detail-value">Xandrie SA / Nabuboto (FR privat)</span></div>
            <div class="detail-item"><span class="detail-label">Künstler</span><span class="detail-value">~5x mehr pro Stream als Spotify</span></div>
            <div class="detail-item"><span class="detail-label">CNIL</span><span class="detail-value">Registriert Nr. 1263952</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">Hi-Res Downloads kaufbar</span></div>
          </div>
          <a href="https://www.qobuz.com" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

      <!-- Ecosia -->
      <div class="card">
        <div class="card-top">
          <div class="card-logo" style="background:#4a9e3f20;color:#4a9e3f">E</div>
          <div class="card-info">
            <div class="card-name">Ecosia <span class="card-flag">🇩🇪</span></div>
            <div class="card-company">Ecosia GmbH · Berlin, Deutschland</div>
          </div>
        </div>
        <div class="card-desc">Suchmaschine, die mit Werbeeinnahmen Bäume pflanzt. Hat zusammen mit Qwant einen eigenen europäischen Suchindex live gebracht (Aug 2025). Keine Nutzerprofile, keine Datenweitergabe.</div>
        <div class="badges">
          <span class="badge badge-green">DSGVO</span>
          <span class="badge badge-green">Nonprofit</span>
          <span class="badge badge-green">Zero Tracking</span>
          <span class="badge badge-amber">EU-Suchindex</span>
        </div>
        <div class="metrics">
          <div class="metric"><span class="metric-label">Server:</span> <span class="metric-value">Europa</span></div>
          <div class="metric"><span class="metric-label">Preis:</span> <span class="metric-value">Kostenlos</span></div>
          <div class="metric"><span class="metric-label">Impact:</span> <span class="metric-value">250 Mio. Bäume gepflanzt</span></div>
          <div class="metric"><span class="metric-label">Ersetzt:</span> <span class="metric-value">Google Search</span></div>
        </div>
        <div class="card-details">
          <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">Gegründet</span><span class="detail-value">2009</span></div>
            <div class="detail-item"><span class="detail-label">Datenschutz</span><span class="detail-value">Keine Nutzerprofile, kein Tracking</span></div>
            <div class="detail-item"><span class="detail-label">Suchindex</span><span class="detail-value">EUSP (mit Qwant), Bing-Fallback</span></div>
            <div class="detail-item"><span class="detail-label">Nutzer</span><span class="detail-value">20+ Millionen monatlich</span></div>
            <div class="detail-item"><span class="detail-label">Rechtsform</span><span class="detail-value">Steward-Ownership (nicht verkaufbar)</span></div>
            <div class="detail-item"><span class="detail-label">Besonderheit</span><span class="detail-value">100% grüne Energie, B Corp</span></div>
          </div>
          <a href="https://www.ecosia.org" target="_blank" rel="noopener" class="card-link">Website besuchen →</a>
        </div>
        <div class="expand-hint"><span class="hint-more">Details anzeigen ↓</span><span class="hint-less">Weniger ↑</span></div>
      </div>

    </div>
  </div>

</section>

<!-- Legend -->
<section class="legend" id="about">
  <h2 class="section-title">Bewertungskriterien</h2>
  <div class="legend-grid">
    <div class="legend-item">
      <div class="legend-icon">🏛</div>
      <div class="legend-text">
        <h4>Serverstandort</h4>
        <p>Wo werden die Daten physisch gespeichert? EU/EWR/EFTA bevorzugt.</p>
      </div>
    </div>
    <div class="legend-item">
      <div class="legend-icon">🔒</div>
      <div class="legend-text">
        <h4>Verschlüsselung</h4>
        <p>Ende-zu-Ende, Zero-Knowledge, At-Rest und In-Transit Verschlüsselung.</p>
      </div>
    </div>
    <div class="legend-item">
      <div class="legend-icon">📜</div>
      <div class="legend-text">
        <h4>Zertifizierungen</h4>
        <p>ISO 27001, SOC 2, BSI C5, PCI-DSS, EuroPriSe und weitere.</p>
      </div>
    </div>
    <div class="legend-item">
      <div class="legend-icon">💰</div>
      <div class="legend-text">
        <h4>Finanzielle Unabhängigkeit</h4>
        <p>Keine Abhängigkeit von Google, Microsoft, Amazon & Co. Selbstfinanziert bevorzugt.</p>
      </div>
    </div>
    <div class="legend-item">
      <div class="legend-icon">🔓</div>
      <div class="legend-text">
        <h4>Open Source</h4>
        <p>Quellcode einsehbar und überprüfbar. Idealerweise unter einer freien Lizenz.</p>
      </div>
    </div>
    <div class="legend-item">
      <div class="legend-icon">🇪🇺</div>
      <div class="legend-text">
        <h4>DSGVO-Konformität</h4>
        <p>Vollständige Einhaltung der EU-Datenschutz-Grundverordnung.</p>
      </div>
    </div>
  </div>
</section>

<!-- Comparison Table -->
<section class="compare-section" id="compare">
  <h2 class="section-title">Schnellvergleich</h2>
  <div class="compare-table-wrap">
    <table>
      <thead>
        <tr>
          <th>Tool</th>
          <th>Land</th>
          <th>Open Source</th>
          <th>DSGVO</th>
          <th>E2E</th>
          <th>Self-Host</th>
          <th>Selbstfinanziert</th>
          <th>Ersetzt</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><a href="https://tuta.com" target="_blank"><strong>Tuta Mail</strong></a></td><td>🇩🇪 DE</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td>Gmail</td></tr>
        <tr><td><a href="https://jitsi.org" target="_blank"><strong>Jitsi Meet</strong></a></td><td>🇫🇷 FR</td><td class="check">Ja</td><td class="check">Ja</td><td class="partial">Opt.</td><td class="check">Ja</td><td class="check">Comm.</td><td>Zoom</td></tr>
        <tr><td><a href="https://element.io" target="_blank"><strong>Element</strong></a></td><td>🇬🇧 UK</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="partial">VC</td><td>Slack</td></tr>
        <tr><td><a href="https://www.onlyoffice.com" target="_blank"><strong>OnlyOffice</strong></a></td><td>🇱🇻 LV</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="partial">Privat</td><td>MS Office</td></tr>
        <tr><td><a href="https://www.openproject.org" target="_blank"><strong>OpenProject</strong></a></td><td>🇩🇪 DE</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">Ja</td><td>Asana</td></tr>
        <tr><td><a href="https://organicmaps.app" target="_blank"><strong>Organic Maps</strong></a></td><td>🇪🇺 EU</td><td class="check">Ja</td><td class="check">Ja</td><td>n/a</td><td>Offline</td><td class="partial">EU-Fond</td><td>Google Maps</td></tr>
        <tr><td><a href="https://mullvad.net" target="_blank"><strong>Mullvad VPN</strong></a></td><td>🇸🇪 SE</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td>NordVPN</td></tr>
        <tr><td><a href="https://quad9.net" target="_blank"><strong>Quad9</strong></a></td><td>🇨🇭 CH</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">DoT/DoH</td><td class="cross">Nein</td><td class="check">Nonprofit</td><td>Google DNS</td></tr>
        <tr><td><a href="https://www.heylogin.com" target="_blank"><strong>heylogin</strong></a></td><td>🇩🇪 DE</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">HW-E2E</td><td class="cross">Nein</td><td class="partial">Angels</td><td>1Password</td></tr>
        <tr><td><a href="https://vivaldi.com" target="_blank"><strong>Vivaldi</strong></a></td><td>🇳🇴 NO</td><td class="partial">Teilw.</td><td class="check">Ja</td><td class="partial">Sync</td><td class="cross">Nein</td><td class="check">Ja</td><td>Chrome</td></tr>
        <tr><td><a href="https://www.hetzner.com" target="_blank"><strong>Hetzner</strong></a></td><td>🇩🇪 DE</td><td class="cross">Nein</td><td class="check">Ja</td><td class="cross">Nein</td><td>n/a</td><td class="check">Ja</td><td>AWS</td></tr>
        <tr><td><a href="https://tresorit.com" target="_blank"><strong>Tresorit</strong></a></td><td>🇨🇭 CH</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="partial">Post CH</td><td>Dropbox</td></tr>
        <tr><td><a href="https://www.mollie.com" target="_blank"><strong>Mollie</strong></a></td><td>🇳🇱 NL</td><td class="cross">Nein</td><td class="check">Ja</td><td class="cross">Nein</td><td class="cross">Nein</td><td class="partial">VC</td><td>Stripe</td></tr>
        <tr><td><a href="https://www.startpage.com" target="_blank"><strong>Startpage</strong></a></td><td>🇳🇱 NL</td><td class="cross">Nein</td><td class="check">Ja</td><td>n/a</td><td class="cross">Nein</td><td class="cross">US-Eigner</td><td>Google Search</td></tr>
        <tr><td><a href="https://codeberg.org" target="_blank"><strong>Codeberg</strong></a></td><td>🇩🇪 DE</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">e.V.</td><td>GitHub</td></tr>
        <tr><td><a href="https://woodpecker-ci.org" target="_blank"><strong>Woodpecker CI</strong></a></td><td>🇪🇺 EU</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">Comm.</td><td>GH Actions</td></tr>
        <tr><td><a href="https://zitadel.com" target="_blank"><strong>ZITADEL</strong></a></td><td>🇨🇭 CH</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="partial">VC</td><td>Auth0</td></tr>
        <tr><td><a href="https://www.checklyhq.com" target="_blank"><strong>Checkly</strong></a></td><td>🇩🇪 DE</td><td class="partial">Teilw.</td><td class="check">Ja</td><td class="cross">Nein</td><td class="cross">Nein</td><td class="partial">VC</td><td>Datadog</td></tr>
        <tr><td><a href="https://plausible.io" target="_blank"><strong>Plausible</strong></a></td><td>🇪🇪 EE</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">Ja</td><td>GA</td></tr>
        <tr><td><a href="https://www.keila.io" target="_blank"><strong>Keila</strong></a></td><td>🇩🇪 DE</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">Ja</td><td>Mailchimp</td></tr>
        <tr><td><a href="https://mistral.ai" target="_blank"><strong>Mistral AI</strong></a></td><td>🇫🇷 FR</td><td class="partial">Teilw.</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Enterprise</td><td class="partial">VC</td><td>ChatGPT</td></tr>
        <tr><td><a href="https://cryptpad.org" target="_blank"><strong>CryptPad</strong></a></td><td>🇫🇷 FR</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td>Notion</td></tr>
        <tr><td><a href="https://wero-wallet.eu" target="_blank"><strong>Wero</strong></a></td><td>🇪🇺 BE</td><td class="cross">Nein</td><td class="check">Ja</td><td class="cross">Nein</td><td class="cross">Nein</td><td class="check">EU-Banken</td><td>PayPal</td></tr>
        <tr><td><a href="https://www.qobuz.com" target="_blank"><strong>Qobuz</strong></a></td><td>🇫🇷 FR</td><td class="cross">Nein</td><td class="check">Ja</td><td class="cross">Nein</td><td class="cross">Nein</td><td class="check">Ja</td><td>Spotify</td></tr>
        <tr><td><a href="https://ghost.org" target="_blank"><strong>Ghost</strong></a></td><td>🌍</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td class="check">Nonprofit</td><td>WordPress</td></tr>
        <tr><td><a href="https://anytype.io" target="_blank"><strong>Anytype</strong></a></td><td>🇩🇪 DE/CH</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="partial">Lokal</td><td class="partial">VC</td><td>Notion</td></tr>
        <tr><td><a href="https://localsend.org" target="_blank"><strong>LocalSend</strong></a></td><td>🇪🇺 EU</td><td class="check">Ja</td><td class="check">Ja</td><td class="partial">TLS</td><td class="partial">P2P</td><td class="check">Comm.</td><td>AirDrop</td></tr>
        <tr><td><a href="https://proton.me/drive" target="_blank"><strong>Proton Drive</strong></a></td><td>🇨🇭 CH</td><td class="check">Ja</td><td class="check">Ja</td><td class="check">Ja</td><td class="cross">Nein</td><td class="check">Ja</td><td>Google Drive</td></tr>
        <tr><td><a href="https://www.ecosia.org" target="_blank"><strong>Ecosia</strong></a></td><td>🇩🇪 DE</td><td class="cross">Nein</td><td class="check">Ja</td><td>n/a</td><td class="cross">Nein</td><td class="check">Steward</td><td>Google Search</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Inline Footer -->
<div class="inline-footer">
  <strong>EU Digital Stack</strong> — Zusammengestellt von <a href="https://outoftheb-ox.de" target="_blank" rel="noopener">Pat Preilowski</a> von <a href="https://outoftheb-ox.de" target="_blank" rel="noopener">Out Of The Box Science</a> · Stand: April 2026 · Keine Affiliate-Links · Kein Tracking
</div>

      </div>
    `;

    this.initInteractivity();
  }

  initInteractivity() {
    const root = this.shadowRoot;

    // Card toggle
    root.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't toggle when clicking a link
        if (e.target.closest('a')) return;
        card.classList.toggle('expanded');
      });
    });

    // Category filter
    root.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        root.querySelectorAll('.category-group').forEach(group => {
          group.classList.toggle('visible', cat === 'all' || group.dataset.category === cat);
        });
      });
    });

    // Search
    const searchInput = root.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase().trim();
        // Reset category filter
        root.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        root.querySelector('.cat-btn[data-cat="all"]').classList.add('active');
        root.querySelectorAll('.category-group').forEach(g => g.classList.add('visible'));

        root.querySelectorAll('.card').forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = q === '' || text.includes(q) ? '' : 'none';
        });
      });
    }
  }
}

customElements.define('eu-digital-stack', EuDigitalStack);
