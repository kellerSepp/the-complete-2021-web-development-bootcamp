function whoIsBuyingLunch(nameArray){
    let person = "";
    let rNumber = Math.floor(Math.random() * nameArray.length);
    return nameArray[rNumber];
}

function logLunch(){
    console.log(whoIsBuyingLunch(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
}