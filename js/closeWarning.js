document.querySelector('.btn-agree').addEventListener('click', function() {
    // Nájdeme hlavný obal a pridáme mu triedu pre animáciu
    const warningOverlay = document.querySelector('.warning');
    warningOverlay.classList.add('dismiss');

    // Voliteľné: Úplné odstránenie z DOM po skončení animácie (kvôli čistote kódu)
    warningOverlay.addEventListener('transitionend', () => {
        warningOverlay.remove();
    }, { once: true });
});