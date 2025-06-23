let pies = 180
let metros = 10
console.log(`${pies} pies`);
console.log(`${metros} metros`);


// PASAMOS AMBAS UNIDADES A PULGADAS
let pulgadas1 = (pies * 12)
let pulgadas2 = (metros / 0.0254)

let sumaPulgadas = pulgadas1 + pulgadas2
console.log(`La suma en pulgadas es de : ${sumaPulgadas.toFixed(3)} pulg`);

// PASAMOS AMBAS A YARDAS
let yardas1 = (pies / 3) 
let yardas2 = (metros * 1.09361)

let sumaYardas = yardas1 + yardas2
console.log(`La suma en yardas es de : ${sumaYardas.toFixed(3)} yard`);

// PASAMOS LOS PIES A METROS
let metros2 = (pies * 0.3048)

let sumaMetros = metros + metros2

console.log(`La suma en metros es de : ${sumaMetros.toFixed(3)} m`);

// PASAMOS AMBAS A MILLAS
let millas1 = (pies * 0.000189394)
let millas2 = (metros / 1609)

let sumaMillas = millas1 + millas2

console.log(`La suma es millas es de : ${sumaMillas.toFixed(3)} M`);


