// Scoreboard Labels
const playerScoreLabel = document.getElementById("player-score-label");
const tiesScoreLabel = document.getElementById("ties-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");

// Selection Labels
const playerTurnLabel = document.getElementById("player-turn-label");
const computerTurnLabel = document.getElementById("computer-turn-label");

// Option Buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

let playerScore = 0;
let tiesScore = 0;
let computerScore = 0;

function gameRound(playerWeapon, computerWeapon) {
  if (playerWeapon === computerWeapon) {
    return "Tie";
  } else if (
    (playerWeapon === "rock" && computerWeapon === "scissor") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissor" && computerWeapon === "paper")
  ) {
    return "Gotcha!";
  } else {
    return "Have one more go!";
  }
}

function getComputerWeapon() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}

function gameHandler(playerWeapon) {
  const computerSelection = getComputerWeapon();
  const playerSelection = playerWeapon.toLowerCase();

  playerTurnLabel.textContent = playerSelection;
  computerTurnLabel.textContent = computerSelection;

  const result = gameRound(playerSelection, computerSelection);

  if (result === "Gotcha!") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (result === "Have one more go!") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    tiesScore++;
    tiesScoreLabel.textContent = tiesScore;
  }
}

rockBtn.addEventListener("click", () => gameHandler(rockBtn.textContent));
paperBtn.addEventListener("click", () => gameHandler(paperBtn.textContent));
scissorsBtn.addEventListener("click", () =>
  gameHandler(scissorsBtn.textContent)
);
