const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () =>{
    // 1. Abre ou fecha o menu (adiciona/remove a classe)
    navList.classList.toggle("active");

    // 2. Verifica se o menu está aberto para trocar o ícone
    if (navList.classList.contains('active')) {
        menuToggle.textContent = '✕'; // Ícone de fechar
    } else {
        menuToggle.textContent = '☰'; // Ícone de abrir
    }
});

