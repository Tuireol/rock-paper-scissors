let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = choices[(Math.floor(Math.random() * choices.length))]; 
  console.log("computer's choice was: " + choice);
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let winnerOfRound;
  if (playerSelection === computerSelection) {
    winnerOfRound = "nobody";
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        winnerOfRound = "computer";
      }
      if (computerSelection === "scissors") {
        winnerOfRound = "player";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        winnerOfRound = "computer";
      }
      if (computerSelection === "rock") {
        winnerOfRound = "player";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        winnerOfRound = "computer";
      }
      if (computerSelection === "paper") {
        winnerOfRound = "player";
      }
    }
  }
  return winnerOfRound;
}

function addScoreToWinner(winnerOfRound) {
  if (winnerOfRound === "tie") {
    return;
  } else {
    if (winnerOfRound === "player") {
      playerScore++;
    }
    if (winnerOfRound === "computer") {
      computerScore++;
    }
  }
}

function showScores() {
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
}

function game() {
  let playerSelection, computerSelection;
  for (let round = 1; round <= 5; round++) {
    playerSelection = prompt("What would you like to play? (Rock, paper or scissors):").toLowerCase()
    console.log("your selection was: " + playerSelection);
    computerSelection = getComputerChoice();
    let resultOfRound = playRound(playerSelection, computerSelection);
    addScoreToWinner(resultOfRound);
    showScores();
  }
}

let playerScore = 0, computerScore = 0;
game();