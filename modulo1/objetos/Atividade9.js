// Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    { nome: "Fabyola", idade: 20, cidade: "Virgem da Lapa" },
    { nome: "Ana", idade: 25, cidade: "Araçuaí" },
    { nome: "Miguel", idade: 35, cidade: "São Paulo" }
];

let cont = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        cont++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${cont}`);
