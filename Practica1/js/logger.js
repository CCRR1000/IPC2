
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");

function iniciarSesion() {
    console.log("Usuario: " + usuario.value);
    console.log("Contraseña: " + password.value);
    alert("Se ha iniciado la sesión");
}