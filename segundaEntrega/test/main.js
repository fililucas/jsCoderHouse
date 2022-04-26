/* FUNCION DE REGISTRO */

function Register(username, password) {
    this.username = username;
    this.password = password;
}

/* FUNCION DE LOGIN */

function Login(username, password) {
    this.username = username;
    this.password = password;
}

/* FINAL DE LAS FUNCIONES */



//declaro la constante register y hago uso de la funcion Register
const register = new Register(prompt("Registre su usuario"), prompt("Registre su contraseña"));

while (register.username == "") {
    if (register.username == "") {
        register.username = prompt("Porfavor ingrese un usuario valido");
    } else if (register.username != "") {
        alert("Hola " + register.username)
        break;
    }
}

while (register.password == "") {
    if (register.password == "") {
        register.password = prompt("Porfavor ingrese una contraseña valida");
    } else if (register.password != "") {
        break;
    }
}


//declaro la constante login y hago uso de la funcion Login
const login = new Login(prompt("Declare su usuario"), prompt("Declare su contraseña"));



console.log(login);
console.log(register);

let username = login.username;
let password = login.password;

while ((login.username === register.username) && (login.password === register.password)) {
    console.log("vas bien");
    let menu = parseInt(prompt(`'${username}' \nBienvenido al menu, por favor seleccione que operacion desea realizar.\nTipee la respuesta por favor.(en numeros)\n1) Cambiar usuario. \n2) Cambiar contraseña. \n3) Salir. `));

    switch (menu) {
        case (1):
            username = prompt(`'${username}' por favor, introduzca el nuevo usuario:`);
            alert(`El usuario "${username}" fue actualizado satisfactoriamente.`);
            break;
        case (2):
            password = prompt("Por favor, introduzca la nueva contraseña");
            alert(`El usuario; "${username}" \nContraseña; "${password}" \nFue actualizado satisfactoriamente.`);
            break;
        case (3):
            alert("Muchas gracias por salir.")
            break;

        default:
            alert("Escriba un numero que aparezca en pantalla");
            break;
    }
}