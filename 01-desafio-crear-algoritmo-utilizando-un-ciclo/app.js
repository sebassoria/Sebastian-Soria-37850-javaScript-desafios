/* ejemplo 1
Ingrese hasta 7 pedidos de cajas y calcule el costo de cada pedido en base al precio actual por unidad.
El resultado se muestra por consola
*/
let precioUnitario = Number(prompt("Escriba el precio unitario de las Cajas"));
let costoTotal = 0;
for (let i = 1; i <= 7; i++) {
  let cantCajas = Number(prompt("cantidad de Cajas pedidas"));
  let costo = precioUnitario * cantCajas;
  console.log("el costo por " + cantCajas + " Cajas es de $" + costo);
  costoTotal = costoTotal + costo;
}
console.log("El costo total de este lote de pedidos es de $" + costoTotal);
alert(
  "El costo total de este lote de pedidos es de $" +
    costoTotal +
    "." +
    " Presione aceptar para ver el ejemplo 2"
);

/* ejemplo 2
Ingresar mediante un prompt la cantidad de cuotas que se quieren pagar y
mostrar por consola el plan de pago y aviso de renovación
*/

let fin = false;
let mes = 1;
let pago = Number(prompt("seleccione el numero de cuotas a pagar"));

do {
  if (mes == pago) {
    fin = true;
    console.log(mes);
    console.log(" Renueve su plan de pago");
  } else {
    console.log(mes);
  }
  mes++;
} while (mes <= 12 && fin == false);

alert("Fin de ejemplos");
