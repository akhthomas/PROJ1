

// **** MUSIC ****
function pause() {
    let pause = document.getElementById("audio");
    console.log(audio);
    return audio.paused ? audio.play() : audio.pause();
};

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

// **** BUTTONS ****
let hitButton = document.getElementById('hit-button');
let surrenderButton = document.getElementById('surrender-button');
let cardX = document.getElementById('card1');
let cardY = document.getElementById('card2');

class Game {
    state = {
        deck: deckCompiler().sort((a, b) => 0.5 - Math.random()),
        player: [],
        dealer: [],
        playerDrawsCard2 : false
    };

    screen1ToScreen2Transition() {
        this.drawPlayerCard();

        const screenEl = document.getElementById('screen-1');
        const screen2El = document.getElementById('screen-2');
    
        screenEl.style.display = 'none';
        screen2El.style.display = 'block';
        
    }

    drawPlayerCard() {
        const card = this.state.deck.pop();
        this.state.player.push(card);
        cardX.innerText = card.value + " " + card.suit;
    }
    drawPlayerCard2() {
        if (!this.state.playerDrawsCard2) {
            const card = this.state.deck.pop();
            this.state.player.push(card);
            cardY.innerText = card.value + " " + card.suit;
            this.state.playerDrawsCard2 = true;
            cardY.style.display = 'flex';
        }
    }
    drawOptions() {
        if (!this.state.drawOptions) {
            const option = document.getElementById('button-space-2');
            buttonspace2.style.display = 'block';
        }
    }   
}

const game = new Game();

// **** SCREEN FUNCTION ****
function showHide() {
    
}

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