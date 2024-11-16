const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingrese un numero: "));

if (numero > 0) {
    console.log(`El numero es positivo`);
} 
else if (numero < 0){
    console.log(`El numero es negativo`);
}
  else if(numero == 0) {
    console.log(`El numero es cero`);
}

//Aqui quise hacer una opcion por si no se ingresaba un numero pero no se aun como hacer qe funcione
 // else if(numero == NaN) {
 //  console.log(`Ese no es un numero`)
 //}