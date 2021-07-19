function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        var leap = false;
        if(year % 4 == 0){
            if(year % 100 != 0){
                if(year % 400 != 0){
                    leap = true;
                    return "Leap year.";
                }   
            }
        }
        return "Not leap year.";
    
    /**************Don't change the code below****************/    
    
    }
    
    alert(isLeap(2000));
    alert(isLeap(1948));