let usuario = "admin";
let contrasena = 1234;
/* 
let login = prompt("Introduzca el nombre de usuario"); 
do {
    alert("a");
} while (condition);
 */


/* do{
    let loginU = prompt("Ingrese el usuario");
    alert(usuario)
} while(loginU != usuario){
    alert("Ingresaste " + loginU)
}; */

let entrada = prompt("Ingresar el username");

while (entrada =! usuario) {
    alert("Ingresaste " + usuario);

    entrada = prompt("Ingresar un dato");
}


