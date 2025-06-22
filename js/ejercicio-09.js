// pedimos los grados al usuario
let gradosCelsius = prompt(`Igrese los grados celsius : `)
let gradosFahrenheit 

// pasamos a numero el valor ingresado
gradosCelsius = Number(gradosCelsius)

// usamos la formula
gradosFahrenheit = (gradosCelsius * (9/5)) + 32;

// mostramos el resultado de una forma bonita
console.log(`${gradosCelsius} °C equivalen a ${gradosFahrenheit} °F`);
