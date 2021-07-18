function bmiCalculator(weight, height){
    //BMI = weight (kg) / height (m)
    var bmi = Math.round(weight/(height*height));
    
    if(bmi < 18.5){
        return "Your BMI is "+ bmi + ", so you are underweight.";
    }
    else if (bmi < 24.9){
        return "Your BMI is "+bmi + ", so you have a normal weight.";
    }
    else{
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

alert(bmiCalculator(60,2));
