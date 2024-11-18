const prompt = require('prompt-sync') ();

//Utilizo parseInt para convertir una cadena de texto a un numero entero
let numero = parseInt(prompt("Ingrese un numero enero: "))

//verifico si el numero es par o impar
if(numero % 2 === 0) {
    console.log("El numero es par.");
} else {
    console.log("El numero es impar.");
}