class OxGuideClaudeCowork20 extends HTMLElement {
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

.folder-tree{
  background:#0d1117;border:1px solid #2a2a2a;border-radius:8px;
  padding:16px 20px;margin:16px 0 24px;font-family:var(--mono);
  font-size:13.6px;line-height:2;color:var(--text-secondary);
}
.folder-tree .folder{color:var(--primary-light)}
.folder-tree .file{color:var(--text)}

.step-number{
  display:inline-flex;align-items:center;justify-content:center;
  width:26px;height:26px;border-radius:50%;background:var(--primary);
  color:var(--white);font-size:13px;font-weight:700;margin-right:10px;flex-shrink:0;
}
.step{display:flex;align-items:flex-start;gap:0;margin-bottom:16px}
.step-content{flex:1}

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
  .quickstart-grid{grid-template-columns:1fr}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Claude Cowork 2.0 &mdash; Das komplette Setup</h1>
        <div class="meta">6-Seiten-Guide &middot; Out Of The Box Science &middot; April 2026</div>

        <p>Claude Cowork ist mehr als ein Chat-Fenster. Es arbeitet direkt in deinem Ordner, kennt deine Projekte, und erledigt Aufgaben selbstst&auml;ndig &mdash; ohne dass du jedes Mal erkl&auml;ren musst, wer du bist und was du willst.</p>

        <p>Dieser Guide zeigt das aktuelle Setup: wie der Ordner aufgebaut ist, welche drei Dateien Cowork vor jeder Aufgabe liest, wie du per Sprache statt Tippen arbeitest, wie du Credits sparst &mdash; und vier Szenarien aus Lehre und Forschung die Ruben nicht abdeckt.</p>

        <div class="tip-box">
          <strong>Voraussetzung:</strong> Claude Desktop App (<a href="https://claude.com/download">claude.com/download</a>) + bezahltes Abo (Claude Pro, 20 &euro;/Monat). Cowork ist der Tab zwischen Chat und Code in der Desktop-App.
        </div>

        <h2>I &mdash; Der Cowork-Ordner</h2>

        <p>Cowork funktioniert innerhalb eines Ordners auf deinem Rechner. Dieser Ordner ist Grundlage f&uuml;r jede Session. Lege einmal die folgende Struktur an &mdash; danach f&uuml;llt sich der Rest von selbst.</p>

        <div class="folder-tree">
          <span class="folder">&#128193; Claude Cowork/</span><br>
          &nbsp;&nbsp;<span class="folder">&#128193; ABOUT ME/</span><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="file">&#128196; about-me.md</span><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="file">&#128196; anti-ai-writing-style.md</span><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="file">&#128196; my-company.md</span><br>
          &nbsp;&nbsp;<span class="folder">&#128193; OUTPUTS/</span><br>
          &nbsp;&nbsp;<span class="folder">&#128193; TEMPLATES/</span>
        </div>

        <p><strong>ABOUT ME</strong> ist der einzige Ordner den Cowork automatisch liest &mdash; vor jeder Aufgabe, in jeder Session. <strong>OUTPUTS</strong> ist f&uuml;r Ergebnisse. <strong>TEMPLATES</strong> f&uuml;r Formate die du wiederverwenden willst. Die letzten beiden liest Cowork nur wenn du es explizit fragst.</p>

        <h3>Datei 1 &mdash; about-me.md</h3>

        <p>Wer du bist, wie du arbeitest, und was du von Claude erwartest. Ziel: unter 2.000 W&ouml;rter, hochkonzentriert. Kein Rohmaterial, keine Transkripte &mdash; nur die destillierten Muster.</p>

        <p>Paste diesen Prompt in eine neue Cowork-Session. Cowork interviewt dich dann mit 20 Fragen und schreibt die Datei selbst:</p>

        <pre>Du baust meine about-me.md-Datei f&uuml;r meinen Cowork-Ordner.
Claude liest diese Datei zu Beginn jeder Session.
Sie muss kurz und hochrelevant sein.

Deine Aufgabe: Interviewe mich mit AskUserQuestion (20 Fragen),
dann fasse die Antworten zu einer kondensierten about-me.md
unter 2.000 Tokens zusammen.

Interview-Themen: Wer ich bin + meine Rolle, wie ich Tag f&uuml;r Tag
arbeite, wie gute Ergebnisse in meinem Feld aussehen, was ich hasse
(schlechte Muster, KI-Phrasen, falscher Ton), und meine harten Regeln.

Nach dem Interview: Alles zu strukturiertem Markdown verdichten.
Keine rohen Q&amp;A-Protokolle, kein F&uuml;llmaterial. Muster extrahieren,
kondensierte Prosa schreiben.
Speichere als about-me.md in meinem ABOUT ME/-Ordner.</pre>

