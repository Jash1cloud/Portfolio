(function() {
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');
  const storageKey = 'pref-theme';

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function applyTheme(t) {
    if (t === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem(storageKey, t);
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  });

  // Artistic Reveal on Scroll
  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.9s cubic-bezier(0.23, 1, 0.32, 1)";
    observer.observe(el);
  });

  // Mailer
  window.openMail = function(ev) {
    ev.preventDefault();
    const f = ev.target;
    const name = encodeURIComponent(f.name.value.trim());
    const email = encodeURIComponent(f.email.value.trim());
    const message = encodeURIComponent(f.message.value.trim());
    const mailto = `mailto:hello@jash1cloud.com?subject=Portfolio Inquiry from ${name}&body=From: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailto;
  };
})();
