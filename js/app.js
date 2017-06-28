var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
var x = prompt("Nombre de la Estudiante");
var y = prompt("Porcentaje Técnico");
var z = prompt("porcentaje Habilidades Socio Económicas");
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
var objeto = {
  Nombre: x,
  PuntosTecnicos: y,
  PuntosHSE: z
};
// TO DO: Retornar el estudiante recientemente creado
 console.log(estudiantes);
 estudiantes.push(objeto);
return objeto;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.Nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.PuntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.PuntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
// console.log(estudiantes);
    var resultado = "";
    for(i in estudiantes){
      resultado += "<div class='row'>";
      resultado += "<div class='col m12'>";
      resultado += "<div class='card blue-grey darken-1'>";
      resultado += "<div class='card-content white-text'>";
      resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].Nombre + "</p>";
      resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].PuntosTecnicos + "</p>";
      resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].PuntosHSE + "</p>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
    }
    return resultado;  // Retornar el template de todos los estudiantes
}

function buscar(nombre, estudiantes) {
  var estudiant = estudiantes.filter(function(num){return nombre == num.Nombre})
  return estudiant;
// TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
// for(i in estudiant){
//   var resultado = estudiant[i].Nombre + " " + estudiant[i].PuntosTecnicos + " " + estudiant[i].PuntosHSE + " ";
// }
 // Retornar el objeto del estudiante buscado
   // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
}


function topTecnico(estudiantes) {

    return estudiantes.sort(function(a,b){
      return b.PuntosTecnicos-a.PuntosTecnicos;
    });

    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function(a,b){
      return b.PuntosHSE-a.PuntosHSE;
    });
}
