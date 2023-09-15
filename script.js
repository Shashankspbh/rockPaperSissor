let userScore = document.querySelector(".player-score");
let compScore = document.querySelector(".computer-score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let roundResult = document.querySelector(".round-result");
let gameResult = document.querySelector(".game-result");
let resetButton = document.getElementById("reset");
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// Compare User's choice with computer's choice to get the winner
function playRound(playerSelection, computerSelection) {
  //   console.log(computerSelection);
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    computerScore += 1;
    roundResult.textContent = "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    playerScore += 1;
    roundResult.textContent = "You Win! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    playerScore += 1;
    roundResult.textContent = "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    computerScore += 1;
    roundResult.textContent = "You Lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    playerScore += 1;
    roundResult.textContent = "You Win! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    computerScore += 1;
    roundResult.textContent = "You Lose! Rock beats Scissors";
  } else {
    roundResult.textContent = "It's a draw";
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

const reset = function () {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  userScore.textContent = 0;
  compScore.textContent = 0;
  gameResult.textContent = "";
  roundResult.textContent = "";
  userScore.textContent = 0;
  compScore.textContent = 0;
  rock.removeAttribute("disabled");
  paper.removeAttribute("disabled");
  scissor.removeAttribute("disabled");
  resetButton.style.visibility = "hidden";
};

const checkWinner = function (playerScore, computerScore) {
  // console.log(playerScore);
  if (rounds === 5) {
    if (playerScore > computerScore)
      gameResult.textContent = `You won! ${playerScore} vs ${computerScore}`;
    else if (computerScore > playerScore)
      gameResult.textContent = `Computer won! ${computerScore} vs ${playerScore}`;
    else gameResult.textContent = "It's a draw";
    resetButton.style.visibility = "visible";
    rock.removeEventListener("click", clickEvent);
    paper.removeEventListener("click", clickEvent);
    scissor.removeEventListener("click", clickEvent);
  }
};

function clickEvent(e) {
  // console.log(this.id);
  rounds += 1;
  game(this.id);
  checkWinner(playerScore, computerScore);
}

rock.addEventListener("click", clickEvent);
paper.addEventListener("click", clickEvent);
scissor.addEventListener("click", clickEvent);

resetButton.addEventListener("click", function () {
  reset();
});

//this is a test comment to test git branch -rps-ui
