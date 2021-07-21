function handleClick(){
    let audio = new Audio("src/sounds/tom-1.mp3");
    audio.play();
}
var elements = document.querySelectorAll("button");
for(i=0; i<=elements.length-1;i++){

    // elements[i].addEventListener("click",handleClick);
}

elements.forEach(function(currentValue, listObj) {
    currentValue.addEventListener("click",handleClick);
    console.log(currentValue.classList);
  });

