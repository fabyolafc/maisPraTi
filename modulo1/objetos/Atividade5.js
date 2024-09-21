// Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    { nome: 'Fabyola', nota1: 100, nota2: 99 },
    { nome: 'Carlos', nota1: 85, nota2: 88 },
    { nome: 'Ana', nota1: 39, nota2: 55 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}