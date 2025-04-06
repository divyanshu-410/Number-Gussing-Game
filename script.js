// Get DOM elements
const setupDiv = document.getElementById("setup");
const gameDiv = document.getElementById("game");
const maxInput = document.getElementById("max-input");
const startButton = document.getElementById("start-button");
const maxNumberElement = document.getElementById("max-number");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const quitButton = document.getElementById("quit-button");
const messageElement = document.getElementById("message");

let max, ans;

// Function to start the game
function startGame() {
    max = parseInt(maxInput.value);

    if (isNaN(max) || max <= 0) {
        alert("Please enter a valid maximum number!");
        return;
    }

    ans = Math.floor(Math.random() * max) + 1;
    maxNumberElement.textContent = max;

    // Hide setup and show game
    setupDiv.style.display = "none";
    gameDiv.style.display = "block";
}

// Function to handle guess
function handleGuess() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        messageElement.textContent = "Please enter a valid number!";
        return;
    }

    if (guess === ans) {
        messageElement.textContent = `Congrats!! ${ans} is the right number!`;
        guessButton.disabled = true;
        quitButton.disabled = true;
    } else if (guess < ans) {
        messageElement.textContent = "Try again! Hint: Your guess is smaller.";
    } else if (guess > ans) {
        messageElement.textContent = "Try again! Hint: Your guess is larger.";
    }

    guessInput.value = ""; // Clear input field
}

// Function to handle quit
function handleQuit() {
    messageElement.textContent = "You quit the game. Refresh to play again!";
    guessButton.disabled = true;
    quitButton.disabled = true;
}

// Event listeners
startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", handleGuess);
quitButton.addEventListener("click", handleQuit);

// Allow pressing Enter to submit guess
guessInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleGuess();
    }
});