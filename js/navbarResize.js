document.body.addEventListener("htmx:afterSwap", () => {
  const logo = document.getElementById("logo-container");

  if (!logo) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      logo.classList.add("scrolled");
      navbar.style.borderBottom = "0.001rem solid white";
    } else {
      logo.classList.remove("scrolled");
      navbar.style.border = "none";
    }
  });
});