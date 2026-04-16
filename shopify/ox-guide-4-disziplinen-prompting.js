class OxGuide4DisziplinenPrompting extends HTMLElement {
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
  --green-bg:#064e3b;--green-text:#6ee7b7;
  --amber:#f59e0b;--amber-bg:#1a1408;--amber-border:#b45309;--amber-light:#fbbf24;
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

.section-label{display:inline-block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-top:48px;margin-bottom:0}
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

.highlight-box{background:var(--surface);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0}
.highlight-box strong{color:var(--white)}

.level-tag{
  display:inline-block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.05em;
  padding:2.4px 8px;border-radius:3px;margin-bottom:8px;
}
.level-basic{background:var(--green-bg);color:var(--green-text)}
.level-advanced{background:#1e1b4b;color:var(--primary-light)}
.level-expert{background:var(--amber-bg);color:var(--amber-light)}
.level-master{background:#3b0a0a;color:#fca5a5}

.week-card{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:16px 0;
}
.week-card strong{color:var(--white)}
.week-label{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;
  margin-right:8px;letter-spacing:0.03em;
}
.week-title{font-size:16.8px;font-weight:600;color:var(--white)}
.week-card p{margin-top:12px;margin-bottom:8px}
.week-card ul{margin:8px 0 8px 20px}

.golden-rule{background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);border:1px solid var(--primary);border-radius:8px;padding:20px 24px;margin:32px 0}
.golden-rule h2{margin-top:0}

.lehre-section{background:#0d1117;border:1px solid #1f2937;border-radius:12px;padding:32px 36px;margin:48px 0 32px}
.lehre-section h2{margin-top:0}

.exercise{background:var(--surface-alt);border-radius:8px;padding:16px 20px;margin:12px 0}
.exercise strong{color:var(--white)}
.exercise .time{color:var(--primary);font-size:12.8px;font-weight:500}

.comparison{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0}
.comparison-bad,.comparison-good{border-radius:8px;padding:16px 20px}
.comparison-bad{background:#1a0a0a;border:1px solid #3b1515}
.comparison-good{background:#0a1a0f;border:1px solid #153b1f}
.comparison-label{font-size:11.2px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:8px;display:block}
.comparison-bad .comparison-label{color:#fca5a5}
.comparison-good .comparison-label{color:var(--green-text)}
.comparison-bad p,.comparison-good p{font-size:14.4px;margin-bottom:0}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

.source-note{color:var(--text-dim);font-size:12.8px;font-style:italic;margin-top:32px;padding-top:16px;border-top:1px solid var(--border)}
.source-note a{color:var(--text-muted)}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .comparison{grid-template-columns:1fr}
  .lehre-section{padding:20px 22.4px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Die 4 Disziplinen des KI-Promptings</h1>
        <div class="meta">4-Seiten-Guide &middot; 4-Wochen-&Uuml;bungsplan &middot; Out Of The Box Science</div>

        <p class="intro">Die meisten Ratgeber zum Thema KI h&ouml;ren bei &bdquo;schreib bessere Prompts&ldquo; auf. Das war 2023 ein guter Tipp, aber die Technik hat sich weiterentwickelt und damit auch das, was ihr als Health Professionals wissen m&uuml;sst, um KI wirklich f&uuml;r euch arbeiten zu lassen. Dieser Guide stellt euch vier aufeinander aufbauende Disziplinen vor &mdash; von der einfachsten Eingabe bis zur vollst&auml;ndigen Vorlage, die ein KI-Agent selbstst&auml;ndig f&uuml;r jeden Patienten ausf&uuml;llt. Jede Disziplin kommt mit einem konkreten Beispiel aus eurem Praxisalltag.</p>

        <div class="callout">
          <strong>Warum vier Disziplinen, nicht eine?</strong> Euer Prompt &mdash; also das, was ihr in die Eingabezeile tippt &mdash; macht am Ende nur einen winzigen Bruchteil dessen aus, was das Sprachmodell tats&auml;chlich verarbeitet. Der Rest ist Kontext: Systemanweisungen, Dateien, Vorlagen, Regeln. Wer nur den Prompt optimiert, l&auml;sst die anderen 99&nbsp;% der Steuerungsm&ouml;glichkeiten liegen.
        </div>


        <!-- ================================================================ -->
        <!-- PAGE 2: DIE 4 DISZIPLINEN IM DETAIL                             -->
        <!-- ================================================================ -->

        <span class="section-label">Disziplin 1</span>
        <h2>Prompt Craft &mdash; die Grundlage</h2>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Prompt Craft</span>
          <span class="level-tag level-basic">Einstieg</span>
          <p>Prompt Craft ist das, was die meisten unter &bdquo;Prompting&ldquo; verstehen: Ihr gebt dem Modell eine Anweisung und bekommt eine Antwort zur&uuml;ck. Je klarer die Anweisung, desto besser das Ergebnis. Die Grundregeln sind mittlerweile bekannt &mdash; Rolle zuweisen, Kontext mitgeben, Format festlegen &mdash; und genau deshalb ist Prompt Craft allein kein Differenzierungsmerkmal mehr. Es ist die Eintrittskarte, nicht der Vorteil.</p>

          <h3>1.1 Typisches Praxisbeispiel</h3>
          <div class="comparison">
            <div class="comparison-bad">
              <span class="comparison-label">Schwacher Prompt</span>
              <p><code>Schreib mir einen Therapiebericht.</code></p>
            </div>
            <div class="comparison-good">
              <span class="comparison-label">Besserer Prompt</span>
              <p><code>Schreib einen physiotherapeutischen Therapiebericht f&uuml;r einen Kostentr&auml;ger. Patient: m&auml;nnlich, 54 Jahre, Gonarthrose rechts, 12 Einheiten KG durchgef&uuml;hrt. Fokus auf funktionelle Verbesserungen. Sachlich, pr&auml;gnant.</code></p>
            </div>
          </div>
          <p>Der Unterschied ist offensichtlich, und genau das ist der Punkt: Prompt Craft allein bringt euch vom unbrauchbaren zum brauchbaren Ergebnis, aber nicht weiter. F&uuml;r wirklich zuverl&auml;ssige Resultate braucht ihr die n&auml;chsten drei Disziplinen.</p>
          <p class="use-case">Kernlektion: Prompt Craft ist notwendig, aber nicht hinreichend. Es ist das Fundament, auf dem alles Weitere aufbaut.</p>
        </div>


        <span class="section-label">Disziplin 2</span>
        <h2>Context Engineering &mdash; der eigentliche Hebel</h2>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Context Engineering</span>
          <span class="level-tag level-advanced">Fortgeschritten</span>
          <p>Context Engineering (Kontext-Gestaltung) verschiebt den Fokus von dem, was ihr tippt, zu dem, was das Modell insgesamt sieht. Euer Prompt macht einen verschwindend geringen Anteil des Inputs aus &mdash; der Rest besteht aus Systemanweisungen, hochgeladenen Dokumenten, fr&uuml;heren Nachrichten und Metadaten. Wer diesen umgebenden Kontext bewusst gestaltet, bekommt Ergebnisse, die mit keinem noch so ausgefeilten Einzeiler-Prompt erreichbar w&auml;ren.</p>

          <h3>2.1 Was Kontext in der Praxis bedeutet</h3>
          <p>In eurem Berufsalltag habt ihr massenhaft Kontext, den das Modell nicht von allein kennt: die Patientenakte, den aktuellen Befund, den Therapieverlauf der letzten Wochen, die Verordnung des Arztes, die Vorgaben des Kostentr&auml;gers. Wenn ihr diesen Kontext explizit mitliefert, muss das Modell weniger raten und liefert entsprechend pr&auml;zisere Ergebnisse.</p>

          <div class="mini-app">
            <div class="mini-app-title">Praxisbeispiel: Therapiebericht mit Kontext</div>
            <p>Statt nur &bdquo;Schreib einen Therapiebericht&ldquo; gebt ihr dem Modell den vollst&auml;ndigen Kontext mit:</p>
          </div>
          <pre>Erstelle einen Therapiebericht auf Basis folgender Informationen:

PATIENT: Herr M., 54 Jahre, Gonarthrose re. Knie
VERORDNUNG: 12x KG, Arzt: Dr. Weber, Erstverordnung
BEFUND (Erstbefund): Flex 95 Grad, Ext -10, VAS 7/10
  Treppensteigen stark eingeschr&auml;nkt, Gehstrecke 200m
VERLAUF: 12 Einheiten durchgef&uuml;hrt (3x/Woche)
  Flex aktuell 115 Grad, Ext 0, VAS 3/10
  Treppensteigen m&ouml;glich, Gehstrecke 1.5km
ZIEL: Folgeverordnung begr&uuml;nden

Format: Flie&szlig;text, max. 250 W&ouml;rter, sachlich.</pre>

          <p>Das Modell sieht jetzt nicht nur eure Frage, sondern den gesamten Behandlungsverlauf. Es kann konkrete Zahlen nennen, die funktionelle Verbesserung belegen und die Folgeverordnung schlüssig begr&uuml;nden &mdash; weil es alle Daten hat, nicht weil es besonders clever r&auml;t.</p>
          <p class="use-case">Kernlektion: Je mehr relevanten Kontext das Modell hat, desto weniger muss es interpolieren. Kontext schlägt Promptformulierung.</p>
        </div>


        <span class="section-label">Disziplin 3</span>
        <h2>Intent Engineering &mdash; dem Modell sagen, was es wollen soll</h2>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Intent Engineering</span>
          <span class="level-tag level-expert">Experte</span>
          <p>Kontext sagt dem Modell, was es wissen soll. Intent (Absicht) sagt ihm, was es mit diesem Wissen anfangen soll. Der Unterschied klingt subtil, ist aber in der Praxis enorm. Ein Therapiebericht kann sachlich neutral geschrieben sein oder so formuliert, dass er eine Kostenübernahme begr&uuml;ndet. Die Fakten sind identisch, die Absicht ist eine v&ouml;llig andere &mdash; und das Ergebnis entsprechend auch.</p>

          <h3>3.1 Absicht explizit formulieren</h3>
          <p>Die meisten machen den Fehler, die Absicht implizit zu lassen. Sie schreiben &bdquo;Erstelle einen Therapiebericht&ldquo; und erwarten, dass das Modell schon wissen wird, wof&uuml;r. Intent Engineering bedeutet, diese Erwartung auszusprechen, damit das Modell die richtige Perspektive einnimmt.</p>

          <div class="mini-app">
            <div class="mini-app-title">Praxisbeispiel: Intent ver&auml;ndert das Ergebnis</div>
            <p>Gleiche Patientendaten, drei verschiedene Intents &mdash; drei verschiedene Texte:</p>
          </div>
          <pre>INTENT 1 (neutral):
  &bdquo;Dokumentiere den Behandlungsverlauf sachlich.&ldquo;
  &rarr; Nüchterner Bericht, Fakten ohne Wertung

INTENT 2 (Kostentr&auml;ger &uuml;berzeugen):
  &bdquo;Formuliere so, dass die Krankenkasse
  eine Folgeverordnung genehmigt. Betone
  den bisherigen Fortschritt und das noch
  nicht erreichte Behandlungsziel.&ldquo;
  &rarr; Gleiche Fakten, aber strategisch gewichtet

INTENT 3 (Arztbrief):
  &bdquo;Schreib einen &Uuml;berweisungsbericht an den
  Orthop&auml;den. Fokus auf verbliebene Defizite
  und die Frage, ob eine bildgebende Kontrolle
  sinnvoll w&auml;re.&ldquo;
  &rarr; Gleiche Fakten, medizinische Fragestellung</pre>

          <p>In allen drei F&auml;llen sind die Patientendaten identisch. Aber je nachdem ob ihr den Bericht f&uuml;r die Kasse, f&uuml;r den Arzt oder f&uuml;r eure eigene Dokumentation braucht, muss das Modell den Text v&ouml;llig anders aufbauen, andere Aspekte betonen und eine andere Sprache verwenden. Ohne expliziten Intent trifft es diese Entscheidung zuf&auml;llig.</p>

          <div class="callout">
            <strong>Intent ist keine Manipulation.</strong> Es geht nicht darum, Fakten zu verdrehen. Es geht darum, dem Modell zu sagen, welches kommunikative Ziel der Text verfolgt &mdash; genau so, wie ihr selbst einen Bericht anders schreiben w&uuml;rdet, je nachdem ob ihn der MDK, der Zuweiser oder ein Patient liest.
          </div>
          <p class="use-case">Kernlektion: Context sagt dem Modell, was es wissen soll. Intent sagt ihm, was es mit diesem Wissen tun soll. Beides zusammen ergibt Ergebnisse, die ihr ohne Nachbearbeitung verwenden k&ouml;nnt.</p>
        </div>


        <span class="section-label">Disziplin 4</span>
        <h2>Specification Engineering &mdash; Blaupausen f&uuml;r wiederholbare Ergebnisse</h2>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">Specification Engineering</span>
          <span class="level-tag level-master">Meisterstufe</span>
          <p>Die erste Disziplin war ein einzelner Satz, die zweite waren Daten, die dritte war eine Absicht. Die vierte Disziplin ist eine vollst&auml;ndige Blaupause: ein Dokument, das so pr&auml;zise beschreibt, was das Modell tun soll, dass es den Prozess bei jedem neuen Patienten eigenst&auml;ndig und gleichbleibend durchf&uuml;hren kann &mdash; ohne dass ihr jedes Mal neu formulieren m&uuml;sst.</p>

          <h3>4.1 Von der Einzelanfrage zur Vorlage</h3>
          <p>In den Disziplinen 1 bis 3 habt ihr jedes Mal eine individuelle Anfrage gestellt. Das funktioniert, ist aber zeitaufw&auml;ndig, wenn ihr 20 Patienten pro Tag dokumentiert. Specification Engineering l&ouml;st dieses Problem, indem ihr einmal eine detaillierte Vorlage (Spezifikation) erstellt, die das Modell dann f&uuml;r jeden Fall ausf&uuml;llt.</p>

          <div class="mini-app">
            <div class="mini-app-title">Praxisbeispiel: Therapiebericht-Spezifikation</div>
            <p>Eine vollst&auml;ndige Spezifikation, die Claude f&uuml;r jeden Patienten nutzen kann:</p>
          </div>
          <pre># Spezifikation: Therapiebericht Physiotherapie

## Rolle
Du bist ein erfahrener Physiotherapeut, der
Therapieberichte f&uuml;r Kostentr&auml;ger verfasst.

## Input-Felder (vom Therapeuten auszuf&uuml;llen)
- patient_name, alter, geschlecht
- diagnose_icd (ICD-10 Code)
- verordnung (Heilmittel, Anzahl, Arzt)
- erstbefund (ROM, Schmerz VAS, Funktionsdefizite)
- aktueller_befund (ROM, Schmerz VAS, Funktionsstatus)
- behandlungszeitraum, einheiten_durchgefuehrt
- therapie_schwerpunkte (Techniken, Methoden)
- ziel_folgeverordnung (ja/nein + Begr&uuml;ndung)

## Ausgabe-Regeln
1. Flie&szlig;text, max. 300 W&ouml;rter
2. Struktur: Diagnose &rarr; Befund &rarr; Verlauf &rarr; Fazit
3. Messwerte immer Erstbefund vs. Aktuell nennen
4. Bei Folgeverordnung: Fortschritt UND verbleibendes
   Defizit explizit benennen
5. Sprache: sachlich, pr&auml;gnant, keine Superlative
6. Keine Abk&uuml;rzungen au&szlig;er: ROM, VAS, re./li.

## Qualit&auml;tskriterien
- Jede Behauptung muss durch einen Messwert
  aus den Input-Feldern belegt sein
- Keine Informationen erfinden oder erg&auml;nzen
- Bei fehlenden Input-Feldern: [FEHLEND] markieren</pre>

          <p>Mit dieser Spezifikation m&uuml;sst ihr nur noch die Patientendaten in die Input-Felder einsetzen &mdash; den Rest erledigt das Modell konsistent und nachvollziehbar. Kein Nachdenken &uuml;ber Formulierung, kein Vergessen wichtiger Punkte, kein Qualit&auml;tsgef&auml;lle zwischen dem f&uuml;nften und dem zwanzigsten Bericht des Tages.</p>

          <h3>4.2 Die f&uuml;nf Bausteine einer guten Spezifikation</h3>
          <ol>
            <li><strong>Rolle:</strong> Wer soll das Modell sein? Welche Expertise bringt es mit?</li>
            <li><strong>Input-Schema:</strong> Welche Daten bekommt es? In welchem Format?</li>
            <li><strong>Ausgabe-Regeln:</strong> Wie soll das Ergebnis aussehen? L&auml;nge, Struktur, Ton.</li>
            <li><strong>Qualit&auml;tskriterien:</strong> Was darf das Modell, was darf es nicht? Wo sind die Grenzen?</li>
            <li><strong>Beispiele:</strong> Ein oder zwei Muster-Outputs, damit das Modell das Zielbild kennt.</li>
          </ol>
          <p>Nicht jede Spezifikation braucht alle f&uuml;nf Bausteine. F&uuml;r einfache Aufgaben reichen Rolle, Input und Ausgabe-Regeln. Je komplexer und wiederholbarer die Aufgabe, desto mehr lohnt es sich, alle f&uuml;nf auszuformulieren.</p>

          <p class="use-case">Kernlektion: Specification Engineering verwandelt einmaliges Wissen in wiederverwendbare Prozesse. Ihr investiert einmal eine halbe Stunde in die Vorlage und spart danach bei jedem einzelnen Patienten Zeit.</p>
        </div>


        <!-- ================================================================ -->
        <!-- PAGE 3: UEBUNGSPLAN                                              -->
        <!-- ================================================================ -->

        <span class="section-label">Praxis</span>
        <h2>&Uuml;bungsplan: In 4 Wochen alle Disziplinen meistern</h2>
        <p>Die Disziplinen bauen aufeinander auf. Jede Woche konzentriert ihr euch auf eine Stufe und &uuml;bt sie an einer konkreten Aufgabe aus eurem Alltag. Am Ende der vier Wochen habt ihr nicht nur die Theorie verstanden, sondern eine einsatzbereite Spezifikation f&uuml;r eure h&auml;ufigste Dokumentationsaufgabe.</p>

        <div class="week-card">
          <span class="week-label">Woche 1</span>
          <span class="week-title">Prompt Craft &mdash; Grundlagen festigen</span>
          <p><strong>Ziel:</strong> Drei verschiedene Aufgaben aus eurem Alltag als klaren, strukturierten Prompt formulieren.</p>
          <ul>
            <li><strong>Tag 1-2:</strong> Therapiebericht &mdash; formuliert einen Prompt, der Diagnose, Befund und gew&uuml;nschtes Format enth&auml;lt</li>
            <li><strong>Tag 3-4:</strong> Patientenerkl&auml;rung &mdash; lasst euch einen Erkl&auml;rungstext f&uuml;r eine Diagnose generieren, den ihr Patienten mitgeben k&ouml;nnt</li>
            <li><strong>Tag 5:</strong> &Uuml;bungsanleitung &mdash; erstellt eine Heimübungsanleitung mit Wiederholungen, S&auml;tzen und Pausenzeiten</li>
          </ul>
          <p><strong>Reflexion:</strong> Wo waren die Ergebnisse gut, wo ungenau? Welche Informationen haben gefehlt?</p>
        </div>

        <div class="week-card">
          <span class="week-label">Woche 2</span>
          <span class="week-title">Context Engineering &mdash; Daten mitliefern</span>
          <p><strong>Ziel:</strong> Die gleichen drei Aufgaben aus Woche 1 wiederholen, aber diesmal mit vollst&auml;ndigem Kontext.</p>
          <ul>
            <li><strong>Tag 1-2:</strong> Therapiebericht mit Erstbefund, aktuellem Befund, Verordnungsdaten und Therapieverlauf</li>
            <li><strong>Tag 3-4:</strong> Patientenerkl&auml;rung mit konkreter Anamnese, Befundwerten und individuellen Risikofaktoren</li>
            <li><strong>Tag 5:</strong> Heimübung mit exakten Bewegungseinschr&auml;nkungen, Belastungsgrenzen und Trainingshistorie</li>
          </ul>
          <p><strong>Reflexion:</strong> Vergleicht die Ergebnisse mit Woche 1. Wo hat der zus&auml;tzliche Kontext den gr&ouml;&szlig;ten Unterschied gemacht?</p>
        </div>

        <div class="week-card">
          <span class="week-label">Woche 3</span>
          <span class="week-title">Intent Engineering &mdash; Absicht steuern</span>
          <p><strong>Ziel:</strong> Dieselben Patientendaten, aber mit drei verschiedenen Intents bearbeiten.</p>
          <ul>
            <li><strong>Tag 1-2:</strong> Therapiebericht f&uuml;r die Krankenkasse (Ziel: Folgeverordnung genehmigt bekommen)</li>
            <li><strong>Tag 3:</strong> Therapiebericht f&uuml;r den zuweisenden Arzt (Ziel: medizinische Entscheidungsgrundlage liefern)</li>
            <li><strong>Tag 4:</strong> Patientenerkl&auml;rung in einfacher Sprache (Ziel: Patient versteht seine Diagnose und wei&szlig;, was er tun kann)</li>
            <li><strong>Tag 5:</strong> Heimübung f&uuml;r einen motivierten Sportler vs. f&uuml;r einen &auml;ngstlichen Schmerzpatienten (gleiches Krankheitsbild, verschiedene Kommunikationsziele)</li>
          </ul>
          <p><strong>Reflexion:</strong> Wie ver&auml;ndert der Intent den Ton, die Struktur und die Betonung &mdash; bei identischen Fakten?</p>
        </div>

        <div class="week-card">
          <span class="week-label">Woche 4</span>
          <span class="week-title">Specification Engineering &mdash; die eigene Vorlage bauen</span>
          <p><strong>Ziel:</strong> Eine vollst&auml;ndige Spezifikation f&uuml;r eure am h&auml;ufigsten wiederkehrende Aufgabe erstellen.</p>
          <ul>
            <li><strong>Tag 1:</strong> W&auml;hlt die Aufgabe (Therapiebericht, Befundschreiben, &Uuml;bungsplan &mdash; was euch am meisten Zeit kostet)</li>
            <li><strong>Tag 2-3:</strong> Schreibt die Spezifikation mit allen f&uuml;nf Bausteinen: Rolle, Input-Schema, Ausgabe-Regeln, Qualit&auml;tskriterien, Beispiel</li>
            <li><strong>Tag 4:</strong> Testet die Spezifikation an drei verschiedenen Patienten und passt sie an</li>
            <li><strong>Tag 5:</strong> Finalisiert die Spezifikation und speichert sie als Vorlage (z.B. als <code>CLAUDE.md</code> Datei oder als gespeicherten Prompt in eurem KI-Tool)</li>
          </ul>
          <p><strong>Reflexion:</strong> Ist das Ergebnis bei Patient 1, 2 und 3 gleichbleibend gut? Falls nicht: welchen Baustein m&uuml;sst ihr nachsch&auml;rfen?</p>
        </div>


        <!-- ================================================================ -->
        <!-- PAGE 4: GOLDENE REGEL + ZUSAMMENFASSUNG                          -->
        <!-- ================================================================ -->

        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Prompt Craft bringt euch vom unbrauchbaren zum brauchbaren Ergebnis. Context Engineering bringt euch vom brauchbaren zum guten Ergebnis. Intent Engineering bringt euch vom guten zum zielgenauen Ergebnis. Und Specification Engineering sorgt daf&uuml;r, dass dieses zielgenaue Ergebnis bei jedem einzelnen Patienten reproduzierbar ist, ohne dass ihr jedes Mal bei Null anfangen m&uuml;sst.</p>
          <p style="margin-top:16px">Die meisten bleiben bei Disziplin 1 stehen. Wer bis Disziplin 4 durchzieht, hat kein KI-Werkzeug mehr &mdash; sondern einen konfigurierten Arbeitsprozess.</p>
        </div>

        <h2>Zusammenfassung: Die 4 Disziplinen auf einen Blick</h2>

        <div class="highlight-box">
          <p><strong>Disziplin 1 &mdash; Prompt Craft:</strong> Klare Anweisungen formulieren. Rolle, Kontext, Format in einem Satz. Grundvoraussetzung, kein Alleinstellungsmerkmal.</p>
          <p><strong>Disziplin 2 &mdash; Context Engineering:</strong> Dem Modell alle relevanten Daten mitgeben &mdash; Befunde, Verordnungen, Verläufe. Je mehr es wei&szlig;, desto weniger muss es raten.</p>
          <p><strong>Disziplin 3 &mdash; Intent Engineering:</strong> Dem Modell sagen, was der Text bewirken soll. Gleiche Fakten, verschiedene Ziele &mdash; grundverschiedene Ergebnisse.</p>
          <p style="margin-bottom:0"><strong>Disziplin 4 &mdash; Specification Engineering:</strong> Einmal eine vollst&auml;ndige Vorlage schreiben, die das Modell bei jedem neuen Fall selbstst&auml;ndig bef&uuml;llt. Wiederholbarkeit statt Einzelanfragen.</p>
        </div>


        <div class="lehre-section">
          <h2>F&uuml;r die Lehre: 3 &Uuml;bungsideen</h2>
          <div class="exercise">
            <strong>1. Vorher-Nachher-Vergleich</strong> <span class="time">25 Min</span>
            <p>Teilnehmende schreiben erst einen Therapiebericht mit einem einfachen Prompt (Disziplin 1), dann mit vollst&auml;ndigem Kontext und explizitem Intent (Disziplin 2+3). Beide Ergebnisse nebeneinanderlegen und diskutieren: Was hat sich ge&auml;ndert, und warum?</p>
          </div>
          <div class="exercise">
            <strong>2. Intent-Rotation</strong> <span class="time">30 Min</span>
            <p>Alle bekommen dieselben Patientendaten. Jede Gruppe bekommt einen anderen Intent (Krankenkasse, Zuweiser, Patient, Gutachter). Am Ende vergleichen: Gleiche Fakten, vier verschiedene Texte. Wo liegen die Unterschiede in Betonung, Sprache und Struktur?</p>
          </div>
          <div class="exercise">
            <strong>3. Spezifikations-Workshop</strong> <span class="time">45 Min</span>
            <p>Teams bauen gemeinsam eine Spezifikation f&uuml;r eine Aufgabe aus ihrem Berufsalltag (Therapiebericht, Heimübungsplan, Erstbefund-Dokumentation). Alle f&uuml;nf Bausteine m&uuml;ssen drin sein. Abschluss: Jedes Team testet die Spezifikation der anderen Gruppe an einem konkreten Patientenfall.</p>
          </div>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-4-disziplinen-prompting', OxGuide4DisziplinenPrompting);
