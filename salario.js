function calcularSalario(horasTrabalhadas, valorPorHora) {
  if (horasTrabalhadas < 0 || valorPorHora < 0) {
    throw new Error("Horas trabalhadas e valor por hora devem ser positivos");
  }
  return horasTrabalhadas * valorPorHora;
}

module.exports = { calcularSalario };
