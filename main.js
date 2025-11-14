const { calcularSalario } = require("./salario");
const { criarCarro } = require("./carro");

console.log("=== Exemplo 1: Cálculo de Salário ===\n");

const horasTrabalhadas = 160;
const valorPorHora = 35.5;
const salario = calcularSalario(horasTrabalhadas, valorPorHora);

console.log(`Horas trabalhadas: ${horasTrabalhadas}h`);
console.log(`Valor por hora: R$ ${valorPorHora.toFixed(2)}`);
console.log(`Salário total: R$ ${salario.toFixed(2)}\n`);

console.log("=== Exemplo 2: Objeto Carro ===\n");

const carro1 = criarCarro("Toyota", "Corolla", 2023);
const carro2 = criarCarro("Honda", "Civic", 2022);
const carro3 = criarCarro("Volkswagen", "Golf", 2024);

console.log("Carro 1:", carro1.obterCarro());
console.log("Carro 2:", carro2.obterCarro());
console.log("Carro 3:", carro3.obterCarro());

console.log(`\nDetalhes do Carro 1:`);
console.log(`  Marca: ${carro1.marca}`);
console.log(`  Modelo: ${carro1.modelo}`);
console.log(`  Ano: ${carro1.ano}`);
