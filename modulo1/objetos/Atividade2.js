// Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "Love & Danger",
    autor: "Fabyola",
    anoPublicacao: "2024",
    genero: "Supense"
}

let editora = false;

for (let propriedade in livro) {
    if (propriedade === editora) {
        editora = true;
    } 
    console.log(`${propriedade}: ${livro[propriedade]}`);
}

if (!editora) {
    livro.editora = "Editora Campos"
    console.log(`editora: ${livro.editora}`);
}