        <div class="warn-box">
          <strong>Wichtig:</strong> Halte die Datei unter 2.000 Tokens. Cowork liest sie vor jeder Aufgabe komplett. Zu gro&szlig;e Dateien werden nur noch zusammengefasst &mdash; der Vorteil geht verloren.
        </div>

        <h3>Beispiel: about-me.md f&uuml;r eine:n Dozent:in</h3>
        <p>So sieht eine fertige Datei aus &mdash; als Referenz oder zum Anpassen:</p>
        <pre># ABOUT ME: Dozent Sportmedizin

## Wer ich bin
Physiotherapeut + Dozent an zwei Hochschulen (HAW,
priv. FH). Fachbereich: Sportmedizin, Rehabilitation.
Lehrformate: 90-Min-Vorlesung, Seminare, Praktika.

## Wie ich arbeite
Vorbereitung in Obsidian-Vault. Prim&auml;rquellen aus
PubMed + Physio-Network. Handouts als Markdown &rarr; PDF.
Zitierung immer APA 7th, exakte Titel, nichts k&uuml;rzen.

## Was gut aussieht
Evidenzbasiert mit Prim&auml;rquellen. Struktur vor Stil.
Wenn ein Student den Text liest und die Methode
reproduzieren kann = gut.

## Was ich hasse
"Ganzheitlich", "harmonisch", "revolution&auml;r" &mdash;
Marketing-Sprech in Fachtexten. Staccato-S&auml;tze.
Einwort-Abs&auml;tze f&uuml;r Drama. KI-Tapestry-Metaphern.

## Regeln f&uuml;r Claude
1. APA 7th, exakte Titel, nie abk&uuml;rzen
2. Deutsch in Lehrmaterial, Englisch in Paper-Drafts
3. Quellen immer, keine Behauptungen ohne Beleg
4. Flie&szlig;text, nicht Stichpunkt-Terror
5. Bei Unsicherheit nachfragen, nicht raten</pre>

        <h3>Datei 2 &mdash; anti-ai-writing-style.md</h3>

        <p>Deine Liste verbotener W&ouml;rter und Muster. Ohne diese Datei schreibt Claude wie Claude. Mit ihr schreibt es wie du.</p>

        <p>Typischer Inhalt: W&ouml;rter die du vermeidest (<em>delve, harness, tapestry, nahtlos, revolutionieren</em>), Satzm&uuml;ster die dich nerven (<em>&bdquo;Das ist nicht X, das ist Y&ldquo;</em>), Formatierungsregeln (z.B. max. 3 S&auml;tze pro Absatz, keine Bullet-Listen &uuml;berall).</p>

        <p>Du brauchst keine perfekte Datei zum Start. Schreib rein was dich st&ouml;rt, und erg&auml;nze sie wenn du etwas Neues nervt.</p>

        <h3>Datei 3 &mdash; my-company.md</h3>

        <p>Deine Ziele, deine Strategie, und was du gerade sagst. Kein &Uuml;berlapp mit about-me &mdash; nur Richtung, Priorit&auml;ten, konkrete Zahlen. Update wenn sich etwas &auml;ndert, nicht nach Kalender.</p>

        <pre>Du baust meine my-company.md f&uuml;r meinen Cowork-Ordner.
Diese Datei sagt Claude, worauf ich gerade hinarbeite.

Interviewe mich mit AskUserQuestion (6-8 Fragen) zu:
- Meine Top 2-3 Ziele dieses Jahr (konkrete Zahlen oder Meilensteine)
- Welche Plattformen / Kan&auml;le / M&auml;rkte jetzt wichtig sind
- Wozu ich aktiv Nein sage
- Worin ich dieses Quartal die meiste Zeit und Energie stecke

Nach dem Interview: zu my-company.md verdichten, Bullet Points,
unter 1.000 Tokens. Speichere im ABOUT ME/-Ordner.</pre>

