const boton = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

boton.addEventListener("click", function () {
    if (menu.style.display==="block") {
        menu.style.display="none";
    }
    else{
        menu.style.display="block";
    }
});