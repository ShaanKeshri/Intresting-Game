import { SassColor } from 'sass';

// eslint-disable-next-line react/prop-types
const Result = ({ winner, playerO, squares }) => {
  // eslint-disable-next-line react/prop-types
  const boardfull = squares.every(squareValue => squareValue !== null);

  const playerName = playerO ? 'X' : 'O';

  const renderResult = () => {
    if (winner) {
      return (
        <>
          <h1>
            Player{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner} is Winner
            </span>
            🥳
          </h1>
        </>
      );
    }
    if (!winner && boardfull) {
      return (
        <>
          {' '}
          <h1 className="text-orange">Game Tied</h1>
        </>
      );
    }
    if (!winner && !boardfull) {
      return (
        <>
          <h1>
            <span className="text-black">Player </span>
            <span className={playerO ? 'text-green' : 'text-orange'}>
              {playerName} Turn
            </span>
          </h1>
        </>
      );
    }
    return null;
  };
  return <div className="status-massage">{renderResult()}</div>;
};
export default Result;
