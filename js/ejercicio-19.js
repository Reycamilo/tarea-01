/* Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
calcule el precio total a pagar por la compra. */

const producto = 'Aula F75'
let precio = 80
let iva = (precio) * 0.21
let totalPagar = precio + iva;

console.log(`Nombre del producto : ${producto}`);
console.log(`precio = ${precio}`);
console.log(`Iva = ${iva}`);
console.log(`Total = ${totalPagar}`);


