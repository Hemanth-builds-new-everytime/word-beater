const currentWord = document.querySelector("#current-word");
const wordInput = document.querySelector("#wordInput");
const message = document.querySelector("#message");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const restartBtn = document.querySelector("#restartBtn");

const gameOverSound = new Audio("game-over.mp3")


const words = [
    "hello",
    "computer",
    "javascript",
    "developer",
    "coding",
    "keyboard",
    "website",
    "browser",
    "function",
    "variable",
    "program",
    "project",
    "internet",
    "software",
    "frontend",
    "backend",
    "database",
    "learning",
    "practice",
    "success",
];

let time = 5;
let score = 0;

let timerInterval;

window.addEventListener("DOMContentLoaded", init);

function init() {
    displayWord();

    wordInput.addEventListener("input", startMatch);

    restartBtn.addEventListener("click", restartGame);

    startTimer(); // timer start call

}

const displayWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    // console.log(randomIndex);
    currentWord.textContent = words[randomIndex];
};

function startMatch() {
    if (wordInput.value === currentWord.textContent) {
        message.textContent = "Correct!";

        updateScore(); // update score code

        wordInput.value = "";
        displayWord();

        resetTimer(); // timer rest code

    } else {
        message.textContent = "Incorrect!";
    }


}

function countDown() {
    if (time > 0) {
        time--;
        timeDisplay.textContent = time;
        if (time === 0) {

            gameOverSound.play();

            clearInterval(timerInterval);
            message.textContent = "Game Over!";
            wordInput.disabled = true;
        }
    }
}


// game restart function 

function restartGame() {
    clearInterval(timerInterval);
    resetTimer();
    score = 0;
    scoreDisplay.textContent = score;
    displayWord(); // new word
    wordInput.disabled = false; // input ko enable krne ke liye

    startTimer(); // timer start krne ke liye call
    message.textContent = ""; // game over wale text ko clear krne ke liye.
}




// timer reset function bblock
function resetTimer() {
    time = 5;
    timeDisplay.textContent = time;
}


// score updated function block

function updateScore() {
    score++;
    scoreDisplay.textContent = score;

}

// start timer function 

function startTimer() {
 timerInterval = setInterval(countDown, 1000);
}