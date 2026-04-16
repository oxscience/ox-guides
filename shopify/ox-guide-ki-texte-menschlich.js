class OxGuideKiTexteMenschlich extends HTMLElement {
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
  font-family:var(--mono);color:var(--primary-light);
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

.before-after{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0}
.ba-box{border-radius:8px;padding:16px 20px;font-size:14.4px;line-height:1.7}
.ba-box p{margin-bottom:8px;font-size:14.4px}
.ba-box p:last-child{margin-bottom:0}
.ba-before{background:var(--red-bg);border:1px solid #5c1a1a}
.ba-before .ba-label{color:var(--red-text);font-weight:600;font-size:12.8px;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:8px}
.ba-after{background:var(--green-bg);border:1px solid #065f46}
.ba-after .ba-label{color:var(--green-text);font-weight:600;font-size:12.8px;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:8px}

.highlight-box{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.highlight-box strong{color:var(--white)}

.checklist{list-style:none;margin:16px 0 8px;padding:0}
.checklist li{position:relative;padding-left:28px;margin-bottom:9.6px;font-size:15.2px}
.checklist li::before{content:"";position:absolute;left:0;top:4.8px;width:17.6px;height:17.6px;border:1.5px solid var(--primary);border-radius:3px;background:var(--surface-alt)}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
  border:1px solid var(--primary);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}

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
  .before-after{grid-template-columns:1fr}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>KI-Texte menschlich machen</h1>
        <div class="meta">5-Seiten-Guide &middot; 24 Muster &middot; Out Of The Box Science</div>

        <p class="intro">Health Professionals schreiben jeden Tag: Arztbriefe, Patienteninformationen, Therapieberichte, Fortbildungsantr&auml;ge, Texte f&uuml;r die Praxis-Website. Viele lassen sich dabei von KI helfen, und das ist auch sinnvoll. Aber KI-generierte Texte haben ein erkennbares Muster, das bei Kolleginnen, Kostentr&auml;gern und Patienten zunehmend auff&auml;llt. Dieser Guide zeigt euch die 24 h&auml;ufigsten KI-Muster und wie ihr sie in wenigen Minuten entfernt.</p>

        <div class="callout">
          <strong>Warum das wichtig ist:</strong> Wikipedia hat seit 2023 &uuml;ber tausend F&auml;lle von KI-generiertem Text dokumentiert und daraus einen systematischen Katalog erstellt. Die Muster, die Wikipedia-Editoren identifiziert haben, tauchen in Arztbriefen, Praxis-Websites und Fortbildungsantr&auml;gen genauso auf wie in Enzyklop&auml;die-Artikeln. Wer diese Muster kennt, kann sie gezielt vermeiden.
        </div>


        <!-- ABSCHNITT 1: Inhaltsmuster -->
        <span class="section-label">Gruppe 1 &middot; Inhaltsmuster</span>
        <h2>1. Was der Text behauptet</h2>
        <p>Die ersten sechs Muster betreffen den Inhalt selbst: KI-Texte bl&auml;hen die Bedeutung auf, streuen vage Quellenverweise ein und enden in Floskeln, die nichts Konkretes sagen.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Bedeutungsaufbl&auml;hung</span>
          <p>KI macht alles wichtiger als es ist. Jede Behandlung wird zum Meilenstein, jede Methode zur entscheidenden S&auml;ule der modernen Therapie.</p>
          <p><strong>Typische Signalw&ouml;rter:</strong> <code>entscheidende Rolle</code>, <code>von zentraler Bedeutung</code>, <code>ma&szlig;geblich beigetragen</code>, <code>wegweisend</code>, <code>Schl&uuml;sselrolle</code>, <code>Grundpfeiler</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Die manuelle Therapie spielt eine <em>entscheidende Rolle</em> in der modernen Rehabilitation und stellt einen <em>Grundpfeiler</em> der evidenzbasierten Physiotherapie dar, der <em>ma&szlig;geblich</em> zur Verbesserung der Patientenversorgung <em>beitr&auml;gt</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Manuelle Therapie ist eine von mehreren Behandlungsoptionen in der Physiotherapie. Die Evidenzlage f&uuml;r bestimmte Griffe ist unterschiedlich, bei chronischen R&uuml;ckenschmerzen zeigen randomisierte Studien moderate Effekte.</p>
            </div>
          </div>
          <p class="use-case">Besonders problematisch in Fortbildungsantr&auml;gen, wo &Uuml;bertreibung als mangelnde Fachkenntnis gelesen werden kann.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Prominenz-Dropping</span>
          <p>KI erw&auml;hnt Fachzeitschriften und Autorit&auml;ten, ohne konkret zu werden. Der Name soll beeindrucken, nicht informieren.</p>
          <p><strong>Typische Muster:</strong> <code>wie zahlreiche Studien belegen</code>, <code>renommierte Fachzeitschriften</code>, <code>namhafte Experten</code>, <code>f&uuml;hrende Institutionen</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Die Wirksamkeit der Faszientherapie wurde in <em>zahlreichen renommierten Fachzeitschriften</em> best&auml;tigt und von <em>f&uuml;hrenden Experten</em> der Sportmedizin hervorgehoben.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Eine Metaanalyse von Wilke et al. (2020) im British Journal of Sports Medicine fand moderate Effekte der Faszientherapie auf die Beweglichkeit, aber keine signifikante Schmerzreduktion gegen&uuml;ber Placebo.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Vage Quellenverweise</span>
          <p>Statt konkreter Belege liefert KI nebul&ouml;se Verweise auf anonyme Autorit&auml;ten, die niemand &uuml;berpr&uuml;fen kann.</p>
          <p><strong>Typische Muster:</strong> <code>Experten zufolge</code>, <code>Studien zeigen</code>, <code>laut aktueller Forschung</code>, <code>Beobachter weisen darauf hin</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p><em>Aktuelle Forschungsergebnisse deuten darauf hin</em>, dass fr&uuml;hzeitige Mobilisation nach H&uuml;ft-TEP die Genesungszeit verk&uuml;rzt. <em>Experten empfehlen</em> daher eine rasche Aktivierung.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Die S3-Leitlinie Koxarthrose (AWMF, 2024) empfiehlt Mobilisation am ersten postoperativen Tag. In einer prospektiven Studie an der Charit&eacute; (n=312) verk&uuml;rzte das die station&auml;re Aufenthaltsdauer um durchschnittlich 1,8 Tage.</p>
            </div>
          </div>
          <p class="use-case">In der medizinischen Kommunikation besonders heikel: Vage Quellenangaben untergraben die Glaubw&uuml;rdigkeit gegen&uuml;ber Kostentr&auml;gern und im kollegialen Austausch.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">Werbesprache</span>
          <p>KI schreibt &uuml;ber Praxen und Behandlungen, als w&auml;re es eine Hotelbrosch&uuml;re. Gerade bei Praxis-Website-Texten kippt der Ton schnell in Richtung Werbeversprechen.</p>
          <p><strong>Typische Signalw&ouml;rter:</strong> <code>ganzheitlich</code>, <code>einzigartig</code>, <code>hochmodern</code>, <code>Wohlbefinden</code>, <code>in guten H&auml;nden</code>, <code>individuell auf Sie zugeschnitten</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>In unserer <em>hochmodernen</em> Praxis erwartet Sie ein <em>ganzheitliches</em> Behandlungskonzept, das <em>individuell auf Ihre Bed&uuml;rfnisse zugeschnitten</em> ist. Ihr <em>Wohlbefinden</em> liegt uns am Herzen.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Wir behandeln orthop&auml;dische und neurologische Patienten. Die Praxis hat einen Trainingsraum mit Ger&auml;ten, einen Behandlungsraum f&uuml;r manuelle Therapie und einen ruhigen Raum f&uuml;r Entspannungsverfahren. Termine gibt es online oder telefonisch.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">5</span>
          <span class="feature-name">Oberfl&auml;chliche -ung/-end-Analysen</span>
          <p>KI h&auml;ngt Partizipialphrasen an S&auml;tze, die nichts Neues sagen, sondern nur den Anschein von Tiefe erzeugen.</p>
          <p><strong>Typische Muster:</strong> <code>was die Bedeutung unterstreicht</code>, <code>was die Notwendigkeit verdeutlicht</code>, <code>einen wichtigen Beitrag leistend</code>, <code>die Versorgungsqualit&auml;t sicherstellend</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Das Schmerzmanagement umfasst medikament&ouml;se und nicht-medikament&ouml;se Ans&auml;tze, <em>was die Komplexit&auml;t der Thematik unterstreicht</em> und <em>die Notwendigkeit einer interdisziplin&auml;ren Zusammenarbeit verdeutlicht</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Das Schmerzmanagement kombiniert Medikamente mit Physiotherapie und psychologischer Begleitung. Bei Frau M. hat die Kombination aus Ibuprofen 400 und progressiver Muskelentspannung die VAS-Werte von 7 auf 3 gesenkt.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">6</span>
          <span class="feature-name">Formelhafte Zukunftsaussichten</span>
          <p>KI beendet Abschnitte mit nichtssagenden Ausblicken, die optimistisch klingen, aber keine konkreten n&auml;chsten Schritte benennen.</p>
          <p><strong>Typische Muster:</strong> <code>trotz dieser Herausforderungen</code>, <code>die Zukunft verspricht</code>, <code>mit weiteren Entwicklungen ist zu rechnen</code>, <code>bleibt abzuwarten</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p><em>Trotz bestehender Herausforderungen</em> in der ambulanten Versorgung <em>bietet die Telemedizin vielversprechende Perspektiven</em>. Mit fortschreitender Digitalisierung <em>ist eine stetige Verbesserung</em> der Patientenversorgung <em>zu erwarten</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>In unserer Praxis nutzen wir Videosprechstunden seit 2023 f&uuml;r Nachkontrollen nach Knie-OPs. Die Abbrecherquote in der Reha sank von 18% auf 9%, weil Patienten den Weg in die Praxis sparen.</p>
            </div>
          </div>
        </div>


        <!-- ABSCHNITT 2: Sprachmuster -->
        <span class="section-label">Gruppe 2 &middot; Sprachmuster</span>
        <h2>2. Wie der Text formuliert</h2>
        <p>Die n&auml;chsten sechs Muster betreffen die Sprache selbst: bestimmte W&ouml;rter, die KI-Modelle statistisch bevorzugen, grammatische Ausweichman&ouml;ver und Strukturticks, die sofort auffallen, wenn man wei&szlig;, worauf man achten muss.</p>

        <div class="feature-card">
          <span class="feature-number">7</span>
          <span class="feature-name">KI-Lieblingsvokabular</span>
          <p>Bestimmte W&ouml;rter kommen in KI-Texten deutlich h&auml;ufiger vor als in menschlich geschriebenem Deutsch. Sie sind einzeln unauff&auml;llig, in Kombination aber ein zuverl&auml;ssiger Indikator.</p>

          <div class="mini-app">
            <div class="mini-app-title">H&auml;ufigste KI-Signalw&ouml;rter im deutschen Gesundheitsbereich</div>
            <p><code>dar&uuml;ber hinaus</code> &middot; <code>ganzheitlich</code> &middot; <code>umfassend</code> &middot; <code>ma&szlig;geblich</code> &middot; <code>nachhaltig</code> (au&szlig;erhalb von &Ouml;kologie) &middot; <code>vielf&auml;ltig</code> &middot; <code>fundiert</code> &middot; <code>zunehmend</code> &middot; <code>entscheidend</code> &middot; <code>es sei darauf hingewiesen</code> &middot; <code>im Zuge</code> &middot; <code>im Rahmen von</code> &middot; <code>Zusammenspiel</code></p>
            <p>Und auf Englisch: <code>Additionally</code> &middot; <code>crucial</code> &middot; <code>delve</code> &middot; <code>landscape</code> (abstrakt) &middot; <code>tapestry</code> &middot; <code>testament</code> &middot; <code>underscore</code> &middot; <code>foster</code> &middot; <code>enhance</code></p>
          </div>

          <p class="use-case">Faustregel: Wenn drei oder mehr dieser W&ouml;rter in einem Absatz stehen, ist der Absatz mit hoher Wahrscheinlichkeit KI-generiert.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">8</span>
          <span class="feature-name">Kopula-Vermeidung</span>
          <p>KI benutzt selten einfache Formulierungen mit &quot;ist&quot; oder &quot;sind&quot; und greift stattdessen zu umst&auml;ndlichen Ersatzkonstruktionen, die den Text aufbl&auml;hen.</p>
          <p><strong>Typische Muster:</strong> <code>dient als</code>, <code>fungiert als</code>, <code>stellt ... dar</code>, <code>zeichnet sich aus durch</code>, <code>bietet</code> (statt &quot;hat&quot;)</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Die Ultraschalltherapie <em>dient als</em> wertvolle Erg&auml;nzung im therapeutischen Arsenal und <em>stellt eine bew&auml;hrte Methode dar</em>, die sich durch ihre Vielseitigkeit <em>auszeichnet</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Ultraschalltherapie ist eine erg&auml;nzende Behandlung. Sie hat wenige Kontraindikationen und l&auml;sst sich gut mit manueller Therapie kombinieren.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">9</span>
          <span class="feature-name">Synonym-Karussell</span>
          <p>KI vermeidet Wortwiederholungen so aggressiv, dass sie f&uuml;r dieselbe Sache in jedem Satz ein anderes Wort benutzt. Das liest sich nicht elegant, sondern verwirrend.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Der <em>Patient</em> berichtet &uuml;ber Schmerzen im Knie. Der <em>Betroffene</em> wurde r&ouml;ntgenologisch untersucht. Der <em>Erkrankte</em> erh&auml;lt Physiotherapie. Der <em>Hilfesuchende</em> zeigt gute Compliance.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Der Patient berichtet &uuml;ber Knieschmerzen rechts seit zwei Wochen. R&ouml;ntgenologisch kein Frakturhinweis. Er erh&auml;lt Physiotherapie und zeigt gute Compliance.</p>
            </div>
          </div>
          <p class="use-case">In Arztbriefen besonders problematisch, weil dort Klarheit vor Stil geht. Wenn &quot;Patient&quot; das richtige Wort ist, darf es in jedem Satz stehen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">10</span>
          <span class="feature-name">Dreierregel-Zwang</span>
          <p>KI packt Informationen reflexartig in Dreiergruppen, auch wenn zwei oder vier Punkte treffender w&auml;ren. Das ist ein statistisches Artefakt, kein Stilmittel.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Die Therapie zielt darauf ab, <em>Schmerzen zu lindern, die Mobilit&auml;t zu verbessern und die Lebensqualit&auml;t zu steigern</em>. Patienten profitieren von <em>individueller Betreuung, modernsten Methoden und einem ganzheitlichen Ansatz</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Die Therapie soll die Kniebeweglichkeit wiederherstellen. Herr M. m&ouml;chte bis September wieder Treppen ohne Gel&auml;nder steigen k&ouml;nnen.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">11</span>
          <span class="feature-name">Negative Parallelismen</span>
          <p>Eine Formulierung, die in menschlichen Texten selten vorkommt, aber von KI-Modellen regelm&auml;&szlig;ig eingesetzt wird, um Nuancierung vorzut&auml;uschen.</p>
          <p><strong>Typische Muster:</strong> <code>nicht nur ... sondern auch</code>, <code>es geht nicht blo&szlig; um ... es geht um</code>, <code>mehr als nur</code></p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Physiotherapie ist <em>nicht nur</em> eine Behandlung des K&ouml;rpers, <em>sondern auch</em> eine Investition in die langfristige Gesundheit. <em>Es geht nicht blo&szlig; um</em> Schmerzlinderung, <em>es geht um</em> Lebensqualit&auml;t.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Physiotherapie hilft bei akuten Beschwerden und kann dazu beitragen, R&uuml;ckf&auml;lle zu vermeiden, wenn Patienten die &Uuml;bungen langfristig beibehalten.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">12</span>
          <span class="feature-name">Falsche Spannen</span>
          <p>KI benutzt &quot;von X bis Y&quot;-Konstruktionen, bei denen X und Y gar nicht auf derselben Skala liegen. Das klingt nach Bandbreite, sagt aber nichts aus.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Unser Angebot reicht <em>von der Akutversorgung bis zur nachhaltigen Pr&auml;vention, von der manuellen Therapie bis zum ganzheitlichen Wohlbefinden</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Wir behandeln akute Verletzungen und betreuen Patienten danach in der Nachsorge. Das Angebot umfasst manuelle Therapie, Ger&auml;tetraining und Gruppenkurse.</p>
            </div>
          </div>
        </div>


        <!-- ABSCHNITT 3: Stil- und Kommunikationsmuster -->
        <span class="section-label">Gruppe 3 &middot; Stil und Kommunikation</span>
        <h2>3. Wie der Text aussieht und klingt</h2>
        <p>Die letzten zw&ouml;lf Muster betreffen Formatierung, Tonfall und Artefakte, die entstehen, wenn Chatbot-Ausgaben ungefiltert in Dokumente &uuml;bernommen werden.</p>

        <div class="feature-card">
          <span class="feature-number">13</span>
          <span class="feature-name">Gedankenstrich-Inflation</span>
          <p>KI nutzt Gedankenstriche deutlich h&auml;ufiger als menschliche Autoren. In professionellen medizinischen Texten sind Kommas und Punkte fast immer die bessere Wahl.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Die Befunde zeigen eine Verbesserung &mdash; besonders im Bereich der Mobilit&auml;t. Die Patientin &mdash; eine 67-j&auml;hrige Lehrerin &mdash; zeigt gute Compliance &mdash; auch bei den Heim&uuml;bungen.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Die Befunde zeigen eine Verbesserung, besonders bei der Mobilit&auml;t. Die 67-j&auml;hrige Patientin (Lehrerin) macht die Heim&uuml;bungen zuverl&auml;ssig.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">14</span>
          <span class="feature-name">Fettdruck-Verschmutzung</span>
          <p>KI macht mechanisch Begriffe fett, als w&uuml;rde das beim Lesen helfen. In einem Flie&szlig;text lenkt das eher ab.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Die <strong>evidenzbasierte Physiotherapie</strong> nutzt <strong>manuelle Techniken</strong>, <strong>aktive &Uuml;bungen</strong> und <strong>Patientenedukation</strong>, um die <strong>Genesung</strong> zu f&ouml;rdern.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Evidenzbasierte Physiotherapie kombiniert manuelle Techniken, aktive &Uuml;bungen und Patientenedukation.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">15</span>
          <span class="feature-name">Listen mit Inline-&Uuml;berschriften</span>
          <p>KI strukturiert Informationen in Listen, bei denen jeder Punkt mit einem fettgedruckten Stichwort beginnt. In Arztbriefen und Berichten wirkt das wie eine PowerPoint-Folie, nicht wie ein Fachtext.</p>
          <div class="callout">
            <strong>Faustregel:</strong> Wenn sich die Listenpunkte in zwei bis drei Flie&szlig;texts&auml;tze umschreiben lassen, ist der Flie&szlig;text die bessere Wahl.
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">16</span>
          <span class="feature-name">Title Case in &Uuml;berschriften</span>
          <p>KI schreibt &Uuml;berschriften im englischen Stil, bei dem jedes Wort gro&szlig; beginnt. Im Deutschen gelten andere Regeln: Nur das erste Wort und Substantive werden gro&szlig;geschrieben.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p><em>Moderne Ans&auml;tze In Der Evidenzbasierten Schmerztherapie</em></p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p><em>Moderne Ans&auml;tze in der evidenzbasierten Schmerztherapie</em></p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">17</span>
          <span class="feature-name">Chatbot-Artefakte</span>
          <p>Formulierungen, die in einem Chat-Fenster Sinn ergeben, aber in einem fertigen Dokument nichts zu suchen haben. Erstaunlich oft werden sie ungepr&uuml;ft &uuml;bernommen.</p>
          <p><strong>Typische Muster:</strong> <code>Ich hoffe, das hilft!</code>, <code>Gerne!</code>, <code>Nat&uuml;rlich!</code>, <code>Hier ist eine &Uuml;bersicht</code>, <code>M&ouml;chten Sie, dass ich...</code>, <code>Basierend auf den verf&uuml;gbaren Informationen</code></p>
          <p class="use-case">Klingt trivial, passiert aber h&auml;ufiger als man denkt. Einmal durchlesen, bevor der Text die Praxis verl&auml;sst.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">18</span>
          <span class="feature-name">Unterwerfungston</span>
          <p>KI reagiert &uuml;bertrieben zustimmend und validierend. In einem Therapiebericht oder Patientenbrief wirkt dieser Ton unangemessen.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p><em>Das ist eine ausgezeichnete Frage!</em> Es stimmt absolut, dass Schmerzchronifizierung ein vielschichtiges Ph&auml;nomen ist. <em>Sie haben v&ouml;llig recht</em>, dass psychosoziale Faktoren eine wichtige Rolle spielen.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Schmerzchronifizierung hat somatische und psychosoziale Komponenten. Das Fear-Avoidance-Modell nach Vlaeyen erkl&auml;rt einen Teil der &Uuml;berg&auml;nge von akut zu chronisch.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">19</span>
          <span class="feature-name">F&uuml;llphrasen</span>
          <p>KI polstert S&auml;tze mit Wendungen, die nichts zum Inhalt beitragen. Jede dieser Phrasen l&auml;sst sich k&uuml;rzen, ohne dass Information verloren geht.</p>
          <div class="mini-app">
            <div class="mini-app-title">H&auml;ufige F&uuml;llphrasen und ihre K&uuml;rzung</div>
            <p><code>Um dieses Ziel zu erreichen</code> &rarr; K&uuml;rzer: <code>Daf&uuml;r</code></p>
            <p><code>Aufgrund der Tatsache, dass</code> &rarr; K&uuml;rzer: <code>Weil</code></p>
            <p><code>Es ist wichtig festzuhalten, dass</code> &rarr; Einfach streichen</p>
            <p><code>Im Hinblick auf die Tatsache</code> &rarr; K&uuml;rzer: <code>Wegen</code></p>
            <p><code>Zum gegenw&auml;rtigen Zeitpunkt</code> &rarr; K&uuml;rzer: <code>Aktuell</code></p>
            <p><code>In diesem Zusammenhang</code> &rarr; K&uuml;rzer: <code>Hier</code></p>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">20</span>
          <span class="feature-name">&Uuml;berm&auml;&szlig;iges Hedging</span>
          <p>KI qualifiziert Aussagen so stark, dass am Ende niemand mehr wei&szlig;, was eigentlich gesagt wird. In der medizinischen Kommunikation ist vorsichtige Formulierung oft angemessen, aber es gibt eine Grenze.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p>Es <em>k&ouml;nnte m&ouml;glicherweise</em> argumentiert werden, dass die Therapie <em>unter Umst&auml;nden gewisse</em> positive Auswirkungen auf den <em>potenziellen</em> Heilungsverlauf haben <em>d&uuml;rfte</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>Die Therapie kann den Heilungsverlauf unterst&uuml;tzen. Die Datenlage ist noch d&uuml;nn, eine laufende RCT (NCT04851237) soll bis 2027 Ergebnisse liefern.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">21</span>
          <span class="feature-name">Generische Schlussfolgerungen</span>
          <p>KI beendet Texte mit vage-optimistischen S&auml;tzen, die auf alles und nichts passen. Ein guter Schluss benennt konkret, was als n&auml;chstes passiert.</p>
          <div class="before-after">
            <div class="ba-box ba-before">
              <span class="ba-label">KI-Text</span>
              <p><em>Die Zukunft sieht vielversprechend aus.</em> Mit den richtigen Ma&szlig;nahmen und einem engagierten Team <em>stehen die Zeichen auf Erfolg</em>. Die Praxis ist gut aufgestellt f&uuml;r <em>kommende Herausforderungen</em>.</p>
            </div>
            <div class="ba-box ba-after">
              <span class="ba-label">Menschlich</span>
              <p>N&auml;chster Termin in vier Wochen. Bis dahin t&auml;glich die Dehn&uuml;bungen aus dem Handout. Bei Verschlechterung telefonisch melden.</p>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <span class="feature-number">22</span>
          <span class="feature-name">Wissens-Disclaimer</span>
          <p>Hinweise auf den eigenen Trainingsstand der KI, die gelegentlich im Text stehen bleiben.</p>
          <p><strong>Typische Muster:</strong> <code>basierend auf verf&uuml;gbaren Informationen</code>, <code>nach aktuellem Wissensstand</code> (wenn keine Quelle folgt), <code>Details sind begrenzt verf&uuml;gbar</code></p>
          <p class="use-case">Besonders peinlich in Texten, die als pers&ouml;nliche Fachexpertise gelten sollen.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">23</span>
          <span class="feature-name">Typografische Anf&uuml;hrungszeichen</span>
          <p>ChatGPT verwendet englische Curly Quotes (&ldquo;...&rdquo;) statt der im Deutschen &uuml;blichen Anf&uuml;hrungszeichen (&bdquo;...&ldquo;). Kein gro&szlig;es Problem, aber ein verr&auml;terisches Detail.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">24</span>
          <span class="feature-name">Bindestrich-&Uuml;berperfektion</span>
          <p>KI setzt Bindestriche in zusammengesetzten Adjektiven mit maschineller Konsistenz. Menschliche Autoren machen das uneinheitlich, und gerade diese Uneinheitlichkeit wirkt nat&uuml;rlich.</p>
          <p><strong>Beispiel:</strong> KI schreibt immer <code>evidenz-basiert</code>, <code>patient-zentriert</code>, <code>leitlinien-gerecht</code>. Menschen schreiben mal <code>evidenzbasiert</code>, mal <code>Evidenz-basiert</code>, und das ist in Ordnung.</p>
        </div>


        <!-- ABSCHNITT 4: Vorher/Nachher aus dem Praxisalltag -->
        <span class="section-label">Praxis</span>
        <h2>4. Vorher/Nachher aus dem Praxisalltag</h2>
        <p>Drei komplette Textbeispiele, wie sie t&auml;glich in Praxen entstehen. Links der KI-Output, rechts die menschlich &uuml;berarbeitete Version.</p>

        <h3>4.1 Patienteninformation Knie-TEP</h3>
        <div class="before-after">
          <div class="ba-box ba-before">
            <span class="ba-label">KI-Text</span>
            <p>Ein k&uuml;nstliches Kniegelenk stellt einen <em>bedeutenden Meilenstein</em> auf dem Weg zur Wiederherstellung Ihrer Mobilit&auml;t dar. Dieser <em>wegweisende</em> Eingriff hat sich als <em>hocheffektive</em> Ma&szlig;nahme erwiesen, die <em>nicht nur</em> Schmerzen lindert, <em>sondern auch</em> Ihre Lebensqualit&auml;t <em>nachhaltig</em> verbessert. <em>Dar&uuml;ber hinaus</em> profitieren Sie von <em>modernsten</em> Operationstechniken und einem <em>ganzheitlichen</em> Nachsorgekonzept.</p>
          </div>
          <div class="ba-box ba-after">
            <span class="ba-label">Menschlich</span>
            <p>Nach dem Einsetzen eines k&uuml;nstlichen Kniegelenks dauert die Reha etwa 12 Wochen. In den ersten zwei Wochen geht es um Abschwellung und die ersten Gehversuche mit St&uuml;tzen. Ab Woche 3 beginnt das Krafttraining. Die meisten Patienten k&ouml;nnen nach 6 Wochen ohne Gehhilfe laufen.</p>
          </div>
        </div>

        <h3>4.2 Praxis-Website: &Uuml;ber uns</h3>
        <div class="before-after">
          <div class="ba-box ba-before">
            <span class="ba-label">KI-Text</span>
            <p>Unsere <em>hochqualifizierten</em> Therapeuten bieten Ihnen ein <em>umfassendes</em> Behandlungsspektrum in einer <em>modernen</em>, <em>einladenden</em> Atmosph&auml;re. Wir legen <em>gr&ouml;&szlig;ten Wert</em> auf <em>individuelle Betreuung</em> und <em>evidenzbasierte</em> Methoden, um Ihren Genesungsprozess <em>optimal</em> zu unterst&uuml;tzen. Ihr <em>Wohlbefinden</em> ist unser <em>h&ouml;chstes Anliegen</em>.</p>
          </div>
          <div class="ba-box ba-after">
            <span class="ba-label">Menschlich</span>
            <p>Vier Physiotherapeuten, drei davon mit Zusatzqualifikation in manueller Therapie. Schwerpunkte: Orthop&auml;die und Sportrehabilitation. Wir nehmen alle gesetzlichen Kassen, Termine gibt es online &uuml;ber Doctolib oder telefonisch unter 089-1234567. Parkpl&auml;tze sind direkt vor der T&uuml;r.</p>
          </div>
        </div>

        <h3>4.3 Therapiebericht f&uuml;r den &Uuml;berweiser</h3>
        <div class="before-after">
          <div class="ba-box ba-before">
            <span class="ba-label">KI-Text</span>
            <p>Im Rahmen der <em>umfassenden</em> physiotherapeutischen Behandlung konnte eine <em>signifikante</em> Verbesserung des Beschwerdebildes erzielt werden. Die <em>ganzheitliche</em> Herangehensweise, die <em>manuelle Techniken, aktive &Uuml;bungen und Patientenedukation umfasst</em>, hat <em>ma&szlig;geblich</em> zum positiven Therapieverlauf beigetragen.</p>
          </div>
          <div class="ba-box ba-after">
            <span class="ba-label">Menschlich</span>
            <p>Herr K. (6x KG, 4x MT) zeigt nach 10 Sitzungen eine Verbesserung der Knieflexion von 80 auf 115 Grad. VAS in Ruhe von 6 auf 2. Der Patient f&uuml;hrt das Heimprogramm zuverl&auml;ssig durch. Empfehlung: 6 weitere Einheiten KG zur Stabilisierung.</p>
          </div>
        </div>


        <!-- ABSCHNITT 5: Humanizer Skill -->
        <span class="section-label">Werkzeug</span>
        <h2>5. Der Humanizer-Skill f&uuml;r Claude Code</h2>
        <p>Alle 24 Muster manuell pr&uuml;fen ist m&ouml;glich, aber aufw&auml;ndig. Wer Claude Code nutzt, kann den Prozess mit einem einzigen Befehl automatisieren. Der Humanizer-Skill scannt einen Text in zwei Durchg&auml;ngen und entfernt systematisch alle erkennbaren KI-Muster.</p>

        <h3>5.1 Installation</h3>
        <p>Im Terminal (Claude Code muss laufen) diesen Befehl eingeben:</p>
        <pre>/install-skill https://raw.githubusercontent.com/oxscience/claude-skills/main/humanizer/SKILL.md</pre>
        <p>Das war es. Der Skill steht ab sofort als <code>/humanizer</code> zur Verf&uuml;gung.</p>

        <div class="callout">
          <strong>Kein Claude Code?</strong> Der Skill funktioniert nur mit Claude Code (dem Kommandozeilen-Tool von Anthropic). Wenn ihr den normalen Claude-Chat nutzt, k&ouml;nnt ihr den Skill nicht installieren, aber die 24 Muster aus diesem Guide trotzdem als manuelle Checkliste verwenden.
        </div>

        <h3>5.2 So funktioniert der Humanizer</h3>
        <p>Der Skill arbeitet in zwei Durchg&auml;ngen, genau wie ein menschlicher Lektor das tun w&uuml;rde:</p>
        <ol>
          <li><strong>Erster Durchgang:</strong> Alle 24 KI-Muster werden identifiziert und umgeschrieben. Bedeutung und Fachbegriffe bleiben erhalten, nur die KI-typischen Formulierungen werden ersetzt.</li>
          <li><strong>Zweiter Durchgang (Selbstaudit):</strong> Der Skill fragt sich selbst: &quot;Was macht diesen Text noch offensichtlich KI-generiert?&quot; Verbleibende Muster werden in einer letzten Runde bereinigt.</li>
        </ol>

        <h3>5.3 Anwendungsbeispiele</h3>
        <div class="mini-app">
          <div class="mini-app-title">Einzelne Datei humanisieren</div>
          <p><code>/humanizer patienteninfo-knie-tep.md</code></p>
          <p>Der Skill liest die Datei, markiert problematische Stellen, schreibt um und speichert das Ergebnis.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Text aus der Zwischenablage</div>
          <p>Einfach in Claude Code eintippen:</p>
          <p><code>/humanizer</code> und dann den Text per Copy-Paste einf&uuml;gen.</p>
        </div>

        <div class="mini-app">
          <div class="mini-app-title">Direkt beim Schreiben</div>
          <p>Ihr k&ouml;nnt den Humanizer auch als letzten Schritt in jeden Schreibauftrag einbauen:</p>
          <p><code>Schreib eine Patienteninfo zu Faszientherapie. Danach: /humanizer auf das Ergebnis anwenden.</code></p>
        </div>


        <!-- Goldene Regel + Checkliste -->
        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>KI-Texte sind nicht schlecht, weil sie von einer KI kommen. Sie sind schlecht, wenn sie so klingen, als k&auml;me dahinter kein denkender Mensch. Die 24 Muster in diesem Guide sind Symptome desselben Problems: Der Text sagt wenig Konkretes, h&uuml;bsch verpackt in viele W&ouml;rter.</p>
          <p>Die Gegenma&szlig;nahme ist einfach: Konkreter werden. Zahlen statt Adjektive. Namen statt &quot;Experten&quot;. N&auml;chste Schritte statt Zukunftshoffnungen. Ein Satz, der etwas Pr&uuml;fbares behauptet, ist mehr wert als ein ganzer Absatz, der nichts Falsches sagt, weil er nichts Konkretes sagt.</p>
        </div>

        <h2>Checkliste: Vor dem Absenden</h2>
        <ul class="checklist">
          <li>Kommt das Wort &quot;ganzheitlich&quot;, &quot;umfassend&quot; oder &quot;nachhaltig&quot; vor, ohne dass es etwas Konkretes beschreibt?</li>
          <li>Gibt es Quellenverweise ohne konkreten Autor, Jahreszahl oder Studientitel?</li>
          <li>Stehen mehr als zwei Gedankenstriche in einem Absatz?</li>
          <li>Gibt es Dreiergruppen, die sich nach einer Aufz&auml;hlung anfühlen statt nach Information?</li>
          <li>Endet der Text mit einer vagen Zukunftshoffnung statt mit einem konkreten n&auml;chsten Schritt?</li>
          <li>Sind W&ouml;rter fettgedruckt, die es nicht sein m&uuml;ssten?</li>
          <li>Klingen die ersten drei W&ouml;rter wie ein Chatbot (&quot;Nat&uuml;rlich!&quot;, &quot;Gerne!&quot;, &quot;Hier ist...&quot;)?</li>
          <li>W&uuml;rde eine Kollegin beim Lesen stutzen und denken: Das klingt nicht nach dir?</li>
        </ul>

        <div class="source-note">
          Basiert auf dem Katalog <a href="https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing">Wikipedia:Signs of AI writing</a>, gepflegt vom WikiProject AI Cleanup. 24 Muster aus der Analyse tausender KI-generierter Texte, hier adaptiert f&uuml;r den deutschsprachigen Gesundheitsbereich. Der <a href="https://github.com/oxscience/claude-skills">Humanizer-Skill</a> ist Open Source.
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; KI-Tools f&uuml;r Health Professionals.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-ki-texte-menschlich', OxGuideKiTexteMenschlich);
