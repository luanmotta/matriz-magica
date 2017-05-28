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


exports.selecionarPopulacao = function(populacao, solucaoIdeal) {

  const pais = [];

  populacao.forEach((cromossomo) => {
    cromossomo.aptidao = Math.abs(cromossomo.aptidao);
  });

  populacao.sort((a, b) => a.aptidao - b.aptidao);

  while (pais.length < populacao.length / 4) {
    pais.push(populacao.shift());
    populacao.push(null);
  }

  const retornaIndexAleatorio = tam => Math.floor(Math.random() * (tam));
  let index;
  while (pais.length < populacao.length / 2) {

    do {
      index = retornaIndexAleatorio(populacao.length);
    } while (populacao[index] === null);

    pais.push(populacao[index]);
    populacao[index] = null;
  }
  return pais;
}

exports.cruzarPopulacao = function(pais) {

  const novaPopulacao = [];
  const quantidadeDeGenes = pais[0].genes.length;

  for (i in pais) {
    genesDoPai1 = pais[i].genes.slice(0, quantidadeDeGenes / 2);
    genesDoPai2 = pais[pais.length - 1 - i].genes.slice(quantidadeDeGenes / 2, quantidadeDeGenes);

    novaPopulacao.push(new Cromossomo(null, genesDoPai1.concat(genesDoPai2)));
    novaPopulacao.push(new Cromossomo(null, genesDoPai2.concat(genesDoPai1)));
  }

  return novaPopulacao;
}

exports.mutarPopulacao = (populacao) => {
  const quantidadeDeGenes = populacao[0].genes.length;
  let geneParaAlterar;
  populacao.forEach((cromossomo) => {
    geneParaAlterar = Math.floor(Math.random() * quantidadeDeGenes);
    cromossomo.genes[geneParaAlterar] = + !cromossomo.genes[geneParaAlterar];
  });

  return populacao;
}

