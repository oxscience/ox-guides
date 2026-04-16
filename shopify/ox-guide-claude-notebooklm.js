class OxGuideClaudeNotebooklm extends HTMLElement {
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
  --green-bg:#064e3b;--green-text:#6ee7b7;
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

.step-card{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.step-label{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;
  margin-right:8px;letter-spacing:0.03em;
}
.step-title{font-size:16.8px;font-weight:600;color:var(--white)}
.step-card p{margin-top:12px;margin-bottom:8px;font-size:14.4px}
.step-card p:last-child{margin-bottom:0}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
  border:1px solid var(--primary);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}
.golden-rule strong{color:var(--white)}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  pre{font-size:12.8px;padding:12px 14px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Claude Code + NotebookLM f&uuml;r den Forschungsprozess</h1>
        <div class="meta">Kostenloser OX Guide &mdash; Lesezeit ca. 12 Min.</div>

        <p class="intro">Zwei KI-Tools, die sich perfekt erg&auml;nzen: NotebookLM versteht deine Quellen, Claude Code macht etwas daraus. Dieser Guide zeigt dir Schritt f&uuml;r Schritt, wie du beide Tools in einem Workflow verbindest, der dir beim Literatur-Review, beim Forschungsantrag und bei der Kongressnachbereitung Stunden spart &mdash; ohne dass du die inhaltliche Kontrolle abgibst.</p>


        <!-- ===== SEITE 1 ===== -->
        <div class="section-label">Seite 1 von 5</div>
        <h2>Warum diese Kombination so stark ist</h2>

        <h3>1.1 Zwei Tools, zwei St&auml;rken</h3>
        <p>NotebookLM und Claude Code l&ouml;sen isoliert betrachtet unterschiedliche Probleme. NotebookLM ist Googles Werkzeug f&uuml;r quellenbasierte Analyse: Du l&auml;dst PDFs, Webseiten oder Google-Docs-Dateien hoch, und das Tool generiert daraus Zusammenfassungen, Briefing Docs und Audio Overviews &mdash; immer streng verankert in den Quellen, die du vorgibst. Es erfindet nichts dazu und kennzeichnet jeden Satz mit der Herkunftsquelle. Das macht es ideal f&uuml;r den ersten Schritt im Forschungsprozess: das tiefe Verstehen einer Literatursammlung.</p>

        <p>Claude Code dagegen ist ein Werkzeug f&uuml;r Struktur und Automation. Es liest und schreibt Dateien auf deinem Rechner, erstellt Tabellen, formatiert Texte, baut Vergleichsmatrizen und kann ganze Ordnerstrukturen anlegen. Wenn du aus einem Briefing Doc eine APA-konforme Literatur&uuml;bersicht oder eine Vergleichstabelle mit Methodik-Unterschieden brauchst, ist Claude Code das richtige Werkzeug.</p>

        <h3>1.2 Die L&uuml;cke, die beide zusammen schlie&szlig;en</h3>
        <p>In der Praxis entsteht zwischen dem Lesen von Papers und dem fertigen Output &mdash; sei es ein Forschungsantrag, ein Review-Artikel oder eine strukturierte Zusammenfassung &mdash; eine L&uuml;cke. Du hast die Inhalte verstanden, aber das &Uuml;berf&uuml;hren in ein sauberes Dokument kostet Zeit, die nicht inhaltlich produktiv ist. Genau hier greifen die beiden Tools ineinander: NotebookLM liefert dir die inhaltliche Grundlage, Claude Code &uuml;bernimmt die Strukturierung und Weiterverarbeitung.</p>

        <p>Statt manuell zwischen Zotero, einem Texteditor und einer Tabellenkalkulation hin und her zu wechseln, hast du einen durchg&auml;ngigen Workflow, bei dem die Quellenarbeit und die Ergebnis&shy;aufbereitung nahtlos zusammenh&auml;ngen.</p>

        <h3>1.3 F&uuml;r wen dieser Workflow gedacht ist</h3>
        <p>Der hier beschriebene Ansatz eignet sich f&uuml;r alle, die regelm&auml;&szlig;ig mit wissenschaftlicher Literatur arbeiten: Forschende an Hochschulen, die systematische Reviews oder Forschungsantr&auml;ge schreiben; Dozierende, die Lehrmaterial aus aktueller Evidenz aufbereiten; Health Professionals, die Kongressvortr&auml;ge oder Fortbildungsinhalte nachbereiten; und Tech-Leute, die sich in ein neues Fachgebiet einarbeiten und dabei Struktur brauchen.</p>

        <div class="callout">
          <strong>Was du brauchst:</strong><br>
          &bull; Ein Google-Konto f&uuml;r <a href="https://notebooklm.google.com">NotebookLM</a> (kostenlos)<br>
          &bull; Claude Code als CLI, Desktop-App oder &uuml;ber <a href="https://claude.ai">claude.ai</a><br>
          &bull; Deine Papers als PDF, oder Links zu Google Docs, Webseiten und YouTube-Videos
        </div>


        <!-- ===== SEITE 2 ===== -->
        <div class="section-label">Seite 2 von 5</div>
        <h2>NotebookLM &mdash; Dein Forschungsassistent</h2>

        <h3>2.1 Was NotebookLM kann</h3>
        <p>NotebookLM ist kein Chatbot im klassischen Sinne, sondern ein quellenbasiertes Analyse-Tool. Der entscheidende Unterschied: Jede Antwort, die NotebookLM gibt, bezieht sich ausschlie&szlig;lich auf die Quellen, die du hochgeladen hast. Es durchsucht nicht das Internet und halluziniert keine Fakten hinzu. Wenn du eine Frage stellst, die sich aus deinen Quellen nicht beantworten l&auml;sst, sagt es dir das &mdash; statt eine plausibel klingende Antwort zu erfinden.</p>

        <p>Du kannst bis zu 50 Quellen pro Notebook hochladen: PDFs, Google-Docs-Dokumente, Webseiten-URLs, YouTube-Videos (mit Transkript), kopierte Textbl&ouml;cke und sogar Audio-Dateien. Jede Quelle kann bis zu 500.000 W&ouml;rter umfassen, was selbst umfangreiche Monografien oder l&auml;ngere Buchkapitel abdeckt.</p>

        <h3>2.2 Ein Notebook f&uuml;r dein Forschungsthema anlegen</h3>
        <p>Der erste Schritt ist immer derselbe: &Ouml;ffne <a href="https://notebooklm.google.com">notebooklm.google.com</a>, erstelle ein neues Notebook und gib ihm einen klaren Namen, der dein Forschungsthema widerspiegelt &mdash; zum Beispiel &bdquo;Kn&ouml;chelverletzungen Return-to-Sport Evidenz&ldquo; oder &bdquo;Large Language Models in der Hochschullehre&ldquo;. Dann lädst du deine Quellen hoch, entweder einzeln oder als Stapel.</p>

        <p>Ein praktischer Tipp: Lade nicht einfach alles hoch, was du zu deinem Thema hast. Kuratiere deine Quellen bewusst. Zehn gut ausgew&auml;hlte Paper, die dein Forschungsfeld abdecken, liefern bessere Ergebnisse als 50 nur halbwegs relevante. NotebookLM gewichtet nicht nach Relevanz &mdash; es behandelt alle Quellen gleich.</p>

        <h3>2.3 Die drei wichtigsten Funktionen f&uuml;r Forschende</h3>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Quellen-Chat</span>
          <p>Du stellst Fragen direkt an deine Quellensammlung. NotebookLM antwortet mit Inline-Zitaten, die du anklicken kannst, um zur Originalstelle im Dokument zu springen. Beispiel: &bdquo;Welche Studien verwenden ein Crossover-Design, und wie gro&szlig; sind die Stichproben?&ldquo; &mdash; du bekommst eine pr&auml;zise Antwort mit Verweisen auf die konkreten Paper.</p>
          <p class="use-case">Einsatz: Schnelle Faktenpr&uuml;fung, Methodik-Vergleiche, L&uuml;ckenanalyse</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Briefing Doc</span>
          <p>Das Briefing Doc ist eine automatisch generierte Zusammenfassung aller deiner Quellen in einem strukturierten Format. Es enth&auml;lt die Kernthesen, wiederkehrende Befunde, offene Fragen und Widerspr&uuml;che zwischen den Quellen. Jeder Abschnitt ist mit den jeweiligen Quellen verlinkt, sodass du nachvollziehen kannst, woher jede Aussage stammt.</p>
          <p class="use-case">Einsatz: &Uuml;berblick &uuml;ber Forschungsstand, Ausgangspunkt f&uuml;r eigene Texte</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Quellenverweise &amp; Notes</span>
          <p>Jede Antwort von NotebookLM enth&auml;lt nummerierte Quellenverweise, die du per Klick &ouml;ffnen kannst. Zus&auml;tzlich kannst du einzelne Antworten als &bdquo;Notes&ldquo; speichern &mdash; das sind Bausteine, die du sp&auml;ter exportieren oder weiterverarbeiten kannst. Notes lassen sich als Grundlage f&uuml;r die Arbeit mit Claude Code nutzen.</p>
          <p class="use-case">Einsatz: Zitatsammlungen, Argumentationsketten, Export f&uuml;r Weiterverarbeitung</p>
        </div>

        <div class="callout">
          <strong>Tipp:</strong> Das Briefing Doc ist der ideale Ausgangspunkt f&uuml;r alles Weitere. Es fasst deine gesamte Quellensammlung in einem strukturierten Dokument zusammen, das du direkt an Claude Code weiterreichen kannst. Generiere immer zuerst ein Briefing Doc, bevor du mit der Weiterverarbeitung beginnst &mdash; es spart dir mehrere Zwischenschritte.
        </div>


        <!-- ===== SEITE 3 ===== -->
        <div class="section-label">Seite 3 von 5</div>
        <h2>Claude Code &mdash; Vom Ergebnis zum Workflow</h2>

        <h3>3.1 Was Claude Code f&uuml;r Forschende leistet</h3>
        <p>Claude Code arbeitet direkt mit Dateien auf deinem Rechner. Es kann Texte lesen, neue Dateien erstellen, Inhalte umstrukturieren und komplexe Transformationen durchf&uuml;hren &mdash; alles &uuml;ber nat&uuml;rlichsprachliche Anweisungen. F&uuml;r Forschende bedeutet das: Du beschreibst, was du brauchst, und Claude Code liefert das Ergebnis als fertige Datei.</p>

        <p>Im Kontext dieses Workflows nimmt Claude Code das Briefing Doc oder die Notes aus NotebookLM entgegen und verwandelt sie in das Format, das du tats&auml;chlich brauchst: eine Vergleichstabelle, ein Literaturverzeichnis, eine strukturierte Zusammenfassung oder einen ersten Entwurf f&uuml;r einen Abschnitt deines Papers.</p>

        <h3>3.2 Drei Prompts, die du direkt &uuml;bernehmen kannst</h3>
        <p>Die folgenden drei Prompts decken die h&auml;ufigsten Aufgaben ab, die nach der Arbeit mit NotebookLM anfallen. Du kannst sie direkt in Claude Code (CLI, Desktop oder Web) verwenden, nachdem du dein Briefing Doc oder deine Notes exportiert hast.</p>

        <div class="step-card">
          <span class="step-label">Prompt 1</span>
          <span class="step-title">Vergleichstabelle der Studien</span>
          <p>Dieser Prompt nimmt ein Briefing Doc und extrahiert die Kerndaten jeder Studie in eine &uuml;bersichtliche Tabelle &mdash; ideal f&uuml;r den Methodik-Teil eines Reviews.</p>
<pre>Lies das Briefing Doc in briefing-doc.md und erstelle eine
Markdown-Tabelle mit folgenden Spalten:
Autor/Jahr | Design | Stichprobe (n) | Intervention |
Prim&auml;res Outcome | Hauptergebnis | Evidenzlevel

Sortiere nach Erscheinungsjahr. Speichere die
Tabelle als studien-vergleich.md.</pre>
        </div>

        <div class="step-card">
          <span class="step-label">Prompt 2</span>
          <span class="step-title">Methodik-Unterschiede zusammenfassen</span>
          <p>Wenn du verstehen willst, warum Studien zu unterschiedlichen Ergebnissen kommen, hilft dieser Prompt beim systematischen Vergleich der methodischen Ans&auml;tze.</p>
<pre>Analysiere das Briefing Doc in briefing-doc.md und fasse
die Methodik-Unterschiede der enthaltenen Studien zusammen.
Fokussiere auf: Studiendesign, Einschlusskriterien,
Messinstrumente, Follow-up-Zeitr&auml;ume und statistische
Verfahren. Schreibe das Ergebnis als strukturierten
Flie&szlig;text mit nummerierten Unterabschnitten.
Speichere als methodik-analyse.md.</pre>
        </div>

        <div class="step-card">
          <span class="step-label">Prompt 3</span>
          <span class="step-title">Literaturverzeichnis im APA-Format</span>
          <p>Aus einem Briefing Doc l&auml;sst sich ein sauberes Literaturverzeichnis generieren, das du direkt in dein Manuskript &uuml;bernehmen kannst &mdash; vorausgesetzt, die bibliografischen Angaben sind in den Quellen enthalten.</p>
<pre>Extrahiere aus briefing-doc.md alle erw&auml;hnten Studien
und erstelle ein Literaturverzeichnis im APA 7th Edition
Format. Verwende die vollst&auml;ndigen Titel, alle Autoren
(kein Abk&uuml;rzen bei weniger als 20 Autoren), DOI wenn
vorhanden. Sortiere alphabetisch nach Erstautor.
Speichere als literaturverzeichnis.md.</pre>
        </div>

        <div class="callout">
          <strong>Weiterf&uuml;hrend:</strong> Claude Code kann weit mehr als Tabellen und Verzeichnisse. Du kannst dir Obsidian-Notizen im Zettelkasten-Format erstellen lassen, Markdown-Dateien in eine bestimmte Ordnerstruktur sortieren oder sogar ein kleines Analyse-Skript schreiben lassen, das bestimmte Muster in deinen Daten identifiziert. Der Schl&uuml;ssel ist: Je konkreter dein Prompt, desto besser das Ergebnis.
        </div>


        <!-- ===== SEITE 4 ===== -->
        <div class="section-label">Seite 4 von 5</div>
        <h2>Der komplette Workflow: Paper &rarr; Ergebnis</h2>

        <h3>4.1 Sechs Schritte vom Thema zum fertigen Output</h3>
        <p>Der folgende Workflow verbindet NotebookLM und Claude Code zu einem durchg&auml;ngigen Prozess. Du kannst ihn f&uuml;r Literatur-Reviews, Forschungsantr&auml;ge und Fortbildungszusammen&shy;fassungen gleicherma&szlig;en verwenden &mdash; nur der letzte Schritt unterscheidet sich, je nachdem welchen Output du brauchst.</p>

        <div class="step-card">
          <span class="step-label">Schritt 1</span>
          <span class="step-title">Forschungsfrage formulieren</span>
          <p>Bevor du ein einziges Paper &ouml;ffnest, formuliere deine Forschungsfrage so pr&auml;zise wie m&ouml;glich. Eine gute Forschungsfrage grenzt Population, Intervention und Outcome ein &mdash; das spart dir sp&auml;ter bei der Quellenauswahl viel Zeit. Beispiel: &bdquo;Welche Evidenz gibt es f&uuml;r Blood Flow Restriction Training bei postoperativer Rehabilitation nach VKB-Rekonstruktion bei Amateursportlern?&ldquo;</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 2</span>
          <span class="step-title">Paper sammeln</span>
          <p>Nutze OpenAlex, PubMed oder Google Scholar, um relevante Paper zu finden. Lade die PDFs herunter oder speichere die Links. Achte auf eine bewusste Auswahl: Lieber 15 hochrelevante Studien als 40, von denen die H&auml;lfte nur am Rande passt. Tipp: Sortiere nach Erscheinungsjahr und priorisiere systematische Reviews und Meta-Analysen, bevor du Einzelstudien hinzuf&uuml;gst.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 3</span>
          <span class="step-title">Papers in NotebookLM laden</span>
          <p>Erstelle ein neues Notebook mit einem klaren Namen und lade deine Quellen hoch. NotebookLM akzeptiert bis zu 50 Quellen pro Notebook. Nutze die automatischen Zusammenfassungen der einzelnen Quellen, die beim Upload generiert werden, um schnell zu pr&uuml;fen, ob jedes Paper tats&auml;chlich relevant ist. Entferne Quellen, die nicht passen, bevor du zum n&auml;chsten Schritt gehst.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 4</span>
          <span class="step-title">Briefing Doc generieren lassen</span>
          <p>Klicke in NotebookLM auf &bdquo;Briefing Doc&ldquo; unter den Studio-Artefakten. Das Tool analysiert alle deine Quellen und erstellt eine strukturierte &Uuml;bersicht mit Kernbefunden, offenen Fragen und Widerspr&uuml;chen. Lies das Briefing Doc einmal komplett durch und pr&uuml;fe, ob die Schwerpunkte zu deiner Forschungsfrage passen. Falls nicht, stelle im Quellen-Chat gezielte Nachfragen, um die fehlenden Aspekte zu erg&auml;nzen.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 5</span>
          <span class="step-title">Briefing Doc in Claude Code weiterverarbeiten</span>
          <p>Exportiere das Briefing Doc als Text oder Markdown und &uuml;bergib es an Claude Code. Je nachdem, was du brauchst, verwendest du einen der Prompts aus Seite 3 oder formulierst eine eigene Anweisung. Claude Code liest die Datei, verarbeitet den Inhalt und speichert das Ergebnis als neue Datei auf deinem Rechner &mdash; fertig formatiert und bereit zur Weiterverwendung.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 6</span>
          <span class="step-title">Output: Tabelle, Zusammenfassung oder Draft</span>
          <p>Der letzte Schritt h&auml;ngt von deinem Ziel ab. F&uuml;r einen Literatur-Review brauchst du eine Vergleichstabelle und eine Gap-Analyse. F&uuml;r einen Forschungsantrag brauchst du einen Abschnitt zum Stand der Forschung. F&uuml;r eine Fortbildungsnachbereitung brauchst du strukturierte Notizen. Claude Code liefert dir in jedem Fall eine Datei, die du direkt in dein Zieldokument &uuml;bernehmen oder als Grundlage f&uuml;r deine eigene Formulierung nutzen kannst.</p>
        </div>

        <div class="highlight-box">
          <strong>Warum das funktioniert:</strong> Dieser Workflow spart nicht nur Zeit bei der Formatierung und Strukturierung, sondern verhindert auch, dass du Stunden mit Papers verbringst, die sich am Ende als irrelevant herausstellen. NotebookLM hilft dir, fr&uuml;hzeitig zu erkennen, welche Quellen zu deiner Frage passen &mdash; und Claude Code sorgt daf&uuml;r, dass der &Uuml;bergang vom Lesen zum Schreiben keine Reibungsverluste erzeugt.
        </div>

        <h3>4.2 Den Workflow an dein Projekt anpassen</h3>
        <p>Die sechs Schritte sind ein Grundger&uuml;st, das du je nach Projektgr&ouml;&szlig;e anpassen kannst. Bei einem kleinen Fortbildungsbericht reichen f&uuml;nf bis zehn Quellen und ein einziger Claude-Code-Prompt. Bei einem systematischen Review mit 30 Studien wirst du Schritt 4 und 5 mehrfach iterieren: erst ein &Uuml;berblicks-Briefing generieren, dann gezielte Nachfragen im Quellen-Chat stellen und die Ergebnisse in mehreren Durchg&auml;ngen durch Claude Code verfeinern.</p>

        <p>Du kannst au&szlig;erdem mehrere Notebooks f&uuml;r verschiedene Teilaspekte deines Themas anlegen. Ein Notebook f&uuml;r die Grundlagenforschung, eines f&uuml;r klinische Studien, eines f&uuml;r methodische Literatur &mdash; und die jeweiligen Briefing Docs dann in Claude Code zusammenf&uuml;hren.</p>


        <!-- ===== SEITE 5 ===== -->
        <div class="section-label">Seite 5 von 5</div>
        <h2>3 konkrete Anwendungen</h2>

        <h3>5.1 Systematischer Literatur-Review</h3>
        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Vom Paper-Stapel zur Gap-Analyse</span>
          <p>Du hast 20 Papers zu einem Thema gesammelt &mdash; zum Beispiel zur Wirksamkeit von Telerehabilitation nach H&uuml;ft-TEP. In NotebookLM l&auml;dst du alle Papers hoch und generierst ein Briefing Doc, das die Kernbefunde, methodischen Ans&auml;tze und Widerspr&uuml;che zwischen den Studien zusammenfasst. Im Quellen-Chat fragst du gezielt: &bdquo;Welche Outcomes werden in allen Studien gemessen, und welche nur in einzelnen?&ldquo;</p>
          <p>Dann &uuml;bergibst du das Briefing Doc an Claude Code mit dem Auftrag, eine Vergleichstabelle und eine Gap-Analyse zu erstellen. Die Tabelle zeigt auf einen Blick, welche Studien welche Endpunkte untersuchen, und die Gap-Analyse benennt die Forschungsl&uuml;cken, die sich aus dem Vergleich ergeben. Das Ergebnis speicherst du als Markdown-Datei und verwendest es als Grundlage f&uuml;r den Ergebnis- und Diskussionsteil deines Reviews.</p>
          <ul>
            <li><strong>NotebookLM:</strong> Paper hochladen &rarr; Briefing Doc &rarr; Quellen-Chat f&uuml;r Detailfragen</li>
            <li><strong>Claude Code:</strong> Briefing Doc lesen &rarr; Vergleichstabelle + Gap-Analyse erstellen &rarr; als .md speichern</li>
            <li><strong>Ergebnis:</strong> Strukturierter Review-Grundriss, der sofort weiterverarbeitet werden kann</li>
          </ul>
        </div>

        <h3>5.2 Forschungsantrag vorbereiten</h3>
        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Stand der Forschung in zwei Stunden</span>
          <p>F&uuml;r einen DFG-Antrag oder ein Drittmittelprojekt brauchst du einen &uuml;berzeugenden Abschnitt zum aktuellen Forschungsstand. Statt jedes Paper einzeln durchzuarbeiten und manuell zu exzerpieren, sammelst du die 15 wichtigsten Publikationen in einem NotebookLM-Notebook und l&auml;sst dir ein Briefing Doc generieren. Im Quellen-Chat vertiefst du die methodischen Aspekte und identifizierst die offenen Fragen, auf die dein Projektantrag eine Antwort liefern soll.</p>
          <p>Claude Code &uuml;bernimmt dann die Formatierung: Es strukturiert das Briefing Doc in nummerierte Unterabschnitte (1.1 Epidemiologie, 1.2 Aktuelle Therapieans&auml;tze, 1.3 Forschungsl&uuml;cken), generiert ein APA-konformes Literaturverzeichnis und bringt den Text in ein Format, das du direkt in deine Antragsvorlage einf&uuml;gen kannst.</p>
          <ul>
            <li><strong>NotebookLM:</strong> Schl&uuml;sselpaper hochladen &rarr; Briefing Doc &rarr; offene Fragen identifizieren</li>
            <li><strong>Claude Code:</strong> Briefing Doc strukturieren &rarr; Stand der Forschung formulieren &rarr; Literaturverzeichnis (APA 7th)</li>
            <li><strong>Ergebnis:</strong> Antragsf&auml;higer Forschungsstand-Abschnitt mit Verzeichnis</li>
          </ul>
        </div>

        <h3>5.3 Fortbildungs-Zusammenfassung</h3>
        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Vom Kongress ins Wissenssystem</span>
          <p>Nach einem Fachkongress oder einer mehrt&auml;gigen Fortbildung hast du typischerweise eine Mischung aus Handouts, heruntergeladenen Papers, eigenen Notizen und vielleicht Aufzeichnungen von Vortr&auml;gen. Statt diese unstrukturiert in einem Ordner liegen zu lassen, lädst du sie in ein NotebookLM-Notebook und generierst ein Briefing Doc, das die zentralen Erkenntnisse aller Vortr&auml;ge zusammenfasst.</p>
          <p>Dann gibst du Claude Code den Auftrag, aus dem Briefing Doc strukturierte Notizen f&uuml;r dein Wissenssystem zu erstellen &mdash; zum Beispiel im Obsidian-Format mit YAML-Frontmatter, Tags und Verlinkungen. Jede Notiz bekommt eine klare Struktur: Kernaussage, Evidenz, Praxisrelevanz, weiterf&uuml;hrende Quellen. So wird aus einem fl&uuml;chtigen Kongressbesuch ein dauerhaftes Wissensfundament, auf das du Monate sp&auml;ter zur&uuml;ckgreifen kannst.</p>
          <ul>
            <li><strong>NotebookLM:</strong> Vortrags-PDFs + eigene Notizen hochladen &rarr; Briefing Doc</li>
            <li><strong>Claude Code:</strong> Briefing Doc in Obsidian-Notizen umwandeln &rarr; Tags + Links + Frontmatter</li>
            <li><strong>Ergebnis:</strong> Vernetzte Wissensnotizen, die in dein bestehendes System passen</li>
          </ul>
        </div>

        <div class="golden-rule">
          <h2>Die Goldene Regel</h2>
          <p>NotebookLM versteht deine Quellen. Claude Code macht etwas daraus. Beide zusammen ersetzen nicht dein fachliches Urteil &mdash; aber sie geben dir die Grundlage, auf der du schneller, strukturierter und mit weniger Reibungsverlusten entscheiden kannst.</p>
          <p style="margin-top:12px"><strong>Das bedeutet konkret:</strong> Lies das Briefing Doc immer kritisch gegen, bevor du es weiterverarbeitest. Pr&uuml;fe, ob die von Claude Code generierten Tabellen und Zusammenfassungen inhaltlich korrekt sind. Und nutze die gesparte Zeit nicht, um mehr Papers oberfl&auml;chlich zu &uuml;berfliegen, sondern um weniger Papers gr&uuml;ndlicher zu durchdenken. Die Werkzeuge &uuml;bernehmen die mechanische Arbeit &mdash; die intellektuelle bleibt bei dir.</p>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-notebooklm', OxGuideClaudeNotebooklm);
