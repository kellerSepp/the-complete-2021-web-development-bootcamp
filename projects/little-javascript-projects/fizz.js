function fizz(minRange,maxRange){
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