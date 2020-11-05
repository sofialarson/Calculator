var halfNumberInput= document.getElementById("half-input");
var fortuneInput = document.getElementById("fortune-input")
var fortuneClick = document.getElementById("fortune-button");
var halfNumberClick = document.getElementById("half-button");
var fortuneOutput = document.getElementById("fortune-output");
var fullfortune = " ";

halfNumberClick.addEventListener("click", halfNumber);
fortuneClick.addEventListener("click", fortune);

function halfNumber() {
  var halfnum = halfNumberInput.value / 2;
  alert(halfnum);
  console.log("Half of " + parseFloat(halfNumberInput.value) + " is " + parseFloat(halfnum));
}

function fortune() {
  var name = fortuneInput.value;
  var fortunes = ["Keep your eye out for someone special.", "A stranger is a friend that you have not spoken to yet.", "Fortune favors the brave.",
  "You already know the answers to the questions lingering inside your head.", "You will be aided greatly by a person whom you thought to be unimportant."];
  var fortuneGiven = Math.floor(Math.random() * fortunes.length);
  fullfortune = "Here's your fortune for today, " + name + ". " + fortunes[fortuneGiven];
  fortuneOutput.innerHTML = fullfortune;
  restyle();
}

// shadow, font-size, text color,
function restyle() {
var randomizedNumber = Math.random() * 255;
var randomizedNumber2 = Math.random() *255;
var randomizedNumber3 = Math.random() * 255;
var randomizedNumberFont = Math.random() * 5;
var randomizedNUmberWeight = Math.random() * 1000;
fortuneOutput.style.color = "rgb(" + randomizedNumber + "," + randomizedNumber2 + "," + randomizedNumber3 + ")";
fortuneOutput.style.fontSize= randomizedNumberFont + "rem";
fortuneOutput.syle.fontWeight = randomizedNumberWeight;
}
