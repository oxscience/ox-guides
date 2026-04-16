class OxGuide6StufenKi extends HTMLElement {
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
  --green-bg:#064e3b;--green-text:#6ee7b7;
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

.level-card{background:var(--surface);border:1px solid #1e293b;border-radius:10px;padding:20px 24px;margin:16px 0;position:relative;overflow:hidden}
.level-badge{display:inline-flex;align-items:center;justify-content:center;background:var(--primary);color:var(--white);font-weight:700;width:36px;height:36px;border-radius:50%;font-size:16px;margin-right:12px;flex-shrink:0}
.level-header{display:flex;align-items:center;margin-bottom:12px}
.level-name{font-size:17.6px;font-weight:600;color:var(--white)}
.level-desc{font-size:14.4px;color:var(--text-secondary)}
.level-example{margin-top:12px;padding-top:12px;border-top:1px solid #1e293b;font-size:13.6px;color:var(--text-muted)}
.level-example strong{color:var(--primary-light)}

.detail-card{
  background:var(--surface);border:1px solid #1e293b;border-radius:10px;
  padding:20px 24px;margin:24px 0;
}
.detail-card h3{margin-top:0}
.detail-card p{margin-bottom:8px;font-size:14.4px}
.detail-card p:last-child{margin-bottom:0}
.detail-card ul{margin-top:8px;margin-bottom:8px}
.detail-card li{font-size:14.4px}

.tools-tag{
  display:inline-block;background:var(--code-bg);color:var(--primary-light);
  font-size:12.8px;padding:2.4px 10.4px;border-radius:6px;margin-right:6px;margin-bottom:6px;
  font-family:var(--mono);
}

.example-box{
  background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;
  padding:16px 20px;margin:12px 0;
}
.example-label{font-weight:600;color:var(--blue-light);font-size:14.4px;margin-bottom:6px}
.example-box p{color:var(--blue-muted);font-size:14.4px;margin-bottom:0}

.assessment-item{background:var(--surface-alt);border:1px solid #1e293b;border-radius:8px;padding:14px 20px;margin:8px 0;font-size:14.4px}
.assessment-item strong{color:var(--primary-light)}

.next-step{background:var(--blue-bg);border:1px solid var(--blue-border);border-radius:10px;padding:16px 20px;margin:12px 0}
.next-step-title{font-weight:600;color:var(--blue-light);font-size:14.4px;margin-bottom:6px}
.next-step p{color:var(--blue-muted);font-size:14.4px;margin-bottom:0}

.golden-rule{
  background:linear-gradient(135deg,#1a1a2e 0%,#111827 100%);
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
  .level-header{flex-wrap:wrap}
  .level-badge{margin-bottom:8px}
}
      </style>

      <div class="container">
        <a href="/pages/kostenlose-ox-guides" class="back">&larr; Alle Guides</a>

        <h1>Die 6 Stufen der KI-Nutzung</h1>
        <div class="meta">4-Seiten-Guide &middot; Out Of The Box Science</div>

        <p class="intro">Die meisten Menschen nutzen KI wie eine bessere Google-Suche &mdash; eine Frage rein, eine Antwort raus, fertig. Dabei ist das erst Stufe 1 von 6. Dieser Guide zeigt dir die komplette Leiter: von der ersten Chat-Frage bis zum autonomen Agenten, der eigenst&auml;ndig arbeitet. Er hilft dir einzusch&auml;tzen, wo du gerade stehst, und zeigt dir, wie der n&auml;chste Schritt konkret aussieht.</p>


        <!-- ==================== SEITE 1 ==================== -->

        <span class="section-label">Seite 1</span>
        <h2>Die 6 Stufen im &Uuml;berblick</h2>

        <h3>1.1 Warum Stufen?</h3>
        <p>KI-Tools entwickeln sich schnell, aber die Art, wie Menschen sie nutzen, folgt einem erstaunlich klaren Muster. Fast alle starten auf der gleichen Stufe und bleiben dort stecken &mdash; nicht weil die Werkzeuge fehlen, sondern weil niemand ihnen zeigt, dass es weitergeht. Die folgenden sechs Stufen beschreiben diesen Weg vom Einsteiger zum Architekten, mit konkreten Beispielen auf jeder Ebene.</p>

        <div class="level-card">
          <div class="level-header">
            <span class="level-badge">1</span>
            <span class="level-name">Googeln 2.0</span>
          </div>
          <div class="level-desc">KI als bessere Suchmaschine &mdash; eine Frage, eine Antwort.</div>
          <div class="level-example"><strong>Beispiel:</strong> &bdquo;Wie behandle ich eine laterale Epicondylitis?&ldquo; oder &bdquo;Was macht ein API-Call in Python?&ldquo;</div>
        </div>

        <div class="level-card">
          <div class="level-header">
            <span class="level-badge">2</span>
            <span class="level-name">Prompten</span>
          </div>
          <div class="level-desc">Strukturierte Anfragen mit Kontext, Rolle und Format &mdash; deutlich bessere Ergebnisse.</div>
          <div class="level-example"><strong>Beispiel:</strong> &bdquo;Du bist ein Physiotherapeut. Erkl&auml;re einem Patienten mit Schulter-Impingement in einfacher Sprache, was passiert. Maximal 3 Abs&auml;tze.&ldquo;</div>
        </div>

        <div class="level-card">
          <div class="level-header">
            <span class="level-badge">3</span>
            <span class="level-name">Konfigurieren</span>
          </div>
          <div class="level-desc">Eigene Vorlagen, Projekte und Memory &mdash; die KI &bdquo;kennt&ldquo; dich.</div>
          <div class="level-example"><strong>Beispiel:</strong> Ein Claude-Projekt mit deinen Behandlungsprotokollen, Leitlinien und Vorlagen &mdash; jede Antwort ber&uuml;cksichtigt deinen Kontext.</div>
        </div>

        <div class="level-card">
          <div class="level-header">
            <span class="level-badge">4</span>
            <span class="level-name">Automatisieren</span>
          </div>
          <div class="level-desc">Wiederkehrende Aufgaben delegieren &mdash; die KI arbeitet auch ohne dich.</div>
          <div class="level-example"><strong>Beispiel:</strong> Jeden Morgen automatisch PubMed nach neuen Studien scannen und eine Zusammenfassung in deinem Postfach.</div>
        </div>

        <div class="level-card">
          <div class="level-header">
            <span class="level-badge">5</span>
            <span class="level-name">Systeme bauen</span>
          </div>
          <div class="level-desc">Eigene Tools und Mini-Apps statt vorhandene nutzen.</div>
          <div class="level-example"><strong>Beispiel:</strong> Ein selbstgebautes Literatur-System, das Papers importiert, zusammenfasst und in dein Wiki einpflegt.</div>
        </div>

        <div class="level-card">
          <div class="level-header">
            <span class="level-badge">6</span>
            <span class="level-name">Agenten steuern</span>
          </div>
          <div class="level-desc">Autonome KI-Agents, die eigenst&auml;ndig Entscheidungen treffen und komplexe Aufgaben erledigen.</div>
          <div class="level-example"><strong>Beispiel:</strong> Ein Research-Agent, der selbstst&auml;ndig Papers findet, liest, bewertet und nur die relevanten mit Begr&uuml;ndung einpflegt.</div>
        </div>

        <div class="callout">
          <strong>Wichtig:</strong> Es gibt keine &bdquo;richtige&ldquo; Stufe. Nicht jeder braucht Level 6, und Stufe 2 sauber zu beherrschen ist wertvoller als auf Stufe 5 herumzustolpern. Aber zu wissen, wo du stehst, hilft dir, die n&auml;chste Stufe bewusst zu gehen &mdash; statt stecken zu bleiben, ohne es zu merken.
        </div>


        <!-- ==================== SEITE 2 ==================== -->

        <span class="section-label">Seite 2</span>
        <h2>Stufen 1&ndash;3: Vom Nutzer zum Konfigurator</h2>

        <h3>2.1 Stufe 1 &mdash; Googeln 2.0</h3>
        <p>Auf dieser Stufe nutzt du KI wie eine Frage-Antwort-Maschine. Du tippst eine Frage ein und bekommst eine Antwort &mdash; &auml;hnlich wie bei Google, nur dass die Antwort schon als ganzer Text kommt statt als Liste von Links. Das funktioniert, hat aber eine klare Grenze: Die KI wei&szlig; nichts &uuml;ber dich, deinen Kontext oder deine Absichten, und liefert deshalb generische Antworten, die oft nicht ganz passen.</p>

        <div class="detail-card">
          <h3>Typische Werkzeuge</h3>
          <p><span class="tools-tag">ChatGPT Free</span><span class="tools-tag">Claude Free</span><span class="tools-tag">Gemini</span></p>
          <h3>Limitation</h3>
          <p>Du bekommst generische Antworten, weil die KI nichts &uuml;ber dich wei&szlig;. Die gleiche Frage liefert dem Chirurgen, der Lehrerin und dem Softwareentwickler das gleiche Ergebnis.</p>
        </div>

        <div class="example-box">
          <div class="example-label">Praxis-Beispiel Health</div>
          <p>&bdquo;Was sind die Return-to-Sport Kriterien nach VKB-Plastik?&ldquo;</p>
        </div>
        <div class="example-box">
          <div class="example-label">Praxis-Beispiel Tech</div>
          <p>&bdquo;Wie macht man einen API-Call in Python?&ldquo;</p>
        </div>

        <h3>2.2 Stufe 2 &mdash; Prompten</h3>
        <p>Der Sprung von Stufe 1 zu 2 passiert, wenn du aufh&ouml;rst, Fragen zu stellen, und anf&auml;ngst, Auftr&auml;ge zu formulieren. Du gibst der KI eine Rolle, beschreibst den gew&uuml;nschten Kontext und das Format der Antwort. Die Ergebnisse werden dadurch deutlich besser, weil die KI jetzt versteht, f&uuml;r wen und wof&uuml;r sie antwortet.</p>

        <div class="detail-card">
          <h3>Key Skills</h3>
          <ul>
            <li><strong>Rollen-Prompts</strong> &mdash; der KI sagen, wer sie in diesem Gespr&auml;ch ist</li>
            <li><strong>Chain-of-Thought</strong> &mdash; die KI bitten, Schritt f&uuml;r Schritt zu denken, bevor sie antwortet</li>
            <li><strong>Few-Shot-Beispiele</strong> &mdash; ein oder zwei Beispiele mitgeben, damit die KI das gew&uuml;nschte Format versteht</li>
          </ul>
        </div>

        <div class="example-box">
          <div class="example-label">Vorher (Stufe 1)</div>
          <p>&bdquo;Erkl&auml;re Impingement.&ldquo;</p>
        </div>
        <div class="example-box">
          <div class="example-label">Nachher (Stufe 2)</div>
          <p>&bdquo;Du bist ein Physiotherapeut, der einem Patienten mit Schulter-Impingement erkl&auml;rt, was los ist. Nutze einfache Sprache, vermeide Fachbegriffe, maximal 3 Abs&auml;tze.&ldquo;</p>
        </div>

        <p>Der Unterschied ist nicht subtil &mdash; die zweite Variante liefert eine Antwort, die du direkt an einen Patienten weitergeben k&ouml;nntest, w&auml;hrend die erste ein Wikipedia-artiges Ergebnis produziert, das f&uuml;r niemanden wirklich geschrieben ist.</p>

        <h3>2.3 Stufe 3 &mdash; Konfigurieren</h3>
        <p>Auf Stufe 3 h&ouml;rst du auf, bei jeder Anfrage den gesamten Kontext mitzuliefern. Stattdessen richtest du die KI einmal ein, und sie &bdquo;kennt&ldquo; dich danach. Du hinterlegst deine Vorlagen, dein Fachgebiet, deine Pr&auml;ferenzen &mdash; und jede zuk&uuml;nftige Antwort ber&uuml;cksichtigt diesen Kontext automatisch, ohne dass du ihn jedes Mal wiederholen musst.</p>

        <div class="detail-card">
          <h3>Key Skills</h3>
          <ul>
            <li><strong>Custom Instructions</strong> &mdash; dauerhafte Anweisungen, die bei jeder Konversation gelten</li>
            <li><strong>Projekte mit Kontext</strong> &mdash; Dokumente hochladen, auf die sich die KI bei jeder Frage bezieht</li>
            <li><strong>Memory nutzen</strong> &mdash; die KI merkt sich Fakten &uuml;ber dich und deine Arbeit</li>
          </ul>
          <h3>Typische Werkzeuge</h3>
          <p><span class="tools-tag">Claude Projekte</span><span class="tools-tag">ChatGPT Custom Instructions</span><span class="tools-tag">CLAUDE.md</span></p>
        </div>

        <div class="example-box">
          <div class="example-label">Praxis-Beispiel</div>
          <p>Du erstellst ein Claude-Projekt und l&auml;dst deine Behandlungsprotokolle, deine hausinternen Leitlinien und deine Berichtsvorlagen hoch. Ab jetzt beantwortete die KI jede Frage im Kontext deiner Praxis &mdash; nicht im Kontext des Internets.</p>
        </div>

        <div class="callout">
          <strong>Der gr&ouml;&szlig;te Hebel:</strong> Viele bleiben auf Stufe 2 stecken, weil sie nicht wissen, dass Stufe 3 existiert. Dabei ist genau dieser Schritt der gr&ouml;&szlig;te Qualit&auml;tssprung in den Ergebnissen &mdash; denn die KI h&ouml;rt auf, generisch zu antworten, und f&auml;ngt an, f&uuml;r dich zu antworten.
        </div>


        <!-- ==================== SEITE 3 ==================== -->

        <span class="section-label">Seite 3</span>
        <h2>Stufen 4&ndash;6: Vom Konfigurator zum Architekten</h2>

        <h3>3.1 Stufe 4 &mdash; Automatisieren</h3>
        <p>Ab Stufe 4 ver&auml;ndert sich die Beziehung zur KI grundlegend: Du gibst nicht mehr einzelne Auftr&auml;ge, sondern richtest Workflows ein, die wiederkehrende Aufgaben selbstst&auml;ndig erledigen. Die KI arbeitet auch dann, wenn du gerade nicht am Rechner sitzt &mdash; morgens vor deinem ersten Kaffee liegt die Zusammenfassung schon im Postfach.</p>

        <div class="detail-card">
          <h3>Key Skills</h3>
          <ul>
            <li><strong>Scheduled Tasks</strong> &mdash; zeitgesteuerte Aufgaben, die automatisch laufen</li>
            <li><strong>Workflows</strong> &mdash; mehrstufige Abl&auml;ufe, bei denen ein Schritt den n&auml;chsten ausl&ouml;st</li>
            <li><strong>Batch-Verarbeitung</strong> &mdash; viele gleichartige Aufgaben auf einmal abarbeiten</li>
          </ul>
          <h3>Typische Werkzeuge</h3>
          <p><span class="tools-tag">Claude Code Scheduled Tasks</span><span class="tools-tag">n8n</span><span class="tools-tag">Zapier</span><span class="tools-tag">Make</span></p>
        </div>

        <div class="example-box">
          <div class="example-label">Praxis-Beispiel</div>
          <p>Jeden Morgen um 7 Uhr scannt ein Scheduled Task PubMed nach neuen Studien zu deinen drei Kernthemen, filtert nach Relevanz und Qualit&auml;t, und erstellt eine kurze Zusammenfassung mit Links &mdash; fertig in deinem Postfach, bevor du die Praxis betrittst.</p>
        </div>

        <h3>3.2 Stufe 5 &mdash; Systeme bauen</h3>
        <p>Auf Stufe 5 nutzt du nicht mehr vorhandene Tools, sondern baust eigene. Das klingt nach Software-Entwicklung, ist aber mit heutigen KI-Tools deutlich zug&auml;nglicher als noch vor zwei Jahren. Du beschreibst der KI, was du brauchst, und sie baut es &mdash; von einer einfachen Web-App bis zu einer Datenbank mit Suchfunktion. Du musst daf&uuml;r kein Entwickler sein, aber du musst in der Lage sein, dein Problem pr&auml;zise zu beschreiben.</p>

        <div class="detail-card">
          <h3>Key Skills</h3>
          <ul>
            <li><strong>Mini-Apps</strong> &mdash; kleine, spezialisierte Anwendungen f&uuml;r genau einen Zweck</li>
            <li><strong>Datenbanken</strong> &mdash; strukturierte Ablage, die &uuml;ber einfache Dateien hinausgeht</li>
            <li><strong>APIs anbinden</strong> &mdash; verschiedene Dienste miteinander verbinden</li>
          </ul>
          <h3>Typische Werkzeuge</h3>
          <p><span class="tools-tag">Claude Code</span><span class="tools-tag">Flask / HTML / JS</span><span class="tools-tag">SQLite</span></p>
        </div>

        <div class="example-box">
          <div class="example-label">Praxis-Beispiel</div>
          <p>Du baust dir ein eigenes Literatur-Management-System: Papers per Drag-and-Drop importieren, die KI fasst sie zusammen, extrahiert die Kernaussagen und pflegt alles automatisch in dein Obsidian-Wiki ein &mdash; durchsuchbar, verlinkt, immer aktuell.</p>
        </div>

        <h3>3.3 Stufe 6 &mdash; Agenten steuern</h3>
        <p>Auf der letzten Stufe gibst du der KI nicht mehr einzelne Aufgaben, sondern Ziele. Ein Agent entscheidet selbstst&auml;ndig, welche Schritte n&ouml;tig sind, f&uuml;hrt sie aus, bewertet die Ergebnisse und passt sein Vorgehen an. Du steuerst nicht mehr jeden Handgriff, sondern definierst das Ergebnis und &uuml;berpr&uuml;fst die Arbeit &mdash; wie ein Teamleiter, der delegiert, statt selbst zu tippen.</p>

        <div class="detail-card">
          <h3>Key Skills</h3>
          <ul>
            <li><strong>Agent-Loops</strong> &mdash; die KI arbeitet iterativ und korrigiert sich selbst</li>
            <li><strong>Tool-Use</strong> &mdash; der Agent nutzt eigenst&auml;ndig Werkzeuge (Suche, Dateien, APIs)</li>
            <li><strong>Multi-Step-Reasoning</strong> &mdash; komplexe Aufgaben in Teilschritte zerlegen und abarbeiten</li>
          </ul>
          <h3>Typische Werkzeuge</h3>
          <p><span class="tools-tag">Claude Code (Agent Mode)</span><span class="tools-tag">Claude Agent SDK</span><span class="tools-tag">Custom Skills</span></p>
        </div>

        <div class="example-box">
          <div class="example-label">Praxis-Beispiel</div>
          <p>Ein Research-Agent durchsucht selbstst&auml;ndig PubMed und OpenAlex nach neuen Studien, liest die Abstracts, bewertet Methodik und Relevanz f&uuml;r dein Fachgebiet, pflegt nur die relevanten Papers in dein System ein &mdash; mit einer kurzen Begr&uuml;ndung, warum er sie ausgew&auml;hlt hat und welche er bewusst aussortiert hat.</p>
        </div>

        <div class="callout">
          <strong>Wichtig zu verstehen:</strong> Jede Stufe baut auf der vorherigen auf. Wer Stufe 2 nicht beherrscht, wird auf Stufe 4 scheitern, weil gute Automatisierungen pr&auml;zise Prompts voraussetzen. Und wer auf Stufe 5 eigene Systeme bauen will, braucht das Konfigurationswissen aus Stufe 3, um der KI verst&auml;ndlich zu erkl&auml;ren, was das System k&ouml;nnen soll.
        </div>


        <!-- ==================== SEITE 4 ==================== -->

        <span class="section-label">Seite 4</span>
        <h2>Wo stehst du? &mdash; Self-Assessment</h2>

        <h3>4.1 Finde deine Stufe</h3>
        <p>Lies die folgenden Aussagen durch und finde die h&ouml;chste Stufe, bei der du dich wiedererkennst. Es geht nicht darum, was du theoretisch k&ouml;nntest, sondern was du tats&auml;chlich regelm&auml;&szlig;ig machst.</p>

        <div class="assessment-item">
          <strong>Stufe 1:</strong> Du &ouml;ffnest ChatGPT oder Claude, stellst eine Frage und nimmst die Antwort so wie sie kommt.
        </div>
        <div class="assessment-item">
          <strong>Stufe 2:</strong> Du gibst der KI Kontext, eine Rolle und ein gew&uuml;nschtes Format mit &mdash; und merkst, dass die Antworten dadurch deutlich besser werden.
        </div>
        <div class="assessment-item">
          <strong>Stufe 3:</strong> Du hast Custom Instructions oder Claude-Projekte eingerichtet, die deinen Kontext dauerhaft speichern, und nutzt sie regelm&auml;&szlig;ig.
        </div>
        <div class="assessment-item">
          <strong>Stufe 4:</strong> Du hast mindestens eine Automatisierung laufen, die ohne dein Zutun arbeitet &mdash; ein Scheduled Task, ein Workflow, eine wiederkehrende Batch-Verarbeitung.
        </div>
        <div class="assessment-item">
          <strong>Stufe 5:</strong> Du hast mit KI-Hilfe ein eigenes Tool gebaut &mdash; eine Mini-App, ein Dashboard, eine Datenbank-Anwendung &mdash; das du regelm&auml;&szlig;ig nutzt.
        </div>
        <div class="assessment-item">
          <strong>Stufe 6:</strong> Du steuerst KI-Agenten, die eigenst&auml;ndig mehrstufige Aufgaben erledigen, Entscheidungen treffen und sich dabei selbst korrigieren.
        </div>

        <h3>4.2 Der n&auml;chste Schritt</h3>
        <p>Egal auf welcher Stufe du stehst &mdash; hier ist eine konkrete Aktion, die dich zur n&auml;chsten bringt.</p>

        <div class="next-step">
          <div class="next-step-title">Stufe 1 &rarr; 2</div>
          <p>Probiere einmal einen strukturierten Prompt mit Rollenanweisung: &bdquo;Du bist [Rolle]. Erkl&auml;re [Thema] f&uuml;r [Zielgruppe]. Format: [Vorgabe].&ldquo; Vergleiche das Ergebnis mit deiner &uuml;blichen Frage.</p>
        </div>

        <div class="next-step">
          <div class="next-step-title">Stufe 2 &rarr; 3</div>
          <p>Erstelle dein erstes Claude-Projekt mit Kontext-Dokumenten. Lade 2&ndash;3 Dateien hoch, die deine Arbeit beschreiben, und stelle dann die gleiche Frage wie sonst &mdash; der Unterschied in der Antwortqualit&auml;t wird dich &uuml;berraschen.</p>
        </div>

        <div class="next-step">
          <div class="next-step-title">Stufe 3 &rarr; 4</div>
          <p>Richte einen Scheduled Task ein, der dir t&auml;glich ein kurzes Briefing erstellt &mdash; zu deinen Themen, deinen Projekten, deinem Fachgebiet. Einmal einrichten, jeden Morgen profitieren.</p>
        </div>

        <div class="next-step">
          <div class="next-step-title">Stufe 4 &rarr; 5</div>
          <p>Bau deine erste Mini-App mit Claude Code. Fang klein an: ein einzelnes Problem, eine klare L&ouml;sung, eine lokale SQLite-Datenbank. Die App muss nur f&uuml;r dich funktionieren.</p>
        </div>

        <div class="next-step">
          <div class="next-step-title">Stufe 5 &rarr; 6</div>
          <p>Lies dich in Claude Code Skills und Agent Patterns ein. Der Schl&uuml;ssel ist, ein System zu bauen, das nicht nur Aufgaben ausf&uuml;hrt, sondern dabei eigenst&auml;ndig entscheidet, welche Schritte sinnvoll sind.</p>
        </div>

        <div class="golden-rule">
          <h2>Die goldene Regel</h2>
          <p>KI-Kompetenz ist kein Sprint, sondern eine Treppe. Jede Stufe baut auf der vorherigen auf, und auf jeder Stufe wird die KI n&uuml;tzlicher &mdash; nicht weil sie besser wird, sondern weil du besser wirst.</p>
          <p style="margin-bottom:0">Du musst nicht alle sechs Stufen erklimmen. Aber jede Stufe, die du bewusst gehst, ver&auml;ndert die Art, wie du arbeitest &mdash; ein bisschen weniger Routine, ein bisschen mehr Zeit f&uuml;r das, was wirklich z&auml;hlt.</p>
        </div>

        <div class="footer">
          Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular.<br>
          <a href="https://outoftheb-ox.de">outoftheb-ox.de</a> &mdash; KI-Tools f&uuml;r Wissenschaft, Lehre &amp; Health.
        </div>
      </div>
    `;
  }
}

customElements.define('ox-guide-6-stufen-ki', OxGuide6StufenKi);
