const prompt = require('prompt-sync')();

//Pedimos al usuario que ingrese su nombre
let nombre = prompt("Ingrese sunombre:");

//Mostramos saludo personalizado utilizando `` bastiks que es para concatenar texto y nombre de variable
console.log(`Hola ${nombre}! Bienvenido a esta clase!`)