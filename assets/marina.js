// Marina Guesthouse — shared scripts

// Hero image rotation
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('is-active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('is-active');
  }, 5500);
})();

// Mobile menu toggle
(function() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();

// Footer year
(function() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
