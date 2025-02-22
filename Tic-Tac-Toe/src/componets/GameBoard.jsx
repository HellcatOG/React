export default function GameBoard() {
  const initialGameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((PlayerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{PlayerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
