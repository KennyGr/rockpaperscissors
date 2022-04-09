const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const para = document.createElement('p');
const score = document.createElement("p");

rockButton.addEventListener("click", function() {
    playRound("rock", computerPlay());
});

paperButton.addEventListener("click", function() {
    playRound("paper", computerPlay());
});

scissorsButton.addEventListener("click", function() {
    playRound("scissors", computerPlay());
});

function computerPlay() {
outputDefiner = Math.random();
if (outputDefiner <= 0.33) {
    return "rock"
} else if (outputDefiner > 0.33 && outputDefiner <= 0.66) {
    return "paper" 
} else {
    return "scissors"
}
}

x = ""

function playRound(playerSelection, computerSelection) {
//    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock") {
        x = ("It's a tie! Rock and Rock")
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        x = "It's a tie! Paper and Paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        x = "It's a tie! Scissors and Scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        x = "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        x = "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        x = "You Lose! Scissors beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        x = "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        x = "You Lose! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        x = "You Win! Scissors beats Paper"
    }
    
    if (x.includes("Win")) {
        ++playerScore
    } else {
        ++computerScore
    }
    
    if (playerScore < 5 && computerScore < 5) {
    para.textContent = x;
    results.appendChild(para);

    score.textContent = "You: " + playerScore + " |  Computer:" + computerScore;
    results.appendChild(score); 

    } else {
        para.textContent = x;
        results.appendChild(para);
        score.textContent = "You: " + playerScore + " |  Computer:" + computerScore;
        results.appendChild(score); 
        if (computerScore == 5) {
            para.textContent = "Game Over! You Lose!";
        } else {
            para.textContent = "Game Over! You Win!";
        }
        results.appendChild(para);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

let computerScore = 0;
let playerScore = 0;




//function game() {
//    for (let i = 0; i < 5; i++) {
//        let userInput;
//        result = playRound(userInput, computerSelection);
//        console.log(result)
//        if (result.includes("It's a tie!")) {
//
//        } else if (result.includes("You Win!")) {
//            playerScore += 1;
//        } else if (result.includes("You Lose!")) {
//            computerScore += 1;
//        }
//}


//if (playerScore > computerScore) {
//    console.log("You win! " + playerScore + " to " + computerScore);
//} else if (computerScore > playerScore) {
//    console.log("You lose! " + computerScore + " to " + playerScore);
//} else {
//    console.log("It's a tie! " + playerScore + " to " + computerScore);
//}
