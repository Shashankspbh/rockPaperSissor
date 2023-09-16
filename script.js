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
  const choices = ["rock", "paper", "scissor"];
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
    computerSelection == "scissor"
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
    computerSelection == "scissor"
  ) {
    computerScore += 1;
    roundResult.textContent = "You Lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection == "paper"
  ) {
    playerScore += 1;
    roundResult.textContent = "You Win! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection == "rock"
  ) {
    computerScore += 1;
    roundResult.textContent = "You Lose! Rock beats Scissors";
  } else {
    roundResult.textContent = `It's a tie! Both chose ${playerSelection}`;
  }
}

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
  rock.addEventListener("click", clickEvent);
  paper.addEventListener("click", clickEvent);
  scissor.addEventListener("click", clickEvent);
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
  console.log(this.id);
  game(this.id);
  checkWinner(playerScore, computerScore);
}

rock.addEventListener("click", clickEvent);
paper.addEventListener("click", clickEvent);
scissor.addEventListener("click", clickEvent);

resetButton.addEventListener("click", function () {
  reset();
});
