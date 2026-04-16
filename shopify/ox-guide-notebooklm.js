class OxGuideNotebooklm extends HTMLElement {
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
  --blue-muted:#94a3b8;
  --warn-bg:#1c1007;--warn-border:#f59e0b;--warn-text:#d4a44a;
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

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}
h3{font-size:16.8px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}

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

.step-box{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:24px 0;
}
.step-number{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;
  margin-right:8px;letter-spacing:0.03em;
}
.step-title{font-size:16.8px;font-weight:600;color:var(--white)}
.step-box p{margin-top:12px;margin-bottom:8px}

.prompt-example{
  background:var(--surface-alt);border-left:3px solid var(--border-accent);
  padding:12px 16px;border-radius:0 6px 6px 0;
  margin:12px 0;font-style:italic;color:var(--blue-muted);
}

.warning{
  background:var(--warn-bg);border-left:3px solid var(--warn-border);
  padding:12px 16px;border-radius:0 6px 6px 0;
  margin:16px 0;color:var(--warn-text);
}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>NotebookLM f&uuml;r Literatur-Reviews</h1>
        <div class="meta">5-Seiten-Guide &middot; Out Of The Box Science</div>

        <p>Ein Literatur-Review ist eine der zeitaufw&auml;ndigsten Aufgaben in der Wissenschaft: Papers sammeln, lesen, vergleichen, Zusammenh&auml;nge erkennen, strukturiert zusammenschreiben. NotebookLM von Google kann diesen Prozess nicht ersetzen &mdash; aber es kann die Phase zwischen "Paper gesammelt" und "Review geschrieben" massiv beschleunigen.</p>

        <p>Dieser Guide zeigt dir den kompletten Workflow, Schritt f&uuml;r Schritt.</p>

        <h2>Was du brauchst</h2>
        <ul>
            <li>Einen Google-Account (NotebookLM ist kostenlos)</li>
            <li>10-25 Quellen &mdash; idealerweise als <strong>Markdown-Dateien (.md)</strong>, alternativ als PDF</li>
            <li>Eine grobe Forschungsfrage, die den Review zusammenh&auml;lt</li>
        </ul>

        <div class="warning">
            <strong>Markdown statt PDF &mdash; warum das wichtig ist:</strong> NotebookLM arbeitet mit dem Text deiner Quellen. Bei PDFs muss es den Text erst aus dem Layout extrahieren &mdash; das funktioniert bei zweispaltigen Paper-Layouts, eingescannten Dokumenten oder komplexen Tabellen oft schlecht. Markdown-Dateien (.md) sind reiner Text mit einfacher Formatierung &mdash; die werden sauber und vollst&auml;ndig indexiert (durchsuchbar gemacht). Wenn du Papers als PDF hast: Kein Problem, aber halte sie unter 50 Seiten pro Datei. Bei l&auml;ngeren Dokumenten sinkt die Indexierungsqualit&auml;t sp&uuml;rbar &mdash; Passagen am Ende werden schlechter erfasst.
        </div>

        <div class="warning">
            <strong>Wichtig:</strong> NotebookLM antwortet ausschlie&szlig;lich auf Basis deiner hochgeladenen Quellen. Es erfindet nichts dazu und durchsucht nicht das Internet. Das ist ein Feature, kein Bug &mdash; du wei&szlig;t immer, woher eine Aussage kommt.
        </div>

        <h2>Der Workflow</h2>

        <div class="step-box">
            <span class="step-number">Schritt 1</span>
            <span class="step-title">Notebook anlegen und Papers hochladen</span>
            <p>Geh auf <code>notebooklm.google.com</code> und erstelle ein neues Notebook. Gib ihm einen klaren Namen, z.B. "Review: KI in der Hochschullehre 2024-2026".</p>
            <p>Lade deine Quellen hoch. Am besten als Markdown-Dateien &mdash; falls du nur PDFs hast, funktioniert das auch, aber achte auf maximal 50 Seiten pro Datei. NotebookLM akzeptiert bis zu 50 Quellen pro Notebook.</p>
            <p><strong>Tipp 1:</strong> Viele Paper-Datenbanken bieten neben PDF auch einen "Export als Text" oder HTML an. Kopiere den Text in eine .md-Datei &mdash; das liefert sauberere Ergebnisse als ein PDF mit Spalten-Layout.</p>
            <p><strong>Tipp 2:</strong> Lade die Papers in thematischen Bl&ouml;cken hoch (z.B. erst die 8 zu Methodik, dann die 7 zu Ergebnissen). So beh&auml;ltst du den &Uuml;berblick.</p>
        </div>

        <div class="step-box">
            <span class="step-number">Schritt 2</span>
            <span class="step-title">&Uuml;berblick verschaffen &mdash; das Briefing Doc</span>
            <p>Nachdem alle Quellen geladen sind, klicke im Studio-Bereich (rechte Seite) auf <strong>"Briefing Doc"</strong>. NotebookLM erstellt automatisch eine Zusammenfassung aller deiner Quellen &mdash; mit den zentralen Themen, wiederkehrenden Konzepten und Kernaussagen.</p>
            <p>Das Briefing Doc ist dein Startpunkt. Lies es durch und markiere dir die Cluster (Themengruppen), die du erkennst.</p>
        </div>

        <div class="step-box">
            <span class="step-number">Schritt 3</span>
            <span class="step-title">Gezielte Fragen stellen</span>
            <p>Jetzt wird es interaktiv. Stell NotebookLM Fragen, die dein Review strukturieren. Jede Antwort kommt mit Quellenangaben (klickbar, direkt zur Textstelle im Paper).</p>

            <h3>Fragen f&uuml;r den Theorie-Teil:</h3>
            <div class="prompt-example">"Welche theoretischen Rahmenmodelle werden in den Quellen am h&auml;ufigsten verwendet? Liste sie mit den jeweiligen Autoren."</div>
            <div class="prompt-example">"Wo widersprechen sich die Quellen? Zeig mir konkrete Stellen."</div>

            <h3>Fragen f&uuml;r den Methoden-Teil:</h3>
            <div class="prompt-example">"Vergleiche die Stichprobengr&ouml;&szlig;en und Methoden aller empirischen Studien in meinen Quellen. Erstelle eine Tabelle."</div>
            <div class="prompt-example">"Welche Studien nutzen qualitative, welche quantitative Methoden? Gibt es Mixed-Methods-Ans&auml;tze?"</div>

            <h3>Fragen f&uuml;r die Synthese:</h3>
            <div class="prompt-example">"Was sind die drei am h&auml;ufigsten genannten Ergebnisse &uuml;ber alle Studien hinweg?"</div>
            <div class="prompt-example">"Welche Forschungsl&uuml;cken identifizieren die Autoren selbst?"</div>
        </div>

        <div class="step-box">
            <span class="step-number">Schritt 4</span>
            <span class="step-title">Notizen sammeln und strukturieren</span>
            <p>Jede gute Antwort von NotebookLM: Klicke auf <strong>"Pin to Note"</strong> (Zur Notiz hinzuf&uuml;gen). So baust du dir im linken Bereich eine Sammlung an vorstrukturierten Bausteinen auf.</p>
            <p>Ordne deine Notizen nach der Struktur deines Reviews:</p>
            <ol>
                <li>Einleitung / Forschungsfrage</li>
                <li>Theoretischer Hintergrund</li>
                <li>Methoden-Vergleich</li>
                <li>Ergebnisse / Synthese</li>
                <li>Forschungsl&uuml;cken / Ausblick</li>
            </ol>
        </div>

        <div class="step-box">
            <span class="step-number">Schritt 5</span>
            <span class="step-title">Outputs generieren &mdash; weit mehr als nur Text</span>
            <p>Die meisten kennen nur den Chat. Aber NotebookLM kann aus deinen Quellen eine ganze Reihe von Formaten generieren &mdash; &uuml;ber den <strong>Studio-Bereich</strong> (rechte Seite). Das sind die f&uuml;r Lehrer und Dozenten relevantesten:</p>

            <h3>Briefing Doc (Zusammenfassung)</h3>
            <p>Klick auf "Briefing Doc" im Studio. NotebookLM erstellt eine strukturierte Zusammenfassung aller Quellen &mdash; Kernthemen, wiederkehrende Konzepte, zentrale Argumente. Das ist dein &Uuml;berblick auf einer Seite, bevor du in die Tiefe gehst.</p>

            <h3>Audio-&Uuml;berblick (Podcast-Format)</h3>
            <p>NotebookLM kann aus deinen Quellen eine Audio-Zusammenfassung generieren &mdash; zwei KI-Stimmen diskutieren die wichtigsten Punkte aus deinen Papers, wie ein Podcast. Klingt nach Spielerei, hat aber einen echten Nutzen: Du kannst dir den &Uuml;berblick &uuml;ber 20 Papers <strong>auf dem Weg zur Uni anh&ouml;ren</strong>, statt alles am Bildschirm lesen zu m&uuml;ssen. Du kannst die Audio-Version auch Studierenden als Einstieg zur Verf&uuml;gung stellen.</p>

            <h3>Quiz generieren</h3>
            <p>Klick auf "Quiz" im Studio. NotebookLM erstellt Multiple-Choice-Fragen auf Basis deiner Quellen &mdash; mit Antwortoptionen und Erkl&auml;rungen. F&uuml;r die Lehre ist das Gold wert:</p>
            <ul>
                <li><strong>Pr&uuml;fungsvorbereitung:</strong> Quiz an Studierende weitergeben als Selbsttest vor der Klausur</li>
                <li><strong>Seminarvorbereitung:</strong> Quiz als Einstieg in eine Sitzung &mdash; "Habt ihr die Pflichtlekt&uuml;re gelesen?"</li>
                <li><strong>Eigene &Uuml;berpr&uuml;fung:</strong> Teste dich selbst, ob du die Kernaussagen der Papers richtig erfasst hast</li>
            </ul>

            <h3>FAQ-Dokument</h3>
            <p>Generiert h&auml;ufige Fragen und Antworten aus deinen Quellen. N&uuml;tzlich als Handout f&uuml;r Studierende: "Die 10 wichtigsten Fragen zu [Thema] &mdash; beantwortet aus der aktuellen Literatur."</p>

            <h3>Zeitleiste</h3>
            <p>Ordnet Ereignisse, Entwicklungen oder Ver&ouml;ffentlichungsdaten aus deinen Quellen chronologisch an. Hilfreich f&uuml;r Reviews, die eine historische Entwicklung nachzeichnen.</p>

            <h3>Review-Entwurf (&uuml;ber den Chat)</h3>
            <p>F&uuml;r den eigentlichen Literatur-Review-Text nutzt du den Chat:</p>
            <div class="prompt-example">"Schreib einen Literatur-Review-Entwurf auf Basis meiner Notizen. Struktur: Einleitung, Theoretischer Hintergrund, Methoden, Ergebnisse, Diskussion. Jede Aussage mit Quellenangabe. Akademischer Stil, Deutsch."</div>
            <p>Das Ergebnis ist ein <strong>Entwurf</strong>, kein fertiger Text. Aber ein Entwurf, der auf deinen echten Quellen basiert und jede Aussage belegen kann.</p>
        </div>

        <div class="step-box">
            <span class="step-number">Schritt 6</span>
            <span class="step-title">&Uuml;berarbeiten &mdash; der wichtigste Schritt</span>
            <p>Kein KI-Tool ersetzt dein wissenschaftliches Urteil. Im letzten Schritt pr&uuml;fst du:</p>
            <ul>
                <li><strong>Stimmen die Quellenangaben?</strong> Klick auf jede Referenz und pr&uuml;fe, ob die Aussage tats&auml;chlich im Paper steht.</li>
                <li><strong>Ist die Synthese schl&uuml;ssig?</strong> NotebookLM kann Informationen zusammentragen, aber die Argumentation musst du selbst beurteilen.</li>
                <li><strong>Fehlt etwas?</strong> Welche Perspektiven oder Studien sind unterrepr&auml;sentiert?</li>
                <li><strong>Ist der rote Faden erkennbar?</strong> &Uuml;berarbeite die &Uuml;berg&auml;nge zwischen den Abschnitten.</li>
            </ul>
        </div>

        <h2>Zeitersparnis &mdash; realistisch eingesch&auml;tzt</h2>
        <p>Ein traditioneller Literatur-Review mit 20 Papers dauert erfahrungsgem&auml;&szlig; 40-80 Stunden (je nach Tiefe). Mit NotebookLM sparst du vor allem in zwei Phasen:</p>
        <ul>
            <li><strong>Querlesen und Vergleichen</strong> (normalerweise ~30% der Zeit): NotebookLM kann Quellen in Sekunden vergleichen, die du sonst Stunden lang nebeneinander legen w&uuml;rdest.</li>
            <li><strong>Erster Entwurf</strong> (normalerweise ~20% der Zeit): Statt vor einer leeren Seite zu sitzen, hast du einen quellenbasierten Entwurf als Startpunkt.</li>
        </ul>
        <p>Die &Uuml;berarbeitung und das wissenschaftliche Urteil bleiben gleich aufw&auml;ndig. Realistisch: <strong>30-50% Zeitersparnis</strong>, nicht 90%.</p>

        <h2>H&auml;ufige Fehler</h2>
        <ul>
            <li><strong>Zu viele Papers auf einmal.</strong> Bei 40+ Quellen wird NotebookLM ungenau. Besser: 15-25 pro Notebook, aufgeteilt nach Themenclustern.</li>
            <li><strong>Zu lange PDFs.</strong> Dokumente &uuml;ber 50 Seiten werden am Ende schlechter indexiert. Teile lange Dokumente lieber in Kapitel auf, oder konvertiere sie zu Markdown.</li>
            <li><strong>Dem Entwurf blind vertrauen.</strong> NotebookLM fasst zusammen, was in den Quellen steht &mdash; es bewertet nicht die Qualit&auml;t der Studien. Das musst du tun.</li>
            <li><strong>Quellenangaben nicht pr&uuml;fen.</strong> In seltenen F&auml;llen ordnet NotebookLM eine Aussage der falschen Quelle zu. Immer gegenchecken.</li>
        </ul>

        <div class="footer">
            <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-notebooklm', OxGuideNotebooklm);
