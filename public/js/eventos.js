const contadorCarrito = document.querySelector("#contador__carrito");

// BARRA DE BUSQUEDA
const inputFiltrar = document.querySelector("#buscadorInicial");
  function filtrarLibros(){
    busqueda = inputFiltrar.value.toUpperCase();
    const resultado = LIBROS.filter(libro => libro.titulo.includes(busqueda));
    resultado.length !== 0 ? cargarLibros(resultado) : cargarLibros(LIBROS);
  }
  inputFiltrar.addEventListener("keydown", filtrarLibros);

// EVENTOS BTN
function eventosEnBotones(){
  LIBROS.forEach(libro => {
    const btn = document.querySelector(`#btn${libro.id}`);
    btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
    btn.addEventListener("click", () => contadorDelCarrito());
    btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
  });
}
eventosEnBotones();

// EVENTOS CARRITO
function agregarAlCarrito(id){
  const resultado = LIBROS.find(libro => libro.id == id);
    CARRITO.push(resultado);
    localStorage.setItem("carrito", JSON.stringify(CARRITO));
}

// CONTADOR CARRITO DE COMPRA
function contadorDelCarrito(){
  contadorCarrito == 0 ? contadorDelCarrito() : contadorCarrito.innerHTML = 0;
  contadorCarrito.innerHTML = JSON.parse(localStorage.getItem("carrito")).length;
}
contadorDelCarrito();

//filtros btn radios
const btnRadioGeneroUno = document.querySelector("#genero1");
  btnRadioGeneroUno.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.genero == "FANTÁSTICA");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })
const btnRadioGeneroDos = document.querySelector("#genero2");
  btnRadioGeneroDos.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.genero == "FILOSOFICÁ");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })
const btnRadioGeneroTres = document.querySelector("#genero3");
  btnRadioGeneroTres.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.genero == "INFANTÍL");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })
const btnRadioGeneroCuatro = document.querySelector("#genero4");
  btnRadioGeneroCuatro.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.genero == "NARRACIÓN");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })
const btnRadioGeneroCinco = document.querySelector("#genero5");
  btnRadioGeneroCinco.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.genero == "REALISMO MÁGICO");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })
const btnRadioGeneroSeis = document.querySelector("#genero6");
  btnRadioGeneroSeis.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.genero == "POESÍA");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })

const btnRadioFormatoUno = document.querySelector("#formato1");
  btnRadioFormatoUno.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.formato == "LIBRO");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })
const btnRadioFormatoDos = document.querySelector("#formato2");
  btnRadioFormatoDos.addEventListener("click", () =>{
    const resultado = LIBROS.filter(libro => libro.formato == "AUDIOLIBRO");
    cargarLibros(resultado);
    resultado.forEach(libro => {
      const btn = document.querySelector(`#btn${libro.id}`);
      btn.addEventListener("click", () => agregarAlCarrito(`${libro.id}`));
      btn.addEventListener("click", () => contadorDelCarrito());
      btn.addEventListener("click", () => {swal("Tu compra", "Ha sido agregada al carrito", "success")});
    });
  })