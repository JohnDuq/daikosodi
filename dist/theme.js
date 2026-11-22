(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  function updateLabel() {
    const dark = root.dataset.theme === 'dark';
    const labels={en:['Switch to dark mode','Switch to light mode'],es:['Cambiar a modo oscuro','Cambiar a modo claro'],fr:['Passer au mode sombre','Passer au mode clair']};
    const label=(labels[root.lang]||labels.en)[dark?1:0];
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
    try { localStorage.setItem('daiko-theme-v2', theme); } catch {}
    apply(theme);
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'daiko-theme-v2') return;
    apply(event.newValue === 'dark' ? 'dark' : 'light');
  });
  document.addEventListener('site:language', updateLabel);
  apply(root.dataset.theme === 'dark' ? 'dark' : 'light');
})();
