/*Estructura de Control -
Selección
Ejercicio – Descuento Octubre
• Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no*/
let porcentajeDescuento: number = 0.15;
let cantidad: number = Number(prompt("Ingrese  cantidad"));
let precioUnitario: number = Number(prompt("Ingrese precio unitario"));
let mes: string | null = prompt("Ingrese el mes en que efectuó la compra");
let octubre: string;
let precioTotal: number = precioUnitario * cantidad;
let descuento: number = precioTotal * porcentajeDescuento;
let precioConDescuento: number = precioTotal - descuento;

if (mes === "octubre") {
  console.log("El precio de su compra es:", precioConDescuento);
} else {
  console.log("El precio de su compra es:", precioTotal);
}
