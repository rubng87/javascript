// Pon aquí tu nombre : Francisco Rubén Gallego Flores

// MINI BIBLIOTECA

const biblioteca = [
  {
    titulo: "Guerra y Paz",
    autor: "Lev Tolstoi",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Anna Karenina",
    autor: "Lev Tolstoi",
    categoria: "drama",
    idioma: "català",
    epoca: "s.XIX",
  },
  {
    titulo: "L'Odisea",
    autor: "Homero",
    categoria: "drama",
    idioma: "català",
    epoca: "clásica",
  },
  {
    titulo: "Antologia de la poesia medieval catalàna",
    autor: "Diversos",
    categoria: "poesia",
    idioma: "català",
    epoca: "clásica",
  },
  {
    titulo: "La Ilíada",
    autor: "Homero",
    categoria: "drama",
    idioma: "español",
    epoca: "clásica",
  },
  {
    titulo: "Poema del Mio Cid",
    autor: "Anónimo",
    categoria: "poesia",
    idioma: "español",
    epoca: "clásica",
  },
  {
    titulo: "Veinte mil leguas de viaje submarino",
    autor: "Jules Verne",
    categoria: "aventuras",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "De la Terra a la Lluna",
    autor: "Jules Verne",
    categoria: "aventuras",
    idioma: "català",
    epoca: "s.XIX",
  },
  {
    titulo: "Cinco semanas en globo",
    autor: "Jules Verne",
    categoria: "aventuras",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Robinson Crusoe",
    autor: "Daniel Defoe",
    categoria: "aventuras",
    idioma: "català",
    epoca: "clásica",
  },
  {
    titulo: "Germinal",
    autor: "Émile Zola",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Notre Dame de Paris",
    autor: "Victor Hugo",
    categoria: "drama",
    idioma: "català",
    epoca: "s.XIX",
  },
  {
    titulo: "Los Miserables",
    autor: "Victor Hugo",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Yo, robot",
    autor: "Isaac Asimov",
    categoria: "ciencia-ficción",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Fundació",
    autor: "Isaac Asimov",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "Ciberiada",
    autor: "Stanislaw Lem",
    categoria: "ciencia-ficción",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Solaris",
    autor: "Stanislaw Lem",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "El hombre bicentenario",
    autor: "Isaac Asimov",
    categoria: "ciencia-ficción",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Tokio Blues",
    autor: "Haruki Murakami",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Romancero Gitano",
    autor: "Federico García Lorca",
    categoria: "poesia",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Los aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    categoria: "misterio",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Rebelió a la granja",
    autor: "George Orwell",
    categoria: "drama",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "La Divina Comedia",
    autor: "Dante Alighieri",
    categoria: "drama",
    idioma: "español",
    epoca: "clásica",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "Cròniques Marcianes",
    autor: "Ray Bradbury",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
];

// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres

let ejercicio1 = document.getElementById("listaLibros"); // Selecciona el elemento HTML con el id "listaLibros" y lo asigna a la variable ejercicio1

mostrarListaLibros();

function mostrarListaLibros() {
  biblioteca.sort((a, b) => {
    // Ordenamos el array biblioteca por el título de los libros en orden alfabético.
    return a.titulo.localeCompare(b.titulo, "es-ES", { numeric: true });
  });

  let html1 = "<ol>"; // Lista ordenada con numeros

  // Recorre cada libro en la biblioteca y agrega un elemento de lista HTML con el título del libro
  biblioteca.forEach((libro) => {
    html1 += `<li>${libro.titulo}</li>`;
  });

  html1 += "</ol>"; // Cerramos lista despues de agregar todos los elementos de lista
  listaLibros.innerHTML = html1; // Asigna el contenido HTML de la variable html1 al elemento HTML con el id "listaLibros"
}

// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css

let formSeleccion = document.getElementById("form-filtrado"); // Selecciona el formulario HTML con el id "form-filtrado" y lo asigna a la variable formSeleccion
let radioCategoria = document.getElementsByName("categoria"); // Obtenemos una colección de todos los elementos "categoria"
let radioIdioma = document.getElementsByName("idioma"); // Obtenemos una colección de todos los elementos "idioma"
let radioEpoca = document.getElementsByName("epoca"); // Obtenemos una colección de todos los elementos "epoca"
let salidaFiltrada = document.getElementById("salidaFiltrada"); // Selecciona el elemento HTML con el id "salidaFiltrada" y lo asigna a la variable salidaFiltrada

formSeleccion.addEventListener("change", (e) => { // Agrega un evento de escucha al formulario "form-filtrado" que se activa cuando hay un cambio
  salidaFiltrada.innerHTML = "";
  e.preventDefault(); // Evita que el formulario se envíe al servidor al cambiar

  let categoria = "";
  for (let i = 0; i < radioCategoria.length; i++) { // Itera sobre los radio buttons de la categoría para encontrar el que está seleccionado y guarda su valor en la variable categoria
    if (radioCategoria[i].checked) {
      categoria = radioCategoria[i].value;
      break;
    }
  }

  let idioma = "";
  for (let i = 0; i < radioIdioma.length; i++) { // Itera sobre los radio buttons de la categoría para encontrar el que está seleccionado y guarda su valor en la variable idioma
    if (radioIdioma[i].checked) {
      idioma = radioIdioma[i].value;
      break;
    }
  }

  let epoca = "";
  for (let i = 0; i < radioEpoca.length; i++) { // Itera sobre los radio buttons de la categoría para encontrar el que está seleccionado y guarda su valor en la variable epoca
    if (radioEpoca[i].checked) {
      epoca = radioEpoca[i].value;
      break;
    }
  }

  let respuestaHTML = "<p>"; //  para almacenar la información cuando filtremos

  biblioteca.forEach((libro) => {
    if ( // Verificamos si las características del libro coinciden con las seleccionadas en el formulario
      libro.categoria == categoria &&
      libro.idioma == idioma &&
      libro.epoca == epoca
    ) {
      respuestaHTML += `<p><span class="autor">${libro.autor}</span>:<span class="obra">${libro.titulo}</span> (${libro.categoria}), ${libro.idioma}</p>`; // Construye una cadena HTML con la información del libro que coincide con lo que hemos seleccionado
    }
  });
  respuestaHTML += "</p>";

  if (respuestaHTML === "<p></p>") { // Si no se encontraron libros que coincidan con los criterios, aparecera la frase "No hay obra con esas características"
    respuestaHTML = "No hay obra con estas características";
  }

  salidaFiltrada.innerHTML = respuestaHTML;  // Actualiza el contenido de salidaFiltrada con la respuestaHTML
});



// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX)

let ejercicio3 = document.getElementById("salidaAutor"); // Selecciona el elemento HTML con el id "salidaAutor" y lo asigna a la variable ejercicio3
let formAutor = document.getElementById("form-autor"); // Selecciona el formulario HTML con el id "form-autor" y lo asigna a la variable formAutor

formAutor.addEventListener("submit", (e) => { // Agrega un evento de escucha al formulario "form-autor" que se activa cuando se envía (se hace clic en el botón "Buscar" dentro del formulario)
  e.preventDefault();
  let respuestaHTML = "";

  let respuestaUsuario = formAutor[0].value.toLocaleLowerCase(); // Obtiene la respuesta del usuario del primer campo de entrada del formulario y la convierte a minúsculas
  if (respuestaUsuario.trim() == "") { // con el trim miramos si la respuesta del usuario está vacía o solo contiene espacios en blanco
    respuestaHTML = "No se aceptan datos sin contenido"; // mensaje de error a respuestaHTML
    ejercicio3.innerHTML = respuestaHTML;
    return;
  }

  biblioteca.forEach((libro) => { // Itera sobre cada libro en la biblioteca
    if (libro.autor.toLocaleLowerCase().includes(respuestaUsuario)) { // Verifica si el nombre del autor del libro incluye la respuesta del usuario (ignorando mayúsculas y minúsculas)
      respuestaHTML += `<p><span class="autor">${libro.autor}</span>:<span class="obra">${libro.titulo}</span> (${libro.categoria}, idioma: ${libro.idioma}, época : ${libro.epoca}) </p>`; // Si coincide, agrega una cadena HTML con la información del libro que coincide con el autor buscado a respuestaHTML 
    }
  });
  if (respuestaHTML == "") { // Verifica si no se encontraron libros que coincidan con el autor buscado
    respuestaHTML = "No hay obra con estas características";
  }
  ejercicio3.innerHTML = respuestaHTML; // Inyectamos el contenido de ejercicio3 con la respuestaHTML
});





// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1

let incluirObra = document.getElementById("incluirObra"); // Selecciona el formulario HTML con el id "incluirObra" y lo asigna a la variable incluirObra

incluirObra.addEventListener("submit", (e) => { // Agrega un evento de escucha al formulario "incluirObra" que se activa cuando se envía (se hace clic en el botón "Incluir obra" dentro del formulario)
  e.preventDefault(); // Evita que el formulario se envíe al servidor

  let autor = incluirObra[0].value.toLocaleLowerCase(); // Obtiene los valores de los campos de entrada del formulario y los convierte a minúsculas
  let titulo = incluirObra[1].value.toLocaleLowerCase();
  let categoria = incluirObra[2].value.toLocaleLowerCase();
  let idioma = incluirObra[3].value.toLocaleLowerCase();
  let epoca = incluirObra[4].value.toLocaleLowerCase();

  let miObra = { // Creamos un objeto miObra con los valores
    titulo: titulo,
    autor: autor,
    categoria: categoria,
    idioma: idioma,
    epoca: epoca,
  };

  
  biblioteca.push(miObra); // Agrega el objeto miObra al final del array biblioteca

  localStorage.setItem("biblioteca", JSON.stringify(biblioteca)); // Guarda la biblioteca actualizada en el almacenamiento local del navegador, convirtiéndola a formato JSON

  mostrarListaLibros(); // Llama a la función mostrarListaLibros para actualizar la lista de libros en la interfaz
  
});



// ==========================================================================================================
// EJERCICIO 5
//  * Añadir un campo "apellido" para separarlo del campo "nombre", actualmente juntos en la colección de obras.
//    Utilizar ese campo apellido en el ejercicio 3 (para la búsqueda) y en el ejercicio 4 (para la inclusión de más obras).
//    La salida por pantalla en el ejercicio 3 sería así, por ejemplo:
//    Asimov, Isaac : Yo, robot (ciencia-ficción, idioma : español, época : s.XX)
//    Los autores se mostrarán en orden alfabético descendente (de la A a la Z) según su apellido



// function mostrarListaLibrosOrdenadosPorApellido() {
//   biblioteca.sort((a, b) => { // Ordenar alfabéticamente por apellido del autor en orden descendente
    
//     return b.apellido.localeCompare(a.apellido);
//   });

//   let html = "<ol>"; 

  
//   biblioteca.forEach((libro) => {
//     html += `<li>${libro.apellido}, ${libro.autor}: ${libro.titulo}</li>`;
//   });

//   html += "</ol>"; 
//   listaLibros.innerHTML = html; 
// }




// incluirObra.addEventListener("submit", (e) => { // Modificar el evento para agregar apellido
//   e.preventDefault();

//   let nombre = incluirObra[0].value.toLocaleLowerCase().trim(); 
//   let apellido = incluirObra[1].value.toLocaleLowerCase().trim(); 
//   let titulo = incluirObra[2].value.toLocaleLowerCase().trim();
//   let categoria = incluirObra[3].value.toLocaleLowerCase().trim();
//   let idioma = incluirObra[4].value.toLocaleLowerCase().trim();
//   let epoca = incluirObra[5].value.toLocaleLowerCase().trim();

//   let miObra = {
//     titulo: titulo,
//     autor: nombre,
//     apellido: apellido, // Agregar el campo "apellido" al objeto miObra
//     categoria: categoria,
//     idioma: idioma,
//     epoca: epoca,
//   };

//   biblioteca.push(miObra);
//   localStorage.setItem("biblioteca", JSON.stringify(biblioteca));

//   mostrarListaLibrosOrdenadosPorApellido(); 
// });




// No me dió tiempo deacabar el 5 pero se intento, la próxima mejor.... el ejerccicio 5 lo comento porque si no no me funcioanaba bien al agregar .