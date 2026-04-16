class OxGuideClaudeObsidian extends HTMLElement {
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
.feature-card ul{margin-top:8px}
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
.footer{text-align:center;margin-top:48px;padding-top:32px;border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}
@media(max-width:600px){.container{padding:32px 16px 48px}h1{font-size:22.4px}pre{font-size:12.8px;padding:12px 14px}}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Claude Code + Obsidian: Dein KI-Wissenssystem</h1>
        <div class="meta">5-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Du hast einen Obsidian-Vault mit Notizen, Studien, Ideen &mdash; aber das Verlinken, Aufr&auml;umen und Zusammenfassen kostet Zeit, die du nicht hast. Dieser Guide zeigt dir, wie Claude Code deinen Vault zu einem aktiven Wissenssystem macht: eine KI, die direkt in deinen Dateien arbeitet, Zusammenh&auml;nge findet und wiederkehrende Aufgaben &uuml;bernimmt &mdash; ohne dass deine Daten jemals dein Ger&auml;t verlassen.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1</span>
        <h2>Warum Claude Code + Obsidian</h2>

        <h3>1.1 Zwei Tools, ein Prinzip</h3>
        <p>Obsidian ist ein lokales Zettelkasten- und Wiki-System, das alles als Markdown-Dateien auf deinem Rechner speichert &mdash; keine Cloud, kein Account, volle Kontrolle &uuml;ber deine Daten. Das macht Obsidian datenschutzfreundlich und unabh&auml;ngig von einzelnen Anbietern, aber es bedeutet auch, dass du die Arbeit des Verlinkens, Sortierens und Zusammenfassens selbst &uuml;bernehmen musst.</p>
        <p>Claude Code ist eine KI, die direkt auf deine lokalen Dateien zugreifen kann &mdash; lesen, schreiben, verlinken, umstrukturieren. Anders als ein Chat-Interface, in das du einzelne Texte kopierst, arbeitet Claude Code im Kontext deines gesamten Vaults und kennt die Ordnerstruktur, deine Tags, deine Vorlagen und die Verbindungen zwischen deinen Notizen.</p>
        <p>Zusammen entsteht etwas, das keines der beiden Tools allein leisten kann: ein Wissenssystem mit einem intelligenten Assistenten, der deine Konventionen versteht und repetitive Aufgaben &uuml;bernimmt, w&auml;hrend deine Daten auf deinem Rechner bleiben. Es ist der Unterschied zwischen einem Notizbuch und einem Notizbuch mit einem Assistenten, der es f&uuml;r dich indexiert, verlinkt und pflegt.</p>

        <h3>1.2 Was das NICHT ist</h3>
        <p>Bevor Missverst&auml;ndnisse entstehen: Claude Code ist kein Cloud-basiertes KI-Tool, das deinen gesamten Vault auf einen fremden Server hochl&auml;dt. Deine Dateien bleiben lokal. Claude Code liest sie auf deinem Rechner, verarbeitet den Kontext und schreibt die Ergebnisse zur&uuml;ck in deine lokalen Dateien. Es gibt kein Dashboard, keine App mit Login, keinen Sync-Zwang. Du &ouml;ffnest ein Terminal, gibst einen Auftrag in normaler Sprache, und Claude Code f&uuml;hrt ihn in deinem Vault aus.</p>
        <p>Es ist auch kein Obsidian-Plugin. Du installierst nichts in Obsidian selbst &mdash; Claude Code l&auml;uft als eigenst&auml;ndiges Werkzeug im Terminal und arbeitet auf den gleichen Markdown-Dateien, die Obsidian anzeigt. Beide Tools teilen sich das Dateisystem, ohne voneinander abh&auml;ngig zu sein. Wenn du morgen Claude Code nicht mehr nutzen willst, hat sich an deinem Vault nichts ge&auml;ndert &mdash; alle Dateien sind weiterhin normales Markdown.</p>

        <h3>1.3 Der Unterschied zum reinen Obsidian-Workflow</h3>
        <p>Im klassischen Obsidian-Workflow machst du alles manuell: Inbox-Notizen verarbeiten, Tags vergeben, Verlinkungen ziehen, Vorlagen einf&uuml;gen. Das funktioniert, solange du die Disziplin aufbringst, es regelm&auml;&szlig;ig zu tun &mdash; und solange dein Vault &uuml;berschaubar bleibt. Ab hundert Notizen wird es schwierig, den &Uuml;berblick &uuml;ber fehlende Verlinkungen zu behalten, und ab zweihundert Notizen sammelst du fast zwangsl&auml;ufig verwaiste Eintr&auml;ge an, die nie mit dem Rest verbunden wurden. Claude Code &uuml;bernimmt genau diese Aufgaben: Es findet die L&uuml;cken, schl&auml;gt Verbindungen vor und verarbeitet neue Eintr&auml;ge nach deinen Regeln.</p>

        <h3>1.4 F&uuml;r wen sich diese Kombination lohnt</h3>
        <p>Wenn du deinen Vault haupts&auml;chlich als schnelles Notizbuch nutzt und selten zur&uuml;ckgehst, ist Claude Code wahrscheinlich &uuml;berdimensioniert. Die Kombination entfaltet ihren Wert dann, wenn du ein Wissenssystem aufbauen willst, das mit der Zeit dichter und n&uuml;tzlicher wird &mdash; wenn du Studien sammelst, Konzepte vernetzt, Fortbildungen dokumentierst oder Projekte &uuml;ber Monate hinweg in deinem Vault begleitest. In diesem Szenario spart Claude Code nicht nur Zeit bei der Pflege, sondern hilft dir, Verbindungen zu sehen, die dir beim manuellen Durchbl&auml;ttern entgangen w&auml;ren.</p>

        <div class="callout">
          <strong>Was du brauchst:</strong>
          <ul>
            <li><strong>Obsidian</strong> (kostenlos, <a href="https://obsidian.md">obsidian.md</a>) &mdash; installiert auf deinem Rechner</li>
            <li><strong>Claude Code</strong> (Anthropic-Account mit Claude Pro oder Max) &mdash; im Terminal verf&uuml;gbar</li>
            <li><strong>Ein Vault</strong> mit mindestens 10&ndash;20 bestehenden Notizen &mdash; je mehr Kontext, desto besser funktionieren die Workflows</li>
          </ul>
          <p style="margin-top:8px;margin-bottom:0">Falls du noch keinen Vault hast, schau dir zuerst unseren <a href="/pages/ox-guide-wissenssystem-obsidian">Obsidian-Einsteiger-Guide</a> an &mdash; dort baust du in einer Stunde die Grundstruktur auf, die du hier brauchst.</p>
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2</span>
        <h2>Setup: Claude Code auf deinen Vault ausrichten</h2>

        <h3>2.1 Die CLAUDE.md &mdash; dein Briefing f&uuml;r die KI</h3>
        <p>Claude Code liest beim Start automatisch eine Datei namens <code>CLAUDE.md</code> im Wurzelverzeichnis deines Projekts. Diese Datei ist dein Briefing: Hier beschreibst du die Struktur deines Vaults, deine Konventionen f&uuml;r Tags und Dateinamen, den Aufbau deiner Vorlagen und alles andere, was Claude Code wissen muss, um sinnvoll in deinem Vault zu arbeiten.</p>
        <p>Ohne diese Datei kann Claude Code zwar trotzdem auf deine Dateien zugreifen, aber es fehlt ihm der Kontext, um deine Konventionen einzuhalten &mdash; es w&uuml;rde Tags erfinden statt deine bestehenden zu verwenden, Dateien anders benennen als du es gewohnt bist, und Notizen in Ordner verschieben, die es f&uuml;r sinnvoll h&auml;lt statt in die, die du definiert hast. Die CLAUDE.md verhindert genau das.</p>

        <h3>2.2 Eine CLAUDE.md f&uuml;r deinen Forschungs-Vault</h3>
        <p>Die folgende Vorlage ist ein Ausgangspunkt, den du an deinen eigenen Vault anpasst. Entscheidend ist nicht, dass du jedes Feld ausf&uuml;llst, sondern dass Claude Code versteht, welche Ordner wof&uuml;r da sind, welche Tags du verwendest und wie deine Notizen aufgebaut sein sollen. Drei Abschnitte sind besonders wichtig: die Ordnerstruktur (damit Claude Code wei&szlig;, wohin Notizen geh&ouml;ren), die Konventionen (damit es deine Namens- und Tagging-Regeln einh&auml;lt), und die Regeln (damit es nichts L&ouml;scht oder &Uuml;berschreibt, was du nicht willst).</p>

        <pre># CLAUDE.md &mdash; Forschungs-Vault

## Vault-Struktur
- 00-Inbox/         # Neue Notizen landen hier
- 01-Studien/       # Paper-Zusammenfassungen
- 02-Konzepte/      # Vernetzte Themen-Notizen
- 03-Fortbildungen/ # Kongresse, Webinare, Kurse
- 04-Projekte/      # Laufende Forschungsprojekte
- Templates/        # Vorlagen f&uuml;r neue Notizen

## Konventionen
- Dateinamen: Klartext, keine Abk&uuml;rzungen
  Beispiel: &quot;Effekte von HIIT auf VO2max.md&quot;
- Tags: #thema/unterthema, #status/offen,
  #evidenzlevel/hoch, #typ/studie
- Links: [[Notizname]] f&uuml;r interne Verlinkung
- Sprache: Deutsch, Fachbegriffe erlaubt

## Vorlagen
Neue Studien-Notizen folgen dem Template
in Templates/Studie.md:
Felder: Autoren, Journal, Jahr, DOI,
Fragestellung, Methodik, Ergebnisse,
Praxisrelevanz, Verkn&uuml;pfungen

## Regeln
- Nichts l&ouml;schen ohne R&uuml;ckfrage
- Inbox-Notizen verarbeiten, nicht verschieben
- Links grossz&uuml;gig setzen
- Bestehende Tags weiterverwenden</pre>

        <h3>2.3 Setup in drei Schritten</h3>

        <div class="step-card">
          <span class="step-label">Schritt 1</span>
          <span class="step-title">CLAUDE.md anlegen</span>
          <p>Erstelle eine Datei namens <code>CLAUDE.md</code> im Wurzelverzeichnis deines Obsidian-Vaults. Kopiere die Vorlage oben und passe sie an deine eigene Ordnerstruktur, deine Tags und deine Vorlagen an. Die Datei muss nicht lang sein &mdash; eine halbe Seite reicht f&uuml;r den Anfang.</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 2</span>
          <span class="step-title">Claude Code im Vault starten</span>
          <p>&Ouml;ffne dein Terminal und navigiere in den Vault-Ordner: <code>cd ~/Documents/MeinVault</code>. Starte Claude Code mit dem Befehl <code>claude</code>. Claude Code liest automatisch die CLAUDE.md und kennt ab jetzt die Struktur deines Vaults. Du kannst sofort loslegen &mdash; zum Beispiel mit: &bdquo;Zeig mir alle Notizen in der Inbox.&ldquo;</p>
        </div>

        <div class="step-card">
          <span class="step-label">Schritt 3</span>
          <span class="step-title">Ersten Auftrag geben</span>
          <p>Starte mit etwas &Uuml;berschaubarem, um ein Gef&uuml;hl f&uuml;r die Zusammenarbeit zu entwickeln. Ein guter erster Auftrag: &bdquo;Lies die Notizen in meiner Inbox und sag mir, welche davon mit bestehenden Notizen im Vault verlinkt werden k&ouml;nnten.&ldquo; So siehst du sofort, wie Claude Code deinen Vault versteht und wo es Verkn&uuml;pfungen sieht, die dir entgangen sind.</p>
        </div>

        <div class="callout">
          <strong>Tipp:</strong> Obsidian und Claude Code laufen parallel &mdash; du kannst in Obsidian weiterarbeiten, w&auml;hrend Claude Code im Terminal l&auml;uft. &Auml;nderungen, die Claude Code an deinen <code>.md</code>-Dateien vornimmt, erscheinen in Obsidian sofort, weil Obsidian das Dateisystem in Echtzeit &uuml;berwacht.
        </div>

        <div class="highlight-box">
          <strong>Fehler vermeiden:</strong> Starte Claude Code immer im Wurzelverzeichnis deines Vaults, nicht in einem Unterordner. Nur so hat Claude Code Zugriff auf die CLAUDE.md und kann den gesamten Vault durchsuchen. Wenn du es versehentlich in <code>00-Inbox/</code> startest, sieht es nur die Inbox-Dateien und nicht den Rest deines Wissenssystems.
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3</span>
        <h2>5 Workflows die sofort funktionieren</h2>

        <p>Die folgenden f&uuml;nf Workflows nutzen die F&auml;higkeit von Claude Code, deinen gesamten Vault zu lesen und gezielt Dateien zu erstellen oder zu ver&auml;ndern. Jeder Workflow ist ein einziger Auftrag in nat&uuml;rlicher Sprache &mdash; keine Plugins, keine Konfiguration, kein Code. Probiere sie in dieser Reihenfolge aus: Der Inbox-Workflow ist der beste Einstieg, weil du das Ergebnis sofort in Obsidian sehen und bewerten kannst.</p>

        <div class="feature-card">
          <span class="feature-number">1</span>
          <span class="feature-name">Inbox verarbeiten</span>
          <p>Deine Inbox ist voll mit Rohnotizen &mdash; ein kopiertes Abstract, Stichpunkte von gestern, ein Link den du irgendwann verfolgen wolltest. Statt jede Notiz einzeln zu &ouml;ffnen, zu formatieren und zu verlinken, &uuml;bergibst du die ganze Inbox an Claude Code. Es liest jede Datei, wendet deine Vorlagen an, setzt Tags basierend auf dem Inhalt und verlinkt automatisch zu thematisch passenden Notizen in deinem Vault.</p>
          <p class="use-case">Prompt: &bdquo;Lies alles in 00-Inbox. Erstelle f&uuml;r jede Notiz eine strukturierte Version nach der passenden Vorlage aus Templates/. Verlinke zu bestehenden Notizen, vergib Tags und verschiebe die fertigen Notizen in den richtigen Ordner.&ldquo;</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">2</span>
          <span class="feature-name">Auto-Linking</span>
          <p>In einem Vault mit hundert oder mehr Notizen gibt es fast immer Eintr&auml;ge, die thematisch zusammenh&auml;ngen, aber nicht miteinander verlinkt sind &mdash; weil du beim Erstellen nicht an die andere Notiz gedacht hast oder weil sie sp&auml;ter entstanden ist. Claude Code kann deinen gesamten Vault nach solchen fehlenden Verbindungen durchsuchen und dir Vorschl&auml;ge machen, bevor es Links setzt.</p>
          <p class="use-case">Prompt: &bdquo;Durchsuche meinen Vault nach Notizen die thematisch zusammenh&auml;ngen aber nicht miteinander verlinkt sind. Zeig mir die Vorschl&auml;ge zuerst, bevor du etwas &auml;nderst.&ldquo;</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">3</span>
          <span class="feature-name">Zusammenfassungen erstellen</span>
          <p>Du hast f&uuml;nf Einzelnotizen zu verwandten Studien, aber keine &Uuml;bersichtsnotiz, die das Gesamtbild zeigt. Claude Code liest alle f&uuml;nf, identifiziert Gemeinsamkeiten und Widerspr&uuml;che, und erstellt eine vernetzte Zusammenfassung, die auf jede Einzelnotiz zur&uuml;ckverlinkt &mdash; eine Synthese, die du manuell in einer Stunde geschrieben h&auml;ttest.</p>
          <p class="use-case">Prompt: &bdquo;Fasse die Studien-Notizen zu HIIT, Ausdauertraining und VO2max in einem &Uuml;bersichtsartikel zusammen. Verlinke zu den Einzelnotizen und hebe Widerspr&uuml;che zwischen den Ergebnissen hervor.&ldquo;</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">4</span>
          <span class="feature-name">Tag-Audit</span>
          <p>Im Alltag vergisst man leicht, Tags zu vergeben &mdash; besonders bei Notizen, die schnell in der Inbox entstanden sind. Ein Tag-Audit deckt diese L&uuml;cken auf und sorgt daf&uuml;r, dass dein gesamter Vault durchsuchbar bleibt. Claude Code liest nicht nur die Metadaten, sondern auch den Inhalt jeder Notiz, um sinnvolle Tags vorzuschlagen.</p>
          <p class="use-case">Prompt: &bdquo;Welche Notizen in meinem Vault haben keine Tags? Schlage f&uuml;r jede davon Tags basierend auf dem Inhalt vor, und verwende nur Tags die ich bereits an anderer Stelle nutze.&ldquo;</p>
        </div>

        <div class="feature-card">
          <span class="feature-number">5</span>
          <span class="feature-name">Wochen-Review</span>
          <p>Am Ende der Woche m&ouml;chtest du wissen, was sich in deinem Vault getan hat &mdash; welche Notizen neu dazugekommen sind, welche du bearbeitet hast, und wo noch Baustellen liegen. Claude Code kann das Dateisystem nach &Auml;nderungsdaten filtern und dir eine kompakte Zusammenfassung erstellen, die du als Wochen&uuml;bersicht abspeichern kannst.</p>
          <p class="use-case">Prompt: &bdquo;Erstelle eine Zusammenfassung aller Notizen die in den letzten sieben Tagen erstellt oder ge&auml;ndert wurden. Gruppiere nach Ordner und nenne die wichtigsten Themen. Speichere das Ergebnis als Wochen-Review in 04-Projekte/.&ldquo;</p>
          <p>Diese Wochen-Reviews werden &uuml;ber die Zeit selbst zu einer wertvollen Ressource: Sie zeigen dir, welche Themen dich &uuml;ber Monate hinweg besch&auml;ftigt haben, wo sich dein Fokus verschoben hat, und welche Bereiche deines Vaults am schnellsten wachsen.</p>
        </div>

        <div class="highlight-box">
          <strong>Wichtig:</strong> Bei allen Workflows gilt: Claude Code zeigt dir vorher, was es &auml;ndern will, bevor es Dateien schreibt. Du beh&auml;ltst die volle Kontrolle. Wenn ein Vorschlag nicht passt, sagst du einfach &bdquo;Nein, mach es so stattdessen&ldquo; &mdash; und Claude Code passt sich an.
        </div>

        <div class="callout">
          <strong>Reihenfolge f&uuml;r den Einstieg:</strong> Fang mit dem Inbox-Workflow an, weil du dort sofort sehen kannst, ob Claude Code deine Konventionen versteht. Dann probiere den Tag-Audit &mdash; der &auml;ndert nichts, sondern zeigt dir nur Vorschl&auml;ge. Erst wenn du siehst, dass die Ergebnisse zu deinem Vault passen, gehst du zu den Workflows &uuml;ber, die aktiv Dateien &auml;ndern.
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4</span>
        <h2>Prompts die funktionieren &mdash; Copy &amp; Paste</h2>

        <p>Die folgenden Prompts sind f&uuml;r den direkten Einsatz in Claude Code gedacht. Kopiere sie, passe die Dateinamen und Ordner an deinen Vault an, und probiere sie aus. Jeder Prompt l&ouml;st eine konkrete Aufgabe, die im manuellen Workflow mehrere Minuten bis eine halbe Stunde kosten w&uuml;rde. Ein guter Prompt f&uuml;r Claude Code beschreibt drei Dinge: welche Dateien gelesen werden sollen, was mit dem Inhalt passieren soll, und wohin das Ergebnis gespeichert wird.</p>

        <h3>4.1 Paper einpflegen</h3>
        <p>Wenn du ein neues Paper verarbeiten willst, kopierst du den Abstract (oder den Volltext, falls vorhanden) in eine Datei in deiner Inbox und l&auml;sst Claude Code den Rest erledigen. Dieser Prompt erstellt eine strukturierte Notiz nach deiner Vorlage und verankert sie im bestehenden Wissensnetz. Das Entscheidende dabei: Claude Code durchsucht deinen gesamten Vault nach thematisch passenden Notizen und setzt die Links f&uuml;r dich, anstatt dass du dich selbst erinnern musst, welche Notizen relevant sein k&ouml;nnten.</p>

        <pre>Lies die Datei 00-Inbox/neues-paper.md.
Erstelle daraus eine strukturierte Notiz nach
der Vorlage in Templates/Studie.md.

F&uuml;lle alle Felder aus, soweit der Text
es hergibt. Formuliere die Praxisrelevanz
in 2-3 S&auml;tzen.

Durchsuche dann den gesamten Vault nach
Notizen die thematisch dazu passen und
setze [[Links]] im Abschnitt Verkn&uuml;pfungen.

Vergib Tags aus dem bestehenden Tag-System.
Verschiebe die fertige Notiz nach 01-Studien/.</pre>

        <h3>4.2 L&uuml;cken im Wissensnetz finden</h3>
        <p>Dein Vault w&auml;chst, aber du verlierst den &Uuml;berblick &uuml;ber die wei&szlig;en Flecken? Dieser Prompt identifiziert verwaiste Notizen (Notizen, auf die keine andere Notiz verlinkt), Sackgassen (Links auf Notizen, die noch nicht existieren) und Themencluster, die untereinander nicht verbunden sind. Das Ergebnis ist eine Art R&ouml;ntgenaufnahme deines Wissenssystems, die dir zeigt, wo du als n&auml;chstes vernetzen solltest.</p>

        <pre>Analysiere die Link-Struktur meines Vaults.
Finde:
1. Verwaiste Notizen (keine eingehenden Links)
2. Sackgassen (Links auf nicht existierende
   Notizen, also [[rote Links]])
3. Themen-Cluster die untereinander nicht
   verbunden sind

Erstelle einen Bericht mit konkreten
Vorschl&auml;gen, welche Links gesetzt werden
sollten. &Auml;ndere noch nichts &mdash; zeig mir
nur die Analyse.</pre>

        <h3>4.3 Fortbildungsbericht erstellen</h3>
        <p>Viele Fachleute m&uuml;ssen regelm&auml;&szlig;ig nachweisen, welche Fortbildungen sie besucht haben &mdash; ob f&uuml;r den Arbeitgeber, eine Kammer oder die eigene Dokumentation. Statt diese Listen manuell aus Kalendereintr&auml;gen und Best&auml;tigungsmails zusammenzustellen, kann Claude Code deinen Vault nach allen Fortbildungs-Notizen eines bestimmten Zeitraums durchsuchen und einen formatierten Bericht generieren, der alle relevanten Daten enth&auml;lt.</p>

        <pre>Durchsuche den Ordner 03-Fortbildungen/ nach
allen Notizen aus dem Jahr 2026.

Erstelle einen Fortbildungsbericht mit:
- Datum und Titel jeder Fortbildung
- Referent/Anbieter (falls in der Notiz)
- 1-2 S&auml;tze zu den Kerninhalten
- Gesamtzahl der Fortbildungen

Sortiere chronologisch und speichere den
Bericht als 04-Projekte/Fortbildungsbericht-2026.md.</pre>

        <h3>4.4 Vergleichstabelle aus mehreren Notizen</h3>
        <p>Wenn du mehrere Studien oder Therapieans&auml;tze vergleichen willst, baut Claude Code dir eine Markdown-Tabelle, die du direkt in Obsidian &ouml;ffnen und weiterverwenden kannst. Besonders n&uuml;tzlich bei systematischen Recherchen, wenn du f&uuml;r einen Vortrag den Forschungsstand zusammenfassen musst, oder wenn du entscheiden willst, welcher Ansatz f&uuml;r eine bestimmte Fragestellung die st&auml;rkste Evidenz hat. Die Tabelle enth&auml;lt R&uuml;cklinks zu den Einzelnotizen, sodass du jederzeit in die Details springen kannst.</p>

        <pre>Lies die folgenden Notizen:
- 01-Studien/HIIT-vs-MICT-Metaanalyse.md
- 01-Studien/Ausdauertraining-VO2max-2024.md
- 01-Studien/Intervalltraining-Herzinsuffizienz.md

Erstelle eine Vergleichstabelle in Markdown
mit den Spalten: Studie, Design, Stichprobe,
Intervention, Hauptergebnis, Evidenzlevel.

F&uuml;ge unter der Tabelle eine kurze Synthese
hinzu: Wo sind sich die Studien einig, wo
widersprechen sie sich?

Speichere als 02-Konzepte/Vergleich-Ausdauer-HIIT.md
und verlinke zur&uuml;ck zu den Einzelnotizen.</pre>

        <h3>4.5 Vault-Gesundheitscheck</h3>
        <p>Einmal im Monat lohnt sich ein Blick auf den Gesamtzustand deines Vaults &mdash; &auml;hnlich wie ein Backup-Check oder ein Blick auf die Festplattenauslastung. Dieser Prompt liefert dir eine kompakte &Uuml;bersicht &uuml;ber Umfang, Struktur und offene Baustellen, damit du gezielt aufr&auml;umen kannst, statt das vage Gef&uuml;hl zu haben, dass irgendwo etwas im Argen liegt.</p>

        <pre>Erstelle einen Gesundheitsbericht f&uuml;r
meinen Vault:

- Anzahl Notizen pro Ordner
- Notizen ohne Tags
- Notizen in der Inbox (&auml;lter als 7 Tage)
- Meistverlinkte Notizen (Top 10)
- Notizen ohne eingehende Links
- Tags die nur einmal verwendet werden

Format: Kurzer Bericht mit Bullet Points,
kein Essay. Speichere als
04-Projekte/Vault-Check-{{datum}}.md.</pre>


        <!-- ==================== SEITE 5 ==================== -->

        <span class="section-label">Seite 5</span>
        <h2>Fortgeschritten: Skills und Automatisierung</h2>

        <h3>5.1 Skills &mdash; wiederkehrende Aufgaben als Befehl</h3>
        <p>Wenn du einen bestimmten Workflow regelm&auml;&szlig;ig brauchst &mdash; etwa die Inbox-Verarbeitung oder den Wochen-Review &mdash; kannst du ihn als Claude Code Skill speichern. Ein Skill ist eine Markdown-Datei im Ordner <code>.claude/skills/</code> deines Vaults, die beschreibt, was Claude Code tun soll, wenn du den Skill aufrufst. Statt jedes Mal den vollst&auml;ndigen Prompt einzutippen, tippst du dann nur noch den Skill-Namen.</p>
        <p>Der Vorteil gegen&uuml;ber dem Copy-Paste-Ansatz aus Seite 4: Skills sind versioniert, du kannst sie &uuml;ber die Zeit verfeinern, und sie bleiben in deinem Vault gespeichert &mdash; zusammen mit dem Rest deines Wissenssystems. Wenn du deinen Vault auf einen neuen Rechner umziehst, kommen deine Claude-Code-Workflows gleich mit.</p>

        <pre># .claude/skills/inbox/SKILL.md

Verarbeite alle Notizen in 00-Inbox/.

F&uuml;r jede Notiz:
1. Lies den Inhalt und bestimme den Typ
   (Studie, Konzept, Fortbildung, Idee)
2. Wende die passende Vorlage aus Templates/ an
3. Vergib Tags aus dem bestehenden Tag-System
4. Durchsuche den Vault nach verlinkbaren Notizen
   und setze [[Links]]
5. Verschiebe die fertige Notiz in den
   passenden Ordner

Zeige am Ende eine Zusammenfassung:
Wie viele Notizen verarbeitet, wohin verschoben,
welche neuen Links gesetzt.</pre>

        <p>Danach rufst du den Workflow mit <code>/inbox</code> auf, und Claude Code f&uuml;hrt alle Schritte automatisch aus &mdash; jedes Mal nach den gleichen Regeln, die du einmal definiert hast. Weitere Skills, die sich f&uuml;r einen Wissensvault anbieten: ein <code>/review</code>-Skill f&uuml;r den Wochen-Review, ein <code>/health</code>-Skill f&uuml;r den Vault-Gesundheitscheck, oder ein <code>/link-audit</code>-Skill, der verwaiste Notizen und fehlende Verbindungen findet. Du definierst die Skills einmal und nutzt sie danach mit einem einzigen Befehl.</p>

        <h3>5.2 Hooks &mdash; automatisch reagieren</h3>
        <p>Claude Code unterst&uuml;tzt sogenannte Hooks, die bei bestimmten Ereignissen automatisch ausgel&ouml;st werden. F&uuml;r deinen Vault hei&szlig;t das zum Beispiel: Jedes Mal wenn du Claude Code in deinem Vault startest, k&ouml;nnte ein Precheck laufen, der dir zeigt, wie viele Notizen in der Inbox warten oder ob es Notizen ohne Tags gibt. So bekommst du beim &Ouml;ffnen direkt einen &Uuml;berblick &uuml;ber den Zustand deines Wissenssystems.</p>
        <p>In der Praxis konfigurierst du einen Hook &uuml;ber die Datei <code>.claude/settings.json</code> in deinem Vault-Root. Der Hook beschreibt, bei welchem Event (zum Beispiel Sitzungsstart) welcher Befehl ausgef&uuml;hrt werden soll. Das ist kein Muss f&uuml;r den Anfang, aber sobald du merkst, dass du immer den gleichen ersten Befehl eingibst, ist ein Hook der logische n&auml;chste Schritt.</p>
        <p>Ein praktisches Beispiel: Du konfigurierst einen Hook, der beim Start von Claude Code automatisch die Inbox z&auml;hlt und dir meldet, wie viele unverarbeitete Notizen dort warten. Vielleicht pr&uuml;ft er zus&auml;tzlich, ob Notizen &auml;lter als sieben Tage in der Inbox liegen, und weist dich darauf hin. So wei&szlig;t du sofort, ob sich ein schneller Inbox-Durchgang lohnt, bevor du dich an die eigentliche Aufgabe machst.</p>
        <p>Der Hook ersetzt keinen manuellen Befehl &mdash; er liefert dir den Kontext, damit du entscheiden kannst, was als n&auml;chstes sinnvoll ist. Denk daran wie an den Startbildschirm einer App, die dir die wichtigsten Kennzahlen zeigt, bevor du loslegst.</p>

        <h3>5.3 Die CLAUDE.md als lebendes Dokument</h3>
        <p>Deine CLAUDE.md ist kein Setup, das du einmal schreibst und dann vergisst. Sie w&auml;chst mit deinem Vault. Wenn du neue Ordner anlegst, neue Tag-Konventionen einf&uuml;hrst oder feststellst, dass Claude Code eine bestimmte Aufgabe immer wieder falsch interpretiert, aktualisierst du die CLAUDE.md &mdash; und beim n&auml;chsten Start arbeitet Claude Code mit den neuen Regeln. Denk an die CLAUDE.md wie an ein Briefing f&uuml;r einen menschlichen Assistenten: Je pr&auml;ziser du deine Erwartungen formulierst, desto besser sind die Ergebnisse.</p>
        <p>Einige Erg&auml;nzungen, die sich mit der Zeit lohnen:</p>
        <ul>
          <li>Beispiele f&uuml;r gute Notizen, damit Claude Code deinen Stil trifft</li>
          <li>Ausnahmen und Sonderf&auml;lle (&bdquo;Notizen im Ordner Privat/ nie anfassen&ldquo;)</li>
          <li>Bevorzugte Formulierungen f&uuml;r Praxisrelevanz-Abschnitte</li>
          <li>Regeln f&uuml;r den Umgang mit widerspr&uuml;chlichen Studien</li>
          <li>Glossar wiederkehrender Abk&uuml;rzungen in deinem Fachgebiet</li>
        </ul>

        <p>Denk an die CLAUDE.md wie an eine Einarbeitung: Je mehr Kontext du gibst, desto weniger musst du bei jedem einzelnen Auftrag erkl&auml;ren. Nach ein paar Wochen Nutzung wirst du feststellen, dass deine CLAUDE.md die eigentliche Schaltzentrale deines Wissenssystems ist &mdash; nicht weil sie selbst Wissen enth&auml;lt, sondern weil sie definiert, wie neues Wissen verarbeitet wird.</p>

        <h3>5.4 Scheduled Tasks &mdash; der Vault pflegt sich selbst</h3>
        <p>Wenn du einen Schritt weiter gehen willst, kannst du wiederkehrende Vault-Aufgaben als Scheduled Tasks einrichten. Claude Code f&uuml;hrt diese Aufgaben dann automatisch zu einem festen Zeitpunkt aus &mdash; etwa jeden Montagmorgen einen Wochen-Review erstellen oder jeden Freitag die Inbox pr&uuml;fen. Das Ergebnis liegt als Markdown-Datei in deinem Vault, wenn du dich an den Rechner setzt, ohne dass du den Befehl manuell ausl&ouml;sen musst.</p>
        <p>Diese Stufe ist optional und macht erst Sinn, wenn du die manuellen Workflows aus Seite 3 und 4 ausprobiert hast und wei&szlig;t, welche davon du tats&auml;chlich regelm&auml;&szlig;ig brauchst. Automatisiere nur, was du manuell schon dreimal gemacht hast &mdash; sonst automatisierst du Workflows, die du noch gar nicht verstehst.</p>

        <div class="callout">
          <strong>Lernkurve:</strong> Die meisten Nutzer brauchen zwei bis drei Sitzungen, bis sie ein Gef&uuml;hl daf&uuml;r entwickeln, wie detailliert ihre Prompts sein m&uuml;ssen. Am Anfang wirst du wahrscheinlich zu vage formulieren (&bdquo;R&auml;um meinen Vault auf&ldquo;) oder zu detailliert (&bdquo;Setze in Zeile 14 einen Link zu...&ldquo;). Die goldene Mitte ist ein Prompt, der das Ziel beschreibt und Claude Code die Umsetzung &uuml;berl&auml;sst &mdash; &auml;hnlich wie du einem kompetenten Assistenten eine Aufgabe delegierst.
        </div>

        <h3>5.5 Wo du nicht automatisieren solltest</h3>
        <p>Nicht alles in deinem Vault muss &uuml;ber Claude Code laufen. Die schnelle Notiz zwischendurch, der spontane Gedanke, die Skizze einer Idee &mdash; das geht in Obsidian direkt schneller und braucht keinen KI-Assistenten. Claude Code ist dann am wertvollsten, wenn du viele Dateien gleichzeitig verarbeiten, Zusammenh&auml;nge &uuml;ber den gesamten Vault finden oder strukturierte Aufgaben wiederholt ausf&uuml;hren willst.</p>
        <p>Eine gute Faustregel: Wenn die Aufgabe weniger als zwei Minuten dauert, mach sie direkt in Obsidian. Wenn sie l&auml;nger als f&uuml;nf Minuten dauert oder mehr als drei Dateien betrifft, ist Claude Code der schnellere Weg.</p>
        <p>F&uuml;r das kreative, assoziative Arbeiten &mdash; eine Idee festhalten, einen Gedankengang skizzieren, frei &uuml;ber ein Problem nachdenken &mdash; bleibt Obsidian pur die bessere Wahl. Die besten Wissenssysteme entstehen dort, wo menschliche Kreativit&auml;t und maschinelle Gr&uuml;ndlichkeit sich erg&auml;nzen, nicht ersetzen.</p>

        <div class="golden-rule">
          <h2>Die Goldene Regel</h2>
          <p>Dein Vault ist das Ged&auml;chtnis. Claude Code ist der Assistent, der es durchsuchbar, vernetzt und lebendig h&auml;lt. <strong>Die Entscheidung, was wertvoll ist, triffst immer noch du.</strong></p>
          <p style="margin-top:12px">Claude Code kann Zusammenh&auml;nge finden, Struktur schaffen und wiederkehrende Aufgaben &uuml;bernehmen. Aber was in deinen Vault geh&ouml;rt, welche Interpretation einer Studie die richtige ist und welche Verbindungen wirklich tragf&auml;hig sind &mdash; das ist dein Urteil, nicht das der KI.</p>
          <p style="margin-top:12px">Die Kombination funktioniert genau deshalb so gut, weil jeder Teil das tut, was er am besten kann: Du denkst, bewertest und entscheidest. Claude Code liest, verlinkt, strukturiert und fasst zusammen. Dein Wissen bleibt dein Wissen &mdash; es wird nur endlich so zug&auml;nglich, wie es sein sollte.</p>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-claude-obsidian', OxGuideClaudeObsidian);
