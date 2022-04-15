

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
    const values = ["K", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "A"];
    const suits = ["&spades;", "&diams;", "&clubs;", "&hearts;"];

    const cards = [];
    for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });

    // let card = document.createElement("card");
	// 	let icon = '';
	// 	if (cards[i].suit == 'hearts') {
    //         icon='&hearts';
    //     }
		
	// 	else if (cards[i].suit == 'spades') {
    //         icon = '&spades';
    //     }
		
	// 	else if (cards[i].suit == 'diamonds') {
    //         icon = '&diams';
    //     }
		
	// 	else if (cards[i].suit == 'clubs') {
    //         icon = '&clubs';
    //     }
		

	// 	card.innerHTML = deck[i].Value + '' + icon;
	// 	card.className = 'card';
	// document.getElementById("deck").appendChild(card);
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
            console.log("endGame");
            // return endGame 
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
            console.log("endGame");
        } else { 
            this.playerSurrenders();
        }
            // return endGame 


            /*const voidCard3 = document.getElementById('cardv3');
            const enemyHand2 = this.state.deck.pop();
            this.state.dealer.push(enemyHand2);
            voidCard3.innerHTML = enemyHand2.value + " " + enemyHand2.suit;*/
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
            console.log(this.getDealerScore());
        }
    }

    playerSurrenders() {
        if (!this.state.playerSurrenders) {
        const voidCard3 = document.getElementById('cardv3');
        voidCard3.style.display = 'block';
        this.state.playerSurrenders = true;

        if (this.getDealerScore() < 16) {
        const enemyHand2 = this.state.deck.pop();
        this.state.dealer.push(enemyHand2);
        voidCard3.innerHTML = enemyHand2.value + " " + enemyHand2.suit;   
        } else { console.log("gameEnd");
            //ENDGAME
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
}
const game = new Game();




/*if (totalValue === 21) {
    textArea.innerText += "You are stuck here forever now."
} else {
    ;textArea.innerText += "You have escaped the Void.";
}*/