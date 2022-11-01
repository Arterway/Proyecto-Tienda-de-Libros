const contadorCarrito = document.getElementById("contador__carrito");


const btn__finalizar = document.querySelector("#btn__finalizar");
btn__finalizar.addEventListener("click", () =>{swal("Gracias por realizar tu compra!")});
btn__finalizar.addEventListener("click", () =>{contenedorCompras.innerHTML = "<div class='compra__vacio'><h1>Gracias Por su Compra!</h1></div>"});

const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));

function eliminarDelCarrito(id){
  const resultado = carritoRecuperado.find(libro => libro.id == id);
    carritoRecuperado.pop(resultado); 
    localStorage.setItem("carrito", JSON.stringify(carritoRecuperado));
}

function eventosEnBotones(){
  carritoRecuperado.forEach(compra => {
    const btn = document.querySelector(`#btn${compra.id}`);
    btn.addEventListener("click", () => eliminarDelCarrito(`${compra.id}`));
    btn.addEventListener("click", () => contadorDelCarrito());
    btn.addEventListener("click", () => {swal("Tu compra", "Ha sido eliminada del carrito", "error")});
  });
}
eventosEnBotones();
// CONTADOR CARRITO DE COMPRA
function contadorDelCarrito(){
  contadorCarrito.innerHTML = JSON.parse(localStorage.getItem("carrito")).length;
}
contadorDelCarrito();