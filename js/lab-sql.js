/* Lab L-03 · SQL-lab. Laadt vóór main.js: teksten in JT_NL/JT_EN, logica in JT_PAGE.
   De database is SQLite via sql.js (WebAssembly, van cdnjs). Schema en data zijn verzonnen. */
'use strict';

window.JT_NL = {
  'sq.p1': 'Voorraad per locatie', 'sq.p2': 'Trolleys per trein', 'sq.p3': 'Gekoelde artikelen', 'sq.p4': 'Zelf iets breken',
  'sq.t1': 'Geen negatieve voorraad', 'sq.t1d': 'Een locatie kan nooit minder dan nul stuks bevatten.',
  'sq.t2': 'Gereserveerd ≤ voorraad', 'sq.t2d': 'Je kan niet meer reserveren dan er ligt.',
  'sq.t3': 'Voorraad hoort bij een bekend artikel', 'sq.t3d': 'Elke voorraadregel verwijst naar een artikel in de stamdata.',
  'sq.t4': 'Locatiecapaciteit gerespecteerd', 'sq.t4d': 'De totale voorraad op een locatie past er ook op.',
  'sq.t5': 'Nooit meer gepickt dan besteld', 'sq.t5d': 'Een trolleypositie kan niet overvol raken.',
  'sq.t6': 'Beladen trolleys zijn volledig', 'sq.t6d': 'Een trolley gaat pas de trein op als alles gepickt is.',
  'sq.t7': 'Houdbaarheid dekt de rit', 'sq.t7d': 'Geen artikel op een trolley dat vervalt vóór de trein vertrekt.',
  'sq.t8': 'Beladen trolley heeft een trein', 'sq.t8d': 'Elke beladen trolley hangt aan een bestaande trein.',
  'sq.x1': 'Iemand boekte 100 flessen te veel af op A-01-1.',
  'sq.x2': 'Er werd meer gereserveerd dan er op B-02-1 ligt.',
  'sq.x3': 'Een artikel werd uit de stamdata verwijderd terwijl er nog voorraad van is.',
  'sq.x4': 'Een volle pallet werd op een te kleine locatie geboekt.',
  'sq.x5': 'Een dubbele scan: trolley TR-03 kreeg meer dan besteld.',
  'sq.x6': 'Trolley TR-05 staat als beladen terwijl hij nog niet vol is.',
  'sq.x7': 'Op trolley TR-01 ligt melk die vervalt vóór de trein vertrekt.',
  'sq.x8': 'Trolley TR-02 is zijn trein kwijt.',
  'sq.loadFail': 'Kon de WebAssembly-database niet laden. Ben je offline?', 'sq.loadedIn': 'geladen in',
  'sq.row': 'rij', 'sq.rows': 'rijen', 'sq.changed': 'rij(en) gewijzigd', 'sq.noRows': 'Geen rijen.',
  'sq.viol1': 'overtreding', 'sq.violN': 'overtredingen',
  'sq.allPass': 'Alle regels groen', 'sq.fails': 'Regels geschonden', 'sq.stale': 'Data gewijzigd',
  'sq.staleHint': 'De data is gewijzigd sinds de laatste run. Voer de testsuite opnieuw uit.',
  'sq.passed': 'geslaagd', 'sq.failed': 'gefaald', 'fig.running': 'Bezig',
  'sq.chaosN': 'Fout #{n} aangebracht. Vind jij hem, of de testsuite?', 'sq.reveal': 'toon wat er gebeurde',
  'sq.chaosAll': 'Alle fouten zitten er al in. Reset de database om opnieuw te beginnen.'
};

