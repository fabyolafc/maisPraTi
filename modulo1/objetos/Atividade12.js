// Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoques = [
    { produto: "Celular", quantidade: 1, minimo: 1 },
    { produto: "Notebook", quantidade: 2, minimo: 6 },
    { produto: "Computador", quantidade: 5, minimo: 3 }
];

estoques.forEach(estoque => {
    if (estoque.quantidade < estoque.minimo) {
        estoque.quantidade *= 2;
    }
});

console.log(estoques);