(function () {
  var body = document.body;
  var root = document.documentElement;
  var menu = document.getElementById('menu');
  var nav = document.getElementById('nav');
  var btnSmaller = document.getElementById('a-');
  var btnLarger = document.getElementById('a+');
  var btnContrast = document.getElementById('ct');
  var live = document.getElementById('a11y-live');
  var size = 100;
  var minSize = 90;
  var maxSize = 150;
  var mqDesktop = window.matchMedia('(min-width: 721px)');

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  function load(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function announce(message) {
    if (!live) return;
    live.textContent = '';
    window.setTimeout(function () {
      live.textContent = message;
    }, 10);
  }

  function syncSizeButtons() {
    if (btnSmaller) {
      btnSmaller.disabled = size <= minSize;
    }
    if (btnLarger) {
      btnLarger.disabled = size >= maxSize;
    }
  }

  function setSize(next, announceChange) {
    size = Math.min(maxSize, Math.max(minSize, next));
    root.style.fontSize = size + '%';
    save('nap-size', String(size));
    syncSizeButtons();
    if (announceChange) {
      announce('Tamanho do texto: ' + size + '%');
    }
  }

  function setContrast(on, announceChange) {
    body.classList.toggle('contraste', on);
    if (btnContrast) {
      btnContrast.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    save('nap-ct', on ? '1' : '0');
    if (announceChange) {
      announce(on ? 'Alto contraste ativado' : 'Alto contraste desativado');
    }
  }

  function setMenuOpen(open) {
    if (!menu || !nav) return;
    nav.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-label', open ? 'Fechar o menu' : 'Abrir o menu');
  }

  if (menu && nav) {
    menu.addEventListener('click', function () {
      setMenuOpen(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setMenuOpen(false);
        menu.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('open')) return;
      var target = event.target;
      if (menu.contains(target) || nav.contains(target)) return;
      setMenuOpen(false);
    });

    function onViewportChange() {
      if (mqDesktop.matches) {
        setMenuOpen(false);
      }
    }

    if (typeof mqDesktop.addEventListener === 'function') {
      mqDesktop.addEventListener('change', onViewportChange);
    } else if (typeof mqDesktop.addListener === 'function') {
      mqDesktop.addListener(onViewportChange);
    }
  }

  if (btnSmaller) {
    btnSmaller.addEventListener('click', function () {
      setSize(size - 10, true);
    });
  }

  if (btnLarger) {
    btnLarger.addEventListener('click', function () {
      setSize(size + 10, true);
    });
  }

  if (btnContrast) {
    btnContrast.addEventListener('click', function () {
      setContrast(!body.classList.contains('contraste'), true);
    });
  }

  var savedSize = load('nap-size');
  if (savedSize) {
    setSize(parseInt(savedSize, 10), false);
  } else {
    syncSizeButtons();
  }

  var savedContrast = load('nap-ct');
  if (savedContrast === '1') {
    setContrast(true, false);
  } else if (savedContrast === null && window.matchMedia('(prefers-contrast: more)').matches) {
    setContrast(true, false);
  }
})();
