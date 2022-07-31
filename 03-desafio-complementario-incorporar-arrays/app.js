//Array de objetos discos en stock
const discos = [
  {
    artista: "The Beatles",
    album: "abbey road",
    anio: 1969,
    company: "Apple",
    precio: 12000,
  },
  {
    artista: "David Bowie",
    album: "heathen",
    anio: 2002,
    company: "EMI",
    precio: 9000,
  },
  {
    artista: "Anderson.Paak",
    album: "malibu",
    anio: 2016,
    company: "EMPIRE",
    precio: 8000,
  },
  {
    artista: "Luis Alberto Spinetta",
    album: "para los arboles",
    anio: 2003,
    company: "Universal Music Argentina S.A.",
    precio: 10000,
  },
];
//fin array

alert("El stock actual es de " + discos.length + " discos de vinilo.");

//Array vacio para encargar pedido
const encargues = [];

//funcion para hacer el encargue
function agrDisco() {
  let artista = prompt("Por favor ingrese el Nombre del artista");
  let album = prompt("Por favor ingrese el Nombre del album");
  let anio = Number(prompt("Por favor ingrese el año del album"));
  let compania = prompt("Por favor ingrese la compania disquera");
  let precio = Number(
    prompt("Por favor ingrese un precio estimado del vinilo")
  );

  album = album.toLowerCase();

  encargues.push({
    artista: artista,
    album: album,
    anio: anio,
    company: compania,
    precio: precio,
  });
}

let consulta;
let encargar;
let encontrado = false;

//funcion de busqueda
function busqueda() {
  let buscar = prompt("Que album esta buscando?");
  for (const busqueda of discos) {
    if (busqueda.album === buscar.toLowerCase()) {
      alert("El album " + busqueda.album + " esta disponible");
      encontrado = true;
    }
  }
  if (encontrado === false) {
    encargar = prompt(
      "El album no esta en stock, quiere encargar el album? SI/NO"
    );
    if (encargar.toUpperCase() === "SI") {
      agrDisco();
    } else {
      alert("Gracias");
    }
  }
}

busqueda();

//funcion de nueva consulta
function otraConsulta() {
  consulta = prompt("Quiere consultar otro album? SI/NO");
  if (consulta.toUpperCase() === "SI") {
    encontrado = false;
    busqueda();
    otraConsulta();
  } else {
    alert("Gracias");
  }
}
otraConsulta();

console.log(discos);
console.log(encargues);
