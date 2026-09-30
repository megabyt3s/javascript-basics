const randomWords = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll("button");
  const results = document.querySelector("#results");
  const score = document.querySelector("#score");

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
      results.textContent = "You win! Rock beats Scissors.";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      results.textContent = "You win! Paper beats Rock.";
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      results.textContent = "You win! Scissors beats Paper.";
      humanScore++;
    } else if (humanChoice === computerChoice) {
      results.textContent = "It's a tie!";
    } else {
      results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    }

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
      results.textContent = "You won the game!";

      buttons.forEach((button) => {
        button.disabled = true;
      });
    } else if (computerScore === 5) {
      results.textContent = "Computer won the game!";

      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const computerSelection = getComputerChoice();

      playRound(button.value, computerSelection);
    });
  });
}

playGame();

//previous work before cleanup
/*const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");
  const results = document.querySelector("#results");
  const score = document.querySelector("#score");

   rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
  });

  paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
  });

  scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
  });
}
*/
