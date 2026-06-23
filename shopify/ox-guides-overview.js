class OxGuidesOverview extends HTMLElement {
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

.section-label{
  font-size:var(--ox-size-label);font-weight:600;text-transform:uppercase;letter-spacing:0.08em;
  color:var(--text-dim);margin-top:48px;margin-bottom:16px;padding-left:4px;
  scroll-margin-top:24px;
}
.section-label:first-of-type{margin-top:0}

.guide-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px;
}

.guide-card{
  background:var(--surface);border:1px solid var(--border);border-radius:12px;
  padding:24px;display:flex;flex-direction:column;
  gap:12px;transition:border-color 0.2s,background 0.2s,opacity 0.3s ease,transform 0.3s ease;
  text-decoration:none;color:inherit;cursor:pointer;height:100%;
  position:relative;opacity:0;transform:translateY(16px);
}
.guide-card:hover{border-color:var(--border-hover);background:var(--surface-hover);text-decoration:none}
.guide-card.is-visible{opacity:1;transform:none}
.guide-card::after{
  content:"";position:absolute;inset:0;border-radius:12px;
  pointer-events:none;opacity:0;transition:opacity 500ms;
  background:radial-gradient(circle,rgba(99,102,241,0.15),transparent 65%);
  mask-image:radial-gradient(500px circle at var(--mouse-x,50%) var(--mouse-y,50%),black,transparent 70%);
}
.guide-card:hover::after{opacity:1}

.guide-info{flex:1}
.guide-title{font-size:var(--ox-size-h3);font-weight:600;color:var(--white);margin-bottom:8px;line-height:1.3}
.guide-desc{font-size:var(--ox-size-small);color:var(--text-secondary);line-height:1.5}

.guide-meta{font-size:var(--ox-size-small);color:var(--primary);font-weight:500;margin-top:auto}

.badge-new{
  display:inline-block;background:var(--primary);color:var(--white);
  font-size:var(--ox-size-label);font-weight:700;padding:2px 8px;border-radius:4px;
  text-transform:uppercase;letter-spacing:0.05em;margin-left:8px;vertical-align:middle;
}

.big-guide{
  display:block;margin:0 0 48px;padding:32px 28px;
  background:linear-gradient(135deg,rgba(109,140,255,0.12),rgba(109,140,255,0.03));
  border:1px solid rgba(109,140,255,0.3);border-radius:16px;
  text-decoration:none;color:inherit;transition:border-color 0.2s,transform 0.2s;
  position:relative;overflow:hidden;
}
.big-guide:hover{border-color:rgba(109,140,255,0.6);text-decoration:none;transform:translateY(-2px)}
.big-guide .badge-feature{
  display:inline-block;font-size:var(--ox-size-label);font-weight:700;letter-spacing:0.08em;
  text-transform:uppercase;color:#a5b4fc;padding:4px 10px;
  background:rgba(109,140,255,0.1);border:1px solid rgba(109,140,255,0.25);
  border-radius:20px;margin-bottom:14px;
}
.big-guide h2{font-size:var(--ox-size-h2);font-weight:800;color:var(--white);line-height:var(--ox-line-heading,1.15);margin:0 0 10px}
.big-guide p{font-size:var(--ox-size-sub);color:var(--text-secondary);line-height:1.55;margin:0 0 16px;max-width:640px}
.big-guide .cta{font-size:var(--ox-size-small);color:var(--primary);font-weight:500}

.footer{
  text-align:center;margin-top:64px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:var(--ox-size-small);
}

/* ── Floating TOC (right margin) ──────────────── */
.toc{
  position:fixed;top:50%;right:32px;transform:translateY(-50%);
  display:flex;flex-direction:column;gap:2px;z-index:50;
}
.toc-link{
  font-size:var(--ox-size-label);color:var(--text-muted);text-decoration:none;
  padding:5px 10px;border-radius:6px;transition:all 0.15s;white-space:nowrap;
}
.toc-link:hover{color:var(--text-secondary);background:rgba(255,255,255,0.04);text-decoration:none}
.toc-link.active{color:var(--white);background:rgba(109,140,255,0.1)}
.toc-divider{height:1px;background:var(--border);margin:6px 10px}

