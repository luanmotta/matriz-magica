geraGene = range => Math.floor(Math.random() * range);

class Cromossomo {

  constructor(tamMatriz, range) {
    this.aptidao;
    this.matriz = [];
    this.diagonal1 = [];
    this.diagonal2 = [];

    for (let i; i < tamMatriz; i++) {
      this.matriz.push([]);
      for (let j; j< tamMatriz; j++) {
        this.matriz[i].push(geraGene(range));
        if (i === j) {
          this.diagonal1.push(geraGene(range));
        }
        if (i === tamMatriz - 1) {
          this.diagonal2.push(geraGene(range));
        }
      }
    }
  }
}

module.exports = Cromossomo;
