$("button").click(function(){
    $("h1").css("color", "purple");
});

$(document).keypress(function(event){
    console.log(event.key);
    console.info("%c" + event.key + "%cMr. %cGreen", "color: purple; text-decoration:underline;background-color:green;", "color:yellow");
    console.warn(event.key);
    console.error(event.key);
    $("h1").html(event.key);
});