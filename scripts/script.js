 // Obtem a referência para o elemento do ícone da seta
 const arrowIcon = document.querySelector('.arrow-icon');

 // Obtem a referência para a lista de subfiltros
 const subfiltroLista = document.querySelector('.subfiltro');

 // Adiciona um listener de evento de clique ao ícone da seta
 arrowIcon.addEventListener('click', function() {
     // Verifica se a lista de subfiltros está visível
     if (subfiltroLista.style.display === 'block') {
         // Se estiver visível, oculta a lista de subfiltros
         subfiltroLista.style.display = 'none';
     } else {
         // Se estiver oculta, exibe a lista de subfiltros
         subfiltroLista.style.display = 'block';
     }
 });

 // USANDO O GSAP
 // Seleciona o ícone
const icon = document.querySelector('.arrow-icon img');

icon.addEventListener('click', () => {
    // Gira o ícone usando GSAP
    gsap.to(icon, { rotation: '+=180', duration: 0.5 });
});



