import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import First1 from './components/First1';
import FirstD1 from './components/FirstD1';
import FirstD2 from './components/FirstD2';
import FirstD3 from './components/FirstD3';
import FirstD4 from './components/FirstD4';
import ChoosePath from './components/ChoosePath';
import Error from './components/Error';
import FirstD6 from './components/FirstD6';
import FirstD7 from './components/FirstD7';
import FirstD5 from './components/FirstD5';
import { data } from './constants/questions';

function App() {

  const [tries, setTries] = useState(0);
  const [gameStage, setGameStage] = useState(-2);
  const [pergunta, setPergunta] = useState('');
  const [resp1, setResp1] = useState('');
  const [resp2, setResp2] = useState('');
  const [resp3, setResp3] = useState('');
  const [resp4, setResp4] = useState('');
  const [error, setError] = useState('errou');
  const [fase, setFase] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showCongratulationsMessage, setShowCongratulationsMessage] = useState(false);
  const [countPipe, setCountPipe] = useState(0);
  const [countAdress, setCountAdress] = useState(0);
  const [countHash, setCountHash] = useState(0);

  useEffect(() => {
    const totalFases = data.length / 4;

    if (fase === 5) {
      setShowCongratulations(true);
    } else if (gameStage >= 0) {
      setPergunta(data[gameStage].pergunta);
      setResp1(data[gameStage].resp1);
      setResp2(data[gameStage].resp2);
      setResp3(data[gameStage].resp3);
      setResp4(data[gameStage].respcorreta);
    }
  }, [gameStage, data, fase]);

  useEffect(() => {
    if (gameStage % 4 !== 0 && gameStage > 0) {
      //cai na mensagem de erro
      setError(data[gameStage].text);
      setShowCongratulationsMessage(false);
    }
  }, [gameStage, data]);

  const pathEndereco = () => {

    setGameStage(0)
    setShowCongratulationsMessage(false);
  };

  const pathPipe = () => {

    setGameStage(20);
    if (fase == 3) {
      setShowCongratulationsMessage(false);
    }
  };

  const pathHierarquia = () => {

    setGameStage(40);
    setShowCongratulationsMessage(false);
  };

  const passFase = () => {
    setFase((prevFase) => prevFase + 1);
    setGameStage((prevGameStage) => prevGameStage + 4);

  };

  const reboot = () => {
    setShowCongratulationsMessage(false); // Esconder a mensagem de parabéns ao voltar para o início
    setShowCongratulations(false);
    setGameStage(-2);
    setTries(tries + 1);
    setFase(0)
  };


  const won = () => {
    setShowCongratulationsMessage(false); // Esconder a mensagem de parabéns ao voltar para o início
    setShowCongratulations(false);
    setGameStage(-2);
    setFase(0)
  };

  const choose = () => {
    setGameStage(-1);
  };

  const error1 = () => {
    if (gameStage < 20) {
      setCountAdress((prevCountAdress) => prevCountAdress + 1);
      console.log(countAdress)
    }
    else if (gameStage >= 20 && gameStage < 40) {
      setCountPipe((prevCountPipe) => prevCountPipe + 1);
      console.log(countPipe)
    }
    else {
      setCountHash((prevCountHash) => prevCountHash + 1)
      console.log(countHash)
    }
    setGameStage((prevGameStage) => prevGameStage + 1);
  };

  const error2 = () => {
    if (gameStage < 20) {
      setCountAdress((prevCountAdress) => prevCountAdress + 1);
      console.log(countAdress)
    }
    else if (gameStage >= 20 && gameStage < 40) {
      setCountPipe((prevCountPipe) => prevCountPipe + 1);
      console.log(countPipe)
    }
    else {
      setCountHash((prevCountHash) => prevCountHash + 1)
      console.log(countHash)
    }
    setGameStage((prevGameStage) => prevGameStage + 2);
  };

  const error3 = () => {
    if (gameStage < 20) {
      setCountAdress((prevCountAdress) => prevCountAdress + 1);
      console.log(countAdress)
    }
    else if (gameStage >= 20 && gameStage < 40) {
      setCountPipe((prevCountPipe) => prevCountPipe + 1);
      console.log(countPipe)
    }
    else {
      setCountHash((prevCountHash) => prevCountHash + 1)
      console.log(countHash)
    }
    setGameStage((prevGameStage) => prevGameStage + 3);
  };


  return (
    <div className="App">
      {gameStage === -2 && <Start tries={tries} pathing={choose} />}
      {gameStage === -1 && (
        <ChoosePath
          pathEndereco={pathEndereco}
          pathPipe={pathPipe}
          pathHierarquia={pathHierarquia}
        ></ChoosePath>
      )}
      {gameStage % 4 === 0 && gameStage !== 4 && gameStage !== 12 && gameStage !== 20 && gameStage !== 24 && gameStage !== 48 && gameStage !== 52 && gameStage !== 56 && !showCongratulations && (
        <First1
          gameStage={fase}
          pergunta={pergunta}
          resp1={resp1}
          resp2={resp2}
          resp3={resp3}
          resp4={resp4}
          passFase={passFase}
          error1={error1}
          error2={error2}
          error3={error3}
        ></First1>
      )}
      {gameStage === 4 && !showCongratulations && <FirstD1
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD1>}


      {gameStage === 12 && !showCongratulations && <FirstD2
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD2>}
      {gameStage === 20 && !showCongratulations && <FirstD3
        reboot={reboot} passFase={passFase}></FirstD3>}

      {gameStage === 24 && !showCongratulations && <FirstD5
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD5>}


      {gameStage === 48 && !showCongratulations && <FirstD4
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD4>}

      {gameStage === 52 && !showCongratulations && <FirstD6 passFase={passFase} reboot={reboot}></FirstD6>}
      {gameStage === 56 && !showCongratulations && <FirstD7 gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD7>}

      {showCongratulations && (
        <div>
          <h2 style={{ color: 'gold' }}>Parabéns! Você respondeu todas as perguntas corretamente.</h2>
          <button onClick={won}>Voltar para o início</button>
        </div>
      )}

      {gameStage % 4 !== 0 && gameStage > 0 && (
        <Error text={error} reboot={reboot}>
          {' '}
        </Error>
      )}

    </div>
  );
}


export default App;