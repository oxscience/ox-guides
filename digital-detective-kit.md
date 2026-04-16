# Fake News, KI-Fakes & Desinformation erkennen
## Dein Digital Detective Kit — 12 kostenlose Tools für Wissenschaft & Lehre

*Ein Guide von Out Of The Box Science (OX)*

---

## Warum dieses Thema?

KI-generierte Bilder in Fachartikeln. Gefälschte Studien auf Social Media. Deepfake-Videos von Konferenzen. Was vor zwei Jahren Science-Fiction war, ist heute Alltag.

Für Dozenten, Forscher und Tech-Professionals ist das kein abstraktes Problem — es betrifft eure Arbeit direkt: Studierende zitieren fragwürdige Quellen, KI-generierte Paper tauchen in Reviews auf, und Desinformation zu Gesundheits- und Wissenschaftsthemen verbreitet sich schneller als jede Richtigstellung.

Dieser Guide gibt euch 12 konkrete, kostenlose Tools an die Hand. Keine Theorie, kein Hype — nur Werkzeuge, die ihr sofort einsetzen könnt.

---

## 1 — Bilder & Videos prüfen

### Google Reverse Image Search
**Was es kann:** Hochladen oder URL eingeben → Google zeigt, wo das Bild sonst noch auftaucht.
**Wofür ihr es braucht:** Prüfen, ob ein Bild tatsächlich das zeigt, was behauptet wird. Beispiel: "Foto von Konferenz X" → Reverse Search zeigt: Bild ist 3 Jahre alt und aus einem anderen Kontext.
**Wie:** images.google.com → Kamera-Icon → Bild hochladen
**Limit:** Findet Kopien, aber keine KI-generierten Bilder.

### TinEye
**Was es kann:** Findet die *älteste* Version eines Bildes im Netz.
**Wofür ihr es braucht:** Wenn ein virales Bild angeblich "brandneu" ist — TinEye zeigt euch, ob es schon vor Monaten existierte. Besonders nützlich für Fact-Checking in der Lehre.
**Wie:** tineye.com → Bild hochladen → nach Datum sortieren

### InVID WeVerify (Browser-Extension)
**Was es kann:** Videos in Einzelbilder zerlegen, Metadaten auslesen, Reverse-Search auf Keyframes.
**Wofür ihr es braucht:** Das Schweizer Taschenmesser für Video-Verifikation. Wenn Studierende ein "Beweis-Video" mitbringen oder ein viraler Clip in eurer Timeline landet.
**Wie:** Chrome/Firefox Extension installieren → Video-URL eingeben → Keyframes analysieren

---

## 2 — KI-generierte Inhalte erkennen

### Hive Moderation (Browser-Extension)
**Was es kann:** Erkennt Muster von Midjourney, DALL-E und Stable Diffusion in Bildern.
**Wofür ihr es braucht:** Schneller Check, ob ein Bild KI-generiert ist. Praktisch wenn ihr Paper reviewt oder Studierende verdächtige Grafiken einreichen.
**Wie:** Chrome Extension → auf beliebiger Webseite Bilder prüfen
**Limit:** Neue KI-Modelle werden nicht sofort erkannt.

### AI or Not
**Was es kann:** Upload von Bildern, Audio und Video → Einschätzung ob KI-generiert.
**Wofür ihr es braucht:** Breiterer Check als Hive — deckt auch Audio (Deepfake-Stimmen) und Video ab.
**Wie:** aiornot.com → Datei hochladen
**Limit:** Begrenzte kostenlose Nutzung, nicht 100% zuverlässig.

### C2PA Content Credentials
**Was es kann:** Zeigt kryptografische Metadaten (eine Art "digitalen Personalausweis"), die dokumentieren, wie ein Bild erstellt wurde — inklusive ob KI beteiligt war.
**Wofür ihr es braucht:** Der kommende Standard. Adobe, Google und Microsoft bauen das bereits ein. Noch nicht flächendeckend, aber gut zu kennen.
**Wie:** contentcredentials.org/verify → Bild hochladen

---

## 3 — Fakten checken

### Google Fact Check Explorer
**Was es kann:** Durchsucht über 150.000 Fact-Checks von verifizierten Organisationen weltweit.
**Wofür ihr es braucht:** Schnellste Methode um zu prüfen, ob eine Behauptung bereits gecheckt wurde. Einfach die Kernaussage eingeben.
**Wie:** toolbox.google.com/factcheck/explorer → Suchbegriff eingeben

