/* Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
por su carro y el número de litros consumidos . El script debe mostrar el consumo de
combustible por kilómetro. */

let kmRecorridos = prompt(`Ingrese los Km recorridos : `)
let combustibleUsado = prompt(`Ingrese el combustible que gasto : `)

kmRecorridos = Number(kmRecorridos)
combustibleUsado = Number(combustibleUsado)

let combustibleXkm =  combustibleUsado / kmRecorridos

alert(`El automovil comsume ${combustibleXkm.toFixed(3)} lt por Km`)