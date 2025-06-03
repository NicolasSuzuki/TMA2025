import styles from './FirstD3.module.css'
import { useRef, useEffect, useState } from "react"

function FirstD3({ reboot, passFase }) {
  const word = 'sustentável'
  const [letters, setLetters] = useState([])
  const [guesses, setGuesses] = useState(-1)
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  // Processa a letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    // Verifica se a letra já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    // Se a letra existe na palavra, adiciona à lista de acertadas
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter])
    } else {
      setGuesses(0)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates()
      reboot()
    }
  }, [guesses, reboot])

  const verify = () => {
    const uniqueLetters = [...new Set(letters)]
    // Condição de vitória
    if (guessedLetters.length === uniqueLetters.length) {
      passFase()
    }
  }

  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus()
  }

  useEffect(() => {
    let wordLetters = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split('') 
    // normalize para remover acentos para facilitar comparação
    wordLetters = wordLetters.map((i) => i.toLowerCase())
    setLetters(wordLetters)
    clearLetterStates()
  }, [word])

  return (
    <div className="FirstD3">
      <h1>Adivinhe a palavra relacionada aos ODS:</h1>

      <div className={styles.wordContainer}>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>{letter}</span>
          ) : (
            <span key={i} className={styles.blankSquare}></span>
          )
        )}
      </div>

      <div className={styles.letterContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            autoComplete="off"
          />
          <button type="submit" onClick={verify}>
            Jogar!
          </button>
        </form>
      </div>
    </div>
  )
}

export default FirstD3

