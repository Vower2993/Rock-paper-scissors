function getComputerChoice() {
    const v = Math.floor(Math.random() * 3);
    if (v === 0) return "rock";
    if (v === 1) return "paper";
    return "scissors";
}