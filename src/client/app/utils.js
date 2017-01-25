export const getNewGameState = () => {
  const board = [];

  for (let r = 0; r < 6; r++) {
    let row = [];
    for (let c = 0; c < 7; c++) { row.push(null) }
    board.push(row);
  }

  return {
    board,
    currentPlayer: 1,
    gameOver: false,
    message: ''
  };
};

export const checkForWinner = (currentPlayer, result, board) => {
  if (result === 1) {
    return { board, gameOver: true, message: 'Player 1 (red) wins!' };
  } else if (result === 2) {
    return { board, gameOver: true, message: 'Player 2 (yellow) wins!' };
  } else if (result === 'draw') {
    return { board, gameOver: true, message: 'Draw game.' };
  }
  
  return { board, currentPlayer: (currentPlayer === 1) ? 2 : 1 };
};

export const getGameOverMessage = () => {
  return { message: 'Game over. Please start a new game.' };
};

export const getColor = (value) => {
  let color = 'white piece';
  if (value === 1) {
    color = 'red piece';
  } else if (value === 2) {
    color = 'yellow piece';
  }
  return color;
};

const checkVertical = (board) => {
  // Check only if row is 3 or greater
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]) {
          return board[r][c];    
        }
      }
    }
  }
};
  
const checkHorizontal = (board) => {
  // Check only if column is 3 or less
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r][c + 1] && 
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]) {
          return board[r][c];
        }
      }
    }
  }
};
  
const checkDiagonalRight = (board) => {
  // Check only if row is 3 or greater AND column is 3 or less
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]) {
          return board[r][c];
        }
      }
    }
  }
};
  
const checkDiagonalLeft = (board) => {
  // Check only if row is 3 or greater AND column is 3 or greater
  for (let r = 3; r < 6; r++) {
    for (let c = 3; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]) {
          return board[r][c];
        }
      }
    }
  }
};
  
const checkDraw = (board) => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c] === null) {
        return null;
      }
    }
  }
  return 'draw';
};
  
export const checkAll = (board) => {
  return checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board) || checkDraw(board);
};
