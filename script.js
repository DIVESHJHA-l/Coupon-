const board = document.getElementById("board");
const statusText = document.getElementById("status");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

let cells = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let scores = { X: 0, O: 0 };

function drawBoard() {
  board.innerHTML = "";
    cells.forEach((cell, i) => {
        const div = document.createElement("div");
            div.classList.add("cell");
                div.textContent = cell;
                    div.addEventListener("click", () => playerMove(i));
                        board.appendChild(div);
                          });
                          }

                          function playerMove(index) {
                            if (cells[index] === "" && !gameOver) {
                                cells[index] = "X";
                                    checkWinner();
                                        drawBoard();
                                            
                                                if (!gameOver) {
                                                      setTimeout(aiMove, 500); // AI move after delay
                                                          }
                                                            }
                                                            }

                                                            function aiMove() {
                                                              const emptyCells = cells
                                                                  .map((val, i) => (val === "" ? i : null))
                                                                      .filter(i => i !== null);
                                                                        
                                                                          if (emptyCells.length === 0 || gameOver) return;
                                                                            
                                                                              const randIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                                                                                cells[randIndex] = "O";
                                                                                  checkWinner();
                                                                                    drawBoard();
                                                                                    }

                                                                                    function checkWinner() {
                                                                                      const winCombos = [
                                                                                          [0, 1, 2],
                                                                                              [3, 4, 5],
                                                                                                  [6, 7, 8],
                                                                                                      [0, 3, 6],
                                                                                                          [1, 4, 7],
                                                                                                              [2, 5, 8],
                                                                                                                  [0, 4, 8],
                                                                                                                      [2, 4, 6]
                                                                                                                        ];
                                                                                                                          
                                                                                                                            winCombos.forEach(combo => {
                                                                                                                                const [a, b, c] = combo;
                                                                                                                                    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                                                                                                                                          gameOver = true;
                                                                                                                                                statusText.textContent = `${cells[a]} Wins!`;
                                                                                                                                                      scores[cells[a]]++;
                                                                                                                                                            updateScores();
                                                                                                                                                                }
                                                                                                                                                                  });
                                                                                                                                                                    
                                                                                                                                                                      if (!gameOver && !cells.includes("")) {
                                                                                                                                                                          gameOver = true;
                                                                                                                                                                              statusText.textContent = "It's a Draw!";
                                                                                                                                                                                }
                                                                                                                                                                                }

                                                                                                                                                                                function updateScores() {
                                                                                                                                                                                  scoreX.textContent = scores.X;
                                                                                                                                                                                    scoreO.textContent = scores.O;
                                                                                                                                                                                    }

                                                                                                                                                                                    function resetGame() {
                                                                                                                                                                                      cells = ["", "", "", "", "", "", "", "", ""];
                                                                                                                                                                                        gameOver = false;
                                                                                                                                                                                          statusText.textContent = "";
                                                                                                                                                                                            drawBoard();
                                                                                                                                                                                            }

                                                                                                                                                                                            drawBoard();