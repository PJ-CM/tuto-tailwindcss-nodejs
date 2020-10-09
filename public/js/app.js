//Código propio - Empleado en las pruebas de TailwindCSS
// alert('Aloha desde TailwindCSS!!');
const navbarBtn = document.querySelector("#navbar-btn");
const navbarMenu = document.querySelector("#navbar-menu");

navbarBtn.addEventListener("click", () => {
    // console.log(':: Pulsado BTN de NavBar ::');
    // Alternando un CLASS para el elemento de menú
    navbarMenu.classList.toggle("hidden");
});