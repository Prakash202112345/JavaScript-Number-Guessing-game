"strct mode";

// Generate Random Number
const randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
// Display Message function
var displayMessage = function (message) {
   document.querySelector("#message").textContent = message;
}

// Score Function
var score = 20;
var displayScore = function (score) {
   document.querySelector("#score").textContent = score;
}
// Initial highscroe 0

var highscroe = 0;

// Number Checking Method


document.querySelector("#check-number").addEventListener("click", function () {
   var guess = Number(document.querySelector("#guess").value);
   if (!guess) {
      displayMessage("Enter Valid Number");
   }
   if (guess === randomNumber) {
      displayMessage(`You win the game number is : ${randomNumber}`);
      document.querySelector("#right-number").textContent = randomNumber;
      if (score > highscroe) {
         highscroe = score;
         document.querySelector("#highscore").textContent = highscroe;
      }
   }
   if (guess !== randomNumber) {
      if (score >= 1) {
         displayMessage(guess > randomNumber ? "Guess is High" : "Guess is Low");
         score--;
         displayScore(score);
      }
      else if (score < 1) {
         console.log("you loss the game");
      }
   }
});


// Reset Game Method

document.querySelector("#reset").addEventListener("click", function () {
   displayScore(20);
   displayMessage(`Game Reset Successful Start Guessing`);
   document.querySelector("#guess").value = "";
   document.querySelector("#right-number").textContent = "?";

});



