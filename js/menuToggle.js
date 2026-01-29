// Toto zabezpečí, že skript nájde tlačidlá aj po tom, čo HTMX vymení kus stránky
document.body.addEventListener('htmx:afterSwap', function(evt) {
    setupMenu();
});

// Zavoláme to aj pri prvom načítaní
setupMenu();

function setupMenu() {
    const hamburger = document.getElementById('hamburger');
    const menuContainer = document.querySelector('.menu-container');

    if (hamburger && menuContainer) {
        // Najprv odstránime starý listener (aby sa neduplikovali kliknutia)
        hamburger.removeEventListener('click', toggleHandler);
        hamburger.addEventListener('click', toggleHandler);
    }
}

function toggleHandler() {
    const hamburger = document.getElementById('hamburger');
    const menuContainer = document.querySelector('.menu-container');
    hamburger.classList.toggle('open');
    menuContainer.classList.toggle('open');
}

function closeMenu() {
    document.getElementById('hamburger')?.classList.remove('open');
    document.querySelector('.menu-container')?.classList.remove('open');
}