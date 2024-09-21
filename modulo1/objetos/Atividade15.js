// Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
    { tipo: "entrada", valor: 1500 },
    { tipo: "saida", valor: 500 },
    { tipo: "entrada", valor: 2000 },
    { tipo: "saida", valor: 700 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor; // Adiciona o valor ao saldo
    } else if (transacao.tipo === "saida") {
        saldoFinal -= transacao.valor; // Subtrai o valor do saldo
    }
});

console.log(`Saldo final: R$${saldoFinal}`);
