/* Lab L-01 · Testrobot. Laadt vóór main.js: teksten in JT_NL/JT_EN, logica in JT_PAGE. */
'use strict';

window.JT_NL = {
  'rb.s1': 'Start Prokomm met opdracht KA-1042', 'rb.s2': 'Lees voorraad A-03-2 uit PROLOG',
  'rb.s3': 'Scan Lagerort-label', 'rb.s4': 'Valideer schermtitel', 'rb.s5': 'Scan artikellabel',
  'rb.s6': 'Typ hoeveelheid: 3', 'rb.s6t': 'Scan trolley TR-07', 'rb.s7': 'Tik op Bestätigen', 'rb.s8': 'Wacht op ‘Gebucht’',
  'rb.s9': 'Valideer voorraad in de database',
  'rb.rerun': 'Opnieuw uitvoeren', 'rb.failed': 'Gefaald', 'fig.passed': 'Geslaagd', 'rb.line': 'regel'
};

window.JT_EN = {
  'rb.meta': 'Lab experiment: an automated UI test drives a re-creation of Prokomm, the handheld app used at Deutsche Bahn to pick catering trolleys. Inject a bug and see the test catch it.',
  'rb.eyebrow': 'Experiment 01 · UI automation',
  'rb.lead': 'At Deutsche Bahn, catering trolleys for the trains are put together in the warehouse with a handheld app: Prokomm. Below, an automated test operates a simplified re-creation of such an app: it scans the storage location, the item and the trolley, types the quantity, confirms and verifies the result all the way into the database. Inject a bug yourself and see whether the test catches it.',
  'rb.c1': 'UI automation', 'rb.c3': 'Database validation',
  'rb.bugL': 'Inject a bug', 'rb.b0': 'No bug', 'rb.b1': 'Bug: wrong screen title', 'rb.b2': 'Bug: stock booked incorrectly',
  'rb.b3': 'Slow server (2.5 s)', 'rb.b4': 'Server not responding',
  'rb.run': 'Run test', 'rb.rerun': 'Run again', 'rb.style': 'C# · Ranorex style',
  'rb.idle': 'Ready to start', 'rb.failed': 'Failed',
  'rb.s1': 'Start Prokomm with order KA-1042', 'rb.s2': 'Read stock A-03-2 from PROLOG',
  'rb.s3': 'Scan Lagerort (location) label', 'rb.s4': 'Validate screen title', 'rb.s5': 'Scan item label',
  'rb.s6': 'Type quantity: 3', 'rb.s6t': 'Scan trolley TR-07', 'rb.s7': 'Tap Bestätigen (confirm)', 'rb.s8': 'Wait for “Gebucht” (booked)',
  'rb.s9': 'Validate stock in the database',
  'rb.exp': 'Expected', 'rb.act': 'Actual', 'rb.shot': 'Screenshot at the moment of failure', 'rb.line': 'line',
  'rb.cap': 'Tip: when the test isn’t running, you can use the app yourself. Click a label to scan it.',
  'rb.nh': 'What makes this a good test',
  'rb.n1h': 'Wait for a state, not for the clock',
  'rb.n1p': 'The test waits until the screen shows “Gebucht” (booked), with a timeout, instead of a fixed pause. Choose “Slow server”: the test still passes. Choose “Server not responding”: after 5 seconds it fails with a clear message.',
  'rb.n2h': 'Verified down to the database',
  'rb.n2p': 'A green message on screen proves nothing. The test reads the stock straight from the database before and after the pick and compares the two. That is how it catches the “stock booked incorrectly” bug, even though the screen shows the right number.',
  'rb.n2m': 'Data validation',
  'rb.n3h': 'A report with evidence',
  'rb.n3p': 'When a validation fails, the test stops, skips the remaining steps, and the report keeps “expected” versus “actual”, plus a screenshot of the screen at that moment.',
  'rb.n3m': 'Reporting',
  'rb.note': '<strong>In my work</strong> I test PROLOG this way, the logistics system B. Rekencentra builds for Deutsche Bahn: the Windows application and the Android app Prokomm, end to end with C# and Ranorex. This demo is a simplified re-creation in JavaScript; it contains no code or data from the real system.'
};

/* Code 128-patronen (balk/ruimte-breedtes), waarde 0–106. Gecontroleerd tegen de standaardtabel. */
const C128 = ('212222 222122 222221 121223 121322 131222 122213 122312 132212 221213 221312 231212 112232 122132 ' +
  '122231 113222 123122 123221 223211 221132 221231 213212 223112 312131 311222 321122 321221 312212 322112 322211 ' +
  '212123 212321 232121 111323 131123 131321 112313 132113 132311 211313 231113 231311 112133 112331 132131 113123 ' +
  '113321 133121 313121 211331 231131 213113 213311 213131 311123 311321 331121 312113 312311 332111 314111 221411 ' +
  '431111 111224 111422 121124 121421 141122 141221 112214 112412 122114 122411 142112 142211 241211 221114 413111 ' +
  '241112 134111 111242 121142 121241 114212 124112 124211 411212 421112 421211 212141 214121 412121 111143 111341 ' +
  '131141 114113 114311 411113 411311 113141 114131 311141 411131 211412 211214 211232 2331112').split(' ');

