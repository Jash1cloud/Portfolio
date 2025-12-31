(function() {
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');
  const storageKey = 'pref-theme';

  // Set footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function applyTheme(t) {
    if (t === 'light') {
      document.documentElement.classList.add('light');
      themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      document.documentElement.classList.remove('light');
      themeToggle.setAttribute('aria-pressed', 'false');
    }
  }

  // Event listener for toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(storageKey, next);
    });
  }

  // Smooth scroll logic
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id === '#' || id === '#!') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Global function for form
  window.openMail = function(ev) {
    ev.preventDefault();
    const f = ev.target;
    const name = encodeURIComponent(f.name.value.trim() || 'Visitor');
    const email = encodeURIComponent(f.email.value.trim());
    const message = encodeURIComponent(f.message.value.trim());
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@jash1cloud.com?subject=${subject}&body=${body}`;
  };
})();
