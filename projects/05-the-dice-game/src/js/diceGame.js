function gameLoop(){
    changeDiceImage(1, rollDice(6));
    changeDiceImage(2, rollDice(6));
    
}

function rollDice(sides){
    let randomNumber1 = Math.ceil(Math.random()*6);
    console.log(randomNumber1);
    return randomNumber1;
}

function changeDiceImage(player, number){
    //dice1.png
    document.getElementById("player" + player).lastElementChild.src="src/images/dice" + number + ".png";

}