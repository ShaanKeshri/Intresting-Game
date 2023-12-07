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
          <h2>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
            🥳
          </h2>
        </>
      );
    }
    if (!winner && boardfull) {
      return (
        <>
          {' '}
          <span className="text-orange">Game Tied</span>
        </>
      );
    }
    if (!winner && !boardfull) {
      return (
        <>
          <span className="text-black">Next Player is </span>
          <span className={playerO ? 'text-green' : 'text-orange'}>
            <b>{playerName}</b>
          </span>
        </>
      );
    }
    return null;
  };
  return <div className="status-massage">{renderResult()}</div>;
};
export default Result;
