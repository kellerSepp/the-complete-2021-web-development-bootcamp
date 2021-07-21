function handleClick(){
    switch(this.innerHTML){
        case "w":  
            var audio = new Audio("src/sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":  
            var audio = new Audio("src/sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":  
            var audio = new Audio("src/sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":  
            var audio = new Audio("src/sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":  
            var audio = new Audio("src/sounds/snare.mp3");
            audio.play();
            break;
        case "k":  
            var audio = new Audio("src/sounds/crash.mp3");
            audio.play();
            break;
        case "l":  
            var audio = new Audio("src/sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}
var elements = document.querySelectorAll("button");
for(i=0; i<=elements.length-1;i++){

    // elements[i].addEventListener("click",handleClick);
}

elements.forEach(function(currentValue, listObj) {
    currentValue.addEventListener("click",handleClick);
    console.log(currentValue.classList);
  });

