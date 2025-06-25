// ===== Mobile Navigation Menu Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // If the hamburger and nav links exist
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }
});
