import React, { useState } from 'react';
import './App.css';
import Cell from './Cell';
import { calculateWinner } from './game';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setHistory([...history, newBoard]);
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setBoard(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
      setIsXNext(!isXNext);
    }
  };

  return (
    <div className="game">
      <h1>TicTacToe</h1>
      <div id="instructions">
        <p>Ээлж: {isXNext ? "X" : "O"}</p>
        <p>{winner ? `Ялагч: ${winner}` : ""}</p>
      </div>
      <div className="board">
        {board.map((value, i) => (
          <Cell key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}

export default App;
