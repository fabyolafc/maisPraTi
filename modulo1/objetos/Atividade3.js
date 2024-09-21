// Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let notebook = {
    marca: "Dell",
    modelo: "XPS 13",
    cor: "Cinza",
    precos: {
        amazon: 5988,
        magazine: 4999,
        shopee: 3865
    }
};

function filtrarPrecos(obj, valorMinimo) {
    let novoObjeto = {};
    
    // Iterar sobre as propriedades de "precos"
    for (let loja in obj.precos) {
        if (obj.precos[loja] > valorMinimo) {
            novoObjeto[loja] = obj.precos[loja];
        }
    }
    
    return novoObjeto;
}

let valorMinimo = 4000;
let precosFiltrados = filtrarPrecos(notebook, valorMinimo);

console.log(precosFiltrados);