/* Julie Toussaint · portfolio. Vanilla JS; alle inhoud werkt ook zonder dit script. */
(() => {
'use strict';
const d = document, root = d.documentElement;
const $ = (s, c = d) => c.querySelector(s);
const $$ = (s, c = d) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const darkMQ = matchMedia('(prefers-color-scheme: dark)');
const store = (k, v) => {
  try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v); } catch (e) { return null; }
};
const safe = fn => { try { fn(); } catch (e) { console.error(e); } };
const seen = (els, fn, opt) => {
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && fn(e.target, io)), opt);
  els.forEach(el => el && io.observe(el));
};

// i18n: NL staat in de HTML, EN hieronder
const EN = {
  'meta.desc': 'Julie Toussaint, Test Automation Engineer based in Antwerp. Five years of end-to-end test automation for Deutsche Bahn with C#, Ranorex and Oracle PL/SQL, from Windows desktop and Android handheld all the way into the database.',
  'skip': 'Skip to content',
  'nav.label': 'Main navigation', 'nav.menu': 'Navigation menu',
  'nav.1': 'Profile', 'nav.2': 'Role', 'nav.3': 'Experience', 'nav.4': 'Skills', 'nav.5': 'Education', 'nav.6': 'Contact',
  'lang.switch': 'Switch to Dutch',
  'theme.dark': 'Switch to dark theme', 'theme.light': 'Switch to light theme',
  'city': 'Antwerp, Belgium',
  'hero.lead': 'Five years on Deutsche Bahn’s warehouse and catering logistics system: end-to-end tests, the C#/.NET framework code underneath them, and test data and business-logic checks in Oracle SQL and PL/SQL.',
  'hero.cta1': 'Get in touch', 'hero.cta2': 'View my experience',
  'spec.role': 'Experience', 'spec.roleV': '5 years as a Test Automation Engineer', 'spec.proj': 'Project', 'spec.projV': 'for Deutsche Bahn', 'spec.lang': 'Languages', 'spec.open': 'Open to', 'spec.openV': 'Test Automation &amp; QA · C# &amp; PL/SQL Development',
  'fig.title': 'End-to-end test setup', 'fig.rerun': 'Run again',
  'fig.alt': 'Diagram: a test suite in C# and Ranorex drives a Windows desktop application and an Android handheld, then verifies the outcome in an Oracle database, also directly through PL/SQL.',
  'log.1': 'Book a goods receipt', 'log.2': 'Close a stocktake', 'log.3': 'Order picking with a handheld scan',
  'log.4': 'Verify stock in the database', 'log.5': 'Test business logic without the UI',
  'fig.queued': 'Queued', 'fig.running': 'Running', 'fig.passed': 'Passed', 'fig.failed': 'failed', 'fig.skipped': 'skipped',
  'fig.cap': 'Illustrative test run: the suite drives the desktop and the handheld, then validates the outcome in the database.',
  's1.k': 'Profile', 's1.h': 'About me', 's1.photo': 'Portrait of Julie Toussaint',
  's1.p1': 'Test Automation Engineer with a bachelor’s degree in Applied Computer Science and five years as the primary test automation engineer of PROLOG at B. Rekencentra: the logistics system behind on-board catering on Deutsche Bahn’s long-distance trains.',
  's1.p2': 'My work sits where testing meets development: I automate end-to-end tests, write the C# libraries the whole team uses and work directly in the Oracle database. I’m looking for a role in test automation and QA, or as a C# and PL/SQL developer, in a team that takes quality seriously.',
  's1.prof': 'Two profiles',
  's1.paL': 'Testing across every layer: Windows desktop, Android handheld and the Oracle database, from test design to the nightly run.',
  's1.pa1': 'Main contributor to a Ranorex framework of 33 test suites and ≈ 1,200 test cases',
  's1.pa2': 'Owner of the nightly test runs, the test server and the test strategy',
  's1.pa3': 'Database-level tests that check business logic independently of the UI, guarded against false positives',
  's1.pa4': 'Designed test scenarios, did exploratory testing and reviewed test work against the Definition of Done',
  's1.pbL': 'Code from the user interface down into the database: C#/.NET in the application and the framework, PL/SQL in Oracle.',
  's1.pb1': 'Built shared C# libraries: an Oracle data-access layer, a UI action library, reporting and a hang watcher',
  's1.pb2': 'In the WinForms/Telerik application itself: accessible controls, refactoring and a bug fix through merge requests',
  's1.pb3': 'Set up (2022) and maintained the shared PL/SQL test-data package: creating and fully cleaning up test data',
  's1.pb4': 'Large refactors and upgrades (C# 7, Oracle Managed Data Access) without breaking the nightly runs, and root-cause analysis of foreign-key and lock errors',
  's1.comp': 'How I work',
  's1.c1': 'Green only counts with proof', 's1.c1p': 'I only trust a passing test once a query confirms it actually tested something.',
  's1.c2': 'Root causes, not workarounds', 's1.c2p': 'When a test fails, I dig through logs, trace tables and job history to find where it really goes wrong.',
  's1.c3': 'Ownership', 's1.c3p': 'Five years responsible for the nightly test runs, the test server and the test strategy.',
  's2.k': 'Role', 's2.h': 'Responsibilities',
  's2.intro': 'What fell under my responsibility in a PROLOG team of at most five people, from ticket to nightly run. The team lead set the priorities, with my input.',
  's2.lvMain': 'Main contributor', 's2.lvBuilt': 'Built and maintained', 's2.lvOwner': 'Owner',
  's2.1h': 'Analysis &amp; test design',
  's2.1p': 'For each ticket, investigated the specs, the application, the code and the database, ending with an estimate and a proposal of test scenarios. Also wrote user stories and documented complex business rules for the product owners.',
  's2.2h': 'C# framework &amp; tests',
  's2.2p': 'The end-to-end tests for desktop and Android handheld, and the C# code underneath: shared libraries, the Oracle data layer, reporting and code coverage. Small testability fixes in the application itself through merge requests.',
  's2.3h': 'SQL &amp; PL/SQL',
  's2.3p': 'The shared PL/SQL package every suite uses to create and clean up its test data, test suites that check business logic directly in the database, and the analysis of ORA, foreign-key and lock errors.',
  's2.4h': 'Nightly runs',
  's2.4p': 'The unattended test run of 6 to 8 hours a night: sequence, Ranorex agents, release builds and the test server. The next working day, every failure analysed: application bug, test bug, test data or environment.',
  's2.4m': 'root-cause analysis',
  's2.5h': 'Test strategy',
  's2.5p': 'Wrote the test strategy on Confluence and kept it up to date for five years. Reviewed colleagues’ test work against the Definition of Done, with a concrete fix for every finding.',
  's2.5m': 'DoD reviewer · Scrum',
  's3.k': 'Career', 's3.h': 'Experience', 's3.1d': 'Dec 2021 – present', 's3.1n': '5 years',
  's3.1i': 'Responsible, within the PROLOG team and alongside the developers, for test automation of the warehouse and logistics system behind on-board catering on Deutsche Bahn’s long-distance trains (DB Fernverkehr). I took over an existing Ranorex framework and became its primary test automation engineer: the only one for the first six months, later joined by colleagues who wrote tests alongside their other work.',
  's3.1b1': 'Designed and built most of a Ranorex/C# framework of 33 test suites and ≈ 1,200 test cases on the base left by earlier engineers, including its shared libraries and conventions.',
  's3.1b2': 'Wrote the shared C# foundation: an Oracle data-access layer (connections, transactions, procedures, cursors), a common UI action library, an app launcher and automated reporting (PDF, CSV summaries, publishing).',
  's3.1b3': 'Built and maintained the shared test-data package in Oracle PL/SQL that the suites use to create and clean up test data, and used it to test business logic such as order proposals independently of the UI. A green test only counted once verified with SQL.',
  's3.1b4': 'Automated end-to-end tests for the Windows desktop application and the Android handheld app Prokomm, across goods receipt, order picking, inventory, transport and loading catering trolleys.',
  's3.1b5': 'Kept the test solution maintainable: a separate data layer, reusable module groups and split suites, each time in small, reviewable steps without breaking the nightly runs.',
  's3.1b6': 'Researched complex domain features, such as damage codes on restaurant cars, from the UI, documentation and code, documented them for the product owners and demoed them to the team lead.',
  's3.1b7': 'Used AI-assisted engineering (Claude Code) daily for root-cause analysis, code and documentation, always reviewing and correcting its output.',
  's3.figs': 'Key figures',
  's3.f2u': 'test suites', 's3.f2': 'in the Ranorex framework',
  's3.f4n': '≈ 1,200', 's3.f4u': 'test cases', 's3.f4': 'spread across those test suites',
  's3.f1n': '6–8 h', 's3.f1u': 'per night', 's3.f1': 'unattended test run, followed up the next working day',
  's3.f3u': 'layers', 's3.f3': 'Windows desktop, Android handheld and Oracle database',
  's3.wins': 'Highlights', 's3.wP': 'Problem', 's3.wA': 'Approach', 's3.wR': 'Result',
  's3.w1h': 'Self-healing nightly runs',
  's3.w1p': 'When the desktop application froze, a whole night of test results was lost.',
  's3.w1a': 'A watchdog and hang watcher in C# that monitors the process, restarts the application and lets the test sequence continue.',
  's3.w1r': 'A frozen application no longer stops the nightly run.',
  's3.w2h': 'Green is not proof',
  's3.w2p': 'A new database test for order proposals suddenly passed.',
  's3.w2a': 'A query showed the setup had changed zero articles; redesigned the test data and replaced a LIKE with an exact match.',
  's3.w2r': 'Tests that only pass when the business logic is really right.',
  's3.w3h': 'Testability built into the app',
  's3.w3p': 'Tests broke on every UI change because of brittle XPaths, and some Telerik controls exposed nothing usable.',
  's3.w3a': 'Object recognition by AccessibleName, and accessibility support added in C# to the controls of the application itself.',
  's3.w3r': 'More stable tests, and testability became part of the product.',
  's3.w4h': 'Code coverage of UI tests',
  's3.w4p': 'Nobody knew which application code the end-to-end tests actually exercised.',
  's3.w4a': 'A PowerShell script that runs the application under JetBrains dotCover during the Ranorex runs and merges the reports.',
  's3.w4r': 'Coverage data for end-to-end tests, which UI test setups rarely have.',
  's3.2d': 'Feb 2021 – May 2021', 's3.intern': 'Internship',
  's3.2i': 'Internship in the RoboRana team that replaced the ageing case-management platform of RIZIV/INAMI, Belgium’s national health and disability insurance institute, with Appian. In the new system, case files move automatically from one department or partner to the next.',
  's3.2b1': 'Built processes, workflows and user interfaces on the Appian low-code platform.',
  's3.2b2': 'Learned business process management (BPM) and process automation in a real project for a Belgian public institution.',
  's3.case': 'Case management',
  's4.k': 'Toolkit', 's4.h': 'Skills',
  's4.intro': 'The first four rows come from five years of professional work; the last row from my studies and internship.',
  's4.g1': 'Test automation', 's4.e2e': 'End-to-end testing', 's4.func': 'Functional testing', 's4.fw': 'Test automation framework', 's4.rep': 'Automated reporting', 's4.cov': 'Code coverage (dotCover)', 's4.night': 'Test environment &amp; nightly runs', 's4.and': 'Android handhelds',
  's4.win': 'Windows desktop applications', 's4.script': '(scripting)',
  's4.g3': 'SQL &amp; databases', 's4.td': 'Test data',
  's4.g4': 'Analysis &amp; process', 's4.req': 'Requirements analysis', 's4.ts': 'Test scenarios', 's4.ai': 'AI-assisted engineering',
  's4.g5': 'Studies &amp; internship', 's4.sad': 'Software analysis &amp; design', 's4.ba': 'Business analysis',
  's4.g6': 'Languages', 's4.nl': 'Dutch', 's4.nlL': 'native', 's4.en': 'English', 's4.enL': 'very good', 's4.fr': 'French', 's4.frL': 'fair to good',
  's5.k': 'Studies', 's5.h': 'Education', 's5.1d': 'Sep 2018 – Sep 2021', 's5.deg': 'Bachelor in Applied Computer Science',
  's5.1at': 'Software development &amp; IT',
  's5.1a': 'Programming in C++, .NET/C# and Java, databases, web technology, software analysis and design, UML, testing and IT infrastructure; building software solutions in hands-on projects.',
  's5.1b': 'Applying IT to business processes and organisational needs, with a focus on SAP/ERP, business analysis, Enterprise Intelligence, mobile apps and IT integration.',
  's5.2d': 'Dec 2017 – Jun 2018',
  's5.2a': 'Foundations in programming (Java, C), web development (HTML, CSS, JavaScript), databases, networking, software engineering, data science and computer systems.',
  's7.h': 'Try it yourself.',
  's7.intro': 'Three interactive experiments, inspired by my work on PROLOG for Deutsche Bahn. Everything runs in your browser.',
  's7.1p': 'Watch an automated test drive a re-created Prokomm handheld to pick a catering trolley, and inject a bug yourself.',
  's7.1t': 'UI automation · Smart waits · Code 128',
  's7.2p': 'One warehouse rule, four ways to test it: unit test, UI test, regression test and mutation test, each with its own demo.',
  's7.2t': 'Unit · UI · Regression · Mutation',
  's7.3p': 'A warehouse database for trolleys and trains in WebAssembly. Break the data and let the data quality tests find it.',
  's7.open': 'Open experiment',
  's7.sideL': 'Personal project, separate from my work',
  's7.side': '<b>ApplyTrack</b>: a full-stack app of my own with a REST API, where I practise Playwright and Postman testing.',
  's7.sideGo': 'View the project',
  's7.illu': 'Illustration: a catering trolley with three crates is brought to the open door of an ICE train.',
  's7.cap': 'From warehouse to train: a picked trolley is brought on board the ICE. That is exactly the flow the experiments below test.',
  's6.h': 'Let’s talk.',
  's6.lead': 'Looking for someone in test automation and QA, or a C# and PL/SQL developer who builds quality in, and can prove it? Feel free to send me a message.',
  's6.copy': 'Copy', 's6.copyWhat': 'email address', 'newtab': ' (opens in a new tab)', 's6.copied': 'Copied', 's6.copyOk': 'Email address copied to the clipboard', 's6.copyFail': 'Copy failed',
  's6.loc': 'Location', 's6.langs': 'Dutch · English · French', 's6.refs': 'References', 's6.refsV': 'On request',
  'foot.top': 'Back to top ↑',
  'foot.keys': 'Shortcuts: <kbd>T</kbd> theme · <kbd>L</kbd> language',
  'lab.n2': 'Types of testing', 'lab.how': 'How it works', 'lab.exps': 'Experiments',
  'lab.next': 'Next experiment →', 'lab.prev': '← Previous experiment', 'lab.all': 'All experiments',
  'lab.nojs': 'This demo needs JavaScript.'
};
// Dynamische NL-teksten; de rest leest initLang uit de HTML
const NL = {
  'theme.dark': 'Schakel naar donker thema', 'theme.light': 'Schakel naar licht thema',
  'fig.queued': 'In wachtrij', 'fig.running': 'Bezig',
  's6.copied': 'Gekopieerd', 's6.copyOk': 'E-mailadres gekopieerd naar het klembord', 's6.copyFail': 'Kopiëren mislukt'
};
// Lab-pagina's leveren hun eigen teksten aan via window.JT_EN / window.JT_NL
Object.assign(EN, window.JT_EN);
Object.assign(NL, window.JT_NL);
let lang = 'nl';
const langFns = [];
const pairs = el => el.getAttribute('data-i18n-attr').split(';').map(p => p.split(':'));
const t = k => {
  const v = lang === 'en' ? EN[k] : NL[k];
  return v != null ? v : NL[k] != null ? NL[k] : k;
};

