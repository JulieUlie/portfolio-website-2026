# Julie Toussaint · Portfolio

Personal portfolio of Julie Toussaint, a software developer specialised in test automation.

**Live:** https://jt.julietous.workers.dev

The site is plain HTML, CSS and JavaScript. It has no framework, no build step and no tracking. It is available in Dutch and English, with a light and a dark theme.

## The Lab

The site has three small interactive experiments that show what test automation looks like in practice. They are inspired by work on PROLOG, the catering logistics system for Deutsche Bahn. They contain no code or data from the real system.

| Experiment | What it shows |
| --- | --- |
| [Test robot](https://jt.julietous.workers.dev/lab/testrobot) | An automated UI test drives a simulated Prokomm handheld, the Android app used to pick catering trolleys. Plant a bug and watch the test catch it. |
| [Test types](https://jt.julietous.workers.dev/lab/testsoorten) | One warehouse rule, tested four ways: unit test, UI test, regression test and mutation test, each with its own interactive demo. |
| [SQL lab](https://jt.julietous.workers.dev/lab/sql) | A warehouse database running as SQLite in WebAssembly, right in your browser. Break the data and let the data-quality checks find it. |

## Details

- **Full-screen hero:** on desktop screens (at least 1200 × 760 px) the hero fills the whole screen below the header. Text and test-rig figure share the same height and sit centred between the header and the facts table, which closes off the bottom edge. Smaller screens keep the normal flow.
- **Bilingual:** Dutch is the source text in the HTML. English comes from a dictionary keyed on `data-i18n` attributes.
- **Themes:** light and dark mode follow the system setting and can be switched by hand. Colours are CSS variables in `:root`.
- **Keyboard shortcuts:** `T` switches the theme and `L` switches the language.
- **Accessible:** the site uses semantic sections and labelled headings, works with `prefers-reduced-motion` and has a readable print layout.
- **Findable:** the site has canonical links, Open Graph tags, JSON-LD (`Person`), `sitemap.xml` and `robots.txt`.
- **Small extras:** the 404 page looks like a failed test, and the browser console greets you with a passing test run.

## Structure

```
index.html            Home page (Dutch source text)
404.html              Not-found page, uses absolute paths
css/style.css         Main styles and colour tokens
css/lab.css           Shared styles for the Lab pages
js/main.js            English translations, theme, language, shortcuts
js/lab-*.js           One script per experiment (English text in window.JT_EN)
lab/                  The three experiments
assets/               Photo, logos, Open Graph image
assets/icons/         Technology icons
```

## Run locally

Open `index.html` directly, or serve the folder to get full behaviour, including the 404 page:

```bash
python -m http.server
```

Then go to http://localhost:8000. The SQL lab loads sql.js from cdnjs, so it needs an internet connection.

## Deployment

The site is hosted on Cloudflare Workers as static assets and deployed with `npx wrangler deploy`.

## Credits

- Technology icons: [Devicon](https://devicon.dev) (MIT) and [Simple Icons](https://simpleicons.org) (CC0)
- Line icons: partly drawn by hand, partly from [Lucide](https://lucide.dev) (ISC)
- [sql.js](https://github.com/sql-js/sql.js) (MIT): SQLite compiled to WebAssembly
- Fonts: IBM Plex via Google Fonts (OFL)

All logos and trademarks belong to their respective owners.
