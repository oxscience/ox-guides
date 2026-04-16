class OxGuideDetectiveKit extends HTMLElement {
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
  --green-bg:#064e3b;--green-text:#6ee7b7;
  --yellow-bg:#3b2f06;--yellow-text:#fbbf24;
  --indigo-bg:#1e1b4b;--indigo-text:#a5b4fc;
  --code-bg:#1a1a2e;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
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

.section-label{
  display:inline-block;font-size:11.2px;text-transform:uppercase;
  letter-spacing:0.1em;color:var(--primary);margin-bottom:4px;
}

.tool-card{
  background:var(--surface);border-left:3px solid var(--border-accent);
  padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;
}
.tool-card p{margin-bottom:8px;font-size:14.4px}
.tool-card p:last-child{margin-bottom:0}

.tool-name{color:var(--white);font-weight:600;font-size:16px;display:block;margin-bottom:6px}

.tool-label{
  display:inline-block;font-size:11.2px;text-transform:uppercase;
  letter-spacing:0.05em;padding:2px 8px;border-radius:3px;margin-bottom:8px;
}
.label-kostenlos{background:var(--green-bg);color:var(--green-text)}
.label-freemium{background:var(--yellow-bg);color:var(--yellow-text)}
.label-extension{background:var(--indigo-bg);color:var(--indigo-text)}

.tool-card strong{color:var(--white)}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
  border:1px solid var(--border-accent);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}
.golden-rule ol{margin:12px 0 16px 24px}
.golden-rule li{margin-bottom:8px;font-size:14.4px}
.golden-rule strong{color:var(--white)}

.exercise{background:var(--surface-alt);border-radius:8px;padding:16px 20px;margin:12px 0}
.exercise strong{color:var(--white)}
.exercise p{margin-bottom:0;font-size:14.4px}
.exercise .time{color:var(--primary);font-size:12.8px;font-weight:500}

