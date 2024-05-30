const numeros = [1, 2, 3, 4, 5];

// IMPERATIVO

// let sumaCuadradosPares = 0;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 == 0) {
//     let cuadrado = numeros[i] ** 2;
//     sumaCuadradosPares += cuadrado;
//   }
// }

// console.log(sumaCuadradosPares);

// DECLARATIVA

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);

const cuadrado = pares.map((numero) => numero ** 2);

console.log(cuadrado);

const sumaCuadradosPares = cuadrado.reduce((actual, item) => actual + item, 0);
// 0 + 4
// 4 + 16
// 20
console.log(sumaCuadradosPares);
