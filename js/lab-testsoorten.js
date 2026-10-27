/* Lab L-02 · Testsoorten: één regel, vier manieren van testen.
   Laadt vóór main.js: teksten in JT_NL/JT_EN, logica in JT_PAGE. */
'use strict';

window.JT_NL = {
  'ts.ok': 'Geslaagd', 'ts.fail': 'Gefaald', 'ts.passed': 'geslaagd', 'fig.running': 'Bezig', 'fig.passed': 'Geslaagd',
  'ts.u.num': 'Vul twee hele getallen in.',
  'ts.u.ruleSays': 'de regel zegt', 'ts.u.youExp': 'je verwachtte',
  'ts.u.whoWrong': 'Een falende test betekent: óf de code is fout, óf de verwachting. Hier klopt de regel, dus zit de fout in de verwachting.',
  'ts.i.idle': 'Klaar om te starten', 'ts.i.again': 'Opnieuw uitvoeren',
  'ts.i.s1': 'Typ 3 in ‘Bestand’', 'ts.i.s2': 'Typ 5 in ‘Soll’', 'ts.i.s3': 'Klik op ‘Prüfen’', 'ts.i.s4': 'Controleer: scherm toont TEIL',
  'ts.i.unit': 'Unittests van de regel: {n}/{n} groen. De regel zelf klopt dus.',
  'ts.r.n0': 'De eerste versie van de regel.',
  'ts.r.n1': 'Nieuwe functie: gereserveerde voorraad telt niet meer mee. De blauwe regels zijn gewijzigd.',
  'ts.r.n2': 'Fix: in regel 4 staat weer >= in plaats van >.',
  'ts.r.t0': 'basis', 'ts.r.t1': 'nieuwe functie', 'ts.r.t2': 'fix',
  'ts.r.notRun': 'niet uitgevoerd', 'ts.r.notYet': 'bestaat nog niet', 'ts.r.regr': 'Regressie',
  'ts.r.got': 'de app zegt', 'ts.r.res': 'waarvan {r} gereserveerd', 'ts.r.newT': 'nieuw',
  'ts.r.v0': 'v1.0: alle 7 tests geslaagd. Dit is het vertrekpunt.',
  'ts.r.v1n': 'Alleen de nieuwe test: groen. De nieuwe functie werkt… maar werkt de rest nog? Kies ‘Alle tests’.',
  'ts.r.v1a': '<strong>Regressie gevonden.</strong> {ids} werkte in v1.0, maar faalt in v2.0: liggen er precies genoeg, dan meldt de app nu ‘een deel’. De oorzaak staat in regel 4: <code>&gt;</code> in plaats van <code>&gt;=</code>. Zonder de oude tests was dit niemand opgevallen.',
  'ts.r.v2n': 'De nieuwe test slaagt. Kies ‘Alle tests’ om zeker te zijn dat er niets anders kapot is.',
  'ts.r.v2a': '<strong>Alle {n} tests geslaagd.</strong> De nieuwe functie werkt, en alles wat al werkte, werkt nog.',
  'ts.r.vGen': '{n} test(s) gefaald: {ids}.',
  /* mutatietest: wat elke foutieve versie in gewone taal fout doet, M01–M12 */
  'mt.d1': 'Een bestelling van 0 stuks wordt niet meer geweigerd.',
  'mt.d2': 'De controle is omgedraaid: elke gewone bestelling wordt geweigerd.',
  'mt.d3': 'Een bestelling van precies 1 stuk wordt onterecht geweigerd.',
  'mt.d4': 'Bij een ongeldige bestelling geeft de app geen antwoord.',
  'mt.d5': 'Liggen er precies genoeg (bv. 5 van de 5), dan meldt de app maar een deel.',
  'mt.d6': '‘Genoeg’ en ‘te weinig’ worden omgewisseld.',
  'mt.d7': 'Als alles er is, geeft de app geen antwoord.',
  'mt.d8': 'Bij een lege locatie meldt de app ‘een deel’ in plaats van ‘niets’.',
  'mt.d9': '‘Een deel’ en ‘niets’ worden omgewisseld.',
  'mt.d10': 'Ligt er precies 1 stuk, dan meldt de app ‘niets’ in plaats van ‘een deel’.',
  'mt.d11': 'Als er maar een deel is, geeft de app geen antwoord.',
  'mt.d12': 'Als er niets is, geeft de app geen antwoord.',
  'mt.inStock': 'op voorraad', 'mt.needed': 'nodig', 'mt.none': '(geen antwoord)', 'mt.line': 'regel',
  'mt.caught': 'Gevangen', 'mt.escaped': 'Ontsnapt', 'mt.waiting': 'Nog niet getest',
  'mt.edge': 'randgeval', 'mt.new': 'nieuw', 'mt.kills': 'vangt', 'mt.remove': 'Verwijder test',
  'mt.active': 'actief', 'mt.versions': 'versies',
  'mt.running': 'De 12 foutieve versies worden getest…',
  'mt.v0': 'Zonder tests ontsnapt elke fout. Vink minstens één test aan.',
  'mt.v1': '<strong>Alle code is uitgevoerd</strong> (100%), maar <strong>{n} van de {total} fouten ontsnappen</strong>. De tests controleren dus niet elk randgeval. Klik hieronder op een ontsnapte fout.',
  'mt.v2': 'Niet alle code wordt uitgevoerd ({c}), en {n} van de {total} fouten ontsnappen.',
  'mt.v3': '<strong>Alle {total} fouten gevangen.</strong> Deze tests controleren ook de randgevallen.',
  'mt.escNo': 'Geen enkele test controleert dit geval.',
  'mt.example': 'Voorbeeld waarin het misgaat',
  'mt.right': 'De juiste regel zegt', 'mt.wrong': 'de foute versie zegt',
  'mt.caughtBy': 'Gevangen door', 'mt.expected': 'verwacht',
  'mt.add': 'Voeg deze test toe',
  'mt.keyIdle': 'Klik onderaan op een fout om te zien welke regel code er verandert.',
  'mt.keySel': '<span class="k-del">rood</span> = de juiste regel · <span class="k-add">blauw</span> = de foute versie ({id})'
};

