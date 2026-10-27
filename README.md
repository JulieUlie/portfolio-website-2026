# Portfolio Julie Toussaint

Statische website, geen build-stap nodig.

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

## Lokaal bekijken
Dubbelklik `index.html`. Werkt een experiment zo niet goed, start dan in deze map een lokale webserver (bijvoorbeeld `python -m http.server`) en open http://localhost:8000. Het SQL-lab heeft internet nodig om SQLite te laden.

## Tekst aanpassen
Pas de Nederlandse tekst aan in `index.html`. Heeft dat element een `data-i18n="..."`, pas dan ook de Engelse tekst met dezelfde sleutel aan in `js/main.js`.
Op de lab-pagina's staat de Engelse tekst bovenaan in het script van die pagina (`window.JT_EN`).

De demo's zijn geïnspireerd op het werk aan PROLOG voor Deutsche Bahn, maar bevatten geen code of data van het echte systeem. Houd dat zo.

## LinkedIn aanpassen
De LinkedIn-knop staat in de contactsectie. Zoek in `index.html` naar `linkedin.com` om de profiel-URL te wijzigen.

## Publiceren (gratis)
1. **Netlify Drop** – ga naar https://app.netlify.com/drop en sleep deze map erin.
2. **GitHub Pages** – maak een repository, upload deze bestanden, ga naar *Settings → Pages* en kies de branch `main` / map `/ (root)`.
3. **Cloudflare Pages** – https://pages.cloudflare.com → *Create project* → *Direct upload* → upload deze map.
4. **Eigen hosting** – upload alle bestanden via FTP naar de webmap (vaak `public_html`).

Telefoonnummer, adres en geboortedatum staan er bewust niet op (privacy).
