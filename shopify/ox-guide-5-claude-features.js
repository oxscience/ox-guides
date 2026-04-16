class OxGuide5ClaudeFeatures extends HTMLElement {
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
.use-case{color:var(--primary);font-weight:500;font-size:14.4px}

.callout{
  background:var(--surface-alt);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.callout strong{color:var(--white)}

.mini-app{
  background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.mini-app-title{font-weight:600;color:var(--blue-light);font-size:15.2px;margin-bottom:8px}
.mini-app p{color:var(--blue-muted);font-size:14.4px;margin-bottom:8px}

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

        <h1>5 Claude-Features die jeder Lehrer und Dozent kennen sollte</h1>
        <div class="meta">3-Seiten-Guide &middot; Out Of The Box Science</div>

        <p>Die meisten denken bei KI an Textgenerierung: Frage rein, Text raus. Aber das ist nicht der Grund, warum Claude Code f&uuml;r Lehrer und Dozenten interessant ist.</p>

        <div class="callout">
            <strong>Der eigentliche Hebel:</strong> Claude Code kann kleine, interaktive Anwendungen bauen &mdash; in Minuten, ohne dass du programmieren musst. Quizze, die Studierende im Browser ausf&uuml;llen. Korrektur-Tools, die deine Bewertungskriterien kennen. Dashboards, die den Lernfortschritt visualisieren. Das sind keine Science-Fiction-Szenarien &mdash; das funktioniert heute, mit einem einzigen Satz als Auftrag.
        </div>

        <p>Hier sind die f&uuml;nf Features, die aus Claude Code ein echtes Arbeitsinstrument machen.</p>

        <div class="feature-card">
            <span class="feature-number">1</span>
            <span class="feature-name">Mini-Apps bauen &mdash; ohne Coding</span>
            <p>Das untersch&auml;tzteste Feature: Du beschreibst, was du brauchst, und Claude Code baut dir eine funktionierende Web-App. HTML, CSS, JavaScript &mdash; alles wird automatisch generiert. Du musst nichts davon verstehen.</p>
            <p>Drei Beispiele aus dem Lehralltag:</p>

            <div class="mini-app">
                <div class="mini-app-title">Beispiel 1: Interaktives Quiz f&uuml;r Studierende</div>
                <p>Prompt: <code>Erstelle ein Multiple-Choice-Quiz mit 15 Fragen zum Thema Forschungsmethoden. Am Ende: Auswertung mit Punktzahl und Erkl&auml;rung f&uuml;r jede falsche Antwort. Als HTML-Datei die ich per Link teilen kann.</code></p>
                <p>Ergebnis: Eine fertige HTML-Datei, die du auf einen Server l&auml;dst oder als Link verschickst. Studierende &ouml;ffnen sie im Browser, machen das Quiz, bekommen sofort Feedback. Kein Moodle, kein LMS n&ouml;tig.</p>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Beispiel 2: Bewertungs-Rechner mit deinen Kriterien</div>
                <p>Prompt: <code>Baue ein Bewertungstool f&uuml;r Seminararbeiten. Kriterien: Fragestellung (20%), Methodik (25%), Argumentation (30%), Formalia (15%), Sprache (10%). Schieberegler f&uuml;r jedes Kriterium, automatische Endnote, Textfeld f&uuml;r Kommentar pro Kriterium. Export als PDF.</code></p>
                <p>Ergebnis: Ein Tool im Browser, das du bei jeder Bewertung &ouml;ffnest. Gleiche Kriterien, gleiche Gewichtung, dokumentierbares Feedback.</p>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Beispiel 3: Semesterplan-Dashboard</div>
                <p>Prompt: <code>Erstelle ein Dashboard f&uuml;r mein Semester: 14 Wochen, 3 Kurse. Ich will pro Woche sehen: Thema, Pflichtlekt&uuml;re, Abgaben, Status (geplant/vorbereitet/durchgef&uuml;hrt). Editierbar, Daten werden lokal im Browser gespeichert.</code></p>
                <p>Ergebnis: Ein pers&ouml;nliches Planungstool, das nur du siehst. Keine App-Installation, keine Cloud, kein Account.</p>
            </div>

            <p class="use-case">Das ist der Grund, warum Claude Code f&uuml;r Dozenten relevant ist: Nicht weil es Texte schreibt &mdash; sondern weil es Werkzeuge baut, die es vorher nicht gab.</p>
        </div>

        <div class="feature-card">
            <span class="feature-number">2</span>
            <span class="feature-name">Plan Mode</span>
            <p>Plan Mode trennt <strong>Denken</strong> von <strong>Umsetzen</strong>. Bevor Claude Code anf&auml;ngt Dateien zu erstellen, legt es erst einen Plan vor &mdash; und wartet auf dein OK.</p>
            <p>Aktivieren: <code>/plan</code> eingeben.</p>
            <p class="use-case">Lehre: Du sagst "Baue mir ein Quiz zu Modul 3" &mdash; Claude zeigt dir erst die Struktur (Fragetypen, Schwierigkeit, Themenabdeckung), bevor es losschreibt. Du korrigierst den Plan, nicht das Ergebnis.</p>
        </div>

        <div class="feature-card">
            <span class="feature-number">3</span>
            <span class="feature-name">Memory Files</span>
            <p>Claude vergisst normalerweise alles zwischen zwei Gespr&auml;chen. Memory Files &auml;ndern das. Du legst eine Datei namens <code>CLAUDE.md</code> in deinen Projektordner, und Claude liest sie bei jedem Start automatisch.</p>
            <pre># CLAUDE.md &mdash; Modul "Forschungsmethoden"

- Kurs: Forschungsmethoden I (BA, 3. Semester)
- Sprache: Deutsch, Fachbegriffe auf Englisch
- Stil: Handouts max. 2 Seiten, mit Quellenangaben
- Pr&uuml;fungsform: Hausarbeit (3.000 W&ouml;rter)
- Mini-Apps: Immer als einzelne HTML-Datei,
  Dark Mode, responsiv (mobilf&auml;hig)</pre>
            <p class="use-case">Lehre: Du musst nie wieder erkl&auml;ren, welches Modul, welche Zielgruppe, welcher Stil. Und jede Mini-App, die Claude baut, folgt automatisch deinen Vorgaben.</p>
        </div>

        <div class="feature-card">
            <span class="feature-number">4</span>
            <span class="feature-name">Skills</span>
            <p>Skills sind wiederverwendbare Aufgaben. Statt jedes Mal den gleichen langen Prompt zu tippen, rufst du einen Skill mit einem Befehl auf.</p>
            <pre># .claude/skills/quiz/SKILL.md

Erstelle ein interaktives HTML-Quiz.
Format: Single-Page HTML mit eingebettetem CSS/JS.
Fragen: Multiple-Choice, 4 Optionen pro Frage.
Am Ende: Punktzahl + Erkl&auml;rung f&uuml;r falsche Antworten.
Design: Dark Mode, gro&szlig;e Touch-Targets f&uuml;r mobile Nutzung.</pre>
            <p>Danach reicht: <code>/quiz Thema: Validit&auml;t und Reliabilit&auml;t, 15 Fragen</code></p>
            <p class="use-case">Lehre: Du baust dir eine Bibliothek &mdash; /quiz, /handout, /bewertung, /seminarplan. Einmal definiert, jedes Semester wiederverwendbar. Wie Vorlagen, nur intelligent.</p>
        </div>

        <div class="feature-card">
            <span class="feature-number">5</span>
            <span class="feature-name">Hooks</span>
            <p>Hooks sind automatische Aktionen, die bei bestimmten Ereignissen ausl&ouml;sen &mdash; ohne dass du daran denken musst. Du definierst sie einmal in den Claude-Code-Einstellungen.</p>

            <p><strong>So richtest du einen Hook ein:</strong></p>
            <p>&Ouml;ffne die Claude-Code-Einstellungen &uuml;ber <code>/settings</code> und f&uuml;ge unter "hooks" eine Regel hinzu. Zum Beispiel:</p>
            <pre>{
  "hooks": {
    "afterSave": [
      {
        "match": "*.html",
        "command": "Pr&uuml;fe die Datei auf Barrierefreiheit:
                    Alt-Texte, Kontraste, Schriftgr&ouml;&szlig;en."
      }
    ]
  }
}</pre>
            <p>Was passiert: Jedes Mal wenn du eine HTML-Datei speicherst (z.B. eine Mini-App oder ein Quiz), pr&uuml;ft Claude automatisch, ob die Datei barrierefrei ist. Du musst nicht daran denken.</p>
            <p><strong>Weitere Hook-Ideen f&uuml;r die Lehre:</strong></p>
            <ul>
                <li>Jedes neue Handout automatisch auf Quellenformat pr&uuml;fen (APA, Harvard, etc.)</li>
                <li>Bei jeder Quiz-Datei automatisch eine L&ouml;sungsdatei f&uuml;r dich mitgenerieren</li>
                <li>Neue Dateien automatisch in die richtige Semesterordner-Struktur einsortieren</li>
            </ul>
            <p class="use-case">Hooks machen deine Workflows selbstlaufend. Einmal eingerichtet, arbeiten sie im Hintergrund mit.</p>
        </div>

        <h2>Bonus: Warum du in kurzen Sitzungen arbeiten solltest</h2>
        <p>Claude Code hat ein sogenanntes Kontextfenster (die Menge an Text, die es gleichzeitig "im Kopf" behalten kann). Bei l&auml;ngeren Arbeitssitzungen f&uuml;llt sich dieses Fenster &mdash; und dann passiert etwas, das du kennen solltest:</p>

        <p><strong>Compact Mode</strong> komprimiert das bisherige Gespr&auml;ch automatisch, wenn der Kontext voll wird. Claude fasst zusammen, was bisher passiert ist, und arbeitet mit der Zusammenfassung weiter. Klingt praktisch &mdash; hat aber einen Haken:</p>

        <div class="callout">
            <strong>Das Problem:</strong> Bei der Komprimierung gehen Details verloren. Claude "vergisst" Nuancen aus dem Gespr&auml;ch: spezifische Formulierungen die du gew&auml;hlt hast, kleine Korrekturen die du zwischendurch gemacht hast, oder den genauen Kontext einer fr&uuml;heren Entscheidung. Das Ergebnis: Die Qualit&auml;t kann nach einem Compact-Schritt sp&uuml;rbar nachlassen &mdash; Claude wiederholt sich, weicht von deinen Vorgaben ab, oder verliert den roten Faden.
        </div>

        <p><strong>Die L&ouml;sung: Kurze Sitzungen + Memory Files.</strong></p>
        <p>Statt alles in einer langen Sitzung zu erledigen, arbeitest du besser in kurzen, fokussierten Sessions:</p>
        <ul>
            <li><strong>Sitzung 1:</strong> Quiz erstellen &rarr; fertig &rarr; Sitzung beenden</li>
            <li><strong>Sitzung 2:</strong> Handout schreiben &rarr; fertig &rarr; Sitzung beenden</li>
            <li><strong>Sitzung 3:</strong> Bewertungstool bauen &rarr; fertig &rarr; Sitzung beenden</li>
        </ul>
        <p>Jede neue Sitzung startet mit vollem Kontextfenster. Und weil deine <strong>Memory Files</strong> (Feature 3) bei jedem Start automatisch geladen werden, kennt Claude trotzdem deinen Kurs, deine Vorgaben und deinen Stil &mdash; ohne dass du irgendwas wiederholen musst.</p>
        <p>Memory Files sind also nicht nur bequem, sondern auch die Absicherung gegen Qualit&auml;tsverlust: Alles Wichtige steht in der Datei, nicht im Gespr&auml;chsverlauf.</p>

        <h2>Zusammenfassung</h2>
        <p>Claude Code ist kein besserer Textgenerator. Es ist eine Werkstatt: Du beschreibst, was du brauchst &mdash; ein Quiz, ein Bewertungstool, ein Dashboard &mdash; und Claude baut es. Die f&uuml;nf Features hier machen den Unterschied zwischen "ab und zu mal was fragen" und einem konfigurierten System, das deinen Kontext kennt, nach deinen Standards arbeitet, und Aufgaben reproduzierbar erledigt.</p>
        <p>Der Aufwand f&uuml;r Lehrer und Dozenten: Eine halbe Stunde Einrichtung. Der Effekt: Jedes Semester.</p>

        <div class="footer">
            <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-5-claude-features', OxGuide5ClaudeFeatures);
