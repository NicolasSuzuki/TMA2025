import React from 'react';
import './Start.css';

function Start({ tries, pathing }) {
  const startStyle = {
  };

  return (
    <div className="Start" style={startStyle}>
      <div className="overlay">
        <button onClick={pathing}>Start Game</button>
        <p> Quantidade de jogadas: {tries}</p>
      </div>
    </div>
  );
}

export default Start;
