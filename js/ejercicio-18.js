/*18. Tanques de agua:
Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas
cúbicas.

De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
25% se dedica al riego.

Diseñe un programa que haga lo siguiente:
1.Determine la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.

2.Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
en metros cúbicos y en pies cúbicos.

Considere los siguientes factores de conversión:
1 pie cúbico = 0.0283 metros cúbicos
1 metro cúbico = 1000 litros
1 yarda cúbica = 27 pies cúbicos.
 */

// CAPACIDADES MAXIMAS YA EXPRESADAS
let capacidadMaxLitros = 500
let capacidadMaxYardas = 0.654

// MOSTRADAS EN PANTALLA
console.log(`Capacidad maxima en litros : ${capacidadMaxLitros} Lt.\nCapacidad maxima en Yardas : ${capacidadMaxYardas} yard.\n\n`);

// NO GUARDO LA CONVERSION EN UNA VARIABLE --- EN EL MISMO LOG HAGO LA CONVERSION TEMPORAL
console.log(`Capacidad maxima en Litros transformados a  Metros cubicos : ${(capacidadMaxLitros / 1000).toFixed(3)} m ^3`);

// LO MISMO PERO DESDE LAS YARDAS
console.log(`Capacidad maxima en Yardas Cubicas a Metros Cubicos : ${((capacidadMaxYardas * 27) * 0.0283).toFixed(3)} m ^3\n\n`);

// USO DEL TANQUE DE AGUA
let dedicadaRiesgo = 0.25
let usoDomestico = 0.75


// MUESTRO LOS PORCENTAJES DE USO HACIENDO LA CONVERSION EN EL MOMENTO SIN GUARDAR EN VARIABLESs
console.log(`La cantidad de agua utilizada para el uso domestico en metros cubicos es de : ${ ( (capacidadMaxLitros / 1000 )* usoDomestico).toFixed(3)} m^3`);

console.log(`La capacidad de agua utilizada dedicada al reigo en metros cubicos es de : ${((capacidadMaxLitros / 1000) * dedicadaRiesgo).toFixed(3)} m^3`);
