function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var maxAge = 90;
        var age = prompt("Please tell me your age in full years.");
        var yearsLeft = 90 - age;
    
        var monthsLeft = Math.floor((yearsLeft * 12));
        var weeksLeft = Math.floor((yearsLeft * 52));
        var daysLeft = Math.floor((yearsLeft * 365));
        
        
        
            console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
    /*************Don't change the code below**********/
    }