function computerPlay() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let result = getRandomInt(3);
  if (result == 0) {
    return "Rock";
  } else if (result == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function singleRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  console.log("you" + playerSelection)
  console.log("comp " + computerSelection)
  if (
    (playerSelection == "rock" && computerSelection == "Paper") ||
    (playerSelection == "paper" && computerSelection == "Scissors") ||
    (playerSelection == "scissors" && computerSelection == "Rock")
  ) {
    return computerScore = computerScore + 1;
  } else if (
    (playerSelection == "rock" && computerSelection == "Scissors") ||
    (playerSelection == "paper" && computerSelection == "Rock") ||
    (playerSelection == "scissors" && computerSelection == "Paper")
  ) {
    return playerScore = playerScore + 1;
  } else {
    return draws = draws + 1;
  }
}

let computerScore = 0;
let playerScore = 0;
let draws = 0;
const roundWinner = document.getElementById('round-results');

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "orange";
    setTimeout(function () {
      event.target.style.backgroundColor = "";
    }, 400);
  }, false);
});

function initialize() {
  let el = document.getElementById('intro-screen');
  el.style.display = 'none';
}

document.getElementById("rock").addEventListener('click', function () {
  singleRound("rock", computerPlay());
  roundWinner.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore} - Draws: ${draws}.`;
  calculateWinner();
});

document.getElementById("paper").addEventListener('click', function () {
  singleRound("paper", computerPlay());
  roundWinner.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore} - Draws: ${draws}.`;
  calculateWinner();
});

document.getElementById("scissors").addEventListener('click', function () {
  singleRound("scissors", computerPlay());
  roundWinner.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore} - Draws: ${draws}.`;
  calculateWinner();
});

function finalResult(winner) {
    let playerScore = document.getElementById("final-winner");
    playerScore.textContent = `${winner} Won!!!`;
    let el = document.getElementById('final-results');
    el.style.display = 'flex';
}

function calculateWinner() {
  if(computerScore == 5) {
    finalResult("Dragon");
  } else if (playerScore == 5) {
    finalResult("You");
  }
}