        <hr class="divider">

        <h2>II &mdash; Global Instructions</h2>

        <p>Global Instructions ist ein Prompt den Cowork vor jeder Aufgabe liest. Hier erkl&auml;rst du, wie dein Ordner aufgebaut ist und was Cowork damit machen soll.</p>

        <p><strong>Settings &rarr; Cowork &rarr; Edit Global Instructions</strong> &mdash; l&ouml;sche was dort steht und ersetze es durch:</p>

        <pre>Vor jeder einzelnen Aufgabe lies jede Datei in ABOUT ME/:
- about-me: wer ich bin, wie ich arbeite, was ich liebe und hasse
- anti-ai-writing-style: wende diese Regeln auf jeden Text an
- my-company: meine Ziele, mein Fokus, wozu ich Nein sage

Lies niemals OUTPUTS/ oder TEMPLATES/, au&szlig;er ich zeige dir
explizit auf eine Datei dort.

Speichere alle Ergebnisse in OUTPUTS/ in einem Unterordner mit
dem Projektnamen.

Wenn der Auftrag unklar ist, nutze AskUserQuestion. F&uuml;lle keine
L&uuml;cken mit Floskeln. Keine &Uuml;berl&auml;nge. Liefere die Arbeit.</pre>

        <div class="highlight-box">
          <strong>Warum das wichtig ist:</strong> Cowork wei&szlig; sonst nicht was deine Dateien bedeuten oder wann es sie lesen soll. Mit diesen Instructions ist das einmal gekl&auml;rt &mdash; f&uuml;r jede zuk&uuml;nftige Session.
        </div>

        <h3>Templates automatisch f&uuml;llen</h3>

        <p>Wenn Cowork etwas gut macht, sagst du am Ende der Session einfach:</p>

        <p><em>&bdquo;Speicher das als Template in TEMPLATES/.&ldquo;</em></p>

        <p>Cowork entfernt den Inhalt, beh&auml;lt das Ger&uuml;st (Abschnitte, Reihenfolge, L&auml;nge), und speichert es. Beim n&auml;chsten Mal sagst du: <em>&bdquo;Nutze das Template in TEMPLATES/[name].&ldquo;</em></p>

        <hr class="divider">

        <h2>III &mdash; Spracheingabe statt Tippen</h2>

        <p>Cowork liest 100.000 W&ouml;rter in 15 Sekunden. Du tippst mit 60 W&ouml;rtern pro Minute. Das ist der Flaschenhals.</p>

        <p>Mit Spracheingabe redest du mit 150 W&ouml;rtern pro Minute &mdash; und du gibst mehr Kontext, weil sprechen nat&uuml;rlicher ist als Tippen. Mehr Kontext f&uuml;hrt zu besseren Ergebnissen.</p>

        <p><strong><a href="https://wispr.ai">Wispr Flow</a></strong> &uuml;bernimmt das. Du h&auml;ltst eine Taste, redest, l&auml;sst los &mdash; der Text erscheint wo auch immer dein Cursor steht. Auch im Cowork-Eingabefeld.</p>

        <h3>Setup in 3 Schritten</h3>
        <ol>
          <li><a href="https://wispr.ai">wispr.ai</a> &rarr; Download &rarr; Installieren</li>
          <li>Lieblingskurztaste ausw&auml;hlen (z.B. Shift). Dr&uuml;cken &rarr; Reden &rarr; Loslassen.</li>
          <li>Kostenlose Testversion: 2.000 W&ouml;rter/Woche. F&uuml;r den Start mehr als genug.</li>
        </ol>

        <div class="warn-box">
          <strong>DSGVO-Hinweis:</strong> Wispr Flow sendet dein Audio an US-Server zur Transkription. F&uuml;r sensible Inhalte (Patientendaten, studentische Arbeiten, interne Uni-Dokumente) problematisch. Alternative: <a href="https://superwhisper.com">SuperWhisper</a> &mdash; l&auml;uft lokal auf dem Mac, kein Cloud-Upload, etwas langsamer aber DSGVO-konform. Unsere Empfehlung: Wispr f&uuml;r &ouml;ffentliche Texte, SuperWhisper f&uuml;r alles andere.
        </div>

        <p>Drei Momente wo Spracheingabe den gr&ouml;&szlig;ten Unterschied macht:</p>

