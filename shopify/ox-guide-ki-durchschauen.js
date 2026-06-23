class OxGuideKiDurchschauen extends HTMLElement {
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
  --green-bg:#064e3b;--green-text:#6ee7b7;
  --warn-bg:#1c1007;--warn-border:#f59e0b;--warn-text:#d4a44a;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  --mono:'SF Mono','Fira Code',monospace;
  display:block;font-family:var(--font);background:var(--bg);color:var(--text);line-height:1.75;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}

.container{max-width:720px;margin:0 auto;padding:48px 24px 64px}

.back{display:inline-block;color:var(--primary);text-decoration:none;font-size:13.6px;margin-bottom:32px}
.back:hover{text-decoration:underline}

h1{font-size:28px;font-weight:700;color:var(--white);margin-bottom:8px;letter-spacing:-0.02em;line-height:1.3}
.meta{color:var(--text-muted);font-size:13.6px;margin-bottom:40px}
.intro{color:var(--text-secondary);margin-bottom:32px;font-size:15.2px}

h2{font-size:19.2px;font-weight:600;color:var(--white);margin-top:40px;margin-bottom:12px}
h3{font-size:16px;font-weight:600;color:var(--white-soft);margin-top:24px;margin-bottom:8px}
p{margin-bottom:16px}

code{
  background:var(--code-bg);color:var(--primary-light);padding:2.4px 6.4px;border-radius:4px;
  font-size:0.9em;font-family:var(--mono);
}

ul,ol{margin:12px 0 20px 24px}
li{margin-bottom:8px}

.section-label{display:inline-block;font-size:11.2px;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-top:48px;margin-bottom:0}
.section-label + h2{margin-top:4px}

.feature-card{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:20px 0;
}
.feature-card h3{margin-top:0}
.feature-card p:last-child{margin-bottom:0}
.feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0}
.feature-grid .feature-card{margin:0}

.prompt-example{
  background:var(--surface-alt);border-left:3px solid var(--border-accent);
  padding:12px 16px;border-radius:0 6px 6px 0;
  margin:12px 0;font-style:italic;color:var(--blue-muted);
}

.warning{
  background:var(--warn-bg);border-left:3px solid var(--warn-border);
  padding:14px 18px;border-radius:0 6px 6px 0;
  margin:16px 0;color:var(--warn-text);
}

.rule-box{
  background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;
  padding:20px 24px;margin:24px 0;color:var(--white-soft);
}
.rule-box strong{color:var(--white)}

.step-box{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:18px 22px;margin:16px 0;
}
.step-number{
  display:inline-block;background:var(--primary);color:var(--white);font-weight:700;
  padding:2.4px 10.4px;border-radius:6px;font-size:12.8px;
  margin-right:8px;letter-spacing:0.03em;
}
.step-title{font-size:16px;font-weight:600;color:var(--white)}
.step-box p{margin-top:12px;margin-bottom:8px}
.step-box p:last-child{margin-bottom:0}

.footer{
  text-align:center;margin-top:48px;padding-top:32px;
  border-top:1px solid var(--border);color:var(--text-dim);font-size:13.6px;
}
.footer a{color:var(--primary);text-decoration:none}
.footer a:hover{text-decoration:underline}

