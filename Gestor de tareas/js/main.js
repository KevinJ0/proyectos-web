

  //variables
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");

  //funciones
  var agregarTarea = function() {
    alert("si1");
  };
  var comprobarInput = function() {
    alert("si2");
  };
  var eliminarTarea = function() {
    alert("si3");
  };

  //Eventos

  //Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  //Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  //Agregar evento borrar
  for (var i = 0; 0 < lista.children.length-1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
