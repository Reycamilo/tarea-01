
let resultado;

alert(`Elija un opcion para realizar : `)
let opcion = prompt(`1.Sumar.\n2.Restar\n3.Multiplicar.\n4.Dividir`)

let numero1 = prompt(`Ingrese el primer numero : `)
let numero2 = prompt(`Inrese el segundo numero : `)

opcion = Number(opcion)
numero1 = Number(numero1)
numero2 = Number(numero2)

if( opcion == 1) {
    resultado = numero1 + numero2;
} if ( opcion == 2) {
    resultado = numero1 - numero2
} if (opcion == 3 ) {
    resultado = numero1 * numero2
} if (opcion == 4 ) {
    resultado = numero1 / numero2
}

alert(`El resultado es : ${resultado}`);
