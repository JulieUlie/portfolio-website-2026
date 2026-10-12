# Portfolio Julie Toussaint

Statische website, geen build-stap nodig.

- `index.html` – alle Nederlandse tekst
- `js/main.js` – Engelse vertalingen (woordenboek met dezelfde `data-i18n`-sleutels) + taal/thema-knoppen
- `css/style.css` – opmaak; kleuren staan bovenaan als variabelen in `:root`
- `assets/favicon.svg` – icoontje

## Lokaal bekijken
Dubbelklik `index.html`.

## Tekst aanpassen
Pas de Nederlandse tekst aan in `index.html`. Heeft dat element een `data-i18n="..."`, pas dan ook de Engelse tekst met dezelfde sleutel aan in `js/main.js`.

## LinkedIn toevoegen
Zoek in `index.html` naar `LinkedIn`, haal de commentaartekens `<!--` en `-->` weg en vul je profiel-URL in.

## Publiceren (gratis)
1. **Netlify Drop** – ga naar https://app.netlify.com/drop en sleep deze map erin.
2. **GitHub Pages** – maak een repository, upload deze bestanden, ga naar *Settings → Pages* en kies de branch `main` / map `/ (root)`.
3. **Cloudflare Pages** – https://pages.cloudflare.com → *Create project* → *Direct upload* → upload deze map.
4. **Eigen hosting** – upload alle bestanden via FTP naar de webmap (vaak `public_html`).

Telefoonnummer, adres en geboortedatum staan er bewust niet op (privacy).
