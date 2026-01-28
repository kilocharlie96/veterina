document.body.addEventListener("htmx:afterSwap", () => {
      const btn = document.getElementById('hamburger');

    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
    });
});