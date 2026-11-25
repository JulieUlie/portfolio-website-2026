# Julie Toussaint · Portfolio

Personal portfolio of Julie Toussaint: full-stack test automation (QA) and full-stack development in C# and PL/SQL.

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

## What changed in v14

A content release for recruiters (November 2026): less filler, more evidence. Every claim comes from five years of work on PROLOG.

- **Two profiles:** the profile section now shows *Full-stack Test Automation (QA)* and *Full-stack Development (C# · PL/SQL)* side by side, each with four concrete achievements and its stack. The hero title, the facts table ("Open to") and the contact text follow the same two directions.
- **Role and responsibilities:** the former "Approach" section now says what was owned, built or mainly contributed to: analysis and test design, the C# framework and tests, SQL and PL/SQL, the nightly runs and the test strategy.
- **Experience:** tighter achievements, key figures (33 suites, about 1,200 test cases, a 6 to 8 hour nightly run) and four highlights told as problem, approach and result.
- **"How I work":** three evidence-backed traits replace the generic competencies; hobbies were removed.
- **Skills:** split into what was used professionally for five years (test automation, C# / .NET, SQL and databases, analysis) and what comes from studies and the internship.
- **Layout:** checked at 320, 375, 768, 1024, 1280 and 1920 px with no sideways scrolling; long headings wrap on narrow phones, profile cards and traits stack below 1000 px, and CSS/JS are loaded with `?v=14` so browsers pick up the new files.

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
