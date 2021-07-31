var userClickedPattern = [];
var gameIsRunning = false;

var currentLevel = 0;
// Main Game

$(document).keypress(function (key) {
  if (gameIsRunning) {
    return;
  } else {
    startGame();
  }
});

$(document).click(function (tap) {
  if (gameIsRunning) {
    return;
  }
  startGame();
  console.info("tap " + tap);
});
 
$(".btn").click(function () {
    if (!gameIsRunning) return;
    buttonHandler(this);
  });

function startGame() {
    gameIsRunning = true;
    nextSequence();
};

function checkGameState() {
  return gameIsRunning;
};

function updateLevelGui() {
  $("#level-title").html("Level " + currentLevel);
};

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  currentLevel++;
  updateLevelGui();
  selectButton(randomNumber);
  console.info("randomNumber " + randomNumber);
};

function selectButton(number) {
  var audio;
  switch (number) {
    case 0:
      $("#green").fadeOut(100).fadeIn(100);
      playSound("green");
      break;
    case 1:
      $("#red").fadeOut(100).fadeIn(100);
      playSound("red");
      break;
    case 2:
      $("#yellow").fadeOut(100).fadeIn(100);
      playSound("yellow");
      break;
    case 3:
      $("#blue").fadeOut(100).fadeIn(100);
      playSound("blue");
      break;
    default:
      console.warn("Totally wrong random Number: " + number);
      break;
  }
};


function buttonHandler(button) {
  let userChosenColor = button.id;
  console.group("button infos");
  switch (userChosenColor) {
    case "green":
      console.info(
        "%c" + userChosenColor,
        "background-color:green; color:white; border:1px solid black; border-radius: 6px;padding:0.3rem;"
      );
      userClickedPattern.push(userChosenColor);
      playSound(userChosenColor);
      animateButton(userChosenColor);
      break;
    case "red":
      console.info(
        "%c" + userChosenColor,
        "background-color:red; color:white; border:1px solid black; border-radius: 6px;padding:0.3rem;"
      );
      userClickedPattern.push(userChosenColor);
      playSound(userChosenColor);
      animateButton(userChosenColor);
      break;
    case "yellow":
      console.info(
        "%c" + userChosenColor,
        "background-color:yellow; border:1px solid black; border-radius: 6px;padding:0.3rem;"
      );
      userClickedPattern.push(userChosenColor);
      playSound(userChosenColor);
      animateButton(userChosenColor);
      break;
    case "blue":
      console.info(
        "%c" + userChosenColor,
        "background-color:blue; color:white; border:1px solid black; border-radius: 6px;padding:0.3rem;"
      );
      userClickedPattern.push(userChosenColor);
      playSound(userChosenColor);
      animateButton(userChosenColor);
      break;
    default:
      console.warn("unknown button id: " + userChosenColor);
      break;
  }
  console.dir(button);
  console.info(userClickedPattern);
  console.groupEnd();
};

function playSound(name) {
  audio = new Audio("/src/sounds/" + name + ".mp3");
  audio.play();
};

function animateButton(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

// $("#someElement").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// selectButton(nextSequence());
