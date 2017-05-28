const { geraPrimeiraPopulacao } = require('./utils.js');
const { config,  } = require('./init.js');

class Main {
  constructor() {
    console.log("node started");

    const tamMatriz       = process.argv[2],
          range           = config.range
          qntCromossomos  = config.qntCromossomos
          solucaoIdeal    = config.solucaoIdeal;
          limiteDeCiclos  = config.limiteDeCiclos;

    let populacao     = gerarPrimeiraPopulacao(tamMatriz, qntCromossomos, range);
    let melhorSolucao = 0;
    let solucaoAtual  = 0;
    let ciclos        = 0;
    let pais;

    while (!testeDeAptidao(melhorSolucao, ciclos)) {
      ciclos++;
      solucaoAtual = definirAptidao(populacao, valoresDaSolucao);

      if (isMelhorSolucao(solucaoAtual, melhorSolucao)) {
        melhorSolucao = solucaoAtual;
        ciclos = 0;
      }

      pais = selecionarPopulacao(populacao, solucaoIdeal);
      populacao = cruzarPopulacao(pais);
      populacao = mutarPopulacao(populacao);

      console.log(populacao);
    
    }

    definirAptidao(populacao, valoresDaSolucao);
    console.log(`Melhor solução encontrada: ${melhorSolucao}`);
    console.log('População final:');
    console.log(populacao);

  }
}

new Main();