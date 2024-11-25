// Seleciona o botão do menu hambúrguer e a barra de navegação
const menuToggle = document.getElementById("menuToggle");
const headerNavbar = document.getElementById("headerNavbar");

// Alterna as classes ao clicar no botão
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    headerNavbar.classList.toggle("open");
});
