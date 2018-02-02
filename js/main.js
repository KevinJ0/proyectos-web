//variables
var lista = document.getElementById("lista"),
  tareaInput = document.getElementById("tareaInput"),
  btnNuevaTarea = document.getElementById("btn-agregar");

//funciones
var agregarTarea = function() {

  if (comprobarInput()) {
    var tarea = tareaInput.value,
      contenido = document.createTextNode(tarea),
      nuevaTarea = document.createElement("li"),
      enlace = document.createElement("a");

    enlace.appendChild(contenido);
    enlace.setAttribute("href", "#");

    nuevaTarea.appendChild(enlace);
    lista.append(nuevaTarea);

    nuevaTarea.addEventListener("click", eliminarTarea);
    tareaInput.value = "";

  } else {
    showError();
  }

};

var comprobarInput = function() {
  if (tareaInput.value !== "")
    return true;
};

var showError = function() {
  tareaInput.className = "error";
  tareaInput.placeholder = "Debe agregar una tarea aca";
  tareaInput.focus();
}

var eliminarTarea = function(e) {
  this.parentNode.removeChild(this);
};

var cleanErrorInput = function() {
  tareaInput.className = "";
  tareaInput.placeholder = "Agrega tu tarea";
};

//Eventos

//Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//Comprobar Input
tareaInput.addEventListener("click", cleanErrorInput);

//Agregar evento borrar
for (var i = 0; 0 < lista.children.length - 1; i++) {
  lista.children[i].addEventListener("click", eliminarTarea);
}
