let usuariosRegistrados = "pepe";
let usuariosRegistrados2 = "ramon";

let usuario = prompt("Ingrese un nombre de usuario valido.");


while (usuario) {
    if ((usuario == usuariosRegistrados) || (usuario == usuariosRegistrados2)) {
        usuario = prompt("No se pudo registrar ese nombre, ya se encuentra en la base de datos. \nPor favor, ingrese otro nombre de usuario:");
        break;
    }
    break;
}


let contrasena = prompt("Ingrese una contraseña valida. \n(se puede hacer uso de letras, numeros, etc..)");
if (contrasena == "") {
    contrasena = prompt("ERROR; ingrese nuevamente su contraseña, escriba algo.");
}


alert("A continuación podra hacer inicio se sesion con el usuario y contraseña registrados.")

login = usuario + contrasena;


switch (login) {
    case (usuario + contrasena):
        let loginUser = prompt("Por favor, inicie sesion con su usuario:");
        let loginContrasena = prompt("Por favor, escriba su contraseña:");
        if ((loginUser + loginContrasena) == (login)) {
            alert("Iniciaste sesion de forma correcta");
        } else {
            alert("No has podido ingresar al sistema de forma correcta, por favor intentelo nuevamente.");
            break;
        }
        let menu = parseInt(prompt(`Un placer verte nuevamente "${loginUser}" \nBienvenido al menu, por favor seleccione que quiere hacer.\nEscriba la respuesta por favor.(numero)\n1) Cambiar usuario \n2) Cambiar contraseña \n3) Salir. `));
        if (menu == 1) {
            let userCambio = prompt("Por favor, introduzca el nuevo usuario");
            loginUser = userCambio
            alert(`El usuario "${loginUser}" fue actualizado satisfactoriamente.`);
        } else if (menu == 2) {
            let contrasenaNueva = prompt("Por favor, introduzca la nueva contraseña");
            alert(`El usuario; "${loginUser}" \nContraseña; "${contrasenaNueva}" \nFue actualizado satisfactoriamente.`);
        } else if (menu == 3) {
            alert("Gracias por utilizar nuestro sistema de login.");
        } else if (menu = ! "") {
            alert("Por favor, escribe algun valor valido.")
        }

        break;

    default:
        alert("Algo salio mal");
        break;
}