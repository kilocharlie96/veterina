// Tento kód sa spustí len raz pri načítaní stránky
document.body.addEventListener('click', (event) => {
  // Skontrolujeme, či kliknutý prvok (alebo jeho rodič) je naše tlačidlo
  const btn = event.target.closest('#hamburger');

  if (btn) {
    btn.classList.toggle('open');
    console.log("Stav prepnutý delegáciou. Triedy:", btn.className);
  }
});