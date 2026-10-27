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
  'meta.desc': 'Julie Toussaint, software developer specialising in test automation, based in Antwerp. End-to-end tests with C#, Ranorex and Oracle PL/SQL, from Windows desktop and Android handheld all the way into the database.',
  'skip': 'Skip to content',
  'nav.label': 'Main navigation', 'nav.menu': 'Navigation menu',
  'nav.1': 'Profile', 'nav.2': 'Approach', 'nav.3': 'Experience', 'nav.4': 'Skills', 'nav.5': 'Education', 'nav.6': 'Contact',
  'lang.switch': 'Switch to Dutch',
  'theme.dark': 'Switch to dark theme', 'theme.light': 'Switch to light theme',
  'city': 'Antwerp, Belgium',
  'hero.lead': 'I build automated tests that verify complex logistics software end to end: from the Windows desktop and the Android handheld all the way down into the Oracle database.',
  'hero.cta1': 'Get in touch', 'hero.cta2': 'View my experience',
  'spec.role': 'Role', 'spec.roleV': 'Test Automation Application Engineer, since 2021', 'spec.proj': 'Project', 'spec.projV': 'for Deutsche Bahn', 'spec.lang': 'Languages',
  'fig.title': 'End-to-end test setup', 'fig.rerun': 'Run again',
  'fig.alt': 'Diagram: a test suite in C# and Ranorex drives a Windows desktop application and an Android handheld, then verifies the outcome in an Oracle database, also directly through PL/SQL.',
  'log.1': 'Book a goods receipt', 'log.2': 'Close a stocktake', 'log.3': 'Order picking with a handheld scan',
  'log.4': 'Stock verified in the database', 'log.5': 'Business logic tested without the UI',
  'fig.queued': 'Queued', 'fig.running': 'Running', 'fig.passed': 'Passed', 'fig.failed': 'failed', 'fig.skipped': 'skipped',
  'fig.cap': 'Illustrative test run: the suite drives the desktop and the handheld, then validates the outcome in the database.',
  's1.k': 'Profile', 's1.h': 'About me', 's1.photo': 'Portrait of Julie Toussaint',
  's1.p1': 'I’m a software developer with a bachelor’s degree in Applied Computer Science and a clear focus on test automation. Since December 2021 I’ve been working as a Test Automation Application Engineer at B. Rekencentra, where I test Deutsche Bahn’s Warehouse Management System end to end.',
  's1.p2': 'I write automated tests in C# and Ranorex, build test data and business-logic checks in Oracle PL/SQL, and turn requirements into clear user stories and test scenarios. I enjoy working closely with developers and stakeholders: my goal is not just a green test run, but software that is stable and reliable.',
  's1.comp': 'Strengths', 's1.c1': 'Collegial and a strong communicator', 's1.c2': 'Driven and results-oriented', 's1.c3': 'Precise and quality-minded',
  's1.out': 'Outside work', 's1.h1': 'Fishing', 's1.h2': 'Browsing flea markets', 's1.h3': 'Looking after my birds',
  's2.k': 'Approach', 's2.h': 'What I do',
  's2.intro': 'From requirement to report: the four pillars of my day-to-day work.',
  's2.1h': 'Requirements &amp; alignment',
  's2.1p': 'Writing and refining Jira tickets and user stories: analysing requirements, working out test scenarios and aligning with developers and stakeholders.',
  's2.2h': 'End-to-end automation',
  's2.2p': 'Automated functional tests in C# and Ranorex that walk through real warehouse and logistics processes, on the Windows desktop as well as the Android handheld.',
  's2.3h': 'Data-driven testing',
  's2.3p': 'Test data and tests in Oracle PL/SQL, to verify complex business logic independently of the user interface.',
  's2.4h': 'Scalable framework',
  's2.4p': 'A test automation framework built to grow, with test data, database integration, error handling and automated reporting.',
  's2.4m': 'Error handling · reporting',
  's3.k': 'Career', 's3.h': 'Experience', 's3.1d': 'Dec 2021 – present', 's3.now': 'Current role',
  's3.1b1': 'Developing and maintaining automated end-to-end functional tests for PROLOG, Deutsche Bahn’s Warehouse Management System, using C#, Ranorex and Oracle.',
  's3.1b2': 'Building out a scalable test automation framework, including test data, database integration, error handling and automated reporting.',
  's3.1b3': 'Developing data-driven tests and test data with Oracle PL/SQL, to test complex business logic independently of the UI.',
  's3.1b4': 'Automating functionality for the Windows desktop application and the Android handheld app Prokomm within warehouse and logistics processes, such as picking and loading catering trolleys for the trains.',
  's3.1b5': 'Writing and refining Jira tickets and user stories, including requirements analysis, test scenarios and alignment with developers and stakeholders, with a focus on the stability, reliability and quality of the test automation.',
  's3.2d': 'Feb 2021 – May 2021', 's3.intern': 'Internship',
  's3.2b1': 'Modular development of scalable business applications on a low-code platform, including processes, workflows, integrations and user interfaces.',
  's3.integr': 'Integrations',
  's4.k': 'Toolkit', 's4.h': 'Skills',
  's4.g1': 'Test automation', 's4.e2e': 'End-to-end testing', 's4.func': 'Functional testing', 's4.fw': 'Test automation framework', 's4.rep': 'Automated reporting',
  's4.g2': 'Programming', 's4.g3': 'Data', 's4.td': 'Test data', 's4.db': 'Databases',
  's4.g4': 'Analysis &amp; process', 's4.req': 'Requirements analysis', 's4.ts': 'Test scenarios', 's4.ba': 'Business analysis', 's4.sad': 'Software analysis &amp; design',
  's4.g5': 'Platforms', 's4.win': 'Windows desktop applications', 's4.and': 'Android handhelds',
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
  's7.illu': 'Illustration: a catering trolley with three crates is brought to the open door of an ICE train.',
  's7.cap': 'From warehouse to train: a picked trolley is brought on board the ICE. That is exactly the flow the experiments below test.',
  's6.h': 'Let’s talk.',
  's6.lead': 'Looking for someone who builds quality into your software, and can prove it? Feel free to send me a message.',
  's6.copy': 'Copy', 's6.copied': 'Copied', 's6.copyOk': 'Email address copied to the clipboard', 's6.copyFail': 'Copy failed',
  's6.loc': 'Location', 's6.langs': 'Dutch · English · French',
  'foot.top': 'Back to top ↑',
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
  const set = open => {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => set(!isOpen()));
  nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  d.addEventListener('click', e => { if (isOpen() && !e.target.closest('.top')) set(false); });
  d.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen()) { set(false); btn.focus(); }
  });
  matchMedia('(min-width: 960px)').addEventListener('change', e => { if (e.matches) set(false); });
}

// Header-rand, leesvoortgang en actieve sectie
function initScroll() {
  const head = $('#topbar'), bar = $('#progress');
  let queued = false;
  const update = () => {
    queued = false;
    const y = scrollY, max = root.scrollHeight - innerHeight;
    head.classList.toggle('is-scrolled', y > 4);
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max).toFixed(4) : 0})`;
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  update();

  const links = $$('.nav a[href^="#"]');
  seen(['top', ...links.map(a => a.hash.slice(1))].map(id => d.getElementById(id)), sec => {
    links.forEach(a => a.classList.toggle('is-active', a.hash === '#' + sec.id));
  }, { rootMargin: '-45% 0px -50% 0px' });
}

// Scroll reveal
function initReveal() {
  const els = $$('.reveal');
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

// Start
[initLang, initTheme, initMenu, initScroll, initReveal, initCopy, initRig].forEach(safe);
safe(() => { $('#year').textContent = new Date().getFullYear(); });
// Lab-pagina: het eigen script registreert window.JT_PAGE en krijgt hulpfuncties mee
safe(() => window.JT_PAGE && window.JT_PAGE({ $, $$, t, reduce, lang: () => lang, onLang: fn => langFns.push(fn) }));
window.JT_READY = true;
})();
