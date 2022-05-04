/* console.dir(document); */

/* let div = document.getElementById("aplicacion");
console.log(div.innerHTML);
console.log(div.innerText);


let saludo = document.getElementById("saludo");
console.log(saludo.innerText);
console.log(saludo.innerHTML); */

/* let perros = document.getElementsByClassName("perritos");

console.log(perros[1]); */

/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */


/* let perritos = document.getElementsByClassName("perritos");

console.log(perritos);

for(const perrito of perritos) {
    console.log(perrito.innerHTML);
    alert(perrito.innerHTML);
} */

/* let saludo = document.getElementById("saludo");
console.log(saludo.innerHTML);

saludo.innerHTML = "<h1>hola probando h1</h1>";
console.log(saludo.innerText); */

/* let respuesta = prompt("Ingrese si o no para cambiar el color");


let saludo = document.getElementById("saludo");


if(respuesta == "si"){
    saludo.className = "color";
} */

/* 
 1. crear la etiqueta
 2. agregar contenido a la etiqueta
 3. ubicar la etiqueta en mi html
*/

/* let nombre = document.createElement("p");
nombre.innerHTML = "<h1>Pepe</h1>"
document.body.append(nombre);
 */


/* let saludo = document.getElementById("saludo");
saludo.remove(); */


/* document.getElementById("nombre").value = "casa";

console.log(document.getElementById("nombre").value); */


/* let productos = ["Arroz", "Pan", "Cafe", "Leche"];
let padre = document.getElementById("productos");

for(const producto of productos) {
    let li = document.createElement("li");
    li.innerHTML = producto;
    padre.append(li);
} */


/* let persona = {nombre: "andrea", edad: 19, direccion: "Buenos Aires"};

let informacion = "nombre " + persona.nombre + " edad: " + persona.edad + " direccion: " + persona.direccion ;

console.log(informacion); */


/* let saludo = document.querySelector("#divGrande p");
console.log(saludo); */

/* let p = document.querySelector(".saludo");
console.log(p);

let parrafos = document.querySelectorAll(".saludo");
console.log(parrafos); */


let nombre = prompt("Dime tu nombre:");

let bodyNombre = document.createElement("h1");
bodyNombre.innerText = "Hola " + nombre;
document.body.append(bodyNombre);


let HTMLCollection = document.getElementsByTagName("body");
let body = HTMLCollection[0];



let colorFondo = prompt("¿Que color quieres ver el fondo? \nazul \nrojo \nvioleta \nnegro \nblanco");

if (colorFondo == "azul") {
    body.className = "azul"
}else if (colorFondo == "rojo") {
    body.className = "rojo"
}else if (colorFondo == "negro") {
    body.className = "negro"
    bodyNombre.className = "textoblanco"
}else if (colorFondo == "violeta") {
    body.className = "violeta"
}else if (colorFondo == "blanco") {
    body.className = "blanco"
}else{
    bodyNombre.innerText = "Por favor, diga un color valido"
}
