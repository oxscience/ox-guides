class OxGuideClaudeMemory extends HTMLElement {
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
  --blue-light:#60a5fa;--blue-muted:#94a3b8;
  --blue-bg:#0a1628;--blue-border:#1e3a5f;
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
.intro{color:var(--text-secondary);margin-bottom:32px;font-size:15.2px}

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}
h3{font-size:16px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}

p{margin-bottom:16px}

code{
  background:var(--code-bg);color:var(--primary-light);padding:2.4px 6.4px;border-radius:4px;
  font-size:0.9em;font-family:var(--mono);
}
pre{
  background:#111;border:1px solid #222;border-radius:8px;padding:16px 20px;
  margin:16px 0 24px;overflow-x:auto;font-size:13.6px;line-height:1.6;
  font-family:var(--mono);color:var(--primary-light);white-space:pre-wrap;word-wrap:break-word;
}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.section-label{
  display:inline-block;font-size:11.2px;text-transform:uppercase;
  letter-spacing:0.1em;color:var(--primary);margin-top:48px;margin-bottom:0;
}
.section-label + h2{margin-top:4px}

.feature-card{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:24px 0;
}
.feature-number{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  width:28px;height:28px;border-radius:50%;text-align:center;
  line-height:28px;font-size:13.6px;margin-right:8px;
}
.feature-name{font-size:17.6px;font-weight:600;color:var(--white)}
.feature-card p{margin-top:12px;margin-bottom:8px}
.feature-card ul{margin-top:8px}
.use-case{color:var(--primary);font-weight:500;font-size:14.4px}