function applyLang(l, save) {
  lang = l;
  root.lang = l;
  $$('[data-i18n]').forEach(el => {
    const v = t(el.getAttribute('data-i18n'));
    if (el.innerHTML !== v) el.innerHTML = v;
  });
  $$('[data-i18n-attr]').forEach(el => pairs(el).forEach(([a, k]) => el.setAttribute(a, t(k))));
  syncTheme();
  langFns.forEach(fn => safe(() => fn(l)));
  if (save) store('jt-lang', l);
}

function initLang() {
  $$('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (NL[k] == null) NL[k] = el.innerHTML;
  });
  $$('[data-i18n-attr]').forEach(el => pairs(el).forEach(([a, k]) => {
    if (NL[k] == null) NL[k] = el.getAttribute(a) || '';
  }));
  $('#lang-btn').addEventListener('click', () => applyLang(lang === 'en' ? 'nl' : 'en', true));
  if (store('jt-lang') === 'en') applyLang('en');
}

// Thema
const isDark = () => (root.dataset.theme || (darkMQ.matches ? 'dark' : 'light')) === 'dark';
function syncTheme() {
  const b = $('#theme-btn');
  if (b) b.setAttribute('aria-label', t(isDark() ? 'theme.light' : 'theme.dark'));
  // browserbalk (mobiel) volgt ook een met de hand gekozen thema, niet alleen de systeeminstelling
  const bg = getComputedStyle(root).getPropertyValue('--bg').trim();
  $$('meta[name="theme-color"]').forEach(m => {
    if (!m.dataset.sys) m.dataset.sys = m.content;
    m.content = root.dataset.theme && bg ? bg : m.dataset.sys;
  });
}
function initTheme() {
  $('#theme-btn').addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    store('jt-theme', next);
    syncTheme();
  });
  darkMQ.addEventListener('change', syncTheme);
  syncTheme();
}

