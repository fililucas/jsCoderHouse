// Array simple, con datos, id para reconocer su posicion, juego, y el precio.
const productos = [
    {id: 0, juego:"Far Cry 3", precio: 600},
    {id: 1, juego:"Gta 4", precio: 1500},
    {id: 2, juego:"Gta 5", precio: 2200},
    {id: 3, juego:"Sims 3", precio: 700},
    {id: 4, juego:"Battlefield 4", precio: 1100},
    {id: 5, juego:"Smite", precio: 0},
    {id: 6, juego:"Lol", precio: 0},
    {id: 7, juego:"CSGO", precio: 0},
    {id: 8, juego:"Call of duty", precio: 1400},
    {id: 9, juego:"Assetto Corsa", precio: 550},
    {id: 10, juego:"Need for speed", precio: 350},
    {id: 11, juego:"Payday2", precio: 400},
    {id: 12, juego:"Resident Evil 4", precio: 500},
    {id: 13, juego:"Resident Evil 5", precio: 750}];


//creo el constructor de objetos para añadirlos a el array.
class Producto {
    constructor(id, juego, precio) {
        this.id = id;
        this.juego = juego;
        this.precio = parseFloat(precio);
    }
}

// hago uso del constructor para crear un objeto nuevo al array
const juegoNuevo = new Producto(14, prompt("Diga el juego que quiere agregar:"), prompt("Escriba de forma numerica el precio del juego:"));

//ingreso el dato obtenido mediante el prompt anterior y lo guardo dentro del array.
productos.push(juegoNuevo);

// creo un for que me diga todos los objetos del array en la consola.
for (const juego of productos) {
    console.log(juego.id);
    console.log(juego.juego);
    console.log(juego.precio);
}