        <div class="highlight-box">
          <strong>1. Der erste Prompt</strong> &mdash; Statt &bdquo;LinkedIn-Post schreiben&ldquo; sagst du: &bdquo;Ich habe gerade herausgefunden dass... und m&ouml;chte teilen dass... aber wichtig dabei ist dass... also fang mit... an und ende mit...&ldquo; Mehr Kontext, besseres Ergebnis.
        </div>

        <div class="highlight-box">
          <strong>2. AskUserQuestion-Antworten</strong> &mdash; Cowork generiert ein Formular. Einfache Optionen klicken. Bei spezifischen Antworten sprechen statt tippen.
        </div>

        <div class="highlight-box">
          <strong>3. Feedback und Korrekturen</strong> &mdash; Statt &bdquo;Ton falsch, formeller&ldquo; sagst du: &bdquo;Der Ton ist zu steif. Ich will dass es klingt wie eine Nachricht an einen befreundeten Kollegen. Beh&auml;lt die Daten, aber schreib Abschnitt 2 neu.&ldquo;
        </div>

        <hr class="divider">

        <h2>IV &mdash; Credits sparen</h2>

        <p>Jede Nachricht die du sendest, liest Claude die gesamte bisherige Unterhaltung neu. Nachricht 30 kostet 31&times; mehr als Nachricht 1. Das l&auml;sst sich vermeiden.</p>

        <ol>
          <li><strong>Conversation neu starten statt Follow-up senden.</strong> Wenn Cowork etwas falsch macht: nicht &bdquo;Nein, ich meinte...&ldquo; anf&uuml;gen. Stattdessen auf einem fr&uuml;heren Prompt <em>Restart from here</em> klicken (unten rechts bei jeder Nachricht).</li>
          <li><strong>Neue Session nach ~20 Nachrichten.</strong> Lange Gespr&auml;che sind Token-&Ouml;fen. Lass Cowork alles zusammenfassen, kopiere es, starte eine neue Session mit der Zusammenfassung als erstem Prompt.</li>
          <li><strong>Mehrere Aufgaben in einer Nachricht b&uuml;ndeln.</strong> Drei separate Prompts = dreimal Kontext neu laden. Ein Prompt mit drei Aufgaben = einmal.</li>
          <li><strong>Sonnet f&uuml;r einfache Aufgaben nutzen.</strong> Rechtschreibung, Brainstorming, kurze Antworten. Opus nur f&uuml;r komplexe Arbeit, Extended Thinking nur wenn n&ouml;tig.</li>
          <li><strong>ABOUT ME-Dateien klein halten.</strong> Cowork liest sie vor jeder Aufgabe. 22.000 Tokens = 22.000 Tokens verschwendet bevor deine eigentliche Aufgabe beginnt. Ziel: unter 4.000 Tokens gesamt.</li>
          <li><strong>Arbeit &uuml;ber den Tag verteilen.</strong> Claude nutzt ein rollendes 5-Stunden-Fenster. Wer morgens alles verbrennt, hat nachmittags nichts mehr. Theoretisch sinnvoll &mdash; in der Praxis schwer. L&ouml;sung: h&ouml;heres Abo.</li>
        </ol>

        <hr class="divider">

        <h2>V &mdash; Cowork f&uuml;r Lehre und Forschung</h2>

        <p>Ruben schreibt f&uuml;r CEOs und Content-Creator. Im Hochschul- und Wissenschaftskontext sieht die Arbeit anders aus. Vier Szenarien die bei uns regelm&auml;&szlig;ig funktionieren:</p>

        <h3>Szenario 1 &mdash; Vorlesung aktualisieren</h3>
        <p>Neue Leitlinien kommen raus, die alte Vorlesung muss mit. Statt stundenlang querzulesen:</p>
        <pre>Lies Semester-SS26/vorlesung-03-knie.md. Vergleiche
den Inhalt mit den drei neuen Papers in
literatur/knie-2026/. Schlag mir die drei wichtigsten
Updates f&uuml;r die Folien vor &mdash; mit Seitenangabe in
der alten Vorlesung und Quelle aus dem neuen Paper.</pre>

