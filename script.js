let gameBoard = [];
let currentPlayer = "X";
let gameOver = false;

for (let i = 0; i < 9; i++) {
  gameBoard.push("");
}

function makeMove(cellIndex) {
  if (gameOver) return;
  if (gameBoard[cellIndex]!== "") return;
  gameBoard[cellIndex] = currentPlayer;
  document.getElementById(`cell-${cellIndex}`).innerText = currentPlayer;
  checkWin();
  currentPlayer = currentPlayer === "X"? "O" : "X";
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (
      gameBoard[condition[0]]!== "" &&
      gameBoard[condition[0]] === gameBoard[condition[1]] &&
      gameBoard[condition[0]] === gameBoard[condition[2]]
    ) {
      document.getElementById("game-status").innerText = `Player ${gameBoard[condition[0]]} wins!`;
      gameOver = true;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    document.getElementById("game-status").innerText = "It's a draw!";
    gameOver = true;
  }
}