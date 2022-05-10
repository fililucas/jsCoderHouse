/*     let boton = document.getElementById("btnPrincipal");
    boton.addEventListener("click", respuestaClick);
    function respuestaClick() {
        console.log("Respuesta evento");
    } */



/* let HTMLCollection = document.getElementsByTagName("body");
let body = HTMLCollection[0];


let botonRojo = document.getElementById("btnRojo");
botonRojo.onclick = () => { body.className = "rojo" }

let botonAzul = document.getElementById("btnAzul");
botonAzul.onclick = () => { body.className = "azul" }

let botonGris = document.getElementById("btnGris");
botonGris.onclick = () => { body.className = "gris" }

let botonVioleta = document.getElementById("btnVioleta");
botonVioleta.onclick = () => { body.className = "violeta" } */


/*     MALA PRACTICA
        < input type = "button" value = "CLICK2" onclick = 'alert("Respuesta dos")' */


/* let evento = "mousemove";

let boton = document.getElementById("btn");

boton.addEventListener("mousedown", () => {
    console.log("click con mousedown");
})

boton.addEventListener("mouseup", () => {
    console.log("click con up");
})

boton.addEventListener("click", () => {
    console.log("click con click");
}) */


let apellido = document.getElementById("apellido");
let saludo = document.getElementById("saludo");
let tecla = "keyup"



/* apellido.addEventListener(tecla, (e) => {
    console.log(e.key);
}) */

/* apellido.addEventListener(tecla, (e) => {
    if (e.key === "Enter") {
        saludo.className = "gris";
    } if (e.key === "a") {
        saludo.className = "rojo"
    }
}); */


/* let input = document.getElementById("nombre");

/* input.addEventListener("change", () => {
    console.log("cambiaste");
}) */



/* input.addEventListener("input", () => {
    console.log(input.value);
}) */ 


/* let formulario = document.getElementById("formulario"); */

/* formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("oaksfa");
}) */

/* formulario.addEventListener("submit", validarFormulario)


function validarFormulario(e) {
    e.preventDefault();

    console.log(e.target.children[0].value);
} */