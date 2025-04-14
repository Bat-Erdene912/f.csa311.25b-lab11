export type Player = 'X' | 'O' | null;
export type GameState = {
  board: Player[];
  isXNext: boolean;
  history: Player[][];
};

export function createNewGame(): GameState {
  return {
    board: Array(9).fill(null),
    isXNext: true,
    history: [Array(9).fill(null)],
  };
}

export function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