window.JT_EN = {
  'ts.meta': 'Lab experiment: one warehouse rule, four ways to test it. Unit test, UI test, regression test and mutation test, each with an interactive demo.',
  'ts.eyebrow': 'Experiment 02 · Types of testing',
  'ts.lead': 'One simple warehouse rule, four ways to test it. Each type of test answers a different question, and catches different faults. Try them below, one by one.',
  'ts.chipR': 'Regression test', 'ts.chipM': 'Mutation test',
  'ts.ruleH': 'The rule we are testing',
  'ts.ruleP': 'A warehouse worker has to put bottles of water on a catering trolley. The app checks how many are on the location (<b>in stock</b>) and how many are <b>needed</b>, and answers with one word:',
  'ts.ovH': 'Four types of testing, four questions',
  'ts.q1': 'Is this piece of logic right?', 'ts.m1': 'Fast · on every change',
  'ts.q2': 'Does it work the way the user sees it?', 'ts.m2': 'Slower · realistic',
  'ts.q3': 'Does everything that worked still work?', 'ts.m3': 'After every new version',
  'ts.q4': 'Are my tests good enough?', 'ts.m4': 'Now and then · grades the tests',
  'ts.u.lead': 'A unit test tests one small piece of code directly, without a screen or a database. You give the rule an example and check the answer. Hundreds of these tests run in a fraction of a second, so a developer runs them on every change.',
  'ts.u.title': 'The rule and its unit tests', 'ts.u.run': 'Run unit tests',
  'ts.u.ownH': 'Write a test yourself', 'ts.u.stock': 'In stock', 'ts.u.need': 'Needed', 'ts.u.expect': 'I expect', 'ts.u.check': 'Run test',
  'ts.ok': 'Passed', 'ts.fail': 'Failed', 'ts.passed': 'passed',
  'ts.u.num': 'Fill in two whole numbers.',
  'ts.u.ruleSays': 'the rule says', 'ts.u.youExp': 'you expected',
  'ts.u.whoWrong': 'A failing test means: either the code is wrong, or the expectation is. Here the rule is right, so the mistake is in the expectation.',
  'ts.i.lead': 'A UI test operates the screen like a person: typing, clicking and checking what appears. That catches faults a unit test cannot see: the rule itself is right, but the screen does something wrong. Build in a screen fault below. The unit tests stay green, the UI test does not.',
  'ts.i.b0': 'No screen fault', 'ts.i.b1': 'Screen fault: fields swapped', 'ts.i.b2': 'Screen fault: button does nothing',
  'ts.i.run': 'Run UI test', 'ts.i.again': 'Run again', 'ts.i.idle': 'Ready to start', 'ts.i.screen': 'On screen',
  'ts.i.s1': 'Type 3 into “Bestand” (stock)', 'ts.i.s2': 'Type 5 into “Soll” (needed)', 'ts.i.s3': 'Click “Prüfen” (check)', 'ts.i.s4': 'Check: screen shows TEIL',
  'ts.i.unit': 'Unit tests of the rule: {n}/{n} green. So the rule itself is right.',
  'ts.i.cap': 'For a full end-to-end UI test, with scanning, a trolley and the database, see',
  'ts.r.lead': 'Software keeps changing. So after every change you run all the existing tests again: the regression suite. Click through the versions below. Version 2.0 adds a new feature. It works, but along the way something breaks that had worked for years.',
  'ts.r.title': 'Three versions of the rule', 'ts.r.verL': 'Version', 'ts.r.scopeL': 'Which tests',
  'ts.r.sNew': 'Only the new test', 'ts.r.sAll': 'All tests',
  'ts.r.n0': 'The first version of the rule.',
  'ts.r.n1': 'New feature: reserved stock no longer counts. The blue lines have changed.',
  'ts.r.n2': 'Fix: line 4 has >= again instead of >.',
  'ts.r.t0': 'baseline', 'ts.r.t1': 'new feature', 'ts.r.t2': 'fix',
  'ts.r.notRun': 'not run', 'ts.r.notYet': 'doesn’t exist yet', 'ts.r.regr': 'Regression',
  'ts.r.got': 'the app says', 'ts.r.res': 'of which {r} reserved', 'ts.r.newT': 'new',
  'ts.r.v0': 'v1.0: all 7 tests passed. This is the starting point.',
  'ts.r.v1n': 'Only the new test: green. The new feature works… but does the rest still work? Choose “All tests”.',
  'ts.r.v1a': '<strong>Regression found.</strong> {ids} worked in v1.0 but fails in v2.0: when there are exactly enough, the app now reports “part”. The cause is in line 4: <code>&gt;</code> instead of <code>&gt;=</code>. Without the old tests, nobody would have noticed.',
  'ts.r.v2n': 'The new test passes. Choose “All tests” to be sure nothing else is broken.',
  'ts.r.v2a': '<strong>All {n} tests passed.</strong> The new feature works, and everything that worked still works.',
  'ts.r.vGen': '{n} test(s) failed: {ids}.',
  'ts.m.lead': 'Green tests don’t prove that they would notice anything. A mutation test grades your tests, the way you test a smoke detector with a bit of smoke: the engine makes 12 copies of the rule, each with one small fault. Does at least one test fail? Then the fault is <b class="is-ok">caught</b>. Do all tests still pass? Then the fault has <b class="is-bad">escaped</b>: the tests have a blind spot.',
  'ts.nh': 'Why you need all four',
  'ts.n1h': 'Many fast tests, a few slow ones',
  'ts.n1p': 'Unit tests are fast and cheap, so you have lots of them. UI tests are slower but test what the user really sees, so you choose them carefully for the most important flows.',
  'ts.n1m': 'Test pyramid',
  'ts.n2h': 'Every test becomes a regression test',
  'ts.n2p': 'A test you write today guards tomorrow against someone accidentally breaking things. That is why a test suite has to be stable and repeatable: no fixed waiting times, and its own test data.',
  'ts.n2m': 'Automation',
  'ts.n3h': 'The tests get tested too',
  'ts.n3p': '100% executed code does not mean everything is checked. Mutation testing shows where the blind spots are: almost always in the edge cases.',
  'ts.n3m': 'Test quality',
  'ts.note': '<strong>In my work</strong> I mainly build and maintain automated UI tests with Ranorex, for PROLOG and Prokomm, and data-driven tests in Oracle PL/SQL: exactly the kind of tests that have to run again and again as a regression suite.',
  'rb.bugL': 'Inject a bug', 'rb.style': 'C# · Ranorex style', 'rb.line': 'line', 'rb.exp': 'Expected',
  'mt.aV': 'everything is there', 'mt.aT': 'only part is there', 'mt.aF': 'nothing is there', 'mt.aU': 'the order is wrong (0 or less requested)',
  'mt.title': 'Are the faults caught?', 'mt.reset': 'Start over', 'mt.run': 'Test the faults again',
  'mt.src': 'The rule in code',
  'mt.testsHint': 'Tick a test on or off and watch what happens to the faults. T5 to T7 test the edge cases.',
  'mt.cov': 'Code executed', 'mt.covS': 'line coverage', 'mt.score': 'Faults caught', 'mt.scoreS': 'mutation score',
  'mt.mutants': '12 faulty versions',
  'mt.cap': 'Try this: click an escaped fault to see what goes wrong, and add the suggested test. Can you catch all 12 faults?',
  'mt.nk': 'What you learn',
  'mt.d1': 'An order for 0 units is no longer rejected.',
  'mt.d2': 'The check is reversed: every normal order is rejected.',
  'mt.d3': 'An order for exactly 1 unit is wrongly rejected.',
  'mt.d4': 'For an invalid order the app gives no answer.',
  'mt.d5': 'If there are exactly enough (e.g. 5 of 5), the app reports only part.',
  'mt.d6': '“Enough” and “too few” are swapped.',
  'mt.d7': 'When everything is there, the app gives no answer.',
  'mt.d8': 'For an empty location the app reports “part” instead of “nothing”.',
  'mt.d9': '“Part” and “nothing” are swapped.',
  'mt.d10': 'If exactly 1 unit is there, the app reports “nothing” instead of “part”.',
  'mt.d11': 'When only part is there, the app gives no answer.',
  'mt.d12': 'When nothing is there, the app gives no answer.',
  'mt.inStock': 'in stock', 'mt.needed': 'needed', 'mt.none': '(no answer)', 'mt.line': 'line',
  'mt.caught': 'Caught', 'mt.escaped': 'Escaped', 'mt.waiting': 'Not tested yet',
  'mt.edge': 'edge case', 'mt.new': 'new', 'mt.kills': 'catches', 'mt.remove': 'Remove test',
  'mt.active': 'active', 'mt.versions': 'versions',
  'mt.running': 'Testing the 12 faulty versions…',
  'mt.v0': 'Without tests every fault escapes. Tick at least one test.',
  'mt.v1': '<strong>All code is executed</strong> (100%), yet <strong>{n} of the {total} faults escape</strong>. So the tests don’t check every edge case. Click an escaped fault below.',
  'mt.v2': 'Not all code is executed ({c}), and {n} of the {total} faults escape.',
  'mt.v3': '<strong>All {total} faults caught.</strong> These tests check the edge cases too.',
  'mt.escNo': 'No test checks this case.',
  'mt.example': 'Example where it goes wrong',
  'mt.right': 'The correct rule says', 'mt.wrong': 'the faulty version says',
  'mt.caughtBy': 'Caught by', 'mt.expected': 'expected',
  'mt.add': 'Add this test',
  'mt.keyIdle': 'Click a fault below to see which line of code changes.',
  'mt.keySel': '<span class="k-del">red</span> = the correct line · <span class="k-add">blue</span> = the faulty version ({id})'
};

