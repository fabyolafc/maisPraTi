// Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    { nome: 'Fabyola', cargo: "Gerente de projetos", salario: 2199 },
    { nome: 'Carlos', cargo: "Adiministrador", salario: 1800 },
    { nome: 'Ana', cargo: "Supervisora", salario: 1900 }
];

let salarioMinimo = 2000;

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
    }
}