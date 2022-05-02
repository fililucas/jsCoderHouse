/* const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ["oscar", "pedro"];


const numeros = [1, 2, 3, 4, 5, 6, 7, 2, 5];

for (let posicion = 0; posicion < numeros.length; posicion++) {
    console.log(numeros[posicion]);
} */


/* const numeros = [1, 2, 3, 4, 5, 6, 7, 2, 5];

/* console.log(numeros); */
/* numeros.push("mariano"); */
/* console.log(numeros); */


/* let nombre = prompt("Ingresa nombre"); */

//sirven para agregar datos.
/* numeros.push(nombre);
numeros.unshift(true);



//sirven para sacar datos.
numeros.shift();
numeros.pop(); */
 


/* const nombres = ['rita', 'pepe', 'jose', 'oscar', 'amanda'];

//splice elimina dando el parametro de la cantidad de datos en ()
/* nombres.splice(2,2)

console.log(nombres); */


/* console.log(nombres.join(" ")); */ 



//join me genera una cadena de texto con todos los elementos del texto separados con un string pasado en los parentesis

/* let persona = ["andres", "ruiz"];

console.log(persona.join(" ")); */



class Stock {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}


const vehiculos = [
    { id: 1, marca: "fiat", modelo: 2019},
    { id: 2, marca: "bmw", modelo: 2015},
    { id: 2, marca: "audi", modelo: 2013}]



const auto = new Stock("bmw", 2011);

console.log(vehiculos);

