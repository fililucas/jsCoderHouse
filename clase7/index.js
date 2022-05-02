/* function mayorQue(n) {
    return (m) => m > n;
}

let mayorQueonce = mayorQue(11);


console.log(mayorQueonce(12)); */



/* function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    }
}

let suma = asignarOperacion("sumar");
console.log(suma(4,3));

let resta = asignarOperacion("restar");
console.log(resta(10,5)); */

/* let total = 0

function acumular(num) {
    total += num
}

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el);
    }
}


porCadaUno([1,2,3,4,5], acumular);
console.log(total); */

/* const duplicado = [];
let numeros = [1,2,3,4,5,6];

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el);
    }
}


porCadaUno(numeros, (el) => {
    duplicado.push(el * 2);
})


console.log(duplicado); */


/* const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((elem) => {
    console.log(elem);
}) */

/* let curso = prompt("Ingrese nombre del curso");
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const result = cursos.find((elemto) => elemto.nombre === curso);
console.log(result); */




/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
];

const resultado = cursos.filter((element) => element.precio > 15000);
const resultado2 = cursos.filter((element) => element.nombre.includes('JS'))

console.log(resultado2); */


/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
];

console.log(cursos.some((element) => element.nombre === "Desarrollo")); */



/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
];


const nombres = cursos.map(elem => elem.nombre);
console.log(nombres); */

/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]; */


/* const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio + 100
    }
})

console.log(actualizado) */


/* const numeros = [1,2,3,4,5,6];
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(total); */

/* const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ] */


/* const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
}) */



/* console.log( Math.max(55, 13, 0, -25, 93, 4) ) 
console.log( Math.min(55, 13, 0, -25, 93, 4) ) */



/* const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3 */



/* console.log(Math.random());
console.log( Math.random() * 50)
console.log( Math.random() * 100) */


/* const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() ) */



/* const casiNavidad = new Date(2021, 11, 24, 23, 59, 59)
console.log(new Date(2020, 1, 15) );

console.log(casiNavidad);
console.log(casiNavidad.toString()); */


/* const casiNavidad = new Date("December 23, 2021 23:59:59")
console.log(casiNavidad.toString()); */

/* const hoy = new Date("December 17, 2021");

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */


/* const hoy = new Date("December 17, 2021");

console.log( hoy.toDateString() );
console.log( hoy.toLocaleString() );
console.log( hoy.toLocaleDateString() );
console.log( hoy.toTimeString() ); */


/* const navidad = new Date("December 25, 2021")
const hoy = new Date("December 17, 2021")

console.log( navidad - hoy ) // 691200000

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia) // 8 */



const inicio = new Date();

for (let i = 0; i < 1000; i++){
    console.log("veces", i);
}

const final = new Date();


console.log("El tiempo de duración es: ", final - inicio);