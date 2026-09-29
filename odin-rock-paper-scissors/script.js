function getHumanChoice() {
  let humanChoice = prompt("Please enter your action: ");

  while (
    humanChoice === null ||
    !["rock", "paper", "scissors"].includes(humanChoice.toLowerCase().trim())
  ) {
    if (humanChoice === null) {
      humanChoice = prompt("Please enter rock, paper, or scissors: ");
    } else {
      humanChoice = prompt(
        "Invalid choice. Please enter rock, paper, or scissors: ",
      );
    }
  }

  return humanChoice.toLowerCase().trim();
}

const randomWords = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper.");
      humanScore++;
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(
      `You chose: ${humanSelection}\nComputer chose: ${computerSelection}`,
    );
    playRound(humanSelection, computerSelection);
    console.log(`Score: You: ${humanScore} | Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(
      `You won the game! Final score: ${humanScore} - ${computerScore}`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost the game! Final score: ${humanScore} - ${computerScore}`,
    );
  } else {
    console.log(
      `It's a tie game! Final score: ${humanScore} - ${computerScore}`,
    );
  }
}

playGame();
