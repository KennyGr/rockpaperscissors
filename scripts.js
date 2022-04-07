function computerPlay() {
outputDefiner = Math.random();
if (outputDefiner <= 0.33) {
    return "Rock"
} else if (outputDefiner > 0.33 && outputDefiner <= 0.66) {
    return "Paper" 
} else {
    return "Scissors"
}
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! Rock and Rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! Paper and Paper"   
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! Scissors and Scissors" 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock" 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors" 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper" 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock" 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors" 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
}
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter your choice:");
        result = playRound(userInput, computerSelection);
        console.log(result)
        if (result.includes("It's a tie!")) {

        } else if (result.includes("You Win!")) {
            playerScore += 1;
        } else if (result.includes("You Lose!")) {
            computerScore += 1;
        }
}
}


const computerSelection = computerPlay().toLowerCase();
let computerScore = 0;
let playerScore = 0;

game();

if (playerScore > computerScore) {
    console.log("You win! " + playerScore + " to " + computerScore);
} else if (computerScore > playerScore) {
    console.log("You lose! " + computerScore + " to " + playerScore);
} else {
    console.log("It's a tie! " + playerScore + " to " + computerScore);
}