window.JT_EN = {
  'sq.pmeta': 'Lab experiment: a warehouse database for catering trolleys runs as SQLite in WebAssembly in your browser. Break the data and let the data quality tests find it.',
  'sq.eyebrow': 'Experiment 03 · Data-driven testing',
  'sq.lead': 'A warehouse database for catering trolleys on ICE trains, as a real SQL database in your browser. Every business rule is a test in SQL. Query the data yourself, break something with the chaos button and see whether the data quality tests find it.',
  'sq.c4': 'Data quality', 'sq.title': 'Warehouse · trolleys · trains',
  'sq.reset': 'Reset database', 'sq.chaos': 'Chaos: break the data',
  'sq.presetsL': 'Example queries', 'sq.editorL': 'SQL query', 'sq.run': 'Run query', 'sq.loading': 'Loading database…',
  'sq.schema': 'View schema', 'sq.suite': 'Data quality tests', 'sq.suiteRun': 'Run test suite', 'sq.notRun': 'Not run yet',
  'sq.cap': 'Everything runs locally in your browser; nothing is sent anywhere. The schema and data are made up and simplified.',
  'sq.p1': 'Stock per location', 'sq.p2': 'Trolleys per train', 'sq.p3': 'Chilled items', 'sq.p4': 'Break something yourself',
  'sq.t1': 'No negative stock', 'sq.t1d': 'A location can never hold less than zero units.',
  'sq.t2': 'Reserved ≤ stock', 'sq.t2d': 'You cannot reserve more than is there.',
  'sq.t3': 'Stock belongs to a known item', 'sq.t3d': 'Every stock row refers to an item in the master data.',
  'sq.t4': 'Location capacity respected', 'sq.t4d': 'The total stock on a location actually fits on it.',
  'sq.t5': 'Never picked more than ordered', 'sq.t5d': 'A trolley position cannot be overfilled.',
  'sq.t6': 'Loaded trolleys are complete', 'sq.t6d': 'A trolley only goes onto the train once everything is picked.',
  'sq.t7': 'Best-before covers the trip', 'sq.t7d': 'No item on a trolley that expires before the train departs.',
  'sq.t8': 'Loaded trolley has a train', 'sq.t8d': 'Every loaded trolley is linked to an existing train.',
  'sq.x1': 'Someone booked out 100 bottles too many on A-01-1.',
  'sq.x2': 'More was reserved than is on B-02-1.',
  'sq.x3': 'An item was deleted from the master data while stock of it still exists.',
  'sq.x4': 'A full pallet was booked onto a location that is too small.',
  'sq.x5': 'A double scan: trolley TR-03 got more than was ordered.',
  'sq.x6': 'Trolley TR-05 is marked as loaded while it is not complete yet.',
  'sq.x7': 'Trolley TR-01 carries milk that expires before the train departs.',
  'sq.x8': 'Trolley TR-02 lost its train.',
  'sq.loadFail': 'Could not load the WebAssembly database. Are you offline?', 'sq.loadedIn': 'loaded in',
  'sq.row': 'row', 'sq.rows': 'rows', 'sq.changed': 'row(s) changed', 'sq.noRows': 'No rows.',
  'sq.viol1': 'violation', 'sq.violN': 'violations',
  'sq.allPass': 'All rules green', 'sq.fails': 'Rules violated', 'sq.stale': 'Data changed',
  'sq.staleHint': 'The data changed since the last run. Run the test suite again.',
  'sq.passed': 'passed', 'sq.failed': 'failed',
  'sq.chaosN': 'Fault #{n} injected. Can you, or the test suite, find it?', 'sq.reveal': 'show what happened',
  'sq.chaosAll': 'All faults are already in. Reset the database to start over.',
  'sq.nh': 'What you are looking at',
  'sq.n1h': 'A real database in your browser',
  'sq.n1p': 'Not a mock table: SQLite runs as WebAssembly in your browser. You can run any SELECT, UPDATE or DELETE, and nothing leaves your device.',
  'sq.n2h': 'Every rule is a query',
  'sq.n2p': 'Every business rule is a query that returns the violations. Zero rows means green. That is how you test business logic directly in the data, independently of the user interface.',
  'sq.n3h': 'Chaos as an exercise',
  'sq.n3p': 'The chaos button injects a realistic data fault: a double scan, a trolley marked as loaded too early, an expired best-before date. The test suite has to find it.',
  'sq.n3m': 'Fault injection',
  'sq.note': '<strong>In my work</strong> I write checks like these, and the test data that goes with them, in Oracle PL/SQL for PROLOG at Deutsche Bahn. SQLite runs here so you can try it yourself; the schema and data are made up and contain nothing from the real system.'
};

const SQLJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/';

