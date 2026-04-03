function getComputerChoice() {
    const v = Math.floor(Math.random() * 3);
    if (v === 0) return "rock";
    if (v === 1) return "paper";
    return "scissors";
}

function getUserChoice() {
    while (true) {
        const raw = prompt("Enter your choice: rock, paper, or scissors");
        if (raw === null) return null;

        const move = raw.trim().toLowerCase();
        if (move === "rock" || move === "paper" || move === "scissors") {
            return move;
        }
        alert("invalid. Try rock, paper or scissors.");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const h = humanChoice.trim().toLowerCase();
    if (h === computerChoice) {
        console.log("it's a tie");
    } else if (h === "rock" && computerChoice === "scissors") {
        console.log("You win");
        humanScore += 1;
    } else if (h === "scissors" && computerChoice === "paper") {
        console.log("You win");
        humanScore += 1;
    } else if (h === "paper" && computerChoice === "rock") {
        console.log("You win");
        humanScore += 1;
    } else {
        console.log("You lose");
        computerScore += 1;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getUserChoice();

        if (humanChoice === null) {
            console.log("Game cancelled.");
            return;
        }
        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) {
        console.log(`Computer: ${computerScore}, You: ${humanScore} — computer wins`);
    } else if (computerScore < humanScore) {
        console.log(`Computer: ${computerScore}, You: ${humanScore} — you win`);
    } else {
        console.log(`Computer: ${computerScore}, You: ${humanScore} — it's a tie`);
    }
}

playGame();
