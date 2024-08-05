let numero = Number(prompt("Digite um número (ou -1 para sair):"));

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
  numero = parseInt(prompt("Digite outro número (ou -1 para sair):"));
}