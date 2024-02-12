const words = ['javascript', 'html', 'css', 'react', 'angular', 'vue', 'node', 'mongodb', 'express'];
let word = '';
let guessedWord = [];
let attempts = 0;

const wordDisplay = document.getElementById('word-display');
const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedWord = new Array(word.length).fill('_');
    wordDisplay.textContent = guessedWord.join(' ');
    attempts = 0;
    message.textContent = '';
}

function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess.length === 1 && /^[a-z]$/.test(guess)) {
        if (word.includes(guess)) {
            word.split('').forEach((letter, index) => {
                if (letter === guess) {
                    guessedWord[index] = guess;
                }
            });
            wordDisplay.textContent = guessedWord.join(' ');
            if (!guessedWord.includes('_')) {
                message.textContent = `Congratulations! You guessed the word "${word}" in ${attempts} attempts.`;
                guessInput.disabled = true;
                checkBtn.disabled = true;
            }
        } else {
            attempts++;
            message.textContent = `Incorrect guess. Attempts: ${attempts}`;
        }
    } else {
        message.textContent = 'Please enter a valid single letter guess.';
    }
    guessInput.value = '';
    guessInput.focus();
}

startGame();

checkBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', () => {
    startGame();
    guessInput.disabled = false;
    checkBtn.disabled = false;
});
