console.log("hello");

function randomImg(img) {
  var randomNumber = Math.ceil(Math.random()*6);
  var source = "./images/dice"+randomNumber+".png";
  document.querySelector(img).setAttribute("src",source);
  document.querySelector(img).setAttribute("number",randomNumber);
}

randomImg(".img1");
randomImg(".img2");

var number1 = document.querySelector(".img1").getAttribute("number");
var number2 = document.querySelector(".img2").getAttribute("number");


if (number1 > number2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
  } else if (number1 < number2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
  } else {
  document.querySelector("h1").innerHTML = "Draw"
  }

document.querySelector("button").addEventListener("click", function () {
  window.location.reload();
});
