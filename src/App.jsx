import { useEffect, useState } from 'react'
import { results } from './constants/wordleWords'

const WORD_LENGTH = 5

function App () {
  const [solution, setSolution] = useState('')
  const [guesses, setGuesses] = useState(Array(6).fill(null))

  useEffect(() => {
    const randomWord = results[Math.floor(Math.random() * 335)]

    setSolution(randomWord)
  }, [])

  return (
    <>
      <h1>Tech Interview Wordle</h1>
      <h2>Word to guess = {solution}</h2>
      <div className='board'>
        {
          guesses.map((guess, index) => {
            return (
              <Lines
                guess={guess ?? 'abcde'}
                key={index}
              />
            )
          })

        }
      </div>
    </>
  )
}

export default App

function Lines ({ guess }) {
  const tiles = []

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i]
    tiles.push(
      <div key={i} className='tile'>
        {char}
      </div>
    )
  }

  return <div className='line'>{tiles}</div>
}
