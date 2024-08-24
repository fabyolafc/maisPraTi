const prompt = require('prompt-sync')();
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let num = Number(prompt("Digite um número: "));

if (num % 2 == 0) {
    console.log("PAR")
} else {
    console.log("IMPAR")
}


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 1 && idade <= 12) {
    console.log("Criança")
} else if (idade > 12 && idade <= 18) {
    console.log("Adolescente")
} else if (idade > 18 && idade <= 59) {
    console.log("JUVENIL")
} else if (idade > 59) {
    console.log("Idoso")
}


// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt("Digite sua nota: "));

if (nota >= 7 && nota <= 10) {
    console.log("Aprovado")
} else if (nota >= 5 && nota <= 6) {
    console.log("Recuperação")
} else if (nota >= 1 && nota <= 4) {
    console.log("Reprovado")
}


// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log("Opção 1: Exibir mensagem")
console.log("Opção 2: Somar dois números")
console.log("Opção 3: Calcular média")

let opcao = Number(prompt("Digite uma opção: "));

switch (opcao) {
    case 1:
        console.log("Você escolheu opção 1");
        break;
    case 2:
        let num1, num2;
        num1 = Number(prompt("Digite o número 1: "));
        num2 = Number(prompt("Digite o número 2: "));
        console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 3:
        let n = Number(prompt("Digite os números para calcular a média, digite 0 para sair do programa: "));
        let contador = 0
        let soma = 0
        let media
        while(n !== 0) {
            contador++
            soma += n   
            n = Number(prompt("Digite os números para calcular a média, digite 0 para sair do programa: "));
        }
        media = soma/contador
        console.log(`A média é ${media}`);
        break;
    default:
        console.log("Número Inválido");
        break;
}


// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));
let imc

imc = peso/(altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso")
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau I")
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau II")
} else if (imc >= 40) {
    console.log("Obesidade grau III")
} 


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let A, B, C

A = Number(prompt("Digite o 1º lado do triângulo: "));
B = Number(prompt("Digite o 2º lado do triângulo: "));
C = Number(prompt("Digite o 3º lado do triângulo: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B || A === C || B === C) {
        console.log("Isósceles")
    } else if (A !== B && B !== C) {
        console.log("Escaleno")
    } else if (A === B && iB === C) {
        console.log("Eqüilátero")
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo")
}


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

numMaca = Number(prompt("Quantas maças você comprou: "));

if (numMaca < 12) {
    console.log(`Sua compra foi de ${0.30 * numMaca}`);
} else if (numMaca >= 12) {
    console.log(`Sua compra foi de ${0.25 * numMaca}`);
}


// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

valor1 = Number(prompt("Digite o 1º valor: "));
valor2 = Number(prompt("Digite o 2º valor: "));

if (valor1 === valor2) {
    console.log("Digite valores diferentes");
} else {
    if (valor1 > valor2) {
        console.log(`O valor 1: ${valor1} é maior que o valor 2: ${valor2}`); 
    } else if (valor2 > valor1) {
        console.log(`O valor 2: ${valor2} é maior que o valor 1: ${valor1}`); 
    }
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

numero = Number(prompt("Digite um número: "));

for (let j = 1; j <= 10; j++) {
    console.log(numero);
}


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let smNum = 0
for (let l= 1; l <= 5; l++) {
    num11 = Number(prompt("Digite 5 números: "));
    smNum += num11;
}
console.log(smNum);


// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

tabuada = Number(prompt("Digite um número: "));
for (let k= 1; k <= 10; k++) { 
    console.log(`${tabuada} x ${k} = ${tabuada * k}`);
}


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let num13 = Number(prompt("Digite os números para calcular a média, digite 0 para sair do programa: "));
        let cont = 0
        let sm = 0
        let calMedia
        while(num13 !== 0) {
            cont++
            sm += num13 
            num13 = Number(prompt("Digite os números para calcular a média, digite 0 para sair do programa: "));
        }
        calMedia = sm/cont
        console.log(`A média é ${calMedia}`);


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let fatorial = Number(prompt("Digite um número: "));
let contFatorial = 1
let produto = 1

while (contFatorial <= fatorial) {
    produto *= contFatorial
    contFatorial ++
}
console.log(produto)


// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let n1 = 0
let n2 = 1
somaNum = 0

console.log(n1);
console.log(n2); 

for (let i = 1; i <= 8; i++) {
    somaNum = n1 + n2
    n1 = n2
    n2 = somaNum
    console.log(somaNum)
}