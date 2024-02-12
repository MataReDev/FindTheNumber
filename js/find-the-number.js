let randomNumber, attempts;

function startGame() {
    // Générer un nombre aléatoire entre 1 et 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    attempts = 0;
    document.getElementById('result').textContent = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const result = document.getElementById('result');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        if (userGuess === randomNumber) {
            result.innerHTML = `<strong>Congratulations!</strong> You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
            result.classList.remove('text-danger');
            result.classList.add('text-success');
        } else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
            result.classList.remove('text-success');
            result.classList.add('text-danger');
        } else {
            result.textContent = 'Too high! Try again.';
            result.classList.remove('text-success');
            result.classList.add('text-danger');
        }
    }
}

function restartGame() {
    document.getElementById('userGuess').value = '';
    startGame();
}

// Au chargement de la page, démarrer une nouvelle partie
window.onload = startGame;