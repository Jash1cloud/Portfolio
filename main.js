(function() {
  const themeToggle = document.getElementById('themeToggle');
  const glow = document.getElementById('cursorGlow');
  
  // Follow Mouse with Glow effect
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Smooth Reveal Animation for cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });

  // Theme Toggler logic
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('pref-theme', isLight ? 'light' : 'dark');
  });

  // Automatically update the year in the footer
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  /**
   * Functional Email Helper
   * Directs user to their mail client with pre-filled details
   */
  window.openMail = (e) => {
    e.preventDefault(); // Stop the page from refreshing
    
    // Get values from the new form fields
    const name = encodeURIComponent(document.getElementById('name').value);
    const userEmail = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    const recipient = "jashchauhan1210@gmail.com";
    const subject = `Strategic Inquiry from ${name}`;
    
    // Format the body to include the user's email for your records
    const body = `Visitor Name: ${name}%0D%0AVisitor Email: ${userEmail}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Trigger the mailto link
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };
})();