@media(max-width:1200px){
  .toc{display:none}
}
@media(max-width:749px){
  .container{padding:32px 16px 48px}
  .guide-grid{grid-template-columns:1fr;gap:12px}
}
      </style>

      <!-- Floating TOC -->
      <nav class="toc">
        <a href="#sec-grundlagen" class="toc-link" data-section="sec-grundlagen">&#128218; KI-Grundlagen</a>
        <a href="#sec-claude" class="toc-link" data-section="sec-claude">&#129302; Claude verstehen</a>
        <a href="#sec-produktivitaet" class="toc-link" data-section="sec-produktivitaet">&#9889; Produktivit&auml;t</a>
        <a href="#sec-medienkompetenz" class="toc-link" data-section="sec-medienkompetenz">&#128737; Medienkompetenz</a>
        <a href="#sec-forschung" class="toc-link" data-section="sec-forschung">&#128300; Forschung</a>
      </nav>

      <div class="container">
        <section class="hero">
          <div class="hero__inner">
            <p class="hero__label">OX Guides</p>
            <h1>Kostenlose Guides</h1>
            <p class="subtitle">KI-Tools und Tech-Guides f&uuml;r Gesundheitsexperten &mdash; von der Praxis bis zur Hochschule. Kostenlos und praxisnah.</p>
          </div>
        </section>

        <a href="/pages/eu-digital-stack" class="big-guide">
          <div class="badge-feature">&#9733; Big Guide</div>
          <h2>Der EU Digital Stack</h2>
          <p>Welche KI-Tools, Cloud-Dienste und Plattformen sind DSGVO-konform, europ&auml;isch gehostet und praxistauglich? Die gro&szlig;e &Uuml;bersicht &uuml;ber souver&auml;ne Alternativen zu US-Big-Tech &mdash; einsetzbar f&uuml;r Gesundheit, Bildung und Wissenschaft.</p>
          <div class="cta">Zum Big Guide &rarr;</div>
        </a>

        <div class="section-label" id="sec-grundlagen">KI-Grundlagen</div>
        <div class="guide-grid">
        <a href="/pages/ki-durchschauen" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">KI durchschauen <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Warum KI halluziniert und Bias zeigt &mdash; und wie du beides erkennst. Die 4 Eigenschaften jeder KI, eine 5-Punkte-Checkliste gegen Halluzinationen, der Bias-Paar-Test und ein Kompetenz-Modell.</div>
          </div>
          <div class="guide-meta">6-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/10-paper-hinter-der-ki" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Die 10 Paper, die KI m&ouml;glich gemacht haben <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Von Turings Frage 1936 bis ChatGPT &mdash; die zehn wissenschaftlichen Arbeiten hinter der modernen KI. Mit Originalquellen und dem, was popul&auml;re Erkl&auml;rungen weglassen.</div>
          </div>
          <div class="guide-meta">6-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/7-skills-ai-agents" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Die 7 Skills f&uuml;r hilfreiche AI-Agents <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Vom Prompt-Engineer zum Agent-Engineer &mdash; System Design, Schemas, Retrieval, Reliability, Security, Eval, Produkt-Denken. Mit Self-Assessment.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/6-stufen-der-ki-nutzung" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Die 6 Stufen der KI-Nutzung</div>
            <div class="guide-desc">Von &bdquo;besseres Google&ldquo; bis zu autonomen Agenten. Finde heraus wo du stehst und was der n&auml;chste Schritt ist.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/4-disziplinen-ki-prompting" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Die 4 Disziplinen des KI-Promptings</div>
            <div class="guide-desc">Vom einfachen Prompt bis zur Spezifikation die Claude selbstst&auml;ndig abarbeitet. Mit Therapiebericht-Beispielen auf jeder Stufe.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/erste-ki-automatisierung" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Deine erste KI-Automatisierung finden</div>
            <div class="guide-desc">Ein Copy-Paste-Prompt der deine Abl&auml;ufe analysiert und dir zeigt, wo du sofort Zeit sparst.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/10-ki-briefing-prompts" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">10 KI-Briefing-Prompts f&uuml;r Health Professionals</div>
            <div class="guide-desc">Studien-Updates, Leitlinien-&Auml;nderungen und Praxis-News auf Knopfdruck. Copy-Paste-fertig.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/5-mini-apps-claude-code" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">5 Mini-Apps die du in 10 Minuten baust</div>
            <div class="guide-desc">Quiz-Generator, Bewertungsraster, Semesterplaner &mdash; Claude Code baut dir fertige Tools als HTML-Datei.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>
        </div>

        <div class="section-label" id="sec-claude">Claude verstehen</div>
        <div class="guide-grid">
        <a href="/pages/claude-cowork-oder-claude-code" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude, Cowork oder Claude Code &mdash; Was wof&uuml;r?</div>
            <div class="guide-desc">Drei Tools, drei Aufgaben: Denken, Erledigen, Bauen. Welches wann und welches Abo du brauchst.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/claude-cowork-setup" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Cowork 2.0 &mdash; Das komplette Setup</div>
            <div class="guide-desc">Ordnerstruktur, drei ABOUT ME-Dateien, Global Instructions, Spracheingabe und 6 Tipps zum Credits sparen.</div>
          </div>
          <div class="guide-meta">6-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/claude-code-token-audit" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code Token-Audit <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Versteckten Kontext-Bloat finden, MCPs durch CLIs ersetzen, settings.json richtig tweaken &mdash; nie wieder Usage-Limits.</div>
          </div>
          <div class="guide-meta">6-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/claude-code-fur-dozenten" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code &mdash; Setup in 5 Minuten</div>
            <div class="guide-desc">Installation, erste Schritte und 10 Befehle die du sofort nutzen kannst. Kein Coding n&ouml;tig.</div>
          </div>
          <div class="guide-meta">2-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/claude-code-memory" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code Memory &mdash; Dein Projekt nie wieder erkl&auml;ren</div>
            <div class="guide-desc">/memory und /compact: Wie Claude sich Kontext merkt und bei langen Projekten schnell bleibt.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/5-claude-features-fur-dozenten" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">5 Claude-Features die du kennen solltest</div>
            <div class="guide-desc">Plan Mode, Memory Files, Skills, Hooks und Compact Mode &mdash; was sie tun und warum sie relevant sind.</div>
          </div>
          <div class="guide-meta">3-Seiten-Guide &rarr;</div>
        </a>
        </div>

        <div class="section-label" id="sec-produktivitaet">Produktivit&auml;t</div>
        <div class="guide-grid">
        <a href="/pages/claude-code-obsidian-wissenssystem" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code + Obsidian: Dein KI-Wissenssystem</div>
            <div class="guide-desc">Claude Code als intelligenter Assistent f&uuml;r deinen Obsidian-Vault. 5 Workflows, Copy-Paste-Prompts, Skills.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/wissenssystem-obsidian" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Dein Wissenssystem mit Obsidian</div>
            <div class="guide-desc">Studien, Leitlinien und Fortbildungen vernetzen. Lokales Wiki das mit dir w&auml;chst.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/spracheingabe-statt-tippen" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Spracheingabe statt Tippen &mdash; KI-Diktat f&uuml;r die Praxis</div>
            <div class="guide-desc">Befunde diktieren, Berichte einsprechen, Emails per Sprache. SuperWhisper vs. Wispr Flow mit DSGVO-Bewertung.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/claude-code-email-va" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code als E-Mail-VA</div>
            <div class="guide-desc">Gmail scannen, Leads ins CRM, Follow-up Drafts &mdash; dein automatischer B2B-Assistent mit Datenschutz-Hinweisen.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>
        </div>

        <div class="section-label" id="sec-medienkompetenz">Medienkompetenz</div>
        <div class="guide-grid">
        <a href="/pages/searxng-vs-google" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">SearXNG vs. Google &mdash; Suche, die dir geh&ouml;rt <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Wie sich die selbstbestimmte Metasuchmaschine technisch von Google unterscheidet: Crawler, Index, Ranking, der Proxy-Datenschutz und der JSON-Trick f&uuml;r eigene Tools.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/digitale-selbstverteidigung-2026" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Digitale Selbstverteidigung 2026</div>
            <div class="guide-desc">Das 3-Stufen-System f&uuml;r Privatsph&auml;re: vom Passwortmanager bis zum Self-Hosting. &Uuml;ber 20 konkrete Tools.</div>
          </div>
          <div class="guide-meta">6-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/digital-detective-kit" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Fake News, KI-Fakes & Desinformation erkennen</div>
            <div class="guide-desc">12 kostenlose Tools um gef&auml;lschte Bilder, KI-generierte Inhalte und Desinformation zu erkennen.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/eu-digital-stack" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">EU Digital Stack &mdash; Big-Tech-Alternativen aus Europa</div>
            <div class="guide-desc">Datenschutzfreundliche, unabh&auml;ngige Software aus der EU. DSGVO-konform, transparent und frei von Tech-Giganten.</div>
          </div>
          <div class="guide-meta">Interaktive &Uuml;bersicht &rarr;</div>
        </a>
        </div>

        <div class="section-label" id="sec-forschung">Forschung</div>
        <div class="guide-grid">
        <a href="/pages/claude-code-notebooklm-forschung" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code + NotebookLM f&uuml;r den Forschungsprozess</div>
            <div class="guide-desc">Paper analysieren, Briefing Docs generieren, Ergebnisse weiterverarbeiten. Der komplette Workflow.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/notebooklm-fur-literatur-reviews" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">NotebookLM f&uuml;r Literatur-Reviews</div>
            <div class="guide-desc">20 Papers laden, Zusammenh&auml;nge finden, strukturierten Review erstellen. Schritt-f&uuml;r-Schritt.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>
        </div>

      </div>
    `;

    const root = this.shadowRoot;

    // Mouse shimmer
    root.querySelectorAll('.guide-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
      }, { passive: true });
    });

    // Scroll reveal with stagger per grid
    const cards = root.querySelectorAll('.guide-card');
    if ('IntersectionObserver' in window) {
      // stagger within each .guide-grid
      root.querySelectorAll('.guide-grid').forEach(grid => {
        grid.querySelectorAll('.guide-card').forEach((c, i) => {
          c.style.transitionDelay = (i * 0.05) + 's';
        });
      });
      const revealObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      cards.forEach(c => revealObs.observe(c));
    } else {
      cards.forEach(c => c.classList.add('is-visible'));
    }

    // Scroll Spy inside Shadow DOM
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = root.querySelector('[data-section="' + id + '"]');
        if (link) link.classList.toggle('active', entry.isIntersecting);
      });
    }, { rootMargin: '-10% 0px -70% 0px' });

    root.querySelectorAll('.section-label[id]').forEach(s => observer.observe(s));

    // Smooth scroll
    root.querySelectorAll('.toc-link[data-section]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = root.getElementById(link.dataset.section);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}

customElements.define('ox-guides-overview', OxGuidesOverview);