const SCHEMA = `
CREATE TABLE location (code TEXT PRIMARY KEY, warehouse TEXT NOT NULL, capacity INTEGER NOT NULL);
CREATE TABLE item (ean TEXT PRIMARY KEY, name TEXT NOT NULL, unit TEXT NOT NULL, chilled INTEGER NOT NULL DEFAULT 0);
CREATE TABLE stock (location TEXT NOT NULL, ean TEXT NOT NULL, qty INTEGER NOT NULL, reserved INTEGER NOT NULL DEFAULT 0,
  best_before TEXT NOT NULL, PRIMARY KEY (location, ean));
CREATE TABLE train (id TEXT PRIMARY KEY, route TEXT NOT NULL, departure TEXT NOT NULL);
CREATE TABLE trolley (id TEXT PRIMARY KEY, train_id TEXT, status TEXT NOT NULL CHECK (status IN ('OPEN', 'PICKED', 'LOADED')));
CREATE TABLE trolley_line (trolley_id TEXT NOT NULL, line_no INTEGER NOT NULL, ean TEXT NOT NULL, ordered INTEGER NOT NULL,
  picked INTEGER NOT NULL DEFAULT 0, best_before TEXT, PRIMARY KEY (trolley_id, line_no));

INSERT INTO location VALUES
  ('A-01-1', 'Nord', 120), ('A-01-2', 'Nord', 120), ('A-02-1', 'Nord', 200), ('A-03-2', 'Nord', 80),
  ('B-01-1', 'Süd', 150), ('B-02-1', 'Süd', 150), ('K-01-1', 'Kühl', 60), ('K-01-2', 'Kühl', 60);
INSERT INTO item VALUES
  ('541234500127', 'Mineralwasser 0,5 l', 'Fl.', 0), ('541234500134', 'Apfelschorle 0,33 l', 'Fl.', 0),
  ('541234500141', 'Kaffeebohnen 1 kg', 'Pkg.', 0), ('541234500158', 'Milch 1 l', 'Pkg.', 1),
  ('541234500165', 'Orangensaft 0,25 l', 'Fl.', 1), ('541234500172', 'Laugenbrezel', 'Stk.', 0),
  ('541234500189', 'Sandwich Käse', 'Stk.', 1), ('541234500196', 'Schokoriegel', 'Stk.', 0);
INSERT INTO stock VALUES
  ('A-01-1', '541234500127', 96, 24, '2027-04-30'), ('A-01-2', '541234500134', 72, 12, '2027-02-28'),
  ('A-02-1', '541234500141', 40, 6, '2027-06-30'), ('A-03-2', '541234500127', 24, 3, '2027-05-31'),
  ('B-01-1', '541234500172', 60, 20, '2026-11-08'), ('B-02-1', '541234500196', 110, 30, '2027-01-31'),
  ('K-01-1', '541234500158', 36, 12, '2026-11-12'), ('K-01-2', '541234500165', 30, 10, '2026-11-20'),
  ('K-01-2', '541234500189', 18, 6, '2026-11-06');
INSERT INTO train VALUES
  ('ICE 578', 'Hamburg-Altona → München', '2026-11-03 07:24'), ('ICE 1001', 'Berlin → München', '2026-11-03 09:30'),
  ('ICE 693', 'Berlin → Stuttgart', '2026-11-04 06:47'), ('IC 2213', 'Ostseebad Binz → Stuttgart', '2026-11-04 08:12');
INSERT INTO trolley VALUES
  ('TR-01', 'ICE 578', 'LOADED'), ('TR-02', 'ICE 578', 'LOADED'), ('TR-03', 'ICE 1001', 'PICKED'),
  ('TR-04', 'ICE 693', 'PICKED'), ('TR-05', 'ICE 693', 'OPEN'), ('TR-06', 'IC 2213', 'OPEN'), ('TR-07', 'ICE 578', 'OPEN');
INSERT INTO trolley_line VALUES
  ('TR-01', 1, '541234500127', 24, 24, '2027-04-30'), ('TR-01', 2, '541234500158', 6, 6, '2026-11-12'),
  ('TR-01', 3, '541234500189', 8, 8, '2026-11-06'),
  ('TR-02', 1, '541234500134', 12, 12, '2027-02-28'), ('TR-02', 2, '541234500172', 20, 20, '2026-11-08'),
  ('TR-03', 1, '541234500141', 4, 4, '2027-06-30'), ('TR-03', 2, '541234500196', 30, 30, '2027-01-31'),
  ('TR-04', 1, '541234500127', 24, 24, '2027-04-30'), ('TR-04', 2, '541234500165', 10, 10, '2026-11-20'),
  ('TR-05', 1, '541234500158', 6, 2, '2026-11-12'), ('TR-05', 2, '541234500172', 20, 0, NULL),
  ('TR-06', 1, '541234500196', 30, 0, NULL), ('TR-07', 1, '541234500127', 3, 0, NULL);
`;