.source-note{
  color:var(--text-dim);font-size:12.8px;font-style:italic;
  margin-top:32px;padding-top:16px;border-top:1px solid var(--border);
}
.source-note a{color:var(--text-muted)}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">← Alle Guides</a>

        <h1>Fake News, KI-Fakes & Desinformation erkennen</h1>
        <div class="meta">5-Seiten-Guide · 12 Tools · Out Of The Box Science</div>

        <p class="intro">KI-generierte Bilder in Fachartikeln. Gefälschte Studien auf Social Media. Deepfake-Videos von Konferenzen. Für Dozenten, Forscher und Tech-Professionals ist das kein abstraktes Problem — es betrifft eure Arbeit direkt. Dieser Guide gibt euch 12 konkrete Tools an die Hand. Keine Theorie, kein Hype.</p>

        <!-- Kategorie 1 -->
        <span class="section-label">Kategorie 1</span>
        <h2>Bilder & Videos prüfen</h2>

        <div class="tool-card">
          <span class="tool-name">Google Reverse Image Search</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Bild hochladen oder URL eingeben — Google zeigt, wo das Bild sonst noch auftaucht.</p>
          <p><strong>Wofür:</strong> Prüfen ob ein Bild das zeigt, was behauptet wird. Beispiel: "Foto von Konferenz X" → Reverse Search zeigt: Bild ist 3 Jahre alt, anderer Kontext.</p>
          <p><strong>Wie:</strong> <a href="https://images.google.com">images.google.com</a> → Kamera-Icon → Bild hochladen</p>
          <p><strong>Limit:</strong> Findet Kopien, aber keine KI-generierten Bilder.</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">TinEye</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Findet die <em>älteste</em> Version eines Bildes im Netz.</p>
          <p><strong>Wofür:</strong> Wenn ein virales Bild angeblich "brandneu" ist — TinEye zeigt, ob es schon vor Monaten existierte.</p>
          <p><strong>Wie:</strong> <a href="https://tineye.com">tineye.com</a> → Bild hochladen → nach Datum sortieren</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">InVID WeVerify</span>
          <span class="tool-label label-extension">Browser-Extension</span>
          <p><strong>Was es kann:</strong> Videos in Einzelbilder zerlegen, Metadaten auslesen, Reverse-Search auf Keyframes.</p>
          <p><strong>Wofür:</strong> Das Schweizer Taschenmesser für Video-Verifikation. Wenn Studierende ein "Beweis-Video" mitbringen oder ein viraler Clip in eurer Timeline landet.</p>
          <p><strong>Wie:</strong> Chrome/Firefox Extension installieren → Video-URL eingeben → Keyframes analysieren</p>
        </div>

        <!-- Kategorie 2 -->
        <span class="section-label">Kategorie 2</span>
        <h2>KI-generierte Inhalte erkennen</h2>

        <div class="tool-card">
          <span class="tool-name">Hive Moderation</span>
          <span class="tool-label label-extension">Browser-Extension</span>
          <p><strong>Was es kann:</strong> Erkennt Muster von Midjourney, DALL-E und Stable Diffusion in Bildern.</p>
          <p><strong>Wofür:</strong> Schneller Check ob ein Bild KI-generiert ist. Praktisch wenn ihr Paper reviewt oder Studierende verdächtige Grafiken einreichen.</p>
          <p><strong>Wie:</strong> Chrome Extension installieren → auf beliebiger Webseite Bilder prüfen</p>
          <p><strong>Limit:</strong> Neue KI-Modelle werden nicht sofort erkannt.</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">AI or Not</span>
          <span class="tool-label label-freemium">Freemium</span>
          <p><strong>Was es kann:</strong> Upload von Bildern, Audio und Video → Einschätzung ob KI-generiert.</p>
          <p><strong>Wofür:</strong> Breiterer Check als Hive — deckt auch Audio (Deepfake-Stimmen) und Video ab.</p>
          <p><strong>Wie:</strong> <a href="https://aiornot.com">aiornot.com</a> → Datei hochladen</p>
          <p><strong>Limit:</strong> Begrenzte kostenlose Nutzung, nicht 100% zuverlässig.</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">C2PA Content Credentials</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Zeigt kryptografische Metadaten (eine Art "digitaler Personalausweis"), die dokumentieren wie ein Bild erstellt wurde — inklusive ob KI beteiligt war.</p>
          <p><strong>Wofür:</strong> Der kommende Standard. Adobe, Google und Microsoft bauen das bereits ein. Noch nicht flächendeckend, aber wichtig zu kennen.</p>
          <p><strong>Wie:</strong> <a href="https://contentcredentials.org/verify">contentcredentials.org/verify</a> → Bild hochladen</p>
        </div>

        <!-- Kategorie 3 -->
        <span class="section-label">Kategorie 3</span>
        <h2>Fakten checken</h2>

        <div class="tool-card">
          <span class="tool-name">Google Fact Check Explorer</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Durchsucht über 150.000 Fact-Checks von verifizierten Organisationen weltweit.</p>
          <p><strong>Wofür:</strong> Schnellste Methode um zu prüfen, ob eine Behauptung bereits gecheckt wurde.</p>
          <p><strong>Wie:</strong> <a href="https://toolbox.google.com/factcheck/explorer">toolbox.google.com/factcheck/explorer</a> → Suchbegriff eingeben</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">Snopes</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Spezialisiert auf urbane Legenden, virale Hoaxes und Internet-Mythen.</p>
          <p><strong>Wofür:</strong> Wenn "diese eine WhatsApp-Nachricht" wieder die Runde macht oder Studierende mit einer wilden Behauptung kommen.</p>
          <p><strong>Wie:</strong> <a href="https://snopes.com/fact-check/">snopes.com/fact-check</a> → Suchbegriff eingeben</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">AFP Fact Check</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Internationales Netzwerk mit 150+ Prüfern in 26 Sprachen — auch Deutsch.</p>
          <p><strong>Wofür:</strong> Besonders für internationale Desinformation und Themen, die über den englischsprachigen Raum hinausgehen.</p>
          <p><strong>Wie:</strong> <a href="https://factcheck.afp.com">factcheck.afp.com</a> → Suchbegriff eingeben</p>
        </div>

        <!-- Kategorie 4 -->
        <span class="section-label">Kategorie 4</span>
        <h2>Medien-Bias erkennen</h2>

        <div class="tool-card">
          <span class="tool-name">Ad Fontes Media Bias Chart</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Interaktive Karte, die Medienquellen nach politischer Tendenz und Faktentreue einordnet.</p>
          <p><strong>Wofür:</strong> In der Lehre Gold wert — zeigt Studierenden visuell, wo eine Quelle im Spektrum steht.</p>
          <p><strong>Wie:</strong> <a href="https://adfontesmedia.com/interactive-media-bias-chart">adfontesmedia.com</a> → Quelle suchen</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">Ground News</span>
          <span class="tool-label label-freemium">Freemium</span>
          <p><strong>Was es kann:</strong> Zeigt zu jeder Nachricht, welche Seite des politischen Spektrums sie aufgreift — und welche sie ignoriert ("Blindspots").</p>
          <p><strong>Wofür:</strong> Perfekt um Studierenden Medien-Bias greifbar zu machen. Auch für die eigene Informationshygiene.</p>
          <p><strong>Wie:</strong> <a href="https://ground.news">ground.news</a> → Thema suchen</p>
          <p><strong>Limit:</strong> Volle Features ab $8/Monat, Grundversion kostenlos.</p>
        </div>

        <!-- Kategorie 5 -->
        <span class="section-label">Kategorie 5</span>
        <h2>Webseiten & Quellen prüfen</h2>

        <div class="tool-card">
          <span class="tool-name">Wayback Machine</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Das "Gedächtnis des Internets" — zeigt gespeicherte Versionen von Webseiten, auch wenn sie gelöscht oder verändert wurden.</p>
          <p><strong>Wofür:</strong> Wenn eine Quelle plötzlich offline ist oder jemand behauptet, eine Seite hätte "schon immer" so ausgesehen.</p>
          <p><strong>Wie:</strong> <a href="https://web.archive.org">web.archive.org</a> → URL eingeben → Zeitstrahl durchgehen</p>
        </div>

        <div class="tool-card">
          <span class="tool-name">WHOIS Lookup</span>
          <span class="tool-label label-kostenlos">Kostenlos</span>
          <p><strong>Was es kann:</strong> Zeigt, wann eine Domain registriert wurde und wem sie gehört.</p>
          <p><strong>Wofür:</strong> Fake-News-Seiten werden oft kurzfristig erstellt. Wenn eine "Nachrichtenseite" erst seit 3 Wochen existiert — starkes Warnsignal.</p>
          <p><strong>Wie:</strong> <a href="https://whois.com/whois/">whois.com/whois</a> → Domain eingeben</p>
        </div>

        <!-- Goldene Regel -->
        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Kein einzelnes Tool gibt eine definitive Antwort. Die Kombination macht's:</p>
          <ol>
            <li><strong>Bild/Video prüfen</strong> → Reverse Image Search + InVID</li>
            <li><strong>KI-Check</strong> → Hive + AI or Not</li>
            <li><strong>Behauptung prüfen</strong> → Fact Check Explorer + Snopes</li>
            <li><strong>Quelle einordnen</strong> → Media Bias Chart + WHOIS</li>
          </ol>
          <p><strong>Und das Wichtigste: Langsamer werden.</strong> Die meiste Desinformation funktioniert, weil wir zu schnell teilen. Zwei Minuten nachdenken schlägt jedes Tool.</p>
        </div>

        <!-- Übungsideen -->
        <h2>Für die Lehre: 3 Übungsideen</h2>

        <div class="exercise">
          <strong>1. Bild-Detektiv</strong> <span class="time">15 Min</span>
          <p>Zeigt Studierenden 5 Bilder — 2 davon KI-generiert. Sie müssen mit Hive und Reverse Image Search herausfinden, welche echt sind.</p>
        </div>

        <div class="exercise">
          <strong>2. Quellen-Check Challenge</strong> <span class="time">20 Min</span>
          <p>Gebt 3 virale Behauptungen aus Social Media. Teams prüfen mit Fact Check Explorer, Snopes und WHOIS, was stimmt.</p>
        </div>

        <div class="exercise">
          <strong>3. Media Bias Mapping</strong> <span class="time">30 Min</span>
          <p>Studierende nehmen ein aktuelles Thema und vergleichen die Berichterstattung über Ground News und die Media Bias Chart. Diskussion: Was fällt auf?</p>
        </div>

        <div class="source-note">
          Inspiriert von <a href="https://matthewfacciani.substack.com/p/your-digital-detective-kit">Your Digital Detective Kit</a> von Matthew Facciani, PhD — kuratiert und adaptiert für den deutschsprachigen Wissenschafts- und Lehrkontext.
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> — Tech-Tools für Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-detective-kit', OxGuideDetectiveKit);
