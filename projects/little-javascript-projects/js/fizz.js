function fizz(minRange,maxRange){
    var fizz = "Fizz";
    var buzz = "Buzz"
    var result = "";
    for(let i = minRange; i < maxRange + 1; i++){
        let output = "";

    }
}


var fizzBuzzOutput = [];
function fizzBuzz(){
    let output = "";
    let arrayLength = fizzBuzzOutput.length
    if(((arrayLength + 1) % 5) == 0){
        console.log("5");
        output += "Fizz";
    }
    if(((arrayLength+1) % 3) == 0){
        console.log("3");
        output += "Buzz";
    }
    else if(((arrayLength + 1) % 5) != 0 && ((arrayLength + 1) % 3 )!= 0){
        console.log("neither");
        output = arrayLength+1;
    }

    fizzBuzzOutput.push(output);
    console.log(fizzBuzzOutput);
}

function fizzBuzzReset(){
    fizzBuzzOutput = [];
    console.log("##### Array reset #####");
}

function fizz2(minRange,maxRange){
    var fizz = "Fizz";
    var buzz = "Buzz"
    var result = "";
    for(i = minRange; i <= maxRange; i++){
        //multiple of 5 print Fizz
        if(i % 5 == 0 && i % 3 == 0){
            console.log(fizz + buzz);
            continue;
            //multiple of 3 print Buzz
        }
        else if(i % 5 == 0 && i % 3 != 0){
            console.log(fizz);
            continue;

        }
        else if(i % 5 != 0 && i % 3 == 0){
                console.log(buzz);
            continue;
        }
        result = i;
        console.log(result);
    }
    //multiple of 5 and multiple of 4 print FizzBuzz
}

console.log(fizz(0,100));