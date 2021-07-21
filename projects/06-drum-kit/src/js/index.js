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
        default: console.log(this);
    }
    buttonAnimation(this.innerHTML);
}

document.querySelectorAll("button").forEach(function(currentValue, listObj) {
    currentValue.addEventListener("click",handleClick);
  });

document.addEventListener("keypress",function(event){keyHandle(event.key);})
function keyHandle(key){
    switch(key){
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
        default: console.log(this);
    }
    buttonAnimation(key);
}

function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
    
}

