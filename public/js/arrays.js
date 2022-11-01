class LIBRO{
  constructor(titulo, autor, genero, formato, precio, portada, id) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.formato = formato;
    this.precio = precio;
    this.portada = portada;
    this.id = id;
  }
}

const LIBROS = [
  new LIBRO("EL IMPERIO FINAL", "BRANDON SANDERSON", "FANTÁSTICA", "LIBRO", 30.99, "img/libros/EL IMPERIO FINAL.jfif", 1),
  new LIBRO("EL POZO DE LA ASCENSIÓN", "BRANDON SANDERSON", "FANTÁSTICA", "LIBRO", 31.68, "img/libros/EL POZO DE LA ASCENSIÓN.jfif", 2),
  new LIBRO("EL HÉROE DE LAS ERAS", "BRANDON SANDERSON", "FANTÁSTICA", "LIBRO", 33.78, "img/libros/EL HEROE DE LAS ERAS.jfif", 3),
  new LIBRO("ALEACIÓN DE LEY", "BRANDON SANDERSON", "FANTÁSTICA", "LIBRO", 29.50, "img/libros/ALEACIÓN DE LEY.jfif", 4),
  new LIBRO("SOMBRAS DE IDENTIDAD", "BRANDON SANDERSON", "FANTÁSTICA", "LIBRO", 31.42, "img/libros/SOMBRAS DE IDENTIDAD.jfif", 5),
  new LIBRO("BRAZALES DE DUELO", "BRANDON SANDERSON", "FANTÁSTICA", "LIBRO", 31.5, "img/libros/BRAZALES DE DUELO.jpg", 6),
  new LIBRO("EL PRINCIPITO", "ANTOINE DE SAINT-EXUPÉRY", "INFANTÍL", "LIBRO", 7.84, "img/libros/EL PRINCIPITO.jfif", 7),
  new LIBRO("LA CIUDAD DE LAS BESTIAS", "ISABEL ALLENDE", "FANTÁSTICA", "LIBRO", 11.48, "img/libros/LA CIUDAD DE LAS BESTIAS.jfif", 8),
  new LIBRO("EL REINO DEL DRAGÓN DE ORO", "ISABEL ALLENDE", "FANTÁSTICA", "LIBRO", 13.2, "img/libros/EL REINO DEL DRAGÓN DE ORO.jfif", 0),
  new LIBRO("EL BOSQUE DE LOS PIGMEOS", "ISABEL ALLENDE", "FANTÁSTICA", "LIBRO", 12.64, "img/libros/EL BOSQUE DE LOS PIGMEOS.jpg", 10),
  new LIBRO("DE AMOR Y DE SOMBRA", "ISABEL ALLENDE", "REALISMO MÁGICO", "LIBRO", 9.54, "img/libros/DE AMOR Y SOMBRA.jfif", 11),
  new LIBRO("EVA LUNA", "ISABEL ALLENDE", "REALISMO MÁGICO", "LIBRO", 10.73, "img/libros/EVA LUNA.jpg", 12),
  new LIBRO("CUENTOS DE EVA LUNA", "ISABEL ALLENDE", "REALISMO MÁGICO", "LIBRO", 12.73, "img/libros/CUENTOS DE EVA LUNA.jfif", 13),
  new LIBRO("CONFIESO QUE HE VIVIDO", "PABLO NERUDA", "POESÍA", "LIBRO", 20.67, "img/libros/CONFIESO QUE HE VIVIDO.jfif", 14),
  new LIBRO("CIEN SONETOS DE AMOR", "PABLO NERUDA", "POESÍA", "LIBRO", 19.97, "img/libros/CIEN SONETOS DE AMOR.jfif", 15),
  new LIBRO("LA ISLA Y LOS DEMONIOS", "CARMEN LAFORET", "NARRACIÓN", "AUDIOLIBRO", 7.99, "img/libros/LA ISLA Y LOS DEMONIOS.jpg", 16),
  new LIBRO("EL ARTE DE LA GUERRA", "SUN TZU", "FILOSOFICÁ", "AUDIOLIBRO", 4.35, "img/libros/EL ARTE DE LA GUERRA.jpg", 17)
];

const CARRITO = [];