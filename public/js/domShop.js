let contenedorCompras = document.querySelector(".contenedor__compra");
function recuperarCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
      carrito.forEach(compra => {
        let card__compra = `<div class="compra">
                              <img src="${compra.portada}" alt="Portada imagen.">
                              <div class="info__compra">
                                <p id="titulo__compra">${compra.titulo}</p>
                                <p id="autor__compra"><a>${compra.autor}</a></p>
                              </div>
                              <p id="precio__compra">${compra.precio}</p>
                              <button class="eliminar__compra" id="btn${compra.id}"><img src="svg/bx-x.svg" alt="eliminar"></button>
                            </div>`
                            contenedorCompras.innerHTML += card__compra;
      });
  }
  recuperarCarrito();

  