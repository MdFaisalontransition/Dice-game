function randomNumberForDice() {
  var n = Math.random();
  n = Math.floor((n * 6));
  return n;

}
var diceImages= ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var diceNumber1= diceImages[randomNumberForDice()];
document.querySelector(".dice1 img").setAttribute("src", diceNumber1);
var diceNumber2= diceImages[randomNumberForDice()];
document.querySelector(".dice2 img").setAttribute("src", diceNumber2);
if(diceNumber1>diceNumber2){
document.querySelector("h1").innerHTML="Player 1 Won!";
}
else if(diceNumber1<diceNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Won!";
}
else{
  document.querySelector("h1").innerHTML="It's a Draw!";
}
