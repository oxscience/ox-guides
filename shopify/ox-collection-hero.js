class OxCollectionHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const handle = this.getAttribute('data-handle') || this.getHandleFromPath();
    const data = OxCollectionHero.CONFIG[handle];

    if (!data) {
      this.style.display = 'none';
      return;
    }

    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  /* Erbt OX-Tokens vom :root (ox-custom-css.liquid): --ox-font, --ox-size-*, --ox-hero-padding */
  --bg:#0f0f11;
  --text:#e8e6e3;
  --muted:#8e8c89;
  --gradient:linear-gradient(135deg,#6d8cff 0%,#a78bfa 50%,#6d8cff 100%);
  display:block;
  font-family:var(--ox-font);
  background:var(--bg);
  color:var(--text);
  line-height:var(--ox-line-body,1.6);
  -webkit-font-smoothing:antialiased;
}
.hero{
  position:relative;
  text-align:center;
  padding:var(--ox-hero-padding);
  max-width:1200px;
  margin:0 auto;
}
.hero::before{
  content:'';
  position:absolute;
  top:10%;
  left:50%;
  transform:translateX(-50%);
  width:600px;
  height:400px;
  background:radial-gradient(ellipse at center, rgba(109,140,255,0.06) 0%, rgba(167,139,250,0.03) 40%, transparent 70%);
  pointer-events:none;
}
.inner{position:relative;z-index:1}

.label{
  font-size:var(--ox-size-label);
  font-weight:600;
  letter-spacing:0.1em;
  text-transform:uppercase;
  margin:0 0 16px;
  background:var(--gradient);
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
}

h1{
  font-family:var(--ox-font-mono);
  font-size:var(--ox-size-hero);
  font-weight:800;
  letter-spacing:-0.03em;
  line-height:var(--ox-line-heading,1.15);
  margin:0 0 20px;
  color:var(--text);
}
.gradient{
  background:var(--gradient);
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sub{
  font-size:var(--ox-size-sub);
  color:var(--muted);
  max-width:700px;
  margin:0 auto;
  line-height:var(--ox-line-body,1.6);
}
      </style>
      <section class="hero">
        <div class="inner">
          <p class="label">${data.label}</p>
          <h1>${data.headline}</h1>
          <p class="sub">${data.sub}</p>
        </div>
      </section>
    `;
  }

  getHandleFromPath() {
    const match = window.location.pathname.match(/\/collections\/([^\/\?#]+)/);
    return match ? match[1] : '';
  }
}

OxCollectionHero.CONFIG = {
  'symposium': {
    label: 'Live-Symposien',
    headline: 'Evidenzbasiert.<br><span class="gradient">Industrieunabhängig.</span>',
    sub: 'Expert:innen-Vorträge aus Science, Health & Tech. Maximale Informationsdichte, null Industrie-Pitches.'
  },
  'webinar': {
    label: 'Webinar-Serie',
    headline: 'Für Wissensarbeiter,<br>die <span class="gradient">mehr wollen als Hype.</span>',
    sub: 'Live-Sessions zu KI-Tools, Automatisierung und Wissensarbeit. Geprüft, nicht gehypt.'
  }
};

customElements.define('ox-collection-hero', OxCollectionHero);
