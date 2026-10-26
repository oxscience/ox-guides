class OxGuideKiPaper extends HTMLElement {
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
  --blue-light:#60a5fa;--blue-muted:#94a3b8;
  --blue-bg:#0a1628;--blue-border:#1e3a5f;
  --green-bg:#064e3b;--green-text:#6ee7b7;
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

h1{font-family:var(--ox-font-title,Charter,"Bitstream Charter","Charis SIL",Georgia,serif);font-size:28px;font-weight:700;color:var(--white);margin-bottom:8px;letter-spacing:-0.02em;line-height:1.3}
.meta{color:var(--text-muted);font-size:13.6px;margin-bottom:40px}
.intro{color:var(--text-secondary);margin-bottom:24px;font-size:15.2px}

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

.callout{
  background:var(--surface-alt);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;
}
.callout strong{color:var(--white)}

/* Paper-Karten */
.paper-card{background:var(--surface);border:1px solid #26262c;border-radius:10px;padding:22px 24px;margin:18px 0}
.paper-header{display:flex;align-items:flex-start;margin-bottom:14px}
.paper-badge{display:inline-flex;align-items:center;justify-content:center;background:var(--primary);color:#0f0f11;font-weight:700;width:34px;height:34px;border-radius:9px;font-size:15px;margin-right:14px;flex-shrink:0}
.paper-titleline{display:flex;flex-direction:column}
.paper-name{font-size:16.8px;font-weight:600;color:var(--white);line-height:1.35}
.paper-author{font-size:13.6px;color:var(--text-muted);margin-top:3px}
.paper-card p{font-size:14.8px;margin-bottom:12px}
.paper-card p:last-child{margin-bottom:0}

/* Zitat-Block (Originalquelle) */
.cite{background:var(--surface-alt);border-left:3px solid var(--border-accent);border-radius:0 6px 6px 0;padding:10px 14px;margin:0 0 16px;font-size:12.8px;color:var(--text-secondary);line-height:1.55}
.cite .cite-label{display:block;font-size:10.4px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:3px}
.cite i{color:var(--white-soft);font-style:italic}
.cite a{color:var(--primary-light);word-break:break-word}

/* "Tiefer gegraben" - Bernstein-Akzent zur Abgrenzung */
.deeper{background:#1a1505;border:1px solid #4a3a14;border-radius:8px;padding:13px 18px;margin:16px 0 0;font-size:13.6px;color:#cbb98f;line-height:1.7}
.deeper strong{color:#fbbf24}

/* Timeline-Rueckblick */
.timeline{margin:16px 0 8px;border-left:2px solid #26262c}
.tl-row{display:flex;align-items:baseline;padding:7px 0 7px 22px;position:relative;font-size:14.4px}
.tl-row::before{content:"";position:absolute;left:-5px;top:14px;width:8px;height:8px;border-radius:50%;background:var(--primary)}
.tl-year{color:var(--primary-light);font-weight:600;width:64px;flex-shrink:0;font-family:var(--mono);font-size:13px}
.tl-label{color:var(--text-secondary)}
.tl-label strong{color:var(--white-soft);font-weight:600}

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
  .paper-header{flex-wrap:nowrap}
  .tl-year{width:54px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Die 10 Paper, die KI m&ouml;glich gemacht haben</h1>
        <div class="meta">6-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">1936 stellte der 24-j&auml;hrige Alan Turing eine theoretisch wirkende Frage: L&auml;sst sich jedes mathematische Problem von einem Algorithmus l&ouml;sen? Seine Antwort war ein Nein, und um sie zu beweisen, erfand er fast nebenbei den Computer. Was danach kam, war eine hundertj&auml;hrige Kettenreaktion, bei der jede Arbeit ein Problem l&ouml;ste, das die n&auml;chste erst m&ouml;glich machte. Dieser Guide nimmt die zehn Paper auseinander, auf denen die heutige KI steht, von Turings Maschine bis zum Modell hinter ChatGPT.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1 &middot; 1936&ndash;1948</span>
        <h2>Das Fundament</h2>

        <h3>1.1 Die Maschine wird erfunden</h3>
        <p>Alles beginnt mit einer Frage aus der reinen Mathematik. Am Ende steht die Blaupause f&uuml;r jeden Computer, den wir heute besitzen.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">1</span>
            <div class="paper-titleline">
              <span class="paper-name">&Uuml;ber berechenbare Zahlen</span>
              <span class="paper-author">Alan Turing &middot; 1936</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Turing, A. M. (1936/37). On computable numbers, with an application to the Entscheidungsproblem. <i>Proceedings of the London Mathematical Society, s2-42</i>(1), 230&ndash;265. <a href="https://doi.org/10.1112/plms/s2-42.1.230" target="_blank" rel="noopener">doi.org/10.1112/plms/s2-42.1.230</a>
          </div>
          <p>Der Mathematiker David Hilbert hatte der Wissenschaft eine Hausaufgabe gestellt, das sogenannte Entscheidungsproblem: Gibt es ein allgemeines Verfahren, das f&uuml;r jede mathematische Aussage automatisch entscheidet, ob sie wahr ist? Um das zu beantworten, brauchte Turing zuerst eine saubere Definition davon, was &bdquo;ein Verfahren&ldquo; eigentlich ist. Er dachte sich dazu eine gedankliche Maschine aus: ein unendlich langes Band, einen Schreib-Lese-Kopf und eine kleine Tabelle von Regeln. Diese Turing-Maschine ist bis heute das abstrakte Modell f&uuml;r jeden Computer.</p>
          <p>Damit zeigte Turing zweierlei. Erstens l&auml;sst sich eine universelle Maschine bauen, die jede andere nachahmen kann. Das ist im Kern die Idee des programmierbaren Computers. Zweitens gibt es Probleme, die keine Maschine l&ouml;sen kann, etwa die Frage, ob ein beliebiges Programm irgendwann anh&auml;lt oder ewig weiterl&auml;uft. Die Mathematik hat also harte Grenzen, und Turing hat sie als Erster bewiesen.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Den Begriff &bdquo;Turing-Maschine&ldquo; hat Turing selbst nie benutzt &mdash; er sprach von einer <i>a-machine</i>. Gepr&auml;gt hat den Namen Alonzo Church, der das Entscheidungsproblem wenige Monate fr&uuml;her mit einem ganz anderen Ansatz gel&ouml;st hatte. Turings eigentlicher Beitrag war das anschauliche Maschinenmodell, nicht die Erstl&ouml;sung. Auch das ber&uuml;hmte &bdquo;Halteproblem&ldquo; steht in dieser Form nicht im Paper; die Formulierung stammt aus sp&auml;teren Lehrb&uuml;chern.
          </div>
        </div>

        <h3>1.2 Information wird messbar</h3>
        <p>Zw&ouml;lf Jahre sp&auml;ter gibt ein Ingenieur der Information eine Einheit und legt damit unbeabsichtigt die Grundlage f&uuml;r das, was Sprachmodelle heute tun.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">2</span>
            <div class="paper-titleline">
              <span class="paper-name">Eine mathematische Theorie der Kommunikation</span>
              <span class="paper-author">Claude Shannon &middot; 1948</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Shannon, C. E. (1948). A mathematical theory of communication. <i>The Bell System Technical Journal, 27</i>(3), 379&ndash;423; 27(4), 623&ndash;656. <a href="https://doi.org/10.1002/j.1538-7305.1948.tb01338.x" target="_blank" rel="noopener">doi.org/10.1002/j.1538-7305.1948.tb01338.x</a>
          </div>
          <p>Claude Shannon stellte eine ebenso grundlegende Frage: Was ist Information eigentlich, wenn man sie messen will? Seine Antwort trennt Information radikal von Bedeutung. F&uuml;r die &Uuml;bertragung ist es egal, ob eine Nachricht &bdquo;Ich liebe dich&ldquo; oder &bdquo;Die Katze brennt&ldquo; lautet. Entscheidend ist nur, wie &uuml;berraschend sie ist. Diese &Uuml;berraschung misst Shannon in einer neuen Einheit, dem Bit, und er zeigt, dass sich jede Nachricht im Prinzip auf eine Folge von Einsen und Nullen herunterbrechen l&auml;sst.</p>
          <p>Um zu berechnen, wie viel Information eine Quelle liefert, lieh er sich einen Begriff aus der Thermodynamik: die Entropie. Sie beschreibt, wie unvorhersehbar das n&auml;chste Zeichen ist. Um die Entropie der englischen Sprache abzusch&auml;tzen, lie&szlig; Shannon Menschen den jeweils n&auml;chsten Buchstaben raten: leicht zu erraten bedeutet niedrige Entropie, schwer zu erraten hohe. Genau dieses Raten des n&auml;chsten Zeichens ist im Kern das, was ein Sprachmodell heute tut, nur in gewaltigem Ma&szlig;stab.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Das Wort &bdquo;Bit&ldquo; hat nicht Shannon erfunden &mdash; er schreibt es im Paper ausdr&uuml;cklich seinem Kollegen John W. Tukey zu. Wichtiger noch: Shannons Entropie misst Unsicherheit, nicht Wissen oder Bedeutung. Die Semantik einer Nachricht schlie&szlig;t er sogar ausdr&uuml;cklich aus dem Problem aus. Dass dieselbe Mathematik (die Cross-Entropy) heute als Verlustfunktion beim Training neuronaler Netze dient, ist die eigentliche Br&uuml;cke zur KI, und der Grund, warum Anthropic sein Modell Claude genannt hat.
          </div>
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2 &middot; 1958&ndash;1969</span>
        <h2>Das k&uuml;nstliche Neuron und der erste KI-Winter</h2>

        <h3>2.1 Die erste lernende Maschine</h3>
        <p>Ausgerechnet ein Psychologe baut die erste Maschine, die sich aus Beispielen selbst verbessert &mdash; der Urahn jedes k&uuml;nstlichen Neurons.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">3</span>
            <div class="paper-titleline">
              <span class="paper-name">Das Perzeptron</span>
              <span class="paper-author">Frank Rosenblatt &middot; 1958</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. <i>Psychological Review, 65</i>(6), 386&ndash;408. <a href="https://doi.org/10.1037/h0042519" target="_blank" rel="noopener">doi.org/10.1037/h0042519</a>
          </div>
          <p>Die erste Maschine, die wirklich lernt, baute 1958 ein Psychologe an der Cornell University: Frank Rosenblatt. Er lie&szlig; sich von echten Nervenzellen inspirieren und entwarf das Perzeptron: Es nimmt mehrere Eingangssignale, gewichtet sie, summiert sie auf und entscheidet anhand einer Schwelle, zu welcher Klasse ein Muster geh&ouml;rt. Der Clou ist die Lernregel: Liegt die Maschine falsch, passt sie ihre Gewichte ein St&uuml;ck weit an und probiert es erneut, bis sie die Klassen sauber trennt.</p>
          <p>Damit war zum ersten Mal das Grundprinzip da, das alle heutigen neuronalen Netze tragen: ein k&uuml;nstliches Neuron, das aus Daten lernt, statt von Hand programmiert zu werden. Die Begeisterung war entsprechend gro&szlig;. Die US-Marine finanzierte das Projekt, und die New York Times schrieb, der Computer werde bald laufen, sprechen und sich seiner selbst bewusst sein.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Die ber&uuml;hmte Schlagzeile stammt aus einer Pressekonferenz der Marine und war schon damals ma&szlig;los &uuml;bertrieben. Sie wird heute oft Rosenblatt als Naivit&auml;t angelastet, war aber vor allem PR. Und das Perzeptron war nicht so beschr&auml;nkt, wie es die sp&auml;tere Kritik darstellte: Rosenblatt beschrieb mehrschichtige Varianten bereits 1961 in seinem Buch <i>Principles of Neurodynamics</i>. Die Verk&uuml;rzung auf &bdquo;konnte nur linear trennen&ldquo; kam erst hinterher.
          </div>
        </div>

        <h3>2.2 Der Beweis, der die F&ouml;rderung stoppte</h3>
        <p>Zwei MIT-Forscher zeigen mit sauberer Mathematik die Grenzen des Perzeptrons. Das l&ouml;st einen jahrelangen Stillstand aus.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">4</span>
            <div class="paper-titleline">
              <span class="paper-name">Perceptrons (Buch)</span>
              <span class="paper-author">Marvin Minsky &amp; Seymour Papert &middot; 1969</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Minsky, M., &amp; Papert, S. (1969). <i>Perceptrons: An introduction to computational geometry</i>. MIT Press. (erweiterte Ausgabe 1988)
          </div>
          <p>Elf Jahre sp&auml;ter lieferten zwei Forscher am MIT die Ern&uuml;chterung. Marvin Minsky und Seymour Papert bewiesen mit sauberer Mathematik, dass ein einschichtiges Perzeptron eine erstaunlich einfache Funktion nicht lernen kann: das exklusive Oder (XOR), also &bdquo;entweder das eine oder das andere, aber nicht beides&ldquo;. Ihr Buch wirkte wie ein Todesurteil f&uuml;r die junge Disziplin. Die F&ouml;rderung versiegte, und die neuronalen Netze verschwanden f&uuml;r Jahre in einem ersten &bdquo;KI-Winter&ldquo;.</p>
          <p>In den Fu&szlig;noten steckte allerdings schon die L&ouml;sung. Minsky und Papert hielten fest, dass sich das Problem aufl&ouml;st, sobald man mehrere Schichten von Perzeptronen stapelt. Das einzige Hindernis: Niemand wusste damals, wie man so einen Stapel trainiert. Diese L&uuml;cke zu schlie&szlig;en sollte noch siebzehn Jahre dauern.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Dass dieses Buch &bdquo;die neuronalen Netze f&uuml;r tot erkl&auml;rt&ldquo; habe, ist eine nachtr&auml;gliche Zuspitzung. Bewiesen wurde eine eng begrenzte Aussage &uuml;ber einschichtige Netze; die Community machte daraus eine Generalabsage. Minsky und Papert selbst f&uuml;hrten den R&uuml;ckgang der Forschung weniger auf ihr Buch zur&uuml;ck als auf ein ungel&ouml;stes Grundproblem: Es gab schlicht keine Lernregel f&uuml;r tiefe Netze.
          </div>
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3 &middot; 1978&ndash;1986</span>
        <h2>Zusammenarbeit und tiefe Netze</h2>

        <h3>3.1 Viele Rechner, eine Ordnung</h3>
        <p>Bevor neuronale Netze im gro&szlig;en Stil rechnen k&ouml;nnen, muss ein ganz anderes Problem gel&ouml;st werden: Wie bringt man tausende Computer dazu, sich zu einigen?</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">5</span>
            <div class="paper-titleline">
              <span class="paper-name">Zeit, Uhren und die Ordnung von Ereignissen</span>
              <span class="paper-author">Leslie Lamport &middot; 1978</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Lamport, L. (1978). Time, clocks, and the ordering of events in a distributed system. <i>Communications of the ACM, 21</i>(7), 558&ndash;565. <a href="https://doi.org/10.1145/359545.359563" target="_blank" rel="noopener">doi.org/10.1145/359545.359563</a>
          </div>
          <p>Leslie Lamport erkannte 1978, dass getrennte Rechner ohne gemeinsame Uhr keine objektive &bdquo;jetzige&ldquo; Zeit haben: Sie k&ouml;nnen sich nicht darauf einigen, welches von zwei Ereignissen zuerst passiert ist. Seine L&ouml;sung war, die Wanduhr ganz zu ignorieren und Ereignisse stattdessen nach Ursache und Wirkung zu ordnen: Wenn A das Ereignis B ausgel&ouml;st haben k&ouml;nnte, kommt A zuerst.</p>
          <p>Aus dieser &bdquo;happened-before&ldquo;-Beziehung baute er logische Uhren, mit denen beliebig viele Maschinen konsistent zusammenarbeiten, ohne je auf eine echte Uhr zu schauen. Diese Idee wurde zur Grundlage f&uuml;r Datenbanken, Blockchains und gro&szlig;e KI-Trainingsl&auml;ufe, bei denen tausende Grafikkarten synchron bleiben m&uuml;ssen, ohne ins Chaos zu kippen.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Lamport selbst betont, dass die logischen Uhren gar nicht der eigentliche Kern sind. Sein wichtigster Punkt ist, dass eine kausal konsistente Ordnung es erlaubt, beliebige verteilte Systeme als replizierte Zustandsmaschine zu bauen, das Fundament sp&auml;terer Konsens-Verfahren wie Paxos und Raft. Die Inspiration kam &uuml;brigens aus der speziellen Relativit&auml;tstheorie, in der es ebenfalls keine absolute Gleichzeitigkeit gibt.
          </div>
        </div>

        <h3>3.2 Wie man einen Stapel von Schichten trainiert</h3>
        <p>Siebzehn Jahre nach dem KI-Winter beantwortet ein Trio die offene Frage, mit einem Verfahren, das bis heute jedes tiefe Netz antreibt.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">6</span>
            <div class="paper-titleline">
              <span class="paper-name">Repr&auml;sentationen durch Fehler-R&uuml;ckf&uuml;hrung lernen</span>
              <span class="paper-author">Rumelhart, Hinton &amp; Williams &middot; 1986</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Rumelhart, D. E., Hinton, G. E., &amp; Williams, R. J. (1986). Learning representations by back-propagating errors. <i>Nature, 323</i>(6088), 533&ndash;536. <a href="https://doi.org/10.1038/323533a0" target="_blank" rel="noopener">doi.org/10.1038/323533a0</a>
          </div>
          <p>Siebzehn Jahre nachdem die neuronalen Netze f&uuml;r erledigt galten, beantworteten drei Forscher &mdash; darunter der sp&auml;tere &bdquo;Godfather&ldquo; Geoffrey Hinton &mdash; die offene Frage: Wie trainiert man einen Stapel von Schichten? Die Antwort hei&szlig;t Backpropagation. Man schickt die Daten vorw&auml;rts durchs Netz, misst am Ende, wie falsch das Ergebnis ist, und schiebt diesen Fehler mithilfe der Kettenregel aus der Differentialrechnung Schicht f&uuml;r Schicht wieder zur&uuml;ck. Jedes Gewicht wird dabei ein kleines St&uuml;ck in die richtige Richtung korrigiert.</p>
          <p>Wiederholt man das einige Millionen Mal, bringt sich das Netz die Aufgabe selbst bei. Das Bemerkenswerte: Die verborgenen mittleren Schichten beginnen, eigene Merkmale zu erfinden: Kanten, Formen, Begriffe, die ihnen niemand vorgegeben hat. Das XOR-Problem, an dem die Perzeptronen 1969 scheiterten, wird damit trivial.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Rumelhart, Hinton und Williams haben Backpropagation nicht erfunden, sondern bekannt gemacht. Der mathematische Kern wurde schon 1970 von Seppo Linnainmaa beschrieben, und Paul Werbos wandte ihn 1974 in seiner Dissertation auf neuronale Netze an. Das Paper r&auml;umt zudem eine Schw&auml;che ein, die selten erw&auml;hnt wird: Das Verfahren kann in lokalen Minima h&auml;ngenbleiben und findet nicht garantiert die beste L&ouml;sung.
          </div>
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4 &middot; 1998&ndash;2012</span>
        <h2>Daten und der Durchbruch</h2>

        <h3>4.1 Der gr&ouml;&szlig;te Textberg der Menschheit</h3>
        <p>Backpropagation funktioniert, aber den Netzen fehlen Daten und Rechenleistung. Das Internet liefert beides, und eine Suchmaschine macht den Anfang.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">7</span>
            <div class="paper-titleline">
              <span class="paper-name">Die Anatomie einer gro&szlig;en Web-Suchmaschine</span>
              <span class="paper-author">Sergey Brin &amp; Lawrence Page &middot; 1998</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Brin, S., &amp; Page, L. (1998). The anatomy of a large-scale hypertextual web search engine. <i>Computer Networks and ISDN Systems, 30</i>(1&ndash;7), 107&ndash;117. <a href="https://doi.org/10.1016/S0169-7552(98)00110-X" target="_blank" rel="noopener">doi.org/10.1016/S0169-7552(98)00110-X</a>
          </div>
          <p>1998 beschrieben zwei Doktoranden in Stanford den Prototyp einer Suchmaschine, die Webseiten nicht mehr danach bewertet, wie oft ein Wort vorkommt, sondern wer auf sie verlinkt. Jeder Link z&auml;hlt als Stimme, und jede Stimme wird danach gewichtet, wie vertrauensw&uuml;rdig der Absender selbst ist. Dieser Algorithmus hei&szlig;t PageRank.</p>
          <p>Aus dem Prototyp wurde eine Firma namens Google. Wichtiger f&uuml;r die KI-Geschichte ist aber ein Nebeneffekt: Indem Google das Web durchsuchbar machte, entstand die gr&ouml;&szlig;te strukturierte Sammlung menschlichen Texts, die es je gab. Genau dieser Textberg wurde sp&auml;ter zum Treibstoff f&uuml;r das Training gro&szlig;er Sprachmodelle.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> PageRank war weder die einzige Idee des Papers noch v&ouml;llig neu. Die Grundidee, Wichtigkeit aus Verweisen abzuleiten, stammt aus der Bibliometrie, und Jon Kleinbergs konkurrierender HITS-Algorithmus entstand zeitgleich. Mindestens die H&auml;lfte der Arbeit dreht sich au&szlig;erdem ums n&uuml;chterne Engineering &mdash; Crawler, Index, Speicherkompression &mdash; und nicht um die elegante Formel, die popul&auml;re Darstellungen isoliert herausgreifen.
          </div>
        </div>

        <h3>4.2 Der Moment, in dem Deep Learning gewinnt</h3>
        <p>2012 kommt zusammen, was lange fehlte: ein riesiger Datensatz und bezahlbare Grafikkarten. Das Ergebnis ver&auml;ndert die Branche &uuml;ber Nacht.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">8</span>
            <div class="paper-titleline">
              <span class="paper-name">ImageNet-Klassifikation mit tiefen Faltungsnetzen</span>
              <span class="paper-author">Krizhevsky, Sutskever &amp; Hinton &middot; 2012</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Krizhevsky, A., Sutskever, I., &amp; Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. In <i>Advances in Neural Information Processing Systems 25</i> (S. 1097&ndash;1105). Curran Associates.
          </div>
          <p>Es gab ImageNet, einen riesigen Datensatz aus Millionen von Hand beschrifteten Fotos, und es gab bezahlbare Grafikkarten aus dem Gaming-Bereich. Ein Doktorand namens Alex Krizhevsky verdrahtete daraus ein tiefes Faltungsnetz, taufte es AlexNet und trainierte es in seinem Schlafzimmer. Beim j&auml;hrlichen ImageNet-Wettbewerb, bei dem Modelle Objekte auf Bildern erkennen m&uuml;ssen, lie&szlig; es die Konkurrenz weit hinter sich.</p>
          <p>W&auml;hrend sich alle anderen um Bruchteile eines Prozents stritten, senkte AlexNet die Fehlerrate in einem einzigen Jahr um rund zehn Prozentpunkte. Damit war auf einen Schlag klar: Deep Learning funktioniert wirklich, es braucht nur genug Daten, genug Rechenleistung und die richtige Architektur. Dieser eine Wettbewerb l&ouml;ste die ganze Investitionswelle aus, die wir bis heute erleben.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Die Idee des Faltungsnetzes war nicht neu: Yann LeCun hatte sie Ende der 1980er mit <i>LeNet</i> zur Ziffernerkennung gebaut, und Fukushimas Neocognitron reicht bis 1980 zur&uuml;ck. AlexNets Durchbruch lag in der Skalierung und in Trainings-Tricks wie der ReLU-Aktivierung und Dropout. Dass das Netz auf zwei Grafikkarten aufgeteilt wurde, war zudem keine elegante Designentscheidung, sondern eine Notl&ouml;sung wegen knappen Speichers.
          </div>
        </div>


        <!-- ==================== SEITE 5 ==================== -->

        <span class="section-label">Seite 5 &middot; 2017&ndash;2020</span>
        <h2>Die Transformer-&Auml;ra</h2>

        <h3>5.1 Das &bdquo;T&ldquo; in GPT</h3>
        <p>Eine neue Architektur l&ouml;st das Ged&auml;chtnisproblem der Sprachmodelle. Sie wird zur Grundlage praktisch jeder modernen KI.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">9</span>
            <div class="paper-titleline">
              <span class="paper-name">Attention Is All You Need</span>
              <span class="paper-author">Vaswani et al. (Google) &middot; 2017</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, &#321;., &amp; Polosukhin, I. (2017). Attention is all you need. In <i>Advances in Neural Information Processing Systems 30</i> (S. 5998&ndash;6008). <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">arxiv.org/abs/1706.03762</a>
          </div>
          <p>Gro&szlig;e Sprachmodelle hatten lange ein Ged&auml;chtnisproblem: Sie lasen einen Satz Wort f&uuml;r Wort und hatten am Ende oft vergessen, worum es am Anfang ging. 2017 l&ouml;ste ein Team bei Google das mit einer neuen Architektur, dem Transformer. Statt einen Text streng der Reihe nach zu lesen, l&auml;sst der Transformer jedes Wort gleichzeitig auf jedes andere schauen und selbst entscheiden, was gerade relevant ist. Dieser Mechanismus hei&szlig;t Self-Attention.</p>
          <p>Das macht Modelle treffsicherer und hat einen zweiten Vorteil: Weil die W&ouml;rter unabh&auml;ngig voneinander verarbeitet werden, l&auml;sst sich ein Transformer auf vielen Grafikkarten gleichzeitig trainieren. Google gab die Architektur frei, und heute baut praktisch jedes KI-Labor darauf auf. Das &bdquo;T&ldquo; in GPT steht genau daf&uuml;r: Transformer.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> Der Aufmerksamkeitsmechanismus stammt nicht aus diesem Paper: Dzmitry Bahdanau und Yoshua Bengio f&uuml;hrten ihn 2014 f&uuml;r die maschinelle &Uuml;bersetzung ein. Neu war die Pointe &bdquo;Attention ohne wiederkehrende Netze&ldquo;, auf die der zugespitzte Titel anspielt. Au&szlig;erdem war der Transformer zun&auml;chst ein reines &Uuml;bersetzungsmodell; die generative Nutzung als Chatbot kam erst sp&auml;ter durch andere Teams.
          </div>
        </div>

        <h3>5.2 Den Regler auf Maximum</h3>
        <p>Was passiert, wenn man den Transformer einfach gigantisch macht? OpenAI probiert es aus und l&ouml;st damit die aktuelle KI-Welle aus.</p>

        <div class="paper-card">
          <div class="paper-header">
            <span class="paper-badge">10</span>
            <div class="paper-titleline">
              <span class="paper-name">Sprachmodelle sind Few-Shot-Lerner</span>
              <span class="paper-author">Brown et al. (OpenAI) &middot; 2020</span>
            </div>
          </div>
          <div class="cite">
            <span class="cite-label">Originalquelle</span>
            Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., &hellip; Amodei, D. (2020). Language models are few-shot learners. In <i>Advances in Neural Information Processing Systems 33</i> (S. 1877&ndash;1901). <a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener">arxiv.org/abs/2005.14165</a>
          </div>
          <p>2020 stellte OpenAI eine fast trotzige Frage: Was passiert, wenn wir den Transformer einfach gigantisch machen? Nicht doppelt so gro&szlig;, sondern auf 175 Milliarden Parameter aufgeblasen und mit gro&szlig;en Teilen des Internets gef&uuml;ttert. Das Ergebnis war GPT-3, gebaut auf der Wette, dass Intelligenz kein geheimer Algorithmus ist, den wir noch suchen, sondern ab einer bestimmten Gr&ouml;&szlig;e von selbst entsteht.</p>
          <p>Tats&auml;chlich konnte GPT-3 pl&ouml;tzlich &uuml;bersetzen, zusammenfassen und programmieren, ohne dass man ihm diese Aufgaben einzeln beigebracht hatte. Es gen&uuml;gten ein paar Beispiele direkt im Prompt. Zwei Jahre sp&auml;ter wurde aus dieser Arbeit ChatGPT. Und im Kern tut dieses Produkt genau das, was Claude Shannon 1948 beschrieb: Es sagt das n&auml;chste Wort voraus.</p>
          <div class="deeper">
            <strong>Tiefer gegraben:</strong> &bdquo;Few-shot&ldquo; hei&szlig;t w&ouml;rtlich &bdquo;mit wenigen Beispielen&ldquo;, und genau das ist der Punkt. GPT-3 bekommt einige Beispiele im Prompt gezeigt, aber seine Gewichte werden dabei nicht ver&auml;ndert; es &bdquo;lernt&ldquo; also nicht im eigentlichen Sinn. Ohne Beispiele (zero-shot) ist es deutlich schw&auml;cher. Das Paper benennt zudem offen die Schattenseiten, die popul&auml;re Erz&auml;hlungen auslassen: Schw&auml;chen beim logischen Schlie&szlig;en, enorme Trainingskosten und ein ganzer Abschnitt &uuml;ber Verzerrungen und Missbrauchspotenzial.
          </div>
        </div>


        <!-- ==================== SEITE 6 ==================== -->

        <span class="section-label">Seite 6 &middot; Synthese</span>
        <h2>Der rote Faden</h2>

        <h3>6.1 Hundert Jahre in einem Bild</h3>
        <p>Die zehn Paper ergeben zusammen eine erstaunlich gerade Linie. Jeder Schritt l&ouml;st das Problem, an dem der vorige Halt machte.</p>

        <div class="timeline">
          <div class="tl-row"><span class="tl-year">1936</span><span class="tl-label"><strong>Turing</strong> definiert die Maschine</span></div>
          <div class="tl-row"><span class="tl-year">1948</span><span class="tl-label"><strong>Shannon</strong> macht Information messbar</span></div>
          <div class="tl-row"><span class="tl-year">1958</span><span class="tl-label"><strong>Rosenblatt</strong> gibt ihr ein lernendes Neuron</span></div>
          <div class="tl-row"><span class="tl-year">1969</span><span class="tl-label"><strong>Minsky &amp; Papert</strong> zeigen dessen Grenzen</span></div>
          <div class="tl-row"><span class="tl-year">1978</span><span class="tl-label"><strong>Lamport</strong> bringt viele Rechner zusammen</span></div>
          <div class="tl-row"><span class="tl-year">1986</span><span class="tl-label"><strong>Backpropagation</strong> bringt der Tiefe das Lernen bei</span></div>
          <div class="tl-row"><span class="tl-year">1998</span><span class="tl-label"><strong>PageRank</strong> erschlie&szlig;t die Daten des Webs</span></div>
          <div class="tl-row"><span class="tl-year">2012</span><span class="tl-label"><strong>AlexNet</strong> beweist, dass Deep Learning funktioniert</span></div>
          <div class="tl-row"><span class="tl-year">2017</span><span class="tl-label"><strong>Transformer</strong> liefert die Architektur</span></div>
          <div class="tl-row"><span class="tl-year">2020</span><span class="tl-label"><strong>GPT-3</strong> dreht den Regler auf Maximum</span></div>
        </div>

        <p>Keine dieser Arbeiten zielte auf ChatGPT, und doch f&uuml;hrt jede einen Schritt n&auml;her heran. Auff&auml;llig ist auch, woher die Durchbr&uuml;che kamen: ein Psychologe baute das erste lernende Neuron, zwei Doktoranden im Wohnheim erschlossen die Daten, und ein einzelner Student trainierte AlexNet im Schlafzimmer.</p>

        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Fast jeder dieser Durchbr&uuml;che wirkte zu seiner Zeit nutzlos oder verfr&uuml;ht. Turings Maschine war reine Theorie, das Perzeptron galt zwischenzeitlich als Sackgasse, und niemand brauchte ein Modell, das blo&szlig; das n&auml;chste Wort err&auml;t.</p>
          <p style="margin-bottom:0">Wer die Grundlagen versteht, erkennt den n&auml;chsten Durchbruch oft fr&uuml;her als alle, die nur die Schlagzeile lesen. Genau deshalb lohnt sich der Blick ins Originalpaper statt nur in die schnelle Zusammenfassung.</p>
        </div>

        <h3>6.2 Die zehn Paper im &Uuml;berblick</h3>
        <p>Alle Quellen dieses Guides, mit Link zum Original. Acht der zehn Arbeiten sind frei zug&auml;nglich.</p>

        <div class="source-item"><span class="source-num">1</span>Turing, A. M. (1936/37). On computable numbers, with an application to the Entscheidungsproblem. <i>Proceedings of the London Mathematical Society, s2-42</i>(1), 230&ndash;265. <a href="https://doi.org/10.1112/plms/s2-42.1.230" target="_blank" rel="noopener">doi.org/10.1112/plms/s2-42.1.230</a></div>
        <div class="source-item"><span class="source-num">2</span>Shannon, C. E. (1948). A mathematical theory of communication. <i>The Bell System Technical Journal, 27</i>(3), 379&ndash;423; 27(4), 623&ndash;656. <a href="https://doi.org/10.1002/j.1538-7305.1948.tb01338.x" target="_blank" rel="noopener">doi.org/10.1002/j.1538-7305.1948.tb01338.x</a></div>
        <div class="source-item"><span class="source-num">3</span>Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. <i>Psychological Review, 65</i>(6), 386&ndash;408. <a href="https://doi.org/10.1037/h0042519" target="_blank" rel="noopener">doi.org/10.1037/h0042519</a></div>
        <div class="source-item"><span class="source-num">4</span>Minsky, M., &amp; Papert, S. (1969). <i>Perceptrons: An introduction to computational geometry</i>. MIT Press.</div>
        <div class="source-item"><span class="source-num">5</span>Lamport, L. (1978). Time, clocks, and the ordering of events in a distributed system. <i>Communications of the ACM, 21</i>(7), 558&ndash;565. <a href="https://doi.org/10.1145/359545.359563" target="_blank" rel="noopener">doi.org/10.1145/359545.359563</a></div>
        <div class="source-item"><span class="source-num">6</span>Rumelhart, D. E., Hinton, G. E., &amp; Williams, R. J. (1986). Learning representations by back-propagating errors. <i>Nature, 323</i>(6088), 533&ndash;536. <a href="https://doi.org/10.1038/323533a0" target="_blank" rel="noopener">doi.org/10.1038/323533a0</a></div>
        <div class="source-item"><span class="source-num">7</span>Brin, S., &amp; Page, L. (1998). The anatomy of a large-scale hypertextual web search engine. <i>Computer Networks and ISDN Systems, 30</i>(1&ndash;7), 107&ndash;117. <a href="https://doi.org/10.1016/S0169-7552(98)00110-X" target="_blank" rel="noopener">doi.org/10.1016/S0169-7552(98)00110-X</a></div>
        <div class="source-item"><span class="source-num">8</span>Krizhevsky, A., Sutskever, I., &amp; Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. In <i>Advances in Neural Information Processing Systems 25</i> (S. 1097&ndash;1105). Curran Associates.</div>
        <div class="source-item"><span class="source-num">9</span>Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, &#321;., &amp; Polosukhin, I. (2017). Attention is all you need. In <i>Advances in Neural Information Processing Systems 30</i> (S. 5998&ndash;6008). <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">arxiv.org/abs/1706.03762</a></div>
        <div class="source-item"><span class="source-num">10</span>Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., &hellip; Amodei, D. (2020). Language models are few-shot learners. In <i>Advances in Neural Information Processing Systems 33</i> (S. 1877&ndash;1901). <a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener">arxiv.org/abs/2005.14165</a></div>

        <div class="footer">
          Mehr Interesse? <a href="/pages/erstgesprach">Kostenloses Erstgespr&auml;ch &rarr;</a><br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-ki-paper', OxGuideKiPaper);
