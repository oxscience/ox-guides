class OxGuideEmailVa extends HTMLElement {
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
  --red:#ef4444;--red-light:#fca5a5;--red-bg:#1c1017;
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

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.highlight-box{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.highlight-box strong{color:var(--white)}

.warning-box{
  background:var(--red-bg);border-left:3px solid var(--red);
  padding:20px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.warning-box strong{color:var(--red-light)}
.warning-title{
  color:var(--red);font-weight:700;font-size:15.2px;
  text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;
}
.warning-box ul{margin-left:20px}
.warning-box li{color:var(--text);margin-bottom:9.6px;font-size:14.7px}
.warning-footer{
  margin-top:16px;padding-top:12px;
  border-top:1px solid rgba(239,68,68,0.2);
  color:var(--red);font-size:13.6px;font-weight:600;
}

.flow-table{
  width:100%;border-collapse:collapse;margin:16px 0 24px;font-size:14.4px;
}
.flow-table th{
  background:var(--code-bg);color:#888;font-weight:600;text-align:left;
  padding:9.6px 12px;font-size:12.8px;text-transform:uppercase;letter-spacing:0.05em;
}
.flow-table td{padding:9.6px 12px;border-bottom:1px solid var(--border)}
.flow-table tr:nth-child(even) td{background:#111}
.module-num{color:var(--primary);font-weight:700;font-family:var(--mono)}

.step-list{counter-reset:steps;list-style:none;margin-left:0}
.step-list li{counter-increment:steps;padding-left:32px;position:relative}
.step-list li::before{
  content:counter(steps) ".";position:absolute;left:0;
  color:var(--primary);font-weight:700;
}

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

        <h1>Claude Code als E-Mail-VA</h1>
        <div class="meta">5-Seiten-Guide &middot; Out Of The Box Science</div>

        <p>Dieser Guide zeigt, wie du Claude Code als virtuellen Assistenten f&uuml;r deine E-Mail-Inbox nutzen kannst. Automatisiertes Scannen nach B2B-Anfragen, CRM-Sync, Follow-up Drafts &mdash; alles ohne eine Zeile Code zu schreiben.</p>

        <h2>Was es kann</h2>
        <ul>
          <li><strong>Gmail-Inbox scannen</strong> &mdash; automatisch nach B2B-Anfragen suchen (Labels, Starred Mails, Firmen-Domains)</li>
          <li><strong>Neue Kontakte ins CRM</strong> &mdash; neue Leads direkt in Notion (oder andere CRMs mit API) &uuml;bertragen</li>
          <li><strong>Follow-up Drafts</strong> &mdash; f&uuml;r &uuml;berf&auml;llige Leads h&ouml;fliche Entw&uuml;rfe erstellen. Intelligent: &uuml;berspringt Kontakte die schon 3x ohne Antwort angeschrieben wurden</li>
          <li><strong>Draft-Tracking</strong> &mdash; erkennt am n&auml;chsten Tag ob Drafts gesendet, gel&ouml;scht oder noch offen sind. Aktualisiert das CRM automatisch.</li>
          <li><strong>T&auml;gliches Briefing</strong> &mdash; Markdown-Report mit neuen Leads, offenen Follow-ups und Priorit&auml;ten f&uuml;r den Tag</li>
        </ul>

        <div class="highlight-box">
          <strong>Wichtig:</strong> Claude Code erstellt nur <em>Entw&uuml;rfe</em> &mdash; es sendet nie automatisch E-Mails. Du pr&uuml;fst und sendest selbst.
        </div>

        <h2>Der Flow</h2>
        <p>Der Workflow l&auml;uft als Scheduled Task, z.B. jeden Morgen um 08:47 (Mo-Fr). Hier die 6 Module:</p>

        <table class="flow-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Modul</th>
              <th>Was es tut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="module-num">0</td>
              <td>Draft-Status</td>
              <td>Pr&uuml;ft Drafts vom Vortag: gesendet / offen / verworfen? Aktualisiert CRM.</td>
            </tr>
            <tr>
              <td class="module-num">1</td>
              <td>Gmail Scan</td>
              <td>B2B-Labels, Starred Mails, Firmen-Domains der letzten 24h scannen.</td>
            </tr>
            <tr>
              <td class="module-num">2</td>
              <td>Follow-up Drafts</td>
              <td>CRM-Leads mit Status &bdquo;Angefragt&ldquo; &gt; 7 Tage &rarr; Gmail-Draft erstellen.</td>
            </tr>
            <tr>
              <td class="module-num">3</td>
              <td>Server Health</td>
              <td>Optional: Server-Monitoring via SSH (Disk, Container, Uptime).</td>
            </tr>
            <tr>
              <td class="module-num">4</td>
              <td>Content Pipeline</td>
              <td>Optional: Andere Pipelines pr&uuml;fen (iCloud, Scheduled Tasks).</td>
            </tr>
            <tr>
              <td class="module-num">5</td>
              <td>Briefing</td>
              <td>Markdown-Report: Neue Leads, Draft-Status, Alerts, Priorit&auml;ten.</td>
            </tr>
          </tbody>
        </table>

        <h2>Wie es technisch funktioniert</h2>
        <ul>
          <li><strong>Claude Code Scheduled Tasks</strong> &mdash; Cron-&auml;hnlicher Scheduler, l&auml;uft automatisch zu festen Zeiten</li>
          <li><strong>Gmail MCP</strong> &mdash; liest E-Mails und erstellt Drafts &uuml;ber Googles API (OAuth, kein Passwort)</li>
          <li><strong>Notion MCP</strong> &mdash; liest und schreibt CRM-Eintr&auml;ge (optional: jedes CRM mit API-Zugang)</li>
          <li><strong>Memory System</strong> &mdash; trackt was schon verarbeitet wurde, keine Duplikate</li>
          <li><strong>Dry-Run Modus</strong> &mdash; zeigt was passieren w&uuml;rde, ohne etwas auszuf&uuml;hren. Perfekt zum Testen.</li>
        </ul>

        <h2>Was du brauchst</h2>
        <ul>
          <li><strong>Claude Code</strong> &mdash; CLI, Desktop App oder <a href="https://claude.ai/code">claude.ai/code</a></li>
          <li><strong>Gmail-Account</strong> &mdash; mit Labels f&uuml;r deine B2B-Kontakte (z.B. &bdquo;B2B-Lead&ldquo;, &bdquo;B2B-Client&ldquo;)</li>
          <li><strong>Ein CRM mit API</strong> &mdash; Notion, Airtable, HubSpot, o.&auml;.</li>
          <li><strong>~30 Minuten</strong> &mdash; f&uuml;r das initiale Setup</li>
        </ul>

        <h2>Setup in 5 Schritten</h2>
        <ol class="step-list">
          <li><strong>Gmail Labels einrichten</strong> &mdash; Erstelle Labels wie &bdquo;B2B-Lead&ldquo; und &bdquo;B2B-Client&ldquo;. Markiere relevante Mails mit Stern.</li>
          <li><strong>CRM vorbereiten</strong> &mdash; Stelle sicher dass dein CRM eine API hat. In Notion: Datenbank mit Properties wie Name, Email, Company, Status, Last Contact.</li>
          <li><strong>Scheduled Task erstellen</strong> &mdash; In Claude Code den Prompt f&uuml;r den Daily-Ops-Task schreiben (oder als Vorlage von uns &uuml;bernehmen).</li>
          <li><strong>Dry-Run testen</strong> &mdash; Erst im Dry-Run Modus laufen lassen. Pr&uuml;fe das Briefing: Stimmen die Leads? Sind die Drafts sinnvoll?</li>
          <li><strong>Live schalten</strong> &mdash; Wenn alles passt: Mode auf &bdquo;live&ldquo; setzen. Ab jetzt l&auml;uft der VA jeden Morgen automatisch.</li>
        </ol>

        <div class="highlight-box">
          <strong>Tipp:</strong> Beim ersten Live-Run &bdquo;Run now&ldquo; klicken, damit die Tool-Permissions (Gmail, Notion) vorab genehmigt werden. Sonst h&auml;ngt der erste automatische Run an der Genehmigungsabfrage.
        </div>

        <h2>Datenschutz &amp; Compliance</h2>

        <div class="warning-box">
          <div class="warning-title">Wichtiger Hinweis</div>
          <p style="margin-bottom:12px">Dieser Workflow leitet E-Mail-Inhalte &uuml;ber die Anthropic API (Claude). Das bedeutet:</p>
          <ul>
            <li><strong>E-Mail-Texte, Absender, Betreffzeilen und Kontaktdaten</strong> werden an Anthropic-Server (USA) &uuml;bermittelt</li>
            <li>Anthropic <strong>speichert API-Anfragen f&uuml;r 30 Tage</strong> (Stand April 2026, siehe Anthropic Data Retention Policy)</li>
            <li>Anthropic nutzt API-Daten <strong>nicht f&uuml;r Modell-Training</strong> (Opt-out ist Standard f&uuml;r API-Nutzung)</li>
            <li>F&uuml;r den Einsatz mit <strong>personenbezogenen Daten Dritter</strong> (Kunden-E-Mails): <strong>DSGVO-Pr&uuml;fung erforderlich</strong></li>
            <li>Empfehlung: <strong>Auftragsverarbeitungsvertrag (AVV)</strong> mit Anthropic pr&uuml;fen</li>
            <li>Dieser Workflow ist <strong>nicht geeignet f&uuml;r:</strong> Gesundheitsdaten, Anwaltskommunikation, oder andere besonders sch&uuml;tzenswerte Kategorien</li>
            <li>Der Autor nutzt diesen Workflow f&uuml;r seine <strong>eigenen B2B-Anfragen</strong> &mdash; nicht f&uuml;r Kundendaten Dritter</li>
          </ul>
          <div class="warning-footer">
            Im Zweifel: Datenschutzbeauftragten fragen, bevor personenbezogene Daten Dritter verarbeitet werden.
          </div>
        </div>

        <h2>Warum nicht lokal?</h2>
        <p>Lokale LLMs (Qwen, Llama, Gemma) k&ouml;nnten die Texte schreiben. Aber der Agent-Teil &mdash; 15+ verkettete Tool-Calls &uuml;ber Gmail, Notion, SSH und Dateisystem, mit intelligenten Entscheidungen pro Lead &mdash; braucht aktuell ein Frontier-Modell. Zuverl&auml;ssigkeit bei unbeaufsichtigten Cron-Jobs ist entscheidend.</p>

        <p>Was ohne LLM ginge: Ein Python-Script mit hartcodierten Regeln. Aber dann keine intelligenten Entscheidungen (wie &bdquo;dieser Lead ist ausgelutscht, &uuml;berspringen&ldquo;). Und 2-3 Tage Entwicklungszeit statt 30 Minuten Setup.</p>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-email-va', OxGuideEmailVa);
