// Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmes = [
    { titulo: "Tropa de Elite", diretor: "Ana", anoLancamento: 2018},
    { titulo: "Top Gun", diretor: "Maria", anoLancamento: 2020},
    { titulo: "Interestelar", diretor: "Miguel", anoLancamento: 2019},
];

let titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);
