

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

// **** CONSTANTS ****
const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["spades", "diamonds", "clubs", "hearts"];

// **** DECK FUNCTION ****
function deckCompiler()





// **** LOSE / WIN LOGIC ****
function getScores() {


}

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



