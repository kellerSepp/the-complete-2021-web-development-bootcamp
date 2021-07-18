function calculateBudgieAge(){
    var realAge = prompt("Please tell me the age of your budgie in actual years.")
    var convertedAge = (realAge * 72) / 8;
    alert("Your budgie / parakeet is about " + convertedAge + " years old in human years.");
}
function calculateHumanAge(){
    var realAge = prompt("Please tell me your age.")
    var convertedAge = realAge * 8 / 72;
    alert("Your budgie age is about " + convertedAge.toString().slice(0,4) + " years.");
}