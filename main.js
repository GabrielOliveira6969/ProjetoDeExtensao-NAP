(function () {
  var b = document.body, r = document.documentElement;
  var menu = document.getElementById('menu'), nav = document.getElementById('nav');
  var ct = document.getElementById('ct'), size = 100;
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function setSize(s) { size = Math.min(150, Math.max(90, s)); r.style.fontSize = size + '%'; save('nap-size', size); }
  function setContrast(on) { b.classList.toggle('contraste', on); ct.setAttribute('aria-pressed', on); save('nap-ct', on ? '1' : '0'); }
  menu.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
  document.getElementById('a-').addEventListener('click', function () { setSize(size - 10); });
  document.getElementById('a+').addEventListener('click', function () { setSize(size + 10); });
  ct.addEventListener('click', function () { setContrast(!b.classList.contains('contraste')); });
  if (load('nap-size')) setSize(parseInt(load('nap-size'), 10));
  if (load('nap-ct') === '1') setContrast(true);
})();
