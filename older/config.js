/*
O número de cromossomos precisa ser um log²
A quantidade de genes precisa ser divisível por 2
A quantidade de valores precisa ser igual ao número de genes
*/

const solucaoIdeal = 0;
const limiteDeCiclos = 1000;

exports.configuracao = {
  solucaoIdeal,
  cromossomos: 4,
  valores: [10, 20, -20, 2, -50, 40, 5, 80],
}

exports.testeDeAptidao = (melhorSolucao, ciclos) => melhorSolucao != solucaoIdeal || ciclos == limiteDeCiclos;

exports.definirAptidao = (populacao, valores) => {

  let melhorSolucaoDaPopulacao;
  let melhorCromossomo;

  populacao.map((cromossomo) => {
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

exports.isMelhorSolucao = (solucaoAtual, melhorSolucao) => {

  if (Math.abs(melhorSolucao - solucaoAtual) < Math.abs(melhorSolucao)) {
    return true
  }

  return false;
}