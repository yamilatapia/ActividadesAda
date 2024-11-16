const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese un primer numero: "));
let numero2 = parseFloat(prompt("Ingrese segundo numero: "));

let suma = numero1 + numero2;

console.log("La suma de los numeros es: " + suma);