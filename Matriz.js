class Matriz {
  constructor(tamMatriz) {
    this.linhas = [];
    this.colunas = [];
    this.diagonais = [];

    for (let i; i < tamMatriz; i++) {
      this.linhas.push(new Cromossomo(qntGenes));
      for (let j; j< tamMatriz; j++) {
        this.colunas.push(new Cromossomo(qntGenes));
        if (i === j) {
          this.diagonais.push(new Cromossomo(qntGenes));
        }
      }
    }
  }
}