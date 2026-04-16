class OxGuideClaudeCode extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0a0a0a;--surface:#111827;--surface-alt:#0f172a;
  --border:#1a1a1a;--border-accent:#6366f1;
  --text:#d4d4d4;--text-secondary:#999;--text-muted:#666;--text-dim:#555;
  --white:#fff;--white-soft:#e0e0e0;
  --primary:#6366f1;--primary-light:#a5b4fc;
  --code-bg:#1a1a2e;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  --mono:'SF Mono','Fira Code',monospace;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.75;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:640px;margin:0 auto;padding:48px 24px 64px}

.back{display:inline-block;color:var(--primary);text-decoration:none;font-size:13.6px;margin-bottom:32px}
.back:hover{text-decoration:underline}

h1{font-size:28px;font-weight:700;color:var(--white);margin-bottom:8px;letter-spacing:-0.02em;line-height:1.3}
.meta{color:var(--text-muted);font-size:13.6px;margin-bottom:40px}

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}

p{margin-bottom:16px}

code{
  background:var(--code-bg);color:var(--primary-light);padding:2.4px 6.4px;border-radius:4px;
  font-size:0.9em;font-family:var(--mono);
}
pre{
  background:#111;border:1px solid #222;border-radius:8px;padding:16px 20px;
  margin:16px 0 24px;overflow-x:auto;font-size:13.6px;line-height:1.6;
  font-family:var(--mono);color:var(--primary-light);
}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.highlight-box{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.highlight-box strong{color:var(--white)}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Claude Code f&uuml;r Dozenten &mdash; Setup in 5 Minuten</h1>
        <div class="meta">2-Seiten-Guide &middot; Out Of The Box Science</div>

        <h2>Was ist Claude Code?</h2>
        <p>Claude Code ist ein Kommandozeilen-Tool (CLI) von Anthropic &mdash; der Firma hinter Claude. Anders als der normale Claude-Chat arbeitet Claude Code direkt mit deinen Dateien: Es liest Dokumente, erstellt neue, und kann ganze Workflows steuern. Alles &uuml;ber normale Sprache, kein Programmieren n&ouml;tig.</p>

        <p>F&uuml;r Dozenten hei&szlig;t das konkret: Du gibst einen Auftrag in Textform, und Claude Code setzt ihn um &mdash; in deinen echten Dateien, auf deinem Rechner.</p>

        <h2>Installation (1 Befehl)</h2>
        <p>Du brauchst nur ein Terminal (auf dem Mac: "Terminal" App, auf Windows: PowerShell) und einen Anthropic-Account.</p>

        <pre>npm install -g @anthropic-ai/claude-code</pre>

        <p>Falls <code>npm</code> noch nicht installiert ist: Lade <a href="https://nodejs.org">Node.js</a> herunter (LTS-Version). Das installiert npm automatisch mit.</p>

        <p>Danach einmal starten:</p>
        <pre>claude</pre>
        <p>Beim ersten Start wirst du aufgefordert, dich mit deinem Anthropic-Account anzumelden. Das war's.</p>

        <h2>10 Befehle f&uuml;r den Lehralltag</h2>
        <p>Du tippst einfach in nat&uuml;rlicher Sprache, was du brauchst. Hier 10 Beispiele, die sofort funktionieren:</p>

        <div class="highlight-box">
            <strong>Lehrmaterial</strong>
            <ol>
                <li><code>Erstelle eine Gliederung f&uuml;r eine 90-Minuten-Vorlesung zum Thema [X]</code></li>
                <li><code>Schreib ein Handout zu [Thema] &mdash; maximal 2 Seiten, mit Quellenangaben</code></li>
                <li><code>Erstelle 10 Multiple-Choice-Fragen zu [Thema] mit L&ouml;sungen und Erkl&auml;rungen</code></li>
            </ol>
        </div>

        <div class="highlight-box">
            <strong>Feedback &amp; Bewertung</strong>
            <ol start="4">
                <li><code>Lies die Datei hausarbeit.pdf und gib konstruktives Feedback in 5 Punkten</code></li>
                <li><code>Erstelle ein Bewertungsraster f&uuml;r eine Seminararbeit zum Thema [X]</code></li>
            </ol>
        </div>

        <div class="highlight-box">
            <strong>Recherche &amp; Vorbereitung</strong>
            <ol start="6">
                <li><code>Fasse die 3 wichtigsten Argumente aus dieser PDF zusammen</code></li>
                <li><code>Vergleiche die Methoden in paper-a.pdf und paper-b.pdf</code></li>
                <li><code>Schreib eine annotierte Bibliografie zu den 5 Papers in diesem Ordner</code></li>
            </ol>
        </div>

        <div class="highlight-box">
            <strong>Organisation</strong>
            <ol start="9">
                <li><code>Erstelle einen Semesterplan f&uuml;r 14 Wochen zum Thema [X] als Markdown-Tabelle</code></li>
                <li><code>Sortiere alle Dateien in diesem Ordner nach Thema in Unterordner</code></li>
            </ol>
        </div>

        <h2>Wichtig zu wissen</h2>
        <ul>
            <li><strong>Deine Dateien bleiben lokal.</strong> Claude Code arbeitet auf deinem Rechner. Nichts wird automatisch in die Cloud hochgeladen.</li>
            <li><strong>Du best&auml;tigst jeden Schritt.</strong> Bevor Claude Code eine Datei &auml;ndert, fragt es dich. Du beh&auml;ltst die Kontrolle.</li>
            <li><strong>Kosten:</strong> Claude Code nutzt die Anthropic-API. Die Kosten liegen typischerweise bei ein paar Euro pro Monat bei normaler Nutzung. Es gibt auch ein Abo (Claude Max) das unbegrenzte Nutzung einschlie&szlig;t.</li>
        </ul>

        <div class="footer">
            <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-code', OxGuideClaudeCode);
