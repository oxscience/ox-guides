class OxGuideMedizinKi extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0a0a0a;--surface:#1a1a1f;--surface-alt:#151518;
  --border:#1a1a1a;--border-accent:#6fbdbb;
  --text:#d4d4d4;--text-secondary:#999;--text-muted:#666;--text-dim:#555;
  --white:#fff;--white-soft:#e0e0e0;
  --primary:#6fbdbb;--primary-light:#a7ccd7;
  --blue-muted:#94a3b8;
  --code-bg:#133433;
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
.intro{color:var(--text-secondary);margin-bottom:24px;font-size:15.2px}

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}
h3{font-size:16px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}

p{margin-bottom:16px}
strong{color:var(--white-soft)}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.section-label{
  display:inline-block;font-size:11.2px;text-transform:uppercase;
  letter-spacing:0.1em;color:var(--primary);margin-top:48px;margin-bottom:0;
}
.section-label + h2{margin-top:4px}

/* Werkzeugkarte */
.map-row{background:var(--surface);border:1px solid #26262c;border-radius:10px;padding:14px 18px;margin:10px 0}
.map-if{display:block;font-size:12.8px;color:var(--text-muted)}
.map-then{display:block;font-size:15.2px;font-weight:600;color:var(--white);margin:2px 0 4px}
.map-why{display:block;font-size:13.6px;color:var(--text-secondary);line-height:1.6}

/* Paper-Karten */
.paper-card{background:var(--surface);border:1px solid #26262c;border-radius:10px;padding:22px 24px;margin:18px 0}
.paper-header{display:flex;align-items:flex-start;margin-bottom:14px}
.paper-badge{display:inline-flex;align-items:center;justify-content:center;background:var(--primary);color:#0f0f11;font-weight:700;width:34px;height:34px;border-radius:9px;font-size:15px;margin-right:14px;flex-shrink:0}
.paper-titleline{display:flex;flex-direction:column}
.paper-name{font-size:16.8px;font-weight:600;color:var(--white);line-height:1.35}
.paper-author{font-size:13.6px;color:var(--text-muted);margin-top:3px}
.paper-card p{font-size:14.8px;margin-bottom:12px}
.paper-card ul{font-size:14.8px;margin:8px 0 14px 20px}
.step{display:block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.08em;color:var(--primary-light);margin:18px 0 4px}

/* Zitat-Block (Originalquelle) */
.cite{background:var(--surface-alt);border-left:3px solid var(--border-accent);border-radius:0 6px 6px 0;padding:10px 14px;margin:0 0 16px;font-size:12.8px;color:var(--text-secondary);line-height:1.55}
.cite .cite-label{display:block;font-size:10.4px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:3px}
.cite i{color:var(--white-soft);font-style:italic}
.cite a{color:var(--primary-light);word-break:break-word}

/* Balken-Grafik */
.chart{margin:6px 0 14px}
.chart-title{font-size:12.8px;color:var(--text-secondary);margin-bottom:10px}
.bar-row{display:grid;grid-template-columns:136px 1fr 60px;gap:10px;align-items:center;font-size:13.2px;padding:3px 0}
.bar-name{color:var(--text);line-height:1.3}
.bar-track{background:#26262c;height:12px;border-radius:6px;overflow:hidden}
.bar-fill{height:100%;border-radius:6px;background:var(--blue-muted)}
.bar-fill.rag{background:var(--primary)}
.bar-fill.none{background:transparent;border:1px dashed var(--text-muted)}
.bar-val{font-family:var(--mono);font-size:12.8px;color:var(--white-soft);text-align:right;white-space:nowrap}
.ns-group{border-left:2px solid var(--primary-light);padding-left:10px;margin:4px 0 8px -12px}
.ns-label{font-size:11.2px;color:var(--primary-light);letter-spacing:0.04em;margin-bottom:2px}
.chart-legend{font-size:12px;color:var(--text-muted);margin-top:8px;line-height:1.6}
.dot{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:5px;vertical-align:middle}

/* Tabelle */
.table-wrap{overflow-x:auto;margin:6px 0 16px}
table{border-collapse:collapse;width:100%;font-size:13.6px}
th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #26262c}
th{color:var(--text-muted);font-weight:600;font-size:12px}
td:first-child{color:var(--text-secondary)}
td.win{color:var(--white);font-weight:600}
.cell-sub{display:block;font-size:11.2px;font-weight:400;color:var(--text-muted)}

/* Kopiervorlage */
.copy-box{background:var(--code-bg);border:1px dashed var(--primary);border-radius:8px;padding:12px 16px;margin:8px 0 14px;font-family:var(--mono);font-size:13.6px;color:var(--primary-light);line-height:1.6}
.copy-label{display:block;font-family:var(--font);font-size:10.4px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:4px}

/* "Tiefer gegraben" - Bernstein-Akzent zur Abgrenzung */
.deeper{background:#1a1505;border:1px solid #4a3a14;border-radius:8px;padding:13px 18px;margin:16px 0 0;font-size:13.6px;color:#cbb98f;line-height:1.7}
.deeper strong{color:#fbbf24}

/* Kleinere Studien */
.mini{background:var(--surface);border:1px solid #26262c;border-radius:8px;padding:12px 16px;margin:10px 0;font-size:14.4px}
.mini strong{color:var(--white)}
.mini .src{color:var(--text-muted);font-size:12.8px}

/* Quellenliste */
.source-item{font-size:12.8px;color:var(--text-secondary);padding:11px 0;border-bottom:1px solid var(--border);line-height:1.6}
.source-item:last-child{border-bottom:none}
.source-item i{color:var(--white-soft);font-style:italic}
.source-item a{color:var(--primary-light);word-break:break-word}
.source-num{color:var(--primary);font-weight:700;font-family:var(--mono);margin-right:6px}

.golden-rule{
  background:linear-gradient(135deg,#133433 0%,#1a1a1f 100%);
  border:1px solid var(--primary);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}
.golden-rule ol{margin-bottom:0}

.ai-note{font-size:12.8px;color:var(--text-muted);margin-top:32px;font-style:italic}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .paper-card{padding:18px 16px}
  .bar-row{grid-template-columns:96px 1fr 54px;gap:8px;font-size:12.4px}
  .bar-val{font-size:12px}
  table{font-size:12.4px}
  th,td{padding:7px 6px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Medizin-KI oder ChatGPT? Was die Studien 2026 wirklich zeigen</h1>
        <div class="meta">8-Seiten-Guide &middot; Out Of The Box Science &middot; Stand Oktober 2026</div>

        <p class="intro">Seit es AMBOSS, OpenEvidence, Elicit und Consensus mit KI-Funktionen gibt, kommt in Seminaren und Nachrichten immer wieder dieselbe Frage: Lohnt sich ein spezialisiertes Tool, oder reicht ChatGPT? Die Werbung der Anbieter hilft da wenig, da sie sich gern auf Studien berufen, in denen sie vorne liegen. Dieser Guide geht deshalb Paper f&#252;r Paper durch, was gemessen wurde, was herauskam und wo der Haken liegt. Am Ende stehen eine Werkzeugkarte nach Fragetyp und sechs Fragen, die du an jede &#8222;Platz eins&#8220;-Meldung stellen kannst.</p>

        <p>Zwei Begriffe vorab. <strong>Spezialisierte Tools</strong> wie AMBOSS AI, OpenEvidence oder Doximity Ask suchen vor jeder Antwort in Fachliteratur und Leitlinien und bauen die Antwort auf diesen Treffern auf (Retrieval-Augmented Generation, kurz RAG). <strong>Allgemeine Modelle</strong> wie GPT-5, Claude oder Gemini antworten zun&#228;chst aus dem, was sie im Training gelernt haben, und suchen nur, wenn man die Websuche oder einen Deep-Research-Modus einschaltet. Unter der Haube steckt bei beiden eine sehr gute Autovervollst&#228;ndigung, die das wahrscheinlichste n&#228;chste Wort r&#228;t. Der Unterschied liegt darin, was man ihr vorher zu lesen gibt.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1 &middot; Die Kurzantwort</span>
        <h2>Werkzeugkarte nach Fragetyp</h2>

        <div class="map-row">
          <span class="map-if">Wenn du eine Leitlinie, Dosierung oder &#228;rztliche Empfehlung mit Quelle brauchst</span>
          <span class="map-then">Klinik-RAG-Tool (im deutschsprachigen Raum AMBOSS)</span>
          <span class="map-why">Zitate sind dort fast immer echt, und die Tools vergessen seltener wichtige Schritte.</span>
        </div>
        <div class="map-row">
          <span class="map-if">Wenn du einen Fall durchdenken, etwas erkl&#228;ren oder &#220;bungsideen sammeln willst</span>
          <span class="map-then">Bestes allgemeines Modell mit Denkmodus und Vollst&#228;ndigkeits-Prompt</span>
          <span class="map-why">Beim Abw&#228;gen und Erkl&#228;ren liegen die besten allgemeinen Modelle gleichauf oder vorn.</span>
        </div>
        <div class="map-row">
          <span class="map-if">Wenn du Literatur zu einem Thema suchst</span>
          <span class="map-then">Elicit, Consensus oder Undermind als Einstieg, danach PubMed und PEDro</span>
          <span class="map-why">Die Tools finden meist nur ein Viertel bis zwei Drittel der relevanten Studien.</span>
        </div>
        <div class="map-row">
          <span class="map-if">Wenn du Zahlen brauchst (Belastung, Dosierung, g/h)</span>
          <span class="map-then">Immer die Prim&#228;rquelle</span>
          <span class="map-why">Alle Systeme schwanken bei Zahlen-Empfehlungen stark.</span>
        </div>
        <div class="map-row">
          <span class="map-if">Wenn du unsicher bist</span>
          <span class="map-then">Ein zweites System gegenlesen lassen</span>
          <span class="map-why">Gegenseitige Pr&#252;fung zweier Modelle hat in Studien die Fehler gesenkt.</span>
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2 &middot; Paper 1</span>
        <h2>Allgemeine Modelle schlagen die Klinik-Tools</h2>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">1</span>
            <div class="paper-titleline">
              <span class="paper-name">Allgemeine Sprachmodelle &#252;bertreffen spezialisierte Klinik-Tools</span>
              <span class="paper-author">Vishwanath et al. (NYU) &middot; Nature Medicine 2026</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Vishwanath, K., Alyakin, A., Ghosh, M., et al. (2026). General-purpose large language models outperform specialized clinical AI tools on medical benchmarks. <i>Nature Medicine, 32</i>(7), 2405&#8211;2409. <a href="https://doi.org/10.1038/s41591-026-04431-5" target="_blank" rel="noopener">doi.org/10.1038/s41591-026-04431-5</a>
          </div>

          <span class="step">Was haben die gemacht?</span>
          <p>Ein Team um Eric Oermann (NYU) hat OpenEvidence und UpToDate Expert AI gegen GPT-5.2, Gemini 3.1 Pro und Claude Opus 4.6 antreten lassen. Getestet wurde mit 500 Fragen aus dem US-Staatsexamen (MedQA), 500 Aufgaben aus HealthBench, einem Bewertungsset von OpenAI mit Punkteschema, und 100 echten Fragen von &#196;rztinnen und &#196;rzten, die zw&#246;lf Klinikerinnen und Kliniker blind bewertet haben.</p>

          <span class="step">Die eine Grafik</span>
          <div class="chart">
            <div class="chart-title">HealthBench, Punkte von 0 bis 100</div>
            <div class="bar-row"><span class="bar-name">GPT-5.2</span><div class="bar-track"><div class="bar-fill" style="width:88%"></div></div><span class="bar-val">88,0</span></div>
            <div class="bar-row"><span class="bar-name">Gemini 3.1 Pro</span><div class="bar-track"><div class="bar-fill" style="width:79.3%"></div></div><span class="bar-val">79,3</span></div>
            <div class="bar-row"><span class="bar-name">Claude Opus 4.6</span><div class="bar-track"><div class="bar-fill" style="width:77%"></div></div><span class="bar-val">77,0</span></div>
            <div class="bar-row"><span class="bar-name">OpenEvidence</span><div class="bar-track"><div class="bar-fill rag" style="width:62.6%"></div></div><span class="bar-val">62,6</span></div>
            <div class="bar-row"><span class="bar-name">UpToDate Expert AI</span><div class="bar-track"><div class="bar-fill rag" style="width:61.3%"></div></div><span class="bar-val">61,3</span></div>
            <div class="chart-legend"><span class="dot" style="background:#6fbdbb"></span>Klinik-Tool &nbsp; <span class="dot" style="background:#94a3b8"></span>Allgemeines Modell</div>
          </div>

          <div class="table-wrap">
            <table>
              <tr><th>Test</th><th>Bestes allg. Modell</th><th>Open&shy;Evidence</th><th>UpToDate</th></tr>
              <tr><td>Examen (MedQA)</td><td class="win">97,4 %<span class="cell-sub">Gemini 3.1 Pro</span></td><td>89,6 %</td><td>88,4 %</td></tr>
              <tr><td>HealthBench (0&#8211;100)</td><td class="win">88,0<span class="cell-sub">GPT-5.2</span></td><td>62,6</td><td>61,3</td></tr>
              <tr><td>Echte Arztfragen (Skala 1&#8211;4, 4 = beste)</td><td class="win">3,62<span class="cell-sub">Gemini 3.1 Pro</span></td><td>3,24</td><td>3,17</td></tr>
            </table>
          </div>

          <span class="step">Der Haken</span>
          <p>Die Klinik-Tools wurden von Hand &#252;ber ihre Weboberfl&#228;che abgefragt, teils schon im September 2025, die allgemeinen Modelle per Schnittstelle im Februar 2026. HealthBench stammt von OpenAI und wird von KI-Bewertern ausgewertet. Die 100 Arztfragen kamen aus dem internen GPT-Zugang der NYU, was den allgemeinen Modellen einen Heimvorteil geben k&#246;nnte. Ob die Zitate stimmen, wurde nicht gepr&#252;ft, obwohl genau das die St&#228;rke der Klinik-Tools ist. Bei den echten Arztfragen unterschieden sich die drei allgemeinen Modelle untereinander nicht signifikant, und Googles KI-&#220;bersicht aus der normalen Suche (3,27) lag gleichauf mit den Klinik-Tools. Der Seniorautor gibt au&#223;erdem eine Beratert&#228;tigkeit f&#252;r Google an, dessen Gemini in zwei der drei Tests vorne lag.</p>

          <span class="step">Was hei&#223;t das f&#252;r dich?</span>
          <p>Beim reinen Fachwissen und bei gut formulierten Erkl&#228;rungen brauchst du kein Spezial-Tool. Die Studie ist begutachtet und ohne die Tool-Hersteller entstanden, misst aber eher die Theoriepr&#252;fung.</p>
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3 &middot; Paper 2</span>
        <h2>Die Klinik-Tools schlagen die allgemeinen Modelle</h2>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">2</span>
            <div class="paper-titleline">
              <span class="paper-name">First, do NOHARM</span>
              <span class="paper-author">Wu et al. (Stanford, Harvard, ARISE) &middot; Preprint 2026</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Wu, D., Nateghi Haredasht, F., Kumar Maharaj, S., et al. (2026). <i>First, do NOHARM: A medical safety benchmark and randomized study of physician and AI teaming on clinical consultations</i> (Version 4) [Preprint]. arXiv. <a href="https://doi.org/10.48550/arXiv.2512.01241" target="_blank" rel="noopener">doi.org/10.48550/arXiv.2512.01241</a>
          </div>

          <span class="step">Was haben die gemacht?</span>
          <p>Forschende aus Stanford, Harvard und dem Netzwerk ARISE haben 100 echte Anfragen von Haus&#228;rzten an Fach&#228;rzte aus zehn Fachrichtungen gesammelt und jede in zehn Varianten umformuliert. 29 Fach&#228;rztinnen und Fach&#228;rzte haben 12.747 Einzelurteile abgegeben, welche Handlung in welchem Fall angemessen ist und wie schwer es schaden w&#252;rde, sie wegzulassen oder f&#228;lschlich zu empfehlen. Getestet wurden 20 allgemeine Modelle und vier Klinik-Tools: AMBOSS LiSA, Doximity Ask, OpenEvidence und Glass Health. Das ist die Studie, mit der AMBOSS als &#8222;#1&#8220; wirbt.</p>

          <span class="step">Die eine Grafik</span>
          <div class="chart">
            <div class="chart-title">Anteil der F&#228;lle mit mindestens einem schweren Fehler (weniger ist besser)</div>
            <div class="ns-group">
              <div class="ns-label">statistisch nicht zu trennen</div>
              <div class="bar-row"><span class="bar-name">AMBOSS LiSA</span><div class="bar-track"><div class="bar-fill rag" style="width:7.8%"></div></div><span class="bar-val">2,9 %</span></div>
              <div class="bar-row"><span class="bar-name">Doximity Ask</span><div class="bar-track"><div class="bar-fill rag" style="width:13%"></div></div><span class="bar-val">4,8 %</span></div>
              <div class="bar-row"><span class="bar-name">OpenEvidence</span><div class="bar-track"><div class="bar-fill rag" style="width:13.8%"></div></div><span class="bar-val">5,1 %</span></div>
              <div class="bar-row"><span class="bar-name">Glass Health</span><div class="bar-track"><div class="bar-fill rag" style="width:14.6%"></div></div><span class="bar-val">5,4 %</span></div>
            </div>
            <div class="bar-row"><span class="bar-name">GPT-5.5</span><div class="bar-track"><div class="bar-fill" style="width:24.1%"></div></div><span class="bar-val">8,9 %</span></div>
            <div class="bar-row"><span class="bar-name">Gemini 2.5 Pro</span><div class="bar-track"><div class="bar-fill" style="width:34.6%"></div></div><span class="bar-val">12,8 %</span></div>
            <div class="bar-row"><span class="bar-name">Claude Fable 5</span><div class="bar-track"><div class="bar-fill" style="width:36.8%"></div></div><span class="bar-val">13,6 %</span></div>
            <div class="bar-row"><span class="bar-name">Llama 4 Maverick</span><div class="bar-track"><div class="bar-fill" style="width:66.5%"></div></div><span class="bar-val">24,6 %</span></div>
            <div class="bar-row"><span class="bar-name">&#8222;Nichts tun&#8220;</span><div class="bar-track"><div class="bar-fill none" style="width:100%"></div></div><span class="bar-val">37 %</span></div>
            <div class="chart-legend"><span class="dot" style="background:#6fbdbb"></span>Klinik-Tool &nbsp; <span class="dot" style="background:#94a3b8"></span>Allgemeines Modell (jeweils bestes je Anbieter) &middot; Auswahl aus Fig. 3a, Version 4</div>
          </div>

          <p>&#220;ber 80 Prozent der schweren Fehler waren Auslassungen, also etwa eine n&#246;tige Untersuchung oder ein Hinweis an den Patienten, der in der Antwort fehlte. F&#252;r mich ist das der praktisch wichtigste Befund, da so eine L&#252;cke beim Lesen einer gut formulierten Antwort kaum auff&#228;llt.</p>

          <span class="step">Der Haken</span>
          <ul>
            <li>Zwischen den vier Klinik-Tools fanden die Autoren keinen statistisch belastbaren Unterschied. Die Rangfolge innerhalb der vier kann also Zufall sein.</li>
            <li>AMBOSS, OpenEvidence und Glass Health wurden erst getestet, nachdem ein Teil der F&#228;lle &#246;ffentlich war. Die Autoren haben gepr&#252;ft, ob sich das auswendig lernen l&#228;sst, und keine Hinweise gefunden; ein Restrisiko bleibt.</li>
            <li>Mit einer Anweisung wie &#8222;antworte vollst&#228;ndig&#8220; wurden die allgemeinen Modelle deutlich besser, die Klinik-Tools eher schlechter. Die Autoren vermuten, dass die Tools so eine Anweisung schon eingebaut haben.</li>
            <li>&#220;ber die normalen Apps getestet lagen alle niedriger als &#252;ber die Schnittstelle. In diesem kleineren Handtest kam ChatGPT Health auf einen Wert von 68,4, die Gratisversion von OpenEvidence auf 60,8.</li>
            <li>Doximity Ask kam im Handtest zun&#228;chst auf 59,6, meldete ein laufendes Update, bat um Wiederholung und erreichte sechs Tage sp&#228;ter 75,8. Beide Werte stehen im Paper.</li>
            <li>Die Studie ist ein Preprint und noch nicht begutachtet. Die F&#228;lle stammen aus US-Unikliniken, Physiotherapie kommt nicht vor.</li>
          </ul>

          <span class="step">Was hei&#223;t das f&#252;r dich?</span>
          <p>Wenn es darauf ankommt, dass nichts vergessen wird, haben die Klinik-Tools derzeit einen Vorsprung. Wer ein allgemeines Modell nutzt, sollte ausdr&#252;cklich nach Vollst&#228;ndigkeit fragen:</p>
          <div class="copy-box"><span class="copy-label">Kopiervorlage</span>Antworte vollst&#228;ndig. Nenne auch Red Flags, n&#246;tige Abkl&#228;rung, Aufkl&#228;rung des Patienten und Nachsorge. Kennzeichne, wo du unsicher bist.</div>

          <div class="deeper">
            <strong>Tiefer gegraben: Drei Firmen, eine Studie.</strong> AMBOSS wirbt mit Platz eins, Doximity mit einer Pressemitteilung, dass es OpenEvidence und die allgemeinen Modelle schl&#228;gt, und OpenEvidence verweist darauf, dass die Studie nicht begutachtet ist, und kritisiert, dass Anbieter Nachtests bekommen haben. Alle drei Aussagen lassen sich mit dem Paper vereinbaren, da die Unterschiede zwischen den Tools im Rauschen liegen.
          </div>
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4 &middot; Paper 3</span>
        <h2>Wenn der Hersteller die Studie organisiert</h2>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">3</span>
            <div class="paper-titleline">
              <span class="paper-name">Expertenbewertung klinischer KI-Tools an echten Fragen</span>
              <span class="paper-author">Feng et al. &middot; Preprint 2026</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Feng, J., Patel, V., Heagerty, P., Mai, Y., Sivaraman, V., Vossler, P., Ouyang, J., &amp; Jena, A. B. (2026). <i>Expert evaluation of clinical AI tools on real point-of-care clinical queries</i> [Preprint]. arXiv. <a href="https://doi.org/10.48550/arXiv.2606.28960" target="_blank" rel="noopener">doi.org/10.48550/arXiv.2606.28960</a>
          </div>

          <span class="step">Was haben die gemacht?</span>
          <p>149 &#196;rztinnen und &#196;rzte haben Antworten von OpenEvidence, Claude Opus 4.8, Gemini 3.1 Pro und GPT-5.5 auf 620 echte Fragen blind verglichen. OpenEvidence gewann auf allen f&#252;nf Bewertungsachsen, mit 25 bis 39 Prozentpunkten Abstand zwischen Siegen und Niederlagen.</p>

          <span class="step">Der Haken</span>
          <p>Die Fragen stammen von OpenEvidence-Nutzern. OpenEvidence hat die Datenerhebung mitgestaltet, die Umfrage an 12.000 &#196;rztinnen und &#196;rzte verschickt (1,2 Prozent haben die Bewertung vollst&#228;ndig abgeschlossen) und die Bewertenden bezahlt. 78 der 149 Bewertenden nutzten OpenEvidence selbst; laut Autoren &#228;ndert das am Ergebnis nichts. Die Autoren selbst sind unabh&#228;ngig und haben die Auswertung vorab festgelegt, das legt das Paper offen.</p>

          <span class="step">Was hei&#223;t das f&#252;r dich?</span>
          <p>Dass die Fragen aus dem eigenen Produkt kommen, ist ein Heimvorteil, genau wie bei den NYU-Fragen in Paper 1. Legt man die drei Studien nebeneinander, h&#228;ngt das Ergebnis stark davon ab, wer die Fragen stellt und was gez&#228;hlt wird.</p>
        </div>


        <!-- ==================== SEITE 5 ==================== -->

        <span class="section-label">Seite 5 &middot; Einzelstudien</span>
        <h2>Die kleineren Studien</h2>
        <p>Daneben gibt es zahlreiche kleinere Vergleiche, fast alle mit OpenEvidence, meist mit unter 100 Fragen und oft mit Modellversionen, die heute schon ersetzt sind. Einen durchgehenden Sieger gibt es dort nicht. Ein paar Beispiele:</p>

        <div class="mini"><strong>Zitate.</strong> Bei Fragen zu Wirbels&#228;ulen-Leitlinien waren die Zitate von OpenEvidence alle korrekt, bei Claude 78 Prozent, Gemini erfand 26 Prozent. <span class="src">(McLaughlin et al., 2026)</span></div>
        <div class="mini"><strong>Brustkrebs-F&#228;lle.</strong> Fachleute aus sieben Brustzentren setzten GPT-5 Thinking in 96 Prozent der Bewertungen auf Platz eins, vor OpenEvidence und dem deutschen Medizinprodukt Prof. Valmed. <span class="src">(Freudenberg et al., 2026)</span></div>
        <div class="mini"><strong>Rheumatologie.</strong> Prof. Valmed, GPT-5 Thinking und OpenEvidence ohne messbaren Unterschied. <span class="src">(Kremer et al., 2026)</span></div>
        <div class="mini"><strong>AMBOSS au&#223;erhalb von NOHARM.</strong> Bei 200 Pr&#252;fungsfragen aus der europ&#228;ischen Urologie-Weiterbildung kam ChatGPT (GPT-4.0) auf 85,5 Prozent, AMBOSS und Claude 4.5 auf je 79,5 Prozent; der Unterschied ist nicht signifikant. <span class="src">(Eldaneen et al., 2026)</span></div>
        <div class="mini"><strong>&#220;bersichtsarbeit.</strong> Eine systematische &#220;bersicht zu OpenEvidence kommt zu dem Schluss, dass die Quellenbindung vielversprechend ist, die Leistung aber schwankt und die Stichproben klein sind. <span class="src">(Artsi et al., 2026)</span></div>


        <!-- ==================== SEITE 6 ==================== -->

        <span class="section-label">Seite 6 &middot; Literatur-Tools</span>
        <h2>Elicit, Consensus, SciSpace, Scite, Undermind</h2>
        <p>Diese Tools beantworten keine klinischen Fragen, sie suchen und fassen Studien zusammen. Fast alle greifen auf dieselben Datenbanken zu, vor allem Semantic Scholar und OpenAlex. Sie unterscheiden sich darin, wie sie Treffer ausw&#228;hlen und welches Sprachmodell dar&#252;berliegt.</p>

        <h3>Wie viel finden sie?</h3>
        <p>Gegen die Suche einer systematischen &#220;bersichtsarbeit fand Elicit im Schnitt 39,5 Prozent der relevanten Studien, in einzelnen Themen zwischen 25 und 69 Prozent, w&#228;hrend die Originalsuchen &#252;ber 90 Prozent erreichten (Lau &amp; Golder, 2025). Dabei standen 80,9 Prozent der verpassten Studien in Semantic Scholar, also genau in der Datenbank, die Elicit durchsucht. Es hapert demnach an der Suche selbst. In der Endoprothetik fand ChatGPT-5 Deep Research 47,5 Prozent, Forschende 85,2 Prozent, brauchte daf&#252;r aber Minuten statt Hunderter Stunden (Carrier et al., 2026). Bei der Datenextraktion lag Elicit in einer Glaukom-Studie bei 51 Prozent korrekten Angaben (Meliante et al., 2025).</p>

        <h3>Wie gut sind die Treffer?</h3>
        <p>In einem unabh&#228;ngigen Vergleich aus der Kardiologie, bei dem Fachleute die gefundenen Artikel bewertet haben, lag ChatGPT-5 vorne: 90 Prozent der Treffer waren relevant, bei Scite 20 Prozent, Elicit und Consensus lagen dazwischen (Di Febo et al., 2026). Zur&#252;ckgezogene Paper erkannte ChatGPT-5 bei 8 von 15 vollst&#228;ndig, SciSpace und Consensus bei keinem (Labenbacher et al., 2026). Acht Retrieval-Tools untereinander, darunter OpenEvidence, Undermind, Consensus, SciSpace, Elicit und Scite, unterschieden sich in der Abdeckung nicht (Krump et al., 2026, Preprint).</p>

        <div class="deeper">
          <strong>Tiefer gegraben:</strong> Der einzige Benchmark, in dem Elicit und SciSpace vor OpenAI Deep Research liegen, ist AstaBench (Bragg et al., 2025). Er stammt vom Betreiber von Semantic Scholar, dessen eigener Agent dort auf Platz eins liegt. Der entscheidende Teiltest besteht aus Informatik-Fragen, und Elicit und SciSpace haben ihre Antworten selbst eingereicht.
        </div>

        <h3>Was hei&#223;t das f&#252;r dich?</h3>
        <p>Die Tools sind gut, um in ein Thema einzusteigen und erste Studien zu finden. Als einzige Suche f&#252;r eine Arbeit, eine Leitlinie oder einen Fachtext reichen sie nicht. Deep-Research-Modi der allgemeinen Modelle haben bei korrekten Zitaten stark aufgeholt: In der Sportorthop&#228;die stieg der Anteil korrekter Zitate bei Gemini 2.5 Pro mit Deep Research von 64,6 auf 98,6 Prozent (&#350;eng&#252;l et al., 2026).</p>


        <!-- ==================== SEITE 7 ==================== -->

        <span class="section-label">Seite 7 &middot; Physio und Sport</span>
        <h2>Die L&#252;cke</h2>
        <p>F&#252;r Physiotherapie, Trainingssteuerung und Sportern&#228;hrung haben wir bis Oktober 2026 keine einzige Studie gefunden, die ein Spezial-Tool mit einem allgemeinen Modell vergleicht. Die Frage, die in Fortbildungen immer wieder kommt, ist also noch offen. Was es gibt, sind Studien zu allgemeinen Modellen:</p>

        <div class="mini"><strong>Reha-Medizin.</strong> Bei 48 echten F&#228;llen bewerteten sechs Reha-&#196;rztinnen und -&#196;rzte die Pl&#228;ne von Grok 4 und Gemini 2.5 Pro besser als die von Fachleuten geschriebenen. <span class="src">(Cao et al., 2026)</span></div>
        <div class="mini"><strong>R&#252;ckenschmerz.</strong> In 160 echten Akten lag die Triage mit einem strukturierten Fragebogen bei 91 bis 93 Prozent (nur mit der Hauptbeschwerde bei 76 bis 84 Prozent), ein Multiples Myelom erkannten die Modelle aber nur in 45 bis 60 Prozent der F&#228;lle. Red Flags bleiben die Schwachstelle. <span class="src">(Ma et al., 2026)</span></div>
        <div class="mini"><strong>Sportphysio.</strong> GPT-4 schnitt bei 53 Fragen besser ab als drei j&#252;ngere Expertinnen und Experten, mit einem inzwischen veralteten Modell. <span class="src">(Hamrin Senorski et al., 2026)</span></div>
        <div class="mini"><strong>Sportern&#228;hrung.</strong> Offene Antworten waren zu 31 bis 74 Prozent korrekt (Solomon &amp; Laye, 2025). F&#252;r dieselbe Freizeit-Marathonl&#228;uferin schwankte allein ein Modell bei den Kohlenhydraten im Rennen zwischen 5 und 145 Gramm pro Stunde. <span class="src">(Sun et al., 2026)</span></div>
        <div class="mini"><strong>Trainingspl&#228;ne.</strong> Eine &#220;bersicht &#252;ber 24 Studien fand KI-Pl&#228;ne in f&#252;nf von sechs direkten Vergleichen schlechter als menschliche und Sicherheitsm&#228;ngel in 14 Studien, &#252;berwiegend mit &#228;lteren Modellen. <span class="src">(He et al., 2026)</span></div>

        <h3>Was hei&#223;t das f&#252;r dich?</h3>
        <p>F&#252;r Erkl&#228;rungen, Patientenmaterial und erste Ideen sind die aktuellen allgemeinen Modelle brauchbar. Red Flags, Belastungszahlen und Dosierungen geh&#246;ren immer an die Prim&#228;rquelle.</p>


        <!-- ==================== SEITE 8 ==================== -->

        <span class="section-label">Seite 8 &middot; Zum Mitnehmen</span>
        <div class="golden-rule">
          <h2>Sechs Fragen an jede &#8222;Platz eins&#8220;-Meldung</h2>
          <ol>
            <li>Wer hat die Studie bezahlt oder organisiert?</li>
            <li>Wer hat die Fragen gestellt, und stammen sie aus dem Produkt eines Anbieters?</li>
            <li>Wann wurde getestet, und mit welcher Version?</li>
            <li>&#220;ber die App oder &#252;ber die Schnittstelle?</li>
            <li>Ist der Abstand statistisch belastbar, oder liegen die Pl&#228;tze im Rauschen?</li>
            <li>Begutachtet oder Preprint?</li>
          </ol>
        </div>

        <h2>Zwei Paper weiter</h2>
        <p>Jede Rangliste in diesem Guide ist eine Momentaufnahme. Auf dem &#246;ffentlichen NOHARM-Leaderboard liegt das neueste Meta-Modell (Muse Spark 1.1) inzwischen gleichauf mit Glass Health, und die Anbieter testen neue Versionen im Monatsrhythmus nach. Deshalb lohnt es sich, weniger auf den aktuellen Platz zu schauen als darauf, was gemessen wurde. Wenn eine Studie zur Physiotherapie erscheint, erg&#228;nzen wir sie hier.</p>


        <!-- ==================== QUELLEN ==================== -->

        <h2>Quellen</h2>
        <p>Alle Studien dieses Guides mit Link zum Original.</p>

        <div class="source-item"><span class="source-num">1</span>Artsi, Y., et al. (2026). OpenEvidence clinical question-answering platform: Systematic review of early evaluations. <i>npj Digital Medicine</i>. <a href="https://doi.org/10.1038/s41746-026-03077-4" target="_blank" rel="noopener">doi.org/10.1038/s41746-026-03077-4</a></div>
        <div class="source-item"><span class="source-num">2</span>Bragg, J., et al. (2025). <i>AstaBench: Rigorous benchmarking of AI agents with a scientific research suite</i> [Preprint]. arXiv. <a href="https://doi.org/10.48550/arXiv.2510.21652" target="_blank" rel="noopener">doi.org/10.48550/arXiv.2510.21652</a></div>
        <div class="source-item"><span class="source-num">3</span>Cao, W., et al. (2026). Benchmarking large language models against human experts in rehabilitation medicine. <i>Journal of NeuroEngineering and Rehabilitation, 23</i>, 84. <a href="https://doi.org/10.1186/s12984-026-01903-0" target="_blank" rel="noopener">doi.org/10.1186/s12984-026-01903-0</a></div>
        <div class="source-item"><span class="source-num">4</span>Carrier, R., et al. (2026). Evaluating the utility of artificial intelligence in conducting systematic reviews. <i>Arthroplasty Today, 39</i>, 102035. <a href="https://doi.org/10.1016/j.artd.2026.102035" target="_blank" rel="noopener">doi.org/10.1016/j.artd.2026.102035</a></div>
        <div class="source-item"><span class="source-num">5</span>Di Febo, R., et al. (2026). Comparative evaluation of artificial intelligence-assisted literature search tools for identifying clinically meaningful evidence in cardiology. <i>European Heart Journal - Digital Health, 7</i>(7), ztag125. <a href="https://doi.org/10.1093/ehjdh/ztag125" target="_blank" rel="noopener">doi.org/10.1093/ehjdh/ztag125</a></div>
        <div class="source-item"><span class="source-num">6</span>Eldaneen, M., et al. (2026). Performance of ChatGPT, Claude, and AMBOSS on the European Board of Urology In-Service Assessment and alignment with the European Association of Urology 2025 guidelines: Comparative study. <i>JMIR Formative Research, 10</i>, e100148. <a href="https://doi.org/10.2196/100148" target="_blank" rel="noopener">doi.org/10.2196/100148</a></div>
        <div class="source-item"><span class="source-num">7</span>Feng, J., Patel, V., Heagerty, P., Mai, Y., Sivaraman, V., Vossler, P., Ouyang, J., &amp; Jena, A. B. (2026). <i>Expert evaluation of clinical AI tools on real point-of-care clinical queries</i> [Preprint]. arXiv. <a href="https://doi.org/10.48550/arXiv.2606.28960" target="_blank" rel="noopener">doi.org/10.48550/arXiv.2606.28960</a></div>
        <div class="source-item"><span class="source-num">8</span>Freudenberg, J., et al. (2026). AI-enabled clinical decision support in breast cancer care: A blinded multicenter benchmarking study comparing medically specialized with a general-purpose system. <i>Journal of Medical Systems</i>. <a href="https://doi.org/10.1007/s10916-026-02434-w" target="_blank" rel="noopener">doi.org/10.1007/s10916-026-02434-w</a></div>
        <div class="source-item"><span class="source-num">9</span>Hamrin Senorski, E., et al. (2026). GPT-4 outperforms junior expert physical therapists in sports medicine rehabilitation: An evaluation of AI response quality and adaptiveness. <i>Frontiers in Rehabilitation Sciences, 7</i>, 1853016. <a href="https://doi.org/10.3389/fresc.2026.1853016" target="_blank" rel="noopener">doi.org/10.3389/fresc.2026.1853016</a></div>
        <div class="source-item"><span class="source-num">10</span>He, T., et al. (2026). The AI recommendation paradox: A systematic review evaluating the promise, peril, and path forward for large language models in exercise recommendation. <i>Biology of Sport, 43</i>, 949&#8211;961. <a href="https://doi.org/10.5114/biolsport.2026.158676" target="_blank" rel="noopener">doi.org/10.5114/biolsport.2026.158676</a></div>
        <div class="source-item"><span class="source-num">11</span>Kremer, P., et al. (2026). Diagnostic performance of Prof. Valmed, ChatGPT-5 Thinking, and OpenEvidence in rheumatology: A comparative evaluation. <i>Rheumatology International, 46</i>(1), 31. <a href="https://doi.org/10.1007/s00296-025-06068-y" target="_blank" rel="noopener">doi.org/10.1007/s00296-025-06068-y</a></div>
        <div class="source-item"><span class="source-num">12</span>Krump, P., et al. (2026). <i>Evaluating eight retrieval-augmented generation (RAG) large language models' responses to clinical questions: A comparative study</i> [Preprint]. medRxiv. <a href="https://doi.org/10.64898/2026.08.10.26360108" target="_blank" rel="noopener">doi.org/10.64898/2026.08.10.26360108</a></div>
        <div class="source-item"><span class="source-num">13</span>Labenbacher, S., et al. (2026). Performance of AI tools in citing retracted literature: Content analysis. <i>Journal of Medical Internet Research, 28</i>, e88766. <a href="https://doi.org/10.2196/88766" target="_blank" rel="noopener">doi.org/10.2196/88766</a></div>
        <div class="source-item"><span class="source-num">14</span>Lau, O., &amp; Golder, S. (2025). Comparison of Elicit AI and traditional literature searching in evidence syntheses using four case studies. <i>Cochrane Evidence Synthesis and Methods, 3</i>(6), e70050. <a href="https://doi.org/10.1002/cesm.70050" target="_blank" rel="noopener">doi.org/10.1002/cesm.70050</a></div>
        <div class="source-item"><span class="source-num">15</span>Ma, Z., et al. (2026). Performance of DeepSeek V3.2 and ChatGPT 5.1 in musculoskeletal triage and differential diagnosis of outpatients with low back pain: Multidimensional comparative study. <i>Journal of Medical Internet Research, 28</i>, e92315. <a href="https://doi.org/10.2196/92315" target="_blank" rel="noopener">doi.org/10.2196/92315</a></div>
        <div class="source-item"><span class="source-num">16</span>McLaughlin, N. D., et al. (2026). Large language model hallucinations in spine surgery: A comparative analysis of clinician vs patient-level prompts. <i>Neurosurgery Practice, 7</i>(3), e000244. <a href="https://doi.org/10.1227/neuprac.0000000000000244" target="_blank" rel="noopener">doi.org/10.1227/neuprac.0000000000000244</a></div>
        <div class="source-item"><span class="source-num">17</span>Meliante, L. A., et al. (2025). Evaluation of AI tools versus the PRISMA method for literature search, data extraction, and study composition in glaucoma systematic reviews. <i>JMIR AI, 4</i>, e68592. <a href="https://doi.org/10.2196/68592" target="_blank" rel="noopener">doi.org/10.2196/68592</a></div>
        <div class="source-item"><span class="source-num">18</span>&#350;eng&#252;l, H. B., et al. (2026). Deep research capabilities in GPT-5 Thinking and Gemini 2.5 Pro improve citation integrity and concordance with American Academy of Orthopaedic Surgeons anterior cruciate ligament and rotator cuff guidelines. <i>Knee Surgery, Sports Traumatology, Arthroscopy, 34</i>(4), 1504&#8211;1512. <a href="https://doi.org/10.1002/ksa.70315" target="_blank" rel="noopener">doi.org/10.1002/ksa.70315</a></div>
        <div class="source-item"><span class="source-num">19</span>Solomon, T. P. J., &amp; Laye, M. J. (2025). The sports nutrition knowledge of large language model (LLM) artificial intelligence (AI) chatbots: An assessment of accuracy, completeness, clarity, quality of evidence, and test-retest reliability. <i>PLOS ONE, 20</i>(6), e0325982. <a href="https://doi.org/10.1371/journal.pone.0325982" target="_blank" rel="noopener">doi.org/10.1371/journal.pone.0325982</a></div>
        <div class="source-item"><span class="source-num">20</span>Sun, H., et al. (2026). Evaluating sports nutrition advice provided by general-purpose large language models for recreational female marathon runners: A multidimensional descriptive audit. <i>Frontiers in Nutrition, 13</i>, 1902377. <a href="https://doi.org/10.3389/fnut.2026.1902377" target="_blank" rel="noopener">doi.org/10.3389/fnut.2026.1902377</a></div>
        <div class="source-item"><span class="source-num">21</span>Vishwanath, K., Alyakin, A., Ghosh, M., Hage, A., Neifert, S., Orillac, C., Mandelberg, N., Khan, H., Lee, J., Yao, J., Small, W., Varma, A., Hewitt, D., Aphinyanaphongs, Y., Alber, D., &amp; Oermann, E. K. (2026). General-purpose large language models outperform specialized clinical AI tools on medical benchmarks. <i>Nature Medicine, 32</i>(7), 2405&#8211;2409. <a href="https://doi.org/10.1038/s41591-026-04431-5" target="_blank" rel="noopener">doi.org/10.1038/s41591-026-04431-5</a></div>
        <div class="source-item"><span class="source-num">22</span>Wu, D., Nateghi Haredasht, F., Kumar Maharaj, S., Jain, P., Tran, J., Gwiazdon, M., et al. (2026). <i>First, do NOHARM: A medical safety benchmark and randomized study of physician and AI teaming on clinical consultations</i> (Version 4) [Preprint]. arXiv. <a href="https://doi.org/10.48550/arXiv.2512.01241" target="_blank" rel="noopener">doi.org/10.48550/arXiv.2512.01241</a></div>

        <h3>Presse und Herstellerangaben</h3>
        <div class="source-item">AMBOSS Newsroom: &#8222;Ranked #1 in Stanford&#8211;Harvard NOHARM Study for clinical care safety&#8220;. <a href="https://www.amboss.com/de/news/noharm-study" target="_blank" rel="noopener">amboss.com/de/news/noharm-study</a></div>
        <div class="source-item">Doximity (2026, 15. Juli). Doximity outranks OpenEvidence, frontier models in independent Stanford-Harvard study of clinical AI safety [Pressemitteilung]. <a href="https://www.businesswire.com/news/home/20260715030379/en/" target="_blank" rel="noopener">businesswire.com</a></div>
        <div class="source-item">Lazarus, L. M. (2026, 29. Juli). A new medical AI study found the same flaw in OpenEvidence, OpenAI, Anthropic, and Doximity. <i>Fortune</i>. <a href="https://fortune.com/2026/07/29/new-medical-ai-study-same-flaw-openevidence-openai-anthropic-doximity/" target="_blank" rel="noopener">fortune.com</a></div>
        <div class="source-item">ARISE: NOHARM-Leaderboard (Preview, abgerufen am 23.10.2026). <a href="https://www.arise-ai.org/mast/technical" target="_blank" rel="noopener">arise-ai.org/mast/technical</a></div>

        <p class="ai-note">Erstellt mit KI-Unterst&#252;tzung (Recherche und Entwurf). Alle Studien wurden gegen Crossref, OpenAlex bzw. arXiv gepr&#252;ft, die NOHARM-Zahlen am Volltext.</p>

        <div class="footer">
          Mehr Interesse? <a href="/pages/erstgesprach">Kostenloses Erstgespr&#228;ch &rarr;</a><br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &middot; KI-Tools f&#252;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-medizin-ki', OxGuideMedizinKi);
