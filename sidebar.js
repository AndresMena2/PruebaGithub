const boton = document.getElementById("hamburguesa");
const sidebar = document.getElementById("sidebar");

boton.addEventListener("click", function () {
    sidebar.classList.toggle("activo");
});

const toggleSubmenu = document.getElementById("toggleSubmenu");
const submenuList = document.getElementById("submenuList");

toggleSubmenu.addEventListener("Click", function (e) {
    e.preventDefault();
    submenuList.classList.toggle("activo");
});