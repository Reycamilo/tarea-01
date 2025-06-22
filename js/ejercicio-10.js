let radioDeCirculo = prompt(`Ingrese el radio del circulo :`)

radioDeCirculo = Number(radioDeCirculo)

let areaDelCirculo = (Math.PI) * (Math.pow(radioDeCirculo,2))

console.log(`El area de un circulo de radio ${radioDeCirculo} es de ${areaDelCirculo.toFixed(2)} cm`);
