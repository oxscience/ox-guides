class OxGuide10BriefingPrompts extends HTMLElement {
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
.golden-rule strong{color:var(--white)}

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
  pre{font-size:12.8px;padding:12px 14px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>10 KI-Briefing-Prompts f&uuml;r Health Professionals</h1>
        <div class="meta">5-Seiten-Guide &middot; 10 Copy-Paste-Prompts &middot; Out Of The Box Science</div>

        <p class="intro">Medizinische Fachzeitschriften, Leitlinien-Updates, Kongress-Ank&uuml;ndigungen, Abrechnungs&auml;nderungen, neue KI-Tools &mdash; Health Professionals m&uuml;ssen sich in Dutzenden Bereichen gleichzeitig auf dem Laufenden halten. Die meisten versuchen es mit Newslettern, Fachgruppen und gelegentlichem Googeln. Dieser Guide zeigt einen anderen Weg: zehn Prompts, die ihr in eine KI eurer Wahl kopiert und sofort ein strukturiertes Briefing bekommt, zugeschnitten auf euer Fachgebiet.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1</span>
        <h2>Warum Briefings besser sind als Newsletter</h2>

        <h3>1.1 Das Problem mit passivem Informationskonsum</h3>
        <p>Newsletter kommen, wann der Absender es will, nicht wenn ihr die Information braucht. Sie behandeln Themen, die f&uuml;r eine breite Zielgruppe relevant sein sollen, nicht f&uuml;r eure konkrete Fachrichtung oder euren Praxisalltag. Und die meisten landen ungelesen im Postfach, weil zwischen zwei Patienten keine Zeit ist, einen l&auml;ngeren Text zu lesen.</p>
        <p>Ein KI-Briefing funktioniert anders: Ihr bestimmt das Thema, den Zeitraum und die Tiefe. Die KI durchsucht ihr Trainingswissen und &mdash; je nach Tool &mdash; auch aktuelle Quellen, filtert nach euren Kriterien und liefert eine kompakte Zusammenfassung. Drei Minuten statt dreissig Minuten Newsletter-Stapel.</p>

        <h3>1.2 Was ihr daf&uuml;r braucht</h3>
        <p>Jedes KI-Tool mit aktuellem Weltwissen funktioniert. Die Prompts in diesem Guide sind bewusst tool-agnostisch formuliert, damit sie &uuml;berall laufen:</p>
        <ul>
          <li><strong>Claude</strong> (claude.ai) &mdash; besonders gr&uuml;ndlich bei Zusammenfassungen und Quellenangaben</li>
          <li><strong>ChatGPT</strong> (chatgpt.com) &mdash; mit Browsing-Funktion f&uuml;r aktuelle Ergebnisse</li>
          <li><strong>Perplexity</strong> (perplexity.ai) &mdash; spezialisiert auf Recherche mit Quellenlinks</li>
          <li><strong>Google Gemini</strong> (gemini.google.com) &mdash; stark bei medizinischen Quellen</li>
        </ul>

        <div class="callout">
          <strong>Der entscheidende Unterschied:</strong> Ein Newsletter entscheidet f&uuml;r euch, was relevant ist. Ein Briefing-Prompt l&auml;sst euch selbst definieren, was ihr wissen m&uuml;sst. Das klingt nach einem kleinen Unterschied, ver&auml;ndert aber grundlegend, wie ihr mit Fachinformation umgeht &mdash; weg vom passiven Empfangen, hin zum aktiven Abrufen.
        </div>

        <h3>1.3 So nutzt ihr die Prompts</h3>
        <p>Jeder der zehn Prompts ist ein eigenst&auml;ndiges Briefing-Format, das ihr direkt kopieren und in euer bevorzugtes KI-Tool einf&uuml;gen k&ouml;nnt. Die eckigen Klammern <code>[so markiert]</code> sind Platzhalter, die ihr durch eure eigenen Angaben ersetzt. Zum Beispiel wird <code>[Fachgebiet]</code> zu <code>Orthop&auml;die</code> oder <code>P&auml;diatrie</code>, je nachdem, wo ihr arbeitet.</p>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2 &middot; Prompts 1&ndash;5</span>
        <h2>Die ersten f&uuml;nf Briefing-Prompts</h2>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">T&auml;gliches Studien-Update</span>
          <p>Neue Publikationen in eurem Fachgebiet, gefiltert nach klinischer Relevanz statt nach Impact Factor. Ideal als Morgenroutine vor dem ersten Patienten, um bei Visiten oder im kollegialen Austausch auf dem aktuellen Stand zu sein.</p>
          <pre>Erstelle ein Studien-Briefing f&uuml;r [Fachgebiet]
(z.B. Physiotherapie, Orthop&auml;die, Allgemeinmedizin).

Zeitraum: letzte 30 Tage.

Struktur f&uuml;r jede Studie:
- Titel und Autoren (Erstautor et al.)
- Journal und Erscheinungsdatum
- Kernaussage in einem Satz
- Praxisrelevanz: Was &auml;ndert das konkret
  f&uuml;r meinen Behandlungsalltag?

Fokus auf: RCTs, systematische Reviews
und Metaanalysen.
Tierversuche und In-vitro-Studien weglassen.
Maximal 5 Studien, nach Relevanz sortiert.</pre>
          <p class="use-case">Montags als Wochen-Briefing nutzen, oder t&auml;glich mit dem Zeitraum &quot;letzte 24 Stunden&quot; f&uuml;r das aktuelle Tages-Update.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Leitlinien-&Auml;nderungen</span>
          <p>Leitlinien-Updates kommen oft leise und haben grosse Auswirkungen auf die Behandlung. Dieser Prompt pr&uuml;ft systematisch, ob sich in euren relevanten Leitlinien etwas ge&auml;ndert hat, damit ihr nicht erst durch eine R&uuml;ckfrage des MDK davon erfahrt.</p>
          <pre>Pr&uuml;fe, ob es in den letzten 30 Tagen
Aktualisierungen oder Neuver&ouml;ffentlichungen
bei den folgenden Leitlinien gab:

Quellen: AWMF, DEGAM, DGIM, [weitere
Fachgesellschaft eintragen]

Fachgebiet: [Fachgebiet]

F&uuml;r jede &Auml;nderung:
- Leitlinien-Titel und AWMF-Registernummer
- Was hat sich ge&auml;ndert (vorher vs. nachher)
- Klinische Konsequenz: Was muss ich ab sofort
  anders machen?
- Link zur Quelle

Falls keine &Auml;nderungen: Das explizit sagen,
nicht einfach nichts liefern.</pre>
          <p class="use-case">Alle zwei Wochen durchlaufen lassen, besonders vor QM-Audits oder wenn Kostentr&auml;ger neue Nachweise verlangen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Fortbildungs-Radar</span>
          <p>CME-Punkte sammeln, Kongresstermine im Blick behalten, interessante Webinare nicht verpassen &mdash; die Fortbildungslandschaft ist un&uuml;bersichtlich und &auml;ndert sich st&auml;ndig. Dieser Prompt erstellt eine kuratierte &Uuml;bersicht, gefiltert nach euren Interessen und eurem Zeitbudget.</p>
          <pre>Erstelle eine Fortbildungs-&Uuml;bersicht f&uuml;r
[Fachgebiet] im Zeitraum [Monat/Quartal].

Kategorien:
1. Online-Fortbildungen mit CME-Punkten
2. Kongresse und Fachtagungen (DACH-Raum)
3. Kostenlose Webinare von Fachgesellschaften
4. Neue E-Learning-Angebote

Pro Eintrag:
- Name, Veranstalter, Datum
- CME-Punkte (falls vorhanden)
- Kosten oder &quot;kostenlos&quot;
- Kurzbewertung: Lohnt sich das, und warum?
- Anmeldelink falls verf&uuml;gbar

Sortierung: Zuerst kostenlose Angebote mit
CME-Punkten, dann kostenpflichtige nach
Preis-Leistung.</pre>
          <p class="use-case">Quartalsweise einsetzen, um die Fortbildungsplanung f&uuml;r das n&auml;chste Vierteljahr vorzubereiten. Auch hilfreich f&uuml;r Praxisinhaberinnen, die Fortbildungen f&uuml;r ihr Team planen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">Praxis-Management-News</span>
          <p>Abrechnungsziffern, KV-Rundschreiben, Digitalisierungsvorschriften, ePA-Fristen &mdash; der administrative Rahmen &auml;ndert sich laufend, und die Informationen sind &uuml;ber Dutzende Quellen verstreut. Dieser Prompt b&uuml;ndelt alles in einem Briefing.</p>
          <pre>Fasse die wichtigsten Entwicklungen der
letzten 30 Tage im Praxis-Management f&uuml;r
[Praxistyp: z.B. Physiotherapie-Praxis,
Hausarztpraxis, Facharztpraxis] zusammen.

Themen:
- Abrechnungs&auml;nderungen (EBM, GOÄ,
  Heilmittel-Richtlinie)
- KV-Mitteilungen und Fristen
- Digitalisierung (ePA, E-Rezept,
  TI-Anschl&uuml;sse, KIM)
- Datenschutz-relevante &Auml;nderungen
- F&ouml;rderprogramme oder Zusch&uuml;sse

Pro Punkt:
- Was ist passiert (ein Satz)
- Was muss ich tun (konkreter n&auml;chster Schritt)
- Bis wann (Frist, falls vorhanden)

Priorisierung: Oben das, was sofort Handlung
erfordert. Unten das, was gut zu wissen ist.</pre>
          <p class="use-case">Ideal als monatliches Praxis-Briefing, das ihr auch an euer Praxisteam oder eure Abrechnungskraft weiterleiten k&ouml;nnt.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">5</span>
          <span class="feature-name">KI-Tools f&uuml;r die Praxis</span>
          <p>Jede Woche erscheinen neue KI-Tools, aber die wenigsten sind f&uuml;r den Praxisalltag in der Gesundheitsbranche tats&auml;chlich relevant. Dieser Prompt filtert den Markt und zeigt nur, was f&uuml;r eure Arbeit konkret n&uuml;tzlich sein k&ouml;nnte.</p>
          <pre>Welche neuen KI-Tools oder Updates
bestehender Tools aus den letzten 30 Tagen
sind f&uuml;r [Praxistyp] relevant?

Kategorien:
- Dokumentation und Befundung
- Patientenkommunikation
- Terminplanung und Praxisorganisation
- Recherche und Weiterbildung
- Abrechnung und Verwaltung

Pro Tool:
- Name und Kurzbeschreibung (ein Satz)
- Was es konkret im Praxisalltag erspart
- Kosten (kostenlos/Preis pro Monat)
- DSGVO-Konformit&auml;t: Serverstandort,
  Auftragsverarbeitung, Zertifizierungen
- Ehrliche Einsch&auml;tzung: Ausgereift oder
  noch fr&uuml;hes Stadium?

Keine Auflistung von 30 Tools. Maximal 5,
die wirklich praxistauglich sind.</pre>
          <p class="use-case">Alle zwei Wochen durchlaufen, um neue Tools fr&uuml;h zu erkennen, bevor sie in jedem zweiten Newsletter auftauchen.</p>
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3 &middot; Prompts 6&ndash;10</span>
        <h2>Die zweiten f&uuml;nf Briefing-Prompts</h2>

        <div class="feature-card">
          <span class="feature-number">6</span>
          <span class="feature-name">Patientenkommunikation</span>
          <p>Patienten kommen mit Fragen zu Themen, die gerade in den Medien sind &mdash; Intervallfasten, Kinesiotape, Nahrungserg&auml;nzungsmittel, die neueste Netflix-Doku &uuml;ber ein Gesundheitsthema. Dieser Prompt bereitet euch darauf vor, damit ihr bei der n&auml;chsten Frage nicht improvisieren m&uuml;sst.</p>
          <pre>Welche Gesundheitsthemen wurden in den
letzten 30 Tagen in deutschsprachigen Medien
besonders h&auml;ufig diskutiert?

Fokus auf Themen, zu denen Patienten in
einer [Praxistyp] wahrscheinlich Fragen
stellen werden.

Pro Thema:
- Worum geht es (ein Satz)
- Was die Medien behaupten
- Was die Evidenz tats&auml;chlich sagt
- Formulierungsvorschlag: Wie erkl&auml;re ich
  das einem Patienten in 2&ndash;3 S&auml;tzen
  verst&auml;ndlich und korrekt?

Maximal 5 Themen, nach Wahrscheinlichkeit
der Patientenfrage sortiert.</pre>
          <p class="use-case">Vor der Sprechstunde kurz &uuml;berfliegen, damit ihr bei Patientenfragen zu aktuellen Medienthemen vorbereitet seid, statt auf dem Flur nachgoogeln zu m&uuml;ssen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">7</span>
          <span class="feature-name">Evidenz-Check</span>
          <p>In der Therapie halten sich manche Behandlungsans&auml;tze trotz schwacher Evidenzlage hartn&auml;ckig, w&auml;hrend gut belegte Methoden kaum angewendet werden. Dieser Prompt liefert einen regelm&auml;ssigen Realit&auml;tscheck f&uuml;r euer Fachgebiet.</p>
          <pre>Nenne 3 verbreitete Behandlungsmethoden
oder klinische Annahmen in [Fachgebiet],
die in den letzten 12 Monaten durch neue
Studien in Frage gestellt oder best&auml;tigt
wurden.

Pro Eintrag:
- Die Annahme oder Methode (z.B.
  &quot;Ultraschall bei Tendinopathie&quot;)
- Bisherige Praxis: Was wird gemacht und
  warum
- Neue Evidenz: Welche Studie sagt was
  (Autor, Journal, Jahr, Kernaussage)
- Konsequenz: &Auml;ndern, beibehalten oder
  abwarten?

Ehrlich sein: Wenn die Evidenz unklar ist,
das auch so sagen. Keine falschen
Eindeutigkeiten.</pre>
          <p class="use-case">Monatlich einsetzen, um die eigene Behandlungsroutine kritisch zu hinterfragen. Auch geeignet als Diskussionsgrundlage im Team-Meeting oder Journal Club.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">8</span>
          <span class="feature-name">Konkurrenz-Monitoring</span>
          <p>Was machen andere Praxen in der Region digital, und welche Ideen lassen sich f&uuml;r die eigene Praxis adaptieren? Dieser Prompt hilft, den Markt zu beobachten, ohne st&auml;ndig Wettbewerber-Websites durchforsten zu m&uuml;ssen.</p>
          <pre>Welche digitalen Trends setzen [Praxistyp]
im DACH-Raum aktuell um?

Bereiche:
- Online-Terminbuchung und
  Patientenportale
- Social-Media-Pr&auml;senz und
  Content-Marketing
- Telemedizin und Video-Sprechstunde
- Digitale Therapiebegleitung (Apps,
  &Uuml;bungs-Plattformen)
- Bewertungsmanagement (Google, Jameda)

Pro Trend:
- Was wird gemacht (konkretes Beispiel)
- Welche Tools oder Anbieter werden
  daf&uuml;r genutzt
- Aufwand: Was kostet es an Zeit und Geld
- Lohnt sich das f&uuml;r eine Praxis mit
  [Teamgr&ouml;sse] Mitarbeitern?

Keine Allgemeinpl&auml;tze. Konkrete Beispiele
aus dem deutschsprachigen Markt.</pre>
          <p class="use-case">Quartalsweise nutzen, um die eigene digitale Strategie mit dem Markt abzugleichen und zu entscheiden, welche Investitionen sich lohnen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">9</span>
          <span class="feature-name">Datenschutz-Alerts</span>
          <p>Datenschutz im Gesundheitswesen ist kein optionales Thema &mdash; Verst&ouml;sse k&ouml;nnen existenzbedrohende Bussgelder nach sich ziehen, und die Regelungen &auml;ndern sich fortlaufend. Dieser Prompt h&auml;lt euch auf dem Laufenden, ohne dass ihr juristische Fachliteratur w&auml;lzen m&uuml;sst.</p>
          <pre>Erstelle ein Datenschutz-Briefing f&uuml;r
[Praxistyp] mit folgenden Schwerpunkten:

1. DSGVO-relevante &Auml;nderungen und
   Urteile der letzten 30 Tage, die
   Gesundheitsdienstleister betreffen
2. Gemeldete Datenpannen im
   Gesundheitswesen (DACH-Raum)
3. Neue Anforderungen an
   Auftragsverarbeitungsvertr&auml;ge
   f&uuml;r Cloud-Dienste oder KI-Tools
4. Updates bei ePA, KIM oder
   TI-Infrastruktur

Pro Punkt:
- Was ist passiert
- Betrifft mich das in der Praxis?
  (Ja/Nein/M&ouml;glicherweise)
- Falls ja: Was muss ich konkret tun
  und bis wann?

Verst&auml;ndlich formulieren, kein
Juristendeutsch.</pre>
          <p class="use-case">Monatlich durchlaufen und das Ergebnis im Datenschutz-Ordner der Praxis ablegen. Bei Pr&uuml;fungen durch die Aufsichtsbeh&ouml;rde zeigt es, dass ihr euch aktiv mit dem Thema besch&auml;ftigt.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">10</span>
          <span class="feature-name">Podcast- und Video-Zusammenfassungen</span>
          <p>Fach-Podcasts und Kongress-Vortr&auml;ge auf YouTube sind wertvolle Wissensquellen, aber eine Stunde Podcast h&ouml;ren oder einen 45-min&uuml;tigen Vortrag schauen passt selten in den Praxisalltag. Dieser Prompt macht aus langen Audio- und Video-Inhalten kompakte Briefings.</p>
          <pre>Fasse den folgenden Fach-Podcast / Vortrag
zusammen:

[Titel oder Link hier einf&uuml;gen]

Format der Zusammenfassung:
- Kernthese in einem Satz
- Die 3&ndash;5 wichtigsten Aussagen
  (jeweils ein Satz)
- Genannte Studien oder Quellen
  (mit Autoren und Jahr)
- Kontroverse Punkte: Wo widerspricht
  der Sprecher dem aktuellen Konsens?
- Praxis-Take-Away: Was kann ich morgen
  in meiner Behandlung anders machen?

L&auml;nge: Maximal eine halbe Seite.
Lieber zu kurz als zu lang.</pre>
          <p class="use-case">Nutzt diesen Prompt, um eine Warteschlange von Podcasts und Vortr&auml;gen abzuarbeiten, die ihr seit Wochen vor euch herschiebt. In f&uuml;nf Minuten wisst ihr, ob sich das Anh&ouml;ren des vollen Beitrags lohnt.</p>
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4</span>
        <h2>Der &quot;letzte 30 Tage&quot;-Trick</h2>

        <h3>4.1 Warum der Zeitraum alles ver&auml;ndert</h3>
        <p>Die meisten Menschen stellen KI-Tools offene Fragen wie &quot;Was gibt es Neues in der Physiotherapie?&quot; und bekommen darauf allgemeine Antworten, die genauso gut aus einem Lehrbuch stammen k&ouml;nnten. Der entscheidende Unterschied ist der Zeitfilter: Sobald ihr den Prompt um &quot;in den letzten 30 Tagen&quot; oder &quot;seit dem [Datum]&quot; erg&auml;nzt, zwingt ihr die KI dazu, nach aktuellen Entwicklungen zu suchen statt gespeichertes Allgemeinwissen wiederzugeben.</p>

        <div class="callout">
          <strong>Der Trick im Detail:</strong> Formulierungen wie &quot;letzte 30 Tage&quot;, &quot;letzte 24 Stunden&quot; oder &quot;seit dem 1. M&auml;rz 2026&quot; funktionieren als Filter, der allgemeine Antworten herausfiltert und die KI zu konkreten, aktuellen Ergebnissen zwingt. Je enger der Zeitraum, desto spezifischer die Antworten. Tagesaktuell funktioniert am besten mit Tools, die aktiv das Web durchsuchen (Perplexity, ChatGPT mit Browsing, Gemini).
        </div>

        <h3>4.2 Zeitr&auml;ume nach Anwendungsfall</h3>
        <p>Nicht jedes Briefing braucht denselben Rhythmus. Die folgende &Uuml;bersicht zeigt, welcher Zeitraum f&uuml;r welchen Prompt am sinnvollsten ist:</p>

        <div class="mini-app">
          <div class="mini-app-title">T&auml;glich (letzte 24 Stunden)</div>
          <p>Studien-Update, wenn ihr in einem schnelllebigen Forschungsfeld arbeitet und nichts verpassen wollt.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">W&ouml;chentlich (letzte 7 Tage)</div>
          <p>KI-Tools f&uuml;r die Praxis, Patientenkommunikation &mdash; hier reicht ein w&ouml;chentlicher Rhythmus, weil sich der Markt und die Medienlandschaft nicht t&auml;glich grundlegend &auml;ndern.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Monatlich (letzte 30 Tage)</div>
          <p>Leitlinien-&Auml;nderungen, Praxis-Management-News, Datenschutz-Alerts, Evidenz-Check &mdash; diese Themen ver&auml;ndern sich in gr&ouml;sseren Zyklen, und ein monatliches Briefing gibt genug &Uuml;berblick, ohne euch mit Informationen zu &uuml;berfluten.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Quartalsweise (letzte 90 Tage)</div>
          <p>Fortbildungs-Radar und Konkurrenz-Monitoring lohnen sich als Quartals-Routine, weil Kongressprogramme und digitale Trends sich in l&auml;ngeren Zyklen entwickeln.</p>
        </div>

        <h3>4.3 Prompts an euer Fachgebiet anpassen</h3>
        <p>Alle zehn Prompts sind als Vorlagen gedacht, nicht als starre Formulare. Die St&auml;rke liegt darin, sie auf euren konkreten Kontext zuzuschneiden. Ein Sportphysiotherapeut wird andere Leitlinien verfolgen als eine Haus&auml;rztin, und eine Kinder- und Jugendpsychotherapeutin hat andere Fortbildungsbedarfe als ein Orthop&auml;de.</p>
        <p>Tauscht die Platzhalter nicht nur mechanisch aus, sondern erg&auml;nzt auch spezifische Quellen, Fachgesellschaften oder Schwerpunktthemen, die f&uuml;r eure Arbeit zentral sind. Je pr&auml;ziser die Eingabe, desto brauchbarer das Briefing.</p>


        <!-- ==================== SEITE 5 ==================== -->

        <span class="section-label">Seite 5</span>
        <h2>Briefings auf Autopilot</h2>

        <h3>5.1 Vom manuellen Prompt zur Routine</h3>
        <p>Einzelne Prompts einf&uuml;gen und ausf&uuml;hren funktioniert, wird aber auf Dauer m&uuml;hsam. Der n&auml;chste Schritt ist, die Briefings in eine feste Routine zu verwandeln, die ohne aktives Zutun l&auml;uft. Daf&uuml;r gibt es je nach Tool verschiedene Ans&auml;tze:</p>

        <div class="mini-app">
          <div class="mini-app-title">Custom GPTs oder Claude Projects</div>
          <p>Speichert eure Lieblings-Prompts als wiederverwendbare Vorlagen. In ChatGPT geht das &uuml;ber Custom GPTs, in Claude &uuml;ber Projects mit vordefinierten Instruktionen. Einmal einrichten, dann nur noch &ouml;ffnen und &quot;Briefing f&uuml;r diese Woche&quot; sagen.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Automatisierung mit n8n oder Make</div>
          <p>Wer es vollst&auml;ndig automatisieren will, kann Tools wie n8n oder Make nutzen, um Prompts zeitgesteuert an eine KI-API zu schicken und das Ergebnis per E-Mail zu erhalten. Das erfordert ein wenig technisches Setup, l&auml;uft danach aber ohne jeden manuellen Eingriff &mdash; das Briefing liegt morgens um 7 Uhr im Postfach.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Claude Code mit Scheduled Tasks</div>
          <p>Wer Claude Code nutzt, kann Briefings als Scheduled Tasks anlegen, die automatisch in einem festen Rhythmus laufen. Der Prompt wird einmal definiert, der Zeitplan festgelegt, und Claude liefert das Briefing zur eingestellten Zeit als Datei oder Nachricht.</p>
        </div>

        <h3>5.2 Briefings im Team teilen</h3>
        <p>Einzelne Briefings sind n&uuml;tzlich, aber der gr&ouml;sste Hebel entsteht, wenn das gesamte Praxisteam Zugang zu den Ergebnissen hat. Ein monatliches Praxis-Management-Briefing, das in einem geteilten Ordner oder einem kurzen Team-Chat landet, spart nicht nur einer Person Zeit, sondern sorgt daf&uuml;r, dass alle auf demselben Stand sind.</p>
        <p>Praktisch bedeutet das: Das Briefing als PDF speichern und im Praxis-Netzwerk ablegen, per E-Mail an das Team schicken, oder die Kernpunkte in die n&auml;chste Teambesprechung mitnehmen. Es muss nicht kompliziert sein &mdash; wichtig ist, dass die Information nicht in einem einzelnen Chatfenster versauert.</p>

        <h3>5.3 Deep Dives bei Bedarf</h3>
        <p>Ein Briefing ist ein Startpunkt, kein Endpunkt. Wenn ein Punkt in der Zusammenfassung besonders relevant klingt, fragt direkt nach: &quot;Erkl&auml;r mir Punkt 3 ausf&uuml;hrlicher&quot; oder &quot;Welche konkreten Studien stecken hinter der Aussage zu [Thema]?&quot; Die KI hat den Kontext aus dem Briefing noch im Gespr&auml;ch und kann gezielt vertiefen, ohne dass ihr den gesamten Prompt wiederholen m&uuml;sst.</p>


        <!-- Goldene Regel -->
        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Information, die ihr nicht aktiv abruft, kommt entweder zu sp&auml;t oder gar nicht. Newsletter, Kongressberichte und Fachgruppen-Posts erreichen euch nach dem Zufallsprinzip &mdash; mal passend, meistens nicht. Briefing-Prompts drehen das Verh&auml;ltnis um: Ihr entscheidet, was ihr wissen m&uuml;sst, und holt es genau dann ab, wenn ihr es braucht.</p>
          <p>Startet mit einem einzigen Prompt, der euch am meisten bringt, und f&uuml;hrt ihn eine Woche lang konsequent aus. Wenn sich herausstellt, dass er euch tats&auml;chlich Zeit spart und bessere Informationen liefert als euer bisheriger Weg, f&uuml;gt den n&auml;chsten hinzu. Nicht alle zehn auf einmal &mdash; das &uuml;berlebt keine Praxiswoche.</p>
        </div>

        <h2>Checkliste: Euer Briefing-System aufsetzen</h2>
        <ul class="checklist">
          <li>Einen KI-Tool-Account einrichten (Claude, ChatGPT, Perplexity oder Gemini)</li>
          <li>Den Prompt ausw&auml;hlen, der euch am meisten bringt</li>
          <li>Platzhalter durch euer Fachgebiet und eure Schwerpunkte ersetzen</li>
          <li>Den Prompt einmal testen und pr&uuml;fen, ob das Ergebnis praxistauglich ist</li>
          <li>Einen festen Wochentag und eine Uhrzeit f&uuml;r das Briefing festlegen</li>
          <li>Nach zwei Wochen: Zweiten Prompt hinzunehmen, falls der erste funktioniert</li>
          <li>Ergebnisse im Team teilen, nicht nur f&uuml;r euch alleine behalten</li>
        </ul>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; KI-Tools f&uuml;r Health Professionals.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-10-briefing-prompts', OxGuide10BriefingPrompts);
