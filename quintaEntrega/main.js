// obtengo el dato "nombre"
let nombre = prompt("Dime tu nombre:");

// creo un h1 en el html y adjunto el dato obtenido mediante el prompt
let bodyNombre = document.createElement("h1");
bodyNombre.innerText = "Hola " + nombre;
// incluyo la variable en el html body.
document.body.append(bodyNombre);

// busco el body
let HTMLCollection = document.getElementsByTagName("body");

// me posiciono en el body para agregar mas adelante una clase
let body = HTMLCollection[0];

// obtengo un dato
let colorFondo = prompt("¿Que color quieres ver el fondo? \nazul \nrojo \nvioleta \nnegro \nblanco").toLowerCase();
// hago uso del dato para cambiar el color de fondo
if (colorFondo == "azul") {
    body.className = "azul"
} else if (colorFondo == "rojo") {
    body.className = "rojo"
} else if (colorFondo == "negro") {
    body.className = "negro"
    bodyNombre.className = "textoblanco"
} else if (colorFondo == "violeta") {
    body.className = "violeta"
} else if (colorFondo == "blanco") {
    body.className = "blanco"
} else {
    bodyNombre.innerText = "Por favor, diga un color valido"
}