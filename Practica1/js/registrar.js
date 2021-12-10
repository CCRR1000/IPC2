
const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function registrar() {
    console.log("NUEVO USUARIO REGISTRADO");
    console.log("------------------------");
    console.log("Usuario: " + usuario.value);
    console.log("Correo: " + correo.value);
    console.log("Contraseña: " + password.value);
    alert("El usuario se ha registrado exitosamente");
}