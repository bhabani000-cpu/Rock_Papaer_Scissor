import { useState } from 'react'
import './App.css'
import { playMove } from './computermov'

function App() {
  const [result, setResult] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [playerChoice, setPlayerChoice] = useState(null)

  const handlePlay = (choice) => {
    const { result, computerMove, playerMove } = playMove(choice)
    setResult(result)
    setComputerChoice(computerMove)
    setPlayerChoice(playerMove)
  }

  return (
    <div className="container">
      <header>
          <h1>Rock Paper Scissors</h1>
          <p>Let's play a game! Choose your move below.</p>
      </header>

      <div className="scoreboard">
          <div className="player-zone">
              <h2>You</h2>
              <div id="player_move">{playerChoice}</div>
              <div id="player_score"></div>
          </div>
          
          <div className="vs-badge">VS</div>
          
          <div className="player-zone">
              <h2>Computer</h2>
              <div id="computer_move">{computerChoice}</div>
              <div id="computer_score"></div>
          </div>
      </div>

      <div className="result-area">
          <h2 id="result">{result ? result : 'Choose your move!'}</h2>
      </div>
      
      <div className="choices">
          <button onClick={() => handlePlay('Rock')}>Rock</button>
          <button onClick={() => handlePlay('Paper')}>Paper</button>
          <button onClick={() => handlePlay('Scissors')}>Scissors</button>
      </div>
    </div>
  )
}

export default App
