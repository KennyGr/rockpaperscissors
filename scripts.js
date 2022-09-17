const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const para = document.createElement('p');
const makeButton = document.createElement('button');
const score = document.createElement("p");
const computerScoreboard = document.querySelector('#computerScoreboard');
const playerScoreboard = document.querySelector('#playerScoreboard');
const boopSound = document.querySelector("#boop");
const victorySound = document.querySelector("#victory");
const defeatSound = document.querySelector("#defeat");
const tieSound = document.querySelector("#tie");
const winRoundSound = document.querySelector("#winRound");
const loseRoundSound = document.querySelector("#loseRound");
const playerPick = document.querySelector("#player-pick");
const cpuPick = document.querySelector("#cpu-pick");

let computerScore = 0;
let playerScore = 0;
let resultMessage = "";
let result = "";

rockButton.addEventListener("click", function() {
    setTimeout(function(){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        para.textContent = "";
        playerPick.textContent = "";
        cpuPick.textContent = "";
    }, 000)

    setTimeout(function(){
        playSound();
        playerPick.textContent = "✊";
    }, 300)

    setTimeout(function(){
        playRound("rock", computerPlay());
    }, 1400)

    setTimeout(function(){
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        displayResult();
    },2800)
});

paperButton.addEventListener("click", function() {
    setTimeout(function(){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        para.textContent = "";
        playerPick.textContent = "";
        cpuPick.textContent = "";
    }, 000)

    setTimeout(function(){
        playSound();
        playerPick.textContent = "🖐";
    }, 300)

    setTimeout(function(){
        playRound("paper", computerPlay());
    }, 1400)

    setTimeout(function() {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        displayResult();
    },2800)
});

scissorsButton.addEventListener("click", function() {
    setTimeout(function(){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        para.textContent = "";
        playerPick.textContent = "";
        cpuPick.textContent = "";
    }, 000)

    setTimeout(function(){
        playSound();
        playerPick.textContent = "✌️";
    }, 300)

    setTimeout(function(){
        playRound("scissors", computerPlay());
    }, 1400)

    setTimeout(function() {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        displayResult();
    },2800)
});

function computerPlay() {
    

        playSound();
    
        outputDefiner = Math.random();
        if (outputDefiner <= 0.33) {
            cpuPick.textContent = "✊";
            return "rock"
        } else if (outputDefiner > 0.33 && outputDefiner <= 0.66) {
            cpuPick.textContent = "🖐";
            return "paper" 
        } else {
            cpuPick.textContent = "✌️";
            return "scissors"
        };

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        resultMessage = "It's a tie! Rock and Rock"
        result = "tie"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        resultMessage = "It's a tie! Paper and Paper"
        result = "tie"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        resultMessage = "It's a tie! Scissors and Scissors"
        result = "tie"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultMessage = "You Lose! Paper beats Rock"
        result = "loss"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultMessage = "You Win! Rock beats Scissors"
        result = "loss"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultMessage = "You Lose! Scissors beats Paper"
        result = "loss"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultMessage = "You Win! Paper beats Rock"
        result = "win"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultMessage = "You Lose! Rock beats Scissors"
        result = "win"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultMessage = "You Win! Scissors beats Paper"
        result = "win"
    }
}

function displayResult() {

    if (resultMessage.includes("Win")) {
        playWinSound();
        ++playerScore
    } else if (resultMessage.includes("Lose")) {
        playLoseSound();
        ++computerScore
    } else {
        playTieSound();
    }

    if (playerScore < 3 && computerScore < 3) {
    para.textContent = resultMessage;
    results.appendChild(para);

    playerScoreboard.textContent = playerScore
    computerScoreboard.textContent = computerScore

    } else {
        if (computerScore == 3) {
            computerScoreboard.textContent = "3"
            para.textContent = "Game Over! You Lose!";
            results.appendChild(makeButton);
            makeButton.classList.add("button-hover");
            makeButton.textContent = "Play Again";
            setTimeout(function(){
                defeatSound.volume = 0.25;
                defeatSound.play();
            }, 1700)
        } else {
            playerScoreboard.textContent = "3"
            para.textContent = "Game Over! You Win!";
            results.appendChild(makeButton);
            makeButton.classList.add("button-hover");
            makeButton.textContent = "Play Again";

            makeButton.addEventListener("click", function() {
                rockButton.disabled = false;
                paperButton.disabled = false;
                scissorsButton.disabled = false;

                computerScore = 0;
                playerScore = 0;
                computerScoreboard.textContent = "0";
                playerScoreboard.textContent = "0";

                para.remove();
                makeButton.remove();
            })

            setTimeout(function(){
                victorySound.volume = 0.25;
                victorySound.play();
            }, 1700)
        }

        results.appendChild(para);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}


function playSound() {
    boopSound.volume = 0.5;
    boopSound.play();
    boopSound.currentTime = 0;
}

function playTieSound() {
    tieSound.volume = 0.3;
    tieSound.currentTime = 0;
    tieSound.play();
}

function playWinSound() {
    winRoundSound.volume = 0.2;
    winRoundSound.currentTime = 0;
    winRoundSound.play();
}

function playLoseSound() {
    loseRoundSound.volume = 0.2;
    loseRoundSound.currentTime = 0;
    loseRoundSound.play();
}
