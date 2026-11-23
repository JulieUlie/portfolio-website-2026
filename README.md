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

## Personal project

Separate from the work above, one line under the Lab links to **[ApplyTrack](https://applytrack.julietous.workers.dev)** ([source](https://github.com/JulieUlie/applytrack)), a personal project where Julie practises Playwright (TypeScript) and REST API testing with Postman on a small app of her own. It is labelled as a personal project on the page, so it is not mistaken for work experience.

## Details

- **Full-screen hero:** on desktop screens (at least 1200 × 760 px) the hero fills the whole screen below the header. Text and test-rig figure share the same height and sit centred between the header and the facts table, which closes off the bottom edge. The block grows slightly with the screen height so less empty space is left. Smaller screens keep the normal flow.
- **Bilingual:** Dutch is the source text in the HTML. English comes from a dictionary keyed on `data-i18n` attributes.
- **Themes:** light and dark mode follow the system setting and can be switched by hand. Colours are CSS variables in `:root`.
- **Keyboard shortcuts:** `T` switches the theme and `L` switches the language.
- **Accessible:** the site uses semantic sections and labelled headings, works with `prefers-reduced-motion` and has a readable print layout. The mobile menu is usable by keyboard, links that open a new tab say so to screen readers, and the scrollable code listings and SQL results in the Lab can be scrolled with the arrow keys.
- **Findable:** the site has canonical links, Open Graph tags, JSON-LD (`Person`), `sitemap.xml` and `robots.txt`.
- **Small extras:** the 404 page looks like a failed test, and the browser console greets you with a passing test run.

## What changed in v13

A polish release (November 2026). The content is the same; the changes are about keyboard use, small screens and tidier code.

- **Mobile menu:** opening it moves focus to the first link, and tabbing out of the header closes it again. Before, the Tab key skipped the open menu, because the menu comes before its button in the page.
- **Browser bar colour:** the `theme-color` now matches the current light and dark backgrounds, and it follows the theme you pick by hand, not only the system setting.
- **Lab illustration:** below 1000 px wide, the two small labels on the train drawing are hidden. At phone width they shrank to about 4 px, far below the site's 12 px floor for mono text. The caption still explains the drawing.
- **Screen readers:** the copy button is now announced as "Copy email address", and the LinkedIn and ApplyTrack links say that they open in a new tab.
- **Lab code and results:** the code listings and the SQL result table are now focusable, so keyboard users can scroll them sideways on small screens.
- **Cleanup:** removed markup and CSS that had been hidden since the v8 redesign (section numbers, figure labels, card codes, unused icons and the old reading-progress bar), plus the scroll handler that kept updating that invisible bar. The layout is unchanged: the desktop screenshots before and after match pixel for pixel.

The site has no automated test suite. This release was checked with a scripted Playwright run (44 checks: all pages in light and dark at 375 and 1280 px, the menu, theme colour, labels and accessible names). That run passed twice.

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
