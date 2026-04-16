class OxGuideSpracheingabe extends HTMLElement {
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
  --red-bg:#3b0a0a;--red-text:#fca5a5;
  --amber:#f59e0b;--amber-bg:#1a1408;--amber-border:#b45309;--amber-light:#fbbf24;
  --code-bg:#1a1a2e;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  --mono:'SF Mono','Fira Code',monospace;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.75;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:720px;margin:0 auto;padding:48px 24px 64px}

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
  font-family:var(--mono);color:var(--primary-light);white-space:pre-wrap;word-break:break-word;
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

.mini-app{
  background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.mini-app-title{font-weight:600;color:var(--blue-light);font-size:15.2px;margin-bottom:8px}
.mini-app p{color:var(--blue-muted);font-size:14.4px;margin-bottom:8px}
.mini-app p:last-child{margin-bottom:0}
.mini-app code{font-size:0.85em}

.highlight-box{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.highlight-box strong{color:var(--white)}

.privacy-safe{background:var(--green-bg);border:1px solid #065f46;border-radius:10px;padding:20px 24px;margin:24px 0}
.privacy-safe .privacy-label{display:inline-block;background:#065f46;color:var(--green-text);font-size:11.2px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:3.2px 9.6px;border-radius:4px;margin-bottom:12px}
.privacy-safe strong{color:var(--green-text)}
.privacy-safe p{color:#a7f3d0;font-size:14.4px}

.privacy-warn{background:var(--amber-bg);border:1px solid var(--amber-border);border-radius:10px;padding:20px 24px;margin:24px 0}
.privacy-warn .privacy-label{display:inline-block;background:var(--amber);color:var(--amber-bg);font-size:11.2px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:3.2px 9.6px;border-radius:4px;margin-bottom:12px}
.privacy-warn strong{color:var(--amber-light)}
.privacy-warn p{font-size:14.4px}

.comparison{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0}
.comparison-col{border-radius:8px;padding:20px 24px;border:1px solid #1e293b}
.comparison-col h3{margin-top:0;font-size:17.6px}
.comparison-col p{font-size:14.4px;margin-bottom:8px}
.comparison-col p:last-child{margin-bottom:0}
.comparison-col ul{margin:8px 0 8px 20px}
.comparison-col li{font-size:14.4px;margin-bottom:4px}
.col-local{background:#0a1a0f;border-color:#153b1f}
.col-local h3{color:var(--green-text)}
.col-cloud{background:#0f172a;border-color:var(--blue-border)}
.col-cloud h3{color:var(--blue-light)}

.stat-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0}
.stat-box{background:var(--surface);border:1px solid #1e293b;border-radius:8px;padding:16px;text-align:center}
.stat-number{font-size:28px;font-weight:700;color:var(--primary-light);display:block;line-height:1.2}
.stat-label{font-size:12.8px;color:var(--text-muted);margin-top:4px;display:block}

.shortcut-box{background:var(--code-bg);border:1px solid #2a2a4e;border-radius:8px;padding:16px 20px;margin:12px 0;display:flex;align-items:center;gap:16px}
.shortcut-keys{background:#111;border:1px solid #333;border-radius:6px;padding:6.4px 12px;font-family:var(--mono);font-size:14.4px;color:var(--primary-light);white-space:nowrap;flex-shrink:0}
.shortcut-desc{font-size:14.4px;color:var(--text-secondary)}

.step-card{background:var(--surface);border:1px solid #1e293b;border-radius:10px;padding:20px 24px;margin:16px 0}
.step-card strong{color:var(--white)}
.step-label{display:inline-block;background:var(--primary);color:var(--white);font-weight:700;padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;margin-right:8px;letter-spacing:0.03em}
.step-title{font-size:16.8px;font-weight:600;color:var(--white)}
.step-card p{margin-top:12px;margin-bottom:8px}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
  border:1px solid var(--primary);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}

.lehre-section{background:#0d1117;border:1px solid #1f2937;border-radius:12px;padding:32px 36px;margin:48px 0 32px}
.lehre-section h2{margin-top:0}
.lehre-section .exercise{background:var(--surface)}

.exercise{background:var(--surface-alt);border-radius:8px;padding:16px 20px;margin:12px 0}
.exercise strong{color:var(--white)}
.exercise .time{color:var(--primary);font-size:12.8px;font-weight:500}

.checklist{list-style:none;margin:16px 0 8px;padding:0}
.checklist li{position:relative;padding-left:28px;margin-bottom:9.6px;font-size:15.2px}
.checklist li::before{content:"";position:absolute;left:0;top:4.8px;width:17.6px;height:17.6px;border:1.5px solid var(--primary);border-radius:3px;background:var(--surface-alt)}

.source-note{
  color:var(--text-dim);font-size:12.8px;font-style:italic;
  margin-top:32px;padding-top:16px;border-top:1px solid var(--border);
}
.source-note a{color:var(--text-muted)}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .comparison{grid-template-columns:1fr}
  .stat-row{grid-template-columns:1fr}
  .shortcut-box{flex-direction:column;align-items:flex-start;gap:8px}
  .lehre-section{padding:20px 22.4px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Spracheingabe statt Tippen &mdash; KI-Diktat f&uuml;r Health Professionals</h1>
        <div class="meta">4-Seiten-Guide &middot; 10 Praxis-Szenarien &middot; Out Of The Box Science</div>


        <!-- ================================================================ -->
        <!-- PAGE 1: WARUM SPRACHEINGABE                                      -->
        <!-- ================================================================ -->

        <p class="intro">Die meisten Health Professionals tippen ihre Dokumentation zwischen zwei Behandlungen in den Rechner, oft unter Zeitdruck, oft mit kalten Fingern nach der letzten manuellen Einheit. Was viele nicht wissen: Sprechen geht nicht nur schneller als Tippen, es geht dreimal so schnell. Und mit den richtigen Tools landet das Gesprochene direkt als fertiger Text in der Software, ohne Umweg &uuml;ber ein Diktierger&auml;t und ohne dass eine Arzthelferin nachtippt. Dieser Guide zeigt euch zwei Tools, die genau das k&ouml;nnen, und zehn konkrete Szenarien aus eurem Alltag.</p>

        <div class="stat-row">
          <div class="stat-box">
            <span class="stat-number">45</span>
            <span class="stat-label">W&ouml;rter/Min beim Tippen</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">150</span>
            <span class="stat-label">W&ouml;rter/Min beim Sprechen</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">3,3x</span>
            <span class="stat-label">schneller per Sprache</span>
          </div>
        </div>

        <p>Diese Zahlen sind keine Sch&auml;tzwerte, sondern kommen aus der Tippgeschwindigkeits-Forschung und der Spracherkennungs-Literatur. Der Durchschnittsmensch tippt rund 40 bis 50 W&ouml;rter pro Minute auf einer normalen Tastatur, w&auml;hrend die nat&uuml;rliche Sprechgeschwindigkeit im Deutschen bei 120 bis 150 W&ouml;rtern pro Minute liegt. Moderne KI-Spracherkennung kommt bei dieser Geschwindigkeit auf Genauigkeitsraten von &uuml;ber 95 Prozent, in ruhiger Umgebung sogar &uuml;ber 97 Prozent.</p>

        <div class="callout">
          <strong>Warum das f&uuml;r euren Alltag relevant ist:</strong> Ein typischer Therapiebericht hat 200 bis 300 W&ouml;rter. Getippt dauert das gut sechs Minuten, gesprochen knapp zwei. Bei f&uuml;nf Berichten am Tag spart ihr 20 Minuten &mdash; pro Tag. Das ist nach einer Woche fast zwei Stunden Dokumentationszeit, die ihr f&uuml;r Patienten oder f&uuml;r euch selbst verwenden k&ouml;nnt.
        </div>

        <h3>1.1 Wof&uuml;r Spracheingabe besonders gut funktioniert</h3>
        <p>Spracheingabe ersetzt nicht das Tippen in jeder Situation, aber es gibt Aufgaben, bei denen der Geschwindigkeitsvorteil besonders deutlich ausf&auml;llt. Freitext-Dokumentation geh&ouml;rt dazu, also alles, wo ihr l&auml;ngere Abs&auml;tze formuliert statt nur K&auml;stchen anzukreuzen: Befunde, Berichte, Emails, Notizen. Weniger geeignet ist Spracheingabe f&uuml;r stark strukturierte Eingabemasken, bei denen ihr zwischen Feldern springen und einzelne Werte eintragen m&uuml;sst.</p>

        <h3>1.2 Was heutige KI-Diktiersoftware von Siri und Co. unterscheidet</h3>
        <p>Die eingebaute Diktierfunktion auf dem iPhone oder Mac erkennt gesprochene W&ouml;rter, aber sie versteht keinen Kontext. Neue KI-basierte Tools wie SuperWhisper oder Wispr Flow nutzen Sprachmodelle, die den Sinn des Gesagten mitverarbeiten &mdash; dadurch setzen sie Fachbegriffe korrekt, erg&auml;nzen fehlende Satzzeichen automatisch und k&ouml;nnen sogar gesprochene F&uuml;llw&ouml;rter und Versprecher herausfiltern. Der Unterschied in der Praxis ist erheblich: Statt einen diktierten Text anschlie&szlig;end zu korrigieren, k&ouml;nnt ihr ihn in den meisten F&auml;llen direkt verwenden.</p>


        <!-- ================================================================ -->
        <!-- PAGE 2: DIE ZWEI TOOLS                                           -->
        <!-- ================================================================ -->

        <span class="section-label">Seite 2 &middot; Werkzeuge</span>
        <h2>2. Die zwei Tools im Vergleich</h2>
        <p>Es gibt aktuell zwei Tools, die sich f&uuml;r den professionellen Einsatz eignen und die wir ohne Einschr&auml;nkung empfehlen k&ouml;nnen. Beide laufen auf dem Mac, beide arbeiten systemweit &mdash; das hei&szlig;t, ihr k&ouml;nnt in jedes Textfeld diktieren, egal ob Browser, Praxissoftware oder Email-Programm. Der entscheidende Unterschied liegt im Datenschutz.</p>

        <div class="comparison">
          <div class="comparison-col col-local">
            <h3>SuperWhisper</h3>
            <p><strong>Verarbeitung:</strong> Komplett lokal auf eurem Mac. Kein Internet n&ouml;tig, keine Daten verlassen das Ger&auml;t.</p>
            <p><strong>Genauigkeit:</strong> Sehr gut, besonders mit den gr&ouml;&szlig;eren Whisper-Modellen (Large v3). Bei Fachbegriffen gelegentlich kleine Abweichungen.</p>
            <p><strong>Preis:</strong> Einmalig ca. 30 USD (Lifetime)</p>
            <p><strong>Systemanforderung:</strong> Apple Silicon (M1 oder neuer), mindestens 16 GB RAM f&uuml;r die gro&szlig;en Modelle empfohlen</p>
            <ul>
              <li>Basiert auf OpenAIs Whisper-Modell, l&auml;uft aber vollst&auml;ndig offline</li>
              <li>Mehrere Modellgr&ouml;&szlig;en w&auml;hlbar (Tiny bis Large)</li>
              <li>Unterst&uuml;tzt Deutsch nativ</li>
            </ul>
          </div>
          <div class="comparison-col col-cloud">
            <h3>Wispr Flow</h3>
            <p><strong>Verarbeitung:</strong> Cloud-basiert. Audiodaten werden an Server geschickt, dort transkribiert und zur&uuml;ckgeliefert.</p>
            <p><strong>Genauigkeit:</strong> Sehr hoch, ca. 97 Prozent laut Herstellerangaben. Erkennt Kontext und korrigiert Fachbegriffe zuverl&auml;ssiger.</p>
            <p><strong>Preis:</strong> Ab ca. 10 USD/Monat (Abo-Modell)</p>
            <p><strong>Systemanforderung:</strong> Mac mit stabiler Internetverbindung</p>
            <ul>
              <li>Eigenes Sprachmodell, trainiert auf nat&uuml;rliches Diktieren</li>
              <li>Filtert F&uuml;llw&ouml;rter und Versprecher automatisch</li>
              <li>Lernt euren Sprachstil mit der Zeit</li>
            </ul>
          </div>
        </div>

        <h3>2.1 Tastenkombinationen</h3>
        <p>Beide Tools funktionieren nach demselben Prinzip: Ihr dr&uuml;ckt eine Tastenkombination, sprecht, und der Text erscheint dort, wo euer Cursor gerade steht. Es ist keine App, die ihr &ouml;ffnen m&uuml;sst, kein Fenster, das im Weg ist &mdash; einfach dr&uuml;cken, reden, fertig.</p>

        <div class="shortcut-box">
          <span class="shortcut-keys">&#x2325; + Leertaste</span>
          <span class="shortcut-desc"><strong>SuperWhisper</strong> &mdash; Option + Leertaste gedr&uuml;ckt halten, sprechen, loslassen. Text erscheint nach einer kurzen Verarbeitung.</span>
        </div>
        <div class="shortcut-box">
          <span class="shortcut-keys">fn fn</span>
          <span class="shortcut-desc"><strong>Wispr Flow</strong> &mdash; Fn-Taste doppelt antippen startet die Aufnahme. Nochmal antippen oder kurze Pause beendet sie. Text erscheint sofort.</span>
        </div>

        <h3>2.2 Datenschutz-Bewertung f&uuml;r den Praxiseinsatz</h3>
        <p>Im Gesundheitswesen ist Datenschutz nicht optional, sondern gesetzliche Pflicht. Die DSGVO und das Patientendatenschutzgesetz setzen klare Grenzen daf&uuml;r, welche Werkzeuge ihr bei der Verarbeitung von Patientendaten einsetzen d&uuml;rft. Die Unterscheidung zwischen lokaler und Cloud-basierter Verarbeitung ist dabei nicht nur ein technisches Detail, sondern bestimmt, ob ihr ein Tool &uuml;berhaupt f&uuml;r die Dokumentation verwenden k&ouml;nnt.</p>

        <div class="privacy-safe">
          <span class="privacy-label">DSGVO-konform einsetzbar</span>
          <p><strong>SuperWhisper verarbeitet alles lokal.</strong> Kein Audio verl&auml;sst euren Rechner, keine Daten gehen an externe Server. Aus Datenschutz-Sicht ist das gleichbedeutend mit dem Tippen auf eurer Tastatur &mdash; die Daten bleiben bei euch. Ihr k&ouml;nnt damit Patientennamen, Befunde, Diagnosen und alle anderen sensiblen Inhalte diktieren, ohne gegen Datenschutzauflagen zu versto&szlig;en.</p>
        </div>

        <div class="privacy-warn">
          <span class="privacy-label">Vorsicht bei Patientendaten</span>
          <p><strong>Wispr Flow verarbeitet Audio in der Cloud.</strong> Das bedeutet, dass gesprochene Inhalte an externe Server &uuml;bertragen werden. F&uuml;r Patientennamen, Diagnosen und andere gesch&uuml;tzte Gesundheitsdaten ist das ohne einen Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter und ohne explizite Genehmigung eures Datenschutzbeauftragten nicht zul&auml;ssig. Nutzt Wispr Flow im Praxisalltag daher nur f&uuml;r Texte ohne Patientenbezug &mdash; also etwa f&uuml;r allgemeine Emails, Fortbildungsnotizen oder Vortr&auml;ge.</p>
        </div>

        <div class="callout">
          <strong>Empfehlung f&uuml;r den Praxisalltag:</strong> Wer auf Nummer sicher gehen will, nutzt SuperWhisper f&uuml;r alles, was Patientendaten enth&auml;lt, und Wispr Flow f&uuml;r den Rest. Wer nur ein Tool will und im Gesundheitswesen arbeitet, nimmt SuperWhisper &mdash; lieber minimal weniger Genauigkeit als ein Datenschutz-Problem.
        </div>


        <!-- ================================================================ -->
        <!-- PAGE 3: 10 ANWENDUNGSFÄLLE                                       -->
        <!-- ================================================================ -->

        <span class="section-label">Seite 3 &middot; Praxis-Szenarien</span>
        <h2>3. Zehn Anwendungsf&auml;lle f&uuml;r den Praxisalltag</h2>
        <p>Die folgenden zehn Szenarien zeigen, wo Spracheingabe im Arbeitsalltag von Health Professionals den gr&ouml;&szlig;ten Unterschied macht. Jedes Szenario enth&auml;lt ein konkretes Beispiel, das ihr direkt ausprobieren k&ouml;nnt.</p>

        <div class="mini-app">
          <div class="mini-app-title">1. Befunde diktieren zwischen zwei Behandlungen</div>
          <p><strong>Situation:</strong> Patient ist raus, der n&auml;chste kommt in drei Minuten. Statt hastig in die Praxissoftware zu tippen, dr&uuml;ckt ihr die Tastenkombination und sprecht den Befund direkt ins offene Textfeld.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Erstbefund Frau M&uuml;ller, 48 Jahre. LWS-Syndrom seit drei Wochen. Flexion eingeschr&auml;nkt circa 40 Grad, Seitneigung rechts schmerzhaft endgradig. Lasegue negativ beidseits. Muskul&auml;rer Hartspann paravertebral links betont. Therapieziel Schmerzreduktion und Mobilit&auml;tsverbesserung LWS.</code></p>
          <p><strong>Zeitersparnis:</strong> ca. 3 Minuten pro Befund, bei sechs Patienten am Vormittag knapp 20 Minuten.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">2. Therapieberichte per Sprache formulieren</div>
          <p><strong>Situation:</strong> Der Kostentr&auml;ger braucht einen Verlaufsbericht, und ihr sitzt abends noch dran. Statt den Bericht Satz f&uuml;r Satz einzutippen, sprecht ihr ihn in einem Durchgang.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Therapiebericht Herr Schmidt. 12 Einheiten Krankengymnastik durchgef&uuml;hrt. Diagnose Gonarthrose rechts. Knieflexion verbessert von 90 auf 120 Grad. VAS unter Belastung von 7 auf 3 reduziert. Patient f&uuml;hrt Heimprogramm zuverl&auml;ssig durch. Empfehlung sechs weitere Einheiten zur Stabilisierung.</code></p>
          <p><strong>Zeitersparnis:</strong> ca. 4&ndash;5 Minuten pro Bericht.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">3. Notizen direkt nach dem Patientengespr&auml;ch</div>
          <p><strong>Situation:</strong> Ein Patient erz&auml;hlt euch nach der Behandlung, dass er am Wochenende umgeknickt ist und seitdem Probleme beim Treppensteigen hat. Ihr haltet das sofort fest, bevor der n&auml;chste kommt.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Nachtrag Herr Weber. Berichtet Supinationstrauma rechts am Samstag beim Wandern. Seitdem Schmerzen am Au&szlig;enkn&ouml;chel beim Treppensteigen. Leichte Schwellung lateral sichtbar. N&auml;chste Sitzung Befund Sprunggelenk pr&uuml;fen, ggf. R&uuml;cksprache Orthop&auml;de.</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">4. Arztbriefe und &Uuml;berweiser-Kommunikation</div>
          <p><strong>Situation:</strong> Der &uuml;berweisende Orthop&auml;de fragt nach dem aktuellen Stand. Statt eine Email m&uuml;hsam zusammenzutippen, diktiert ihr sie in 90 Sekunden.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Sehr geehrter Herr Dr. Berger, kurze R&uuml;ckmeldung zu Ihrer Patientin Frau Klein. Nach acht Einheiten Krankengymnastik zeigt sich eine deutliche Verbesserung der Schulterabduktion von 90 auf 150 Grad. Die Nachtschmerzen sind vollst&auml;ndig r&uuml;ckl&auml;ufig. Ich empfehle vier weitere Einheiten zur Stabilisierung. Mit freundlichen Gr&uuml;&szlig;en.</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">5. Behandlungsdokumentation in der Praxis</div>
          <p><strong>Situation:</strong> Zwischen zwei Patienten schnell die letzte Behandlung dokumentieren, ohne sich an den Schreibtisch setzen zu m&uuml;ssen. Funktioniert auch auf dem iPad, wenn die Praxissoftware dort l&auml;uft.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Behandlung Frau Yilmaz, dritte Sitzung. MT HWS C3 bis C5 bilateral, Mobilisation Grad 3 nach Maitland. Anschlie&szlig;end aktive Stabilisations&uuml;bungen tiefe Nackenflexoren, drei S&auml;tze zehn Sekunden halten. Patientin berichtet weniger Kopfschmerzen seit letzter Woche.</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">6. Emails an Kostentr&auml;ger und Kassen</div>
          <p><strong>Situation:</strong> Eine Verl&auml;ngerung muss begr&uuml;ndet werden, und die Formulierung soll sachlich und pr&auml;zise sein. Per Sprache formuliert ihr fl&uuml;ssiger als per Tastatur, weil ihr den Gedanken nicht durch das Tippen unterbrechen m&uuml;sst.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Betreff Verl&auml;ngerungsantrag Heilmittelverordnung Herr K&ouml;nig. Doppelpunkt. Die bisherigen 18 Einheiten Krankengymnastik haben zu einer messbaren Verbesserung gef&uuml;hrt, der Patient ist jedoch noch nicht arbeitsfähig. Knieflexion aktuell 105 Grad, Ziel 130 Grad f&uuml;r Berufsaus&uuml;bung als Dachdecker. Weitere 12 Einheiten sind medizinisch notwendig.</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">7. Patienteninformationen und Heim&uuml;bungsprogramme</div>
          <p><strong>Situation:</strong> Ihr wollt einem Patienten ein individuelles Heim&uuml;bungsprogramm mitgeben. Statt ein PDF zusammenzuklicken, diktiert ihr die &Uuml;bungen und lasst sie anschlie&szlig;end von einer KI formatieren.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>&Uuml;bungsprogramm f&uuml;r Frau Lehmann, Impingement rechte Schulter. &Uuml;bung eins, Pendel&uuml;bung. Oberkoerper leicht nach vorne beugen, Arm locker h&auml;ngen lassen, kleine Kreise beschreiben, zwei Minuten, dreimal t&auml;glich. &Uuml;bung zwei, Wandkrabbeln. Finger an die Wand, langsam nach oben krabbeln bis Schmerzgrenze, Position zehn Sekunden halten, zehn Wiederholungen.</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">8. Fortbildungsnotizen live mitdiktieren</div>
          <p><strong>Situation:</strong> Ihr sitzt in einem Vortrag oder einer Online-Fortbildung und wollt Notizen machen, ohne den Blick vom Bildschirm zu nehmen. Ihr fl&uuml;stert eure Gedanken ins Mikrofon und habt am Ende ein durchsuchbares Protokoll.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Fortbildung Sportphysiotherapie, Referent Dr. Meier. Kernaussage: Exzentrisches Training bei Achillessehnen-Tendinopathie zeigt bessere Langzeitergebnisse als konzentrisches Training allein. Alfredson-Protokoll nach wie vor Goldstandard, aber Dosierung individuell anpassen. Eigene Frage kl&auml;ren: Gilt das auch f&uuml;r Patellar-Tendinopathie?</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">9. Teambesprechungen und Fallkonferenzen dokumentieren</div>
          <p><strong>Situation:</strong> In der Teamsitzung werden drei schwierige F&auml;lle besprochen. Eine Person diktiert mit, w&auml;hrend die anderen diskutieren, und hat am Ende ein nutzbares Protokoll statt kryptischer Stichpunkte auf einem Zettel.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Fallkonferenz 14. April. Fall eins, Herr Nowak, chronische Schulterschmerzen seit sechs Monaten. Kollegin Fischer schl&auml;gt zus&auml;tzlich Stosswellentherapie vor. Vereinbart: N&auml;chste vier Sitzungen kombiniert MT plus Stosswelle, danach Re-Evaluation.</code></p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">10. Vortr&auml;ge, Artikel und Social-Media-Texte vorbereiten</div>
          <p><strong>Situation:</strong> Ihr sollt einen Vortrag f&uuml;r die Praxis-Website oder eine Pr&auml;sentation vorbereiten und sitzt vor dem leeren Dokument. Per Sprache kommt der erste Entwurf erheblich schneller zusammen, weil ihr beim Sprechen anders denkt als beim Tippen &mdash; fl&uuml;ssiger, direkter, n&auml;her am Gespr&auml;chston.</p>
          <p><strong>Beispiel-Diktat:</strong> <code>Blogpost-Entwurf. Titel: Wann ist ein MRT bei R&uuml;ckenschmerzen wirklich notwendig? Einleitung: Viele Patienten kommen mit dem Wunsch nach einem MRT, weil sie glauben, dass man ohne Bild nichts sagen kann. Tats&auml;chlich zeigt die Forschung, dass bei unspezifischen R&uuml;ckenschmerzen ein MRT in den ersten sechs Wochen in den meisten F&auml;llen keinen therapeutischen Mehrwert hat.</code></p>
        </div>

        <div class="highlight-box">
          <strong>Praxistipp f&uuml;r alle zehn Szenarien:</strong> Diktiert in ganzen S&auml;tzen, nicht in Stichworten. Die KI-Erkennung arbeitet deutlich besser, wenn sie vollst&auml;ndige Satzstrukturen verarbeiten kann. Wenn ihr Satzzeichen explizit ansagen m&uuml;sst (bei SuperWhisper manchmal n&ouml;tig), sagt einfach &bdquo;Punkt&ldquo;, &bdquo;Komma&ldquo; oder &bdquo;Neue Zeile&ldquo; &mdash; beide Tools erkennen diese Befehle.
        </div>


        <!-- ================================================================ -->
        <!-- PAGE 4: SETUP + GOLDENE REGEL                                    -->
        <!-- ================================================================ -->

        <span class="section-label">Seite 4 &middot; Loslegen</span>
        <h2>4. Setup in f&uuml;nf Minuten</h2>
        <p>Beide Tools sind in wenigen Schritten einsatzbereit. Ihr braucht keine IT-Abteilung und keine Konfigurationsdatei &mdash; herunterladen, eine Einstellung pr&uuml;fen, fertig.</p>

        <h3>4.1 SuperWhisper einrichten</h3>

        <div class="step-card">
          <span class="step-label">Schritt 1</span>
          <span class="step-title">Herunterladen</span>
          <p><a href="https://superwhisper.com">superwhisper.com</a> aufrufen und die App installieren. Die kostenlose Testversion reicht zum Ausprobieren.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 2</span>
          <span class="step-title">Modell w&auml;hlen</span>
          <p>In den Einstellungen das Whisper-Modell ausw&auml;hlen. F&uuml;r den Anfang reicht <code>Large v3</code> &mdash; das bietet die beste Balance zwischen Genauigkeit und Geschwindigkeit. Beim ersten Start wird das Modell heruntergeladen (ca. 1,5 GB), danach l&auml;uft alles offline.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 3</span>
          <span class="step-title">Sprache und Shortcut pr&uuml;fen</span>
          <p>Sprache auf Deutsch stellen und den Shortcut pr&uuml;fen: <code>Option + Leertaste</code> ist der Standard. Falls eine andere App diesen Shortcut belegt, k&ouml;nnt ihr ihn in den Einstellungen &auml;ndern.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 4</span>
          <span class="step-title">Mikrofon-Zugriff best&auml;tigen</span>
          <p>macOS fragt beim ersten Start, ob SuperWhisper auf das Mikrofon zugreifen darf. Best&auml;tigen &mdash; ohne Mikrofon-Zugriff geht es nicht. Falls ihr ein externes Mikrofon nutzt, stellt sicher, dass es in den Systemeinstellungen als Eingabeger&auml;t ausgew&auml;hlt ist.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 5</span>
          <span class="step-title">Testen</span>
          <p>&Ouml;ffnet ein beliebiges Textfeld (Notizen-App, Browser, Praxissoftware), dr&uuml;ckt <code>Option + Leertaste</code>, sprecht einen Satz und lasst los. Der transkribierte Text sollte nach wenigen Sekunden erscheinen.</p>
        </div>

        <h3>4.2 Wispr Flow einrichten</h3>
        <p>Das Setup l&auml;uft fast identisch ab: App von <a href="https://wisprflow.com">wisprflow.com</a> herunterladen, Account erstellen, Mikrofon-Zugriff erlauben. Der Shortcut ist <code>fn fn</code> (Fn-Taste doppelt antippen). Wispr Flow braucht kein lokales Modell herunterzuladen, weil die Verarbeitung in der Cloud passiert &mdash; daf&uuml;r braucht ihr eine stabile Internetverbindung.</p>

        <div class="callout">
          <strong>Beide Tools parallel nutzen?</strong> Das geht, und es ist sogar eine sinnvolle Strategie: SuperWhisper f&uuml;r alles mit Patientenbezug (lokal und DSGVO-konform), Wispr Flow f&uuml;r allgemeine Texte, bei denen die etwas h&ouml;here Genauigkeit den Unterschied macht. Beide k&ouml;nnen gleichzeitig installiert sein, solange die Shortcuts unterschiedlich bleiben.
        </div>

        <h3>4.3 Drei Tipps f&uuml;r bessere Ergebnisse</h3>
        <ol>
          <li><strong>Ruhige Umgebung:</strong> Hintergrundger&auml;usche sind der gr&ouml;&szlig;te Feind der Spracherkennung. In einem lauten Behandlungsraum mit laufender Musik und Ger&auml;ten sinkt die Genauigkeit deutlich. Im eigenen B&uuml;ro oder im ruhigen Pausenraum funktioniert es am besten.</li>
          <li><strong>Deutlich, aber nat&uuml;rlich sprechen:</strong> Ihr m&uuml;sst nicht &uuml;bertrieben langsam oder laut sprechen. Normales, klares Sprechtempo reicht aus. Was hilft: Ganze S&auml;tze statt Stichworte, weil die KI aus dem Satzkontext R&uuml;ckschl&uuml;sse auf einzelne W&ouml;rter zieht.</li>
          <li><strong>Fachbegriffe trainieren:</strong> SuperWhisper erlaubt es, eine eigene Wortliste (Custom Vocabulary) anzulegen. Tragt dort die Fachbegriffe ein, die ihr h&auml;ufig verwendet &mdash; Gonarthrose, Tendinopathie, Lasegue, Maitland &mdash; und die Erkennung wird bei diesen W&ouml;rtern sp&uuml;rbar besser.</li>
        </ol>


        <!-- GOLDENE REGEL -->
        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Denkt nicht daran, was ihr tippen w&uuml;rdet, sondern sprecht so, als w&uuml;rdet ihr einer Kollegin den Fall erkl&auml;ren. Der nat&uuml;rliche, flie&szlig;ende Sprechstil produziert bessere Transkriptionen als &uuml;berlegtes Diktieren in abgehackten Halbsaetzen. Die KI versteht Kontext &mdash; nutzt das aus, indem ihr ihr Kontext gebt.</p>
          <p style="margin-bottom:0">Und fangt klein an: Eine Woche lang nur die Befunde diktieren statt tippen. Wenn das sitzt, kommen die Berichte dazu, dann die Emails. Nach zwei Wochen fragt ihr euch, warum ihr je getippt habt.</p>
        </div>


        <!-- LEHRE-SECTION -->
        <div class="lehre-section">
          <h2>F&uuml;r die Lehre: 3 &Uuml;bungsideen</h2>
          <div class="exercise">
            <strong>1. Diktat-Wettbewerb</strong> <span class="time">15 Min</span>
            <p>Alle bekommen denselben Befund auf Papier. Eine H&auml;lfte tippt ihn ab, die andere diktiert ihn per SuperWhisper. Anschlie&szlig;end vergleichen: Zeit, Fehlerquote und Lesbarkeit. Der Unterschied ist eindr&uuml;cklich genug, dass niemand mehr zum Tippen zur&uuml;ck will.</p>
          </div>
          <div class="exercise">
            <strong>2. Datenschutz-Diskussion</strong> <span class="time">20 Min</span>
            <p>Szenarien durchspielen: Welches Tool d&uuml;rft ihr in welcher Situation verwenden? Fall 1: Befund mit Patientenname. Fall 2: Allgemeine Fortbildungsnotizen. Fall 3: Therapiebericht f&uuml;r die Krankenkasse. Teilnehmende ordnen zu (SuperWhisper vs. Wispr Flow vs. beides m&ouml;glich) und begr&uuml;nden warum.</p>
          </div>
          <div class="exercise">
            <strong>3. Workflow-Design</strong> <span class="time">30 Min</span>
            <p>Jede Gruppe entwirft einen konkreten Dokumentations-Workflow f&uuml;r ihre Praxis: Wann wird diktiert, wann getippt? Welches Tool f&uuml;r welche Aufgabe? Wo spart Spracheingabe die meiste Zeit, und wo ist Tippen weiterhin sinnvoller? Ergebnis: Ein kurzer Ablaufplan auf einer Seite, den man ausdrucken und an die Pinnwand h&auml;ngen kann.</p>
          </div>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Health Professionals.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-spracheingabe', OxGuideSpracheingabe);
