class OxToolsOverview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0a0a0a;--surface:#141414;--surface-hover:#1a1a1a;
  --border:#222;--border-hover:#444;
  --text:#e0e0e0;--text-secondary:#999;--text-muted:#666;--text-dim:#555;
  --primary:#6366f1;--primary-light:#1e1b4b;
  --green:#10b981;--green-bg:rgba(16,185,129,0.08);
  --white:#fff;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  --mono:'SF Mono','Fira Code',monospace;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:880px;margin:0 auto;padding:48px 24px 64px}

h1{font-size:32px;font-weight:700;color:var(--white);text-align:center;margin-bottom:8px;letter-spacing:-0.02em}
.subtitle{text-align:center;color:var(--text-secondary);font-size:16.8px;margin-bottom:16px}

.nav-links{text-align:center;margin-bottom:48px;font-size:14.4px}
.nav-links a{color:var(--primary);text-decoration:none;padding:6px 14px;border:1px solid #333;border-radius:20px}
.nav-links a:hover{border-color:var(--primary);text-decoration:none}

.tool-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px;
}

.tool-card{
  background:var(--surface);border:1px solid var(--border);border-radius:12px;
  padding:28px;display:flex;flex-direction:column;
  gap:16px;transition:border-color 0.2s,background 0.2s;
  text-decoration:none;color:inherit;cursor:pointer;height:100%;
}
.tool-card:hover{border-color:var(--border-hover);background:var(--surface-hover);text-decoration:none}

.tool-icon{font-size:32px;margin-bottom:4px}
.tool-title{font-size:19.2px;font-weight:700;color:var(--white);line-height:1.3}
.tool-desc{font-size:14.4px;color:var(--text-secondary);line-height:1.55;flex:1}

.tool-tags{display:flex;flex-wrap:wrap;gap:6px}
.tool-tag{
  font-size:11.2px;padding:3px 8px;border-radius:4px;
  background:rgba(99,102,241,0.08);color:var(--primary);
  font-family:var(--mono);
}

.tool-meta{
  display:flex;align-items:center;justify-content:space-between;
  font-size:13.6px;color:var(--text-muted);margin-top:auto;
}
.tool-meta-badge{
  display:inline-block;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;
}
.badge-free{background:var(--green-bg);color:var(--green)}
.badge-open{background:rgba(99,102,241,0.08);color:var(--primary)}

.tool-cta{color:var(--primary);font-weight:600;font-size:14.4px}

.footer{
  text-align:center;margin-top:64px;padding-top:32px;
  border-top:1px solid #1a1a1a;color:var(--text-dim);font-size:13.6px;
}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:25.6px}
  .tool-grid{grid-template-columns:1fr;gap:12px}
}
      </style>

      <div class="container">
        <h1>Kostenlose OX Tools</h1>
        <p class="subtitle">Open-Source-Werkzeuge f&uuml;r Health Professionals. Kostenlos nutzen oder selbst hosten.</p>
        <div class="nav-links"><a href="/pages/kostenlose-ox-guides">&larr; Guides ansehen</a></div>

        <div class="tool-grid">

          <a href="https://briefing.outoftheb-ox.de" class="tool-card" target="_blank" rel="noopener">
            <div class="tool-icon">&#129504;</div>
            <div class="tool-title">OX Briefing</div>
            <div class="tool-desc">Morning-Briefing-Dashboard f&uuml;r Health Professionals. Pullt automatisch aktuelle Studien, Leitlinien, KI-Tools, Patienten-Themen und Datenschutz-Meldungen &mdash; personalisiert nach Fachgebiet.</div>
            <div class="tool-tags">
              <span class="tool-tag">PubMed</span>
              <span class="tool-tag">OpenAlex</span>
              <span class="tool-tag">Semantic Scholar</span>
              <span class="tool-tag">RSS</span>
              <span class="tool-tag">Flask + HTMX</span>
            </div>
            <div class="tool-meta">
              <span><span class="tool-meta-badge badge-free">Kostenlos</span> <span class="tool-meta-badge badge-open">Open Source</span></span>
              <span class="tool-cta">Playground &rarr;</span>
            </div>
          </a>

          <a href="https://github.com/oxscience/citemetrics" class="tool-card" target="_blank" rel="noopener">
            <div class="tool-icon">&#128269;</div>
            <div class="tool-title">CiteMetrics</div>
            <div class="tool-desc">Automatische Quellenpr&uuml;fung f&uuml;r wissenschaftliche Texte. Verifiziert Zitate gegen PubMed, CrossRef und Semantic Scholar &mdash; erkennt falsche DOIs, fehlende Autoren und erfundene Referenzen.</div>
            <div class="tool-tags">
              <span class="tool-tag">PubMed</span>
              <span class="tool-tag">CrossRef</span>
              <span class="tool-tag">Semantic Scholar</span>
              <span class="tool-tag">Python</span>
            </div>
            <div class="tool-meta">
              <span><span class="tool-meta-badge badge-free">Kostenlos</span> <span class="tool-meta-badge badge-open">Open Source</span></span>
              <span class="tool-cta">GitHub &rarr;</span>
            </div>
          </a>

        </div>

        <div class="footer">
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Ma&szlig;geschneiderte digitale Werkzeuge f&uuml;r Wissensarbeit.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-tools-overview', OxToolsOverview);