.callout{
  background:var(--surface-alt);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.callout strong{color:var(--white)}

.highlight-box{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.highlight-box strong{color:var(--white)}

.mini-app{
  background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.mini-app-title{font-weight:600;color:var(--blue-light);font-size:15.2px;margin-bottom:8px}
.mini-app p{color:var(--blue-muted);font-size:14.4px;margin-bottom:8px}
.mini-app p:last-child{margin-bottom:0}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
  border:1px solid var(--primary);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}

.checklist{list-style:none;margin:16px 0 8px;padding:0}
.checklist li{position:relative;padding-left:28px;margin-bottom:9.6px;font-size:15.2px}
.checklist li::before{content:"";position:absolute;left:0;top:4.8px;width:17.6px;height:17.6px;border:1.5px solid var(--primary);border-radius:3px;background:var(--surface-alt)}

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

        <h1>Claude Code Memory &mdash; Dein Projekt nie wieder erkl&auml;ren</h1>
        <div class="meta">4-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Wer Claude Code f&uuml;r l&auml;ngere Projekte nutzt &mdash; eine Praxis-Website aufbauen, ein Abrechnungssystem einrichten, eine Patienteninfo-Serie schreiben &mdash; kennt das Problem: Jede neue Sitzung f&auml;ngt bei Null an. Claude wei&szlig; nicht mehr, was gestern besprochen wurde, welche Entscheidungen gefallen sind, oder welche Dateien schon fertig sind. Dieser Guide zeigt, wie zwei Befehle und eine einzige Textdatei dieses Problem dauerhaft l&ouml;sen.</p>


        <!-- SEITE 1: Das Groundhog-Day-Problem -->
        <span class="section-label">Seite 1 &middot; Das Problem</span>
        <h2>1. Das Groundhog-Day-Problem</h2>

        <p>Claude Code hat kein Langzeitged&auml;chtnis. Jede Sitzung startet mit einem leeren Kontextfenster (dem Arbeitsspeicher, den Claude w&auml;hrend einer Unterhaltung nutzt). Was in der letzten Sitzung passiert ist &mdash; welche Texte geschrieben, welche Korrekturen gemacht, welche Entscheidungen getroffen wurden &mdash; ist weg.</p>

        <p>F&uuml;r kurze Einzelaufgaben spielt das keine Rolle. Wenn du morgens ein Handout erstellst und nachmittags eine Rechnung schreibst, braucht Claude keinen Zusammenhang zwischen den beiden Aufgaben. Aber sobald ein Projekt &uuml;ber mehrere Sitzungen l&auml;uft, kippt das Verh&auml;ltnis: Du verbringst mehr Zeit damit, den Stand zu erkl&auml;ren, als mit der eigentlichen Arbeit.</p>

        <div class="callout">
          <strong>Ein Praxisbeispiel:</strong> Du baust mit Claude Code eine neue Website f&uuml;r deine Physiotherapie-Praxis. Montag hast du die Startseite erstellt, mit einem bestimmten Farbschema und deinem bevorzugten Schreibstil. Am Dienstag willst du die &quot;&Uuml;ber uns&quot;-Seite machen. Aber Claude kennt weder das Farbschema noch den Stil von gestern. Du musst alles nochmal erkl&auml;ren &mdash; und das passiert bei jeder einzelnen Sitzung.
        </div>

        <p>Das Ergebnis: Inkonsistente Ergebnisse, weil du beim dritten Mal vergisst, die gleichen Vorgaben zu machen wie beim ersten Mal. Oder du kopierst jedes Mal einen langen Prompt, der irgendwann veraltet ist, weil sich das Projekt weiterentwickelt hat.</p>

        <p>Die L&ouml;sung besteht aus zwei Bausteinen: einem Befehl, der Claude ein dauerhaftes Ged&auml;chtnis gibt (<code>/memory</code>), und einem Befehl, der den Arbeitsspeicher innerhalb einer Sitzung aufr&auml;umt (<code>/compact</code>).</p>


        <!-- SEITE 2: Die zwei wichtigsten Befehle -->
        <span class="section-label">Seite 2 &middot; Die Werkzeuge</span>
        <h2>2. Die zwei wichtigsten Befehle</h2>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">/memory &mdash; Das Langzeitged&auml;chtnis</span>
          <p>Der Befehl <code>/memory</code> speichert Projektkontext, Entscheidungen und Fortschritt in einer Datei, die Claude bei jedem Start automatisch liest. Anders als der Chat-Verlauf &uuml;berlebt diese Datei das Ende einer Sitzung.</p>

          <p>Was <code>/memory</code> konkret macht: Es schreibt die wichtigsten Informationen aus dem aktuellen Gespr&auml;ch in eine Datei namens <code>CLAUDE.md</code> in deinem Projektordner. Beim n&auml;chsten Start liest Claude diese Datei automatisch und kennt den Stand &mdash; ohne dass du irgendetwas tun musst.</p>

          <div class="mini-app">
            <div class="mini-app-title">Praxis-Beispiel: Website-Projekt</div>
            <p>Du sagst am Ende einer Sitzung: <code>/memory</code></p>
            <p>Claude speichert zum Beispiel: Farbschema ist #2B5F8A und #F5F5F5, Schreibstil sachlich ohne Werbesprache, Startseite fertig, &Uuml;ber-uns-Seite als n&auml;chstes, Bilder liegen in /bilder/, Doctolib-Widget soll auf jeder Seite eingebunden werden.</p>
            <p>N&auml;chste Sitzung: Claude wei&szlig; das alles, ohne dass du es wiederholst.</p>
          </div>

          <p>Du kannst <code>/memory</code> auch gezielt mit einem Hinweis aufrufen, wenn du etwas Bestimmtes festhalten willst:</p>
          <pre>/memory Farbschema ge&auml;ndert: Akzentfarbe jetzt #E07A5F statt #2B5F8A</pre>

          <p class="use-case">Der Befehl ist besonders wertvoll bei Projekten, die &uuml;ber Wochen laufen, weil sich dort st&auml;ndig kleine Entscheidungen ansammeln, die in keinem einzelnen Prompt stehen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">/compact &mdash; Der Aufr&auml;um-Befehl</span>
          <p>W&auml;hrend <code>/memory</code> Informationen zwischen Sitzungen rettet, l&ouml;st <code>/compact</code> ein Problem innerhalb einer Sitzung: das volle Kontextfenster.</p>

          <p>Claude kann nur eine begrenzte Menge Text gleichzeitig im Kopf behalten. Bei l&auml;ngeren Sitzungen &mdash; zum Beispiel wenn du zehn Patienteninformationen hintereinander erstellst &mdash; f&uuml;llt sich dieser Speicher. Claude wird langsamer, wiederholt sich, oder vergisst Details aus dem Gespr&auml;chsanfang.</p>

          <p><code>/compact</code> komprimiert das bisherige Gespr&auml;ch zu einer kurzen Zusammenfassung und gibt Claude damit wieder Platz zum Arbeiten. Die wichtigsten Entscheidungen und der aktuelle Stand bleiben erhalten, aber der wortw&ouml;rtliche Verlauf der fr&uuml;heren Nachrichten wird zusammengefasst.</p>

          <div class="mini-app">
            <div class="mini-app-title">Wann /compact nutzen?</div>
            <p>Wenn Claude sp&uuml;rbar langsamer antwortet als zu Beginn der Sitzung.</p>
            <p>Wenn Claude anfängt, Dinge zu wiederholen oder den Faden zu verlieren.</p>
            <p>Wenn du merkst, dass die Sitzung schon l&auml;nger dauert als geplant und du noch weiterarbeiten willst.</p>
          </div>

          <div class="callout">
            <strong>Wichtig:</strong> Bei der Komprimierung gehen Nuancen verloren. Wenn du in der ersten Nachricht eine bestimmte Formulierung festgelegt hast, kann Claude diese nach dem Compact-Schritt vergessen haben. Deshalb geh&ouml;rt alles wirklich Wichtige in die <code>CLAUDE.md</code> &uuml;ber <code>/memory</code> &mdash; und nicht nur in den Chat-Verlauf.
          </div>

          <p class="use-case">Die beiden Befehle erg&auml;nzen sich: /memory sichert den langfristigen Kontext, /compact h&auml;lt die aktuelle Sitzung arbeitsfähig.</p>
        </div>


        <!-- SEITE 3: Der ideale Session-Workflow -->
        <span class="section-label">Seite 3 &middot; Der Workflow</span>
        <h2>3. Der ideale Session-Workflow in 5 Schritten</h2>

        <p>Die beiden Befehle entfalten ihre Wirkung am besten, wenn du sie in einen festen Ablauf einbaust. Der folgende Workflow funktioniert f&uuml;r jedes Projekt, das &uuml;ber mehr als eine Sitzung l&auml;uft &mdash; egal ob Praxis-Website, Patienteninfo-Serie oder Abrechnungssystem.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Sitzung starten &mdash; Kontext pr&uuml;fen</span>
          <p>&Ouml;ffne Claude Code in deinem Projektordner. Claude liest automatisch die <code>CLAUDE.md</code> und kennt den bisherigen Stand. Frag trotzdem kurz nach, ob alles angekommen ist:</p>
          <pre>Was ist der aktuelle Stand des Projekts?</pre>
          <p>Claude antwortet mit einer Zusammenfassung, die du auf Richtigkeit pr&uuml;fen kannst. Falls etwas fehlt oder veraltet ist, korrigierst du es jetzt &mdash; nicht erst am Ende der Sitzung, wenn du es vergessen hast.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Aufgabe formulieren</span>
          <p>Gib Claude die heutige Aufgabe. Weil der Projektkontext bereits aus der <code>CLAUDE.md</code> bekannt ist, kannst du dich auf das Wesentliche konzentrieren, ohne jedes Mal das ganze Projekt zu erkl&auml;ren.</p>
          <pre>Erstelle die Patienteninfo f&uuml;r Knie-TEP Nachsorge.
Gleicher Stil und Aufbau wie bei der
Schulter-Info von letzter Woche.</pre>
          <p class="use-case">Ohne Memory m&uuml;sstest du hier den Stil, das Format, die Zielgruppe und den bisherigen Stand nochmal beschreiben. Mit Memory reicht ein Satz.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Arbeiten &mdash; bei Bedarf /compact</span>
          <p>Arbeite an deiner Aufgabe. Wenn die Sitzung l&auml;nger wird und du merkst, dass Claude langsamer wird oder den Faden verliert, tipp <code>/compact</code> ein. Claude fasst das Gespr&auml;ch zusammen und arbeitet mit frischem Speicher weiter.</p>
          <p>Bei kurzen Sitzungen (unter einer Stunde, weniger als 20 Nachrichten) brauchst du <code>/compact</code> in der Regel nicht.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">Sitzung beenden &mdash; /memory aufrufen</span>
          <p>Bevor du die Sitzung schlie&szlig;t, speichere den aktuellen Stand mit <code>/memory</code>. Wichtig: Mach das am Ende jeder Sitzung, nicht nur wenn sich etwas Gro&szlig;es ge&auml;ndert hat. Auch kleine Entscheidungen summieren sich &mdash; und genau die vergisst man am n&auml;chsten Tag.</p>
          <pre>/memory Knie-TEP Info ist fertig. Format: 2 Seiten,
3 Phasen (Woche 1-2, 3-6, 7-12). N&auml;chstes Mal:
H&uuml;ft-TEP Info im gleichen Format.</pre>
        </div>

        <div class="feature-card">
          <span class="feature-number">5</span>
          <span class="feature-name">N&auml;chste Sitzung &mdash; nahtlos weiterarbeiten</span>
          <p>Beim n&auml;chsten Start liest Claude die aktualisierte <code>CLAUDE.md</code> und kennt alles: das Projekt, die fertigen Teile, die offenen Aufgaben, die Stilentscheidungen, den n&auml;chsten geplanten Schritt. Du steigst genau dort ein, wo du aufgeh&ouml;rt hast.</p>
        </div>

        <h3>3.1 Praxis-Durchlauf: Patienteninfo-Serie</h3>
        <p>Ein konkretes Beispiel, wie der Workflow &uuml;ber mehrere Sitzungen funktioniert:</p>

        <div class="highlight-box">
          <strong>Sitzung 1 (Montag)</strong> &mdash; Du erstellst mit Claude eine Patienteninfo f&uuml;r Schulter-Impingement: zwei Seiten, sachlicher Ton, mit &Uuml;bungsanleitungen. Am Ende: <code>/memory</code>. Claude speichert Format, Stil, Aufbau.
        </div>

        <div class="highlight-box">
          <strong>Sitzung 2 (Mittwoch)</strong> &mdash; Du sagst: &quot;Erstelle die Knie-TEP Info im gleichen Format.&quot; Claude kennt das Format bereits und liefert eine konsistente zweite Info. Mittendrin merkst du, dass die Reha-Phasen anders aufgeteilt sein sollten als bei der Schulter. Du korrigierst es. Am Ende: <code>/memory</code>.
        </div>

        <div class="highlight-box">
          <strong>Sitzung 3 (Freitag)</strong> &mdash; H&uuml;ft-TEP Info. Claude wei&szlig; jetzt: zwei Seiten, sachlich, mit &Uuml;bungen, und dass die Reha-Phasen bei Gelenk-OPs anders aufgeteilt werden als bei Weichteilverletzungen. Du musst das nicht erkl&auml;ren &mdash; es steht in der Memory.
        </div>

        <p>Nach zehn Sitzungen hast du eine komplette Patienteninfo-Serie, bei der alle Teile im gleichen Stil geschrieben sind und Claude sich an jede Korrektur erinnert, die du unterwegs gemacht hast.</p>


        <!-- SEITE 4: CLAUDE.md für die Praxis -->
        <span class="section-label">Seite 4 &middot; Die Konfiguration</span>
        <h2>4. CLAUDE.md f&uuml;r die Praxis</h2>

        <p>Die <code>CLAUDE.md</code> ist eine einfache Textdatei, die Claude bei jedem Start liest. Der <code>/memory</code>-Befehl schreibt automatisch in diese Datei, aber du kannst sie auch selbst bearbeiten &mdash; zum Beispiel um von Anfang an Grundregeln festzulegen, die f&uuml;r jede Sitzung gelten sollen.</p>

        <h3>4.1 Aufbau f&uuml;r ein Praxis-Projekt</h3>
        <p>Eine sinnvolle Startstruktur k&ouml;nnte so aussehen:</p>

        <pre># CLAUDE.md &mdash; Praxis Dr. Weber, Physiotherapie

## Praxis-Kontext
- Fachgebiet: Orthop&auml;die, Sportrehabilitation
- Team: 4 Therapeuten, 2 davon MT-zertifiziert
- Schwerpunkte: Knie, Schulter, R&uuml;cken, Sportler
- Sprache: Deutsch, sachlich, ohne Werbefloskeln

## Aktuelle Projekte
- Praxis-Website (Farben: #2B5F8A, #F5F5F5)
  - Startseite: fertig
  - &Uuml;ber uns: fertig
  - Leistungen: offen
  - Kontakt: offen
- Patienteninfo-Serie
  - Schulter-Impingement: fertig
  - Knie-TEP Nachsorge: fertig
  - H&uuml;ft-TEP: offen

## Stil-Vorgaben
- Patienteninfos: max. 2 Seiten, Laiensprache
- Fachbegriffe in Klammern erkl&auml;ren
- Jede Info hat: Ablauf, Heim&uuml;bungen, Warnsignale
- Website-Texte: kurze S&auml;tze, konkrete Fakten,
  keine &quot;ganzheitlich/einzigartig/hochmodern&quot;-Floskeln</pre>

        <p>Du musst diese Datei nicht manuell pflegen. Der <code>/memory</code>-Befehl aktualisiert sie automatisch mit Projektfortschritt und Entscheidungen. Aber den Praxis-Kontext und die Stil-Vorgaben einmal manuell einzutragen lohnt sich, weil sie sich selten &auml;ndern und Claude ab der ersten Sitzung die richtigen Rahmenbedingungen kennt.</p>

        <h3>4.2 Was geh&ouml;rt in die Datei, was nicht?</h3>

        <div class="highlight-box">
          <strong>Geh&ouml;rt rein:</strong> Projektstand, Stilregeln, wiederkehrende Vorgaben, Farbcodes, bevorzugte Formulierungen, Informationen die du sonst in jeder Sitzung wiederholen m&uuml;sstest.
        </div>

        <div class="highlight-box">
          <strong>Geh&ouml;rt nicht rein:</strong> Passw&ouml;rter, Patientendaten, vertrauliche Informationen. Die Datei liegt zwar nur auf deinem Rechner, aber sie sollte nichts enthalten, was bei versehentlicher Weitergabe problematisch w&auml;re.
        </div>

        <h3>4.3 Token-Verbrauch reduzieren</h3>
        <p>Claude Code rechnet nach Tokens (Texteinheiten, die verarbeitet werden). Jedes Mal, wenn du den gleichen langen Prompt wiederholst, zahlst du doppelt: einmal f&uuml;r den Prompt, einmal f&uuml;r die Verarbeitung. Mit <code>CLAUDE.md</code> und <code>/memory</code> sparst du bei jedem Sitzungsstart die Tokens f&uuml;r den Kontext-Aufbau, weil Claude die Informationen aus einer kompakten Datei liest, statt sie aus einem langen Prompt zu parsen.</p>

        <p>Zus&auml;tzlich kannst du beide Befehle in einem Schritt kombinieren:</p>
        <pre>/compact &amp;&amp; /memory</pre>
        <p>Das komprimiert den aktuellen Chat und speichert den Stand in einem Vorgang. Sinnvoll am Ende einer l&auml;ngeren Sitzung, bei der sich viel angesammelt hat.</p>


        <!-- Goldene Regel -->
        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Alles, was du in einer zweiten Sitzung nochmal erkl&auml;ren m&uuml;sstest, geh&ouml;rt in die Memory. Nicht in den Chat, nicht in deinen Kopf, nicht in eine Notiz auf dem Schreibtisch &mdash; in die <code>CLAUDE.md</code>. Claude vergisst den Chat. Du vergisst die Notiz. Die Datei vergisst nichts.</p>
        </div>


        <h2>Checkliste: Memory-System einrichten</h2>
        <ul class="checklist">
          <li>Claude Code ist installiert und l&auml;uft in deinem Projektordner</li>
          <li>Beim ersten Start: grundlegende Informationen in die CLAUDE.md schreiben (Fachgebiet, Stilregeln, Projektname)</li>
          <li>Am Ende jeder Sitzung: <code>/memory</code> aufrufen und den Stand speichern</li>
          <li>Bei langen Sitzungen: <code>/compact</code> nutzen wenn Claude langsamer wird</li>
          <li>Beim n&auml;chsten Start: kurz pr&uuml;fen ob Claude den Kontext korrekt geladen hat</li>
          <li>Keine Passw&ouml;rter oder Patientendaten in die CLAUDE.md schreiben</li>
        </ul>


        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Health Professionals.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-memory', OxGuideClaudeMemory);
