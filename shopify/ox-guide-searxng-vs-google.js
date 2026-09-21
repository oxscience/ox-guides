class OxGuideSearxngVsGoogle extends HTMLElement {
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
  --green-text:#6ee7b7;--amber-text:#fbbf24;
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

code{background:var(--code-bg);color:var(--primary-light);padding:2.4px 6.4px;border-radius:4px;font-size:0.9em;font-family:var(--mono)}
pre{background:#111;border:1px solid #222;border-radius:8px;padding:16px 20px;margin:16px 0 24px;overflow-x:auto;font-size:13.6px;line-height:1.6;font-family:var(--mono);color:var(--primary-light);white-space:pre-wrap;word-wrap:break-word}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.section-label{display:inline-block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-top:48px;margin-bottom:0}
.section-label + h2{margin-top:4px}

.feature-card{background:var(--surface);border:1px solid #1e293b;border-radius:10px;padding:20px 24px;margin:24px 0}
.feature-number{display:inline-block;background:var(--primary);color:var(--white);font-weight:700;width:28px;height:28px;border-radius:50%;text-align:center;line-height:28px;font-size:13.6px;margin-right:8px}
.feature-name{font-size:17.6px;font-weight:600;color:var(--white)}
.feature-card p{margin-top:12px;margin-bottom:8px}
.use-case{color:var(--primary);font-weight:500;font-size:14.4px}

.callout{background:var(--surface-alt);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0}
.callout strong{color:var(--white)}

.highlight-box{background:var(--surface);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0}
.highlight-box strong{color:var(--white)}

.step-card{background:var(--surface);border:1px solid #1e293b;border-radius:10px;padding:20px 24px;margin:16px 0}
.step-label{display:inline-block;background:var(--primary);color:var(--white);font-weight:700;padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;margin-right:8px;letter-spacing:0.03em}
.step-title{font-size:16.8px;font-weight:600;color:var(--white)}
.step-card p{margin-top:12px;margin-bottom:8px;font-size:14.4px}
.step-card p:last-child{margin-bottom:0}

.golden-rule{background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);border:1px solid var(--primary);border-radius:8px;padding:20px 24px;margin:32px 0}
.golden-rule h2{margin-top:0}
.golden-rule strong{color:var(--white)}

.compare-table{margin:24px 0}
.compare-row{display:flex;align-items:center;gap:16px;padding:12px 16px;border-bottom:1px solid #1a1a1a}
.compare-row:nth-child(even){background:var(--surface)}
.compare-label{flex:0 0 150px;font-weight:600;color:var(--white-soft);font-size:14.4px}
.compare-searx{flex:1;font-size:14.4px;color:var(--primary-light)}
.compare-google{flex:1;font-size:14.4px;color:var(--text-secondary)}
.compare-header{font-size:12.8px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);font-weight:600}
.stars{color:var(--amber-text);letter-spacing:2px}

.footer{text-align:center;margin-top:48px;padding-top:32px;border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

.source-note{color:var(--text-dim);font-size:12.8px;font-style:italic;margin-top:32px;padding-top:16px;border-top:1px solid var(--border)}
.source-note a{color:var(--text-muted)}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  pre{font-size:12.8px;padding:12px 14px}
  .compare-row{flex-wrap:wrap}
  .compare-label{flex:0 0 100%;margin-bottom:4px}
  .compare-searx,.compare-google{flex:1}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>SearXNG vs. Google: Websuche, die dir geh&ouml;rt</h1>
        <div class="meta">5-Seiten-Guide &middot; Such-Engine-Vergleich &middot; Out Of The Box Science</div>

        <p class="intro">F&uuml;r die meisten hei&szlig;t &bdquo;suchen&ldquo; einfach &bdquo;googeln&ldquo;. Verst&auml;ndlich, aber es verdeckt, wie unterschiedlich Google und eine Alternative wie SearXNG gebaut sind. Google ist eine komplette Suchmaschine, die dich kennt. SearXNG ist eine Metasuchmaschine, die du selbst betreiben kannst und die keiner Suchmaschine verr&auml;t, wer gerade sucht. Dieser Guide vergleicht beide ehrlich: wie sie technisch funktionieren, was sie k&ouml;nnen und f&uuml;r wen sich SearXNG lohnt.</p>

        <div class="callout">
          <strong>Was dieser Guide nicht ist:</strong> kein &bdquo;Google ist b&ouml;se&ldquo;-Rant. Google ist technisch beeindruckend und f&uuml;r viele Aufgaben weiterhin die bequemste Wahl. Es geht eher darum zu verstehen, was du bei der Google-Suche eigentlich eintauschst, und wann sich eine selbstbestimmte Alternative wirklich auszahlt.
        </div>


        <!-- SEITE 1 -->
        <span class="section-label">Seite 1</span>
        <h2>Der technische Unterschied</h2>

        <p>Nach au&szlig;en tun beide dasselbe: du tippst etwas ein, du bekommst Links. Unter der Haube machen sie etwas grundverschiedenes. Google ist die Bibliothek. SearXNG ist der Bibliothekar, der f&uuml;r dich gleichzeitig in vielen fremden Bibliotheken nachschl&auml;gt und die Zettel zusammentr&auml;gt.</p>

        <h3>1.1 Was Google ist: eine eigene Suchmaschine</h3>
        <p>Google besteht aus drei eigenen Bausteinen. Der <strong>Crawler</strong> (ein Programm namens Googlebot, das selbstst&auml;ndig durchs Web l&auml;uft und Seiten herunterl&auml;dt) sammelt permanent Inhalte ein. Sie landen im <strong>Index</strong>, einer riesigen eigenen Datenbank von mehreren hundert Petabyte, in der die Inhalte durchsuchbar abgelegt sind. Das <strong>Ranking</strong> schlie&szlig;lich, ein Algorithmus aus maschinellem Lernen, bestimmt aus hunderten Signalen die Reihenfolge der Treffer. Wenn du googelst, durchsuchst du also Googles eigene, st&auml;ndig aktualisierte Kopie des Webs.</p>

        <h3>1.2 Was SearXNG ist: ein Vermittler</h3>
        <p>SearXNG hat von alldem nichts: keinen eigenen Crawler, keinen Index, keinen klassischen Ranking-Algorithmus. Es ist eine <strong>Metasuchmaschine</strong>, also ein Aggregator oder Vermittler. Es nimmt deine Anfrage, schickt sie parallel an viele echte Suchmaschinen, liest deren Ergebnisseiten aus, wirft Duplikate raus und mischt den Rest zu einer Liste. SearXNG selbst wei&szlig; nichts &uuml;ber das Web. Es fragt f&uuml;r dich bei den anderen nach und sammelt ihre Antworten ein.</p>

        <h3>1.3 Wie SearXNG die Ergebnisse beschafft</h3>
        <p>Das Einsammeln passiert auf zwei Wegen. Wo es offizielle Schnittstellen gibt, also eine <strong>API</strong> (Programmierschnittstelle, &uuml;ber die Software sauber Daten austauscht), nutzt SearXNG diese, etwa bei Wikipedia, arXiv oder GitHub. Wo es keine gibt, etwa bei Google oder Bing, betreibt es <strong>Scraping</strong>: Es ruft die normale, f&uuml;r Menschen gedachte Ergebnisseite ab und liest die Treffer aus dem HTML-Code heraus. Genau dieses Scraping wird sp&auml;ter zum wunden Punkt bei der Kapazit&auml;t (mehr dazu auf Seite 4).</p>


        <!-- SEITE 2 -->
        <span class="section-label">Seite 2</span>
        <h2>Wie SearXNG dich sch&uuml;tzt</h2>

        <p>Der Datenschutz von SearXNG steckt schon in der Bauweise. Am klarsten wird das, wenn man Google und SearXNG direkt nebeneinanderlegt.</p>

        <h3>2.1 Wie Google dich sieht</h3>
        <p>Wenn du bei Google suchst, verkn&uuml;pft Google deine Anfrage mit allem, was es &uuml;ber dich wei&szlig;: deinem Account, deiner IP-Adresse (der eindeutigen Adresse deines Anschlusses im Netz), den Cookies im Browser und einem Ger&auml;te-Fingerabdruck. &Uuml;ber die Zeit entsteht daraus ein Profil, die Grundlage f&uuml;r personalisierte Ergebnisse und vor allem f&uuml;r Werbung. So ist Google gebaut, denn genau damit verdient es sein Geld.</p>

        <h3>2.2 Wie SearXNG dazwischen steht</h3>
        <p>SearXNG sitzt als <strong>Proxy</strong> zwischen dir und den Suchmaschinen. Ein Proxy ist eine Zwischenstation, die deine Anfrage stellvertretend weiterreicht. F&uuml;r die abgefragten Suchmaschinen sieht es deshalb so aus, als k&auml;me die Suche vom SearXNG-Server. Sie sehen dessen IP-Adresse, deine bleibt verborgen. Cookies werden nicht durchgereicht, jede Anfrage wirkt f&uuml;r sie anonym und neu. Auf Wunsch leitet SearXNG sogar die angeklickten Links und geladenen Bilder durch sich selbst, sodass auch die Zielseite deine IP nie zu sehen bekommt.</p>

        <h3>2.3 Was das praktisch bedeutet</h3>
        <p>Es entsteht kein durchsuchbares Profil deiner Interessen, das jemand verkaufen, leaken oder anfordern k&ouml;nnte. Deine Suche nach einer Diagnose, einem Anwalt oder einem neuen Job bleibt deine Sache. Wer beruflich mit heiklen Themen zu tun hat, etwa in Gesundheit oder Beratung, gewinnt damit echten Schutz statt nur ein gutes Gef&uuml;hl.</p>


        <!-- SEITE 3 -->
        <span class="section-label">Seite 3</span>
        <h2>Feature-Vergleich: Was kann was?</h2>

        <p>Hier die direkte Gegen&uuml;berstellung der wichtigsten Funktionen. F&uuml;nf Sterne hei&szlig;t &bdquo;aktuell das Beste in dieser Kategorie&ldquo;, ein Stern hei&szlig;t &bdquo;gibt es nicht oder kaum brauchbar&ldquo;.</p>

        <div class="compare-table">
          <div class="compare-row">
            <div class="compare-label compare-header">Kategorie</div>
            <div class="compare-searx compare-header">SearXNG</div>
            <div class="compare-google compare-header">Google</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Datenschutz</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Proxy, kein Profil, kein Tracking</div>
            <div class="compare-google"><span class="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span><br>Profil &amp; Tracking als Standard</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Werbefreiheit</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Keine Anzeigen</div>
            <div class="compare-google"><span class="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span><br>Anzeigen &uuml;ber den Treffern</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Treffer ohne KI-Filter</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Keine KI-Zusammenfassung, nur echte Quellen</div>
            <div class="compare-google"><span class="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span><br>AI Overviews schieben sich davor</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Ranking-Qualit&auml;t</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>Einfache Aggregation der Quellen</div>
            <div class="compare-google"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>ML-Ranking, hunderte Signale</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Knowledge Graph</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span><br>Nur rudiment&auml;re Infoboxen</div>
            <div class="compare-google"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Sehr ausgereift</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Ausgabe als JSON / API</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>JSON, CSV, RSS out of the box</div>
            <div class="compare-google"><span class="stars">&#9733;&#9734;&#9734;&#9734;&#9734;</span><br>Kein offener Roh-Datenzugang</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Engine-Auswahl</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Frei w&auml;hl- und gewichtbar</div>
            <div class="compare-google"><span class="stars">&#9734;&#9734;&#9734;&#9734;&#9734;</span><br>Nicht m&ouml;glich</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Self-Hosting / Open Source</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Quelloffen (AGPL), selbst hostbar</div>
            <div class="compare-google"><span class="stars">&#9734;&#9734;&#9734;&#9734;&#9734;</span><br>Propriet&auml;r, nur gehostet</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Instant Answers</div>
            <div class="compare-searx"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>Einige Plugins (Rechner, Hashes &hellip;)</div>
            <div class="compare-google"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Riesiger Fundus an Sofort-Antworten</div>
          </div>
        </div>

        <p>Google gewinnt da, wo Komfort und Aufbereitung z&auml;hlen, also beim Ranking und bei den Infoboxen. SearXNG gewinnt da, wo Kontrolle und Weiterverarbeitung z&auml;hlen: Datenschutz, Werbefreiheit, maschinenlesbare Ausgabe und die freie Wahl der Quellen. Dazu kommt ein Punkt, den viele untersch&auml;tzen.</p>

        <div class="highlight-box">
          <strong>JSON-Ausgabe:</strong> SearXNG kann seine Treffer als strukturierte Daten im JSON-Format ausspielen (ein maschinenlesbares Format, das Programme direkt weiterverarbeiten), statt nur als fertige Webseite. Damit wird die Suche selbst zum Baustein f&uuml;r eigene Werkzeuge: ein Rechercheradar zum Beispiel, oder ein Chatbot, der sich vor dem Antworten frische Quellen aus dem Netz holt. F&uuml;r seine normale Suche bietet Google keinen bezahlbaren Zugang zu solchen Rohdaten.
        </div>


        <!-- SEITE 4 -->
        <span class="section-label">Seite 4</span>
        <h2>Kapazit&auml;t und ehrliche Grenzen</h2>

        <p>Funktionen sind die eine H&auml;lfte, schiere Kapazit&auml;t die andere. Hier verschieben sich die Gewichte deutlich Richtung Google.</p>

        <div class="compare-table">
          <div class="compare-row">
            <div class="compare-label compare-header">Dimension</div>
            <div class="compare-searx compare-header">SearXNG</div>
            <div class="compare-google compare-header">Google</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Eigener Index</div>
            <div class="compare-searx">Keiner, lebt von den Quellen</div>
            <div class="compare-google">Hunderte Petabyte, eigenes Web-Abbild</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Aktualit&auml;t</div>
            <div class="compare-searx">So frisch wie die abgefragten Quellen</div>
            <div class="compare-google">Crawlt permanent, Minuten-frisch</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Anfragevolumen</div>
            <div class="compare-searx">Durch Rate-Limits der Quellen gedeckelt</div>
            <div class="compare-google">Praktisch unbegrenzt</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Antwortzeit</div>
            <div class="compare-searx">Wartet auf die langsamste Quelle</div>
            <div class="compare-google">Rund 100&ndash;300 Millisekunden</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Skalierung</div>
            <div class="compare-searx">Ein Server; gedeckelt durch Blocking, nicht durch Hardware</div>
            <div class="compare-google">Globale Rechenzentren</div>
          </div>
        </div>

        <h3>4.1 Der eigentliche Flaschenhals: Rate-Limiting</h3>
        <p>Die spannendste Zahl steht nicht in der Tabelle. Weil SearXNG Google und Bing per Scraping ausliest, erkennen die beiden den automatisierten Zugriff irgendwann und drosseln ihn, etwa mit einem Captcha (der &bdquo;Ich bin kein Roboter&ldquo;-Abfrage) oder einer zeitweisen Sperre. Dieses Drosseln nennt man <strong>Rate-Limiting</strong>: Ab einer bestimmten Zahl von Anfragen macht die Quelle dicht. Das ist die echte Obergrenze von SearXNG, lange bevor die Hardware ins Spiel kommt.</p>

        <h3>4.2 Was das f&uuml;r dich hei&szlig;t</h3>
        <p>Im Alltag, als einzelner Nutzer auf der eigenen Instanz, merkst du davon kaum etwas, weil dein Anfragevolumen niedrig ist. Heikel wird es bei &ouml;ffentlichen Instanzen mit vielen Nutzern oder im Dauerbetrieb durch automatisierte Tools. Dann f&auml;llt Google regelm&auml;&szlig;ig aus dem Verbund und es tragen nur noch die &uuml;brigen Quellen. Die Lehre daraus ist simpel: Engines breit streuen und Anfragen entzerren, statt zu h&auml;mmern.</p>

        <h3>4.3 Wo SearXNG klar verliert</h3>
        <p>Beim Ranking versteht SearXNG inhaltlich nichts. Es z&auml;hlt nur, wie oft und wie weit oben eine Adresse bei den Quellen auftaucht, und sortiert danach. Einen ausgereiften Knowledge Graph (die Infobox mit zusammengefassten Fakten) gibt es nicht, und Instant Answers nur in kleiner Auswahl. Wer den vollen Google-Komfort gewohnt ist, wird das anfangs merken.</p>


        <!-- SEITE 5 -->
        <span class="section-label">Seite 5</span>
        <h2>F&uuml;r wen es sich lohnt und wie du startest</h2>

        <p>SearXNG zahlt sich in zwei sehr unterschiedlichen Rollen aus. Je nachdem, welche dich anspricht, sieht der erste Schritt anders aus.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">5.1 Als private Suche im Browser</span>
          <p>Wenn dich vor allem st&ouml;rt, dass jede Suche getrackt und zu Werbung verarbeitet wird, ersetzt SearXNG einfach dein Google-Suchfeld. Du bekommst werbefreie Treffer, ohne Profilbildung und ohne Filterblase. Der Ranking-Komfort ist etwas schw&auml;cher, aber bei den meisten Alltagssuchen merkt man den Unterschied kaum.</p>
          <p class="use-case">Relevant f&uuml;r: alle, die ihre Suchhistorie nicht verkaufen wollen</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">5.2 Als Such-Backend f&uuml;r eigene Werkzeuge</span>
          <p>Hier wird SearXNG richtig interessant. &Uuml;ber die JSON-Schnittstelle wird es zur Suchmaschine in deinen eigenen Tools, ganz ohne teure, getrackte Such-API von Drittanbietern. Ein automatisiertes Rechercheradar etwa, oder ein Wissens-Chat, der sich vor dem Antworten frische Quellen aus dem Netz holt (eine Technik, die unter dem K&uuml;rzel RAG l&auml;uft). All das kann selbst gehostet auf deiner eigenen Instanz laufen.</p>
          <p class="use-case">Relevant f&uuml;r: Research-Tools, RAG-Systeme, Automatisierungen</p>
        </div>

        <h3>So startest du</h3>

        <div class="step-card">
          <span class="step-label">Weg A</span>
          <span class="step-title">&Ouml;ffentliche Instanz testen (0 Minuten)</span>
          <p>Du musst nichts installieren, um SearXNG auszuprobieren. Unter <a href="https://searx.space" target="_blank" rel="noopener">searx.space</a> findest du eine Liste &ouml;ffentlicher Instanzen samt Verf&uuml;gbarkeit. Eine aussuchen, im Browser als Suchmaschine setzen, fertig. So bekommst du ein Gef&uuml;hl f&uuml;r die Ergebnisqualit&auml;t, bevor du eigenen Aufwand investierst.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Weg B</span>
          <span class="step-title">Selbst hosten (ca. 30 Minuten)</span>
          <p>F&uuml;r volle Kontrolle und die JSON-Schnittstelle hostest du SearXNG selbst. Die offizielle Dokumentation unter <a href="https://docs.searxng.org" target="_blank" rel="noopener">docs.searxng.org</a> f&uuml;hrt durch ein Setup mit <strong>Docker</strong> (eine Technik, die eine Anwendung samt allem Zubeh&ouml;r in einen abgeschlossenen &bdquo;Container&ldquo; packt, der &uuml;berall gleich l&auml;uft). In der Praxis l&auml;uft das auf wenige Befehle hinaus:</p>
          <pre>git clone https://github.com/searxng/searxng-docker
cd searxng-docker
docker compose up -d</pre>
        </div>

        <div class="callout">
          <strong>SearXNG steht f&uuml;r genau das, was Out Of The Box Science ausmacht:</strong> lokal-first und datenschutzfreundlich, ohne Abh&auml;ngigkeit von einem Anbieter. Es passt gut neben den <a href="/pages/eu-digital-stack">EU Digital Stack</a> und die <a href="/pages/digitale-selbstverteidigung-2026">Digitale Selbstverteidigung</a>, als selbst betreibbarer Ersatz f&uuml;r einen der gr&ouml;&szlig;ten Datensammler &uuml;berhaupt, auf Wunsch auf einem Server in der EU.
        </div>

        <div class="golden-rule">
          <h2>Die ehrliche Regel</h2>
          <p>Entscheidend ist am Ende eine einzige Frage: Wer bekommt deine Suchanfragen zu sehen? Bei Google ist das ein Konzern, der daraus Werbung macht. Bei SearXNG bist du es nur selbst. <strong>F&uuml;r schnelle Alltagsfragen mit fertiger Infobox bleibt Google bequemer. Sobald Datenschutz z&auml;hlt oder du Suche als Baustein in eigene Tools einbaust, ist SearXNG schwer zu schlagen.</strong></p>
        </div>

        <div class="source-note">
          Technische Grundlage: die offizielle SearXNG-Dokumentation (<a href="https://docs.searxng.org" target="_blank" rel="noopener">docs.searxng.org</a>) und die Projekt-Quellen auf GitHub. Eingeordnet f&uuml;r den deutschsprachigen Praxiskontext.
        </div>

        <div class="footer">
          Mehr Interesse? <a href="/pages/erstgesprach">Kostenloses Erstgespr&auml;ch &rarr;</a><br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; Selbstbestimmte Tech-Tools f&uuml;r Wissensarbeit. Lokal-first, mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-searxng-vs-google', OxGuideSearxngVsGoogle);
