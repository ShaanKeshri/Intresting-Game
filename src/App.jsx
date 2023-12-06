import { useState } from 'react';

import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [playerO, setPlayerO] = useState(false);

  const winner = calculateWinner(squares);

  const playerName = playerO ? 'X' : 'O';
  const result = winner
    ? `Winner is ${winner}🥳`
    : `Next Player is ${playerName}`;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition == position) {
          return playerO ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setPlayerO(currentPlayero => !currentPlayero);
  };

  return (
    <div className="app">
      <h2>{result}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
