function calculateLove(){
    // var user = prompt("Thank you for trusting me.\nPlease tell me your name.");
    
    // var partner = prompt("Thank you very much " + user + "!\nNow I need the name of your spouse, please!")
    var user = "bob";
    var partner = "sara";

    var n = Math.random();
    var lovePerc = Math.round((n * 100))+1;

    if(lovePerc == 100){
        alert("Your love score is " + lovePerc + "\nAmazing " + user + " & " + partner +".\nYour love is as strong as the first love of humanity. We should meet so I can be part of your love making.")
    }
    else if (lovePerc > 70){
        alert("Your love score is " + lovePerc + "\nCongratulations " + user + " & " + partner +".\nYou love each other like Kanye loves Kanye. ")
    }
    else if(lovePerc > 30){
        alert("Your love score is " + lovePerc + "\n" + user + " & " + partner + ". We need to work on your love. Better contact me as soon as possible. I will show you how to love a woman the way she wants to be loved.");
    }
    else{
        alert("Your love score is " + lovePerc + "\n"+ user + " & " + partner + ". Others would say you have no chance. But Fernando believes in love. Even for the unmatching ones. Contact me!");
    }
}

// alert(calculateLove);

function randomDice(sideNumbers){
    var n = Math.random();
    n = n * sideNumbers;
    return Math.floor(n)+1;
}

// alert(randomDice(6));