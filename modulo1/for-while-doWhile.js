const prompt = require('prompt-sync')();

// 1 - Imprima a sequência de Fibonacci até o 10º termo

// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

let n1 = 0
let n2 = 1
soma = 0

console.log(n1);
console.log(n2); 

for (let i = 1; i <= 8; i++) {
    soma = n1 + n2
    n1 = n2
    n2 = soma
    console.log(soma)
}


// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".

// Dica: Um número primo só é divisível por 1 e por ele mesmo.

let = n = 13
contador = 0

for (let j = 1; j <= n; j++) {
    if (n % j == 0) {
        contador++
    }
}

if (contador === 2) {
    console.log ("Primo")
} else {
    console.log ("Não é primo")
}


// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo de números.

// Dica: Utilize dois loops for, um dentro do outro.

let linhas = 5; // Número de linhas do triângulo

for (let l = 1; l <= linhas; l++) { // Loop externo controla o número de linhas
    let linha = ""; // Inicializa a string da linha atual
    for (let c = 1; c <= l; c++) { // Loop interno controla os números de cada linha
        linha += c + " "; // Adiciona o número atual à linha
    }
    console.log(linha); // Imprime a linha atual
}


// 4 - Calcule o fatorial de um número

// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

let fatorial = 5
let cont = 1
let produto = 1

while (cont <= fatorial) {
    produto *= cont
    cont ++
}

console.log(produto)


// 5 - Inverta os dígitos de um número


// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

// Dica: Use operações de módulo e divisão para extrair os dígitos.

let inveter = 4321
let numeroInvertido = 0;

while (inveter > 0) {
    let digito = inveter % 10; // Obtém o último dígito
    numeroInvertido = numeroInvertido * 10 + digito; // Adiciona o dígito ao número invertido
    inveter = Math.floor(inveter / 10); // Remove o último dígito do número original
}

console.log(numeroInvertido); 


// 6 - Verifique se um número é palíndromo

// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.

// Exercícios com 'do while'

let numero = Number(prompt("Digite um número (ou -1 para sair): "));

while (numero !== -1) {
  // Converter o número para uma string
  const numeroStr = numero.toString();

  // Reverter a string manualmente
  let numeroReverso = "";
  for (let i = numeroStr.length - 1; i >= 0; i--) {
    numeroReverso += numeroStr[i];
  }

  // Verificar se o número original é igual ao seu reverso
  if (numeroStr === numeroReverso) {
    console.log(`${numero} é um palíndromo.`);
  } else {
    console.log(`${numero} não é um palíndromo.`);
  }

  // Pedir outro número
  numero = parseInt(prompt("Digite outro número (ou -1 para sair): "));
}


// 7 - Conte o número de dígitos de um número

// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

// Dica: Use operações de divisão para reduzir o número até que ele seja zero.

let quantidade = parseInt(prompt("Digite um número (ou -1 para sair): "));

do {
  // Contador de dígitos
  let contad = 0;

  // Número temporário para manipulação
  let tempNumero = quantidade;

  // Contar os dígitos
  do {
    tempNumero = Math.floor(tempNumero / 10);
    contad++;
  } while (tempNumero > 0);

  console.log(`O número ${quantidade} tem ${contad} dígitos.`);

  // Pedir outro número
  quantidade = parseInt(prompt("Digite outro número (ou -1 para sair): "));

} while (quantidade !== -1);


// 8 - Calcule a soma dos dígitos de um número
       
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

let numer = parseInt(prompt("Digite um número (ou -1 para sair): "));

do {
  // Inicializa a soma dos dígitos
  let sm = 0;

  // Número temporário para manipulação
  let tempNumer = numer;

  // Calcula a soma dos dígitos
  do {
    sm += tempNumer % 10; // Extrai o dígito mais à direita e soma
    tempNumer = Math.floor(tempNumer / 10); // Remove o dígito já somado
  } while (tempNumer > 0);

  console.log(`A soma dos dígitos de ${numer} é ${sm}.`);

  // Pedir outro número
  numer = parseInt(prompt("Digite outro número (ou -1 para sair): "));

} while (numer !== -1);


// 9 - Imprima um padrão de estrela decrescente

// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

// Dica: Utilize dois loops, um dentro do outro.

let linh = parseInt(prompt("Digite o número de linhas para o padrão de estrela: "), 10);

do {
  let estrelas = linh; // Inicializa o número de estrelas na linha atual
  let padrao = ""; // String para armazenar as estrelas da linha atual

  // Loop interno para adicionar estrelas à linha atual
  do {
    padrao += "*";
    estrelas--;
  } while (estrelas > 0);

  console.log(padrao); // Imprime a linha de estrelas

  linh--; // Diminui o número de linhas restantes
} while (linh > 0);


// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

let number1 = 98
let number2 = 56

let a = number1
let b = number2

do {
  let temp = b
  b = a % b
  a = temp
} while (b !== 0)

const MDC = a

console.log(`O maior divisor comun de ${number1} e ${number2} é ${MDC}`)