// Mobiel menu
function initMenu() {
  const btn = $('#menu-btn'), nav = $('#nav');
  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
  const head = btn.closest('.top');
  const set = open => {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  // het menu staat vóór de knop in de DOM: zet de focus op de eerste link, anders springt Tab er voorbij
  btn.addEventListener('click', () => {
    const open = !isOpen();
    set(open);
    const first = open && $('a', nav);
    if (first) first.focus({ preventScroll: true });
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  d.addEventListener('click', e => { if (isOpen() && !e.target.closest('.top')) set(false); });
  // focus verlaat de header (Tab voorbij het menu): menu dicht, zodat het niet over de inhoud blijft hangen
  head.addEventListener('focusout', e => {
    if (isOpen() && e.relatedTarget && !head.contains(e.relatedTarget)) set(false);
  });
  d.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen()) { set(false); btn.focus(); }
  });
  matchMedia('(min-width: 960px)').addEventListener('change', e => { if (e.matches) set(false); });
}

// Header-rand en actieve sectie
function initScroll() {
  const head = $('#topbar');
  let queued = false;
  const update = () => {
    queued = false;
    head.classList.toggle('is-scrolled', scrollY > 4);
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener('scroll', queue, { passive: true });
  update();

  const links = $$('.nav a[href^="#"]');
  seen(['top', ...links.map(a => a.hash.slice(1))].map(id => d.getElementById(id)), sec => {
    links.forEach(a => a.classList.toggle('is-active', a.hash === '#' + sec.id));
  }, { rootMargin: '-45% 0px -50% 0px' });
}

// Scroll reveal
function initReveal() {
  // .sec__head: the section rule draws itself in (CSS); content is not faded in
  const els = $$('.reveal, .sec__head');
  if (reduce) return els.forEach(el => el.classList.add('is-in'));
  seen(els, (el, io) => { el.classList.add('is-in'); io.unobserve(el); }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
}

// E-mailadres kopiëren
function initCopy() {
  const btn = $('#copy-btn'), label = $('#copy-label'), status = $('#copy-status');
  if (!btn) return;
  let timer;
  const done = ok => {
    btn.classList.toggle('is-ok', ok);
    label.textContent = t(ok ? 's6.copied' : 's6.copyFail');
    status.textContent = t(ok ? 's6.copyOk' : 's6.copyFail');
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.classList.remove('is-ok');
      label.innerHTML = t('s6.copy');
      status.textContent = '';
    }, 2200);
  };
  btn.addEventListener('click', () => {
    if (!navigator.clipboard) return done(false);
    navigator.clipboard.writeText(btn.dataset.copy).then(() => done(true), () => done(false));
  });
}

