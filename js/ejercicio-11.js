// declaracino de variables
let numero = prompt(`Ingrese un numero para verificacion : `)
let primo = true;

// pasamo a numero 
numero = Number(numero)

// algoritmo para detectar si es primo o no.
if ( numero <= 1) {
    primo = false
} else {
    for( i = 2; i <= Math.sqrt(numero); i ++) {
        if ( numero % i === 0) {
            primo = false;
            break;
        }
    }
}

console.log(`El numero ${numero} es primo ? : ${primo}`);
