let usuarios = "pepe";


let validacionUsuario = prompt("Registre un usuario valido");
if (validacionUsuario == usuarios) {
    validacionUsuario = prompt(`El nombre de usuario "${usuarios}" ya se encuentra registrado, por favor ingrese otro nombre.`);
}


let login = validacionUsuario;


let contrasena = parseInt(prompt(`Registre una contraseña para el usuario "${login}", de forma numerica.`));



switch (login) {
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
}








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