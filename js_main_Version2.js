// Minimal behavior: theme toggle, smooth scroll, contact -> mailto
(function(){
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');

  // Set year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Persist theme preference in localStorage
  const storageKey = 'pref-theme';
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  function applyTheme(t){
    if(t === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
    themeToggle.setAttribute('aria-pressed', t === 'light');
  }

  const saved = localStorage.getItem(storageKey) || (prefersLight ? 'light' : 'dark');
  applyTheme(saved);

  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  });

  // Smooth scroll for in-page links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    if(id === '#' || id === '#!' ) return;
    const target = document.querySelector(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null, '', id);
    }
  });

  // Simple contact form -> open mail client with prefilled message
  window.openMail = function(ev){
    ev.preventDefault();
    const f = ev.target;
    const name = encodeURIComponent(f.name.value.trim() || 'Friend');
    const email = encodeURIComponent(f.email.value.trim());
    const message = encodeURIComponent(f.message.value.trim());
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:hello@jash1cloud.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };
})();