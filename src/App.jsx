import { useState } from 'react';

import './styles.scss';
import Board from './components/Board';
import Result from './components/Result';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [playerO, setPlayerO] = useState(false);

  const winner = calculateWinner(squares);

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
      <Result winner={winner} playerO={playerO} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
