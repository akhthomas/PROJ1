

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

// **** CONSTANTS ****
const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["spades", "diamonds", "clubs", "hearts"];

const winCondition = 21;




