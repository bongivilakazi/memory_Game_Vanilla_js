const cards = document.querySelectorAll('.memory-card');
let deckLocker = false;
let initialCard;
let nextCard;
let revealedCard = false;

function revealCard() {

    if (deckLocker) return;
    if (this == initialCard)
        return;
    this.classList.add('flip');
    if (!revealedCard) {
        revealedCard = true;
        initialCard = this;
        return;
    }
    revealedCard = false;
    nextCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = initialCard.dataset.framework === nextCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 1500);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

var time = 0;
var timer = setInterval(function(){
    time++;
    console.log(time);

},1000);
function clearTimer(){
    clearInterval(timer);
}
cards.forEach(card => card.addEventListener('click', flipCard));
