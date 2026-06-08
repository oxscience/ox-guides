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
  /* Erbt OX-Tokens vom :root: --ox-font, --ox-size-*, --ox-line-* */
  --bg:#0f0f11;--surface:#1a1a1f;--surface-hover:#222228;
  --border:rgba(255,255,255,0.06);--border-hover:rgba(255,255,255,0.12);
  --text:#e8e6e3;--text-secondary:#8e8c89;--text-muted:#666;--text-dim:#555;
  --primary:#6d8cff;--primary-light:#1e1b4b;
  --green:#10b981;--green-bg:rgba(16,185,129,0.08);
  --white:#fff;
  display:block;font-family:var(--ox-font);background:var(--bg);color:var(--text);line-height:var(--ox-line-body,1.6);
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:880px;margin:0 auto;padding:0 24px 64px}

/* === HERO (wie Home/Campus: Gradient-Label, Glow, Mono-H1) === */
.hero{position:relative;text-align:center;padding:var(--ox-hero-padding)}
.hero::before{
  content:'';position:absolute;top:10%;left:50%;transform:translateX(-50%);
  width:600px;height:400px;
  background:radial-gradient(ellipse at center, rgba(109,140,255,0.06) 0%, rgba(167,139,250,0.03) 40%, transparent 70%);
  pointer-events:none;
}
.hero__inner{position:relative;z-index:1}
.hero__label{
  font-size:var(--ox-size-label);font-weight:600;letter-spacing:0.1em;
  text-transform:uppercase;margin:0 0 16px;
  background:linear-gradient(135deg,#6d8cff 0%,#a78bfa 50%,#6d8cff 100%);
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
}
h1{font-family:var(--ox-font-mono);font-size:var(--ox-size-hero);font-weight:800;color:var(--white);margin:0 0 20px;letter-spacing:-0.03em;line-height:var(--ox-line-heading,1.15)}
.subtitle{color:var(--text-secondary);font-size:var(--ox-size-sub);max-width:700px;margin:0 auto;line-height:var(--ox-line-body,1.6)}

.tool-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:16px;
  max-width:640px;
  margin:0 auto;
}

.tool-card{
  background:var(--surface);border:1px solid var(--border);border-radius:12px;
  padding:28px;display:flex;flex-direction:column;
  gap:16px;transition:border-color 0.2s,background 0.2s;
  text-decoration:none;color:inherit;cursor:pointer;height:100%;
}
.tool-card:hover{border-color:var(--border-hover);background:var(--surface-hover);text-decoration:none}

.tool-icon{font-size:var(--ox-size-h2);margin-bottom:4px}
.tool-title{font-size:var(--ox-size-h3);font-weight:700;color:var(--white);line-height:1.3}
.tool-desc{font-size:var(--ox-size-small);color:var(--text-secondary);line-height:1.55;flex:1}

.tool-tags{display:flex;flex-wrap:wrap;gap:6px}
.tool-tag{
  font-size:var(--ox-size-label);padding:3px 8px;border-radius:4px;
  background:rgba(109,140,255,0.08);color:var(--primary);
  font-weight:500;
}

.tool-meta{
  display:flex;align-items:center;justify-content:space-between;
  font-size:var(--ox-size-small);color:var(--text-muted);margin-top:auto;
}
.tool-meta-badge{
  display:inline-block;padding:3px 10px;border-radius:12px;font-size:var(--ox-size-label);font-weight:600;
}
.badge-free{background:var(--green-bg);color:var(--green)}
.badge-open{background:rgba(109,140,255,0.08);color:var(--primary)}
.badge-webapp{background:rgba(251,191,36,0.12);color:#fbbf24}
.badge-chrome{background:rgba(59,130,246,0.12);color:#3b82f6}

.tool-cta{color:var(--primary);font-weight:600;font-size:var(--ox-size-small)}

.footer{
  text-align:center;margin-top:64px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:var(--ox-size-small);
}

@media(max-width:749px){
  .container{padding:32px 16px 48px}
  .tool-grid{grid-template-columns:1fr;gap:12px}
}
      </style>

      <div class="container">
        <section class="hero">
          <div class="hero__inner">
            <p class="hero__label">OX Tools</p>
            <h1>Kostenlose Werkzeuge</h1>
            <p class="subtitle">Open-Source-Werkzeuge f&uuml;r Wissenschaft, Lehre und Tech. Kostenlos nutzen oder selbst hosten.</p>
          </div>
        </section>

        <div class="tool-grid">

          <a href="https://citemetrics.outoftheb-ox.de" class="tool-card">
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
              <span><span class="tool-meta-badge badge-free">Kostenlos</span> <span class="tool-meta-badge badge-open">Open Source</span> <span class="tool-meta-badge badge-webapp">Web-App</span> <span class="tool-meta-badge badge-chrome">Chrome Extension</span></span>
              <span class="tool-cta">Loslegen!</span>
            </div>
          </a>

        </div>

      </div>
    `;
  }
}

customElements.define('ox-tools-overview', OxToolsOverview);
