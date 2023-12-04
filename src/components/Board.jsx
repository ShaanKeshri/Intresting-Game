import { useState } from 'react';

import Square from './Square';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(Square);

  const handleSquareClick = clickedPosition => {
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition == position) {
          return 'X';
        }
        return squareValue;
      });
    });
  };
  const renderSqure = clickedPosition => {
    return (
      <Square
        value={squares[clickedPosition]}
        onclick={() => handleSquareClick(clickedPosition)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSqure(0)}
        {renderSqure(1)}
        {renderSqure(2)}
      </div>
      <div className="board-row">
        {renderSqure(3)}
        {renderSqure(4)}
        {renderSqure(5)}
      </div>
      <div className="board-row">
        {renderSqure(6)}
        {renderSqure(7)}
        {renderSqure(8)}
      </div>
    </div>
  );
};
export default Board;
