/* Scroll-linked movement with native scrolling and reduced-motion support. */
(() => {
  const root = document.documentElement;
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero-visual');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1001px)');
  const selector = '.section-heading, .service, .plan, .steps article, .faq > div:first-child, #questions details, #contact > div, footer';
  let observer;
  let frame = 0;
  let enabled = false;

  function prepareReveals() {
    if (!enabled || !observer) return;
    document.querySelectorAll(selector).forEach(element => {
      if (element.classList.contains('scroll-reveal')) return;
      const siblings = [...element.parentElement.children];
      const stagger = element.matches('.service, .plan, .steps article') ? siblings.indexOf(element) % 3 : 0;
      element.style.setProperty('--reveal-delay', `${stagger * 85}ms`);
      element.classList.add('scroll-reveal');
      if (element.getBoundingClientRect().top < window.innerHeight * 0.94) {
        element.classList.add('is-revealed');
      } else {
        observer.observe(element);
      }
    });
  }

  function renderScroll() {
    frame = 0;
    const y = window.scrollY;
    const range = Math.max(1, root.scrollHeight - window.innerHeight);
    root.style.setProperty('--reading-progress', Math.min(1, Math.max(0, y / range)));
    header.classList.toggle('is-scrolled', y > 40);
    // Keep touch scrolling simple; parallax is limited to the desktop hero.
    const rect = hero.getBoundingClientRect();
    const offset = enabled && desktop.matches && rect.bottom > 0 && rect.top < window.innerHeight
      ? Math.max(-26, Math.min(26, y * 0.055)) : 0;
    hero.style.setProperty('--hero-drift', `${offset}px`);
  }

  function scheduleScroll() {
    if (!frame) frame = requestAnimationFrame(renderScroll);
  }

  function configureMotion() {
    enabled = !preference.matches && 'IntersectionObserver' in window;
    if (observer) observer.disconnect();
    root.classList.toggle('scroll-effects', enabled);
    if (enabled) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      // Re-register elements after a motion-preference change.
      document.querySelectorAll('.scroll-reveal:not(.is-revealed)').forEach(element => observer.observe(element));
      prepareReveals();
    }
    scheduleScroll();
  }

  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  window.addEventListener('pageshow', scheduleScroll);
  document.addEventListener('site:language', () => { prepareReveals(); scheduleScroll(); });
  preference.addEventListener('change', configureMotion);
  configureMotion();
})();
