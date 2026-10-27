# Portfolio Julie Toussaint

- `index.html` – alle Nederlandse tekst
- `js/main.js` – Engelse vertalingen (woordenboek met dezelfde `data-i18n`-sleutels) + taal/thema-knoppen
- `css/style.css` – opmaak; kleuren staan bovenaan als variabelen in `:root`
- `assets/favicon.svg` – icoontje
- `assets/julie-toussaint.jpg` – profielfoto (uit het cv); vervang door een groter exemplaar met dezelfde naam voor een scherpere foto
- `assets/rekencentra.png`, `assets/roborana.png`, `assets/trolley.jpg` – logo's bij de ervaring (B. Rekencentra en RoboRana, van roborana.com) en de trolley in de Testrobot-demo
- `assets/prolog.png`, `assets/prokomm.png`, `assets/ranorex.jpg` – logo's bij de PROLOG-, Prokomm- en Ranorex-labels en in de ‘In mijn werk’-notities van de lab-pagina's (het Prokomm-icoon is het app-icoon van de Android-app)
- `assets/icons/` – iconen van technologieën in de labels (C#, Java, Oracle, Jira, Android …). Bron: [Devicon](https://devicon.dev) (MIT) en [Simple Icons](https://simpleicons.org) (CC0, in de officiële merkkleur). De logo's zelf blijven merken van hun eigenaars.
- `lab/` – drie interactieve experimenten, met eigen opmaak in `css/lab.css` en een script per pagina:
  - `lab/testrobot.html` + `js/lab-robot.js` – UI-test die een nagebootste Prokomm-handheld bedient
  - `lab/testsoorten.html` + `js/lab-testsoorten.js` – unittest, UI-test, regressietest en mutatietest op dezelfde regel
  - `lab/sql.html` + `js/lab-sql.js` – SQLite-database in WebAssembly (sql.js via cdnjs, dus internet nodig)
