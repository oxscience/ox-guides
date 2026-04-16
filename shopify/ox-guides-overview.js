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
  --bg:#0a0a0a;--surface:#141414;--surface-hover:#1a1a1a;
  --border:#222;--border-hover:#444;
  --text:#e0e0e0;--text-secondary:#999;--text-muted:#666;--text-dim:#555;
  --primary:#6366f1;--primary-light:#1e1b4b;
  --white:#fff;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:880px;margin:0 auto;padding:48px 24px 64px}

h1{font-size:32px;font-weight:700;color:var(--white);text-align:center;margin-bottom:8px;letter-spacing:-0.02em}
.subtitle{text-align:center;color:var(--text-secondary);font-size:16.8px;margin-bottom:48px}

.section-label{
  font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;
  color:var(--text-dim);margin-top:48px;margin-bottom:16px;padding-left:4px;
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
  gap:12px;transition:border-color 0.2s,background 0.2s;
  text-decoration:none;color:inherit;cursor:pointer;height:100%;
}
.guide-card:hover{border-color:var(--border-hover);background:var(--surface-hover);text-decoration:none}

.guide-info{flex:1}
.guide-title{font-size:17.6px;font-weight:600;color:var(--white);margin-bottom:8px;line-height:1.3}
.guide-desc{font-size:14.4px;color:var(--text-secondary);line-height:1.5}

.guide-meta{font-size:13.6px;color:var(--primary);font-weight:500;margin-top:auto}

.badge-new{
  display:inline-block;background:var(--primary);color:var(--white);
  font-size:10.4px;font-weight:700;padding:2px 8px;border-radius:4px;
  text-transform:uppercase;letter-spacing:0.05em;margin-left:8px;vertical-align:middle;
}

.footer{
  text-align:center;margin-top:64px;padding-top:32px;
  border-top:1px solid #1a1a1a;color:var(--text-dim);font-size:13.6px;
}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:25.6px}
  .guide-grid{grid-template-columns:1fr;gap:12px}
}
      </style>

      <div class="container">
        <h1>Kostenlose OX Guides</h1>
        <p class="subtitle">KI-Tools und Tech-Guides f&uuml;r Health Professionals. Kostenlos und praxisnah.</p>
        <div style="text-align:center;margin-bottom:48px;font-size:14.4px"><a href="/pages/kostenlose-ox-tools" style="color:#6366f1;text-decoration:none;padding:6px 14px;border:1px solid #333;border-radius:20px">&#128736; Tools ansehen &rarr;</a></div>

        <div class="section-label">KI-Grundlagen</div>
        <div class="guide-grid">
        <a href="/pages/6-stufen-ki-nutzung" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Die 6 Stufen der KI-Nutzung <span class="badge-new">Neu</span></div>
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

        <a href="/pages/ki-texte-menschlich-machen" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">KI-Texte menschlich machen</div>
            <div class="guide-desc">24 Muster die KI-generierte Texte verraten und wie du sie in Berichten und Dokumenten vermeidest.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
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
            <div class="guide-title">5 Mini-Apps die du in 10 Minuten baust <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Quiz-Generator, Bewertungsraster, Semesterplaner &mdash; Claude Code baut dir fertige Tools als HTML-Datei.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
        </a>
        </div>

        <div class="section-label">Claude verstehen</div>
        <div class="guide-grid">
        <a href="/pages/von-chatgpt-zu-claude" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Von ChatGPT zu Claude wechseln <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Ehrlicher Feature-Vergleich, St&auml;rken beider Tools, und der Umzug Schritt f&uuml;r Schritt.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>

        <a href="/pages/claude-cowork-oder-claude-code" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude, Cowork oder Claude Code &mdash; Was wof&uuml;r?</div>
            <div class="guide-desc">Drei Tools, drei Aufgaben: Denken, Erledigen, Bauen. Welches wann und welches Abo du brauchst.</div>
          </div>
          <div class="guide-meta">4-Seiten-Guide &rarr;</div>
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

        <div class="section-label">Produktivit&auml;t</div>
        <div class="guide-grid">
        <a href="/pages/claude-code-obsidian-wissenssystem" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code + Obsidian: Dein KI-Wissenssystem <span class="badge-new">Neu</span></div>
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
            <div class="guide-title">Claude Code als E-Mail-VA <span class="badge-new">Neu</span></div>
            <div class="guide-desc">Gmail scannen, Leads ins CRM, Follow-up Drafts &mdash; dein automatischer B2B-Assistent mit Datenschutz-Hinweisen.</div>
          </div>
          <div class="guide-meta">5-Seiten-Guide &rarr;</div>
        </a>
        </div>

        <div class="section-label">Medienkompetenz</div>
        <div class="guide-grid">
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
        </div>

        <div class="section-label">Forschung</div>
        <div class="guide-grid">
        <a href="/pages/claude-code-notebooklm-forschung" class="guide-card">
          <div class="guide-info">
            <div class="guide-title">Claude Code + NotebookLM f&uuml;r den Forschungsprozess <span class="badge-new">Neu</span></div>
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

        <div class="footer">
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; KI-Tools f&uuml;r Health Professionals. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guides-overview', OxGuidesOverview);
