(() => {
  const root = document.documentElement;

  /* ---------- THEME ---------- */
  const toggle = document.querySelector('.theme-toggle');
  const syncToggle = () =>
    toggle?.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'light'));
  syncToggle();

  toggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('site-theme', next); } catch (e) {}
    syncToggle();
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- HERO PARALLAX ---------- */
  const field = document.querySelector('[data-parallax-field]');
  const card = document.querySelector('[data-parallax="card"]');
  const orb = document.querySelector('[data-parallax="orb"]');

  if (field && card && orb && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    field.addEventListener('mousemove', (event) => {
      const r = field.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - 0.5;
      const y = (event.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        `translate(calc(-50% + ${x * 12}px), calc(-50% + ${y * 10}px)) rotate(${-3 + x * 2}deg)`;
      orb.style.transform = `translate3d(${x * -12}px, ${y * -10}px, 0)`;
    });
    field.addEventListener('mouseleave', () => {
      card.style.transform = '';
      orb.style.transform = '';
    });
  }

  /* ---------- REVEAL ---------- */
  const revealTargets = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-in'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach((el) => observer.observe(el));
  }

  /* ---------- CASE TOC HIGHLIGHT ---------- */
  const tocLinks = [...document.querySelectorAll('[data-toc]')];
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map(tocLinks.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
    const headings = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        byId.get(entry.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '0px 0px -70% 0px' });
    headings.forEach((h) => spy.observe(h));
  }
})();
