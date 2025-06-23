let monedaDolares = prompt('Ingrese la moneda en dolares : ')

monedaDolares = Number(monedaDolares)

let tipoDeCambio = 26.12

let monedaHn = monedaDolares * tipoDeCambio;

alert(`${monedaDolares} $  = ${monedaHn.toFixed(2)} Lp.`);
