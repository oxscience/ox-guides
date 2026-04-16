class OxGuideChatgptZuClaude extends HTMLElement {
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
.compare-row{display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid #1a1a1a}
.compare-row:nth-child(even){background:var(--surface)}
.compare-label{flex:0 0 140px;font-weight:600;color:var(--white-soft);font-size:14.4px}
.compare-claude{flex:1;font-size:14.4px;color:var(--primary-light)}
.compare-chatgpt{flex:1;font-size:14.4px;color:var(--text-secondary)}
.compare-header{font-size:12.8px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);font-weight:600}
.stars{color:#fbbf24;letter-spacing:2px}

.footer{text-align:center;margin-top:48px;padding-top:32px;border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  pre{font-size:12.8px;padding:12px 14px}
  .compare-row{flex-wrap:wrap}
  .compare-label{flex:0 0 100%;margin-bottom:4px}
  .compare-claude,.compare-chatgpt{flex:1}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Von ChatGPT zu Claude wechseln &mdash; Der komplette Guide</h1>
        <div class="meta">5-Seiten-Guide &middot; Feature-Vergleich &middot; Out Of The Box Science</div>

        <p class="intro">Die meisten nutzen ChatGPT, weil es das erste gro&szlig;e KI-Tool war, das im Alltag funktioniert hat. Aber &bdquo;zuerst da gewesen&ldquo; und &bdquo;das beste Tool f&uuml;r meine Arbeit&ldquo; sind zwei verschiedene Dinge. Wenn du mit KI ernsthaft arbeitest &mdash; Texte schreiben, Code entwickeln, Dokumente analysieren, Recherche strukturieren &mdash; lohnt sich ein Blick auf die Alternativen. Dieser Guide vergleicht ChatGPT und Claude ehrlich, zeigt wo welches Tool st&auml;rker ist, und erkl&auml;rt, wie der Umzug funktioniert.</p>

        <div class="callout">
          <strong>Was dieser Guide nicht ist:</strong> Kein &bdquo;ChatGPT ist schlecht&ldquo;-Rant. Es ist eine ehrliche Gegen&uuml;berstellung, die dir hilft, das richtige Tool f&uuml;r deine Arbeit zu w&auml;hlen. Beide Tools haben ihre St&auml;rken, und in vielen F&auml;llen macht es Sinn, beide zu nutzen.
        </div>


        <!-- SEITE 1: Warum ueberhaupt wechseln? -->
        <span class="section-label">Seite 1</span>
        <h2>Warum &uuml;berhaupt wechseln?</h2>

        <p>Der Grund, warum du ChatGPT nutzt, ist wahrscheinlich ziemlich einfach: Es war da, als du angefangen hast, mit KI zu arbeiten. Du hast dich eingew&ouml;hnt, deine Workflows angepasst, vielleicht Custom GPTs gebaut. Das ist v&ouml;llig nachvollziehbar, und es ist auch kein Grund, sofort alles umzuwerfen. Aber es gibt ein paar Entwicklungen, die einen zweiten Blick rechtfertigen.</p>

        <h3>1.1 Kontextfenster</h3>
        <p>Claude arbeitet mit einem Kontextfenster von 200.000 Tokens &mdash; das sind grob gesch&auml;tzt 500 Seiten Text, die das Modell gleichzeitig im Arbeitsspeicher halten kann. ChatGPT kommt auf 128.000 Tokens. Der Unterschied klingt abstrakt, wird aber sofort sp&uuml;rbar, wenn du ein ganzes Paper, einen Vertrag oder Semesterprotokolle analysieren willst: Claude kann den gesamten Text auf einmal verarbeiten, w&auml;hrend bei ChatGPT ab einer bestimmten L&auml;nge Details verloren gehen.</p>

        <h3>1.2 Textqualit&auml;t</h3>
        <p>Wer regelm&auml;&szlig;ig KI-Texte liest, erkennt das ChatGPT-Muster schnell: Listen statt Flie&szlig;text, &Uuml;bertreibungen wie &bdquo;entscheidende Rolle&ldquo; und &bdquo;von zentraler Bedeutung&ldquo;, ein generischer Ton, der nach Brosch&uuml;re klingt. Claude schreibt tendenziell nat&uuml;rlicher, differenzierter und mit weniger Buzzwords. Kein perfekter menschlicher Stil, aber merklich n&auml;her dran.</p>

        <h3>1.3 Ehrlichkeit bei Unsicherheit</h3>
        <p>Eines der gr&ouml;&szlig;ten Probleme von ChatGPT ist die Tendenz, auch bei Unsicherheit sicher klingende Antworten zu geben. Das Modell halluziniert (erfindet Fakten, die plausibel klingen, aber falsch sind) und pr&auml;sentiert sie mit dem gleichen Selbstbewusstsein wie korrekte Informationen. Claude ist hier vorsichtiger: Es sagt h&auml;ufiger &bdquo;ich bin mir nicht sicher&ldquo; oder &bdquo;das m&uuml;sstest du &uuml;berpr&uuml;fen&ldquo;, statt eine Antwort zu erfinden.</p>

        <h3>1.4 Claude Code &amp; Cowork</h3>
        <p>Claude hat mit Claude Code ein eigenes CLI-basiertes Entwicklungstool (Command Line Interface &mdash; Eingabe &uuml;ber das Terminal), das direkt auf deinen lokalen Dateien arbeitet. Und mit Cowork eine Desktop-Variante, die Notion, Gmail, Google Calendar und andere Tools integriert. ChatGPT hat kein vergleichbares Produkt: Es kann Code generieren, aber nicht auf deinem Rechner in deinen Dateien arbeiten.</p>

        <h3>1.5 Die Kernfrage</h3>
        <p>Wof&uuml;r nutzt du KI? Wenn die Antwort &bdquo;Bilder generieren&ldquo; oder &bdquo;schnell mal eine Frage stellen&ldquo; ist, reicht ChatGPT v&ouml;llig aus. Wenn die Antwort eher in Richtung &bdquo;Texte schreiben, Code entwickeln, Dokumente analysieren, Recherche strukturieren&ldquo; geht, solltest du Claude ernsthaft ausprobieren. Es geht nicht darum, das eine Tool f&uuml;r das andere aufzugeben &mdash; sondern darum, das richtige Werkzeug f&uuml;r die jeweilige Aufgabe zu nutzen.</p>


        <!-- SEITE 2: Feature-Vergleich -->
        <span class="section-label">Seite 2</span>
        <h2>Feature-Vergleich: Was kann was?</h2>

        <p>Statt langer Erkl&auml;rungen: Hier ist eine direkte Gegen&uuml;berstellung der wichtigsten Kategorien. F&uuml;nf Sterne hei&szlig;t &bdquo;aktuell das beste verf&uuml;gbare Tool in dieser Kategorie&ldquo;, ein Stern hei&szlig;t &bdquo;gibt es nicht oder kaum brauchbar&ldquo;.</p>

        <div class="compare-table">
          <div class="compare-row">
            <div class="compare-label compare-header">Kategorie</div>
            <div class="compare-claude compare-header">Claude</div>
            <div class="compare-chatgpt compare-header">ChatGPT</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Textqualit&auml;t</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Nat&uuml;rlicher Stil, weniger KI-Sprech</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>Erkennbare KI-Muster, Listen-lastig</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Code</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Claude Code als eigenes Produkt</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span><br>Guter Code, aber kein lokales Tool</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Bildgenerierung</div>
            <div class="compare-claude"><span class="stars">&#9734;&#9734;&#9734;&#9734;&#9734;</span><br>Nicht verf&uuml;gbar</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>DALL-E integriert, direkt im Chat</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Kontextfenster</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>200k Tokens (~500 Seiten)</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>128k Tokens (~300 Seiten)</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Datenschutz</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span><br>API-Daten nicht zum Training</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>Opt-out m&ouml;glich, aber Standard ist Training</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Plugins/GPTs</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>MCP-Server, wachsend</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Tausende Custom GPTs &amp; Plugins</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Artefakte</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>Code-Previews, SVGs, Tabellen live</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span><br>Canvas, aber eingeschr&auml;nkter</div>
          </div>
          <div class="compare-row">
            <div class="compare-label">Websuche</div>
            <div class="compare-claude"><span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span><br>Verf&uuml;gbar, aber nicht die St&auml;rke</div>
            <div class="compare-chatgpt"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span><br>Bing-Integration, solide Ergebnisse</div>
          </div>
        </div>

        <p>Die Tabelle macht sichtbar, was sich auch in der Praxis best&auml;tigt: Claude dominiert bei textbasierten Aufgaben, Kontextverarbeitung und Code-Werkzeugen. ChatGPT hat die Nase vorn bei visuellem Content, Websuche und dem breiten &Ouml;kosystem an Erweiterungen. Die Frage ist nicht, welches Tool objektiv besser ist, sondern welches zu deiner Arbeit passt.</p>


        <!-- SEITE 3: Wo Claude besser ist -->
        <span class="section-label">Seite 3</span>
        <h2>Wo Claude besser ist &mdash; mit Beispielen</h2>

        <p>Zahlen und Sterne sind hilfreich, aber konkrete Situationen erkl&auml;ren besser, wo der Unterschied im Arbeitsalltag sp&uuml;rbar wird. Hier sind f&uuml;nf Bereiche, in denen Claude einen messbaren Vorteil hat.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">3.1 Lange Dokumente verstehen</span>
          <p>Mit 200.000 Tokens Kontextfenster kann Claude ein komplettes Forschungspaper (30&ndash;40 Seiten), einen Mietvertrag, Semesterprotokolle oder einen Projektantrag auf einmal verarbeiten. Du liest das Dokument nicht mehr abschnittsweise ein, sondern gibst es komplett rein und stellst Fragen zum Gesamttext.</p>
          <p><strong>Konkretes Beispiel:</strong> Du l&auml;dst ein 35-seitiges Systematic Review hoch und fragst: &bdquo;Welche drei Studien haben die schw&auml;chste Methodik und warum?&ldquo; Claude kann die Bewertungskriterien &uuml;ber alle Studien hinweg vergleichen, weil es den gesamten Text gleichzeitig im Kontext h&auml;lt &mdash; nicht nur die letzten f&uuml;nf Seiten.</p>
          <p class="use-case">Relevant f&uuml;r: Paper-Analyse, Vertragspr&uuml;fung, Protokoll-Auswertung, Curriculum-Planung</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">3.2 Textqualit&auml;t</span>
          <p>Der Unterschied f&auml;llt sofort auf, wenn du beide Tools den gleichen Text schreiben l&auml;sst. ChatGPT neigt zu Aufz&auml;hlungen, Superlative und dem typischen &bdquo;zusammenfassend l&auml;sst sich sagen&ldquo;-Muster, das inzwischen fast jeder als KI-generiert erkennt. Claude schreibt tendenziell in l&auml;ngeren, flie&szlig;enden S&auml;tzen, vermeidet generische F&uuml;llw&ouml;rter und produziert Texte, die n&auml;her an einem menschlichen Schreibstil liegen.</p>
          <p><strong>Konkretes Beispiel:</strong> Bitte beide Tools, eine Zusammenfassung f&uuml;r ein Paper zu schreiben. ChatGPT wird wahrscheinlich eine nummerierte Liste mit Key Findings liefern, eingeleitet von &bdquo;Diese Studie liefert wegweisende Erkenntnisse&ldquo;. Claude wird eher einen zusammenh&auml;ngenden Absatz schreiben, der die Ergebnisse in den Kontext der bestehenden Literatur einordnet.</p>
          <p class="use-case">Relevant f&uuml;r: Wissenschaftliche Texte, Berichte, E-Mails, Dokumentation</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">3.3 Ehrlichkeit bei Unsicherheit</span>
          <p>Das ist ein Punkt, der in der Wissenschaft besonders schwer wiegt. Wenn du ChatGPT nach einer Studie fragst, die es nicht kennt, wird es h&auml;ufig eine plausibel klingende Antwort erfinden &mdash; komplett mit Autorennamen, Journal und Jahreszahl, die alle nicht existieren. Claude ist hier merklich vorsichtiger und sagt eher: &bdquo;Ich habe keine verl&auml;sslichen Informationen dazu&ldquo; oder &bdquo;Das m&uuml;sstest du in der Originalliteratur &uuml;berpr&uuml;fen&ldquo;.</p>
          <p><strong>Konkretes Beispiel:</strong> Frage beide Tools nach der Effektst&auml;rke einer spezifischen Intervention bei einer seltenen Erkrankung. ChatGPT wird mit hoher Wahrscheinlichkeit eine Zahl nennen. Claude wird sagen, dass die Datenlage d&uuml;nn ist und dir empfehlen, in PubMed oder Cochrane nachzuschauen.</p>
          <p class="use-case">Relevant f&uuml;r: Recherche, Faktencheck, wissenschaftliches Arbeiten</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">3.4 Claude Code &amp; Cowork</span>
          <p>Claude Code ist ein eigenes Produkt, das es bei ChatGPT nicht gibt: Ein Kommandozeilen-Tool, das auf deinem Rechner l&auml;uft und direkt in deinen Dateien arbeitet. Du sagst &bdquo;baue mir ein Quiz als HTML-Datei&ldquo; und Claude erstellt die Datei in deinem Projektordner. Du sagst &bdquo;fasse alle PDFs in diesem Ordner zusammen&ldquo; und es liest sie, verarbeitet sie und schreibt die Zusammenfassung in eine neue Datei.</p>
          <p>Cowork geht noch einen Schritt weiter und verbindet Claude mit deinen Arbeitswerkzeugen &mdash; Notion, Gmail, Google Calendar. Es liest deine E-Mails, erstellt Entw&uuml;rfe, aktualisiert Notion-Datenbanken und kann sogar Shopify-Seiten bearbeiten.</p>
          <p><strong>ChatGPT</strong> kann Code generieren und in einer Sandbox ausf&uuml;hren, aber nicht auf deinen lokalen Dateien arbeiten. Es gibt keine M&ouml;glichkeit, ChatGPT in dein Dateisystem oder deine Tools zu integrieren, die auch nur ann&auml;hernd mit Claude Code vergleichbar w&auml;re.</p>
          <p class="use-case">Relevant f&uuml;r: Entwickler, Power User, Automatisierung, Projektmanagement</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">5</span>
          <span class="feature-name">3.5 Artefakte</span>
          <p>Artefakte sind Claudes Art, Code-Ergebnisse direkt im Chat sichtbar zu machen. Wenn du Claude bittest, eine Tabelle zu erstellen, siehst du nicht nur den Code &mdash; du siehst die fertige Tabelle als interaktives Element. Das funktioniert mit HTML-Seiten, SVG-Grafiken, React-Komponenten, Diagrammen und mehr.</p>
          <p><strong>Konkretes Beispiel:</strong> Du bittest Claude, eine interaktive Zeitleiste deiner Forschungsprojekte zu erstellen. Das Ergebnis erscheint direkt im Chat als klickbare, scrollbare Visualisierung &mdash; nicht als Code-Block, den du erst irgendwo einf&uuml;gen und &ouml;ffnen m&uuml;sstest.</p>
          <p>ChatGPT hat mit Canvas ein &auml;hnliches Konzept eingef&uuml;hrt, aber die Umsetzung ist eingeschr&auml;nkter: weniger Formate, weniger interaktiv, weniger zuverl&auml;ssig bei komplexeren Visualisierungen.</p>
          <p class="use-case">Relevant f&uuml;r: Prototyping, Visualisierung, Lehrmaterialien, schnelle Demos</p>
        </div>


        <!-- SEITE 4: Wo ChatGPT (noch) besser ist -->
        <span class="section-label">Seite 4</span>
        <h2>Wo ChatGPT (noch) besser ist</h2>

        <p>Ehrlichkeit bedeutet auch, die St&auml;rken der Konkurrenz anzuerkennen. Es gibt Bereiche, in denen ChatGPT aktuell klar die Nase vorn hat. Das sind keine Randthemen, sondern echte Vorteile, die f&uuml;r bestimmte Workflows entscheidend sein k&ouml;nnen.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">4.1 Bildgenerierung</span>
          <p>ChatGPT hat DALL-E direkt integriert. Du beschreibst ein Bild, und es wird im Chat generiert &mdash; Infografiken, Diagramme, Illustrationen, Social-Media-Grafiken. Claude hat keine Bildgenerierung. Wenn du f&uuml;r deine Arbeit regelm&auml;&szlig;ig Bilder brauchst (Pr&auml;sentationen, Poster, Social Media), ist das ein echter Nachteil.</p>
          <p>Allerdings solltest du wissen: F&uuml;r wissenschaftliche Abbildungen und Diagramme sind die Ergebnisse von DALL-E oft nicht pr&auml;zise genug. Zahlen in Grafiken sind h&auml;ufig falsch, Beschriftungen fehlerhaft, und die Achsen passen nicht zu den Daten. F&uuml;r Stockfoto-Ersatz und kreative Illustrationen funktioniert es gut, f&uuml;r datengetriebene Visualisierungen weniger.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">4.2 Plugin-&Ouml;kosystem</span>
          <p>ChatGPT hat tausende Custom GPTs und Plugins. Du findest spezialisierte GPTs f&uuml;r fast jedes Thema &mdash; von LaTeX-Formatierung bis zur Datenanalyse, von Sprachtraining bis zur Studienplanung. Claude hat mit MCP-Servern (Model Context Protocol) ein &auml;hnliches System im Aufbau, das technisch sogar eleganter ist, aber das &Ouml;kosystem ist noch deutlich kleiner.</p>
          <p>Der Vorteil von Custom GPTs: Du brauchst keine technischen Kenntnisse, um einen zu erstellen oder zu nutzen. Bei Claude&apos;s MCP-Servern ist die Einrichtung aktuell noch etwas technischer &mdash; das &auml;ndert sich, aber Stand heute ist die H&uuml;rde h&ouml;her.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">4.3 Sprachausgabe &amp; Voice Mode</span>
          <p>ChatGPT&apos;s Advanced Voice Mode erm&ouml;glicht nat&uuml;rliche, gesprochene Unterhaltungen mit dem Modell &mdash; inklusive Emotionen, Pausen und verschiedener Sprachstile. Du kannst damit unterwegs Ideen durchsprechen, dir Texte vorlesen lassen oder das Modell als Sprachassistenten nutzen. Claude hat keine vergleichbare Voice-Funktion, die in Echtzeit funktioniert.</p>
          <p>F&uuml;r Lehre ist das durchaus relevant: Studierende k&ouml;nnen sich Konzepte erkl&auml;ren lassen, Dozierende k&ouml;nnen Vortragsideen durchsprechen, und f&uuml;r barrierefreies Arbeiten ist eine gute Sprachausgabe ein echter Gewinn.</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">4.4 Verbreitung &amp; Community</span>
          <p>ChatGPT hat &uuml;ber 200 Millionen w&ouml;chentliche Nutzer. Das bedeutet in der Praxis: Wenn du jemandem erkl&auml;ren willst, was du mit KI machst, kennen die meisten ChatGPT. Es gibt mehr YouTube-Tutorials, mehr Blog-Posts, mehr Community-Foren und mehr fertige Prompts f&uuml;r ChatGPT als f&uuml;r jedes andere KI-Tool. Diesen Netzwerkeffekt sollte man nicht untersch&auml;tzen &mdash; vor allem, wenn du mit Teams arbeitest und Kolleginnen und Kollegen einbinden willst.</p>
        </div>

        <div class="highlight-box">
          <strong>Ehrliche Einsch&auml;tzung:</strong> F&uuml;r die meisten professionellen Anwendungen in Wissenschaft, Lehre und Health &mdash; Texte schreiben, Dokumente analysieren, Code entwickeln, Recherche strukturieren &mdash; ist Claude die bessere Wahl. F&uuml;r kreative Bildarbeit, das breite Plugin-&Ouml;kosystem und nat&uuml;rliche Sprachinteraktion hat ChatGPT aktuell die Nase vorn. Die gute Nachricht: Du musst dich nicht f&uuml;r eines entscheiden, du kannst beide f&uuml;r ihre jeweiligen St&auml;rken nutzen.
        </div>


        <!-- SEITE 5: Der Umzug -->
        <span class="section-label">Seite 5</span>
        <h2>Der Umzug &mdash; Schritt f&uuml;r Schritt</h2>

        <p>Wenn du nach den ersten vier Seiten denkst, dass Claude zumindest einen ernsthaften Test wert ist, findest du hier den praktischen Fahrplan. Kein Big Bang, kein sofortiger Komplettwechsel &mdash; ein kontrollierter &Uuml;bergang in f&uuml;nf Schritten.</p>

        <div class="step-card">
          <span class="step-label">Schritt 1</span>
          <span class="step-title">Claude-Account erstellen</span>
          <p>Geh auf <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> und erstelle einen Account. Der kostenlose Zugang reicht zum Ausprobieren, aber f&uuml;r ernsthaftes Arbeiten empfiehlt sich das Pro-Abo (20 USD/Monat). Damit bekommst du Zugang zu den leistungsf&auml;higsten Modellen, mehr Nachrichten pro Tag und l&auml;ngere Gespr&auml;che. Wenn du Claude Code nutzen willst, brauchst du zus&auml;tzlich die Max-Version (100 USD/Monat) oder ein separates API-Guthaben.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 2</span>
          <span class="step-title">Projekte anlegen</span>
          <p>Claude hat eine Projektfunktion, die das Pendant zu Custom GPTs ist &mdash; nur mit besserem Kontextmanagement. Erstelle f&uuml;r jedes Thema ein Projekt (z.B. &bdquo;Paper-Analyse&ldquo;, &bdquo;Lehre WS 2026&ldquo;, &bdquo;Praxis-Website&ldquo;) und f&uuml;ge projektspezifische Dateien und Anweisungen hinzu. Claude erinnert sich innerhalb eines Projekts an alle Dokumente und Vorgaben, die du hinterlegt hast.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 3</span>
          <span class="step-title">Custom Instructions &uuml;bertragen</span>
          <p>Wenn du in ChatGPT Custom Instructions eingerichtet hast (&bdquo;Ich bin Dozent f&uuml;r..., antworte auf Deutsch, verwende keine Emojis&ldquo;), &uuml;bertrage diese Anweisungen in die Projekt-Einstellungen bei Claude. Du findest sie unter den Project Instructions, wo du System-Prompts f&uuml;r jedes Projekt individuell festlegen kannst. Falls du Claude Code nutzt, kannst du zus&auml;tzlich eine <code>CLAUDE.md</code>-Datei anlegen, die bei jedem Start automatisch geladen wird.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 4</span>
          <span class="step-title">Claude Code installieren (optional)</span>
          <p>Wenn du mit Code oder Dateien arbeitest, installiere Claude Code &uuml;ber das Terminal: <code>npm install -g @anthropic-ai/claude-code</code>. Claude Code arbeitet direkt in deinem Dateisystem &mdash; es erstellt, bearbeitet und organisiert Dateien nach deinen Anweisungen. F&uuml;r Nicht-Entwickler gibt es Cowork, die Desktop-App, die &auml;hnliche Funktionen mit einer grafischen Oberfl&auml;che bietet.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 5</span>
          <span class="step-title">Erste Woche: Parallel nutzen und vergleichen</span>
          <p>Der wichtigste Schritt: Nutze in der ersten Woche bewusst beide Tools f&uuml;r die gleichen Aufgaben. Lass beide den gleichen Text schreiben, die gleiche Recherche machen, das gleiche Dokument zusammenfassen. Danach entscheide nicht pauschal, sondern pro Aufgabentyp: Welches Tool liefert bei welcher Aufgabe das bessere Ergebnis? Oft landet man bei einer Kombination &mdash; Claude f&uuml;r Texte und Code, ChatGPT f&uuml;r Bilder und Voice &mdash; und das ist v&ouml;llig in Ordnung.</p>
        </div>

        <div class="callout">
          <strong>Du musst nicht alles auf einmal umziehen.</strong> Viele Profis nutzen beide Tools parallel &mdash; Claude f&uuml;r Texte, Code und Recherche, ChatGPT f&uuml;r Bilder und Voice. Der Fehler w&auml;re, aus Gewohnheit bei einem Tool zu bleiben, obwohl das andere f&uuml;r deine Hauptaufgaben besser w&auml;re. Probier es eine Woche lang aus, und du wirst selbst merken, wo welches Tool st&auml;rker ist.
        </div>

        <div class="golden-rule">
          <h2>Golden Rule</h2>
          <p><strong>Das beste Tool ist das, das zu deiner Arbeit passt &mdash; nicht das mit dem bekanntesten Namen.</strong> Die meisten Menschen nutzen KI-Tools aus Gewohnheit, nicht aus &Uuml;berzeugung. Nimm dir eine Woche, teste beide unter realen Bedingungen, und entscheide dann auf Basis deiner eigenen Erfahrung. Kein Influencer, kein Blogpost und kein Guide (auch nicht dieser) kann dir diese Entscheidung abnehmen.</p>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br><a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-chatgpt-zu-claude', OxGuideChatgptZuClaude);
