/*Aca pide primero ingresar un monto a pagar, luego pide entre 4 opciones de cuotas, 
segun lo elegido, calcula el monto total con el interes incluido para esa cantidad de cuotas y 
devuelve tambien el monto total de cada cuota
*/

let monto = Number(
  prompt("Ingrese el monto a pagar para calcular su financiación")
);
let resultado;
let cantCuotas;

//funcion de calculo
function calculoInteres(monto, interes) {
  resultado = monto + monto * interes;
  return resultado;
}

//aca hice una iteracion para que el usuario tenga hasta 4 intentos
for (let i = 1; i < 5; i++) {
  cantCuotas = Number(prompt("Elija entre 3, 6, 12, o 18 cuotas"));
  if (cantCuotas === 3) {
    calculoInteres(monto, 0.05);
    break;
  } else if (cantCuotas === 6) {
    calculoInteres(monto, 0.1);
    break;
  } else if (cantCuotas === 12) {
    calculoInteres(monto, 0.15);
    break;
  } else if (cantCuotas === 18) {
    calculoInteres(monto, 0.2);
    break;
  } else {
    alert("No puede elegir ese plan de cuotas");
  }
}
console.log("monto + ineres " + resultado);

//calculo de monto de cada cuota
let cuotas = resultado / cantCuotas;

console.log("monto de cada cuota final " + cuotas);

//salidas
if (resultado == undefined) {
  alert("No ha seleccionado la cantidad de cuotas que hay entre las opciones");
} else {
  alert("El monto total a pagar, con el interes incluido es de $" + resultado);
  alert(
    "Su pago se debera realizar en " + cantCuotas + " cuotas de $" + cuotas
  );
}
