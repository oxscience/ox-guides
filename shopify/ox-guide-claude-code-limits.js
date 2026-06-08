class OxGuideClaudeCodeLimits extends HTMLElement {
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
  --green:#4ade80;--green-bg:#052e16;--green-border:#166534;
  --amber:#fbbf24;--amber-bg:#1c1400;--amber-border:#854d0e;
  --red:#f87171;--red-bg:#1f0a0a;--red-border:#7f1d1d;
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
h3{font-size:16.8px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}

p{margin-bottom:16px}

code{
  background:var(--code-bg);color:var(--primary-light);padding:2.4px 6.4px;border-radius:4px;
  font-size:0.9em;font-family:var(--mono);
}
pre{
  background:#111;border:1px solid #222;border-radius:8px;padding:16px 20px;
  margin:16px 0 24px;overflow-x:auto;font-size:12.8px;line-height:1.6;
  font-family:var(--mono);color:var(--primary-light);white-space:pre-wrap;word-break:break-word;
}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.highlight-box{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.highlight-box strong{color:var(--white)}

.tip-box{
  background:var(--green-bg);border:1px solid var(--green-border);
  padding:16px 20px;border-radius:8px;margin:24px 0;font-size:14.4px;
}
.tip-box strong{color:var(--green)}

.warn-box{
  background:var(--amber-bg);border:1px solid var(--amber-border);
  padding:16px 20px;border-radius:8px;margin:24px 0;font-size:14.4px;
}
.warn-box strong{color:var(--amber)}

.cost-box{
  background:var(--red-bg);border:1px solid var(--red-border);
  padding:16px 20px;border-radius:8px;margin:24px 0;font-size:14.4px;
}
.cost-box strong{color:var(--red)}

.metric-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.metric{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px}
.metric-value{font-family:var(--mono);font-size:22.4px;font-weight:700;color:var(--primary-light);line-height:1.2}
.metric-label{font-size:12.8px;color:var(--text-muted);margin-top:4px;text-transform:uppercase;letter-spacing:0.04em}

.step-number{
  display:inline-flex;align-items:center;justify-content:center;
  width:26px;height:26px;border-radius:50%;background:var(--primary);
  color:var(--white);font-size:13px;font-weight:700;margin-right:10px;flex-shrink:0;
}

.quickstart-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.qs-card{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px}
.qs-time{font-size:11.2px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px}
.qs-title{font-size:14.4px;font-weight:600;color:var(--white-soft)}
.qs-desc{font-size:13.6px;color:var(--text-secondary);margin-top:4px}

.divider{border:none;border-top:1px solid var(--border);margin:32px 0}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .quickstart-grid,.metric-grid{grid-template-columns:1fr}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Claude Code Token-Audit &mdash; So triffst du keine Usage-Limits mehr</h1>
        <div class="meta">6-Seiten-Guide &middot; Out Of The Box Science &middot; April 2026</div>

        <p>Wenn du Claude Code regelm&auml;&szlig;ig nutzt und im Pro- oder Max-Abo immer wieder ans Limit knallst, liegt es selten an dem was du tippst. Es liegt an dem was Claude Code <em>vor jeder Nachricht</em> still mitliest: deine MCP-Server, deine CLAUDE.md, deine installierten Skills, deine Default-Settings.</p>

        <p>Dieser Guide zeigt wie du den unsichtbaren Kontext-Bloat findest, was du wegschneiden kannst, und mit welchen sechs t&auml;glichen Habits du Tokens sparst &mdash; ohne weniger zu arbeiten.</p>

        <div class="tip-box">
          <strong>F&uuml;r wen das ist:</strong> Du nutzt Claude Code aktiv (mehrere Sessions am Tag) und triffst Usage-Limits. Wenn du Claude Code nur gelegentlich startest, hast du das Problem ohnehin nicht.
        </div>

        <h2>I &mdash; Warum dein Setup Tokens frisst, bevor du tippst</h2>

        <p>Jede Nachricht in einer Claude-Code-Session liest das gesamte bisherige Gespr&auml;ch neu. Nachricht 30 kostet 31&times; mehr als Nachricht 1. Aber das ist nur die H&auml;lfte der Geschichte.</p>

        <p>Bevor du auch nur eine Zeile tippst, ist dein Kontextfenster bereits gef&uuml;llt: System-Tools, MCP-Server-Definitionen, deine CLAUDE.md, alle installierten Skills, Slash-Commands. Das ist dein <strong>Starting-Context</strong> &mdash; der Sockel, auf dem jede Antwort entsteht.</p>

        <p>So siehst du dein eigenes Starting-Context. Frische Session starten und tippen:</p>

        <pre>/context</pre>

        <p>Du bekommst eine Aufstellung welche Komponente wie viele Tokens kostet. In typischen Setups stehen schon vor der ersten Nachricht 50.000 bis 80.000 Tokens auf der Uhr &mdash; jede weitere Nachricht baut darauf auf.</p>

        <div class="metric-grid">
          <div class="metric">
            <div class="metric-value">50.000+</div>
            <div class="metric-label">Tokens Starting-Context</div>
          </div>
          <div class="metric">
            <div class="metric-value">~18.000</div>
            <div class="metric-label">pro MCP-Server</div>
          </div>
          <div class="metric">
            <div class="metric-value">31&times;</div>
            <div class="metric-label">Nachricht 30 vs. 1</div>
          </div>
          <div class="metric">
            <div class="metric-value">40 %</div>
            <div class="metric-label">Einsparung mit CLI statt MCP</div>
          </div>
        </div>

        <p>Mehr Kontext klingt erstmal nach besseren Antworten. Stimmt aber nur bis zu einem Punkt &mdash; danach kippt es: das Modell achtet st&auml;rker auf das Ende des Fensters und ignoriert den Anfang. Bloated Context bedeutet also <strong>du zahlst mehr und bekommst weniger</strong>.</p>

        <hr class="divider">

        <h2>II &mdash; MCP-Server: Der gr&ouml;&szlig;te Hebel</h2>

        <p>MCP-Server (Model Context Protocol) sind Erweiterungen die Claude an externe Tools anschlie&szlig;en &mdash; Notion, Gmail, Filesystem, Browser. Praktisch. Aber: <strong>jeder verbundene MCP-Server l&auml;dt seine kompletten Tool-Definitionen in jede Nachricht</strong>. Nicht nur wenn du das Tool nutzt &mdash; immer.</p>

        <p>Ein gr&ouml;&szlig;erer MCP-Server kostet rund 18.000 Tokens pro Turn. Drei davon zusammen: 50.000 Tokens Ballast, ohne dass eine Aufgabe gestellt wurde.</p>

        <h3>Schritt 1 &mdash; Inventur</h3>
        <p>Zeigt was aktuell connected ist:</p>
        <pre>/mcp</pre>

        <p>Geh die Liste durch. F&uuml;r jeden Server eine Frage: <em>Brauche ich den heute, in dieser Session?</em> Wenn nein: disconnect.</p>

        <h3>Schritt 2 &mdash; MCPs durch CLIs ersetzen</h3>

        <p>Wenn ein Tool eine Kommandozeile hat, ist die fast immer die bessere Wahl. Der Unterschied:</p>

        <ul>
          <li><strong>MCP-Server</strong> kostet Tokens, weil er <em>existiert</em> &mdash; jede Nachricht.</li>
          <li><strong>CLI</strong> kostet Tokens nur wenn Claude den Befehl tats&auml;chlich aufruft.</li>
        </ul>

        <p>Beispiele wo der Wechsel sich lohnt: Playwright (Browser-Automation), GitHub (gh-CLI statt MCP), apify (Web-Scraping), Google Drive (rclone), Datenbanken (psql, sqlite3 direkt).</p>

        <div class="tip-box">
          <strong>Realistische Einsparung:</strong> Wer von 4&ndash;5 MCP-Servern auf 1&ndash;2 plus CLIs umstellt, sieht typisch 40&nbsp;% weniger Token-Verbrauch pro Session. Das ist der gr&ouml;&szlig;te Einzelhebel in diesem Guide.
        </div>

        <hr class="divider">

        <h2>III &mdash; CLAUDE.md richtig schneiden</h2>

        <p>Deine CLAUDE.md wird am Anfang jeder Session geladen und bleibt im Kontext. Eine 5.000-Token-CLAUDE.md ist 5.000 Tokens, die du in jeder einzelnen Anfrage mitschleppst &mdash; auch wenn die Aufgabe gar nichts mit den Inhalten zu tun hat.</p>

        <h3>Drei Probleme, drei Fixes</h3>

        <p><strong>1. Widerspr&uuml;che entfernen.</strong> Wenn an einer Stelle steht <em>"Sei knapp"</em> und an anderer <em>"erkl&auml;re deine Begr&uuml;ndung im Detail"</em>, kann Claude beides nicht gleichzeitig erf&uuml;llen. Du bekommst inkonsistente Antworten und verstehst nicht warum. Lies dein File einmal komplett durch und l&ouml;sch die offenen Konflikte.</p>

        <p><strong>2. Regeln ausmisten.</strong> Jede Regel durch f&uuml;nf Filter:</p>

        <ol>
          <li>Macht Claude das ohnehin schon, ohne dass du es sagst?</li>
          <li>Widerspricht sie einer anderen Regel?</li>
          <li>Wiederholt sie etwas, das woanders schon steht?</li>
          <li>War sie ein Pflaster f&uuml;r einen <em>einzelnen</em> schlechten Output (und nie wieder relevant)?</li>
          <li>Ist sie so vage, dass Claude sie jedes Mal anders interpretieren w&uuml;rde (<em>"sei nat&uuml;rlich", "guter Ton"</em>)?</li>
        </ol>

        <p>Wenn die Regel auch nur eine dieser Fragen mit Ja beantwortet: streichen. Sei brutal. Was du brauchst, kommt sp&auml;ter zur&uuml;ck.</p>

        <p><strong>3. Progressive Disclosure einf&uuml;hren.</strong> Das ist der gr&ouml;&szlig;te Hebel auf diesem Niveau. Deine Core-CLAUDE.md soll nur enthalten was f&uuml;r <em>jede</em> Session in diesem Repo gilt &mdash; Stilpr&auml;ferenzen, Projekt-Struktur, harte Regeln. Alles andere wandert in Referenz-Dateien.</p>

        <pre># In CLAUDE.md (kurz):
F&uuml;r API-Konventionen siehe ./docs/api-standards.md
F&uuml;r Test-Patterns siehe ./docs/testing.md
F&uuml;r Deployment siehe ./docs/deployment.md</pre>

        <p>Claude liest die Detail-Files <em>nur dann</em>, wenn die aktuelle Aufgabe sie braucht. Das spart vier Stellen f&uuml;nfstellige Token-Mengen, wenn deine CLAUDE.md vorher voll war.</p>

        <div class="warn-box">
          <strong>Faustregel:</strong> Eine gesunde CLAUDE.md hat 500&ndash;1.500 Tokens und besteht aus universellen Regeln plus Pointern. Wenn du dr&uuml;ber liegst, ist Progressive Disclosure dein Freund.
        </div>

        <hr class="divider">

        <h2>IV &mdash; Skills ausmisten</h2>

        <p>Skills funktionieren wie MCPs &mdash; ihre Metadaten landen in jeder Session, damit Claude entscheiden kann ob ein Skill triggern soll. Wenn du dir 30 Skills aus Marketplaces gezogen hast und 25 davon nie nutzt, zahlst du f&uuml;r die Kost&uuml;mparade.</p>

        <p>Dazu kommt ein zweites Problem: viele Skills aus kostenlosen Sammlungen sind <strong>verbose</strong> &mdash; 400, 500, 800 Zeilen Anweisungen f&uuml;r etwas, das in 50 Zeilen klar zu sagen w&auml;re. Mehr Anweisungen sind nicht automatisch besser. Ab einer gewissen Schwelle f&auml;ngt das Modell an, Regeln zu ignorieren weil zu viele konkurrieren.</p>

        <p>Geh dieselben f&uuml;nf Filter durch wie bei der CLAUDE.md &mdash; aber f&uuml;r jeden installierten Skill. Das, was du in den letzten 30 Tagen nicht aktiv gebraucht hast, kommt raus. Kannst du sp&auml;ter wieder installieren wenn n&ouml;tig.</p>

        <hr class="divider">

        <h2>V &mdash; Settings.json: Drei Tweaks die wirklich z&auml;hlen</h2>

        <p>Die Defaults von Claude Code sind noch f&uuml;r das alte 200K-Kontextfenster optimiert. Drei Stellschrauben in deiner <code>~/.claude/settings.json</code> &mdash; oder im Projekt-File <code>.claude/settings.json</code> &mdash; machen einen sp&uuml;rbaren Unterschied:</p>

        <h3>1. Auto-Compact bewusst steuern</h3>

        <p>Claude Code komprimiert die Konversation automatisch, bevor das Kontextfenster v&ouml;llig voll ist. Das Problem: die Output-Qualit&auml;t leidet schon vor diesem Punkt. Zwei Stellschrauben kennt das Schema:</p>

        <pre>{
  "autoCompactEnabled": true,
  "autoCompactWindow": 150000
}</pre>

        <p><code>autoCompactEnabled</code> schaltet das Feature an oder aus, <code>autoCompactWindow</code> legt fest, ab welcher Window-Gr&ouml;&szlig;e komprimiert wird. Wer fr&uuml;her komprimieren will, setzt <code>autoCompactWindow</code> niedriger.</p>

        <p>In der Praxis bringt das aber weniger als der Habit weiter unten in Sektion VI: <code>/clear</code> zwischen unverwandten Tasks ist der gr&ouml;&szlig;ere Hebel. Auto-Compact ist nur ein Kompromiss-Modus, kein Ersatz f&uuml;r saubere Session-Trennung.</p>

        <h3>2. Bash-Output gr&ouml;&szlig;er machen</h3>

        <p>Wenn Claude einen Shell-Command ausf&uuml;hrt, liest es per Default nur 30.000&ndash;50.000 Zeichen. Alles dr&uuml;ber wird stillschweigend abgeschnitten &mdash; und Claude ruft den Command erneut auf, mit Filter, mit grep, mit Pagination. Token verbrannt f&uuml;r nichts.</p>

        <pre>{
  "env": {
    "BASH_MAX_OUTPUT_LENGTH": "150000"
  }
}</pre>

        <h3>3. Deny-Rules: Verbotene Verzeichnisse</h3>

        <p>Per Default kann Claude alles im Projekt lesen &mdash; <code>node_modules/</code>, <code>dist/</code>, Lock-Files, Build-Artefakte. Sperr das aus. Funktioniert wie eine .gitignore, nur f&uuml;r Claude:</p>

        <pre>{
  "permissions": {
    "deny": [
      "Read(node_modules/**)",
      "Read(dist/**)",
      "Read(.next/**)",
      "Read(*.lock)",
      "Read(package-lock.json)",
      "Read(venv/**)"
    ]
  }
}</pre>

        <p>Claude verschwendet keinen Kontext mehr darauf, sich Build-M&uuml;ll zu merken.</p>

        <div class="highlight-box">
          <strong>Insgesamt:</strong> Diese drei Tweaks zusammen sparen pro Session typisch 5.000&ndash;15.000 Tokens. Wenig pro Nachricht &mdash; kumuliert &uuml;ber Stunden ein deutlicher Effekt.
        </div>

        <hr class="divider">

        <h2>VI &mdash; T&auml;gliche Habits, die mehr bringen als jeder Tweak</h2>

        <p>Setup-Hygiene ist die Grundlage. Den gr&ouml;&szlig;ten Tagesunterschied machen aber drei Gewohnheiten:</p>

        <h3>1. <code>/clear</code> zwischen unverwandten Tasks</h3>

        <p>Du hast 20 Nachrichten lang an einem Recherche-Auftrag gearbeitet. Jetzt schreibst du eine LinkedIn-Caption. Jede neue Nachricht zahlt weiterhin den vollen Recherche-Tax mit. <code>/clear</code> startet eine frische Session ohne den Ballast. Diese eine Gewohnheit spart wahrscheinlich mehr als jede settings.json-&Auml;nderung.</p>

        <h3>2. Plan-Mode f&uuml;r alles, was nicht trivial ist</h3>

        <p>Der teuerste Fehler in Claude Code ist nicht ein Bug &mdash; es ist 200 Zeilen Code in die falsche Richtung. Du merkst, du hast die Aufgabe falsch erkl&auml;rt, alles muss raus, von vorn. Tokens verbrannt.</p>

        <p>Plan-Mode (Shift+Tab schaltet um) zwingt Claude zuerst nachzufragen und einen Plan zu zeigen, <em>bevor</em> auch nur eine Datei angefasst wird. Lieber 5 Minuten Alignment als 50 Minuten Refactor.</p>

        <h3>3. Bei Fehlern: Edit statt Follow-up</h3>

        <p>Wenn Claude etwas falsch macht, ist die instinktive Reaktion: <em>"Nein, ich meinte..."</em> hinterherschicken. Damit landen jetzt <strong>drei</strong> Nachrichten dauerhaft im Verlauf: die schlechte Antwort, deine Korrektur, die neue Antwort. Alle drei werden in jeder folgenden Anfrage neu gelesen.</p>

        <p>Besser: zur urspr&uuml;nglichen Nachricht zur&uuml;ckscrollen, sie editieren (oder eine fr&uuml;here verwenden) und neu absenden. Der schlechte Pfad wird komplett ersetzt &mdash; nicht angeh&auml;ngt.</p>

        <div class="cost-box">
          <strong>Konkret:</strong> Drei Korrektur-Runden &agrave; 1.500 Tokens = 4.500 Tokens, die in jeder Folgenachricht mitgeschleppt werden. Edit statt Follow-up: 0.
        </div>

        <hr class="divider">

        <h2>VII &mdash; 15-Minuten-Quickstart</h2>

        <p>Eine Sitzung, eine Tasse Kaffee, danach ist dein Setup deutlich gesund:</p>

        <div class="quickstart-grid">
          <div class="qs-card">
            <div class="qs-time">Minuten 0&ndash;2</div>
            <div class="qs-title">Audit fahren</div>
            <div class="qs-desc">Frische Session starten, <code>/context</code> tippen. Screenshot der Token-Aufstellung. Das ist dein Baseline.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 2&ndash;5</div>
            <div class="qs-title">MCP-Liste leeren</div>
            <div class="qs-desc"><code>/mcp</code> tippen. Alles disconnecten was du heute nicht aktiv brauchst. CLI-Alternativen pr&uuml;fen.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 5&ndash;10</div>
            <div class="qs-title">CLAUDE.md schneiden</div>
            <div class="qs-desc">Datei &ouml;ffnen. F&uuml;nf-Filter-Frage je Regel. Was bleibt: universelle Regeln. Detail-Stuff in Referenz-Files auslagern.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 10&ndash;13</div>
            <div class="qs-title">Settings.json tweaken</div>
            <div class="qs-desc">Drei Werte rein: autoCompactPercentage 75, BASH_MAX_OUTPUT_LENGTH 150000, Deny-Rules f&uuml;r node_modules &amp; Co.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 13&ndash;15</div>
            <div class="qs-title">Re-Audit</div>
            <div class="qs-desc">Frische Session, <code>/context</code> erneut. Zahlen vergleichen. Realistisch: 30&ndash;50 % weniger Starting-Context.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Ab heute</div>
            <div class="qs-title">Drei Habits</div>
            <div class="qs-desc"><code>/clear</code> zwischen Tasks. Plan-Mode bei nicht-trivialen Aufgaben. Edit statt Follow-up bei Fehlern.</div>
          </div>
        </div>

        <div class="tip-box">
          <strong>Was du nicht von heute auf morgen brauchst:</strong> mehr Abo-Stufe. Erst Setup s&auml;ubern, dann sehen ob das Limit-Problem &uuml;berhaupt noch da ist.
        </div>

        <div class="footer">
          <p><a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-code-limits', OxGuideClaudeCodeLimits);
