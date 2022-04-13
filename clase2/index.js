/* 
estructura del condicional if
if(condicion){
    operaciones a realizar
} */

/* let verdad = true;
let falso = false;

if(verdad){
    console.log("verdadero");
} */


/* if(3 == 3){
    console.log("entramos")
}
*/

/* <> */



/* if(3 == 2){
    console.log("es igual");
}else{
    console.log("no es igual");
}

console.log("final") */

/* CONTROL DE FLUJO 
let respuesta = prompt("Ingresar numero");

if(respuesta == "5"){
    alert("la entrada es 5");
}else{
    alert("la entrada no es igual a 5");
}

*/


/* let precio = 100.5;

if (precio < 20) {
    console.log("El precio es menor que 20");
}
else if (precio < 50) {
    console.log("El precio es menor que 50");
}
else if (precio < 100) {
    console.log("El precio es menor que 100");
}
else {
    console.log("El precio es mayor que 100");
} */




/* let valor = 4 > 5;
console.log(valor);
 */


/* let nombre = "ana";

if(nombre == "Ana"){
    console.log("Es lo mismo");
}else {
    console.log("No es lo mismo");
} */

/* 
te voy a invitar al desayuno o al almuerzo
*/
/* 
el operador || solo es falso cuando ambas sentencias sean falsas
el operador && es falso cuando almenos una sentencia es falso
*/
/* let valor1 = true || false;
let valor2= false || false;
let valor3= true || true;

console.log(valor1);
console.log(valor2);
console.log(valor3);



let valor4 = false && true;
let valor5 = true && true;

console.log(valor4);
console.log(valor5); */



/* let nombre = prompt("Ingrese un nombre");
let apellido = prompt("Ingrese un apellido");

// nombre es igual a andres o nombre es igual a camila, apellido no este en blanco
if(((nombre === "andres") || (nombre === "camila")) && (apellido != "")){
    alert("Ingresaste un nombre valido");
}else{
    alert("Ingresaste algo incorrecto");
} */

/* let menu = prompt("Ingrese un numero para realizar la operacion.\n1) Suma \n2) Resta");
if(menu == 1){
    let primerNumeroS = prompt("Ingrese el primer numero a sumar:")
    let segundoNumeroS = prompt("Ingrese el segundo numero a sumar:")
    let sumaResultado = parseFloat(primerNumeroS) + parseFloat(segundoNumeroS);
    alert(`El resultado de la resta entre ${primerNumeroS} y ${segundoNumeroS} fue: ${sumaResultado}`);
}
else if(menu == 2){
    let primerNumeroR = prompt("Ingrese el primer numero a restar:")
    let segundoNumeroR = prompt("Ingrese el segundo numero a restar:")
    let restaResultado = parseFloat(primerNumeroR) - parseFloat(segundoNumeroR);
    alert(`El resultado de la resta entre ${primerNumeroR} y ${segundoNumeroR} fue: ${restaResultado}`);
}
else if (menu =! ""){
    alert("No pudimos encontrar la operacion.")
}
 */



let menu = prompt("Ingrese un numero para realizar la operacion.\n1) Suma \n2) Resta \n3) Multiplicacion \n4) Division");
if(menu == 1){
    let primerNumero = parseFloat(prompt("Ingrese el primer numero:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo numero:"));
    alert(`${primerNumero} + ${segundoNumero} = ${primerNumero + segundoNumero}`);
}
else if(menu == 2){
    let primerNumero = parseFloat(prompt("Ingrese el primer numero:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo numero:"));
    alert(`${primerNumero} - ${segundoNumero} = ${primerNumero - segundoNumero}`);
}
else if(menu == 3){
    let primerNumero = parseFloat(prompt("Ingrese el primer numero:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo numero:"));
    alert(`${primerNumero} * ${segundoNumero} = ${primerNumero * segundoNumero}`);
}
else if(menu == 4){
    let primerNumero = parseFloat(prompt("Ingrese el primer numero:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo numero:"));
    alert(`${primerNumero} / ${segundoNumero} = ${primerNumero / segundoNumero}`);
}
else{
    alert("No entendi la operacion.");
}


