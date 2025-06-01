import React, { useState } from 'react';
import './App.css';
import ChoosePath from './components/ChoosePath';
import Quiz from './components/Quizz';


function App() {
  const [selectedPath, setSelectedPath] = useState(null);
  const [questions, setQuestions] = useState([]);

  const impactoAmbientalQuestions = [
    { pergunta: 'Qual é um dos principais impactos ambientais da produção de eletrônicos?', resp1: 'Aumento da biodiversidade.', resp2: 'Emissão de gases de efeito estufa.', resp3: 'Melhoria na qualidade do solo.', respcorreta: 'Emissão de gases de efeito estufa.' },
    { pergunta: 'Como o descarte inadequado de lixo eletrônico afeta o meio ambiente?', resp1: 'Diminui a poluição do solo.', resp2: 'Contamina o solo e a água com substâncias tóxicas.', resp3: 'Não causa nenhum impacto significativo.', respcorreta: 'Contamina o solo e a água com substâncias tóxicas.' },
  ];

  const tecnologiasSustentaveisQuestions = [
    { pergunta: 'Qual destas é uma tecnologia considerada sustentável?', resp1: 'Carros movidos a combustíveis fósseis.', resp2: 'Painéis solares para geração de energia.', resp3: 'Usinas termelétricas a carvão.', respcorreta: 'Painéis solares para geração de energia.' },
    { pergunta: 'O que caracteriza uma tecnologia como sustentável?', resp1: 'Baixo custo de produção.', resp2: 'Uso eficiente de recursos e redução de impactos ambientais.', resp3: 'Alta demanda energética.', respcorreta: 'Uso eficiente de recursos e redução de impactos ambientais.' },
  ];

  const consumoConscienteQuestions = [
    { pergunta: 'O que é consumo consciente de tecnologia?', resp1: 'Comprar o maior número possível de dispositivos.', resp2: 'Utilizar dispositivos até o fim de sua vida útil e descartar corretamente.', resp3: 'Substituir dispositivos regularmente, mesmo que funcionem.', respcorreta: 'Utilizar dispositivos até o fim de sua vida útil e descartar corretamente.' },
    { pergunta: 'Qual atitude contribui para um consumo consciente?', resp1: 'Atualizar aparelhos sempre que um novo modelo for lançado.', resp2: 'Reutilizar e reciclar componentes eletrônicos.', resp3: 'Descartar eletrônicos em lixo comum.', respcorreta: 'Reutilizar e reciclar componentes eletrônicos.' },
  ];


  const startImpacto = () => {
    setQuestions(impactoAmbientalQuestions);
    setSelectedPath('impacto');
  };

  const startSustentavel = () => {
    setQuestions(tecnologiasSustentaveisQuestions);
    setSelectedPath('sustentavel');
  };

  const startConsumo = () => {
    setQuestions(consumoConscienteQuestions);
    setSelectedPath('consumo');
  };

  return (
    <div className="App">
      {!selectedPath ? (
        <ChoosePath
          pathImpacto={startImpacto}
          pathSustentavel={startSustentavel}
          pathConsumo={startConsumo}
        />
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
}

export default App;