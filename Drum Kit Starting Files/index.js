console.log("hello");

// document.querySelectorAll("button").forEach((button) => {
//   button.addEventListener("click", function () {
//    alert("clicked")
//   })
// });

// or

var numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("clicked using for")
  })
}
