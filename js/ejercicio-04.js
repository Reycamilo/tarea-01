
// Pedimos ingresar dos numeros al usario
let base = prompt(`Ingrese la base del triangulo : \n`)
let altura = prompt(`Ingrese la altura del triangulo : \n`)

// Pasamos los valores a numeros
base = Number(base)
altura = Number(altura)

// Operacion de Multiplicacion
let resultado = (base * altura) / 2

// mostramos el resultado en la consola
console.log(`El area del triangulo es igual a ${resultado.toFixed(2)} cm`);

