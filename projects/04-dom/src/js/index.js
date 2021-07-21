var userName = "Budgie";
function setGreeting(){
    //depending on time
    userName = document.getElementById("uName").value;
    document.getElementById("userName").innerHTML = userName;
    let time = getTime();
    // return document.getElementById("userGreeting").innerHTML = "Hello";
    //Say Good Morning name
    if(time >= 4 && time <= 8){
        document.getElementById("userGreeting").innerHTML = "Good Morning";
    }
    //Say Good Day name
    else if(time >= 9 && time <= 14){
        document.getElementById("userGreeting").innerHTML = "Good Day";
    }
    //Say Good Afternoon name
    else if(time >= 15 && time <= 17){
        document.getElementById("userGreeting").innerHTML = "Good Afternoon";
    }
    //Say Good Evening name
    else if(time >= 18 && time <= 22){
        document.getElementById("userGreeting").innerHTML = "Good Evening";
    }
    //Say Good Night name
    else{
        document.getElementById("userGreeting").innerHTML = "Good Night";
    }
}

function getTime(){
    console.log();
    let time = (Math.random() * 24);
    return new Date().getHours();
}

function addClass(name){
    document.querySelector("h1").classList.add(name);
}
