class OxGuide5MiniApps extends HTMLElement {
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

.step-box{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:24px 0;
}
.step-number{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;
  margin-right:8px;letter-spacing:0.03em;
}
.step-title{font-size:16.8px;font-weight:600;color:var(--white)}
.step-box p{margin-top:12px;margin-bottom:8px}

.prompt-block{background:#111;border:1px solid #222;border-radius:8px;padding:16px 20px;margin:16px 0 24px;font-size:14.4px;line-height:1.6;color:var(--text-secondary);white-space:pre-wrap;word-wrap:break-word;font-style:italic}
.prompt-label{display:block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.08em;color:var(--primary);margin-bottom:8px;font-weight:600;font-style:normal}

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
  .prompt-block{font-size:12.8px;padding:12px 14px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>5 Mini-Apps die du in 10 Minuten baust</h1>
        <div class="meta">4-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Du musst nicht programmieren k&ouml;nnen, um dir eigene Tools zu bauen. Claude Code nimmt deine Beschreibung, schreibt den Code und speichert das Ergebnis als HTML-Datei, die du direkt im Browser &ouml;ffnest. In diesem Guide zeigen wir dir f&uuml;nf Mini-Apps, die du in wenigen Minuten erstellst &mdash; jede einzelne l&ouml;st ein konkretes Problem aus dem Alltag von Dozenten, Forschenden und Health Professionals.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1</span>
        <h2>Was ist eine Mini-App?</h2>

        <h3>1.1 Die Idee</h3>
        <p>Eine Mini-App ist ein kleines, eigenst&auml;ndiges Tool, das Claude Code f&uuml;r dich baut &mdash; meistens eine einzelne HTML-Datei mit eingebautem CSS und JavaScript, die du direkt im Browser &ouml;ffnen kannst. Kein App Store, keine Installation, keine Datenbank im Hintergrund. Du doppelklickst die Datei, sie &ouml;ffnet sich im Browser, und du kannst sofort damit arbeiten.</p>

        <h3>1.2 Du schreibst keinen Code</h3>
        <p>Das ist der entscheidende Punkt: Du beschreibst in normaler Sprache, was du brauchst, und Claude Code schreibt den gesamten Code f&uuml;r dich. Du sagst zum Beispiel &bdquo;Erstelle mir ein Quiz zum Thema Schulteranatomie&ldquo;, und Claude Code liefert dir eine fertige Datei, die du im Browser &ouml;ffnest und sofort nutzen kannst. Der technische Teil passiert komplett im Hintergrund.</p>

        <h3>1.3 Warum das funktioniert</h3>
        <p>Claude Code kann HTML, CSS und JavaScript schreiben &mdash; die drei Sprachen, aus denen jede Webseite besteht. Wenn du eine Mini-App als einzelne HTML-Datei baust, brauchst du weder einen Server noch eine Datenbank noch einen Hosting-Anbieter. Die Datei liegt auf deinem Rechner, l&auml;uft im Browser, und du kannst sie beliebig oft &ouml;ffnen, kopieren oder an Kolleginnen weiterschicken.</p>

        <div class="callout">
          <strong>Alles was du brauchst:</strong> Claude Code (als CLI, Desktop-App oder im Browser auf claude.ai) und einen Browser. Keine Installation, keine Datenbank, kein Server. Die fertige HTML-Datei funktioniert offline und auf jedem Ger&auml;t mit einem Browser.
        </div>

        <h3>1.4 So baust du eine Mini-App</h3>

        <div class="step-box">
          <span class="step-number">Schritt 1</span>
          <span class="step-title">Prompt schreiben</span>
          <p>Beschreibe in ein paar S&auml;tzen, was deine Mini-App k&ouml;nnen soll. Je konkreter du bist, desto besser wird das Ergebnis &mdash; nenne das Thema, die gew&uuml;nschte Funktionalit&auml;t und wie die Datei hei&szlig;en soll.</p>
        </div>

        <div class="step-box">
          <span class="step-number">Schritt 2</span>
          <span class="step-title">Claude Code erstellt die Datei</span>
          <p>Claude Code schreibt den Code und speichert ihn als HTML-Datei auf deinem Rechner. Du siehst dabei zu, wie der Code entsteht, musst aber nichts davon verstehen.</p>
        </div>

        <div class="step-box">
          <span class="step-number">Schritt 3</span>
          <span class="step-title">Browser &ouml;ffnen &mdash; fertig</span>
          <p>Doppelklick auf die Datei, sie &ouml;ffnet sich im Browser, und du kannst sie sofort nutzen. Wenn etwas nicht passt, sagst du Claude Code, was ge&auml;ndert werden soll, und die Datei wird aktualisiert.</p>
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2</span>
        <h2>App 1 &amp; 2</h2>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Quiz-Generator</span>
          <p>Du gibst ein Thema ein, Claude Code generiert ein interaktives Multiple-Choice-Quiz als HTML-Datei. Die Fragen erscheinen einzeln, nach jeder Antwort siehst du sofort ob sie richtig war, und bei falschen Antworten wird die korrekte L&ouml;sung mit einer kurzen Erkl&auml;rung eingeblendet. Am Ende bekommst du eine Gesamtauswertung mit Prozentangabe.</p>
          <p><strong>F&uuml;r wen:</strong> Dozenten, die schnell Wissensabfragen f&uuml;r Seminare oder Vorlesungen brauchen. Health Professionals, die Fortbildungsinhalte als Selbsttest aufbereiten wollen. Studierende, die sich selbst abfragen m&ouml;chten.</p>

          <div class="prompt-block"><span class="prompt-label">Beispiel-Prompt</span>Erstelle ein interaktives Quiz mit 10 Fragen zum Thema Anatomie der Schulter. Multiple Choice mit 4 Optionen pro Frage, sofortige Auswertung nach jeder Antwort, Erkl&auml;rung bei falscher Antwort. Dark Mode Design. Speichere es als quiz-schulter.html</div>

          <p class="use-case">&rarr; In zwei Minuten hast du ein fertiges Quiz, das du in deinem n&auml;chsten Seminar einsetzen kannst &mdash; oder als Selbsttest per Mail an Studierende verschickst.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Bewertungsraster (Rubric Builder)</span>
          <p>Erstellt ein interaktives Bewertungsraster, das du am Tablet oder Laptop nutzen kannst. Du definierst die Kriterien und Leistungsstufen, klickst w&auml;hrend der Bewertung die passende Stufe pro Kriterium an, und die Gesamtpunktzahl wird automatisch berechnet. Das Raster l&auml;sst sich als PDF exportieren oder direkt ausdrucken.</p>
          <p><strong>F&uuml;r wen:</strong> Dozenten f&uuml;r die Bewertung von Seminararbeiten, Pr&auml;sentationen oder Praktikumsberichten. Therapeuten f&uuml;r strukturierte Assessment-Dokumentation mit standardisierten Kriterien.</p>

          <div class="prompt-block"><span class="prompt-label">Beispiel-Prompt</span>Erstelle ein interaktives Bewertungsraster f&uuml;r Seminararbeiten mit diesen Kriterien: Wissenschaftlichkeit, Argumentation, Quellenarbeit, Sprache &amp; Stil, Formalia. Jedes Kriterium hat 4 Stufen (ungn&uuml;gend / ausreichend / gut / sehr gut) mit Punkten von 0 bis 3. Klickbare Felder, automatische Summe, Druckansicht. Speichere als bewertungsraster.html</div>

          <p class="use-case">&rarr; Du klickst w&auml;hrend der Korrektur durch die Kriterien, am Ende steht die Note fest &mdash; nachvollziehbar, einheitlich und deutlich schneller als handschriftliche Bewertungsb&ouml;gen.</p>
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3</span>
        <h2>App 3 &amp; 4</h2>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Zeitplan-Rechner / Semesterplaner</span>
          <p>Ein visueller Semesterplaner als Kalender-Ansicht: Du siehst alle Semesterwochen auf einen Blick, kannst Themen per Drag-and-Drop auf Termine ziehen, Feiertage und vorlesungsfreie Tage markieren und den fertigen Plan als Markdown-Datei exportieren. Ideal, um am Semesteranfang die Stoffverteilung zu planen, ohne zwischen drei verschiedenen Kalendern hin- und herspringen zu m&uuml;ssen.</p>

          <div class="prompt-block"><span class="prompt-label">Beispiel-Prompt</span>Erstelle einen interaktiven Semesterplaner f&uuml;r das Sommersemester 2026. 14 Vorlesungswochen, Start 13. April, eine Veranstaltung pro Woche (Montag). Ich m&ouml;chte Themen als Karten anlegen und per Drag-and-Drop auf die Wochen verteilen k&ouml;nnen. Feiertage (1. Mai, Pfingstmontag) automatisch markieren. Export als Markdown. Dark Mode. Speichere als semesterplaner.html</div>

          <p class="use-case">&rarr; Statt Semesterplanung in einer Excel-Tabelle hast du eine visuelle &Uuml;bersicht, in der du Themen verschieben kannst, bis die Reihenfolge stimmt.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">Protokoll-Formatter</span>
          <p>Du kopierst deine unsortierten Besprechungsnotizen in ein Textfeld, klickst auf &bdquo;Formatieren&ldquo;, und bekommst ein sauber strukturiertes Protokoll mit Datum, Teilnehmenden, besprochenen Themen, konkreten Aufgaben, Verantwortlichkeiten und Deadlines. Die Mini-App erkennt dabei Muster in deinen Notizen und sortiert sie automatisch in die richtige Kategorie.</p>
          <p><strong>F&uuml;r wen:</strong> Jeder, der regelm&auml;&szlig;ig Meetings dokumentieren muss &mdash; von der Teambesprechung in der Klinik bis zum Projekttreffen an der Hochschule.</p>

          <div class="prompt-block"><span class="prompt-label">Beispiel-Prompt</span>Erstelle einen Protokoll-Formatter. Eingabe: ein Textfeld f&uuml;r unstrukturierte Besprechungsnotizen. Ausgabe: formatiertes Protokoll mit den Abschnitten Datum, Teilnehmende, Besprochene Themen, Aufgaben (mit Verantwortlichen und Deadline), N&auml;chster Termin. Kopier-Button f&uuml;r das Ergebnis. Dark Mode. Speichere als protokoll-formatter.html</div>

          <p class="use-case">&rarr; Du tippst w&auml;hrend des Meetings unstrukturiert mit, kopierst die Notizen danach in die Mini-App und hast in Sekunden ein vorzeigbares Protokoll &mdash; statt 20 Minuten Nachbearbeitung.</p>
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4</span>
        <h2>App 5 + N&auml;chste Schritte</h2>

        <div class="feature-card">
          <span class="feature-number">5</span>
          <span class="feature-name">Checklisten-Generator mit Fortschrittsbalken</span>
          <p>Erstellt interaktive Checklisten f&uuml;r beliebige Anwendungsf&auml;lle &mdash; Onboarding neuer Mitarbeitender, Projekt-Milestones, Pr&uuml;fungsvorbereitung oder Qualit&auml;tsmanagement. Jeder abgehakte Punkt bewegt den Fortschrittsbalken am oberen Rand vorw&auml;rts, und der Stand wird im Browser gespeichert, sodass du die Seite schlie&szlig;en und sp&auml;ter genau dort weitermachen kannst, wo du aufgeh&ouml;rt hast.</p>

          <div class="prompt-block"><span class="prompt-label">Beispiel-Prompt</span>Erstelle einen Checklisten-Generator. Ich m&ouml;chte einen Titel eingeben und beliebig viele Checkpunkte hinzuf&uuml;gen k&ouml;nnen. Oben ein visueller Fortschrittsbalken der den Prozent-Stand anzeigt. Abgehakte Punkte werden durchgestrichen. Der Stand wird im LocalStorage gespeichert. Button zum Zur&uuml;cksetzen, Button zum Exportieren als Markdown. Dark Mode. Speichere als checkliste.html</div>

          <p class="use-case">&rarr; Ob Onboarding-Checkliste, Pr&uuml;fungsvorbereitung oder Projekt-Tracker: Du baust dir in zwei Minuten genau die Liste, die du brauchst, mit visuellem Feedback statt einer Zettelwirtschaft.</p>
        </div>

        <h3>4.1 Was noch m&ouml;glich ist</h3>
        <p>Die f&uuml;nf Apps in diesem Guide sind nur der Anfang. Sobald du das Prinzip verstanden hast, kannst du dir f&uuml;r praktisch jedes Alltagsproblem eine Mini-App bauen lassen. Hier sind ein paar weitere Ideen, die alle als einzelne HTML-Datei funktionieren:</p>

        <div class="highlight-box">
          <ul style="margin-top:0;margin-bottom:0">
            <li><strong>Flashcard-App</strong> &mdash; Karteikarten f&uuml;r Pr&uuml;fungsvorbereitung mit Spaced-Repetition-Logik</li>
            <li><strong>Zeiterfassungs-Tool</strong> &mdash; Stoppuhr mit Projektzuordnung f&uuml;r die Dokumentation von Arbeitszeiten</li>
            <li><strong>Kalkulations-Tool</strong> &mdash; BMI-Rechner, Dosierungsrechner, Notenschl&uuml;ssel oder andere fachspezifische Berechnungen</li>
            <li><strong>Mindmap-Generator</strong> &mdash; Thema eingeben, Unterpunkte anlegen, visuell als Baumstruktur darstellen</li>
            <li><strong>Formular-Builder</strong> &mdash; Aufnahme- oder Anamneseb&ouml;gen, die du am Tablet ausf&uuml;llen und als PDF speichern kannst</li>
            <li><strong>Timer &amp; Intervall-App</strong> &mdash; Konfigurierbarer Timer f&uuml;r Seminare, Workshops oder Therapieeinheiten</li>
          </ul>
        </div>

        <h3>4.2 So gehst du weiter vor</h3>
        <p>Der beste n&auml;chste Schritt ist nicht, alle f&uuml;nf Apps auf einmal zu bauen, sondern dir eine auszusuchen, die ein Problem l&ouml;st, das du diese Woche tats&auml;chlich hast. &Ouml;ffne Claude Code, kopiere den passenden Prompt, passe ihn an dein Thema an, und du hast in wenigen Minuten dein erstes selbstgebautes Tool. Wenn es funktioniert, baust du das n&auml;chste. Wenn etwas fehlt oder nicht ganz passt, sagst du Claude Code einfach, was ge&auml;ndert werden soll &mdash; die Datei wird aktualisiert, du l&auml;dst die Seite im Browser neu, fertig.</p>

        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Eine Mini-App muss nicht perfekt sein. Sie muss genau das eine Problem l&ouml;sen, das du gerade hast. Wenn sie das tut, hat sie ihren Zweck erf&uuml;llt &mdash; und du hast daf&uuml;r weniger Zeit gebraucht als f&uuml;r die Google-Suche nach einer fertigen L&ouml;sung, die dann doch nicht genau das kann, was du brauchst.</p>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-5-mini-apps', OxGuide5MiniApps);
