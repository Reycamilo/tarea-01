
// Pedimos ingresar dos numeros al usario
let numero1 = prompt(`Ingrese el primer numero : \n`)
let numero2 = prompt(`Ingrese el segundo numero : \n`)

// Pasamos los valores a numeros
numero1 = Number(numero1)
numero2 = Number(numero2)

// Operacion de Resta
let resultado = numero1 - numero2

// mostramos el resultado en la consola
console.log(`El resultado de restar ${numero1} - ${numero2} es igual a ${resultado}`);