### Snopes
**Was es kann:** Spezialisiert auf urbane Legenden, virale Hoaxes und Internet-Mythen.
**Wofür ihr es braucht:** Wenn "diese eine WhatsApp-Nachricht" wieder die Runde macht oder Studierende mit einer wilden Behauptung kommen.
**Wie:** snopes.com/fact-check/ → Suchbegriff eingeben

### AFP Fact Check
**Was es kann:** Internationales Fact-Checking-Netzwerk mit 150+ Prüfern in 26 Sprachen — auch Deutsch.
**Wofür ihr es braucht:** Besonders für internationale Desinformation und Themen, die über den englischsprachigen Raum hinausgehen.
**Wie:** factcheck.afp.com → Suchbegriff eingeben

---

## 4 — Medien-Bias erkennen

### Ad Fontes Media Bias Chart
**Was es kann:** Interaktive Karte, die Medienquellen nach politischer Tendenz und Faktentreue einordnet.
**Wofür ihr es braucht:** In der Lehre Gold wert: Zeigt Studierenden visuell, wo eine Quelle im Spektrum steht. Auch für eigene Recherche nützlich.
**Wie:** adfontesmedia.com/interactive-media-bias-chart → Quelle suchen

### Ground News
**Was es kann:** Zeigt zu jeder Nachricht, welche Seite des politischen Spektrums sie aufgreift — und welche sie ignoriert ("Blindspots").
**Wofür ihr es braucht:** Perfekt um Studierenden Medien-Bias greifbar zu machen. Auch für die eigene Informationshygiene.
**Wie:** ground.news → Thema suchen
**Limit:** Volle Features ab $8/Monat, Grundversion kostenlos.

---

## 5 — Webseiten & Quellen prüfen

### Wayback Machine
**Was es kann:** Das "Gedächtnis des Internets" — zeigt gespeicherte Versionen von Webseiten, auch wenn sie gelöscht oder verändert wurden.
**Wofür ihr es braucht:** Wenn eine Quelle plötzlich offline ist oder jemand behauptet, eine Seite hätte "schon immer" so ausgesehen.
**Wie:** web.archive.org → URL eingeben → Zeitstrahl durchgehen

### WHOIS Lookup
**Was es kann:** Zeigt, wann eine Domain registriert wurde und wem sie gehört.
**Wofür ihr es braucht:** Fake-News-Seiten werden oft kurzfristig erstellt. Wenn eine "Nachrichtenseite" erst seit 3 Wochen existiert, ist das ein starkes Warnsignal.
**Wie:** whois.com/whois → Domain eingeben

---

## Die goldene Regel

Kein einzelnes Tool gibt euch eine definitive Antwort. Die Kombination macht's:

1. **Bild/Video prüfen** → Reverse Image Search + InVID
2. **KI-Check** → Hive + AI or Not
3. **Behauptung prüfen** → Fact Check Explorer + Snopes
4. **Quelle einordnen** → Media Bias Chart + WHOIS

Und das Wichtigste: **Langsamer werden.** Die meiste Desinformation funktioniert, weil wir zu schnell teilen. Zwei Minuten nachdenken schlägt jedes Tool.

---

## Für die Lehre: 3 Übungsideen

**1. Bild-Detektiv (15 Min)**
Zeigt Studierenden 5 Bilder — 2 davon KI-generiert. Sie müssen mit Hive und Reverse Image Search herausfinden, welche echt sind.

**2. Quellen-Check Challenge (20 Min)**
Gebt 3 virale Behauptungen aus Social Media. Teams prüfen mit Fact Check Explorer, Snopes und WHOIS, was stimmt.

**3. Media Bias Mapping (30 Min)**
Studierende nehmen ein aktuelles Thema und vergleichen die Berichterstattung über Ground News und die Media Bias Chart. Diskussion: Was fällt auf?

---

*Dieser Guide ist kostenlos. Kein Haken, kein Email-Formular. Wenn er euch geholfen hat, teilt ihn weiter.*

*Mehr Guides für Wissenschaft, Lehre & Tech: outoftheb-ox.de*
