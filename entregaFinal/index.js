//creo un constructor para luego almacenarlos en el array
class Producto {
    constructor(id, juego, precio) {
        this.id = id;
        this.juego = juego;
        this.precio = parseFloat(precio);
    }
}

// Array con, id, juego y el precio.
const productos = [
    { id: 0, juego: "Far Cry 3", precio: 600 },
    { id: 1, juego: "Gta 4", precio: 1500 },
    { id: 2, juego: "Gta 5", precio: 2200 },
    { id: 3, juego: "Sims 3", precio: 700 },
    { id: 4, juego: "Battlefield 4", precio: 1100 },
    { id: 5, juego: "Smite", precio: 0 },
    { id: 6, juego: "Lol", precio: 0 },
    { id: 7, juego: "CSGO", precio: 0 },
    { id: 8, juego: "Call of duty", precio: 1400 },
    { id: 9, juego: "Assetto Corsa", precio: 550 },
    { id: 10, juego: "Need for speed", precio: 350 },
    { id: 11, juego: "Payday2", precio: 400 },
    { id: 12, juego: "Resident Evil 4", precio: 500 },
    { id: 13, juego: "Resident Evil 5", precio: 750 }];

// hago uso del constructor para crear un objeto nuevo al array
const juegoNuevo = new Producto(14, prompt("Diga el juego que quiere agregar:"), prompt("Escriba el precio del juego:"));

//ingreso el dato obtenido mediante el prompt anterior y lo guardo dentro del array.
productos.push(juegoNuevo);

// creo un for que me diga todos los objetos del array en la consola.
for (const juego of productos) {
    console.log(juego.id);
    console.log(juego.juego);
    console.log(juego.precio);
}

// obtengo un dato "buscador"
let buscador = prompt("Nombre del juego que quieres buscar:");

// creo una variable donde almaceno un dato y chequeo en la misma mediante un filtro si se encuentra en el array productos
const resultado = productos.filter((element) => element.juego.includes(buscador)).map((juego) => juego.juego);
if (resultado == "") {
    //si en el resultado no encuentra nada, avisa que no se encontro coincidencias.
    alert("No hemos encontrado coincidencias.");
} else {
    //si en el resultado se encuentran datos, los imprime en un alert
    alert("Sus coincidencias son: " + resultado);
}

console.log(resultado);