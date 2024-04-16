function getComputerChoice() {
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    let arrayIndex = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoice = computerChoiceArray[arrayIndex];
    return computerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! this round doesn't count"
    }   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats Rock";
    }   else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors";
    }   else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Pock";
    }   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats Paper";
    }   else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats Paper";
    }   else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors";
    }   else  {
        return "Not a valid input!"
    }
}

let playerScore = 0;
let comScore = 0;
let tieScore = 0;

function playGame(){
    const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
    const computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    if (outcome.includes("win")) {
        playerScore++;
    }   else if (outcome.includes("lose")) {
        comScore++;
    }   else {
        tieScore++;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#inputCell");
    const inputBtn = document.querySelector("#inputBtn");
    const inputLabel = document.querySelector("#inputLabel");
    const imagenes = document.querySelector("#imagenes");
    const puntaje = document.querySelector("#puntaje");
    inputBtn.addEventListener("click", function() {
        const cuantasRondas = input.value;
        inputDiv.style.display = "none";
        inputLabel.textContent = cuantasRondas + " victorias para ganar!";
        imagenes.style.display = "flex";
        puntaje.style.display = "flex";
     
    });
    const piedraImg = document.querySelector("#piedra");
    const papelImg = document.querySelector("#papel");
    const tijeraImg = document.querySelector("#tijera");
    piedraImg.addEventListener("click", function() {
        storeValue("ROCK");
    });
    papelImg.addEventListener("click", function() {
        storeValue("PAPER");
    });
    tijeraImg.addEventListener("click", function() {
        storeValue("SCISSORS");
    });
    function storeValue(value) {
        playerSelection = value;
        console.log(value);
    }
});

