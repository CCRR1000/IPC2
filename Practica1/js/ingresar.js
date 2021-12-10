
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cui = document.getElementById("cui");
const departamento = document.getElementById("departamento");

function ingresar() {
    console.log("NUEVO CLIENTE");
    console.log("-------------");
    console.log("Nombre: " + nombre.value);
    console.log("Apellido: " + apellido.value);
    console.log("CUI: " + cui.value);
    console.log("Departamento: " + departamento.value);
    alert("Cliente ingresado exitosamente");
}