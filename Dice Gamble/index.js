//behaviour of dice 1
var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomImageSource= "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//behaviour of dice 2
var randomNumber2 = Math.floor((Math.random()*6))+1;
var randomImageSource= "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);


//declaration of winner .
if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
