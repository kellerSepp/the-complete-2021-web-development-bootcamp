let draw = "Nobody wins. Try again!";
let win = ["Player","wins! Congratulations!"];

function gameLoop(){
    let roll1 = rollDice(6);
    let roll2 = rollDice(6);
    changeDiceImage(1, roll1);
    changeDiceImage(2, roll2);
    decideWinner(1, roll1, 2, roll2);
}

function rollDice(sides){
    let randomNumber1 = Math.ceil(Math.random()*6);
    // console.log(randomNumber1);
    return randomNumber1;
}

function changeDiceImage(player, number){
    //dice1.png
    document.getElementById("player" + player).lastElementChild.src="src/images/dice" + number + ".png";
}

function markWinner(player){
    // (player == 1) ? document.querySelector("h2").innerHTML = ("🚩 " + "Player " + player + " wins!") : document.querySelector("h2").innerHTML = ("Player " + player + " wins! + " 🚩");
    player ===1 ? document.querySelector("h2").innerHTML = ("🚩 " + "Player " + player + " wins!") : document.querySelector("h2").innerHTML = ("Player " + player + " wins!" + " 🚩");
}

function decideWinner(player1,number1,player2,number2){
    if(number1 === number2){
        console.log("Nobody wins. Try again");
        document.querySelector("h2").innerHTML = draw;
    }
    else{
        number1 > number2 ? markWinner(player1) : markWinner(player2);
    }
}