        <h3>Szenario 2 &mdash; Bachelorarbeit begutachten</h3>
        <p>Ein Gutachten f&uuml;r eine studentische Arbeit. Dein Bewertungsraster liegt schon als Template vor:</p>
        <pre>Lies gutachten/mueller-ba.pdf. Erstelle strukturiertes
Feedback nach meinem Raster in TEMPLATES/bewertungsraster.md.
Fokus: Methodik, Quellenarbeit, rote F&auml;den.
Keine Wertung &mdash; nur Beobachtungen mit Seitenangabe.
Speichere als OUTPUTS/gutachten-mueller/feedback.md.</pre>

        <h3>Szenario 3 &mdash; Klausurfragen generieren</h3>
        <p>Aus dem Semester-Material eine Klausur ableiten, ohne alles selbst zu formulieren:</p>
        <pre>Aus den 6 Vorlesungen in Semester-SS26/ generiere
20 MC-Fragen mit 4 Antworten, je eine richtig.
Schwierigkeit gemischt (40% Verst&auml;ndnis, 40% Anwendung,
20% Transfer). L&ouml;sungsdokument separat.
Speichere Klausur und L&ouml;sung in
OUTPUTS/klausur-ss26/.</pre>

        <h3>Szenario 4 &mdash; Paper-Draft schreiben</h3>
        <p>Aus der ausgewerteten Studie einen Results-Abschnitt, der nicht wie ChatGPT klingt:</p>
        <pre>Lies forschung/studie-knie-2026/datenauswertung.md.
Schreib den Results-Abschnitt nach dem Stil in
TEMPLATES/paper-results.md. Englisch, APA, Tabellen
als Markdown. Keine Claude-Phrasen (siehe
anti-ai-writing-style). Kein "delve", kein "nuanced".</pre>

        <div class="tip-box">
          <strong>Muster erkennen:</strong> Jedes Szenario hat drei Zutaten &mdash; Quelle (was lesen), Template/Stil (wie schreiben), Output-Ort (wo speichern). Wenn Cowork alle drei hat, braucht es kaum noch R&uuml;ckfragen.
        </div>

        <hr class="divider">

        <h2>VI &mdash; 20-Minuten-Quickstart</h2>

        <p>Kalender aufmachen, 20 Minuten blocken. Dann:</p>

        <div class="quickstart-grid">
          <div class="qs-card">
            <div class="qs-time">Minuten 0&ndash;5</div>
            <div class="qs-title">Ordnerstruktur anlegen</div>
            <div class="qs-desc">Claude Cowork-Ordner mit drei Unterordnern erstellen. Cowork starten, Ordner ausw&auml;hlen.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 5&ndash;10</div>
            <div class="qs-title">ABOUT ME-Dateien erstellen</div>
            <div class="qs-desc">Interview-Prompt f&uuml;r about-me.md starten. Antworten sprechen, nicht tippen. Danach my-company.md.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 10&ndash;12</div>
            <div class="qs-title">Global Instructions einf&uuml;gen</div>
            <div class="qs-desc">Settings &rarr; Cowork &rarr; Edit Global Instructions. Template aus Abschnitt II einf&uuml;gen und anpassen.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 12&ndash;14</div>
            <div class="qs-title">Wispr Flow installieren</div>
            <div class="qs-desc">wispr.ai &rarr; Download &rarr; Kurztaste einrichten. Im Cowork-Feld testen: Taste halten, sprechen, loslassen.</div>
          </div>
          <div class="qs-card">
            <div class="qs-time">Minuten 14&ndash;20</div>
            <div class="qs-title">Erste echte Session</div>
            <div class="qs-desc">Eine Aufgabe aus dieser Woche sprechen. Fragen beantworten. Ergebnis bewerten. Template speichern.</div>
          </div>
        </div>

        <div class="tip-box">
          <strong>Nach 3 Minuten wirst du den Unterschied sp&uuml;ren.</strong> Cowork kennt dich, deine Sprache, deine Ziele. Du erkl&auml;rst nichts mehr von Null.
        </div>

        <div class="footer">
          <p style="margin-bottom:12px;font-size:12.8px">Struktur, Interview-Prompts und Credit-Spar-Tipps basieren auf <a href="https://ruben.substack.com/p/claude-cowork-20">Cowork 2.0 von Ruben Hassid</a>. Dieser Guide &uuml;bersetzt, kondensiert und erg&auml;nzt das Original f&uuml;r den deutschsprachigen Lehr- und Wissenschaftskontext.</p>
          <p><a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-cowork-20', OxGuideClaudeCowork20);