// Signature: de testopstelling tekent zichzelf één keer
function initRig() {
  const rig = $('#rig');
  if (!rig) return;
  const svg = $('.schema', rig), rows = $$('.log li', rig);
  const nEl = $('#rig-n'), bar = $('#rig-bar'), state = $('#rig-state');
  const byAttr = a => Object.fromEntries($$(`[data-${a}]`, svg).map(g => [g.getAttribute(`data-${a}`), g]));
  const nodes = byAttr('node'), badges = byAttr('badge');
  /* [spoor, start (ms), duur (ms)] */
  const traces = [[1, 0, 560], [2, 120, 560], [3, 780, 520], [4, 860, 520], [5, 1460, 620]].map(([i, at, dur]) => {
    const geo = $(`[data-geo="${i}"]`, svg);
    return { at, dur, geo, len: geo.getTotalLength(), draws: $$(`[data-trace="${i}"]`, svg), pk: $(`[data-pk="${i}"]`, svg) };
  });
  const queue = (...is) => is.forEach(i => rows[i].classList.add('is-run'));
  const pass = i => {
    rows[i].classList.remove('is-run');
    rows[i].classList.add('is-pass');
    nEl.textContent = ++count;
    bar.style.transform = `scaleX(${count / rows.length})`;
  };
  const hit = n => {
    nodes[n].classList.add('is-hit');
    if (badges[n]) badges[n].classList.add('is-on');
  };
  /* [tijdstip (ms), actie] */
  const events = [
    [0, () => queue(0, 1)], [120, () => queue(2)],
    [560, () => { hit('desktop'); pass(0); }], [680, () => { hit('handheld'); pass(2); }], [760, () => pass(1)],
    [780, () => queue(3)], [1380, () => { hit('db'); pass(3); }],
    [1460, () => queue(4)], [2080, () => { hit('suite'); pass(4); }],
    [2240, finish]
  ];
  let count = 0, raf = 0, t0 = null, offset = 0, fired = [], playing = false, shown = false, started = false;
  const ease = p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
  const setState = k => { state.setAttribute('data-i18n', k); state.innerHTML = t(k); };
  const each = (o, fn) => Object.values(o).forEach(fn);
  const setTraces = v => traces.forEach(tr => {
    tr.draws.forEach(el => { el.style.strokeDashoffset = v; });
    tr.pk.classList.remove('is-live');
  });

  function reset() {
    cancelAnimationFrame(raf);
    playing = false; t0 = null; count = 0; fired = [];
    rig.classList.remove('is-done', 'is-running');
    rows.forEach(r => r.classList.remove('is-run', 'is-pass'));
    each(nodes, n => n.classList.remove('is-hit'));
    each(badges, b => b.classList.remove('is-on'));
    setTraces('1');
    nEl.textContent = '0';
    bar.style.transform = 'scaleX(0)';
    setState('fig.queued');
  }
  function finish() {
    playing = false;
    cancelAnimationFrame(raf);
    rig.classList.remove('is-running');
    rig.classList.add('is-done');
    setTraces('');
    nEl.textContent = rows.length;
    bar.style.transform = '';
    setState('fig.passed');
  }
  function frame(now) {
    if (!playing) return;
    if (t0 === null) t0 = now;
    const t = now - t0 - offset;
    traces.forEach(tr => {
      const p = Math.min(1, Math.max(0, (t - tr.at) / tr.dur)), e = ease(p);
      tr.draws.forEach(el => { el.style.strokeDashoffset = (1 - e).toFixed(4); });
      const live = p > 0 && p < 1;
      tr.pk.classList.toggle('is-live', live);
      if (live) {
        const pt = tr.geo.getPointAtLength(e * tr.len);
        tr.pk.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
      }
    });
    for (let i = 0; i < events.length && playing; i++) {
      if (!fired[i] && t >= events[i][0]) { fired[i] = true; events[i][1](); }
    }
    if (playing) raf = requestAnimationFrame(frame);
  }
  function play() {
    started = true;
    if (reduce) return finish();
    reset();
    offset = shown ? 0 : 420;
    shown = true;
    each(nodes, n => n.classList.add('is-on'));
    playing = true;
    rig.classList.add('is-running');
    setState('fig.running');
    raf = requestAnimationFrame(frame);
  }

  $('#rerun').addEventListener('click', play);
  if (reduce) return finish();
  reset();
  seen([$('.rig__canvas', rig)], (el, io) => { io.disconnect(); if (!started) play(); }, { threshold: 0.3 });
}

