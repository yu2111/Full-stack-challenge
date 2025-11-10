const colors = ["red", "blue", "yellow", "green"];
let gamePattern = [];
let userClicked = [];
let level = 0;
let started = false


$(document).on("keyup", () => {
  if (!started){
    nextSequence();
    started = true
  }
})

function checkAnswer(currentLevel) {
  if (userClicked[currentLevel] === gamePattern[currentLevel]) {
    console.log("user "+userClicked[currentLevel]);
    console.log("game "+gamePattern[currentLevel]);
    if (userClicked.length === gamePattern.length) {
      setTimeout(() => {
      nextSequence()
      }, 1000);
    }
  }
  else{
    $("body").addClass("game-over")
    setTimeout(() => {
      $("body").removeClass("game-over")
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    reset()
  }
}

function nextSequence() {
  userClicked = [];
  level++;
  const randomNumber = Math.floor((Math.random() * 4));
  const chosenColor = colors[randomNumber];
  gamePattern.push(chosenColor);
  const lastColor = gamePattern[gamePattern.length - 1];
  playSound(chosenColor);
  animate(chosenColor);
  $("h1").text("Level "+level);
  console.log(gamePattern);
}

  $(".btn").on("click", (e) => {
    const clicked = e.currentTarget.id;
    userClicked.push(clicked);
    playSound(clicked)
    animate(clicked)
    // console.log(userClicked);
    checkAnswer(userClicked.length - 1);
  });

function playSound(color) {
  const audio = new Audio("./sounds/"+color+".mp3").play();
}

function animate(color) {
   $("#"+color).addClass("pressed");
  setTimeout(() => {
     $("#"+color).removeClass("pressed")
  }, 300);
}

function reset() {
  started = false
  gamePattern = []
  level = 0
}
