let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = choices[(Math.floor(Math.random() * choices.length))]; 
  console.log("computer's choice was: " + choice);
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let feedback;
  if (playerSelection === computerSelection) {
    feedback = "tie";
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        feedback = "you lost";
      }
      if (computerSelection === "scissors") {
        feedback = "you won";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        feedback = "you lost";
      }
      if (computerSelection === "rock") {
        feedback = "you won";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        feedback = "you lost";
      }
      if (computerSelection === "paper") {
        feedback = "you won";
      }
    }
  }
  return feedback;
}

let playerSelection = prompt("What would you like to play? (Rock, paper or scissors):").toLowerCase()
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));