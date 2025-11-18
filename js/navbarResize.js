document.body.addEventListener("htmx:afterSwap", () => {
  const logo = document.getElementById("logo"),
        navbar = document.getElementById("navbar"),
        menu = document.getElementById("btn-menu"),
        call = document.getElementById("btn-call");

  if (!logo || !menu || !call) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      logo.classList.add("scrolled");
      navbar.style.borderBottom = "0.001rem solid white";
      menu.classList.add("menu-scrolled")
      call.classList.add("phone-scrolled");
    } else {
      logo.classList.remove("scrolled");
      navbar.style.border = "none";
      menu.classList.remove("menu-scrolled")
      call.classList.remove("phone-scrolled");
    }
  });
});