function getComputerChoice() {
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    let arrayIndex = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoice = computerChoiceArray[arrayIndex];
    return computerChoice.toUpperCase();
}

let playerScore = 0;
let comScore = 0;
let cuantasRondas;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        resultadoDisplay.textContent = "Empate! esta ronda no cuenta owo";
        resultadoDisplay.style.color = "gray";
    }   else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        resultadoDisplay.textContent = "Ganaste! Tijeras le gana a Papel";
        resultadoDisplay.style.color = "green";
        playerScore++;
    }   else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        resultadoDisplay.textContent = "Ganaste! Piedra le gana a Tijeras";
        resultadoDisplay.style.color = "green";
        playerScore++;
    }   else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        resultadoDisplay.textContent = "Ganaste! Papel le gana a Piedra";
        resultadoDisplay.style.color = "green";
        playerScore++;
    }   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        resultadoDisplay.textContent = "Perdiste! Tijeras le gana a Papel";
        resultadoDisplay.style.color = "red";
        comScore++;
    }   else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        resultadoDisplay.textContent = "Perdiste! Piedra le gana a Tijeras";
        resultadoDisplay.style.color = "red";
        comScore++;
    }   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        resultadoDisplay.textContent = "Perdiste! Papel le gana a Piedra";
        resultadoDisplay.style.color = "red";
        comScore++;
    }
    puntajePlayerDisplay.textContent = playerScore;
    puntajeComDisplay.textContent = comScore;
    if (playerScore === cuantasRondas || comScore === cuantasRondas) {
        imagenes.style.opacity = 0.4;
        imagen.style.cursor = "default";
        piedraImg.removeEventListener("click", handlePiedraClick);
        papelImg.removeEventListener("click", handlePapelClick);
        tijeraImg.removeEventListener("click", handleTijeraClick);
        if (playerScore === cuantasRondas) {
            resultadoDisplay.textContent = "GANASTE! ggwp";
            resultadoDisplay.style.color = "green";
            resultadoDisplay.style.fontSize = "70px";
        }
        if (comScore === cuantasRondas) {
            resultadoDisplay.textContent = "Haha perdiste :v";
            resultadoDisplay.style.color = "red";
            resultadoDisplay.style.fontSize = "70px";
    }

}}
const input = document.querySelector("#inputCell");
const inputBtn = document.querySelector("#inputBtn");
const inputLabel = document.querySelector("#inputLabel");

const puntaje = document.querySelector("#puntaje");
const puntajePlayerDisplay = document.querySelector("#puntajePlayerDisplay");
const puntajeComDisplay = document.querySelector("#puntajeComDisplay");
const resultadoDisplay = document.querySelector("#resultadoDisplay");

const imagenes = document.querySelector("#imagenes");
const imagen = document.querySelector(".imagen");
const piedraImg = document.querySelector("#piedra");
const papelImg = document.querySelector("#papel");
const tijeraImg = document.querySelector("#tijera");

inputBtn.addEventListener("click", startGame);

function startGame() {
    if (isNaN(input.value) || input.value <= 0) {
        inputLabel.textContent = "Debes ingresar un numero entre 1 y 100!";
    }   else { 
        if (input.value === "1") {
            cuantasRondas = parseInt(input.value);
            inputDiv.style.display = "none";
            inputLabel.textContent = "Gol de oro! " + cuantasRondas + " victoria para ganar!";
            imagenes.style.display = "flex ";
            puntaje.style.display = "flex";   
        }   else {
            cuantasRondas = parseInt(input.value);
            inputDiv.style.display = "none";
            inputLabel.textContent = cuantasRondas + " victorias para ganar!";
            imagenes.style.display = "flex ";
            puntaje.style.display = "flex";   
    }} 
};  
const handlePiedraClick = () => {
    playRound("ROCK");
}
piedraImg.addEventListener("click", handlePiedraClick);

const handlePapelClick = () => {
    playRound("PAPER");
}
papelImg.addEventListener("click", handlePapelClick);

const handleTijeraClick = () => {
    playRound("SCISSORS");
}
tijeraImg.addEventListener("click", handleTijeraClick);


