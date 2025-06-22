// Usuario ingresa sus calificaciones
let calificacion1 = prompt(`Ingrese su primera Calificacion : `)
let calificacion2 = prompt(`Ingrese su segunda Calificacion : `)
let calificacion3 = prompt(`Ingrese su tercera Calificacion : `)

// Pasamos los valores numeros
calificacion1 = Number(calificacion1)
calificacion2 = Number(calificacion2)
calificacion3 = Number(calificacion3)

let promedioFinal = (calificacion1 + calificacion2 + calificacion3) / 3

console.log(`El promedio final del estudiante es de : ${promedioFinal}`);

