const gridLibros = document.querySelector(".contenedor__libros");

function cargarLibros(array){
  let card__libro = "";
  gridLibros.innerHTML = "";
  array.forEach(libro => {
    card__libro =`<div class="libro">
                    <img src="${libro.portada}" alt="Portada del Libro">
                    <span id = "titulo__libro">${libro.titulo}</span>
                    <span id = "autor__libro"><a href="#"> ${libro.autor} </a></span>
                    <span id = "genero__libro">${libro.genero}</span>
                    <span id = "formato__libro">${libro.formato}</span>
                    <div class="precio-comprar__libro">
                      <span id="precio__libro">${libro.precio}€</span>
                      <button class="comprar__libro" id="btn${libro.id}">Comprar</button>
                    </div>
                  </div>`
                  gridLibros.innerHTML += card__libro;
  })
}
cargarLibros(LIBROS);