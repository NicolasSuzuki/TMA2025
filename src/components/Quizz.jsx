import React, { useState } from 'react';

function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[current].respcorreta) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div>
          <h2>Parabéns! Você concluiu o quiz.</h2>
          <p>Acertou {score} de {questions.length} perguntas.</p>
        </div>
      ) : (
        <div>
          <h3>{questions[current].pergunta}</h3>
          <button onClick={() => handleAnswer(questions[current].resp1)}>{questions[current].resp1}</button>
          <button onClick={() => handleAnswer(questions[current].resp2)}>{questions[current].resp2}</button>
          <button onClick={() => handleAnswer(questions[current].resp3)}>{questions[current].resp3}</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
