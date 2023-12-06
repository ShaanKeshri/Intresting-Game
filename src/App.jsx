import { useState } from 'react';

import './styles.scss';
import Board from './components/Board';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [playerO, setPlayero] = useState(false);

  const playerName = playerO ? 'X' : 'O';

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) {
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
    setPlayero(currentPlayero => !currentPlayero);
  };

  return (
    <div className="app">
      <h2>Next Player is {playerName}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
