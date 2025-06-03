import React from 'react';
import './Start.css';

function Start({ tries, pathing }) {
  const startStyle = {
    // Remova a cor de fundo do JavaScript, pois ela será definida no CSS
  };

  return (
    <div className="Start" style={startStyle}>
      <div class="mask"></div>
      <div class="quiz-title">
        <span class="filled">ODS</span>
        <span class="outline">QUIZ</span>
      </div>

      <div className="overlay">
        {/* Conteúdo centralizado sobre a imagem de fundo */}
        <button className="button" onClick={pathing}>Start Game</button>
        <p> Quantidade de jogadas: {tries}</p>
      </div>
    </div>
  );
}

export default Start;
