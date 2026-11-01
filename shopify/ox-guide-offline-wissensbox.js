class OxGuideOfflineWissensbox extends HTMLElement {
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
  --green-text:#6ee7b7;--amber-text:#fbbf24;
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

.feature-card{background:var(--surface);border:1px solid #26262c;border-radius:10px;padding:20px 24px;margin:24px 0}
.feature-number{display:inline-block;background:var(--primary);color:#0f0f11;font-weight:700;width:28px;height:28px;border-radius:50%;text-align:center;line-height:28px;font-size:13.6px;margin-right:8px}
.feature-name{font-size:17.6px;font-weight:600;color:var(--white)}
.feature-card p{margin-top:12px;margin-bottom:8px}
.use-case{color:var(--primary);font-weight:500;font-size:14.4px}

.callout{background:var(--surface-alt);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0}
.callout strong{color:var(--white)}

.highlight-box{background:var(--surface);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0}
.highlight-box strong{color:var(--white)}

.step-card{background:var(--surface);border:1px solid #26262c;border-radius:10px;padding:20px 24px;margin:16px 0}
.step-label{display:inline-block;background:var(--primary);color:#0f0f11;font-weight:700;padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;margin-right:8px;letter-spacing:0.03em}
.step-title{font-size:16.8px;font-weight:600;color:var(--white)}
.step-card p{margin-top:12px;margin-bottom:8px;font-size:14.4px}
.step-card .table-wrap{margin:12px 0}
.step-card p:last-child{margin-bottom:0}

.golden-rule{background:linear-gradient(135deg,#133433 0%,#1a1a1f 100%);border:1px solid var(--primary);border-radius:8px;padding:20px 24px;margin:32px 0}
.golden-rule h2{margin-top:0}
.golden-rule strong{color:var(--white)}

.table-wrap{overflow-x:auto;margin:16px 0 24px}
table{width:100%;border-collapse:collapse;font-size:14.4px;line-height:1.5}
th{text-align:left;font-size:12.8px;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-dim);font-weight:600;padding:10px 12px;border-bottom:1px solid #26262c}
td{padding:10px 12px;border-bottom:1px solid #1f1f24;vertical-align:top}
td:first-child{color:var(--white-soft);font-weight:500}
td:last-child{white-space:nowrap}
td code{white-space:nowrap}
.wrap-last td:last-child{white-space:normal}
tr:nth-child(even) td{background:var(--surface-alt)}

.footer{text-align:center;margin-top:48px;padding-top:32px;border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

.source-note{color:var(--text-dim);font-size:12.8px;font-style:italic;margin-top:32px;padding-top:16px;border-top:1px solid var(--border)}
.source-note a{color:var(--text-muted)}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  pre{font-size:12.8px;padding:12px 14px}
  th,td{padding:8px}
  th{letter-spacing:0;font-size:11.2px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Die Offline-Wissensbox f&uuml;r den Mac: Wikipedia, Fachwissen und KI ohne Netz</h1>
        <div class="meta">5-Seiten-Guide &middot; Offline-Setup &middot; Out Of The Box Science</div>

        <p class="intro">Im Zug, im Seminarraum mit schwachem WLAN oder auf dem Kongress im Ausland f&auml;llt erst auf, wie viel Wissen an einer Leitung h&auml;ngt. Dabei passt die komplette deutsche Wikipedia samt Bildern auf eine externe SSD, ein Medizin-Lexikon sogar auf einen alten USB-Stick. Dieser Guide zeigt, wie du dir daraus eine eigene Bibliothek baust und auf Wunsch ein lokales KI-Modell danebenstellst. Beides l&auml;uft im Flugmodus, beides kostet nichts au&szlig;er Speicherplatz.</p>

        <div class="callout">
          <strong>Warum nicht einfach Project NOMAD?</strong> NOMAD ist ein offener Offline-Wissensserver mit Bibliothek, lokaler KI, Lernplattform und Karten. Er ist f&uuml;r Debian und Ubuntu gebaut, Mac-Support hat der Maintainer bisher abgelehnt. Auf dem Mac kommst du mit zwei normalen Apps zum selben Kern, ganz ohne Server und Docker. Karten und Lernplattform l&auml;sst dieser Guide weg.
        </div>


        <!-- SEITE 1 -->
        <span class="section-label">Seite 1</span>
        <h2>Wie die Box aufgebaut ist</h2>

        <p>Die Box besteht aus zwei Bausteinen, die nichts voneinander wissen m&uuml;ssen. Du kannst also auch nur die Bibliothek einrichten und die KI weglassen. F&uuml;r viele reicht das.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">1.1 Die Bibliothek: Kiwix</span>
          <p>Kiwix ist ein quelloffener Reader f&uuml;r ZIM-Dateien. Eine <strong>ZIM-Datei</strong> ist eine komprimierte Kopie einer ganzen Website in einer einzigen Datei, inklusive Suchindex. Du l&auml;dst sie einmal herunter, danach bl&auml;tterst und suchst du darin wie auf der Originalseite.</p>
          <p class="use-case">Voraussetzung: macOS 12 oder neuer, Speicher je nach Auswahl (Seite 2)</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">1.2 Die KI: Ollama</span>
          <p>Ollama ist eine quelloffene App, die Sprachmodelle direkt auf deinem Rechner ausf&uuml;hrt. Das Modell ist eine Datei auf deiner Platte, und im Flugmodus antwortet es genauso wie mit Netz. Es wei&szlig; allerdings nur, was es beim Training gelernt hat, und kennt deine Bibliothek zun&auml;chst nicht. Wie du beides zusammenbringst, steht auf Seite 5.</p>
          <p class="use-case">Voraussetzung: Mac mit M-Chip, sinnvoll ab 16 GB Arbeitsspeicher (Seite 4)</p>
        </div>

        <div class="highlight-box">
          <strong>Zeitbedarf:</strong> Das Einrichten dauert etwa 20 Minuten. Der Rest ist Download. Die deutsche Wikipedia mit Bildern braucht bei 100 Mbit/s rechnerisch gut eine Stunde, in der Praxis oft l&auml;nger. Starte gro&szlig;e Dateien also am besten abends.
        </div>


        <!-- SEITE 2 -->
        <span class="section-label">Seite 2</span>
        <h2>Das Regal zusammenstellen</h2>

        <p>&Uuml;berlege vor dem Download, wof&uuml;r du die Box wirklich brauchst. Die Gr&ouml;&szlig;en unten stammen aus dem Kiwix-Katalog (Stand Oktober 2026) und &auml;ndern sich mit jeder neuen Ausgabe leicht.</p>

        <h3>2.1 Die Wikipedia gibt es in drei St&auml;rken</h3>
        <div class="table-wrap"><table>
          <tr><th>Fassung</th><th>Inhalt</th><th>Gr&ouml;&szlig;e</th></tr>
          <tr><td><code>mini</code></td><td>nur Einleitung und Infobox jedes Artikels</td><td>4,7 GB</td></tr>
          <tr><td><code>nopic</code></td><td>alle Artikel vollst&auml;ndig, ohne Bilder</td><td>18,6 GB</td></tr>
          <tr><td><code>maxi</code></td><td>alle Artikel vollst&auml;ndig, mit Bildern</td><td>48,6 GB</td></tr>
        </table></div>

        <h3>2.2 Was sich f&uuml;r Gesundheit und Lehre lohnt</h3>
        <div class="table-wrap"><table>
          <tr><th>Sammlung</th><th>Wof&uuml;r</th><th>Gr&ouml;&szlig;e</th></tr>
          <tr><td>WikiMed (de)</td><td>die medizinischen Artikel der Wikipedia, mit Bildern</td><td>0,42 GB</td></tr>
          <tr><td>Molekular- und Zellbiologie (de)</td><td>Grundlagen aus der Wikipedia, mit Bildern</td><td>0,10 GB</td></tr>
          <tr><td>PhET (de)</td><td>interaktive Simulationen f&uuml;r Physik, Chemie und Biologie</td><td>0,11 GB</td></tr>
          <tr><td>Wikibooks (de)</td><td>freie Lehrb&uuml;cher</td><td>3,4 GB</td></tr>
          <tr><td>Wiktionary (de)</td><td>W&ouml;rterbuch und Wortherkunft</td><td>1,6 GB</td></tr>
          <tr><td>MedlinePlus (en)</td><td>Patienteninformationen der US National Library of Medicine, Stand Januar 2025</td><td>1,9 GB</td></tr>
          <tr><td>NHS Medicines A to Z (en)</td><td>Arzneimittel-&Uuml;berblick des britischen NHS</td><td>0,02 GB</td></tr>
        </table></div>

        <h3>2.3 Drei fertige Zusammenstellungen</h3>
        <div class="step-card">
          <span class="step-label">Klein</span>
          <span class="step-title">Handgep&auml;ck, rund 7 GB</span>
          <p>WikiMed, Wikipedia <code>mini</code> und Wiktionary. Passt auf fast jedes MacBook und beantwortet die meisten &bdquo;Was war das noch mal?&ldquo;-Fragen. Mit KI-Modell rund 14 GB.</p>
        </div>
        <div class="step-card">
          <span class="step-label">Mittel</span>
          <span class="step-title">Arbeitsbibliothek, rund 24 GB</span>
          <p>Wikipedia <code>nopic</code>, WikiMed mit den medizinischen Abbildungen, Wikibooks, Wiktionary und PhET. F&uuml;r die meisten die beste Wahl. Mit KI-Modell rund 31 GB.</p>
        </div>
        <div class="step-card">
          <span class="step-label">Gro&szlig;</span>
          <span class="step-title">Vollausbau, rund 66 GB</span>
          <p>Wikipedia <code>maxi</code>, Wikibooks, Wiktionary, Wikivoyage und die Projekt-Gutenberg-Bibliothek. WikiMed entf&auml;llt, weil die Artikel schon enthalten sind. Mit KI-Modell rund 73 GB, am besten auf einer externen SSD.</p>
        </div>

        <div class="callout">
          <strong>Was du im Katalog nicht findest:</strong> Eine deutsche Fachquelle f&uuml;r Physiotherapie oder Trainingswissenschaft gibt es dort nicht, PubMed und Leitlinien auch nicht. Lege wichtige Paper und Leitlinien deshalb als PDF in einen eigenen Ordner. Wer im <a href="/pages/oxcampus">OX Campus</a> ist, kann Reihen im Campus Reader auch direkt auf dem Ger&auml;t speichern.
        </div>


        <!-- SEITE 3 -->
        <span class="section-label">Seite 3</span>
        <h2>Die Bibliothek einrichten</h2>

        <div class="step-card">
          <span class="step-label">Schritt 1</span>
          <span class="step-title">Kiwix installieren</span>
          <p>Lade <a href="https://apps.apple.com/de/app/kiwix/id997079563" target="_blank" rel="noopener">Kiwix aus dem Mac App Store</a>. Die App ist kostenlos, der Code liegt offen auf GitHub. Dieselbe App gibt es f&uuml;r iPhone und iPad.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 2</span>
          <span class="step-title">Katalog auf Deutsch stellen</span>
          <p>&Ouml;ffne in den Einstellungen den Bereich <strong>Katalog</strong> und blende unter <strong>Sprachen</strong> Deutsch ein. Lass auch Englisch an, wenn du MedlinePlus oder andere englische Sammlungen m&ouml;chtest.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 3</span>
          <span class="step-title">Sammlungen laden</span>
          <p>W&auml;hle links unter <strong>Kategorien</strong> zum Beispiel Wikipedia und dann die gew&uuml;nschte Fassung. Mit <strong>Herunterladen</strong> startet der Download. Fang mit WikiMed an: Das ist schnell erledigt, und du siehst sofort, ob alles funktioniert.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 4</span>
          <span class="step-title">Alternativ: Datei von Hand laden</span>
          <p>Wenn du lieber auf eine externe SSD speicherst, lade die Datei &uuml;ber <a href="https://browse.library.kiwix.org" target="_blank" rel="noopener">browse.library.kiwix.org</a> direkt dorthin. In Kiwix holst du sie dann unter <strong>Ge&ouml;ffnet</strong> mit <strong>&Ouml;ffnen&hellip;</strong> dazu. Die SSD muss beim Lesen angeschlossen sein.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 5</span>
          <span class="step-title">Flugmodus-Test</span>
          <p>Schalte das WLAN aus, beende Kiwix und &ouml;ffne es neu. Such einen Begriff wie &bdquo;Tendinopathie&ldquo; und &ouml;ffne den Artikel. Erst wenn das klappt, ist die Box wirklich offline.</p>
        </div>

        <div class="highlight-box">
          <strong>Aktualisieren:</strong> ZIM-Dateien sind Momentaufnahmen, das Datum steht im Dateinamen, etwa <code>wikipedia_de_medicine_maxi_2026-10.zim</code>. Einmal im Halbjahr eine neue Ausgabe zu laden und die alte zu l&ouml;schen, reicht f&uuml;r Nachschlagewissen meistens aus.
        </div>


        <!-- SEITE 4 -->
        <span class="section-label">Seite 4</span>
        <h2>Die KI danebenstellen</h2>

        <div class="step-card">
          <span class="step-label">Schritt 1</span>
          <span class="step-title">Ollama installieren</span>
          <p>Lade die App von <a href="https://ollama.com/download" target="_blank" rel="noopener">ollama.com/download</a> und zieh sie in den Programme-Ordner. Sie bringt ein Chatfenster mit, du brauchst also kein Terminal. Wer das Terminal mag, findet die Befehle unten.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 2</span>
          <span class="step-title">Modell passend zum Arbeitsspeicher w&auml;hlen</span>
          <p>Das Modell muss in den Arbeitsspeicher passen und daneben Platz f&uuml;r macOS und deine anderen Programme lassen.</p>
          <div class="table-wrap"><table>
            <tr><th>RAM</th><th>Startpunkt</th><th>Gr&ouml;&szlig;e</th></tr>
            <tr><td>8 GB</td><td><code>qwen3.5:4b</code></td><td>3,3 GB</td></tr>
            <tr><td>16&ndash;24 GB</td><td><code>gemma4:e4b</code><br><code>qwen3.5:9b</code><br><code>mistral-nemo</code></td><td>6,6 GB<br>6,6 GB<br>7,1 GB</td></tr>
            <tr><td>ab 32 GB</td><td><code>gemma4:26b</code></td><td>16 GB</td></tr>
          </table></div>
          <p>Mit 8 GB reicht es f&uuml;r einfache Fragen. <code>mistral-nemo</code> stammt von Mistral aus Frankreich und ist &auml;lter als die beiden anderen.</p>
          <p>Das sind Startpunkte und keine Rangliste. Belastbare Vergleiche speziell f&uuml;r Deutsch sind rar, deshalb gilt: Stell zwei Modellen dieselben drei Fragen aus deinem Alltag und behalte das bessere. Was die Namen und K&uuml;rzel bedeuten, erkl&auml;rt der Guide <a href="/pages/ki-modellnamen">KI-Modellnamen entschl&uuml;sseln</a>.</p>
          <pre>ollama pull gemma4:e4b
ollama run gemma4:e4b</pre>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 3</span>
          <span class="step-title">Cloud-Funktionen ausschalten</span>
          <p>Ollama bietet inzwischen auch Cloud-Modelle und eine Websuche an. Wer sicher nur lokal arbeiten will, legt die Datei <code>~/.ollama/server.json</code> mit diesem Inhalt an und startet Ollama neu:</p>
          <pre>{ "disable_ollama_cloud": true }</pre>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 4</span>
          <span class="step-title">Flugmodus-Test</span>
          <p>WLAN aus, Ollama neu &ouml;ffnen, eine Frage stellen. Kommt die Antwort, l&auml;uft das Modell wirklich auf deinem Mac.</p>
        </div>

        <div class="callout">
          <strong>Lieber eine andere Oberfl&auml;che?</strong> <a href="https://www.jan.ai" target="_blank" rel="noopener">Jan</a> ist ebenfalls quelloffen (Apache 2.0) und richtet sich an alle, die Chat und Modellverwaltung in einer App wollen. LM Studio ist komfortabel und kostenlos, aber kein Open Source.
        </div>


        <!-- SEITE 5 -->
        <span class="section-label">Seite 5</span>
        <h2>Beides zusammenbringen und die Grenzen kennen</h2>

        <h3>5.1 Der einfache Weg: nachschlagen, dann fragen</h3>
        <p>Am zuverl&auml;ssigsten arbeitet die Box mit einem Handgriff: Du suchst den Artikel in Kiwix, kopierst den passenden Abschnitt und gibst ihn dem Modell als Grundlage. So antwortet es aus einem Text, den du selbst gepr&uuml;ft hast, und du siehst sofort, worauf es sich bezieht.</p>
        <pre>Beantworte die Frage ausschlie&szlig;lich anhand des Textes unten.
Wenn die Antwort dort nicht steht, schreib: &bdquo;Steht nicht im Text.&ldquo;
Zitiere den Satz, auf den du dich st&uuml;tzt.

Frage: [deine Frage]

Text:
[kopierter Abschnitt aus Kiwix]</pre>

        <h3>5.2 Der Bastelweg: die KI selbst suchen lassen</h3>
        <p>Es gibt Br&uuml;cken, &uuml;ber die ein Modell selbst in ZIM-Dateien sucht, zum Beispiel den quelloffenen <a href="https://github.com/cameronrye/openzim-mcp" target="_blank" rel="noopener">OpenZIM MCP Server</a>. Sie laufen &uuml;ber <strong>MCP</strong>, einen Standard, mit dem KI-Programme auf externe Werkzeuge zugreifen. LM Studio kann solche Server einbinden. F&uuml;r diesen Guide haben wir diesen Weg nicht durchgetestet, und MCP-Server k&ouml;nnen je nach Bauart Code ausf&uuml;hren und auf Dateien zugreifen. Wer es probieren will, sollte genau wissen, was da installiert wird.</p>

        <h3>5.3 Die ehrlichen Grenzen</h3>
        <ul>
          <li>Lokale Modelle halluzinieren auch. Offline macht eine Antwort privater, aber nicht richtiger. Kleine Modelle liegen bei Fachfragen in der Regel h&auml;ufiger daneben als gro&szlig;e Cloud-Modelle. Mehr dazu in <a href="/pages/ki-durchschauen">KI durchschauen</a>.</li>
          <li>Wikipedia ist ein Einstieg. F&uuml;r Entscheidungen in der Behandlung bleiben Leitlinie und Prim&auml;rliteratur die Quelle. Welche Werkzeuge daf&uuml;r taugen, zeigt <a href="/pages/medizin-ki-oder-chatgpt">Medizin-KI oder ChatGPT?</a>.</li>
          <li>Der Stand ist eingefroren. Neue Studien und Leitlinien erscheinen erst mit der n&auml;chsten Ausgabe, einige englische Sammlungen im Katalog sind schon l&auml;nger nicht mehr aktualisiert worden.</li>
          <li>Lokal ist noch kein Datenschutzkonzept. Wenn nichts den Rechner verl&auml;sst, f&auml;llt ein gro&szlig;es Risiko weg. Patientendaten brauchen trotzdem Festplattenverschl&uuml;sselung, Zugriffsschutz und eine saubere rechtliche Grundlage.</li>
        </ul>

        <div class="golden-rule">
          <h2>Die ehrliche Regel</h2>
          <p>Fang klein an. WikiMed und Kiwix sind in zehn Minuten eingerichtet und zeigen dir, ob du im Alltag &uuml;berhaupt offline nachschl&auml;gst. <strong>Die gro&szlig;e Wikipedia und das KI-Modell lohnen sich erst, wenn du die kleine Box tats&auml;chlich benutzt.</strong></p>
        </div>

        <div class="source-note">
          Technische Grundlage: Kiwix-Katalog (<a href="https://browse.library.kiwix.org" target="_blank" rel="noopener">browse.library.kiwix.org</a>), <a href="https://docs.ollama.com/faq" target="_blank" rel="noopener">Ollama-Dokumentation</a> und <a href="https://lmstudio.ai/docs/app/mcp" target="_blank" rel="noopener">LM-Studio-Dokumentation</a>, Stand November 2026. Gr&ouml;&szlig;en gerundet.
        </div>

        <div class="footer">
          Mehr Interesse? <a href="/pages/erstgesprach">Kostenloses Erstgespr&auml;ch &rarr;</a><br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> - Selbstbestimmte Tech-Tools f&uuml;r Wissensarbeit. Lokal-first, mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-offline-wissensbox', OxGuideOfflineWissensbox);
