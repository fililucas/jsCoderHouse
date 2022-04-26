//inicio clases

class Register {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Login {
    constructor(usernameL, passwordL) {
        this.usernameL = usernameL;
        this.passwordL = passwordL;
    }
}


// termino los constructores

let username = prompt("Usuario:");
while (username == "") {
    if (username == "") {
        username = prompt("Porfavor ingrese un usuario valido");
    } else if (username != "") {
        alert("Hola " + username)
        break;
    }
}


let password = prompt("Password:");
while (password == "") {
    if (password == "") {
        password = prompt("Porfavor ingrese una contraseña valida");
    } else if (password != "") {
        break;
    }
}

const register = new Register(username, password);

console.log(register);

alert("Has terminado el registro, a continuacion el login");



let usernameL = prompt("UsernameLogin");
if (usernameL === register.username) {
    alert("Pusiste el mismo usuario");
} else {
    alert("Te equivocaste de usuario");
}


let passwordL = prompt("PasswordLogin");
if (passwordL === register.password) {
    alert("Pusiste la misma contraseña");
} else {
    alert("Te equivocaste de contraseña");
}


const login = new Login(usernameL, passwordL);
console.log(login);




while ((login.usernameL === register.username) && (login.passwordL === register.password)) {
    console.log("vas bien");
    let menu = parseInt(prompt(`'${usernameL}' \nBienvenido al menu, por favor seleccione que operacion desea realizar.\nTipee la respuesta por favor.(en numeros)\n1) Cambiar usuario. \n2) Cambiar contraseña.`));

    switch (menu) {
        case (1):
            usernameL = prompt(`'${usernameL}' por favor, introduzca el nuevo usuario:`);
            alert(`El usuario "${usernameL}" fue actualizado satisfactoriamente.`);
            break;
        case (2):
            passwordL = prompt("Por favor, introduzca la nueva contraseña");
            alert(`El usuario; "${usernameL}" \nContraseña; "${passwordL}" \nFue actualizado satisfactoriamente.`);
            break;

        default:
            alert("Marque una opción valida, por favor.");
            break;
    }
}


/* let menu = parseInt(prompt(`'${loginUser}' \nBienvenido al menu, por favor seleccione que operacion desea realizar.\nTipee la respuesta por favor.(en numeros)\n1) Cambiar usuario. \n2) Cambiar contraseña. \n3) Salir. `));
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
} */

