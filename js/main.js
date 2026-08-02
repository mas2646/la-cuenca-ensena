const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Hero content reveals immediately on load rather than waiting for scroll
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero .reveal');
  if (hero) hero.classList.add('is-visible');
});
