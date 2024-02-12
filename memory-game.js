const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

let flippedCards = [];
let matchedCards = [];

const memoryCards = document.getElementById('memory-cards');

function createCard(card) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.card = card;
    div.textContent = card;
    div.addEventListener('click', flipCard);
    memoryCards.appendChild(div);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function restartGame() {
    flippedCards = [];
    matchedCards = [];
    memoryCards.innerHTML = '';
    startGame();
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.card === secondCard.dataset.card) {
        matchedCards.push(firstCard, secondCard);
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        flippedCards = [];
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flipped'));
            flippedCards = [];
        }, 1000);
    }
}

function startGame() {
    shuffle(cards);
    cards.forEach(createCard);
}

startGame();
