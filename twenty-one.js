

// _____ MUSIC 
function pause() {
    let pause = document.getElementById("audio");
    console.log(audio);
    return audio.paused ? audio.play() : audio.pause();
};

// ____ SCREEN FUNCTION
function showHide() {
    const screenEl = document.getElementById('screen-1');
    const screen2El = document.getElementById('screen-2');

    screenEl.style.display = 'none';
    screen2El.style.display = 'block';
}


