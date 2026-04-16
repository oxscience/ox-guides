class OxGuideClaudeCoworkCode extends HTMLElement {
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
h3{font-size:16.8px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}

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

.rule-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px 0}
.rule-card{background:var(--surface);border:1px solid #1e293b;border-radius:10px;padding:20px;text-align:center}
.rule-card .rule-verb{display:block;font-size:24px;font-weight:700;color:var(--primary);margin-bottom:4px}
.rule-card .rule-tool{display:block;font-size:14.4px;font-weight:600;color:var(--white);margin-bottom:8px}
.rule-card p{font-size:13.6px;margin:0;text-align:left}

.abo-table{width:100%;border-collapse:collapse;margin:20px 0;font-size:14.4px}
.abo-table th{text-align:left;padding:10px 12px;border-bottom:2px solid #1e293b;color:var(--white);font-weight:600}
.abo-table td{padding:10px 12px;border-bottom:1px solid var(--border)}
.abo-table tr:last-child td{border-bottom:none}
.abo-table .highlight-row{background:var(--surface)}
.abo-check{color:var(--primary-light)}
.abo-dash{color:var(--text-dim)}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .rule-grid{grid-template-columns:1fr}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Claude, Cowork oder Claude Code &mdash; Was wof&uuml;r?</h1>
        <div class="meta">4-Seiten-Guide &middot; Out Of The Box Science</div>

        <!-- ===================== SEITE 1: INTRO ===================== -->

        <p>Wenn ihr Claude nutzt, nutzt ihr wahrscheinlich nur ein Drittel von dem, was Anthropic mittlerweile anbietet. Die meisten kennen den Chatbot auf <code>claude.ai</code> &mdash; das Textfeld, in dem man Fragen stellt und Antworten bekommt. Das ist ein solides Werkzeug, aber es ist eben nur eines von dreien.</p>

        <p>Anthropic hat im letzten Jahr zwei weitere Produkte dazugebaut, die grundlegend anders funktionieren als der Chat: <strong>Cowork</strong> erledigt Aufgaben auf eurem Rechner, w&auml;hrend ihr etwas anderes tut, und <strong>Claude Code</strong> baut euch funktionsf&auml;hige Anwendungen aus einer Beschreibung in Alltagssprache heraus. F&uuml;r Health Professionals hei&szlig;t das konkret, dass ihr mit denselben Tools, die Entwickler und Forscher nutzen, euren eigenen Praxisalltag automatisieren k&ouml;nnt &mdash; ohne eine Zeile Code schreiben zu m&uuml;ssen.</p>

        <div class="callout">
            <strong>Dieser Guide erkl&auml;rt die drei Tools,</strong> zeigt f&uuml;r jedes drei konkrete Anwendungsbeispiele aus dem Health-Bereich, und gibt euch am Ende eine einfache Entscheidungsregel an die Hand, mit der ihr sofort wisst, welches Tool wann das richtige ist.
        </div>

        <!-- ===================== SEITE 2: DIE DREI TOOLS ===================== -->

        <h2>1. Die drei Tools im Detail</h2>

        <!-- TOOL 1: CLAUDE -->
        <div class="feature-card">
            <span class="feature-number">1</span>
            <span class="feature-name">Claude &mdash; der Chatbot zum Mitdenken</span>
            <p><strong>Was es ist:</strong> Der Claude-Chat auf <a href="https://claude.ai">claude.ai</a> oder in der Desktop-App. Ein Gespr&auml;chspartner, der Texte schreibt, Fragen beantwortet, Dokumente analysiert und bei komplexen Entscheidungen mitdenkt. Ihr stellt Fragen, Claude antwortet &mdash; klassisches Hin und Her.</p>
            <p><strong>Wof&uuml;r:</strong> Alles, wobei ihr denken, analysieren oder formulieren m&uuml;sst. Claude ersetzt nicht euer Fachwissen, aber es beschleunigt die Denkarbeit erheblich &mdash; von der Literaturrecherche &uuml;ber Differentialdiagnosen bis hin zu Fortbildungsinhalten.</p>

            <h3>1.1 Drei Beispiele aus dem Health-Bereich</h3>

            <div class="mini-app">
                <div class="mini-app-title">Fachfragen kl&auml;ren und Studien zusammenfassen</div>
                <p>Ihr habt eine aktuelle Studie zur Wirksamkeit von HIIT bei Typ-2-Diabetes gelesen und wollt die Ergebnisse in den Kontext eurer Patientengruppe setzen. Claude kann die Studie zusammenfassen, Limitationen aufzeigen und Transferfragen stellen.</p>
                <pre>Fasse diese Studie zusammen und bewerte die
&Uuml;bertragbarkeit auf ambulante Reha-Patienten
mit Typ-2-Diabetes und eingeschr&auml;nkter
Mobilit&auml;t. Fokus auf: Studiendesign,
Stichprobe, Hauptergebnis, Limitationen.</pre>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Differentialdiagnosen strukturiert durchgehen</div>
                <p>Ein Patient kommt mit unspezifischen Schulterbeschwerden nach einem Sturz auf den ausgestreckten Arm. Ihr wollt eure klinische Hypothese gegen Alternativen abw&auml;gen, bevor ihr weitere Diagnostik anordnet.</p>
                <pre>Patient, 45 J., Sturz auf ausgestreckte Hand
vor 3 Tagen. Schmerzen ventral/lateral
Schulter, aktive Elevation eingeschr&auml;nkt,
passiv frei. Keine Instabilit&auml;tszeichen.
Erstelle eine nach Wahrscheinlichkeit
sortierte DD-Liste mit empfohlenen
klinischen Tests pro Hypothese.</pre>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Patienteninfo-Texte formulieren</div>
                <p>Ihr m&uuml;sst einem Patienten verst&auml;ndlich erkl&auml;ren, warum eine bestimmte Therapie sinnvoll ist, und wollt den Text als Handout mitgeben. Claude formuliert auf dem richtigen Sprachniveau und l&auml;sst euch den medizinischen Inhalt kontrollieren.</p>
                <pre>Schreib ein Patienten-Handout (1 Seite, A4)
zum Thema "Warum Bewegung bei Arthrose hilft".
Zielgruppe: &auml;ltere Patienten, kein
medizinisches Vorwissen. Einfache Sprache,
kurze S&auml;tze, keine Fachbegriffe ohne
Erkl&auml;rung. Am Ende: 3 konkrete &Uuml;bungen
f&uuml;r zu Hause.</pre>
            </div>

            <p class="use-case">Claude ist immer dann das richtige Tool, wenn ihr einen Gedanken sortieren, eine Einsch&auml;tzung einholen oder einen Text formulieren m&uuml;sst &mdash; also &uuml;berall dort, wo Denkarbeit anf&auml;llt.</p>
        </div>

        <!-- TOOL 2: COWORK -->
        <div class="feature-card">
            <span class="feature-number">2</span>
            <span class="feature-name">Cowork &mdash; der Assistent, der Aufgaben erledigt</span>
            <p><strong>Was es ist:</strong> Cowork l&auml;uft in der Claude Desktop-App und hat Zugriff auf euren Rechner &mdash; Dateien, Ordner, E-Mails, Kalender. Anders als der Chat arbeitet Cowork eigenst&auml;ndig: Ihr gebt einen Auftrag, und Cowork f&uuml;hrt ihn im Hintergrund aus, w&auml;hrend ihr mit Patienten arbeitet oder etwas anderes erledigt. Au&szlig;erdem k&ouml;nnt ihr wiederkehrende Aufgaben als geplante Tasks einrichten, die automatisch zu festgelegten Zeiten laufen.</p>
            <p><strong>Wof&uuml;r:</strong> Alles, was erledigt werden muss, aber nicht euer Denken braucht. Sortieren, organisieren, zusammenfassen, verschieben &mdash; die ganzen Aufgaben, die in der Praxis liegen bleiben, weil die Zeit fehlt.</p>

            <h3>2.1 Drei Beispiele aus dem Health-Bereich</h3>

            <div class="mini-app">
                <div class="mini-app-title">Praxis-E-Mails vorsortieren und zusammenfassen</div>
                <p>Nach einem vollen Praxistag liegen 40 E-Mails im Posteingang: Terminanfragen, Laborbefunde, Rezeptanforderungen, Newsletter. Cowork kann das Postfach durchgehen, nach Kategorien sortieren und euch eine Zusammenfassung mit den drei dringendsten Punkten schreiben.</p>
                <pre>Geh mein E-Mail-Postfach durch und erstelle
eine &Uuml;bersicht: Sortiere nach "Dringend
(Befunde/Anfragen)", "Termine", "Info/Newsletter".
Fasse die dringenden Mails in 1&ndash;2 S&auml;tzen
zusammen. Erstelle Antwort-Entw&uuml;rfe f&uuml;r die
3 wichtigsten Mails.</pre>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Fortbildungs-Zertifikate organisieren</div>
                <p>In einem Ordner auf dem Desktop liegen 25 Fortbildungs-Zertifikate als PDF &mdash; unterschiedliche Dateinamen, teilweise ohne Datum im Titel. Cowork kann alle Dateien lesen, nach Datum und Thema umbenennen und in eine Tabelle eintragen, die ihr f&uuml;r die Kammer braucht.</p>
                <pre>Lies alle PDFs im Ordner "Zertifikate" auf
meinem Desktop. Benenne jede Datei um nach
dem Schema "JJJJ-MM-TT_Thema_Anbieter.pdf".
Erstelle eine Excel-Tabelle mit den Spalten:
Datum, Thema, Anbieter, CME-Punkte (falls
erkennbar), Dateiname.</pre>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Wochenbericht f&uuml;r die Praxis erstellen</div>
                <p>Jeden Freitag braucht die Praxisleitung einen kurzen Bericht &uuml;ber die Woche &mdash; Patientenzahlen, besondere Vorkommnisse, offene Punkte. Cowork kann diesen Bericht als wiederkehrenden Task erstellen, der automatisch jeden Freitagnachmittag l&auml;uft.</p>
                <pre>Erstelle einen Wochenbericht f&uuml;r die Praxis.
Geh meine Kalendereintr&auml;ge und Notizen der
letzten 5 Arbeitstage durch. Struktur:
Patientenkontakte (Anzahl), besondere F&auml;lle
(anonym), offene R&uuml;ckfragen, Termine n&auml;chste
Woche. Format: 1 Seite, knapp und sachlich.</pre>
            </div>

            <p class="use-case">Cowork ist der richtige Griff, wenn eine Aufgabe klar definiert ist und einfach erledigt werden muss &mdash; ohne dass ihr dabei sein m&uuml;sst oder mitdenken wollt.</p>
        </div>

        <!-- TOOL 3: CLAUDE CODE -->
        <div class="feature-card">
            <span class="feature-number">3</span>
            <span class="feature-name">Claude Code &mdash; die Werkstatt zum Bauen</span>
            <p><strong>Was es ist:</strong> Claude Code ist ein Kommandozeilen-Tool (eine textbasierte Eingabe am Rechner, ohne grafische Oberfl&auml;che), das direkt mit euren Dateien arbeitet und funktionierende Anwendungen baut &mdash; Websites, Tools, kleine Apps. Ihr beschreibt in ganz normaler Sprache, was ihr braucht, und Claude Code schreibt den gesamten Code daf&uuml;r. Programmierkenntnisse sind daf&uuml;r nicht n&ouml;tig.</p>
            <p><strong>Wof&uuml;r:</strong> Alles, was es so noch nicht gibt und gebaut werden muss. Wenn kein fertiges Tool euer Problem l&ouml;st, baut Claude Code euch eines &mdash; zugeschnitten auf genau euren Bedarf.</p>

            <h3>3.1 Drei Beispiele aus dem Health-Bereich</h3>

            <div class="mini-app">
                <div class="mini-app-title">Patienteninfo-Generator als Web-App</div>
                <p>Statt jedes Mal Patienteninfos von Grund auf zu schreiben, lasst ihr euch ein Tool bauen, in dem ihr Diagnose, Therapie und Zielgruppe ausw&auml;hlt &mdash; und das daraus ein sauber formatiertes Handout generiert, das ihr als PDF ausdrucken k&ouml;nnt.</p>
                <pre>Baue eine Web-App: "Patienteninfo-Generator".
Eingabe: Diagnose (Dropdown mit h&auml;ufigen
Diagnosen), Therapieansatz (Freitext),
Sprachniveau (einfach/mittel). Ausgabe:
Formatiertes Handout mit Erkl&auml;rung, &Uuml;bungen
und Verhaltenstipps. Export als PDF. Dark Mode,
mobilf&auml;hig, als einzelne HTML-Datei.</pre>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Interaktiver &Uuml;bungskatalog</div>
                <p>Eure Patienten fragen st&auml;ndig nach den Heim&uuml;bungen, die ihr in der Sitzung gezeigt habt. Claude Code baut euch einen browserbasierten &Uuml;bungskatalog, den ihr per Link verschicken k&ouml;nnt &mdash; mit Bildbeschreibungen, Satz- und Wiederholungsangaben, und der M&ouml;glichkeit, individuelle &Uuml;bungspl&auml;ne zusammenzustellen.</p>
                <pre>Baue einen interaktiven &Uuml;bungskatalog als
Web-App. Kategorien: Schulter, Knie, R&uuml;cken,
H&uuml;fte. Pro &Uuml;bung: Name, Beschreibung,
S&auml;tze/Wiederholungen, Schwierigkeitsgrad
(leicht/mittel/schwer). Funktion: &Uuml;bungen
ausw&auml;hlen und als individuellen Plan
exportieren (PDF). Filterfunktion nach
K&ouml;rperregion und Schwierigkeit.</pre>
            </div>

            <div class="mini-app">
                <div class="mini-app-title">Terminplanungs-Tool f&uuml;r die Praxis</div>
                <p>Die Standard-Software kann vieles, aber nicht alles &mdash; zum Beispiel eine Wochenansicht, in der Therapeuten ihre verf&uuml;gbaren Slots selbst eintragen und Patienten nach Behandlungsart farblich markiert werden. Claude Code baut solche Speziall&ouml;sungen in Minuten.</p>
                <pre>Baue ein Wochen-Terminplaner-Tool. Spalten:
Montag bis Freitag, Zeilen: 8:00&ndash;18:00 in
30-Min-Slots. Drag-and-Drop f&uuml;r Termine.
Farbkodierung nach Behandlungsart (Physio,
Ergo, Massage, Befund). Therapeuten-Filter.
Daten lokal im Browser speichern. Responsive
f&uuml;r Tablet und Desktop.</pre>
            </div>

            <p class="use-case">Claude Code ist das richtige Tool, wenn ihr ein Werkzeug braucht, das es in dieser Form nicht zu kaufen gibt &mdash; weil es genau auf euren Praxisalltag zugeschnitten sein muss.</p>
        </div>

        <!-- ===================== SEITE 3: DIE EINFACHE REGEL ===================== -->

        <h2>2. Die einfache Regel: Denken, Erledigen, Bauen</h2>

        <p>Im Alltag m&uuml;sst ihr euch nicht merken, welches Tool was genau kann. Die Entscheidung l&auml;sst sich auf drei W&ouml;rter reduzieren, und die funktionieren in jeder Situation:</p>

        <div class="rule-grid">
            <div class="rule-card">
                <span class="rule-verb">Denken</span>
                <span class="rule-tool">Claude</span>
                <p>Ihr m&uuml;sst eine Frage beantworten, einen Text formulieren oder eine Einsch&auml;tzung einholen.</p>
            </div>
            <div class="rule-card">
                <span class="rule-verb">Erledigen</span>
                <span class="rule-tool">Cowork</span>
                <p>Eine Aufgabe muss gemacht werden &mdash; sortieren, organisieren, zusammenfassen &mdash; ohne dass ihr dabei sein m&uuml;sst.</p>
            </div>
            <div class="rule-card">
                <span class="rule-verb">Bauen</span>
                <span class="rule-tool">Claude Code</span>
                <p>Ihr braucht ein Werkzeug, das es so noch nicht gibt &mdash; eine App, ein Dashboard, ein interaktives Tool.</p>
            </div>
        </div>

        <div class="callout">
            <strong>Die Faustregel in der Praxis:</strong> Wenn ihr vor dem Bildschirm sitzt und mit der KI hin- und herredet, ist Claude richtig. Wenn ihr euch denkt, dass das jemand anders machen k&ouml;nnte, ist Cowork richtig. Und wenn ihr euch w&uuml;nscht, es g&auml;be ein Tool f&uuml;r genau dieses Problem, ist Claude Code richtig.
        </div>

        <h3>2.1 Mischformen im Praxisalltag</h3>
        <p>In der Realit&auml;t greifen die Tools oft ineinander. Ein typisches Beispiel aus der Praxis: Ihr diskutiert mit Claude, welche &Uuml;bungen f&uuml;r eine bestimmte Patientengruppe geeignet sind (Denken). Dann lasst ihr Claude Code daraus einen interaktiven &Uuml;bungskatalog bauen (Bauen). Und Cowork erstellt jeden Montag automatisch eine Liste der Patienten, die diese Woche ihren &Uuml;bungsplan bekommen sollen (Erledigen).</p>
        <p>Die drei Tools sind keine Konkurrenten &mdash; sie sind Spezialisierungen f&uuml;r unterschiedliche Arbeitsphasen.</p>

        <!-- ===================== SEITE 4: ABOS ===================== -->

        <h2>3. Welches Abo brauche ich?</h2>

        <p>Anthropic bietet verschiedene Abo-Stufen an. Hier eine &Uuml;bersicht, welche Stufe welche Tools freischaltet und was das f&uuml;r den Praxisalltag bedeutet:</p>

        <table class="abo-table">
            <thead>
                <tr>
                    <th>Stufe</th>
                    <th>Claude Chat</th>
                    <th>Cowork</th>
                    <th>Claude Code</th>
                    <th>Preis</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Free</td>
                    <td><span class="abo-check">Ja (limitiert)</span></td>
                    <td><span class="abo-dash">&mdash;</span></td>
                    <td><span class="abo-dash">&mdash;</span></td>
                    <td>0 &euro;</td>
                </tr>
                <tr class="highlight-row">
                    <td><strong>Pro</strong></td>
                    <td><span class="abo-check">Ja</span></td>
                    <td><span class="abo-check">Ja</span></td>
                    <td><span class="abo-check">Ja (API-Kosten)</span></td>
                    <td>20 &dollar;/Monat</td>
                </tr>
                <tr>
                    <td>Max (5x)</td>
                    <td><span class="abo-check">Ja (mehr Limit)</span></td>
                    <td><span class="abo-check">Ja</span></td>
                    <td><span class="abo-check">Ja (inklusive)</span></td>
                    <td>100 &dollar;/Monat</td>
                </tr>
                <tr>
                    <td>Max (20x)</td>
                    <td><span class="abo-check">Ja (h&ouml;chstes Limit)</span></td>
                    <td><span class="abo-check">Ja</span></td>
                    <td><span class="abo-check">Ja (inklusive)</span></td>
                    <td>200 &dollar;/Monat</td>
                </tr>
            </tbody>
        </table>

        <h3>3.1 Einstiegs-Empfehlung f&uuml;r Health Professionals</h3>

        <div class="callout">
            <strong>Startet mit Claude Pro f&uuml;r 20 Dollar im Monat.</strong> Damit habt ihr Zugang zu allen drei Tools. Claude Code verursacht bei gelegentlicher Nutzung nur wenige Euro zus&auml;tzlich &uuml;ber die API (nutzungsbasiert). F&uuml;r die meisten Praxen reicht das v&ouml;llig aus &mdash; erst wenn ihr Claude Code t&auml;glich intensiv nutzt, lohnt sich der Umstieg auf Max.
        </div>

        <p><strong>Der konkrete Einstieg in drei Schritten:</strong></p>
        <ol>
            <li><strong>Woche 1 &mdash; Claude ausprobieren:</strong> Geht auf <a href="https://claude.ai">claude.ai</a> und testet den Chat mit einer eurer typischen Fachfragen. Lasst euch eine Differentialdiagnose erstellen oder eine Patienteninfo formulieren. Das funktioniert schon im kostenlosen Account.</li>
            <li><strong>Woche 2 &mdash; Pro-Abo und Cowork einrichten:</strong> Holt euch Claude Pro und installiert die Desktop-App. Gebt Cowork einen ersten Auftrag &mdash; zum Beispiel die Fortbildungs-Zertifikate sortieren. Das dauert 10 Minuten Einrichtung.</li>
            <li><strong>Woche 3 &mdash; Claude Code installieren:</strong> Installiert Claude Code &uuml;ber das Terminal (<code>npm install -g @anthropic-ai/claude-code</code>) und beschreibt ein kleines Tool, das ihr im Praxisalltag brauchen k&ouml;nntet. Der Patienteninfo-Generator aus diesem Guide ist ein guter Startpunkt.</li>
        </ol>

        <p>Alle drei Tools sind eigenst&auml;ndig nutzbar &mdash; ihr m&uuml;sst nicht alle gleichzeitig einsetzen. Fangt mit dem an, das euer dr&auml;ngendstes Problem l&ouml;st, und erweitert von dort aus.</p>

        <div class="footer">
            Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
            <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-cowork-code', OxGuideClaudeCoworkCode);