// Sneltoetsen: T = thema, L = taal (niet tijdens typen of met Ctrl/Alt/Cmd)
function initKeys() {
  d.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.repeat || e.defaultPrevented) return;
    // target kan ook document zijn, en autofill stuurt keydown zonder e.key
    const el = e.target instanceof Element ? e.target : null;
    if (el && el.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    const btn = { t: '#theme-btn', l: '#lang-btn' }[String(e.key || '').toLowerCase()];
    if (btn && $(btn)) { e.preventDefault(); $(btn).click(); }
  });
}

// Voor wie de console opent
function initConsole() {
  const msg = lang === 'en'
    ? ['✓ 67 checks passed · 0 failed', 'Looking for a Test Automation Engineer? Julietous@outlook.com']
    : ['✓ 67 checks geslaagd · 0 gefaald', 'Op zoek naar een Test Automation Engineer? Julietous@outlook.com'];
  console.log(`%c${msg[0]}%c\n${msg[1]}`,
    'color:#22a55a;font:600 14px/1.6 ui-monospace,Consolas,monospace',
    'color:inherit;font:400 12px/1.6 ui-monospace,Consolas,monospace');
}

// Start
[initLang, initTheme, initMenu, initScroll, initReveal, initCopy, initRig, initKeys, initConsole].forEach(safe);
safe(() => { $('#year').textContent = new Date().getFullYear(); });
// Lab-pagina: het eigen script registreert window.JT_PAGE en krijgt hulpfuncties mee
safe(() => window.JT_PAGE && window.JT_PAGE({ $, $$, t, reduce, lang: () => lang, onLang: fn => langFns.push(fn) }));
window.JT_READY = true;
})();
