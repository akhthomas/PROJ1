

// **** MUSIC ****
function pause() {
    let pause = document.getElementById("audio");
    console.log(audio);
    return audio.paused ? audio.play() : audio.pause();
};

const suitIconMap = {
    hearts: '&hearts;',
    spades: '&spades;',
    diamonds: '&diams;',
    clubs: '&clubs',
};

// **** DECK FUNCTION ****
function deckCompiler() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["&spades;", "&diams;", "&clubs;", "&hearts;"];

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
let cardZ = document.getElementById('card3');


// **** GAME STATE ****

class Game {
    state = {
        deck: deckCompiler().sort((a, b) => 0.5 - Math.random()),
        player: [],
        dealer: [],
        drawOptions : false,
        playerDrawsCard2 : false,
        playerSurrenders : false,
        playerDrawsCard3 : false
    };

    screen1ToScreen2Transition() {
        this.drawPlayerCard();

        const screenEl = document.getElementById('screen-1');
        const screen2El = document.getElementById('screen-2');
    
        screenEl.style.display = 'none';
        screen2El.style.display = 'block';
        
    }

    tryAgain() {
        window.location.reload();
    }

    drawPlayerCard() {
        const card = this.state.deck.pop();
        this.state.player.push(card);
        cardX.innerHTML = card.value + " " + card.suit;
    }
    drawPlayerCard2() {
        if (!this.state.playerDrawsCard2) {
            const card = this.state.deck.pop();
            this.state.player.push(card);
            cardY.innerHTML = card.value + " " + card.suit;
            this.state.playerDrawsCard2 = true;
            cardY.style.display = 'flex'; 
        if (this.getPlayerScore() === 21) {
            this.playerWins();
        }
    } 
}
    drawPlayerCard3() {
        if (!this.state.playerDrawsCard3 && !this.state.playerSurrenders) {
            const card = this.state.deck.pop();
            this.state.player.push(card);
            cardZ.innerHTML = card.value + " " + card.suit;
            this.state.playerDrawsCard3 = true;
            cardZ.style.display = 'flex'; 

        if (this.getPlayerScore() > 21) {
            this.playerLoses();
        } else { 
            this.playerSurrenders();
        }
        }
    }
    drawOptions() {
        if (!this.state.drawOptions) {
            const options = document.getElementById('buttonspace2');
            options.style.display = 'block';
            this.state.drawOptions = true;

            const voidSpace = document.getElementById('voidspace');
            voidSpace.style.display = 'flex';

            const voidCard1 = document.getElementById('cardv1');
            const card = this.state.deck.pop();
            this.state.dealer.push(card);
            voidCard1.innerHTML = card.value + " " + card.suit;

            const voidCard2 = document.getElementById('cardv2');
            const enemyHand = this.state.deck.pop();
            this.state.dealer.push(enemyHand);
            voidCard2.innerHTML = enemyHand.value + " " + enemyHand.suit;
        }
    }

    playerSurrenders() {
        if (!this.state.playerSurrenders) {
        const voidCard3 = document.getElementById('cardv3');
        voidCard3.style.display = 'block';
        this.state.playerSurrenders = true;

        if (this.getDealerScore() < 16 && this.getPlayerScore() <= 21)  {
        const enemyHand2 = this.state.deck.pop();
        this.state.dealer.push(enemyHand2);
        voidCard3.innerHTML = enemyHand2.value + " " + enemyHand2.suit;   
        } 
        if (this.getPlayerScore() > this.getDealerScore() || this.getDealerScore() > 21) {
            this.playerWins();
        } else {
            this.playerLoses();
        }
    }
}

getPlayerScore() {
    let totalValue = 0;
    this.state.player.forEach(p => {
    let cardNumericValue = 0;
        switch (p.value) {
            case "A" : 
                cardNumericValue = totalValue >= 11 ? 1 : 11;
                break;
            case "J" : 
            case "Q" :
            case "K" :
                cardNumericValue = 10;
                break;

            default : 
                cardNumericValue = parseInt(p.value);
                break;
        }
        totalValue = totalValue + cardNumericValue;
    });
    return totalValue;
}
getDealerScore() {
    let totalValue = 0;
    this.state.dealer.forEach(p => {
    let cardNumericValue = 0;
        switch (p.value) {
            case "A" : 
                cardNumericValue = totalValue >= 11 ? 1 : 11;
                break;
            case "J" : 
            case "Q" :
            case "K" :
                cardNumericValue = 10;
                break;

            default : 
                cardNumericValue = parseInt(p.value);
                break;
        }
        totalValue = totalValue + cardNumericValue;
    });
    return totalValue;
}
playerWins() {
    let prompts = document.getElementById("prompts");
    prompts.innerText += "You have escaped the Void.";
    this.state.drawOptions = true;
    this.state.playerDrawsCard2 = true;
    this.state.playerSurrenders = true;
    this.state.playerDrawsCard3 = true;
    }
    playerLoses() {
        let prompts = document.getElementById("prompts");
        prompts.innerText += "You are stuck here forever now.";
        this.state.drawOptions = true;
        this.state.playerDrawsCard2 = true;
        this.state.playerSurrenders = true;
        this.state.playerDrawsCard3 = true; 
}
}
const game = new Game();