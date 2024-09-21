// Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    { cliente: "Fabyola", produto: "Notebook", quantidade: 1 },
    { cliente: "Ana", produto: "Celular", quantidade: 2 },
    { cliente: "Miguel", produto: "Tablet", quantidade: 1 }
];

let totalPorCliente = {};

pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        totalPorCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log(totalPorCliente);
