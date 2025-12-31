(function() {
  const themeToggle = document.getElementById('themeToggle');
  const glow = document.getElementById('cursorGlow');
  
  // Follow Mouse with Glow
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Smooth Section Reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.glass-card').forEach(card => observer.observe(card));

  // Theme Toggler
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('pref-theme', isLight ? 'light' : 'dark');
  });

  // Current Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact Form Helper
  window.openMail = (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value);
    const body = encodeURIComponent(document.getElementById('message').value);
    window.location.href = `mailto:hello@jash1cloud.com?subject=Strategic Inquiry from ${name}&body=${body}`;
  };
})();
