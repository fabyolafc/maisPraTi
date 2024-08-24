// Soma dos elementos de um arry

// let arrSun = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { 
//             sum +=arr[i] 
//     }
//     return sum
// }
//     console.log(arrSun([10, 20, 30, 40]))


// Encontre o Maior  número de um array 

// function encontrarMaiorNumero(arr) {
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) { 
//     if (arr[i] > max) {
//         max = arr[i]; 
//     }
// }
//     return max
// }
// let maiorNumero = encontrarMaiorNumero([5, 3, 9, 1, 7])
// console.log(maiorNumero)


// Reverter um array

// function reverterArray(arr) {
//     let reverter = []
//     for (let i = arr.length - 1; i >= 0; i--) { 
//             reverter.push(arr[i]); 
//     }
//         return reverter
//     }
//     let invertido = reverterArray([5, 3, 4, 1, 8])
//     console.log(invertido)


// Criem um novo array contendo apenas os números pares

// function numeroPar(arr) {
//     let par = []
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] % 2 === 0) {
//             par.push(arr[i]); 
//         }
//     }
//         return par
//     }
//     let par = numeroPar([5, 3, 4, 1, 8])
//     console.log(par)


// Contar ocorrências de um valor

function repeteNumero(arr) {
    let repete = []
    let quant = 0
    for (let i = 0; i < arr.length; i++) { 
        if (repete[i] === arr[i]) {
            quant ++
        }
    }
        return repete
    }
    let repete = repeteNumero([5, 3, 4, 3,  1, 8])
    console.log(repete)