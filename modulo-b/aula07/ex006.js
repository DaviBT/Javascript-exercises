/*Trabalhando com Operadores*/

/* Aritméticos */

var a = Number(window.prompt('Digite um número'))
var b = (a - 3) * 5
var c = b ** 3 / 2
var d = c / 3 * 5 % 2
var e = d + 4 - 2
var f = e % 5 + 3

document.write(`Iremos fazer algumas operções com o número ${a}<br>`)
document.write(`(${a} - 3) * 5 = ${b}<br>`)
document.write(`${b} elevado à 3 divido por dois é igual a ${c}<br>`)
document.write(`${c} / 3 * 5 resto de 2 = ${d}<br>`)
document.write(`${d} + 4 - 2 = ${e}<br>`)
document.write(`${e} resto de 5 + 3 = ${f}`)
