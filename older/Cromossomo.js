class Cromossomo {

  constructor(quantidadeGenes, genes) {
    this.genes = genes ? genes : this.geraGenes(quantidadeGenes);
    this.aptidao;
  }

  geraGenes(quantidadeGenes) {
    const genes = [];
    for (let i = 0; i < quantidadeGenes; i++) {
      genes.push(Math.random() > 0.5 ? 1 : 0);
    }
    return genes;
  }
}

module.exports = Cromossomo;
