(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  function updateLabel() {
    const dark = root.dataset.theme === 'dark';
    const es = root.lang === 'es';
    const label = es ? (dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
      : (dark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  }
  function apply(theme) {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0d2029' : '#f7fbfc';
    updateLabel();
  }
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('daiko-theme', theme); } catch {}
    apply(theme);
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'daiko-theme') return;
    apply(event.newValue === 'dark' ? 'dark' : 'light');
  });
  document.addEventListener('site:language', updateLabel);
  apply(root.dataset.theme === 'dark' ? 'dark' : 'light');
})();