/* Even aantal cijfers: code set C (twee cijfers per symbool), anders code set B. */
function code128(text) {
  const codes = /^(\d\d)+$/.test(text)
    ? [105, ...text.match(/\d\d/g).map(Number)]
    : [104, ...[...text].map(c => c.charCodeAt(0) - 32)];
  const check = codes.reduce((sum, c, i) => sum + c * (i || 1), 0) % 103;
  return [...codes, check, 106].map(c => C128[c]).join('');
}

function drawBarcode(svg, text) {
  const quiet = 10, h = 34;
  let x = quiet, bars = '';
  [...code128(text)].forEach((w, i) => {
    if (i % 2 === 0) bars += `<rect x="${x}" width="${w}" height="${h}"/>`;
    x += +w;
  });
  svg.setAttribute('viewBox', `0 0 ${x + quiet} ${h}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.innerHTML = bars;
}

window.JT_PAGE = ({ $, $$, t, reduce, lang }) => {
  const LOC = 'A-03-2', EAN = '541234500127', TROLLEY = 'TR-07', QTY = 3, START_STOCK = 24;
  const ui = {
    hh: $('#hh'), title: $('#hh-title'), form: $('#hh-form'), field: $('#hh-field'), lbl: $('#hh-lbl'),
    input: $('#hh-in'), field2: $('#hh-field2'), tr: $('#hh-tr'), ok: $('#hh-ok'), msg: $('#hh-msg'),
    task: $$('#hh [data-t]'), db: $('#rb-db'), dbv: $('#rb-dbv')
  };
  const labels = { loc: $('#lb-loc'), art: $('#lb-art'), tr: $('#lb-tr') };
  const bugSel = $('#rb-bug');
  const bug = () => bugSel.value;

  Object.values(labels).forEach(b => drawBarcode($('svg', b), b.dataset.code));

  // ---------- De app zelf (Duitstalige UI, zoals in het magazijn) ----------
  const SCREENS = {
    loc: { title: 'Lagerort scannen', label: 'Lagerort', btn: 'OK', target: ['loc'] },
    art: { title: 'Artikel scannen', label: 'Artikel (EAN)', btn: 'OK', target: ['art'] },
    qty: { title: 'Menge & Trolley', label: 'Menge', btn: 'Bestätigen', target: ['qty', 'trolley'] },
    busy: { title: 'Menge & Trolley', label: 'Menge', btn: 'Wird gebucht…', target: ['qty', 'trolley'] },
    done: { title: 'Gebucht', btn: 'Nächste Position', target: [] }
  };
  let state = 'loc', stock = START_STOCK, gen = 0;

  const setMsg = (text, kind) => {
    ui.msg.textContent = text || '';
    ui.msg.className = 'hh__msg' + (kind ? ' is-' + kind : '');
  };
  const setStock = v => { stock = v; ui.dbv.textContent = v; };

  function show(next, msg, kind) {
    const s = SCREENS[next];
    state = next;
    ui.title.textContent = next === 'art' && bug() === 'title' ? 'Produkt scannen' : s.title;
    ui.field.hidden = next === 'done';
    ui.field2.hidden = next !== 'qty' && next !== 'busy';
    ui.lbl.textContent = s.label || '';
    ui.ok.textContent = s.btn;
    ui.ok.disabled = ui.input.disabled = ui.tr.disabled = next === 'busy';
    ui.input.inputMode = next === 'qty' ? 'numeric' : 'text';
    if (next !== 'busy') ui.input.value = ui.tr.value = '';
    if (next !== 'qty') ui.input.classList.remove('is-focus');
    ui.task.forEach(d => d.classList.toggle('is-target', s.target.includes(d.dataset.t)));
    setMsg(msg, kind);
  }

  function startApp() {
    gen++;
    if (stock < QTY) setStock(START_STOCK);
    show('loc');
  }

  function book(n) {
    if (!(n >= 1 && n <= stock)) return setMsg(`Ungültige Menge (1–${stock}).`, 'err');
    const g = gen, from = stock;
    show('busy', 'Wird gebucht…');
    const delay = { slow: 2500, hang: Infinity }[bug()] || 350;
    if (delay === Infinity) return;
    setTimeout(() => {
      if (g !== gen) return;
      // De bug 'voorraad' boekt er één te weinig af, terwijl het scherm het juiste getal toont.
      setStock(from - (bug() === 'stock' ? n - 1 : n));
      show('done', `Bestand ${LOC}: ${from} → ${from - n}`, 'ok');
    }, delay);
  }

  function submit() {
    const v = ui.input.value.trim();
    if (state === 'loc') v === LOC ? show('art') : setMsg(v ? `Unbekannter Lagerort: ${v}` : 'Bitte zuerst den Lagerort scannen.', 'err');
    else if (state === 'art') v === EAN ? show('qty') : setMsg(v ? `Falscher Artikel: ${v}` : 'Bitte den Artikel scannen.', 'err');
    else if (state === 'qty') {
      const tr = ui.tr.value.trim();
      if (tr !== TROLLEY) setMsg(tr ? `Falscher Trolley: ${tr}` : 'Bitte den Trolley scannen.', 'err');
      else book(parseInt(v, 10));
    }
    else if (state === 'done') startApp();
  }

  function scan(label) {
    label.classList.remove('is-scan');
    void label.offsetWidth;
    label.classList.add('is-scan');
    ui.hh.classList.add('is-beep');
    setTimeout(() => ui.hh.classList.remove('is-beep'), 160);
    if (state === 'qty') {
      if (label.dataset.code !== TROLLEY) return setMsg('Menge eingeben und Trolley scannen.', 'err');
      ui.tr.value = TROLLEY;
      return setMsg(`Trolley ${TROLLEY} zugeordnet.`);
    }
    if (state !== 'loc' && state !== 'art') return;
    ui.input.value = label.dataset.code;
    submit();
  }

  ui.form.addEventListener('submit', e => { e.preventDefault(); submit(); });
  Object.values(labels).forEach(b => b.addEventListener('click', () => scan(b)));
  bugSel.addEventListener('change', () => { if (!running) startApp(); });
  show('loc');

  // ---------- De testrobot ----------
  const robot = $('#rb'), stage = $('#rb-stage'), cursor = $('#rb-cursor');
  const lines = $$('#rb-code li'), stepsEl = $('#rb-steps'), runBtn = $('#rb-run'), runLbl = $('#rb-run-l');
  const sum = $('#rb-sum'), stateEl = $('#rb-state'), nEl = $('#rb-n'), bar = $('#rb-bar');
  const timeEl = $('#rb-time'), failsEl = $('#rb-fails'), skipsEl = $('#rb-skips');
  const report = $('#rb-report');

  const wait = ms => new Promise(r => setTimeout(r, reduce ? Math.min(ms, 40) : ms));
  const secs = ms => (ms / 1000).toFixed(1).replace('.', lang() === 'nl' ? ',' : '.') + ' s';
  const show$ = v => (v && v.raw ? v.raw : typeof v === 'string' ? `"${v}"` : String(v));
  const setKey = (el, k) => { el.setAttribute('data-i18n', k); el.innerHTML = t(k); };

  class Fail extends Error {
    constructor(kind, exp, act) { super(kind); this.exp = exp; this.act = act; }
  }
  const areEqual = (exp, act) => { if (exp !== act) throw new Fail('Validate.AreEqual', exp, act); };

  async function moveTo(el) {
    const s = stage.getBoundingClientRect(), r = el.getBoundingClientRect();
    cursor.classList.add('is-on');
    cursor.style.transform = `translate(${(r.left - s.left + r.width * .55).toFixed(1)}px, ${(r.top - s.top + r.height * .6).toFixed(1)}px)`;
    await wait(560);
  }
  async function click(el) {
    await moveTo(el);
    cursor.classList.remove('is-click');
    void cursor.offsetWidth;
    cursor.classList.add('is-click');
    el.click();
    await wait(280);
  }
  /* Geen echte focus: op een telefoon zou dat het toetsenbord openen */
  async function type(el, text) {
    await click(el);
    el.classList.add('is-focus');
    for (const ch of text) { el.value += ch; await wait(150); }
  }
  async function readDb() {
    await moveTo(ui.db);
    ui.db.classList.add('is-hit');
    await wait(420);
    ui.db.classList.remove('is-hit');
    return stock;
  }
  async function waitFor(pred, ms, tick) {
    const t0 = performance.now();
    for (;;) {
      const dt = performance.now() - t0;
      if (pred()) return dt;
      if (dt >= ms) throw new Fail('TimeoutException', { raw: `"Gebucht" ≤ ${ms} ms` }, { raw: `"${ui.title.textContent}" · ${ms} ms` });
      tick(dt);
      await new Promise(r => setTimeout(r, 100));
    }
  }

  const ctx = {};
  /* ln = regel in het testscript, k = tekstsleutel van de stap */
  const STEPS = [
    { ln: 4, k: 'rb.s1', run: async () => { setStock(START_STOCK); startApp(); await wait(350); } },
    { ln: 5, k: 'rb.s2', run: async () => { ctx.stock = await readDb(); return `= ${ctx.stock}`; } },
    { ln: 7, k: 'rb.s3', run: () => click(labels.loc) },
    { ln: 8, k: 'rb.s4', run: async () => { await moveTo(ui.title); areEqual('Artikel scannen', ui.title.textContent); } },
    { ln: 9, k: 'rb.s5', run: () => click(labels.art) },
    { ln: 10, k: 'rb.s6', run: () => type(ui.input, String(QTY)) },
    { ln: 11, k: 'rb.s6t', run: () => click(labels.tr) },
    { ln: 12, k: 'rb.s7', run: () => click(ui.ok) },
    { ln: 14, k: 'rb.s8', run: async x => {
      await moveTo(ui.title);
      const ms = await waitFor(() => state === 'done', 5000, dt => { x.textContent = secs(dt); });
      return ms > 1000 ? secs(ms) : '';
    } },
    { ln: 15, k: 'rb.s9', run: async () => { const v = await readDb(); areEqual(ctx.stock - QTY, v); return `= ${v}`; } }
  ];

  const rows = () => [...stepsEl.children];
  function buildRows() {
    stepsEl.innerHTML = STEPS.map(s =>
      `<li><span class="sti"></span><span><span data-i18n="${s.k}">${t(s.k)}</span><span class="tsteps__x"></span></span><span class="tsteps__ms"></span></li>`
    ).join('');
  }
  function setSum(cls, key, done, ms, fails, skips) {
    sum.className = 'sum ' + cls;
    setKey(stateEl, key);
    nEl.textContent = done;
    bar.style.transform = `scaleX(${done / STEPS.length})`;
    timeEl.textContent = secs(ms);
    failsEl.textContent = fails;
    skipsEl.textContent = skips;
  }

  function showReport(err, ln) {
    $('#rb-rh').innerHTML = `${err.message} · <span data-i18n="rb.line">${t('rb.line')}</span> ${ln}`;
    $('#rb-exp').textContent = show$(err.exp);
    $('#rb-act').textContent = show$(err.act);
    const shot = ui.hh.cloneNode(true);
    shot.removeAttribute('id');
    $$('[id]', shot).forEach(n => n.removeAttribute('id'));
    shot.setAttribute('aria-hidden', 'true');
    shot.inert = true;
    $('#rb-shot').replaceChildren(shot);
    report.hidden = false;
  }

  let running = false;
  async function run() {
    if (running) return;
    running = true;
    robot.classList.add('is-running');
    runBtn.disabled = bugSel.disabled = true;
    report.hidden = true;
    lines.forEach(l => l.classList.remove('is-now', 'is-fail'));
    buildRows();
    const t0 = performance.now();
    let passed = 0, failed = false;
    setSum('is-run', 'fig.running', 0, 0, 0, 0);

    for (const [i, st] of STEPS.entries()) {
      const row = rows()[i], x = $('.tsteps__x', row), line = lines[st.ln - 1];
      if (failed) { row.className = 'is-skip'; continue; }
      lines.forEach(l => l.classList.remove('is-now'));
      line.classList.add('is-now');
      row.className = 'is-run';
      const s0 = performance.now();
      try {
        const extra = await st.run(x);
        row.className = 'is-pass';
        x.textContent = extra || '';
        passed++;
      } catch (err) {
        failed = true;
        row.className = 'is-fail';
        line.classList.add('is-fail');
        x.textContent = err instanceof Fail && err.message === 'Validate.AreEqual' ? `${show$(err.exp)} ≠ ${show$(err.act)}` : err.message;
        showReport(err instanceof Fail ? err : new Fail(err.name, '–', err.message), st.ln);
      }
      $('.tsteps__ms', row).textContent = Math.round(performance.now() - s0) + ' ms';
      setSum('is-run', 'fig.running', passed, performance.now() - t0, 0, 0);
    }

    lines.forEach(l => l.classList.remove('is-now'));
    const skips = rows().filter(r => r.classList.contains('is-skip')).length;
    setSum(failed ? 'is-fail' : '', failed ? 'rb.failed' : 'fig.passed', passed, performance.now() - t0, failed ? 1 : 0, skips);
    ui.input.classList.remove('is-focus');
    cursor.classList.remove('is-on');
    robot.classList.remove('is-running');
    runBtn.disabled = bugSel.disabled = false;
    setKey(runLbl, 'rb.rerun');
    running = false;
  }

  buildRows();
  setSum('is-idle', 'rb.idle', 0, 0, 0, 0);
  runBtn.addEventListener('click', run);

  // Eén keer vanzelf starten zodra de demo in beeld komt
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) { io.disconnect(); if (!running && runLbl.dataset.i18n === 'rb.run') run(); }
    }, { threshold: 0.45 });
    io.observe(stage);
  }
};
