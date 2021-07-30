function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

function selectButton(number) {
    var audio;
    switch (number) {
        case 0:
            $("#green").fadeOut(100).fadeIn(100);
            audio = new Audio("/src/sounds/green.mp3");
            audio.play();
            break;
        case 1: 
            $("#red").fadeOut(100).fadeIn(100);
            audio = new Audio("/src/sounds/red.mp3");
            audio.play();
            break;
        case 2: 
            $("#yellow").fadeOut(100).fadeIn(100);
            audio = new Audio("/src/sounds/yellow.mp3");
            audio.play();
            break;
        case 3:
            $("#blue").fadeOut(100).fadeIn(100);
            audio = new Audio("/src/sounds/blue.mp3");
            audio.play();
            break;
        default: console.warn("Totally wrong random Number: " + number);
            break;
    }
}

// $("#someElement").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// selectButton(nextSequence());