@media(max-width:600px){
  .container{padding:32px 16px 48px}
  h1{font-size:22.4px}
  .feature-grid{grid-template-columns:1fr}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>KI durchschauen</h1>
        <div class="meta">6-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Moderne KI formuliert so fl&uuml;ssig und so selbstsicher, dass man ihr fast alles abnimmt &mdash; auch dann, wenn sie gerade etwas erfindet. Wer mit Quellen, Befunden oder Lehrinhalten arbeitet, sp&uuml;rt hier die eigentliche Gefahr: Ein erfundenes Zitat sieht aus wie ein echtes, eine schiefe Einordnung klingt so souver&auml;n wie eine fundierte.</p>

        <p>Dieser Guide erkl&auml;rt, warum sich KI so verh&auml;lt, wie sie sich verh&auml;lt. Du lernst die vier Eigenschaften kennen, aus denen sich fast jede St&auml;rke und jede Schw&auml;che eines Sprachmodells ableiten l&auml;sst. Danach gehen wir die zwei h&auml;ufigsten Fehlerquellen durch, Halluzinationen und Bias, jeweils mit einer konkreten Checkliste zum Erkennen. Zum Schluss bekommst du ein einfaches Kompetenz-Modell f&uuml;r den souver&auml;nen Umgang mit KI.</p>

        <span class="section-label">Grundlagen</span>
        <h2>Die vier Eigenschaften jeder KI</h2>
        <p>Ein Sprachmodell ist kein Nachschlagewerk und kein Taschenrechner. Es hat vier grundlegende Eigenschaften, und wer die verstanden hat, kann bei fast jeder Antwort einsch&auml;tzen, wie verl&auml;sslich sie ist.</p>

        <div class="feature-card">
            <h3>1. Sie schreibt Wort f&uuml;r Wort vorher</h3>
            <p>Ein Sprachmodell setzt seine Antwort St&uuml;ck f&uuml;r St&uuml;ck zusammen und w&auml;hlt dabei immer das, was statistisch am ehesten als N&auml;chstes passt. Im Kern ist das ein extrem ausgefeiltes Autovervollst&auml;ndigen, vergleichbar mit der Wortvorschlag-Funktion deines Handys, nur tausendfach m&auml;chtiger. Das erkl&auml;rt, warum die Sprache so nat&uuml;rlich klingt, und warum eine Antwort glatt und &uuml;berzeugend sein kann, ohne deshalb zu stimmen. Plausibel und richtig sind hier zwei verschiedene Dinge.</p>
        </div>

        <div class="feature-card">
            <h3>2. Ihr Wissen hat einen Stichtag</h3>
            <p>Alles, was ein Modell wei&szlig;, stammt aus den Texten, mit denen es trainiert wurde, und dieses Training endet zu einem bestimmten Zeitpunkt. &Uuml;ber breite, gut dokumentierte Themen wei&szlig; es erstaunlich viel. Bei sehr Aktuellem, sehr Lokalem oder sehr Speziellem wird die Decke aber d&uuml;nn, und es kann sich auch nicht zuverl&auml;ssig merken, woher eine einzelne Information urspr&uuml;nglich kam. Aktuelle Fakten holt es nur ein, wenn es zus&auml;tzlich im Web suchen darf.</p>
        </div>

        <div class="feature-card">
            <h3>3. Ihr Arbeitsged&auml;chtnis ist begrenzt</h3>
            <p>Alles, worauf das Modell gerade achtet &mdash; deine Frage, das hochgeladene Dokument, der bisherige Verlauf &mdash; liegt in einem Fenster fester Gr&ouml;&szlig;e, dem Kontextfenster. Solange du darunter bleibst, ist das ein Hebel: Das Modell richtet sich pr&auml;zise nach deinem Material. Wird es zu viel, kippt die Qualit&auml;t sp&uuml;rbar, und was mitten in einem langen Text steht, geht leichter unter als der Anfang oder das Ende. Standardm&auml;&szlig;ig erinnert sich das Modell zudem nicht an fr&uuml;here Gespr&auml;che.</p>
        </div>

        <div class="feature-card">
            <h3>4. Sie folgt dem Muster, nicht deiner Absicht</h3>
            <p>Sprachmodelle lassen sich erstaunlich gut steuern: &uuml;ber Tonfall, Format, L&auml;nge, Rolle. Aber sie folgen deinen Anweisungen, indem sie ein Muster fortsetzen, nicht weil sie verst&uuml;nden, was du eigentlich meinst. Zwischen dem, was du gemeint hast, und dem, was ankommt, bleibt deshalb immer eine kleine L&uuml;cke. &Uuml;ber lange, verschachtelte Anweisungen k&ouml;nnen sich kleine Abweichungen aufschaukeln, und fremder Text im Kontext &mdash; etwa in einem Dokument, das du einf&uuml;gst &mdash; kann das Modell ungewollt mitsteuern.</p>
        </div>

        <p>Halt diese vier Eigenschaften im Kopf, dann ergibt das Verhalten der KI fast immer Sinn. Die zwei Fehler, die im Alltag am meisten anrichten, lassen sich direkt aus ihnen ableiten.</p>

        <span class="section-label">Fehler 1</span>
        <h2>Halluzinationen: wenn die KI &uuml;berzeugend danebenliegt</h2>
        <p>Eine Halluzination ist eine Antwort, die das Modell frei erfindet und trotzdem mit voller &Uuml;berzeugung pr&auml;sentiert. Das ist heikler als ein simpler Fehler, weil das Erfundene genauso souver&auml;n klingt wie das Korrekte. Typisch sind erfundene Studien, ausgedachte Statistiken oder falsch zugeordnete Fakten &uuml;ber reale Personen und Ereignisse.</p>

        <p>Der Grund steckt direkt in der ersten Eigenschaft. Fragst du nach etwas, zu dem im Training kaum Material vorlag, etwa die Ver&ouml;ffentlichungsliste einer wenig bekannten Person, dann gibt es f&uuml;r das Modell keinen klaren n&auml;chsten Schritt. Statt zuzugeben, dass es das nicht wei&szlig;, r&auml;t es und f&uuml;llt die L&uuml;cke mit etwas Plausiblem. Ein Bild daf&uuml;r: ein Bekannter, der jedes Buch gelesen zu haben scheint und so stolz auf sein Detailwissen ist, dass er lieber selbstbewusst etwas Falsches behauptet, als ein &bdquo;Wei&szlig; ich nicht&ldquo; zuzugeben.</p>

        <div class="warning">
            <strong>Der unbequeme Teil:</strong> Gute Modelle halluzinieren immer seltener &mdash; und genau das macht die verbleibenden Fehler gef&auml;hrlicher. Wer hundert korrekte Antworten am St&uuml;ck bekommt, pr&uuml;ft die hunderterste nicht mehr nach. Je seltener die Fehler werden, desto bewusster solltest du pr&uuml;fen, gerade weil dich die Routine sonst einlullt.
        </div>

        <h3>Wann Halluzinationen besonders wahrscheinlich sind</h3>
        <ul>
            <li>bei konkreten Fakten, Zahlen, Statistiken oder Quellenangaben</li>
            <li>bei Themen, die obskur, sehr speziell oder sehr aktuell sind</li>
            <li>bei realen, aber wenig bekannten Personen, Orten oder Institutionen</li>
            <li>bei exakten Details wie Daten, Namen oder genauen Zahlen</li>
        </ul>

        <h3>So f&auml;ngst du Halluzinationen ab</h3>

        <div class="step-box">
            <span class="step-number">1</span>
            <span class="step-title">Quellen verlangen &mdash; und doppelt pr&uuml;fen</span>
            <p>Lass dir Belege geben und schick sie dann in die Gegenpr&uuml;fung. Modelle best&auml;tigen ihre eigenen Quellen oft zu schnell, deshalb der zweite Schritt.</p>
            <div class="prompt-example">&bdquo;Belege jede dieser Aussagen mit einer Quelle. Pr&uuml;fe danach noch einmal, ob die genannten Quellen die Aussagen wirklich st&uuml;tzen.&ldquo;</div>
        </div>

        <div class="step-box">
            <span class="step-number">2</span>
            <span class="step-title">Der KI die Erlaubnis geben, etwas nicht zu wissen</span>
            <p>Modelle raten, weil sie hilfreich sein wollen. Nimm ihnen diesen Druck vorab.</p>
            <div class="prompt-example">&bdquo;Wenn du dir nicht sicher bist, sag das offen. Ein &sbquo;Wei&szlig; ich nicht&lsquo; ist mir lieber als eine Vermutung.&ldquo;</div>
        </div>

        <div class="step-box">
            <span class="step-number">3</span>
            <span class="step-title">Nach der eigenen Sicherheit fragen</span>
            <p>Oft &bdquo;wei&szlig;&ldquo; das Modell selbst, wo es wackelt &mdash; es wollte nur souver&auml;n klingen.</p>
            <div class="prompt-example">&bdquo;Wie sicher bist du bei dieser Antwort, und welche Stelle k&ouml;nnte am ehesten falsch sein?&ldquo;</div>
        </div>

        <div class="step-box">
            <span class="step-number">4</span>
            <span class="step-title">Gegencheck im frischen Chat</span>
            <p>Im selben Gespr&auml;ch verteidigt das Modell seine Antwort. Ein neuer Chat pr&uuml;ft unbefangen.</p>
            <div class="prompt-example">&bdquo;Hier ist eine Antwort aus einem anderen Chat. Finde m&ouml;gliche Fehler und pr&uuml;fe, ob die Quellen die Aussagen tats&auml;chlich belegen.&ldquo;</div>
        </div>

        <div class="step-box">
            <span class="step-number">5</span>
            <span class="step-title">Bei allem, was z&auml;hlt: gegen vertrauensw&uuml;rdige Quellen abgleichen</span>
            <p>Zahlen, Daten und Zitate niemals ungepr&uuml;ft &uuml;bernehmen. Klingt etwas schief, stell eine Nachfrage, statt es durchzuwinken.</p>
        </div>

        <div class="warning">
            <strong>F&uuml;r Health Pros und Forschende:</strong> Gerade wenn am Ende ein Befund, eine Patienteninfo oder eine Literaturangabe steht, ersetzt kein Modell den Gegencheck. Ein erfundenes Paper, das du ungepr&uuml;ft zitierst, f&auml;llt am Ende auf dich zur&uuml;ck, nicht auf die KI. Wer regelm&auml;&szlig;ig mit Studien arbeitet, pr&uuml;ft Quellenangaben in Sekunden mit unserem kostenlosen <a href="https://citemetrics.outoftheb-ox.de">CiteMetrics</a>.
        </div>

        <span class="section-label">Fehler 2</span>
        <h2>Bias: wenn die KI unbemerkt eine Richtung bevorzugt</h2>
        <p>Bias bedeutet, dass ein Modell bestimmte Perspektiven oder Antworten bevorzugt, ohne dass du es sofort merkst. Manchmal ist das offensichtlich, etwa wenn es eine Seite einer Debatte ausf&uuml;hrlich erkl&auml;rt und die andere knapp abhandelt. Oft ist es subtiler: eine Sichtweise bekommt mehr Tiefe und M&uuml;he als die andere, oder die Antwortqualit&auml;t schwankt je nach Sprache.</p>

        <p>Auch das folgt aus der Natur des Trainings. Das Modell lernt aus riesigen Mengen Text aus dem Netz, mit allen Schieflagen, die darin stecken. Aus diesem Material kann es ein Muster &uuml;bernehmen, das es leicht in eine Richtung kippen l&auml;sst &mdash; bei politischen Themen genauso wie bei der Frage, welche Methode, welche Schule oder welcher Ansatz als selbstverst&auml;ndlich richtig gilt.</p>

        <p>Eine KI sollte dir helfen, dir eine eigene Meinung zu bilden, nicht dich in eine schieben. Argumentiert sie f&uuml;r eine Seite &uuml;berzeugender oder ziert sich bei der anderen, schiebt sie dich in eine Richtung, anstatt dir beim eigenen Urteil zu helfen.</p>

        <h3>So holst du dir die Ausgewogenheit zur&uuml;ck</h3>
        <ul>
            <li><strong>Hak nach,</strong> wenn eine Antwort einseitig wirkt, und verlange die st&auml;rksten Argumente der Gegenseite, gleich ausf&uuml;hrlich.</li>
            <li><strong>Bitte aktiv</strong> um eine differenzierte, ausgewogene Darstellung.</li>
            <li><strong>Sag,</strong> dass du eine ehrliche Auseinandersetzung willst, kein Best&auml;tigen.</li>
            <li><strong>Lass dir Belege geben</strong> und pr&uuml;f die Links selbst.</li>
            <li><strong>Stell dieselbe Frage</strong> aus verschiedenen Blickwinkeln und vergleich die Antworten.</li>
        </ul>

        <div class="feature-card">
            <h3>Der Paar-Test</h3>
            <p>Ein einfacher Trick, um Bias sichtbar zu machen: Stell dem Modell dieselbe Frage zweimal, einmal aus der einen, einmal aus der anderen Perspektive.</p>
            <div class="prompt-example">&bdquo;Erkl&auml;re, warum Ansatz A &uuml;berlegen ist.&ldquo; &nbsp;/&nbsp; &bdquo;Erkl&auml;re, warum Ansatz B &uuml;berlegen ist.&ldquo;</div>
            <p>Schau, ob beide Antworten gleich gr&uuml;ndlich ausfallen. Verweigert es eine Seite oder bleibt auff&auml;llig d&uuml;nn, hast du den Bias direkt vor Augen.</p>
        </div>

        <p>Und das Wichtigste: Dieser pr&uuml;fende Blick lohnt sich weit &uuml;ber politische Themen hinaus. Er steht jedem Gespr&auml;ch mit einer KI gut.</p>

        <span class="section-label">Kompetenzen</span>
        <h2>Souver&auml;n mit KI arbeiten: vier Kompetenzen</h2>
        <p>Die KI zu verstehen ist die eine H&auml;lfte. Die andere ist, wie du selbst mit ihr arbeitest. Vier Kompetenzen tragen das, und keine l&auml;sst sich durch die anderen ersetzen. Schw&auml;chelt eine, leidet das ganze Ergebnis.</p>

        <div class="feature-grid">
            <div class="feature-card">
                <h3>Delegieren</h3>
                <p>Entscheiden, ob, wann und wie du eine Aufgabe &uuml;berhaupt an die KI gibst. Nicht alles geh&ouml;rt delegiert, und der erste Schritt ist die bewusste Wahl.</p>
            </div>
            <div class="feature-card">
                <h3>Beschreiben</h3>
                <p>Dein Ziel so klar formulieren, dass das Modell n&uuml;tzlich reagiert. Dazu geh&ouml;ren Kontext, Format und die Absicht hinter der Frage.</p>
            </div>
            <div class="feature-card">
                <h3>Beurteilen</h3>
                <p>Einsch&auml;tzen, ob das Ergebnis wirklich taugt. Genau hier zahlen sich die Checklisten aus den letzten Abschnitten aus.</p>
            </div>
            <div class="feature-card">
                <h3>Verantworten</h3>
                <p>Die Verantwortung daf&uuml;r behalten, was du mit dem Ergebnis tust und wie transparent du den KI-Einsatz machst. Die Entscheidung bleibt bei dir.</p>
            </div>
        </div>

        <p>Diese Kompetenzen greifen in drei Arbeitsweisen mit KI, und je mehr Selbstst&auml;ndigkeit du abgibst, desto wichtiger werden Beurteilen und Verantworten:</p>
        <ul>
            <li><strong>Automation</strong> &mdash; die KI erledigt eine klar umrissene Aufgabe nach deiner Anweisung.</li>
            <li><strong>Augmentation</strong> &mdash; ihr denkt gemeinsam, sie ist Sparringspartner statt Ausf&uuml;hrer.</li>
            <li><strong>Agency</strong> &mdash; du richtest die KI so ein, dass sie k&uuml;nftige Aufgaben eigenst&auml;ndig f&uuml;r dich &uuml;bernimmt.</li>
        </ul>

        <span class="section-label">Praxis</span>
        <h2>Die goldene Regel und drei &Uuml;bungen</h2>

        <div class="rule-box">
            <strong>Die goldene Regel:</strong> Vertraue keiner Zahl, keinem Namen und keinem Zitat ungepr&uuml;ft &mdash; egal wie souver&auml;n die KI klingt. Je seltener sie sich irrt, desto bewusster pr&uuml;fst du.
        </div>

        <p>Die drei &Uuml;bungen brauchen je f&uuml;nf Minuten und zeigen dir die Schw&auml;chen direkt am eigenen Modell. Gut auch als Einstieg in ein Seminar oder eine Teamrunde.</p>

        <div class="step-box">
            <span class="step-number">&Uuml;bung 1</span>
            <span class="step-title">Eine Halluzination provozieren</span>
            <p>Bitte die KI um die Publikationsliste einer real existierenden, aber wenig bekannten Person aus deinem Feld. Pr&uuml;f jede Angabe einzeln. Du wirst sehen, wie &uuml;berzeugend Erfundenes aussehen kann.</p>
        </div>

        <div class="step-box">
            <span class="step-number">&Uuml;bung 2</span>
            <span class="step-title">Bias sichtbar machen</span>
            <p>Stell eine kontroverse Fachfrage zweimal aus gegens&auml;tzlichen Perspektiven und vergleich die Gr&uuml;ndlichkeit der beiden Antworten.</p>
        </div>

        <div class="step-box">
            <span class="step-number">&Uuml;bung 3</span>
            <span class="step-title">Sicherheit abfragen</span>
            <p>Lass dir zu einer fachlichen Antwort sagen, wie sicher sich das Modell ist und welche Stelle am ehesten falsch sein k&ouml;nnte. Vergleich das mit deinem eigenen Urteil.</p>
        </div>

        <p>Wer diese drei &Uuml;bungen einmal gemacht hat, bekommt ein Gef&uuml;hl daf&uuml;r, wann eine KI-Antwort tr&auml;gt und wann sie wackelt. Genau dieses Gef&uuml;hl macht den souver&auml;nen Umgang aus.</p>

        <div class="footer">
            <a href="https://outoftheb-ox.de">Out Of The Box Science</a> &mdash; Tech-Tools f&uuml;r Wissenschaft und Lehre. Mit und ohne KI.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-ki-durchschauen', OxGuideKiDurchschauen);
