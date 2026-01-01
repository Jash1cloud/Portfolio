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

 // Replace the window.openMail block in your main.js
window.openMail = (e) => {
  e.preventDefault();
  
  const name = encodeURIComponent(document.getElementById('name').value);
  const userEmail = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);
  
  const recipient = "jashchauhan1210@gmail.com";
  const subject = `Strategic Inquiry from ${name}`;
  
  // Includes the user's email in the message body for easy replying
  const body = `From: ${name} (${userEmail})%0D%0A%0D%0AMessage:%0D%0A${message}`;
  
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};
})();
