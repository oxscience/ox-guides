class OxGuideSelbstverteidigung extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:host{
  --bg:#0a0a0a;--surface:#111827;--surface-alt:#0f172a;--surface-2:#0d1117;
  --border:#1a1a1a;--border-faint:#1f2937;--border-accent:#6366f1;
  --text:#d4d4d4;--text-secondary:#999;--text-muted:#666;--text-dim:#555;
  --white:#fff;--white-soft:#e0e0e0;
  --primary:#6366f1;--primary-light:#a5b4fc;
  --green-bg:#064e3b;--green-text:#6ee7b7;
  --yellow-bg:#3b2f06;--yellow-text:#fbbf24;
  --indigo-bg:#1e1b4b;--indigo-text:#a5b4fc;
  --red-bg:#3b0a0a;--red-text:#fca5a5;
  --amber:#f59e0b;--amber-bg:#1a1408;--amber-border:#b45309;--amber-light:#fbbf24;
  --code-bg:#1a1a2e;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.75;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:920px;margin:0 auto;padding:48px 24px 64px}

.back{display:inline-block;color:var(--primary);text-decoration:none;font-size:13.6px;margin-bottom:32px}

h1{font-size:28px;font-weight:700;color:var(--white);margin-bottom:8px;letter-spacing:-0.02em;line-height:1.3}
.meta{color:var(--text-muted);font-size:13.6px;margin-bottom:40px}
.intro{color:var(--text-secondary);margin-bottom:32px;font-size:15.2px}

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}
h3{font-size:16px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}
p{margin-bottom:16px}

code{background:var(--code-bg);color:var(--primary-light);padding:2.4px 6.4px;border-radius:4px;font-size:0.9em;font-family:"SF Mono","Fira Code",monospace}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.tools-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:16px 0}
.tools-grid .tool-card{margin:0}

.tool-card{background:var(--surface);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0}
.tool-card strong{color:var(--white)}
.tool-card .tool-name{color:var(--white);font-weight:600;font-size:16px;display:block;margin-bottom:6.4px}
.tool-card .tool-label{display:inline-block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.05em;padding:2.4px 8px;border-radius:3px;margin-bottom:8px}
.tool-card p{margin-bottom:8px;font-size:14.4px}
.tool-card p:last-child{margin-bottom:0}

.label-kostenlos{background:var(--green-bg);color:var(--green-text)}
.label-freemium{background:var(--yellow-bg);color:var(--yellow-text)}
.label-opensource{background:var(--indigo-bg);color:var(--indigo-text)}
.label-hardware{background:var(--red-bg);color:var(--red-text)}

.section-label{display:inline-block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-top:48px;margin-bottom:0}
.section-label + h2{margin-top:4px}

.highlight-box{background:var(--surface);border-left:3px solid var(--border-accent);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0}
.highlight-box strong{color:var(--white)}

.urgent-box{background:var(--amber-bg);border:1px solid var(--amber-border);border-left:4px solid var(--amber);padding:20px 24px;border-radius:0 8px 8px 0;margin:32px 0}
.urgent-box .urgent-label{display:inline-block;background:var(--amber);color:var(--amber-bg);font-size:11.2px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:3.2px 9.6px;border-radius:4px;margin-bottom:12px}
.urgent-box h3{color:var(--amber-light);margin-top:0;margin-bottom:8px;font-size:17.6px}
.urgent-box p{font-size:14.4px}

.checklist{list-style:none;margin:16px 0 8px;padding:0}
.checklist li{position:relative;padding-left:28px;margin-bottom:9.6px;font-size:15.2px}
.checklist li::before{content:"";position:absolute;left:0;top:4.8px;width:17.6px;height:17.6px;border:1.5px solid var(--amber);border-radius:3px;background:#0f0a02}

.golden-rule{background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);border:1px solid var(--primary);border-radius:8px;padding:20px 24px;margin:32px 0}
.golden-rule h2{margin-top:0}

