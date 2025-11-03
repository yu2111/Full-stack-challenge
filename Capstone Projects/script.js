console.log("test");

function lifeInWeeks(age) {

/************Don't change the code above************/

    var yearLeft = 90 - age;
    var monthLeft = yearLeft * 12;
    var weekLeft = yearLeft * 52;
    var dayLeft = yearLeft * 365;

    console.log("You have " + dayLeft + " days, " + weekLeft + " weeks, and " + monthLeft + " months left.")




/*************Don't change the code below**********/
}

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var bottles = Math.floor(money / 1.5);
  console.log("buy " + bottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

function bmiCalculator(weight, height){
    return Math.round(weight/(height*height));
}
