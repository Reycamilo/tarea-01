
let minutosAdicionales
let horas

// pedimos los minutos y segundo de cada corredor por separado
alert("Dos corredores terminaron un maraton de 195 m")
let minutosPrimerCorredor = prompt("Ingrese los minutos del primero corredor : ")
let segundosPrimerosCorredor = prompt("Ingrese los segundos del primer corredor :")
let minutosSegundoCorredor = prompt("Ingrese los minutos del segundo corredor : ")
let segundosSegundoCorredor = prompt("Ingrese los segundos del segundo corredor : ")

// pasamos los valores a numeros
minutosPrimerCorredor = Number(minutosPrimerCorredor)
segundosPrimerosCorredor = Number(segundosPrimerosCorredor)
minutosSegundoCorredor = Number(minutosSegundoCorredor)
segundosSegundoCorredor = Number(segundosSegundoCorredor)

// sumamos los segundos
let sumasegundos = segundosPrimerosCorredor + segundosSegundoCorredor;

// dividimos de forma entera para pasar los segundo a minutos
minutosAdicionales = Math.floor(sumasegundos / 60 ) 
// Y el resto se queda en segundos
let totalsegundos = (sumasegundos % 60)


// sumamos todos los minutos
let sumaMinutos = minutosPrimerCorredor + minutosSegundoCorredor + minutosAdicionales

// hacemos lo mismo para pasarlo a horas
horas = Math.floor(sumaMinutos / 60 )
let totalesMinutos = (sumaMinutos % 60)

// mostramos el resultado con un alert
alert(`El tiempo total fueron ${horas} hr, ${totalesMinutos} min, ${totalsegundos} seg.`)