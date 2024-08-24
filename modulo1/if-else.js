const prompt = require('prompt-sync')();

// 1 - Verifique se um número é positivo, negativo ou zero

// Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.

let n = Number(prompt("Digite um número: "));

if (n === 0) {
    console.log("Seu número é 0")
} else if (n < 1) {
    console.log("Seu número é negativo")
} else {
    console.log("Seu número é positivo")
}


// 2 - Verifique se um ano é bissexto

// Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.

let ano = Number(prompt("Digite um ano: "));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("O ano é bissexto");
} else {
    console.log("O ano não é bissexto");
}


// 3 - Calcule a média de três números e determine o conceito

// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

let n1 = Number(prompt("Digite a 1ª nota: "));
let n2 = Number(prompt("Digite a 2ª nota: "));
let n3 = Number(prompt("Digite a 3ª nota: "));

let media = 0

media = (n1 + n2 + n3) / 3

if (media >= 90) {
    console.log("Nota A")
} else if (media >= 80 && media < 90) {
    console.log("Nota B")
} else if (media >= 70 && media < 80) {
    console.log("Nota C")
} else if (media >= 60 && media < 70) {
    console.log("Nota D")
} else if (media >= 50 && media < 60) {
    console.log("Nota E")
} else if (media < 50) {
    console.log("Nota F")
}


// 4 - Verifique se um número é par ou ímpar

// Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.

let num = Number(prompt("Digite um número: "));

if (num % 2 == 0) {
    console.log("PAR")
} else {
    console.log("IMPAR")
}


// 5 - Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

let idade = Number(prompt("Digite  sua idade: "));

if (idade >= 5 && idade <= 7) {
    console.log("INFANTIL")
} else if (idade >= 8 && idade <= 10) {
    console.log("INFANTIL")
} else if (idade >= 11 && idade <= 13) {
    console.log("JUVENIL")
} else if (idade >= 14 && idade <= 17) {
    console.log("JUVENIL")
} else if (idade >= 18) {
    console.log("ADULTO")
} 


// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

let dia = Number(prompt("Digite o número do dia da semana: "));
    
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        case 3:
            console.log("Terça");
            break;
        case 4:
            console.log("Quarta");
            break;
        case 5:
            console.log("Quinta");
            break;
        case 6:
            console.log("Sexta");
            break;
        case 7:
            console.log("Sábado");
            break;
        default: 
            console.log("Número Inválido");
            break;
    }


// 7 - Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.
    
// Dica: Utilize os operadores aritméticos em cada caso do switch.

let num1 = Number(prompt("Digite o 1º número: "));
let num2 = Number(prompt("Digite o 2º número: "));
let operador = (prompt("Digite o operador +, -, *, /: "));
let resultado
 
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            console.log("A soma é: ", resultado);
            break;
        case "-":
            resultado = num1 - num2;
            console.log("A subtração é: ", resultado);
            break;
        case "*":
            resultado = num1 * num2;
            console.log("A multiplicação é: ", resultado);
            break;
        case "/":
            resultado = num1 / num2;
            console.log("A divisão é: ", resultado);
            break;
        default: 
            console.log("Operador Inválido");
            break;
    }


// 8 - Verifique a estação do ano

// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 = Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

let estacao = Number(prompt("Digite o um número de 1 a 4: "));

switch (estacao) {
    case 1:
        console.log("A estação é primavera");
        break;
    case 2:
        console.log("A estação é verão");
        break;
    case 3:
        console.log("A estação é outono");
        break;
    case 4:
        console.log("A estação é inverno");
        break;
    default: 
        console.log("Número Inválido");
        break;
}


// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.

let idd = Number(prompt("Digite sua idade: "));
let res = ""

if (idd >0 && idd <=12) {
    res = "Criança"
} else if (idd >13 && idd <=17) {
    res = "Adolescente"
} else if (idd >18 && idd <=59) {
    res = "Adulto"
} else if (idd >=60) {
    res = "Idoso"
}

switch (res) {
    case "Criança":
        console.log("Você é uma criança ");
        break;
    case "Adolescente":
        console.log("Você é um adolescente");
        break;
    case "Adulto":
        console.log("Você é um adulto");
        break;
    case "Idoso":
        console.log("Você é um idoso");
        break;
    default: 
        console.log("Idade inválida");
        break;
}


// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

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