let humanScore = 0;
let computerScore = 0;
let roundsplayed = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons =document.querySelectorAll("button");

function getComputerChoice() {
    const v = Math.floor(Math.random() * 3);
    if (v === 0) return "rock";
    if (v === 1) return "paper";
    return "scissors";
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "it's a tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
         humanScore += 1;
         return "You win";
       
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
         humanScore += 1;
         return "You win";
       
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        return "You win";
        
    } else {
         computerScore += 1;
         return "You lose";
       }
}

 
 buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
       

        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        let answer = playRound(humanChoice,computerChoice);
        document.getElementById('result').textContent = answer;
        document.getElementById('humanS').textContent = humanScore;
        document.getElementById('computerS').textContent = computerScore;
        
        if (humanScore === 5 || computerScore === 5 ){
            buttons.forEach(btn => btn.disabled = true);
            if (humanScore === 5){
                 alert("GAME OVER,YOU WIN");
            }
           else{
                alert("GAME OVER,YOU LOSE");
            }
        }
    }
    
    )
     
})





