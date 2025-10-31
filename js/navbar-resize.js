let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const logo = document.getElementById('logo');
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    logo.classList.remove('logo');
    logo.classList.add('scrolled');
  } else if (currentScroll < lastScrollTop) {
    logo.classList.remove('scrolled');
    logo.classList.add('logo');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});