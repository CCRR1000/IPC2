
const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

function registrar() {

    if (password.value == password2.value) {

        console.log("NUEVO USUARIO REGISTRADO");
        console.log("------------------------");
        console.log("Usuario: " + usuario.value);
        console.log("Correo: " + correo.value);
        alert("El usuario se ha registrado exitosamente");

    } else {
        alert("Las contraseñas no coinciden");
    }

    
}