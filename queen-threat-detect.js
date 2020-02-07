const generateBoard = function(wq, bq) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  board[wq[0]][wq[1]] = 1;
  board[bq[0]][bq[1]] = 1;
  return board;
};
const queenThreat = function(board) {
  let queen1, queen2;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queen1 = [i, j];
        break;
      }
    }
  }
  for (let i = 7; i >= 0; i--) {
    for (let j = 7; j >= 0; j--) {
      if (board[i][j] === 1) {
        queen2 = [i, j];
        break;
      }
    }
  }
  if (
    queen1[0] === queen2[0] ||
    queen1[1] === queen2[1] ||
    Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])
  ) {
    return true;
  }
  return false;
};

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
