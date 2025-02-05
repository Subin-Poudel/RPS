// ask user for his input 
// turn that shit into lowercase
// generate random numbers
// based on numbers make the computer play a hand
// compare those shits
// declare winner/loser
// update the scores
// 
//
// do this shit 5 times 
//
// print the scores
//

let humanScore = 0, computerScore = 0;

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

function getHumanChoice() {
  while (1) {
    let choice = prompt("Enter your hand");
    c = choice.toLowerCase();
    if (c === 'rock' || c === 'paper' || c === 'scissors') {
      return c;
    }else {
      alert("Choose\n'rock','paper' or 'scissors'");
    }
  }
}

function playRound(computerChoice, humanChoice) {

  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  }else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }  
  console.log(`\tScore\n-----------------------------\nHuman: ${humanScore}\tComputer: ${computerScore}`);
}

playGame();

