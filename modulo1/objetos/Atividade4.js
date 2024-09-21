// Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    { nome: 'Fabyola', idade: 20, cidade: 'Virgem da Lapa' },
    { nome: 'Carlos', idade: 25, cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 30, cidade: 'São Paulo' }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}

