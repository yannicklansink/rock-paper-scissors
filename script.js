function computerPlay() {
    number = Math.floor(Math.random() * 3);
    
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    }
};

function game(playerSelection, computerSelection = computerPlay()) {
    let playerInput = playerSelection.toLowerCase();
    if (playerInput === computerSelection) {
        return `This is a draw... ${playerInput} is equal to ${computerSelection}`
    } else if (playerInput === "rock" && computerSelection === "scissors") {
        return `You Won! ${playerInput} beats ${computerSelection}`;
    } else if (playerInput === "paper" && computerSelection === "rock") {
        return `You Won! ${playerInput} beats ${computerSelection}`;
    } else if (playerInput === "scissors" && computerSelection === "paper") {
        return `You Won! ${playerInput} beats ${computerSelection}`;
    } else if (playerInput === "rock" && computerSelection === "paper") {
        return `You Lost! ${computerSelection} beats ${playerInput}`;
    } else if (playerInput === "paper" && computerSelection === "scissors") {
        return `You Lost! ${computerSelection} beats ${playerInput}`;
    } else if (playerInput === "scissors" && computerSelection === "rock") {
        return `You Lost! ${computerSelection} beats ${playerInput}`;
    } 
}

console.log(game("Scissors", computerPlay()));