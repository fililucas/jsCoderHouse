/* let usuarios = "pepe";


let validacionUsuario = prompt("Registre un usuario valido");
if (validacionUsuario == usuarios) {
    validacionUsuario = prompt(`El nombre de usuario "${usuarios}" ya se encuentra registrado, por favor ingrese otro nombre.`);
} */


/* let login = validacionUsuario;
 */
/* 
let contrasena = parseInt(prompt(`Registre una contraseña para el usuario "${login}", de forma numerica.`));
 */


/* switch (login) {
    case (login):
        let user = login;
        let logincontrasena = parseInt(prompt("Ingrese la contraseña"));
        if (logincontrasena == contrasena) {
            let menu = parseInt(prompt(`Un placer verte nuevamente "${login}" \nBienvenido al menu, por favor seleccione que quiere hacer.\nEscriba la respuesta por favor.(numero)\n1) Cambiar usuario \n2) Cambiar contraseña \n3) Salir. `));
            if (menu == 1) {
                let user = prompt("Por favor, introduzca el nuevo usuario");
                alert(`El usuario "${user}" fue actualizado satisfactoriamente.`);
            } else if (menu == 2) {
                let contrasenaNueva = prompt("Por favor, introduzca la nueva contraseña");
                alert(`El usuario; "${user}" \nContraseña; "${contrasenaNueva}" \nFue actualizado satisfactoriamente.`);
            } else if (menu == 3) {
                alert("Gracias por utilizar nuestro sistema de login.");
            } else if (menu = ! "") {
                alert("Por favor, escribe algun valor valido.")
            }
        } else {
            alert("La contraseña es incorrecta.");
        }
        break;

    default:
        alert("Ha ocurrido un error.");
        break;
} */

/* let usuarios = "pepe";



let usuario = prompt("Registre un usuario valido"); */
/* if (usuario == usuarios) {
    usuario = prompt(`El nombre de usuario "${usuarios}" ya se encuentra registrado, por favor ingrese otro nombre.`);
}else if(usuario == usuarios){
    alert("No podras crear la cuenta.")
}else if(usuario =! ""){
    alert("No se permite no ingresar nombre")
} */

/* while (usuario) {
    if (usuario == usuarios) {
        alert(`El nombre de usuario "${usuarios}" ya se encuentra registrado, por favor ingrese otro nombre.`);
        break;
    }
} */






/* let contrasena = parseInt(prompt(`Registre una contraseña para la cuenta "${usuario}", de forma numerica.`));
if (contrasena = ! "") {
    contrasenaReintento = parseInt(prompt(`Escriba una contraseña valida, utilizando los numeros.`));
} else if (contrasenaReintento = ! "") {
    alert(`La contraseña no se pudo crear, por favor reintentelo.`);
} else {
    alert("se creo");
} */








/* while (usuarios) {
    if (usuarios != validacionUsuario){
        console.log("es valido el usuario");
        break;
    }else{
        console.log("no es valido el usuario");
        break;
    }
} */







/* crearUser = "admin"; */
/* contrasena = 1234;

let login = prompt("Introduzca el nombre de usuario");

switch (login) {
    case ("admin"):
        let logincontrasena = parseInt(prompt("Ingrese la contraseña"));
        if(logincontrasena == contrasena){
            let menu = parseInt(prompt(`Un placer verte nuevamente "${login}" \nBienvenido al menu, por favor seleccione que quiere hacer.\nEscriba la respuesta por favor.(numero)\n1) Cambiar usuario \n2) Cambiar contraseña \n3) Salir. `));
            if(menu == 1){
                let user = prompt("Por favor, introduzca el nuevo usuario");
                alert(`El usuario "${user}" fue actualizado satisfactoriamente.`);
            }else if(menu == 2){
                let contrasenaNueva = prompt("Por favor, introduzca la nueva contraseña");
                alert(`El usuario; "${user}" \nContraseña; "${contrasenaNueva}" \nFue actualizado satisfactoriamente.`);
            }else if(menu == 3){
                alert("Gracias por utilizar nuestro sistema de login.");
            }
        }else{
            alert("La contraseña es incorrecta.");
        }
        break;

    default:
        alert("Ha ocurrido un error.");
        break;
} */





let usuariosRegistrados = "pepe";
let usuariosRegistrados2 = "ramon";

let usuario = prompt("Ingrese un nombre de usuario valido.");




while (usuario) {
    if ((usuario == usuariosRegistrados) || (usuario == usuariosRegistrados2)) {
        alert("No se pudo registrar ese nombre, ya se encuentra en la base de datos.");
        break;
    } else {
        alert("Te registraste bien");
        break;
    }
}


let contrasena = prompt("Ingrese una contraseña valida. \n(se puede hacer uso de letras, numeros, etc..)");
if (contrasena == "") {
    contrasena = prompt("Por favor, ingrese nuevamente su contraseña, escriba caracteres");
} else {
    alert("Su contraseña fue exitosa");
}

alert("A continuación podra hacer inicio se sesion con el usuario y contraseña registrados.")

login = usuario + contrasena;




switch (login) {
    case (usuario + contrasena):
        let loginUser = prompt("Por favor, inicie sesion con su usuario:");
        let loginContrasena = prompt("Por favor, escriba su contraseña:");
        if((loginUser + loginContrasena) == (login)){
            alert("Iniciaste sesion de forma correcta");
        }else{
            alert("No has podido ingresar al sistema de forma correcta, por favor intentelo nuevamente.");
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
