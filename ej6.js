const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");

document.getElementById("botond").addEventListener("click", function(){
    if (caja1.style.display==="none") {
        caja1.style.display="block";
        this.textContent = "ocultar con display";
    } else {
        caja1.style.display="none";
        this.textContent = "ocultar con display";
    }
})

document.getElementById("botonv").addEventListener("click", function(){
    if (caja2.style.visibility==="hidden") {
        caja2.style.visibility="visible";
    } else {
        caja2.style.visibility="hidden";
        this.textContent = "ocultar con visivility";
    }
})