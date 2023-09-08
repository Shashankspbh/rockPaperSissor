let userScore = document.querySelector(".player-score");
let compScore = document.querySelector(".computer-score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let result = document.querySelector(".result");
// Get computer's choice
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};
let playerScore = 0;
let computerScore = 0;
// Get the user's choice
// Compare User's choice with computer's choice to get the winner
function playRound(playerSelection, computerSelection) {
  //   console.log(computerSelection);
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    computerScore += 1;
    result.textContent = "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    playerScore += 1;
    result.textContent = "You Win! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    playerScore += 1;
    result.textContent = "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    computerScore += 1;
    result.textContent = "You Lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    playerScore += 1;
    result.textContent = "You Win! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    computerScore += 1;
    result.textContent = "You Lose! Rock beats Scissors";
  } else {
    result.textContent = "It's a draw";
  }
}

// console.log(playRound(playerSelection, getComputerChoice()));
/*
const game = function () {
  let playerSelection;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter your choice between Rock, Paper and Scissors"
    );
    console.log(playRound(playerSelection, getComputerChoice()));
  }
  if (playerScore > computerScore)
    console.log(`Player won! ${playerScore} vs ${computerScore}`);
  else if (computerScore > playerScore)
    console.log(`Computer won! ${computerScore} vs ${playerScore}`);
  else console.log("It's a draw");
};
*/

const game = function (selection) {
  playRound(selection, getComputerChoice());
  userScore.textContent = playerScore;
  compScore.textContent = computerScore;
};

rock.addEventListener("click", function () {
  game("rock");
});
paper.addEventListener("click", function () {
  game("paper");
});
scissor.addEventListener("click", function () {
  game("scissors");
});
