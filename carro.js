function criarCarro(marca, modelo, ano, cor) {
  return {
    marca,
    modelo,
    ano,
    obterCarro() {
      return `${this.marca} ${this.modelo} (${this.ano})`;
    },
  };
}

module.exports = { criarCarro };
