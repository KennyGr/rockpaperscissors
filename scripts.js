const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const para = document.createElement('p');
const score = document.createElement("p");
const computerScoreboard = document.querySelector('#computerScoreboard');
const playerScoreboard = document.querySelector('#playerScoreboard');
const boomSound = document.querySelector("#boom");
const victorySound = document.querySelector("#victory");
const defeatSound = document.querySelector("#defeat");

rockButton.addEventListener("click", function() {
    if (computerScore < 4 && playerScore < 4) {
        playRound("rock", computerPlay());
        boomSound.volume = 0.25;
        boomSound.play();
        boomSound.currentTime = 0;
    } else {
        playRound("rock", computerPlay());
    }
});

paperButton.addEventListener("click", function() {
    if (computerScore < 4 && playerScore < 4) {
        playRound("paper", computerPlay());
        boomSound.volume = 0.25;
        boomSound.play();
        boomSound.currentTime = 0;
    } else {
        playRound("rock", computerPlay());
    }
});

scissorsButton.addEventListener("click", function() {
    if (computerScore < 4 && playerScore < 4) {
        playRound("scissors", computerPlay());
        boomSound.volume = 0.25;
        boomSound.play();
        boomSound.currentTime = 0;
    } else {
        playRound("rock", computerPlay());
    }
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

    playerScoreboard.textContent = playerScore
    computerScoreboard.textContent = computerScore
  //  results.appendChild(score); 

    } else {
        if (computerScore == 5) {
            computerScoreboard.textContent = "5"
            para.textContent = "Game Over! You Lose!";
            defeatSound.volume = 0.25;
            defeatSound.play();
        } else {
            playerScoreboard.textContent = "5"
            para.textContent = "Game Over! You Win!";
            victorySound.volume = 0.25;
            victorySound.play();
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
