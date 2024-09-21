// Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
    { nome: "Celular", preco: 1925, desconto: true },
    { nome: "Computador", preco: 1999, desconto: true },
    { nome: "Notebook", preco: 2010, desconto: true }
];

produtos.forEach(produto => {
    if (produto.desconto) {
        let desc = produto.preco * 0.10;
        let precoComDesconto = produto.preco - desc;
        console.log(`Nome: ${produto.nome}, Preço original: R$${produto.preco}, Preço com desconto: R$${precoComDesconto.toFixed(2)}`);
    } else {
        console.log(`Nome: ${produto.nome}, Preço sem desconto: R$${produto.preco}`);
    }
});
