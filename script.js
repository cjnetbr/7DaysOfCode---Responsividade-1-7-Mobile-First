const fabContainer = document.querySelector('.fab-container');
const mainFab = document.getElementById('mainFab');

// Cria o fundo escurecido dinamicamente
const backdrop = document.createElement('div');
backdrop.classList.add('fab-backdrop');
document.body.appendChild(backdrop);

// Abre/fecha o menu
mainFab.addEventListener('click', () => {
  fabContainer.classList.toggle('active');
});

// Fecha ao clicar fora
backdrop.addEventListener('click', () => {
  fabContainer.classList.remove('active');
});
