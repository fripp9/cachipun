function getComputerChoice() {
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    let arrayIndex = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoice = computerChoiceArray[arrayIndex];
    return computerChoice.toUpperCase();
}

let playerScore = 0;
let comScore = 0;
let tieScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "Empate! esta ronda no cuenta owo"
    }   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "Perdiste! Papel le gana a Piedra";
    }   else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "Ganaste! Piedra le gana a Tijeras";
    }   else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "Ganaste! Papel le gana a Piedra";
    }   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "Perdiste! Tijeras le gana a Papel";
    }   else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "Ganaste! Tijeras le gana a Papel";
    }   else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "Perdiste! Piedra le gana a Tijeras";
    }
}

const input = document.querySelector("#inputCell");
const inputBtn = document.querySelector("#inputBtn");
const inputLabel = document.querySelector("#inputLabel");

const puntaje = document.querySelector("#puntaje");
const puntajePlayerDisplay = document.querySelector("puntajePlayerDisplay");
const puntajeComDisplay = document.querySelector("puntajeComDisplay");

const imagenes = document.querySelector("#imagenes");
const piedraImg = document.querySelector("#piedra");
const papelImg = document.querySelector("#papel");
const tijeraImg = document.querySelector("#tijera");

inputBtn.addEventListener("click", startGame);

function startGame() {
    if (isNaN(input.value) || input.value <= 0) {
        inputLabel.textContent = "Debes ingresar un numero entre 1 y 100!";
    }   else { 
        if (input.value === "1") {
            const cuantasRondas = input.value;
            inputDiv.style.display = "none";
            inputLabel.textContent = "Gol de oro! " + cuantasRondas + " victoria para ganar!";
            imagenes.style.display = "flex ";
            puntaje.style.display = "flex";   
        }   else {
            const cuantasRondas = input.value;
            inputDiv.style.display = "none";
            inputLabel.textContent = cuantasRondas + " victorias para ganar!";
            imagenes.style.display = "flex ";
            puntaje.style.display = "flex";   
    }} 
};  

piedraImg.addEventListener("click", () => {
    playRound("ROCK");
})

papelImg.addEventListener("click", () => {
    playRound("PAPER");
})

tijeraImg.addEventListener("click", () => {
    playRound("SCISSORS");
})


// function playGame(cuantasRondas) {
//     const playerSelection = "ROCK";
//     const computerSelection = getComputerChoice();
//     console.log(computerSelection);
//         let outcome = playRound(playerSelection, computerSelection);
//         if (outcome.includes("win")) {
//             playerScore++;
//         }   else if (outcome.includes("lose")) {
//             comScore++;
//         }   else {
//             tieScore++;
//         }
//     }

// function playGame(){
//     const computerSelection = getComputerChoice();
//     let outcome = playRound(playerSelection, computerSelection);
//     if (outcome.includes("win")) {
//         playerScore++;
//     }   else if (outcome.includes("lose")) {
//         comScore++;
//     }   else {
//         tieScore++;
//     }
// }
