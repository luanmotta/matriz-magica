geraGene = range => Math.floor(Math.random() * range);

class Cromossomo {

  constructor(tamMatriz, range) {
    this.aptidao;
    this.linhas = [];
    this.colunas = [];
    this.diagonais = [];

    for (let i; i < tamMatriz; i++) {
      this.linhas.push(geraGene(range));
      for (let j; j< tamMatriz; j++) {
        this.colunas.push(geraGene(range));
        if (i === j) {
          this.diagonais.push(geraGene(range));
        }
      }
    }
  }
}

module.exports = Cromossomo;