const PRESETS = [
  { k: 'sq.p1', sql: `SELECT s.location, i.name, s.qty, s.reserved, s.best_before
FROM stock s
JOIN item i ON i.ean = s.ean
ORDER BY s.location;` },
  { k: 'sq.p2', sql: `SELECT tr.id AS train, tr.departure, t.id AS trolley, t.status,
       printf('%d/%d', SUM(l.picked), SUM(l.ordered)) AS picked
FROM trolley t
JOIN train tr ON tr.id = t.train_id
JOIN trolley_line l ON l.trolley_id = t.id
GROUP BY t.id
ORDER BY tr.departure, t.id;` },
  { k: 'sq.p3', sql: `SELECT i.name, s.location, s.qty, s.best_before
FROM stock s
JOIN item i ON i.ean = s.ean
WHERE i.chilled = 1
ORDER BY s.best_before;` },
  { k: 'sq.p4', sql: `-- Boek 30 flessen af op A-03-2 (er liggen er 24)
UPDATE stock SET qty = qty - 30 WHERE location = 'A-03-2';` }
];

/* Elke regel is een query die de overtredingen teruggeeft: nul rijen = geslaagd. */
const TESTS = [
  { k: 'sq.t1', sql: `SELECT location, ean, qty FROM stock WHERE qty < 0;` },
  { k: 'sq.t2', sql: `SELECT location, ean, qty, reserved FROM stock WHERE reserved > qty;` },
  { k: 'sq.t3', sql: `SELECT s.location, s.ean
FROM stock s LEFT JOIN item i ON i.ean = s.ean
WHERE i.ean IS NULL;` },
  { k: 'sq.t4', sql: `SELECT s.location, SUM(s.qty) AS total, l.capacity
FROM stock s JOIN location l ON l.code = s.location
GROUP BY s.location
HAVING SUM(s.qty) > l.capacity;` },
  { k: 'sq.t5', sql: `SELECT trolley_id, line_no, ordered, picked
FROM trolley_line WHERE picked > ordered;` },
  { k: 'sq.t6', sql: `SELECT t.id, SUM(l.ordered) AS ordered, SUM(l.picked) AS picked
FROM trolley t JOIN trolley_line l ON l.trolley_id = t.id
WHERE t.status = 'LOADED'
GROUP BY t.id
HAVING SUM(l.picked) < SUM(l.ordered);` },
  { k: 'sq.t7', sql: `SELECT t.id AS trolley, tr.id AS train, l.ean, l.best_before, tr.departure
FROM trolley t
JOIN train tr ON tr.id = t.train_id
JOIN trolley_line l ON l.trolley_id = t.id
WHERE l.best_before < date(tr.departure);` },
  { k: 'sq.t8', sql: `SELECT id, train_id FROM trolley
WHERE status = 'LOADED'
  AND (train_id IS NULL OR train_id NOT IN (SELECT id FROM train));` }
];

const CHAOS = [
  { k: 'sq.x1', sql: `UPDATE stock SET qty = qty - 100 WHERE location = 'A-01-1';` },
  { k: 'sq.x2', sql: `UPDATE stock SET reserved = qty + 4 WHERE location = 'B-02-1';` },
  { k: 'sq.x3', sql: `DELETE FROM item WHERE ean = '541234500141';` },
  { k: 'sq.x4', sql: `UPDATE stock SET qty = qty + 400 WHERE location = 'A-02-1';` },
  { k: 'sq.x5', sql: `UPDATE trolley_line SET picked = ordered + 2 WHERE trolley_id = 'TR-03' AND line_no = 1;` },
  { k: 'sq.x6', sql: `UPDATE trolley SET status = 'LOADED' WHERE id = 'TR-05';` },
  { k: 'sq.x7', sql: `UPDATE trolley_line SET best_before = '2026-10-30' WHERE trolley_id = 'TR-01' AND line_no = 2;` },
  { k: 'sq.x8', sql: `UPDATE trolley SET train_id = NULL WHERE id = 'TR-02';` }
];

