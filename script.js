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
    return "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    playerScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    playerScore += 1;
    return "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    computerScore += 1;
    return "You Lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    playerScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    computerScore += 1;
    return "You Lose! Rock beats Scissors";
  } else {
    return "It's a draw";
  }
}

// console.log(playRound(playerSelection, getComputerChoice()));

const game = function () {
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

game();