.lehre-section{background:var(--surface-2);border:1px solid var(--border-faint);border-radius:12px;padding:32px 36px;margin:48px 0 32px}
.lehre-section h2{margin-top:0}
.lehre-section .exercise{background:var(--surface)}

.exercise{background:var(--surface-alt);border-radius:8px;padding:16px 20px;margin:12px 0}
.exercise strong{color:var(--white)}
.exercise .time{color:var(--primary);font-size:12.8px;font-weight:500}

.footer{text-align:center;margin-top:48px;padding-top:32px;border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

.source-note{color:var(--text-dim);font-size:12.8px;font-style:italic;margin-top:32px;padding-top:16px;border-top:1px solid var(--border)}
.source-note a{color:var(--text-muted)}

@media(max-width:720px){
  .tools-grid{grid-template-columns:1fr}
  .lehre-section{padding:20px 22.4px}
}
@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">← Alle Guides</a>

        <h1>Digitale Selbstverteidigung 2026</h1>
        <div class="meta">6-Seiten-Guide · 3-Stufen-System · Out Of The Box Science</div>

        <p class="intro">Deutschland ist Teil der „14 Eyes"-Geheimdienstallianz. Die EU plant mit dem „Digital Omnibus" (2026) den Schutz pseudonymisierter Daten aufzuweichen. KI macht Profiling und Social Engineering effizienter. Und wenn eine Firma wie 23andMe insolvent geht, steht plötzlich euer DNA-Profil zum Verkauf. Die DSGVO allein reicht nicht mehr — ihr braucht technische Schutzmaßnahmen. Dieser Guide gibt euch ein dreistufiges System an die Hand.</p>

        <div class="urgent-box">
          <span class="urgent-label">Warum jetzt</span>
          <h3>Es ist nicht mehr theoretisch</h3>
          <p>Rechtlicher Schutz reicht schon eine ganze Weile nicht mehr aus. Deutschland tauscht im Rahmen der „14 Eyes" Überwachungsdaten mit dreizehn weiteren Staaten aus, die EU-Kommission plant für 2026 mit dem „Digital Omnibus" eine Reform, die Tracking ohne ausdrückliche Einwilligung deutlich erleichtert, und KI hebt Profiling auf ein Niveau, bei dem ein paar öffentliche Kommentare reichen, um euch erschreckend präzise zu modellieren. Das ist der Hintergrund, und der ist nicht neu — er wird nur Jahr für Jahr enger.</p>
          <p style="margin-bottom:0">Konkret obendrauf kommt jetzt noch ein ziemlich unangenehmes Detail: Anthropic hat gerade ein Memo zu einer akuten, sehr realen Cyber-Bedrohung rausgehauen, und ja, das klingt erstmal nach dem üblichen Hype-Geräusch, ist aber tatsächlich keines — auch die Konkurrenz hat gegengelesen, und das Ding hält stand. Wie ihr konkret reagieren solltet, steht direkt unten in Stufe 1 unter <em>Updates</em>.</p>
        </div>

        <span class="section-label">Stufe 1 · Basisschutz</span>
        <h2>Das Fundament (1–2 Wochenenden)</h2>
        <p>Diese Maßnahmen sollte <em>jeder</em> umsetzen, der einen Computer benutzt. Wenig Aufwand, massive Wirkung.</p>

        <h3>Updates — alles, was einen Chip hat</h3>
        <p>Aus dem aktuellen Anthropic-Memo geht hervor, was viele in der Security-Szene ohnehin schon predigen: Die Mehrheit der heutigen Angriffe läuft nicht über euren Laptop oder euer Telefon, sondern über die Geräte, an die niemand denkt — Router, Auto-Infotainment, Smart-TV, der vernetzte Drucker im Arbeitszimmer, das alte Tablet im Kinderzimmer, das nur noch zum Netflix-Schauen herumliegt. Alles, wo ein Chip sitzt und Funk drinsteckt, gehört dazu. Und während fast jeder weiß, wie man iOS aktualisiert, wissen die wenigsten, wie sie ihren eigenen Router oder das Infotainment im Auto auf den neuesten Stand bringen — genau dieses Wissens-Loch ist das eigentliche Einfallstor.</p>
        <ul class="checklist">
          <li>Lernt, wie ihr <strong>jedes</strong> Gerät bei euch zu Hause updatet — vom iPhone über Laptop und Router bis zum Auto-Infotainment, Smart-TV und Drucker. Alles, wo ein Chip oder Funk drinsteckt, gehört auf die Liste.</li>
          <li>Wo es Auto-Updates gibt: anschalten und nicht weiter darüber nachdenken. Bei der Hardware, die das nicht von selbst macht (Router, Auto, viele IoT-Geräte), legt euch eine simple Kalendererinnerung an — einmal im Monat fünf Minuten reicht völlig.</li>
          <li>Nehmt eure Eltern, Großeltern und eure Partnerin mit. Wer normalerweise nur in den Apple Store läuft, wenn etwas blinkt, hat selten einen Plan davon, wie man einen Router von innen aktualisiert — und genau deren Geräte hängen oft im selben Heimnetz wie eure.</li>
          <li>Falls ihr Draht zu politischen Vertretern habt: Thema vorsichtig reinbringen. Die meisten verstehen die technische Lage nicht annähernd, und ohne Druck aus dem Wahlkreis ändert sich daran auch nichts.</li>
        </ul>
        <p>Wir mussten alle erst lernen, halbwegs sinnvoll mit Social Media umzugehen — und so eine Verhaltensänderung steht uns jetzt bei den Updates bevor. Das wird keine einmalige Wochenend-Aktion, die ihr abhakt und vergesst, sondern eine kleine Routine, die einfach dazugehört wie das Aufladen vom Telefon oder der Service am Auto.</p>

        <h3>Passwort-Management</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">Bitwarden</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Quelloffener Passwortmanager mit Zero-Knowledge-Architektur (euer Anbieter kann eure Daten nicht lesen).</p>
            <p><strong>Wofür:</strong> Ein starkes, zufälliges Passwort pro Dienst — ohne es euch merken zu müssen. Browser-integrierte Manager sind anfällig bei Datenlecks, nutzt die nicht.</p>
            <p><strong>Wie:</strong> <a href="https://bitwarden.com">bitwarden.com</a> → Account → Master-Passphrase (4–6 zufällige Wörter) → Browser-Extension installieren</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">KeePassXC</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Komplett lokaler Passwortmanager. Keine Cloud, keine Synchronisation außer euer Tresor liegt auf einer Festplatte die ihr kontrolliert.</p>
            <p><strong>Wofür:</strong> Für alle die keine Cloud wollen. Etwas unbequemer, dafür niemand zwischen euch und euren Daten.</p>
            <p><strong>Wie:</strong> <a href="https://keepassxc.org">keepassxc.org</a> → Download → Tresor-Datei erstellen</p>
          </div>
        </div>
        <div class="highlight-box">
          <strong>Sicherheitsfragen niemals wahrheitsgemäß beantworten.</strong>
          <p style="margin-top:6.4px;margin-bottom:0;font-size:14.4px">„Mädchenname der Mutter" lässt sich googeln. Generiert stattdessen zufällige Antworten im Passwortmanager und speichert sie dort.</p>
        </div>

        <h3>Zwei-Faktor-Authentifizierung (2FA)</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">Aegis Authenticator</span>
            <span class="tool-label label-opensource">Open Source · Android</span>
            <p><strong>Was es kann:</strong> App-basierte 2FA-Codes (TOTP), lokal verschlüsselt, exportierbar.</p>
            <p><strong>Wofür:</strong> SMS-Codes sind unsicher — sie können per SIM-Swapping abgefangen werden. App-basiert ist der neue Standard.</p>
            <p><strong>Wie:</strong> <a href="https://getaegis.app">getaegis.app</a> → Installieren → QR-Codes eurer Dienste scannen</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">YubiKey</span>
            <span class="tool-label label-hardware">Hardware</span>
            <p><strong>Was es kann:</strong> Physischer USB/NFC-Schlüssel als zweiter Faktor. Phishing-resistent auf Hardware-Ebene.</p>
            <p><strong>Wofür:</strong> Höchstes 2FA-Niveau. Für kritische Accounts (Email, GitHub, Passwortmanager). Einmal kaufen (~50€), jahrelang nutzen.</p>
            <p><strong>Wie:</strong> <a href="https://yubico.com">yubico.com</a> → Modell wählen → bei Diensten unter „Security Keys" registrieren</p>
          </div>
        </div>

        <h3>Alltagstools</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">Proton Mail</span>
            <span class="tool-label label-freemium">Freemium</span>
            <p><strong>Was es kann:</strong> Verschlüsselter Email-Dienst aus der Schweiz. Zero-Knowledge, der Anbieter kann eure Mails nicht lesen.</p>
            <p><strong>Wofür:</strong> Ersatz für Gmail/Outlook wenn ihr mit sensiblen Inhalten (Forschungsdaten, Personalakten, Quellenschutz) arbeitet.</p>
            <p><strong>Wie:</strong> <a href="https://proton.me">proton.me</a> → Kostenloser Account mit 1 GB. Alternative: <a href="https://tuta.com">Tuta</a> (aus Deutschland).</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">Signal</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> End-to-End-verschlüsselter Messenger. Das Signal-Protokoll ist auch in WhatsApp eingebaut — aber bei Signal ohne Metadaten-Sammlung durch Meta.</p>
            <p><strong>Wofür:</strong> Standard für vertrauliche Kommunikation mit Kollegen, Studierenden, Quellen. Alternative ohne Handynummer: <a href="https://threema.ch">Threema</a> (Schweizer Recht).</p>
            <p><strong>Wie:</strong> <a href="https://signal.org">signal.org</a> → Installieren → Kontakte einladen</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">Proton VPN / Mullvad</span>
            <span class="tool-label label-freemium">Freemium</span>
            <p><strong>Was es kann:</strong> VPN (Virtual Private Network, Tunnel der euren Datenverkehr verschleiert). Verbirgt eure IP-Adresse und verhindert dass euer Provider euer Surfverhalten mitschneidet.</p>
            <p><strong>Wofür:</strong> WLAN in Hotels, Uni-Netzen, Konferenzen. Mullvad akzeptiert Bargeld per Post und verlangt keinen Account.</p>
            <p><strong>Wie:</strong> <a href="https://protonvpn.com">protonvpn.com</a> (kostenlose Variante) oder <a href="https://mullvad.net">mullvad.net</a> (5€/Monat, anonym)</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">DuckDuckGo / Brave Search</span>
            <span class="tool-label label-kostenlos">Kostenlos</span>
            <p><strong>Was es kann:</strong> Suchmaschinen ohne Tracking. Kein personalisiertes Profil, keine gespeicherten Suchanfragen.</p>
            <p><strong>Wofür:</strong> Direkter Google-Ersatz. Für wissenschaftliche Recherche oft sogar besser, weil die Ergebnisse nicht gefiltert sind.</p>
            <p><strong>Wie:</strong> <a href="https://duckduckgo.com">duckduckgo.com</a> oder <a href="https://search.brave.com">search.brave.com</a> → als Standardsuche im Browser setzen</p>
          </div>
        </div>

        <h3>Digitalen Fußabdruck aufräumen</h3>
        <p>Einmal im Monat den eigenen Namen googeln. Alte Accounts löschen über <a href="https://justdeleteme.xyz">justdeleteme.xyz</a>. Google-Aktivitätsprotokolle deaktivieren unter <a href="https://myactivity.google.com">myactivity.google.com</a>. Bei Datenhändlern (z.B. <code>meineauskunft.ch</code>, <code>numero24.de</code>) nach DSGVO Art. 17 Löschung fordern.</p>

        <span class="section-label">Stufe 2 · Fortgeschritten</span>
        <h2>Der Burggraben</h2>
        <p>Hier geht ihr über Hygiene hinaus und baut aktive Isolation. Spürbarer Komfortverlust — dafür ein Level, bei dem ihr nicht mehr „Mitfahrgelegenheit" seid.</p>

        <h3>Biometrie deaktivieren</h3>
        <div class="highlight-box">
          <strong>Passwörter genießen höheren rechtlichen Schutz als Fingerabdrücke.</strong>
          <p style="margin-top:6.4px;margin-bottom:0;font-size:14.4px">Das Nemo-tenetur-Prinzip schützt euch davor, euch selbst zu belasten — ein Passwort darf verweigert werden, einen Fingerabdruck kann man euch abnehmen. An Flughäfen, Grenzen oder Demos: Face ID / Touch ID ausschalten.</p>
        </div>

        <h3>Identitätstrennung</h3>
        <p>Nutzt verschiedene E-Mail-Adressen und Pseudonyme für verschiedene Lebensbereiche: eine für Beruf, eine für Shopping, eine für Foren, eine privat. Dienste wie <a href="https://simplelogin.io">SimpleLogin</a> (Proton) oder <a href="https://addy.io">addy.io</a> erzeugen Wegwerf-Aliase, die alle in euer echtes Postfach weiterleiten — ihr könnt sie bei Spam einfach abschalten.</p>

        <h3>Browser-Härtung</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">Gehärteter Firefox</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Firefox lässt sich tief konfigurieren (unter <code>about:config</code>) — Telemetrie aus, Third-Party-Cookies blockiert, Fingerprinting-Schutz an.</p>
            <p><strong>Wofür:</strong> Euer täglicher Browser. Mit uBlock Origin als einziger Extension seid ihr weiter als 95% aller Nutzer.</p>
            <p><strong>Wie:</strong> <a href="https://firefox.com">firefox.com</a> → Installieren → uBlock Origin aus dem Add-on-Store → Privacy-Einstellungen auf „Streng"</p>
            <p><strong>Alternative:</strong> <a href="https://waterfox.net">Waterfox</a> — Firefox-Fork ohne Mozilla-Telemetrie, ab Werk strenger konfiguriert.</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">Tor Browser</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Anonymisierendes Netzwerk — euer Traffic läuft über drei zufällige Knoten weltweit, keine Seite sieht eure echte IP.</p>
            <p><strong>Wofür:</strong> Recherche zu sensiblen Themen, Quellenschutz, Umgehen von Zensur. Langsamer als normale Browser, aber alternativlos für echte Anonymität.</p>
            <p><strong>Wie:</strong> <a href="https://torproject.org">torproject.org</a> → Download → direkt nutzen</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">NextDNS / Pi-hole</span>
            <span class="tool-label label-freemium">Freemium / Self-hosted</span>
            <p><strong>Was es kann:</strong> Blockiert Tracker auf DNS-Ebene (der „Telefonbuch-Ebene" des Internets) — wirkt für <em>alle</em> Geräte im Netzwerk, auch für Smart-TVs und IoT.</p>
            <p><strong>Wofür:</strong> Einmal einrichten, euer ganzes Haus ist sauberer. Pi-hole läuft auf einem Raspberry Pi (~40€).</p>
            <p><strong>Wie:</strong> <a href="https://nextdns.io">nextdns.io</a> (einfach, cloud-basiert) oder <a href="https://pi-hole.net">pi-hole.net</a> (lokal, mehr Kontrolle)</p>
          </div>
        </div>

        <h3>Mobil & Festplatte</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">GrapheneOS</span>
            <span class="tool-label label-opensource">Open Source · nur Pixel</span>
            <p><strong>Was es kann:</strong> Ein gehärtetes Android-System. Läuft nur auf Google-Pixel-Geräten (ironischerweise haben die die beste Hardware-Sicherheit).</p>
            <p><strong>Wofür:</strong> Wer maximalen Schutz auf dem Smartphone will. Alternative: <a href="https://calyxos.org">CalyxOS</a> (etwas benutzerfreundlicher).</p>
            <p><strong>Wie:</strong> <a href="https://grapheneos.org">grapheneos.org</a> → Web-Installer → Pixel-Gerät anschließen → folgen</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">Festplattenverschlüsselung</span>
            <span class="tool-label label-kostenlos">Built-in</span>
            <p><strong>Was es kann:</strong> Verschlüsselt die gesamte Festplatte — ohne Passwort liest niemand eure Daten, selbst wenn das Gerät geklaut wird.</p>
            <p><strong>Wofür:</strong> Absolute Pflicht für jedes Notebook das das Haus verlässt.</p>
            <p><strong>Wie:</strong> macOS → FileVault (Systemeinstellungen → Datenschutz & Sicherheit). Linux → LUKS bei der Installation. Windows → BitLocker (Pro-Version) oder <a href="https://veracrypt.fr">VeraCrypt</a>.</p>
          </div>
        </div>

        <span class="section-label">Stufe 3 · Maximum</span>
        <h2>Digitale Souveränität</h2>
        <p>Nur für Leute mit sehr hohem Schutzbedarf — Journalisten im Krisengebiet, Whistleblower, Dissidenten. Der Alltag wird spürbar unbequemer. Für die meisten Forscher und Tech-Leute ist Stufe 2 das realistische Ziel; Stufe 3 ist da, damit ihr wisst, was möglich ist.</p>

        <h3>Self-Hosting statt Cloud</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">Nextcloud</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Ersatz für Google Drive, Dropbox und Google Calendar. Läuft auf eurem eigenen Server (oder einem gehosteten bei einem Anbieter eures Vertrauens).</p>
            <p><strong>Wofür:</strong> Volle Kontrolle über eure Dateien. Für Forschungsdaten ist das oft sogar DSGVO-rechtlich einfacher als Google Workspace.</p>
            <p><strong>Wie:</strong> <a href="https://nextcloud.com">nextcloud.com</a> → Hosting-Anbieter (Hetzner, Mailbox.org) oder Raspberry Pi → AIO-Installer</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">Vaultwarden</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Selbstgehosteter Bitwarden-Server. Kompatibel mit allen offiziellen Bitwarden-Apps.</p>
            <p><strong>Wofür:</strong> Passwortmanager ohne dass ein externer Anbieter eure Tresore sieht.</p>
            <p><strong>Wie:</strong> <a href="https://github.com/dani-garcia/vaultwarden">github.com/dani-garcia/vaultwarden</a> → Docker-Container</p>
          </div>
        </div>

        <h3>Anonymes Bezahlen</h3>
        <p>Im physischen Raum: Bargeld. Online: <a href="https://getmonero.org">Monero</a> (Privacy-Coin, nicht öffentlich nachverfolgbar) oder mit Bargeld gekaufte Geschenkkarten/Prepaid-Kreditkarten. Niemals echte Kreditkarten für Dienste, bei denen ihr anonym bleiben wollt.</p>

        <h3>Spezial-Betriebssysteme</h3>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-name">Tails OS</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Live-System vom USB-Stick. Alles läuft über Tor, beim Herunterfahren bleiben keine Spuren.</p>
            <p><strong>Wofür:</strong> Wenn ihr auf einem beliebigen Rechner kurzzeitig anonym arbeiten müsst.</p>
            <p><strong>Wie:</strong> <a href="https://tails.net">tails.net</a> → Image runterladen → auf USB flashen → davon booten</p>
          </div>
          <div class="tool-card">
            <span class="tool-name">Qubes OS</span>
            <span class="tool-label label-opensource">Open Source</span>
            <p><strong>Was es kann:</strong> Betriebssystem mit Kompartmentalisierung — jede Anwendung läuft in einer isolierten VM (virtuelle Maschine). Wenn eine kompromittiert ist, kommt niemand aus ihr raus.</p>
            <p><strong>Wofür:</strong> Das härteste Consumer-OS. Empfohlen von Edward Snowden. Lernkurve ist steil.</p>
            <p><strong>Wie:</strong> <a href="https://qubes-os.org">qubes-os.org</a> → Hardware-Kompatibilität prüfen → Installation</p>
          </div>
        </div>

        <h3>Physischer Schutz</h3>
        <p>Faraday-Taschen blockieren alle Funksignale (GPS, WLAN, Mobilfunk). Praktisch wenn das Handy wirklich mal „weg" sein soll — z.B. bei einer Recherchereise oder einem Arzttermin zu einem sensiblen Thema. Kosten: ~20€.</p>

        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Privacy ist kein Zustand, sondern ein Prozess. Fangt mit Stufe 1 an — <em>konsequent</em>. Passwortmanager + 2FA + verschlüsselter Messenger + aufgeräumte Google-Einstellungen decken 80% der realistischen Risiken ab.</p>
          <ol>
            <li><strong>Woche 1:</strong> Bitwarden einrichten, alle Passwörter ersetzen</li>
            <li><strong>Woche 2:</strong> Aegis für 2FA, SMS-2FA überall abschalten</li>
            <li><strong>Woche 3:</strong> Signal / Proton Mail für sensible Kommunikation</li>
            <li><strong>Woche 4:</strong> Festplattenverschlüsselung, Google-Aktivitäten deaktivieren</li>
          </ol>
          <p style="margin-top:16px;margin-bottom:0"><strong>Wichtiger als Tools: die Haltung.</strong> Je privater ihr werden wollt, desto unbequemer wird der Alltag. Niemand muss auf Stufe 3 — aber jeder sollte Stufe 1 verdienen.</p>
        </div>

        <div class="lehre-section">
          <h2>Für die Lehre: 3 Übungsideen</h2>
          <div class="exercise">
            <strong>1. Passwort-Check</strong> <span class="time">20 Min</span>
            <p>Studierende prüfen mit <a href="https://haveibeenpwned.com">haveibeenpwned.com</a> ob ihre Emails in Datenlecks aufgetaucht sind, und richten gemeinsam Bitwarden ein. Diskussion: Welche 3 Accounts bekommen zuerst ein neues Passwort?</p>
          </div>
          <div class="exercise">
            <strong>2. Digitaler Fußabdruck</strong> <span class="time">30 Min</span>
            <p>Jede/r googelt sich selbst, dokumentiert was öffentlich auffindbar ist. Danach: Welche Spuren kann ich löschen (Just Delete Me, DSGVO Art. 17), welche sind beruflich nötig (LinkedIn)? Output: ein persönlicher Aufräumplan.</p>
          </div>
          <div class="exercise">
            <strong>3. Bedrohungsmodell</strong> <span class="time">45 Min</span>
            <p>Teams entwerfen ein Bedrohungsmodell für eine konkrete Rolle (Journalist in Krisengebiet / Forscher mit Industriepartner / Dozent mit Studierendendaten). Welche Stufe passt? Was sind die drei wichtigsten Maßnahmen? Präsentation in 5 Minuten.</p>
          </div>
        </div>

        <div class="source-note">
          Inspiriert von <a href="https://www.youtube.com/watch?v=_sCrtGJ1k0o">„Deutschland überwacht dich: Rette deine Privatsphäre, bevor es zu spät ist!"</a> von <a href="https://www.youtube.com/@privacytutor">PrivacyTutor</a> — kuratiert, auf den deutschsprachigen Wissenschafts- und Tech-Kontext adaptiert, und mit Übungen für die Lehre ergänzt. Alle Tools haben wir selbst getestet oder sind in der Privacy-Community etabliert.
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">Out Of The Box Science</a> — Tech-Tools für Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-selbstverteidigung', OxGuideSelbstverteidigung);
