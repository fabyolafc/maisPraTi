// Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    { produto: "Notebook", quantidade: 5, valor: 2989 },
    { produto: "Computador", quantidade: 2, valor: 2499 },
    { produto: "Celular", quantidade: 3, valor: 1899 }
];

let totalVendas = 0;

vendas.forEach(venda => {
    let valorTotalProduto = venda.quantidade * venda.valor;
    totalVendas += valorTotalProduto;
    console.log(`Produto: ${venda.produto}, total de venda: R$${valorTotalProduto}`);
});

console.log(`Valor total de todas as vendas: R$${totalVendas}`);