window.JT_PAGE = ({ $, $$, t, reduce, lang, onLang }) => {
  // ---------- Gedeeld: de regel, de tests en hulpfuncties ----------
  const V1 = [
    'function kommiStatus(bestand, soll) {',
    "  if (soll <= 0) return 'UNGUELTIG';",
    "  if (bestand >= soll) return 'VOLL';",
    "  if (bestand > 0) return 'TEIL';",
    "  return 'FEHLT';",
    '}'
  ];
  /* Wat je ziet, is wat er draait: de getoonde regels worden zelf de functie. */
  const build = lines => new Function(...lines[0].match(/\((.*)\)/)[1].split(',').map(s => s.trim()), lines.slice(1, -1).join('\n'));
  const rule = build(V1);
  const TESTS = [
    { id: 'T1', args: [10, 5], exp: 'VOLL' },
    { id: 'T2', args: [3, 5], exp: 'TEIL' },
    { id: 'T3', args: [0, 5], exp: 'FEHLT' },
    { id: 'T4', args: [5, 0], exp: 'UNGUELTIG' },
    { id: 'T5', args: [5, 5], exp: 'VOLL', edge: true },
    { id: 'T6', args: [1, 5], exp: 'TEIL', edge: true },
    { id: 'T7', args: [3, 1], exp: 'VOLL', edge: true }
  ];

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const hl = src => esc(src)
    .replace(/\b\d+\b/g, '<span class="n">$&</span>')
    .replace(/'[^']*'/g, '<span class="s">$&</span>')
    .replace(/\b(function|if|return|const)\b/g, '<span class="k">$1</span>');
  const codeHtml = (lines, cls = []) => lines.map((src, i) => `<li class="${cls[i] || ''}"><span class="code__t">${hl(src)}</span></li>`).join('');
  const fmt = (s, vals) => s.replace(/\{(\w+)\}/g, (_, k) => vals[k]);
  const pct = v => Math.round(v * 100) + '%';
  const dec = (v, n) => v.toFixed(n).replace('.', lang() === 'nl' ? ',' : '.');
  const wait = ms => new Promise(r => setTimeout(r, reduce ? Math.min(ms, 30) : ms));
  const say = ([a, b, r]) => `${a} ${t('mt.inStock')}${r ? `, ${fmt(t('ts.r.res'), { r })}` : ''} · ${b} ${t('mt.needed')}`;
  const answer = v => (v === '' ? t('mt.none') : v);
  const setKey = (el, k) => { el.setAttribute('data-i18n', k); el.innerHTML = t(k); };
  const whenSeen = (el, fn) => {
    if (reduce || !('IntersectionObserver' in window)) return fn();
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); fn(); } }, { threshold: 0.35 });
    io.observe(el);
  };
  const rows = (list, renderRow) => list.map(renderRow).join('');
  const rowHtml = (cls, id, sayHtml, status) =>
    `<li class="rrow ${cls}"><span class="sti"></span><span class="rrow__id">${id}</span><span class="rrow__say">${sayHtml}</span>${status}</li>`;

  /* Virtuele cursor die een scherm bedient, zoals een UI-testtool dat doet. */
  function makeCursor(stage, cursor) {
    const moveTo = async el => {
      const s = stage.getBoundingClientRect(), r = el.getBoundingClientRect();
      cursor.classList.add('is-on');
      cursor.style.transform = `translate(${(r.left - s.left + r.width * .55).toFixed(1)}px, ${(r.top - s.top + r.height * .6).toFixed(1)}px)`;
      await wait(520);
    };
    const click = async el => {
      await moveTo(el);
      cursor.classList.remove('is-click');
      void cursor.offsetWidth;
      cursor.classList.add('is-click');
      el.click();
      await wait(260);
    };
    // geen echte focus: op een telefoon zou dat het toetsenbord openen
    const type = async (el, text) => {
      await click(el);
      el.value = '';
      el.classList.add('is-focus');
      for (const ch of text) { el.value += ch; await wait(140); }
      el.classList.remove('is-focus');
    };
    return { moveTo, click, type, hide: () => cursor.classList.remove('is-on') };
  }

  // ---------- 01 · Unittest ----------
  (() => {
    const list = $('#un-tests'), sumEl = $('#un-sum'), out = $('#un-out');
    let res = null, running = false, totalMs = 0, own = null;
    $('#un-code').innerHTML = codeHtml(V1);

    function render() {
      list.innerHTML = rows(TESTS, (x, i) => {
        const r = res && res[i];
        const cls = r ? (r.ok ? 'is-pass' : 'is-fail') : running ? 'is-run' : '';
        return rowHtml(cls, x.id, `${say(x.args)} → <b>${x.exp}</b>`, r ? `<span class="pill ${r.ok ? 'pill--pass' : 'pill--fail'}">${t(r.ok ? 'ts.ok' : 'ts.fail')}</span>` : '');
      });
      const passed = res ? res.filter(r => r && r.ok).length : 0;
      // browsers ronden hun klok af; alles onder 0,1 ms tonen we als zodanig
      const time = totalMs < 0.1 ? `< ${dec(0.1, 1)}` : dec(totalMs, 2);
      sumEl.textContent = res && !running ? `${passed}/${TESTS.length} ${t('ts.passed')} · ${time} ms` : `${TESTS.length} tests`;
      sumEl.className = 'pill' + (res && !running ? ' pill--pass' : '');
      if (!own) out.innerHTML = '';
      else if (own.bad) out.innerHTML = `<span class="is-bad">${t('ts.u.num')}</span>`;
      else if (own.got === own.exp) out.innerHTML = `<b class="is-ok">✓ ${t('ts.ok')}</b>: ${say([own.a, own.b])}, ${t('ts.u.ruleSays')} <b>${own.got}</b>.`;
      else out.innerHTML = `<b class="is-bad">✗ ${t('ts.fail')}</b>: ${t('ts.u.youExp')} <b>${own.exp}</b>, ${t('ts.u.ruleSays')} <b>${own.got}</b>. <span class="own__why">${t('ts.u.whoWrong')}</span>`;
    }

    async function run() {
      if (running) return;
      running = true;
      res = TESTS.map(() => null);
      totalMs = 0;
      render();
      for (const [i, x] of TESTS.entries()) {
        await wait(90);
        const t0 = performance.now(), got = rule(...x.args);
        totalMs += performance.now() - t0;
        res[i] = { ok: got === x.exp, got };
        render();
      }
      running = false;
      render();
    }

    $('#un-own').addEventListener('submit', e => {
      e.preventDefault();
      const a = Number($('#un-a').value), b = Number($('#un-b').value), exp = $('#un-exp').value;
      own = Number.isInteger(a) && Number.isInteger(b) && $('#un-a').value !== '' && $('#un-b').value !== ''
        ? { a, b, exp, got: rule(a, b) } : { bad: true };
      render();
    });
    $('#un-run').addEventListener('click', run);
    onLang(render);
    render();
    whenSeen(list, run);
  })();

  // ---------- 02 · UI-test ----------
  (() => {
    const wrap = $('#ui-wrap'), stage = $('#ui-stage'), lines = $$('#ui-code li');
    const stock = $('#ui-stock'), need = $('#ui-need'), check = $('#ui-check'), outEl = $('#ui-out');
    const bugSel = $('#ui-bug'), runBtn = $('#ui-run'), runLbl = $('#ui-run-l'), stepsEl = $('#ui-steps');
    const sum = $('#ui-sum'), stateEl = $('#ui-state'), nEl = $('#ui-n'), bar = $('#ui-bar'), report = $('#ui-report');
    const cur = makeCursor(stage, $('#ui-cursor'));
    const unitOk = TESTS.filter(x => rule(...x.args) === x.exp).length;
    const renderUnit = () => { $('#ui-unit').innerHTML = `✓ ${fmt(t('ts.i.unit'), { n: unitOk })}`; };

    // Het scherm zelf: de regel is correct, maar de schermfouten zitten in de bedrading
    $('#ui-form').addEventListener('submit', e => {
      e.preventDefault();
      if (bugSel.value === 'dead') return;
      const a = parseInt(stock.value, 10), b = parseInt(need.value, 10);
      if (isNaN(a) || isNaN(b)) { outEl.textContent = '—'; return; }
      outEl.textContent = bugSel.value === 'swap' ? rule(b, a) : rule(a, b);
    });
    bugSel.addEventListener('change', () => { if (!running) { stock.value = need.value = ''; outEl.textContent = '—'; } });

    const STEPS = [
      { ln: 4, k: 'ts.i.s1', run: () => cur.type(stock, '3') },
      { ln: 5, k: 'ts.i.s2', run: () => cur.type(need, '5') },
      { ln: 6, k: 'ts.i.s3', run: () => cur.click(check) },
      { ln: 7, k: 'ts.i.s4', run: async () => {
        await cur.moveTo(outEl);
        await wait(250);
        if (outEl.textContent !== 'TEIL') throw new Error(outEl.textContent);
      } }
    ];
    const buildRows = () => {
      stepsEl.innerHTML = STEPS.map(s => `<li><span class="sti"></span><span><span data-i18n="${s.k}">${t(s.k)}</span><span class="tsteps__x"></span></span><span class="tsteps__ms"></span></li>`).join('');
    };
    const setSum = (cls, key, n) => {
      sum.className = 'sum ' + cls;
      setKey(stateEl, key);
      nEl.textContent = n;
      bar.style.transform = `scaleX(${n / STEPS.length})`;
    };

    let running = false;
    async function run() {
      if (running) return;
      running = true;
      wrap.classList.add('is-running');
      runBtn.disabled = bugSel.disabled = true;
      report.hidden = true;
      lines.forEach(l => l.classList.remove('is-now', 'is-fail'));
      stock.value = need.value = '';
      outEl.textContent = '—';
      buildRows();
      setSum('is-run', 'fig.running', 0);
      let passed = 0, failed = false;
      for (const [i, st] of STEPS.entries()) {
        const row = stepsEl.children[i], line = lines[st.ln - 1];
        if (failed) { row.className = 'is-skip'; continue; }
        lines.forEach(l => l.classList.remove('is-now'));
        line.classList.add('is-now');
        row.className = 'is-run';
        const s0 = performance.now();
        try {
          await st.run();
          row.className = 'is-pass';
          passed++;
        } catch (err) {
          failed = true;
          row.className = 'is-fail';
          line.classList.add('is-fail');
          $('.tsteps__x', row).textContent = `"TEIL" ≠ "${err.message}"`;
          $('#ui-act').textContent = `"${err.message}"`;
          report.hidden = false;
        }
        $('.tsteps__ms', row).textContent = Math.round(performance.now() - s0) + ' ms';
        setSum('is-run', 'fig.running', passed);
      }
      lines.forEach(l => l.classList.remove('is-now'));
      setSum(failed ? 'is-fail' : '', failed ? 'ts.fail' : 'fig.passed', passed);
      cur.hide();
      wrap.classList.remove('is-running');
      runBtn.disabled = bugSel.disabled = false;
      setKey(runLbl, 'ts.i.again');
      running = false;
    }

    buildRows();
    setSum('is-idle', 'ts.i.idle', 0);
    renderUnit();
    onLang(renderUnit);
    runBtn.addEventListener('click', run);
    whenSeen(stage, () => { if (!reduce && runLbl.dataset.i18n === 'ts.i.run') run(); });
  })();

  // ---------- 03 · Regressietest ----------
  (() => {
    const V2_0 = [
      'function kommiStatus(bestand, soll, reserviert = 0) {',
      '  const frei = bestand - reserviert;',
      "  if (soll <= 0) return 'UNGUELTIG';",
      "  if (frei > soll) return 'VOLL';",
      "  if (frei > 0) return 'TEIL';",
      "  return 'FEHLT';",
      '}'
    ];
    const V2_1 = V2_0.slice();
    V2_1[3] = "  if (frei >= soll) return 'VOLL';";
    /* chg = gewijzigde regels t.o.v. de vorige versie, bug = de regel met de vergissing */
    const VERSIONS = [
      { name: 'v1.0', lines: V1, chg: [], note: 'ts.r.n0', tag: 'ts.r.t0' },
      { name: 'v2.0', lines: V2_0, chg: [0, 1, 3, 4], bug: 3, note: 'ts.r.n1', tag: 'ts.r.t1' },
      { name: 'v2.1', lines: V2_1, chg: [3], note: 'ts.r.n2', tag: 'ts.r.t2' }
    ].map(v => ({ ...v, fn: build(v.lines) }));
    const SUITE = [...TESTS, { id: 'N1', args: [10, 5, 8], exp: 'TEIL', since: 1 }];

    const codeEl = $('#rg-code'), testsEl = $('#rg-tests'), verdict = $('#rg-verdict');
    const verBtns = $$('#rg-ver [data-v]'), scopeBtns = $$('#rg-scope [data-s]');
    let v = 0, scope = 'all', res = null, running = false, runId = 0;

    const inScope = x => (x.since === undefined || x.since <= v) && (scope === 'all' || x.since !== undefined);
    const failedOld = () => SUITE.filter((x, i) => res && res[i] && !res[i].ok && x.since === undefined).map(x => x.id);

    function render() {
      const ver = VERSIONS[v];
      $('#rg-file').textContent = `kommiStatus.js · ${ver.name}`;
      $('#rg-tag').textContent = t(ver.tag);
      $('#rg-note').textContent = t(ver.note);
      const showBug = ver.bug !== undefined && failedOld().length && !running;
      codeEl.innerHTML = codeHtml(ver.lines, ver.lines.map((l, i) => (showBug && i === ver.bug ? 'is-bug' : ver.chg.includes(i) ? 'is-chg' : '')));
      verBtns.forEach(b => b.setAttribute('aria-checked', String(+b.dataset.v === v)));
      scopeBtns.forEach(b => {
        b.setAttribute('aria-checked', String(b.dataset.s === scope));
        b.disabled = b.dataset.s === 'new' && v === 0;
      });

      testsEl.innerHTML = rows(SUITE, (x, i) => {
        const r = res && res[i];
        const tag = x.since !== undefined ? ` <span class="pill pill--run">${t('ts.r.newT')}</span>` : '';
        const sayHtml = `${say(x.args)} → <b>${x.exp}</b>${tag}${r && !r.ok ? `<span class="rrow__got">${t('ts.r.got')} ${esc(answer(r.got))}</span>` : ''}`;
        if (x.since !== undefined && x.since > v) return rowHtml('is-dim', x.id, sayHtml, `<span class="pill">${t('ts.r.notYet')}</span>`);
        if (!inScope(x)) return rowHtml('is-dim', x.id, sayHtml, `<span class="pill">${t('ts.r.notRun')}</span>`);
        if (!r) return rowHtml(running ? 'is-run' : '', x.id, sayHtml, '');
        const regr = !r.ok && x.since === undefined && v > 0;
        return rowHtml(r.ok ? 'is-pass' : 'is-fail', x.id, sayHtml,
          `<span class="pill ${r.ok ? 'pill--pass' : 'pill--fail'}">${t(r.ok ? 'ts.ok' : regr ? 'ts.r.regr' : 'ts.fail')}</span>`);
      });

      if (!res || running) { verdict.innerHTML = ''; return; }
      const fails = SUITE.filter((x, i) => res[i] && !res[i].ok).map(x => x.id);
      const ran = res.filter(Boolean).length;
      const key = v === 0 ? 'ts.r.v0'
        : fails.length && v === 1 && scope === 'all' ? 'ts.r.v1a'
        : fails.length ? 'ts.r.vGen'
        : scope === 'new' ? (v === 1 ? 'ts.r.v1n' : 'ts.r.v2n')
        : 'ts.r.v2a';
      verdict.className = 'reg__verdict' + (fails.length ? ' is-bad' : scope === 'new' && v > 0 ? ' is-warn' : ' is-ok');
      verdict.innerHTML = fmt(t(key), { ids: failedOld().join(', ') || fails.join(', '), n: fails.length || ran });
    }

    async function run() {
      const id = ++runId;
      running = true;
      res = SUITE.map(() => null);
      render();
      const fn = VERSIONS[v].fn;
      for (const [i, x] of SUITE.entries()) {
        if (!inScope(x)) continue;
        await wait(70);
        if (id !== runId) return;
        const got = fn(...x.args);
        res[i] = { ok: got === x.exp, got };
        render();
      }
      running = false;
      render();
    }

    $('#rg-ver').addEventListener('click', e => {
      const b = e.target.closest('[data-v]');
      if (!b) return;
      v = +b.dataset.v;
      if (v === 0) scope = 'all';
      run();
    });
    $('#rg-scope').addEventListener('click', e => {
      const b = e.target.closest('[data-s]');
      if (!b || b.disabled) return;
      scope = b.dataset.s;
      run();
    });
    onLang(render);
    render();
    whenSeen(testsEl, run);
  })();

  // ---------- 04 · Mutatietest ----------
  (() => {
    const BODY = [1, 2, 3, 4];
    /* Elke regel krijgt een teller vooraan: zo meten we regeldekking. */
    const compile = lines => new Function('bestand', 'soll', '__c',
      BODY.map(i => `__c[${i}] = 1; ${lines[i].trim()}`).join('\n'));
    const orig = compile(V1);

    /* Mutatie-operatoren: elke match in een regel levert één foutieve versie op. */
    const OPS = [
      { k: 'boundary', re: /<=|>=|<|>/g, to: m => ({ '<=': '<', '<': '<=', '>=': '>', '>': '>=' })[m] },
      { k: 'negate', re: /if \((.+?)\)/g, to: (m, c) => `if (!(${c}))` },
      { k: 'constant', re: /\b\d+\b/g, to: m => String(+m + 1) },
      { k: 'return', re: /return '\w+'/g, to: () => "return ''" }
    ];
    const mutants = [];
    BODY.forEach(i => OPS.forEach(op => {
      for (const m of V1[i].matchAll(op.re)) {
        const to = op.to(...m), lines = V1.slice(), n = mutants.length + 1;
        lines[i] = V1[i].slice(0, m.index) + to + V1[i].slice(m.index + m[0].length);
        // mt.d1 … mt.d12 beschrijven deze vaste volgorde in gewone taal
        mutants.push({ id: 'M' + String(n).padStart(2, '0'), d: 'mt.d' + n, ln: i, k: op.k, from: m[0], to, line: lines[i], fn: compile(lines) });
      }
    }));

    let tests, genN, sel, touched, res = null, shown = 0, runId = 0, running = false, ms = 0, sug = null;
    const reset = () => { tests = TESTS.map(x => ({ ...x, on: !x.edge })); genN = 0; sel = null; touched = false; };
    reset();

    const call = (fn, [a, b], cov = []) => { try { return fn(a, b, cov); } catch (e) { return '⚠'; } };

    function evaluate() {
      const t0 = performance.now(), active = tests.filter(x => x.on), cov = [];
      active.forEach(x => call(orig, x.args, cov));
      const killers = mutants.map(m => active.filter(x => call(m.fn, x.args) !== x.exp).map(x => x.id));
      ms = performance.now() - t0;
      return { active: active.length, cov, covPct: BODY.filter(i => cov[i]).length / BODY.length, killers };
    }

    /* Differentieel testen: zoek de kleinste invoer waarop de juiste regel en de foute versie verschillen. */
    function suggest(m) {
      for (let s = 0; s <= 30; s++) {
        for (let a = 0; a <= s; a++) {
          const args = [a, s - a], exp = call(orig, args);
          if (call(m.fn, args) !== exp) return { args, exp };
        }
      }
      return null;
    }

    const codeEl = $('#mt-code'), keyEl = $('#mt-key'), testsEl = $('#mt-tests'), mutEl = $('#mt-mutants');
    const covM = $('#mt-m-cov'), mutM = $('#mt-m-mut'), verdict = $('#mt-verdict'), timeEl = $('#mt-time'), suitePill = $('#mt-suite-pill');
    const tech = m => m.k === 'negate' ? `${m.from.slice(3)} → !${m.from.slice(3)}`
      : m.k === 'return' ? `${m.from.slice(7)} → ''` : `${m.from} → ${m.to}`;
    const done = i => res && i < shown;
    const caughtCount = () => res ? res.killers.filter((k, i) => done(i) && k.length).length : 0;

    function renderCode() {
      const m = sel && mutants.find(x => x.id === sel);
      codeEl.innerHTML = V1.map((src, i) => {
        const cov = res && !running && BODY.includes(i) ? (res.cov[i] ? 'cov-y' : 'cov-n') : '';
        if (m && m.ln === i) {
          return `<li class="is-del ${cov}"><span class="code__t">${hl(src)}</span></li>` +
            `<li class="is-add" data-m="${m.id}"><span class="code__t">${hl(m.line)}</span></li>`;
        }
        return `<li class="${cov}"><span class="code__t">${hl(src)}</span></li>`;
      }).join('');
      keyEl.innerHTML = m ? fmt(t('mt.keySel'), { id: m.id }) : t('mt.keyIdle');
    }

    function renderTests() {
      const focus = document.activeElement && document.activeElement.dataset.t;
      testsEl.innerHTML = tests.map(x => {
        const kills = res && !running ? res.killers.filter(k => k.includes(x.id)).length : null;
        return `<li class="${x.on ? '' : 'is-off'}">
          <label class="tcase"><input type="checkbox" data-t="${x.id}"${x.on ? ' checked' : ''}>
            <span class="tcase__id">${x.id}</span>
            <span class="tcase__txt"><span class="tcase__say">${say(x.args)} → <b>${x.exp}</b></span>
              <code class="tcase__call">kommiStatus(${x.args.join(', ')})</code></span></label>
          <span class="tcase__meta">${x.edge ? `<span class="pill">${t('mt.edge')}</span>` : ''}${x.gen ? `<span class="pill pill--run">${t('mt.new')}</span>` : ''}${x.on && kills !== null ? `<span class="tcase__k">${t('mt.kills')} ${kills}</span>` : ''}${x.gen ? `<button class="tcase__x" type="button" data-rm="${x.id}" aria-label="${t('mt.remove')} ${x.id}">×</button>` : ''}</span>
        </li>`;
      }).join('');
      if (focus) { const f = testsEl.querySelector(`[data-t="${focus}"]`); if (f) f.focus(); }
      suitePill.textContent = `${tests.filter(x => x.on).length} ${t('mt.active')}`;
    }

    function setMeter(el, val) {
      $('.meter__v', el).textContent = val == null ? '–' : pct(val);
      $('.meter__bar i', el).style.transform = `scaleX(${val || 0})`;
      el.classList.toggle('is-full', val === 1);
    }

    function renderScore() {
      setMeter(covM, res ? res.covPct : null);
      setMeter(mutM, res ? caughtCount() / mutants.length : null);
      if (!res) verdict.innerHTML = '';
      else if (running) verdict.innerHTML = t('mt.running');
      else {
        const n = mutants.length - caughtCount(), total = mutants.length;
        verdict.innerHTML = !res.active ? t('mt.v0')
          : n === 0 ? fmt(t('mt.v3'), { total })
          : res.covPct === 1 ? fmt(t('mt.v1'), { n, total })
          : fmt(t('mt.v2'), { n, total, c: pct(res.covPct) });
      }
      timeEl.textContent = res ? `${mutants.length} ${t('mt.versions')} · ${dec(ms, 2)} ms` : `${mutants.length} ${t('mt.versions')}`;
    }

    /* Uitleg onder de gekozen fout: een concreet voorbeeld met beide antwoorden. */
    function detail(m, i) {
      const k = res.killers[i];
      if (k.length) {
        const x = tests.find(y => y.id === k[0]);
        return `<p><b class="is-ok">${t('mt.caughtBy')} ${k.join(', ')}.</b> ${x.id}: ${say(x.args)} → ${t('mt.expected')} <b>${x.exp}</b>, ${t('mt.wrong')} <b>${esc(answer(call(m.fn, x.args)))}</b>.</p>`;
      }
      sug = suggest(m);
      if (!sug) return `<p><b class="is-bad">${t('mt.escNo')}</b></p>`;
      return `<p><b class="is-bad">${t('mt.escNo')}</b></p>
        <p>${t('mt.example')}: <b>${say(sug.args)}</b>. ${t('mt.right')} <b>${sug.exp}</b>, ${t('mt.wrong')} <b>${esc(answer(call(m.fn, sug.args)))}</b>.</p>
        <button class="mini mini--go" type="button" data-add>${t('mt.add')}</button>`;
    }

    function renderMutants() {
      const focus = document.activeElement && document.activeElement.dataset.m;
      sug = null;
      mutEl.innerHTML = mutants.map((m, i) => {
        const k = done(i) ? res.killers[i] : null, open = sel === m.id;
        const status = !res ? `<span class="pill">${t('mt.waiting')}</span>`
          : !k ? '<span class="pill pill--run">…</span>'
          : k.length ? `<span class="pill pill--pass">${t('mt.caught')}</span>`
          : `<span class="pill pill--fail">${t('mt.escaped')}</span>`;
        return `<li class="${open ? 'is-open' : ''}"><button class="mrow" type="button" data-m="${m.id}" aria-expanded="${open}">
          <span class="mrow__id">${m.id}</span>
          <span class="mrow__what"><span class="mrow__say">${t(m.d)}</span><code class="mrow__d">${t('mt.line')} ${m.ln + 1} · ${esc(tech(m))}</code></span>
          ${status}</button>${open && k && !running ? `<div class="mrow__more">${detail(m, i)}</div>` : ''}</li>`;
      }).join('');
      if (focus) { const f = mutEl.querySelector(`[data-m="${focus}"]`); if (f) f.focus(); }
    }

    function render() { renderCode(); renderTests(); renderScore(); renderMutants(); }

    async function run(animate) {
      const id = ++runId;
      res = evaluate();
      shown = 0;
      if (animate && !reduce) {
        running = true;
        render();
        for (let i = 1; i <= mutants.length; i++) {
          await new Promise(r => setTimeout(r, 45));
          if (id !== runId) return;
          shown = i;
          renderMutants();
          renderScore();
        }
      }
      running = false;
      shown = mutants.length;
      // Eerste keer: open meteen de eerste ontsnapte fout, met zijn voorbeeld
      if (!touched && !sel) {
        const first = mutants.find((m, i) => !res.killers[i].length);
        if (first) sel = first.id;
      }
      render();
    }

    testsEl.addEventListener('change', e => {
      const x = tests.find(y => y.id === e.target.dataset.t);
      if (!x) return;
      x.on = e.target.checked;
      touched = true;
      run(true);
    });
    testsEl.addEventListener('click', e => {
      const b = e.target.closest('[data-rm]');
      if (!b) return;
      tests = tests.filter(y => y.id !== b.dataset.rm);
      touched = true;
      run(true);
    });
    mutEl.addEventListener('click', e => {
      if (e.target.closest('[data-add]') && sug) {
        tests.push({ id: 'G' + (++genN), args: sug.args, exp: sug.exp, on: true, gen: true });
        touched = true;
        return run(true);
      }
      const b = e.target.closest('[data-m]');
      if (!b || b.tagName !== 'BUTTON') return;
      touched = true;
      sel = sel === b.dataset.m ? null : b.dataset.m;
      renderCode(); renderMutants();
    });
    $('#mt-run').addEventListener('click', () => run(true));
    $('#mt-reset').addEventListener('click', () => { reset(); run(true); });
    onLang(render);

    render();
    whenSeen($('.mut'), () => { if (!res) run(!reduce); });
  })();
};
