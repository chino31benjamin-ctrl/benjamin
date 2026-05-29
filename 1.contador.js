// Definimos el array de números
const numeros = [2, 1, 6, 5, 10, 7, 14, 11, 18];

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Cantidad de números pares:", pares);
console.log("Cantidad de números impares:", impares);
