const btn = document.querySelectorAll(".btn");
const msg = document.querySelector(".message");
const hScore = document.querySelector("#human-score");
const rScore = document.querySelector("#robot-score");
const drawNode = document.querySelector("#draw");
const winner = document.querySelector(".winner");

btn.forEach(choice => {
  choice.addEventListener('click', (e) => {
    let humanChoice = e.target.textContent.trim().toLowerCase();
    playRound(getComputerChoice(),humanChoice);
  });
});


let humanScore = 0, computerScore = 0, draw = 0, numOfGames = 0;

function updateScore() {
  hScore.textContent = humanScore;
  rScore.textContent = computerScore;
  drawNode.textContent = draw;
}

function displayWinner() {
  const para = document.createElement("p");
  const reset = document.createElement("button");
  reset.textContent = "Reset";
  if (humanScore > computerScore) {
    para.textContent = "Winner: Human";
  } else if (computerScore > humanScore) {
    para.textContent = "Winner: Computer";
  } else {
    para.textContent = "It's a Draw!";
  }

  winner.appendChild(para);
  winner.appendChild(reset);

  disableButtons();

  reset.addEventListener("click", gameReset);
}

function gameReset() {
  humanScore = 0;
  computerScore = 0;
  draw = 0;
  hScore.textContent = 0;
  rScore.textContent = 0;
  drawNode.textContent = 0;

  numOfGames = 0


  while (winner.firstChild) {
    winner.removeChild(winner.firstChild);
  }

  enableButtons();
}

function disableButtons() {
  btn.forEach(choice => {
    choice.disabled = true;
  });
}

function enableButtons() {
  btn.forEach(choice => {
    choice.disabled = false;
  });
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 100) % 3;
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(computerChoice, humanChoice) {

  if (humanChoice === computerChoice) {
    draw++;
  }else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
    humanScore++;
  } else {
    computerScore++;
  }

  updateScore();
  numOfGames++;

  if (numOfGames === 5) {
    displayWinner();    
  }
}

