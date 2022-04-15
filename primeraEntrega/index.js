let usuariosRegistrados = "pepe";
let usuariosRegistrados2 = "ramon";

let usuario = prompt("Bienvenido al sistema de registro.\nPor favor ingrese un nombre de usuario valido:");


while (usuario) {
    if ((usuario == usuariosRegistrados) || (usuario == usuariosRegistrados2)) {
        usuario = prompt("No se pudo registrar ese nombre de usuario, se encuentra en uso. \nPor favor, ingrese otro nombre de usuario:");
        break;
    }
    break;
}


let contrasena = prompt(`Usuario: ${usuario}\nIngrese una contraseña valida. \n(se puede hacer uso de letras, numeros, simbolos.)`);
if (contrasena == "") {
    contrasena = prompt("ERROR; ingrese nuevamente una contraseña distinta.");
}


alert("Finalizado el registro, a continuación podrá ingresar los datos registrados para hacer el ingreso de la sesion.");

login = usuario + contrasena;


switch (login) {
    case (usuario + contrasena):
        let loginUser = prompt("Inicio de sesion, escriba su usuario:");
        let loginContrasena = prompt(`USUARIO:${loginUser} \nContraseña:`);
        if ((loginUser + loginContrasena) == (login)) {
            alert(`Iniciaste sesion de forma satisfactoria ${loginUser}.`);
        } else {
            alert("No has podido ingresar al sistema de forma correcta, por favor intentelo nuevamente.");
            break;
        }
        let menu = parseInt(prompt(`'${loginUser}' \nBienvenido al menu, por favor seleccione que operacion desea realizar.\nTipee la respuesta por favor.(en numeros)\n1) Cambiar usuario. \n2) Cambiar contraseña. \n3) Salir. `));
        if (menu == 1) {
            let userCambio = prompt(`'${loginUser}' por favor, introduzca el nuevo usuario:`);
            loginUser = userCambio;
            alert(`El usuario "${loginUser}" fue actualizado satisfactoriamente.`);
        } else if (menu == 2) {
            let contrasenaNueva = prompt("Por favor, introduzca la nueva contraseña");
            alert(`El usuario; "${loginUser}" \nContraseña; "${contrasenaNueva}" \nFue actualizado satisfactoriamente.`);
        } else if (menu == 3) {
            alert(`Gracias por utilizar nuestro sistema de login hasta pronto ${loginUser}.`);
        } else if (menu = ! "") {
            alert("ERROR; escriba un valor valido.");
        }

        break;

    default:
        alert("Algo salio mal");
        break;
}