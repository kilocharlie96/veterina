document.body.addEventListener("htmx:afterSwap", () => {
  const logo = document.getElementById("logo");
  if (!logo) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      logo.classList.add("scrolled");
    } else {
      logo.classList.remove("scrolled");
    }
  });
});