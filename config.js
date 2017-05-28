const solucaoIdeal    = 0,
      limiteDeCiclos  = 1000,
      qntCromossomos  = parseInt(tamMatriz / 2) * 2;
      range           = parseInt(tamMatriz * tamMatriz * tamMatriz / 2) * 2;

exports.config = {
  solucaoIdeal,
  limiteDeCiclos,
  qntCromossomos,
};

exports.isMelhorSolucao = (solucaoAtual, melhorSolucao) => {
  if (Math.abs(melhorSolucao - solucaoAtual) < Math.abs(melhorSolucao)) {
    return true
  }
  return false;
}

exports.testeDeAptidao = (melhorSolucao, ciclos) => melhorSolucao != solucaoIdeal || ciclos == limiteDeCiclos;
