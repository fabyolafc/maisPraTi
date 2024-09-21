// Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: 'Strada',
    modelo: 'Fiat',
    ano: 2014,
    cor: 'Vermelho'
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
