

// **** MUSIC ****
function pause() {
    let pause = document.getElementById("audio");
    console.log(audio);
    return audio.paused ? audio.play() : audio.pause();
};

// **** SCREEN FUNCTION ****
function showHide() {
    const screenEl = document.getElementById('screen-1');
    const screen2El = document.getElementById('screen-2');

    screenEl.style.display = 'none';
    screen2El.style.display = 'block';
}

// **** BUTTONS ****
let hitButton = document.getElementById('hit-button');
let surrenderButton = document.getElementById('surrender-button');
let cardX = document.getElementById('card1');


// **** DECK FUNCTION ****
function deckCompiler() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["spades", "diamonds", "clubs", "hearts"];

    const cards = [];
    for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });
    }
}
return cards;
}

let deck1 = deckCompiler();
deck1 = deck1.sort((a, b) => 0.5 - Math.random());

const player = [];
const dealer = [];

const card1 = deck1.pop();
player.push(card1);
cardX.innerText = card1.value+card1.suit;


// **** LOSE / WIN LOGIC ****
function endGame() {
    updateScores();
    if (gameEnd) {
    while (
    voidScore < playerScore &&
    playerScore <= 21 &&
    voidScore <= 21
    ) {
voidCards.push(nextCard());
updateScores();
    }
}

if (playerScore > 21) {
    playerWins = false;
    gameEnd = true;
}   else if (voidScore > 21) {
    playerWins = true;
    gameEnd = true; 
}   else if (gameEnd) {
    if (playerScore > voidScore) {
        playerWins = true; 
    } else { 
        playerWins = false;
    }

    }
}




console.log(cardX);