window.JT_PAGE = ({ $, t, reduce, lang, onLang }) => {
  const ta = $('#sq-sql'), result = $('#sq-result'), statusEl = $('#sq-status'), testsEl = $('#sq-tests');
  const presetsEl = $('#sq-presets'), chaosEl = $('#sq-chaoslog'), sum = $('#sq-sum');
  const btn = { run: $('#sq-run'), suite: $('#sq-suite-run'), chaos: $('#sq-chaos'), reset: $('#sq-reset') };

  let SQL = null, db = null, results = null, running = false, stale = false, suiteMs = 0;
  let chaosDone = [], status = () => t('sq.loading'), statusKind = '', ready = status;
  const opened = new Set();

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const dec = v => v.toFixed(1).replace('.', lang() === 'nl' ? ',' : '.');
  const fmt = (s, vals) => s.replace(/\{(\w+)\}/g, (_, k) => vals[k]);
  const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
  const isWrite = sql => /\b(insert|update|delete|drop|alter|create)\b/i.test(sql.replace(/--.*$/gm, ''));

  function setStatus(fn, kind) { status = fn; statusKind = kind || ''; renderStatus(); }
  function renderStatus() {
    statusEl.removeAttribute('data-i18n');
    statusEl.textContent = status();
    statusEl.className = 'sqlx__status' + (statusKind ? ' is-' + statusKind : '');
  }

  function table(cols, rows, limit) {
    const cell = v => v === null ? '<td class="null">NULL</td>'
      : `<td${typeof v === 'number' ? ' class="num"' : ''}>${esc(v)}</td>`;
    return `<table class="rtable"><thead><tr>${cols.map(c => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>` +
      `<tbody>${rows.slice(0, limit).map(r => `<tr>${r.map(cell).join('')}</tr>`).join('')}</tbody></table>`;
  }

  // ---------- Database ----------
  function fresh() {
    if (db) db.close();
    db = new SQL.Database();
    db.exec(SCHEMA);
  }

  function renderSchema() {
    const tables = db.exec("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY rowid")[0].values.map(r => r[0]);
    $('#sq-schema').innerHTML = tables.map(name => {
      const cols = db.exec(`PRAGMA table_info(${name})`)[0].values.map(r => r[1]);
      return `<li><b>${esc(name)}</b> ${cols.map(esc).join(', ')}</li>`;
    }).join('');
  }

  function runQuery() {
    const sql = ta.value.trim();
    if (!db || !sql) return;
    const t0 = performance.now();
    try {
      const sets = db.exec(sql), ms = performance.now() - t0, last = sets[sets.length - 1];
      if (last) {
        result.innerHTML = table(last.columns, last.values, 200);
        const n = last.values.length;
        setStatus(() => `${n} ${t(n === 1 ? 'sq.row' : 'sq.rows')} · ${dec(ms)} ms`, 'ok');
      } else if (isWrite(sql)) {
        const n = db.getRowsModified();
        result.innerHTML = '';
        setStatus(() => `${n} ${t('sq.changed')} · ${dec(ms)} ms`, 'ok');
      } else {
        result.innerHTML = `<p class="sqlx__empty">${esc(t('sq.noRows'))}</p>`;
        setStatus(() => `0 ${t('sq.rows')} · ${dec(ms)} ms`, 'ok');
      }
      if (isWrite(sql)) markStale();
    } catch (e) {
      result.innerHTML = '';
      setStatus(() => e.message, 'err');
    }
  }

  // ---------- Testsuite ----------
  const failed = r => r && (r.err || r.rows.length > 0);

  function renderTests() {
    testsEl.innerHTML = TESTS.map((x, i) => {
      const r = results && results[i];
      const cls = r ? (failed(r) ? 'is-fail' : 'is-pass') : running ? 'is-run' : '';
      const n = r && !r.err ? r.rows.length : null;
      const badge = n === null ? '' : n === 0 ? '0' : `${n} ${t(n === 1 ? 'sq.viol1' : 'sq.violN')}`;
      const open = opened.has(i) || (failed(r) && !stale) ? ' open' : '';
      return `<li${stale && r ? ' class="is-stale"' : ''}><details data-i="${i}"${open}>
        <summary class="${cls}"><span class="sti"></span>
          <span><span class="dq__n">${esc(t(x.k))}</span><span class="dq__d">${esc(t(x.k + 'd'))}</span></span>
          <span class="dq__r">${badge}</span></summary>
        <div class="dq__body"><pre class="dq__sql">${esc(x.sql)}</pre>
          ${r && r.err ? `<p class="dq__err">${esc(r.err)}</p>` : ''}
          ${r && r.rows.length ? `<div class="rtable-wrap">${table(r.cols, r.rows, 5)}</div>` : ''}</div>
      </details></li>`;
    }).join('');
  }

  function renderSum() {
    const done = results ? results.filter(Boolean) : [];
    const fails = done.filter(failed).length, passed = done.length - fails;
    const key = !results ? 'sq.notRun' : running ? 'fig.running' : stale ? 'sq.stale' : fails ? 'sq.fails' : 'sq.allPass';
    sum.className = 'sum ' + (!results ? 'is-idle' : running ? 'is-run' : stale ? 'is-idle' : fails ? 'is-fail' : '');
    $('#sq-state').removeAttribute('data-i18n');
    $('#sq-state').textContent = t(key);
    $('#sq-n').textContent = passed;
    $('#sq-total').textContent = TESTS.length;
    $('#sq-bar').style.transform = `scaleX(${results ? passed / TESTS.length : 0})`;
    $('#sq-meta').textContent = stale ? t('sq.staleHint')
      : results && !running ? `${passed} ${t('sq.passed')} · ${fails} ${t('sq.failed')} · ${dec(suiteMs)} ms` : ' ';
  }

  async function runSuite(animate) {
    if (!db || running) return;
    running = true;
    stale = false;
    opened.clear();
    results = TESTS.map(() => null);
    renderTests(); renderSum();
    let total = 0;
    for (let i = 0; i < TESTS.length; i++) {
      if (animate) await wait(140);
      const t0 = performance.now();
      try {
        const set = db.exec(TESTS[i].sql)[0];
        results[i] = set ? { cols: set.columns, rows: set.values } : { cols: [], rows: [] };
      } catch (e) {
        results[i] = { err: e.message, rows: [] };
      }
      total += performance.now() - t0;
      suiteMs = total;
      renderTests(); renderSum();
    }
    running = false;
    renderTests(); renderSum();
  }

  function markStale() {
    if (!results || running) return;
    stale = true;
    renderTests(); renderSum();
  }

  // ---------- Chaos ----------
  function renderChaos() {
    chaosEl.innerHTML = chaosDone.length >= CHAOS.length ? `<p>${esc(t('sq.chaosAll'))}</p>` : '';
    chaosEl.innerHTML += chaosDone.map((ci, n) => `<details>
      <summary><b>⚡</b> ${esc(fmt(t('sq.chaosN'), { n: n + 1 }))} <span class="chaoslog__more">${esc(t('sq.reveal'))}</span></summary>
      <p>${esc(t(CHAOS[ci].k))}</p><pre class="dq__sql">${esc(CHAOS[ci].sql)}</pre></details>`).reverse().join('');
  }

  function chaos() {
    const left = CHAOS.map((c, i) => i).filter(i => !chaosDone.includes(i));
    if (!left.length) return renderChaos();
    const i = left[Math.floor(Math.random() * left.length)];
    db.exec(CHAOS[i].sql);
    chaosDone.push(i);
    renderChaos();
    markStale();
  }

  function resetDb() {
    fresh();
    chaosDone = [];
    renderChaos();
    results = null;
    stale = false;
    result.innerHTML = '';
    setStatus(ready, 'ok');
    runSuite(false);
  }

  function renderPresets() {
    presetsEl.innerHTML = PRESETS.map((p, i) => `<button class="preset" type="button" data-p="${i}">${esc(t(p.k))}</button>`).join('');
  }

  // ---------- Bediening ----------
  presetsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-p]');
    if (!b) return;
    ta.value = PRESETS[+b.dataset.p].sql;
    runQuery();
  });
  ta.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runQuery(); }
  });
  testsEl.addEventListener('toggle', e => {
    const i = +e.target.dataset.i;
    if (e.target.open) opened.add(i); else opened.delete(i);
  }, true);
  btn.run.addEventListener('click', runQuery);
  btn.suite.addEventListener('click', () => runSuite(true));
  btn.chaos.addEventListener('click', chaos);
  btn.reset.addEventListener('click', resetDb);
  onLang(() => { renderPresets(); renderTests(); renderSum(); renderChaos(); renderStatus(); });

  ta.value = PRESETS[0].sql;
  renderPresets();
  renderTests();
  renderSum();

  (async () => {
    if (typeof window.initSqlJs !== 'function') return setStatus(() => t('sq.loadFail'), 'err');
    const t0 = performance.now();
    try {
      SQL = await window.initSqlJs({ locateFile: f => SQLJS_CDN + f });
    } catch (e) {
      return setStatus(() => t('sq.loadFail'), 'err');
    }
    fresh();
    const ms = performance.now() - t0, version = db.exec('SELECT sqlite_version()')[0].values[0][0];
    Object.values(btn).forEach(b => { b.disabled = false; });
    renderSchema();
    runQuery();
    ready = () => `SQLite ${version} · WebAssembly · ${t('sq.loadedIn')} ${Math.round(ms)} ms`;
    setStatus(ready, 'ok');
    runSuite(false);
  })();
};
