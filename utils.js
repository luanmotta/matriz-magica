exports.gerarPrimeiraPopulacao = (tamMatriz, qntCromossomos, range) => {
  const populacao = [];
  for (let i = 0; i < qntCromossomos; i++) {
    populacao.push(new Matriz(tamMatriz, range));
  }
  return populacao;
}

exports.definirAptidao = (populacao, valores) => {

  let melhorSolucaoDaPopulacao;
  let melhorCromossomo;

  populacao.forEach((cromossomo) => {
    cromossomo.aptidao = 0;
    cromossomo.genes.forEach((gene, index) => {
      let coeficiente = gene ? 1 : -1;
      cromossomo.aptidao += valores[index] * coeficiente;
    });

    if (melhorSolucaoDaPopulacao === undefined) {
      melhorSolucaoDaPopulacao = cromossomo.aptidao
    }
    else if (Math.abs(melhorSolucaoDaPopulacao - cromossomo.aptidao) < Math.abs(melhorSolucaoDaPopulacao)) {
      melhorCromossomo = cromossomo;
    }
  });
  return melhorCromossomo;
};