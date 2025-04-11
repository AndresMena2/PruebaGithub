const usuario = document.getElementById("usuario");
const dropdown = document.getElementById("dropdown");
const temaToggle = document.getElementById("tema-toggle"); 

usuario.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!usuario.contains(e.target)) {
        dropdown.style.display = "none";
    }
});

