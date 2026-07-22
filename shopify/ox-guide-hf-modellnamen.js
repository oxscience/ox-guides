class OxGuideHfModellnamen extends HTMLElement {
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
  --amber:#fbbf24;
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
.intro{color:var(--text-secondary);margin-bottom:24px;font-size:15.2px}

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}
h3{font-size:16px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}

p{margin-bottom:16px}
strong{color:var(--white-soft)}

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
.callout p:last-child{margin-bottom:0}

/* Namens-Anatomie */
.name-display{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:18px 20px;margin:20px 0 6px;font-family:var(--mono);font-size:15px;
  line-height:1.9;word-break:break-all;
}
.np{padding:2px 5px;border-radius:5px;font-weight:600}
.np-org{background:#172554;color:#93c5fd}
.np-fam{background:#3b0764;color:#d8b4fe}
.np-size{background:#052e16;color:#86efac}
.np-var{background:#451a03;color:#fdba74}
.np-fmt{background:#4c0519;color:#fda4af}
.np-quant{background:#083344;color:#67e8f9}
.anatomy{margin:14px 0 8px}
.an-row{display:flex;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--border);font-size:14.4px}
.an-row:last-child{border-bottom:none}
.an-chip{font-family:var(--mono);font-size:12.8px;font-weight:600;padding:2px 8px;border-radius:5px;margin-right:14px;flex-shrink:0;min-width:118px;text-align:center}
.an-text{color:var(--text-secondary)}
.an-text strong{color:var(--white-soft)}

/* Tabellen */
.table-wrap{overflow-x:auto;margin:18px 0}
table{border-collapse:collapse;width:100%;font-size:13.6px}
th{color:var(--white-soft);font-weight:600;text-align:left;padding:9px 12px;border-bottom:2px solid #1e293b;white-space:nowrap}
td{padding:9px 12px;border-bottom:1px solid var(--border);color:var(--text-secondary);vertical-align:top}
td code{white-space:nowrap}
tr.hl td{background:#11182f;color:var(--white-soft)}

/* Tiefer gegraben */
.deeper{background:#1a1505;border:1px solid #4a3a14;border-radius:8px;padding:13px 18px;margin:16px 0 0;font-size:13.6px;color:#cbb98f;line-height:1.7}
.deeper strong{color:var(--amber)}

/* Schritte */
.step{background:var(--surface-alt);border-radius:8px;padding:14px 18px;margin:12px 0}
.step .step-head{color:var(--white);font-weight:600}
.step .step-num{display:inline-block;min-width:24px;color:var(--primary);font-weight:700}
.step p{margin:8px 0 0;font-size:14.4px}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
  border:1px solid var(--primary);border-radius:8px;
  padding:20px 24px;margin:32px 0;
}
.golden-rule h2{margin-top:0}
.golden-rule strong{color:var(--white)}

/* Quellenliste */
.source-item{font-size:12.8px;color:var(--text-secondary);padding:11px 0;border-bottom:1px solid var(--border);line-height:1.6}
.source-item:last-child{border-bottom:none}
.source-item i{color:var(--white-soft);font-style:italic}
.source-item a{color:var(--primary-light);word-break:break-word}
.source-num{color:var(--primary);font-weight:700;font-family:var(--mono);margin-right:6px}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .an-row{flex-direction:column;gap:4px}
  .an-chip{min-width:0;align-self:flex-start}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>KI-Modellnamen entschl&uuml;sseln</h1>
        <div class="meta">5-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Auf Hugging Face, der gr&ouml;&szlig;ten Plattform f&uuml;r offene KI-Modelle, liegen weit &uuml;ber eine Million Modelle. Wer dort zum ersten Mal nach einem Modell f&uuml;r den eigenen Rechner sucht, trifft auf Namen wie <code>Qwen2.5-7B-Instruct-GGUF</code> und klickt oft ratlos wieder weg. Dabei ist so ein Name ein komplettes Datenblatt: Er verr&auml;t, wer das Modell gebaut hat, wie viel Speicher es braucht, wof&uuml;r es trainiert wurde und ob es auf deiner Hardware l&auml;uft. Dieser Guide bringt dir bei, dieses Datenblatt zu lesen. Danach w&auml;hlst du in wenigen Minuten das passende Modell aus, statt zu raten.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1 &middot; Die Anatomie</span>
        <h2>Sechs Angaben, ein Name</h2>

        <p>Ein Modell auf Hugging Face hat eine Adresse aus zwei Teilen: dem Account und dem Modellnamen, getrennt durch einen Schr&auml;gstrich. Dahinter, im Repository, liegen die eigentlichen Dateien, und deren Namen tragen noch eine weitere Angabe. Alles zusammen sieht so aus:</p>

        <div class="name-display">
          <span class="np np-org">Qwen</span>/<span class="np np-fam">Qwen2.5</span>-<span class="np np-size">7B</span>-<span class="np np-var">Instruct</span>-<span class="np np-fmt">GGUF</span><br>
          &nbsp;&nbsp;&darr; Datei im Repository:<br>
          qwen2.5-7b-instruct-<span class="np np-quant">q4_k_m</span>.gguf
        </div>

        <div class="anatomy">
          <div class="an-row"><span class="an-chip np-org">Qwen/</span><span class="an-text"><strong>Der Account:</strong> Hier l&auml;dt Alibabas KI-Team hoch; andere bekannte Accounts sind <code>meta-llama</code>, <code>google</code>, <code>mistralai</code> und <code>deepseek-ai</code>.</span></div>
          <div class="an-row"><span class="an-chip np-fam">Qwen2.5</span><span class="an-text"><strong>Familie und Generation:</strong> Wie iPhone 15 und iPhone 16, gleiche Produktlinie in neuerer Ausgabe.</span></div>
          <div class="an-row"><span class="an-chip np-size">7B</span><span class="an-text"><strong>Die Gr&ouml;&szlig;e:</strong> 7 Milliarden Parameter (B wie <i>billion</i>), die wichtigste Zahl f&uuml;r deinen Speicherbedarf (Seite 2).</span></div>
          <div class="an-row"><span class="an-chip np-var">Instruct</span><span class="an-text"><strong>Die Variante:</strong> Wof&uuml;r wurde das Modell nachtrainiert? (Seite 3)</span></div>
          <div class="an-row"><span class="an-chip np-fmt">GGUF</span><span class="an-text"><strong>Das Dateiformat:</strong> Die Verpackung f&uuml;rs lokale Ausf&uuml;hren (Seite 4).</span></div>
          <div class="an-row"><span class="an-chip np-quant">q4_k_m</span><span class="an-text"><strong>Die Quantisierung:</strong> Wie stark wurde das Modell komprimiert? (Seite 5)</span></div>
        </div>

        <div class="callout">
          <p><strong>Dasselbe Modell, viele Adressen.</strong> Ein popul&auml;res Modell taucht auf Hugging Face oft dutzendfach auf: einmal im Original beim Hersteller, dazu in komprimierten Fassungen von Community-Accounts wie <code>unsloth</code> oder <code>bartowski</code>. Das ist gelebte Arbeitsteilung: Die Hersteller ver&ouml;ffentlichen die Rohfassung, die Community macht sie f&uuml;r normale Rechner passend. F&uuml;r den Hausgebrauch sind diese Fassungen genau das Richtige.</p>
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2 &middot; Gr&ouml;&szlig;e</span>
        <h2>Parameter: die wichtigste Zahl im Namen</h2>

        <p>Parameter sind die gelernten Stellschrauben eines Modells: Milliarden von Zahlenwerten, in denen das gesamte Sprachverst&auml;ndnis und Weltwissen steckt. Beim Training werden sie justiert, danach stehen sie fest. Ein Modell mit mehr Parametern kann in der Regel mehr, braucht daf&uuml;r aber auch mehr Speicher und rechnet langsamer.</p>

        <p>F&uuml;r die Praxis z&auml;hlt vor allem: <strong>Die Parameterzahl bestimmt, ob das Modell in deinen Arbeitsspeicher passt.</strong> Als grobe Orientierung, jeweils bei &uuml;blicher Kompression (Q4, Seite 5):</p>

        <div class="table-wrap">
        <table>
          <tr><th>Gr&ouml;&szlig;e</th><th>Speicherbedarf ca.</th><th>L&auml;uft auf</th></tr>
          <tr><td>1&ndash;4B</td><td>1&ndash;3 GB</td><td>Smartphone, &auml;lterer Laptop</td></tr>
          <tr class="hl"><td>7&ndash;14B</td><td>5&ndash;9 GB</td><td>modernem Laptop mit 16 GB RAM</td></tr>
          <tr><td>24&ndash;32B</td><td>15&ndash;20 GB</td><td>Mac mit 32 GB, gro&szlig;er Gaming-GPU</td></tr>
          <tr><td>70B+</td><td>40 GB+</td><td>Workstation, Server</td></tr>
        </table>
        </div>

        <p>Die Faustregel dahinter: <strong>Parameter (in Milliarden) &times; Bit pro Gewicht &divide; 8 &asymp; Gigabyte</strong>, plus etwas Luft f&uuml;r Verwaltung und Gespr&auml;chsverlauf. Ein 8B-Modell bei 4,5 Bit landet also bei gut 4,5 GB und passt damit auf die meisten aktuellen Laptops.</p>

        <h3>Sonderfall MoE: wenn zwei Zahlen im Namen stehen</h3>

        <p>Bei Namen wie <code>Qwen3-30B-A3B</code> stehen pl&ouml;tzlich zwei Gr&ouml;&szlig;en im Namen: 30 Milliarden Parameter insgesamt, aber nur 3 Milliarden <strong>aktiv</strong> pro Wort (das A steht f&uuml;r <i>active</i>). Solche Modelle hei&szlig;en Mixture-of-Experts, kurz MoE: Statt eines gro&szlig;en Netzes enth&auml;lt das Modell viele spezialisierte Teilnetze, und pro Rechenschritt arbeiten nur wenige davon.</p>

        <div class="callout">
          <p><strong>Der Merksatz f&uuml;r MoE-Modelle:</strong> Tempo wie ein kleines Modell, F&auml;higkeiten Richtung gro&szlig;es Modell, aber Speicherbedarf wie das gro&szlig;e. Alle 30 Milliarden Parameter m&uuml;ssen geladen sein, auch wenn pro Wort nur 3 Milliarden rechnen. F&uuml;r die Tabelle oben z&auml;hlt also die erste Zahl.</p>
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3 &middot; Varianten</span>
        <h2>Instruct, Coder, VL: wof&uuml;r das Modell gebaut wurde</h2>

        <p>Nach der Gr&ouml;&szlig;e folgt im Namen meist ein W&ouml;rtchen f&uuml;r die Ausrichtung. Es entscheidet dar&uuml;ber, ob sich das Modell wie ein Assistent verh&auml;lt oder deine Frage blo&szlig; weiterspinnt:</p>

        <div class="table-wrap">
        <table>
          <tr><th>Suffix</th><th>Bedeutung</th></tr>
          <tr><td><i>keins</i> / <code>Base</code></td><td>Rohmodell. Vervollst&auml;ndigt nur Text und beantwortet keine Fragen: Auf &bdquo;Was ist RAG?&ldquo; kommt gern eine weitere Frage statt einer Antwort. F&uuml;r Forschung und Weitertraining gedacht.</td></tr>
          <tr class="hl"><td><code>Instruct</code> / <code>Chat</code> / <code>it</code></td><td>Auf Anweisungen und Dialog nachtrainiert. Das ist die Variante, die du f&uuml;r praktisch alles willst. Google k&uuml;rzt sie bei Gemma mit <code>it</code> ab (<i>instruction-tuned</i>).</td></tr>
          <tr><td><code>Coder</code> / <code>Code</code></td><td>Auf Programmieren und Code-Vervollst&auml;ndigung spezialisiert.</td></tr>
          <tr><td><code>VL</code> / <code>Vision</code></td><td>Versteht zus&auml;tzlich Bilder (<i>Vision-Language</i>), etwa zum Beschreiben von Abbildungen oder Auslesen von Screenshots.</td></tr>
          <tr><td><code>Thinking</code> / <code>R1</code></td><td>Reasoning-Modelle: Sie denken vor der Antwort in Zwischenschritten, gr&uuml;ndlicher bei Logik und Mathematik, daf&uuml;r sp&uuml;rbar langsamer.</td></tr>
          <tr><td><code>Distill</code></td><td>Destilliert: Ein gro&szlig;es Modell hat einem kleinen sein Verhalten beigebracht. Das kleine erbt einen Teil der F&auml;higkeiten bei einem Bruchteil der Gr&ouml;&szlig;e.</td></tr>
          <tr><td><code>2507</code> u.&auml;.</td><td>Versionsstand als Datum: Jahr und Monat, hier Juli 2025. J&uuml;ngeres Datum hei&szlig;t neuerer Trainingsstand.</td></tr>
        </table>
        </div>

        <h3>Drei echte Namen zum Mitlesen</h3>
        <ul>
          <li><code>google/gemma-3-27b-it</code>: Googles Gemma, 3. Generation, 27 Milliarden Parameter, dialogtauglich.</li>
          <li><code>deepseek-ai/DeepSeek-R1-Distill-Qwen-7B</code>: die Denkweise des gro&szlig;en Reasoning-Modells R1, destilliert in ein handliches Qwen mit 7 Milliarden Parametern.</li>
          <li><code>unsloth/Qwen3-30B-A3B-Instruct-2507-GGUF</code>: der Community-Account unsloth hat Alibabas MoE-Modell vom Juli 2025 f&uuml;rs lokale Ausf&uuml;hren verpackt.</li>
        </ul>

        <div class="deeper">
          <strong>Tiefer gegraben:</strong> Dass ein Rohmodell &uuml;berhaupt zum Assistenten wird, liegt an einem zweiten Trainingsschritt nach dem eigentlichen Sprachtraining: Menschen bewerten Antworten, das Modell lernt aus den Bewertungen (RLHF, <i>Reinforcement Learning from Human Feedback</i>). Der Unterschied zwischen Base und Instruct ist also das Ergebnis von Wochen zus&auml;tzlichen Trainings, nicht blo&szlig; ein umgelegter Schalter.
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4 &middot; Formate</span>
        <h2>safetensors, GGUF &amp; Co.: die Verpackung</h2>

        <p>Dasselbe Modell wird in verschiedenen Dateiformaten angeboten, und das Format entscheidet, mit welcher Software es l&auml;uft. Die vier, die dir begegnen werden:</p>

        <div class="table-wrap">
        <table>
          <tr><th>Format</th><th>F&uuml;r wen</th></tr>
          <tr><td><code>safetensors</code></td><td>Das Standardformat auf Hugging Face: die Originalgewichte, oft in mehrere Dateien gest&uuml;ckelt (<code>model-00001-of-00004</code> &hellip;). Gedacht f&uuml;r GPU-Server und Python-Umgebungen, nicht f&uuml;r den Hausgebrauch.</td></tr>
          <tr class="hl"><td><code>GGUF</code></td><td>Das Format f&uuml;rs lokale Ausf&uuml;hren: eine einzige Datei inklusive aller Metadaten, l&auml;uft auf CPU, Grafikkarte oder beidem gemischt. Entwickelt f&uuml;r llama.cpp, die Engine hinter Ollama, LM Studio und &auml;hnlichen Tools. F&uuml;rs lokale Arbeiten die richtige Wahl.</td></tr>
          <tr><td><code>MLX</code></td><td>Apples Format f&uuml;r M-Serie-Macs, in LM Studio teils sp&uuml;rbar schneller als GGUF.</td></tr>
          <tr><td><code>GPTQ</code> / <code>AWQ</code></td><td>Komprimierte Formate, die komplett auf der Grafikkarte laufen m&uuml;ssen. Relevant f&uuml;r Server, nicht f&uuml;r den Laptop.</td></tr>
        </table>
        </div>

        <div class="callout">
          <p><strong>Ein GGUF-Repository ist ein Regal, kein einzelnes Produkt.</strong> &Ouml;ffnest du ein Repo mit GGUF im Namen, findest du darin ein Dutzend Dateien: dasselbe Modell in verschiedenen Kompressionsstufen, von <code>q2</code> bis <code>f16</code>. Du l&auml;dst genau eine davon herunter. Welche, kl&auml;rt die n&auml;chste Seite. (Tools wie LM Studio und Ollama treffen eine brauchbare Vorauswahl f&uuml;r dich.)</p>
        </div>


        <!-- ==================== SEITE 5 ==================== -->

        <span class="section-label">Seite 5 &middot; Quantisierung</span>
        <h2>Q4_K_M lesen wie ein Profi</h2>

        <p>Frisch trainiert liegt jedes Gewicht eines Modells als 16-Bit-Zahl vor. Quantisierung speichert diese Zahlen gr&ouml;ber, mit 8, 5 oder 4 Bit statt 16. Das Prinzip kennst du von Fotos: Ein Bild mit 256 Farben statt 16 Millionen braucht nur einen Bruchteil des Speichers und sieht aus normaler Entfernung fast gleich aus. Erst wenn man zu stark reduziert, wird es sichtbar fleckig. Genauso verliert ein Modell bei 8 und auch bei 4,5 Bit kaum sp&uuml;rbar an Qualit&auml;t; unterhalb von etwa 3 Bit werden die Antworten dann merklich schlechter.</p>

        <p>Der kryptische Code am Dateiende beschreibt genau diese Stufe. <code>Q4_K_M</code> zerlegt sich so: <strong>Q4</strong> hei&szlig;t rund 4 Bit pro Gewicht, <strong>K</strong> steht f&uuml;r das moderne Blockverfahren der K-Quants (Gewichte werden in Bl&ouml;cken mit eigenen Skalierungsfaktoren gespeichert, was die Pr&auml;zision rettet), und <strong>S/M/L</strong> bezeichnet die kleine, mittlere oder gro&szlig;e Ausf&uuml;hrung innerhalb der Stufe. Die Stufen im &Uuml;berblick, gerechnet am Beispiel eines 8B-Modells:</p>

        <div class="table-wrap">
        <table>
          <tr><th>Code</th><th>Bit/Gewicht</th><th>8B-Modell</th><th>Einordnung</th></tr>
          <tr><td><code>F16</code></td><td>16</td><td>~16 GB</td><td>Original; f&uuml;rs blo&szlig;e Ausf&uuml;hren unn&ouml;tig gro&szlig;</td></tr>
          <tr><td><code>Q8_0</code></td><td>~8,5</td><td>~8,5 GB</td><td>praktisch verlustfrei</td></tr>
          <tr><td><code>Q6_K</code></td><td>~6,6</td><td>~6,6 GB</td><td>sehr nah am Original</td></tr>
          <tr><td><code>Q5_K_M</code></td><td>~5,5</td><td>~5,5 GB</td><td>guter Mittelweg</td></tr>
          <tr class="hl"><td><code>Q4_K_M</code></td><td>~4,5</td><td>~4,7 GB</td><td>der Standard: beste Balance aus Gr&ouml;&szlig;e und Qualit&auml;t</td></tr>
          <tr><td><code>Q3_K_M</code></td><td>~3,4</td><td>~3,6 GB</td><td>sp&uuml;rbare Abstriche</td></tr>
          <tr><td><code>Q2_K</code></td><td>~2,6</td><td>~2,8 GB</td><td>Notl&ouml;sung, deutlich schw&auml;cher</td></tr>
        </table>
        </div>

        <p>Dazu kommt ein Posten, den der Dateiname nicht zeigt: der Gespr&auml;chsverlauf. Je l&auml;nger der Chat oder das eingef&uuml;gte Dokument, desto mehr Speicher braucht das Modell zus&auml;tzlich zur Modellgr&ouml;&szlig;e. Plane daf&uuml;r je nach Nutzung ein bis mehrere GB Reserve ein.</p>

        <div class="deeper">
          <strong>Tiefer gegraben:</strong> Neben den K-Quants gibt es Codes wie <code>IQ2_XS</code>; das I steht f&uuml;r eine <i>importance matrix</i>. Dabei wird vorab gemessen, welche Gewichte f&uuml;r die Ausgabequalit&auml;t besonders z&auml;hlen, und die werden pr&auml;ziser gespeichert als der Rest. So bleiben sogar 2-Bit-Fassungen halbwegs brauchbar. Spannend f&uuml;r sehr knappen Speicher; wenn Q4 bei dir passt, brauchst du sie nicht.
        </div>


        <!-- ==================== PRAXIS ==================== -->

        <span class="section-label">Praxis</span>
        <h2>In f&uuml;nf Schritten zum passenden Modell</h2>

        <div class="step">
          <span class="step-head"><span class="step-num">1.</span>Speicher kennen</span>
          <p>Mac: Arbeitsspeicher unter &bdquo;&Uuml;ber diesen Mac&ldquo; nachsehen. Windows-PC mit Grafikkarte: Der VRAM der GPU z&auml;hlt zuerst. Rechne davon nur etwa zwei Drittel als frei, denn System und Programme laufen ja weiter.</p>
        </div>

        <div class="step">
          <span class="step-head"><span class="step-num">2.</span>Gr&ouml;&szlig;enklasse ableiten</span>
          <p>Mit der Tabelle von Seite 2: 16 GB RAM &rarr; 7&ndash;14B. 32 GB &rarr; bis ~32B. Bei MoE-Modellen z&auml;hlt die Gesamtzahl vor dem A.</p>
        </div>

        <div class="step">
          <span class="step-head"><span class="step-num">3.</span>Familie und Variante w&auml;hlen</span>
          <p>Nimm eine aktuelle Generation einer etablierten Familie (Qwen, Gemma, Mistral, Llama) und davon die <strong>Instruct</strong>-Fassung. F&uuml;r Bildverst&auml;ndnis die VL-Variante, f&uuml;r knifflige Logik eine Thinking-Variante.</p>
        </div>

        <div class="step">
          <span class="step-head"><span class="step-num">4.</span>GGUF-Fassung nehmen</span>
          <p>F&uuml;rs lokale Arbeiten mit Ollama, LM Studio und Co. immer das GGUF-Repository, vom Hersteller selbst oder von Community-Accounts wie unsloth und bartowski.</p>
        </div>

        <div class="step">
          <span class="step-head"><span class="step-num">5.</span>Mit Q4_K_M starten, dann justieren</span>
          <p>Q4_K_M ist der bew&auml;hrte Startpunkt. Ist noch reichlich Speicher frei, geh auf Q6_K oder Q8_0 hoch. Ruckelt es, geh eine Gr&ouml;&szlig;enklasse runter: Ein kleineres Modell in Q4 schl&auml;gt fast immer ein gr&ouml;&szlig;eres in Q2. Teste anschlie&szlig;end mit Fragen aus deinem Fachgebiet, nicht mit Smalltalk.</p>
        </div>

        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>Der Name ist das Datenblatt. Account, Familie, Gr&ouml;&szlig;e, Variante, Format, Kompression: Alles steht schon da, bevor du ein einziges Byte herunterl&auml;dst.</p>
          <p style="margin-bottom:0"><strong>Und bei der Wahl gilt:</strong> Das beste Modell ist nicht das gr&ouml;&szlig;te, sondern das gr&ouml;&szlig;te, das entspannt in deinen Speicher passt, mit Luft f&uuml;r den Gespr&auml;chsverlauf. Ein fl&uuml;ssiges 8B-Modell nutzt du jeden Tag, ein ruckelndes 30B nie wieder.</p>
        </div>

        <h3>Quellen &amp; zum Weiterschauen</h3>

        <div class="source-item"><span class="source-num">1</span>Grootendorst, M. (2024, 22. Juli). A visual guide to quantization. <i>Exploring Language Models</i>. <a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization" target="_blank" rel="noopener">newsletter.maartengrootendorst.com</a></div>
        <div class="source-item"><span class="source-num">2</span>Hugging Face. (o.&nbsp;D.). GGUF (mit der vollst&auml;ndigen Tabelle aller Quantisierungstypen). In <i>Hugging Face Hub Documentation</i>. <a href="https://huggingface.co/docs/hub/gguf" target="_blank" rel="noopener">huggingface.co/docs/hub/gguf</a></div>
        <div class="source-item"><span class="source-num">3</span>c't 3003 / Janssen, J.-K. (2025, 24. Oktober). <i>Lokale KI ist jetzt WIRKLICH brauchbar (und auf dieser Hardware l&auml;uft sie)</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=ii8Npn8H2BQ" target="_blank" rel="noopener">youtube.com/watch?v=ii8Npn8H2BQ</a></div>
        <div class="source-item"><span class="source-num">4</span>IBM Technology. (2026). <i>What is Llama.cpp? The LLM inference engine for local AI</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=P8m5eHAyrFM" target="_blank" rel="noopener">youtube.com/watch?v=P8m5eHAyrFM</a></div>
        <div class="source-item"><span class="source-num">5</span>IBM Technology. (2026). <i>LLM compression explained: Build faster, efficient AI models</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=wIXr22QTEHg" target="_blank" rel="noopener">youtube.com/watch?v=wIXr22QTEHg</a></div>

        <div class="footer">
          Mehr Interesse? <a href="/pages/erstgesprach">Kostenloses Erstgespr&auml;ch &rarr;</a><br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-hf-modellnamen', OxGuideHfModellnamen);
