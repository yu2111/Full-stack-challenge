const gamePattern = [];
const userClicked = [];
const level = 0;


$(document).on("keyup", () => {
  if (gamePattern.length === 0){
    nextSequence();
  }
})

function nextSequence() {
  const randomNumber = Math.floor((Math.random() * 4));
  const colors = ["red", "blue", "yellow", "green"];
  const chosenColor = colors[randomNumber];
  gamePattern.push(chosenColor);
  const lastColor = gamePattern[gamePattern.length - 1];
  $("#"+lastColor).addClass("pressed");
  const audio = new Audio("./sounds/"+lastColor+".mp3").play();
  setTimeout(() => {
     $("#"+lastColor).removeClass("pressed")
  }, 300);
  level++;
  $("h1").text("Level "+level);
}

function handler() {
  $(".btn").on("click", (e) => {
    const clicked = e.currentTarget.id;
    userClicked.push(clicked);
    $("#"+clicked).addClass("pressed");
    const audio = new Audio("./sounds/"+clicked+".mp3").play()
    setTimeout(() => {
    $("#"+clicked).removeClass("pressed")
    }, 250);
    console.log(userClicked);
  });
}
