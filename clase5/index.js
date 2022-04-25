/* 
estructura de los objetos
{clave1: valor1, clave2: valor2, ...};



y de otra forma:


let persona = {
    nombre: "andres",
    edad: 20, 
    direccion: "Av. San Peters Burgo."
};
*/


/* let persona = { nombre: "andres", edad: 20, direccion: "Av. San Peters Burgo." }; */


/* console.log(persona.nombre); 
console.log(persona["nombre"]);  */

/* persona["nombre"] = "manuela";
persona.edad = 25;
persona.estudiante = true;
persona["dni"] = 1.234;




console.log(persona); */



/* constructor es una especie de funcion que contruye el objeto */
/* cuando se hace un contructor va la inicial con mayuscula */


/* function Persona(nombre, edad, direccion){
    this.pepe = nombre;
    this.edad = edad;
    this.direccion = direccion;
}


/* const persona1 = new Persona("andres", 20, "Av.San Peters Burgo."); */
/* const persona2 = new Persona("mariano", 22, "Chacabuco"); */

/* console.log(persona1);
console.log(persona2.nombre); */

/* let persona1 = { nombre: "andres", edad: 20, direccion: "Av. San Peters Burgo." };


for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
} */


/* function Persona(nombre, edad, direccion){
    this.pepe = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.hablar = function (params) {
        console.log("pepe");
    }
} */

/* class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}

const persona1 = new Persona("a", 1, "cra");


console.log(persona1); */



/* class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto("Pan", 1200);
const producto2 = new Producto("Cafe", 1300);


console.log(producto1.vendido);

producto1.vender();

console.log(producto1.vendido); */


/* class Perritos{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
    }
//esto es un metodo
    correr(){
        console.log("estoy corriendo");
    }
    ladrar(){
        console.log(this.nombre + " esta ladrando");
    }
}



let nombre = prompt("Declare el nombre");
let edad = prompt("Declare la edad");
let patas = prompt("¿Cuantas patas tiene " + nombre);



const perrito1 = new Perritos(nombre, edad);

console.log(perrito1);

alert(`${perrito1.nombre}\n${perrito1.edad}\n${perrito1.patas}`);
perrito1.ladrar();
perrito1.correr(); */



/* const perrito1 = new Perritos("peter parker", 3);
const perrito2 = new Perritos("pepe", 4); */


/* console.log(perrito1.nombre);
perrito1.correr();
perrito1.ladrar(); */