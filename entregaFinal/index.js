//creo un constructor para luego almacenarlos en el array
/* class Producto {
    constructor(id, juego, precio) {
        this.id = id;
        this.juego = juego;
        this.precio = parseFloat(precio);
    }
} */

// Array con, id, juego y el precio.
const productos = [
    { id: 0, juego: "far Cry 3", precio: 600 },
    { id: 1, juego: "gta 4", precio: 1500 },
    { id: 2, juego: "gta 5", precio: 2200 },
    { id: 3, juego: "sims 3", precio: 700 },
    { id: 4, juego: "battlefield 4", precio: 1100 },
    { id: 5, juego: "smite", precio: 0 },
    { id: 6, juego: "lol", precio: 0 },
    { id: 7, juego: "csgo", precio: 0 },
    { id: 8, juego: "call of duty", precio: 1400 },
    { id: 9, juego: "assetto corsa", precio: 550 },
    { id: 10, juego: "need for speed", precio: 350 },
    { id: 11, juego: "payday2", precio: 400 },
    { id: 12, juego: "resident evil 4", precio: 500 },
    { id: 13, juego: "resident evil 5", precio: 750 }];

// hago uso del constructor para crear un objeto nuevo al array
/* const juegoNuevo = new Producto(14, prompt("Diga el juego que quiere agregar:"), prompt("Escriba el precio del juego:"));

//ingreso el dato obtenido mediante el prompt anterior y lo guardo dentro del array.
productos.push(juegoNuevo);

// creo un for que me diga todos los objetos del array en la consola.
for (const juego of productos) {
    console.log(juego.id);
    console.log(juego.juego);
    console.log(juego.precio);
}

// obtengo un dato "buscador"
let buscador = prompt("Nombre del juego que quieres buscar:").toLowerCase();

// creo una variable donde almaceno un dato y chequeo en la misma mediante un filtro si se encuentra en el array productos
const resultados = productos.filter((element) => element.juego.includes(buscador)).map((juego) => juego.juego);
if (resultados == "") {
    //si en el resultado no encuentra nada, avisa que no se encontro coincidencias.
    alert("No hemos encontrado coincidencias.");
} else {
    //si en el resultado se encuentran datos, los imprime en un alert
    alert("Sus coincidencias son: " + resultados);
}

console.log(resultados); */


/* let nombre = document.createElement("p");
nombre.innerHTML = "<h1>Pepe</h1>"
document.body.append(nombre); */

let resultado = document.getElementById("resultado");
let buscador = document.getElementById("buscador");
let textoBusqueda = document.getElementById("busqueda");



function validarFormulario(e) {
    e.preventDefault();
    console.log(e.target.children[0].value);
    let busqueda = e.target.children[0].value;
    const resultados = productos.filter((element) => element.juego.includes(busqueda)).map((juego) => juego.juego);
    resultado.append(`Tu busqueda es: "${busqueda}" Resultados: ${resultados}`);
    buscador.reset(textoBusqueda);
}


for (const juego of productos) {
    let lista = [`Juego: ${juego.juego}\n Precio: ${juego.precio}`];
    resultado.append(lista);
}

buscador.addEventListener("submit", validarFormulario);




