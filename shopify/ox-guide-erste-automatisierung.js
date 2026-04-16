class OxGuideErsteAutomatisierung extends HTMLElement {
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

.mini-app{
  background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.mini-app-title{font-weight:600;color:var(--blue-light);font-size:15.2px;margin-bottom:8px}
.mini-app p{color:var(--blue-muted);font-size:14.4px;margin-bottom:8px}
.mini-app p:last-child{margin-bottom:0}

.result-table{width:100%;border-collapse:collapse;margin:16px 0 24px;font-size:14.4px}
.result-table th{text-align:left;color:var(--primary-light);font-weight:600;padding:10px 12px;border-bottom:2px solid #1e293b;font-size:12.8px;text-transform:uppercase;letter-spacing:0.05em}
.result-table td{padding:10px 12px;border-bottom:1px solid var(--border);vertical-align:top}
.result-table tr:last-child td{border-bottom:none}
.result-table .task-name{color:var(--white);font-weight:500}
.result-table .difficulty{display:inline-block;font-size:11.2px;padding:2.4px 8px;border-radius:3px;font-weight:600}
.difficulty-easy{background:var(--green-bg);color:var(--green-text)}
.difficulty-medium{background:#3b2f06;color:#fbbf24}

.week-card{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.week-label{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;
  margin-right:8px;letter-spacing:0.03em;
}
.week-title{font-size:16.8px;font-weight:600;color:var(--white)}
.week-card p{margin-top:12px;margin-bottom:8px;font-size:14.4px}
.week-card p:last-child{margin-bottom:0}

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
  .result-table{font-size:12.8px}
  .result-table th,.result-table td{padding:8px 6px}
  pre{font-size:12.8px;padding:12px 14px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Deine erste KI-Automatisierung finden</h1>
        <div class="meta">4-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Health Professionals verbringen einen erstaunlich gro&szlig;en Teil ihrer Arbeitszeit mit Aufgaben, die nichts mit Patienten zu tun haben: Therapieberichte formulieren, Terminbest&auml;tigungen verschicken, Fortbildungsnachweise zusammensuchen, Abrechnungen vorbereiten. Dieser Guide zeigt euch, wie ihr mit einem einzigen KI-Prompt herausfindet, welche dieser Aufgaben sich am schnellsten automatisieren lassen &mdash; und wie ihr das in vier Wochen umsetzt, eine Automatisierung nach der anderen.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1</span>
        <h2>Warum Automatisierung gerade f&uuml;r Health Professionals sinnvoll ist</h2>

        <h3>1.1 Das eigentliche Problem</h3>
        <p>Die meisten Praxen und Kliniken haben kein Technologie-Problem, sondern ein Zeitproblem. Zwischen Patientenkontakt, Dokumentation und Verwaltung bleibt kaum Raum, um &uuml;berhaupt dar&uuml;ber nachzudenken, was sich ver&auml;ndern lie&szlig;e. Und genau da setzt dieser Guide an: nicht bei der Technik, sondern bei der systematischen Analyse eures Arbeitsalltags.</p>

        <h3>1.2 Was Automatisierung hier bedeutet</h3>
        <p>Automatisierung hei&szlig;t nicht, dass eine KI eure Therapie &uuml;bernimmt. Es geht um die Verwaltungsarbeit drum herum &mdash; die Aufgaben, bei denen ihr regelm&auml;&szlig;ig denkt: Das k&ouml;nnte doch auch irgendwie von alleine laufen. Typische Kandidaten in der Gesundheitsbranche:</p>
        <ul>
          <li><strong>Therapieberichte</strong> &mdash; Strukturierte Berichte aus Stichpunkten und Befunden formulieren</li>
          <li><strong>Terminbest&auml;tigungen</strong> &mdash; Erinnerungen und Best&auml;tigungen an Patienten versenden</li>
          <li><strong>Fortbildungsnachweise</strong> &mdash; Zertifikate sammeln, Stunden dokumentieren, Fristen im Blick behalten</li>
          <li><strong>Patienteninfos</strong> &mdash; Erkl&auml;rungen, Merkbl&auml;tter und &Uuml;bungsanleitungen zusammenstellen</li>
          <li><strong>Abrechnungsvorbereitung</strong> &mdash; Leistungen zuordnen, Heilmittelverordnungen abgleichen</li>
          <li><strong>Wartelisten-Management</strong> &mdash; Nachr&uuml;cker informieren, Termine neu vergeben</li>
        </ul>

        <h3>1.3 Der Ansatz: Ein Prompt, der euren Alltag analysiert</h3>
        <p>Statt wahllos Tools auszuprobieren, dreht ihr den Prozess um. Ihr beschreibt einer KI euren konkreten Arbeitsalltag, und sie identifiziert systematisch, wo die gr&ouml;&szlig;ten Zeitfresser liegen und welche davon sich mit dem geringsten Aufwand automatisieren lassen. Das Ergebnis ist eine priorisierte Liste: oben die Quick Wins mit hohem Effekt und niedriger Komplexit&auml;t, unten die Projekte, die mehr Vorbereitung brauchen.</p>

        <div class="callout">
          <strong>Die Idee dahinter:</strong> Ihr m&uuml;sst nicht wissen, welche Tools es gibt oder wie Automatisierung technisch funktioniert. Die KI fragt euch nach eurem Alltag, und ihr antwortet einfach so, wie ihr es einem neuen Kollegen erkl&auml;ren w&uuml;rdet. Aus euren Antworten ergibt sich der Plan von selbst.
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2</span>
        <h2>Der Praxis-Audit-Prompt</h2>

        <h3>2.1 So funktioniert es</h3>
        <p>Kopiert den folgenden Prompt in <a href="https://claude.ai">Claude</a>, <a href="https://chatgpt.com">ChatGPT</a> oder ein anderes KI-Tool eurer Wahl. Die KI wird euch dann 15 bis 20 gezielte Fragen zu eurem Arbeitsalltag stellen &mdash; eine nach der anderen, angepasst an eure vorherigen Antworten. Am Ende bekommt ihr eine strukturierte Auswertung.</p>

        <h3>2.2 Der Prompt (kopieren und einf&uuml;gen)</h3>

        <pre>Du bist ein Praxis-Berater, der Health Professionals dabei hilft,
Automatisierungspotenzial in ihrem Arbeitsalltag zu finden.

Deine Aufgabe:
1. Stelle mir 15-20 gezielte Fragen zu meinem Arbeitsalltag.
   Frage immer nur EINE Frage auf einmal und warte auf meine
   Antwort, bevor du die n&auml;chste stellst.
2. Passe deine Fragen an meine Antworten an &mdash; wenn ich z.B.
   sage, dass ich eine Physiotherapie-Praxis f&uuml;hre, frag
   nicht nach OP-Berichten.
3. Frag nach diesen Bereichen (aber nicht stur der Reihe nach,
   sondern so, wie es sich aus dem Gespr&auml;ch ergibt):
   - T&auml;gliche Routineaufgaben und wie lange sie dauern
   - Dokumentation und Berichte (Therapieberichte, Befunde,
     Arztbriefe)
   - Kommunikation mit Patienten (Termine, Erinnerungen,
     Infomaterial)
   - Verwaltung (Abrechnung, Fortbildungen, Warteliste)
   - Wiederkehrende &Auml;rgernisse und Engp&auml;sse
   - Welche Software und Tools bereits im Einsatz sind
   - Was schon mal versucht wurde zu vereinfachen
4. Wenn du genug Informationen hast, erstelle eine Auswertung
   mit dieser Struktur:

   F&uuml;r jeden identifizierten Automatisierungs-Kandidaten:
   | Aufgabe | Aktueller Ablauf | Automatisierte Version |
   | Tool-Vorschlag | Schwierigkeit (Leicht/Mittel/Anspruchsvoll) |
   | Gesch&auml;tzte Zeitersparnis pro Woche |

   Sortiere die Liste nach dem Verh&auml;ltnis von Zeitersparnis
   zu Schwierigkeit &mdash; die Quick Wins zuerst.

Starte jetzt mit der ersten Frage.</pre>

        <h3>2.3 Tipps f&uuml;r bessere Ergebnisse</h3>
        <ul>
          <li><strong>Seid konkret.</strong> Statt &bdquo;Berichte dauern lang&ldquo; lieber: &bdquo;Ich schreibe pro Patient einen Therapiebericht, ca. 20 Minuten, davon 15 Minuten Formulierung und 5 Minuten Befunde rauskopieren, das mache ich bei 6 Patienten am Tag.&ldquo;</li>
          <li><strong>Nennt eure Tools.</strong> Wenn ihr mit einer bestimmten Praxissoftware arbeitet (z.B. Theorg, Optica, Hasomed), sagt das &mdash; die KI kann dann pr&uuml;fen, ob Schnittstellen existieren.</li>
          <li><strong>Vergesst die kleinen Sachen nicht.</strong> Oft sind es nicht die gro&szlig;en Berichte, sondern die vielen kleinen Unterbrechungen (kurze R&uuml;ckrufe, Rezepte nachfragen, Terminverschiebungen), die in Summe Stunden fressen.</li>
          <li><strong>Sagt ehrlich, was nervt.</strong> Die beste Automatisierung ist die, die eine Aufgabe beseitigt, bei der ihr innerlich die Augen verdreht.</li>
        </ul>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3</span>
        <h2>So lest ihr die Ergebnisse</h2>

        <h3>3.1 Was die Auswertung zeigt</h3>
        <p>Nach dem Gespr&auml;ch bekommt ihr eine Tabelle, die eure Aufgaben nach Automatisierungspotenzial sortiert. Das sieht zum Beispiel so aus (hier f&uuml;r eine physiotherapeutische Praxis mit drei Therapeuten):</p>

        <table class="result-table">
          <thead>
            <tr>
              <th>Aufgabe</th>
              <th>Aktuell</th>
              <th>Automatisiert</th>
              <th>Aufwand</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="task-name">Terminbest&auml;tigungen</td>
              <td>Manuell per Telefon, 30 Min/Tag</td>
              <td>Automatische SMS/Mail 24h vorher</td>
              <td><span class="difficulty difficulty-easy">Leicht</span></td>
            </tr>
            <tr>
              <td class="task-name">Therapieberichte</td>
              <td>Freitext aus Stichpunkten, 20 Min/Bericht</td>
              <td>KI-Entwurf aus Befunddaten, Therapeut pr&uuml;ft und korrigiert</td>
              <td><span class="difficulty difficulty-easy">Leicht</span></td>
            </tr>
            <tr>
              <td class="task-name">&Uuml;bungsbl&auml;tter</td>
              <td>Jedes Mal neu zusammenstellen, 15 Min</td>
              <td>Vorlagen-System mit Bausteinen, 2 Min Auswahl</td>
              <td><span class="difficulty difficulty-easy">Leicht</span></td>
            </tr>
            <tr>
              <td class="task-name">Wartelisten-Nachr&uuml;cker</td>
              <td>Manuell anrufen bei Absage, 10 Min/Fall</td>
              <td>Automatische Benachrichtigung per Nachricht</td>
              <td><span class="difficulty difficulty-medium">Mittel</span></td>
            </tr>
            <tr>
              <td class="task-name">Fortbildungstracking</td>
              <td>Ordner mit Zertifikaten, Excel-Tabelle</td>
              <td>Digitale &Uuml;bersicht mit Fristenwarnungen</td>
              <td><span class="difficulty difficulty-medium">Mittel</span></td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 Worauf ihr achten solltet</h3>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Zeitersparnis pro Woche ist der wichtigste Wert</span>
          <p>Eine Aufgabe, die t&auml;glich 10 Minuten kostet und sich leicht automatisieren l&auml;sst, spart euch im Monat &uuml;ber 3 Stunden. Aufgaben, die nur einmal im Quartal anfallen, sind trotz hoher Einzeldauer weniger dringend.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Schwierigkeit &bdquo;Leicht&ldquo; zuerst</span>
          <p>Alles, was die KI mit &bdquo;Leicht&ldquo; markiert, l&auml;sst sich in der Regel innerhalb eines Nachmittags einrichten &mdash; oft ohne technisches Vorwissen. Bei &bdquo;Mittel&ldquo; braucht ihr eventuell eine Stunde Einarbeitung in ein neues Tool, und bei &bdquo;Anspruchsvoll&ldquo; lohnt es sich, jemanden zu fragen, der sich auskennt.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Datenschutz im Blick behalten</span>
          <p>Bei Patientendaten gelten besondere Regeln. Alles, was personenbezogene Gesundheitsdaten enth&auml;lt, darf nur mit DSGVO-konformen Tools verarbeitet werden. Die KI-Auswertung weist in der Regel darauf hin &mdash; pr&uuml;ft trotzdem bei jedem Automatisierungsschritt, ob und welche Daten das Tool verarbeitet, und ob euer Dienstleister einen Auftragsverarbeitungsvertrag (AVV) anbietet.</p>
        </div>

        <h3>3.3 Praxis-Beispiel: Therapieberichte</h3>
        <p>Ein h&auml;ufiger Quick Win, den die Analyse in Physiotherapie-Praxen aufdeckt, ist die Berichterstellung. Der typische Ablauf sieht so aus:</p>

        <div class="mini-app">
          <div class="mini-app-title">Vorher (manuell, ~20 Minuten pro Bericht)</div>
          <p>Stichpunkte aus der Behandlung zusammensuchen, Befunde aus der Akte rauskopieren, daraus einen zusammenh&auml;ngenden Bericht formulieren, Rechtschreibung und Formatierung pr&uuml;fen, abspeichern und versenden.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Nachher (KI-gest&uuml;tzt, ~5 Minuten pro Bericht)</div>
          <p>Stichpunkte und Befundkennzahlen in ein Textfeld eingeben, KI generiert den Berichtsentwurf im gew&uuml;nschten Format, Therapeut liest gegen und korrigiert bei Bedarf, fertig. Die Zeitersparnis liegt nicht daran, dass die KI besser formuliert, sondern daran, dass der Schritt von Stichpunkten zu Flie&szlig;text entf&auml;llt &mdash; und genau dieser Schritt ist es, der die meiste Zeit kostet.</p>
        </div>

        <div class="callout">
          <strong>Wichtig:</strong> Die KI erstellt einen Entwurf, keine fertige Dokumentation. Die fachliche Pr&uuml;fung und Freigabe bleibt immer bei euch. Kein Bericht geht raus, ohne dass ein Therapeut ihn gelesen und f&uuml;r korrekt befunden hat.
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4</span>
        <h2>Der 4-Wochen-Plan: Eine Automatisierung pro Woche</h2>

        <h3>4.1 Das System</h3>
        <p>Ihr nehmt euch jede Woche genau eine Aufgabe aus eurer Ergebnisliste vor &mdash; angefangen mit dem obersten Quick Win. Nicht mehr, nicht weniger. Der Rhythmus ist bewusst langsam gew&auml;hlt, weil Automatisierung nur dann funktioniert, wenn sie sich in euren Alltag einf&uuml;gt, statt ihn zus&auml;tzlich zu belasten.</p>

        <div class="highlight-box">
          <strong>Das Vier-Schritte-Prinzip pro Woche:</strong>
          <ol style="margin-top:8px;margin-bottom:0">
            <li>Den obersten Punkt von der Liste nehmen</li>
            <li>Die KI bitten, euch beim Einrichten zu helfen</li>
            <li>Eine Woche lang im Alltag testen</li>
            <li>Auswerten, anpassen, n&auml;chsten Punkt nehmen</li>
          </ol>
        </div>

        <h3>4.2 Die vier Wochen im Detail</h3>

        <div class="week-card">
          <span class="week-label">Woche 1</span>
          <span class="week-title">Den ersten Quick Win umsetzen</span>
          <p>Nehmt die Aufgabe, die ganz oben auf eurer Liste steht &mdash; meistens etwas wie Terminbest&auml;tigungen oder ein einfaches Textvorlagen-System. Fragt die KI direkt: <code>Hilf mir, [Aufgabe] zu automatisieren. Ich nutze [eure Software]. Erkl&auml;r mir Schritt f&uuml;r Schritt, was ich tun muss.</code></p>
          <p>Das Ziel f&uuml;r diese Woche ist nicht Perfektion, sondern ein funktionierender erster Durchlauf, den ihr eine Woche lang im echten Praxisalltag testen k&ouml;nnt.</p>
        </div>

        <div class="week-card">
          <span class="week-label">Woche 2</span>
          <span class="week-title">Auswerten und nachjustieren</span>
          <p>Am Ende von Woche 1 fragt euch: Hat die Automatisierung im Alltag funktioniert? Wo hat es gehakt? Was war &uuml;berfl&uuml;ssig? Passt die Einrichtung an, bis sie sich nat&uuml;rlich anf&uuml;hlt, und setzt parallel den zweiten Punkt von eurer Liste um.</p>
          <p>Typische Nachjustierungen: Vorlagen-Texte anpassen, Versandzeitpunkt &auml;ndern, Ausl&ouml;ser (Trigger) pr&auml;ziser definieren.</p>
        </div>

        <div class="week-card">
          <span class="week-label">Woche 3</span>
          <span class="week-title">Routinen festigen</span>
          <p>Die ersten beiden Automatisierungen sollten jetzt laufen, ohne dass ihr dar&uuml;ber nachdenken m&uuml;sst. In Woche 3 nehmt ihr den dritten Punkt vor &mdash; oft etwas, das ein klein wenig mehr Einarbeitung braucht, zum Beispiel ein Vorlagen-Baukasten f&uuml;r Patienteninfos oder ein einfaches Tracking f&uuml;r Fortbildungspunkte.</p>
          <p>Wenn die ersten beiden Automatisierungen immer noch wackeln, ist das ein Zeichen daf&uuml;r, dass ihr erst stabilisieren solltet, bevor ihr Neues hinzuf&uuml;gt.</p>
        </div>

        <div class="week-card">
          <span class="week-label">Woche 4</span>
          <span class="week-title">Bilanz ziehen</span>
          <p>Bevor ihr den vierten Punkt angeht, nehmt euch eine halbe Stunde f&uuml;r eine ehrliche Bilanz. Messt die tats&auml;chliche Zeitersparnis &mdash; nicht gesch&auml;tzt, sondern gemessen: Wie lange hat die Aufgabe vorher gedauert, wie lange dauert sie jetzt? Notiert, was funktioniert hat und was nicht, damit ihr f&uuml;r die n&auml;chsten Wochen wisst, worauf ihr achten m&uuml;sst.</p>
          <p>Wenn ihr eine Automatisierung pro Woche durchzieht und jede davon euch auch nur 30 Minuten pro Woche spart, sind das nach einem Monat zwei Stunden weniger Verwaltungsarbeit &mdash; pro Woche, dauerhaft.</p>
        </div>

        <h3>4.3 Wie ihr die KI zum Einrichten nutzt</h3>
        <p>F&uuml;r jeden Automatisierungsschritt k&ouml;nnt ihr die KI direkt um Hilfe bitten. Hier ein Beispiel-Prompt f&uuml;r den zweith&auml;ufigsten Quick Win &mdash; Therapieberichte:</p>

        <pre>Ich bin Physiotherapeut und m&ouml;chte meine Therapieberichte
schneller erstellen. Aktuell tippe ich aus Stichpunkten
einen Flie&szlig;text, das dauert ca. 20 Minuten pro Bericht.

Erstelle mir eine Vorlage, in die ich folgende Daten eingebe:
- Patientenkürzel (keine echten Namen)
- Diagnose und ICD-Code
- Behandlungszeitraum
- Befund-Stichpunkte
- Therapieziele und Fortschritt
- Empfehlung

Generiere daraus einen professionellen Therapiebericht
im Stil eines Kassenberichts. Sprache: sachlich, pr&auml;zise,
Fachbegriffe wo n&ouml;tig.</pre>

        <div class="callout">
          <strong>Datenschutz-Hinweis:</strong> Gebt in KI-Tools niemals echte Patientennamen oder identifizierbare Daten ein, wenn das Tool nicht explizit DSGVO-konform f&uuml;r Gesundheitsdaten zertifiziert ist. Arbeitet mit anonymisierten K&uuml;rzeln und f&uuml;gt die echten Angaben erst im fertigen Dokument in eurer Praxissoftware ein.
        </div>

        <h3>4.4 Nach den vier Wochen</h3>
        <p>Der 4-Wochen-Plan ist kein einmaliges Projekt, sondern der Anfang einer Gewohnheit. Wenn der Rhythmus einmal sitzt, k&ouml;nnt ihr ihn einfach weiterlaufen lassen &mdash; jede Woche einen weiteren Punkt von der Liste, solange es welche gibt, die sich lohnen. Erfahrungsgem&auml;&szlig; flacht die Kurve nach sechs bis acht Automatisierungen ab, weil die verbleibenden Aufgaben entweder zu komplex sind oder sich schlicht nicht sinnvoll automatisieren lassen, und das ist v&ouml;llig in Ordnung.</p>

        <div class="golden-rule">
          <h2>Zusammenfassung</h2>
          <ol>
            <li><strong>Praxis-Audit durchf&uuml;hren:</strong> Den Prompt oben in eine KI kopieren und ehrlich antworten &mdash; dauert 15 bis 20 Minuten.</li>
            <li><strong>Ergebnisliste lesen:</strong> Quick Wins oben, komplexe Projekte unten. Fangt oben an.</li>
            <li><strong>Eine Automatisierung pro Woche:</strong> Einrichten, testen, nachjustieren, n&auml;chste.</li>
            <li><strong>Bilanz nach vier Wochen:</strong> Tats&auml;chliche Zeitersparnis messen, nicht sch&auml;tzen.</li>
          </ol>
          <p style="margin-top:16px;margin-bottom:0"><strong>Das Ziel ist nicht, alles zu automatisieren.</strong> Das Ziel ist, die eine Stunde pro Tag zur&uuml;ckzugewinnen, die ihr mit Verwaltung verbringt, obwohl ihr eigentlich f&uuml;r eure Patienten da sein wolltet.</p>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; KI-Tools f&uuml;r Health Professionals.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-erste-automatisierung', OxGuideErsteAutomatisierung);
