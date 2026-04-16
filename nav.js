(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const here = location.pathname.split('/').pop() || 'index.html';

  function active(href) {
    return href === here ? 'active' : '';
  }

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  const drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.innerHTML = `
    <div class="nav-drawer-header">
      <a href="index.html" class="nav-drawer-logo">
        <span class="nav-logo-dot"></span>TurboTrons
      </a>
      <button class="nav-drawer-close" aria-label="Close menu">✕</button>
    </div>
    <div class="nav-drawer-body">
      <a href="index.html" class="${active('index.html')}">Home</a>
      <a href="team.html" class="${active('team.html')}">Team</a>
      <a href="outreach.html" class="${active('outreach.html')}">Outreach</a>
      <a href="sponsers.html" class="${active('sponsers.html')}">Sponsors</a>
      <a href="contact.html" class="${active('contact.html')}">Contact</a>

      <div class="nav-drawer-divider"></div>
      <div class="nav-drawer-section-label">Past Seasons</div>

      <a href="decode.html" class="nav-drawer-season ${active('decode.html')}">
        2025–2026 Decode
        <span class="nav-drawer-tag">Now</span>
      </a>
      <a href="deep.html" class="${active('deep.html')}">2024–2025 Into The Deep</a>
      <a href="centerstage.html" class="${active('centerstage.html')}">2023–2024 CenterStage</a>

      <div class="nav-drawer-divider"></div>
      <a href="contact.html#donate" class="nav-drawer-cta">Donate</a>
    </div>
  `;
  document.body.appendChild(drawer);

  const burger = document.createElement('button');
  burger.className = 'nav-hamburger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(burger);

  function open() {
    burger.classList.add('open');
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    burger.classList.remove('open');
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });

  overlay.addEventListener('click', close);
  drawer.querySelector('.nav-drawer-close').addEventListener('click', close);

  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();
