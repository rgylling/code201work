//This function loads my html and css before my javascript
window.onload = function() {

//Keeps users score
var answersRight = 0;

//Made functions to keep my programming more DRY ----------------------
function getRightAnswers () {
  console.log ("Answers right: " + answersRight)
};

function alertWrong () {
  alert ("Wrong!!!!!!!!!!!")
};

function alertRight () {
  alert ("You got the answer correct!")
};

function logAnswer (useranswer) {
  console.log ("The users answer is: " + useranswer)
};

function userScore () {
  alert("Wow " + user + ",You got " + answersRight + " out of 5 questions right !")
};

//End of function list ------------------------------------------------

//Question1:Choose hair color If answer is black return alert.. If answer is pink return alert
var user = prompt("Hello what is your name?");
console.log("The users name is " + user);

var question1 = prompt("Greetings " + user + ". What color is my hair? Pink or Black?");
logAnswer (question1);

if (question1.toLowerCase() === "black"){
    alertWrong ();
  } else  if (question1.toLowerCase() === "pink"){
    alertRight ();
    var answersRight = answersRight + 1;
  } else {
    alertWrong ();
  };
getRightAnswers ();

//Question2: Asks a riddle to the user. If riddle is correct alert else if the answer is wrong alert wrong
var question6 = prompt("Next question " + user + ". How much wood could a woodchuck chuck if a woodchuck could chuck ______?" );
logAnswer (question6);

if (question6 == "wood") {
    alertRight ();
    var answersRight = answersRight + 1;
  } else {
    alertWrong ();
  };
getRightAnswers ();

//Declares a variable as true for my while loop
var askAgain = true;

//Question3:Asks the user a question if the user doesnt answer correctly it loops again until answer is right.
while (askAgain) {
    var question7 = prompt("Hi " + user + ". What is 100 multiplied by 20.");
    logAnswer (question7);

    if (question7 == 2000 ) {
        askAgain = false;
        alertRight ();
        var answersRight = answersRight + 1;
        break;
      } else
        alertWrong ();
        askAgain = true;
      };
getRightAnswers ();

//Question 4: Gives the user 4 tries to guess my favorite number used a do while loop to prompt atleast once
var i = 0;
do {
  var ask = parseInt(prompt("What is my favorite number? You get 4 tries!"));
  logAnswer (ask);
  var i = i + 1;
  if (ask > 7){
    alert("You guessed too high!");
  } else if (ask < 7){
    alert("You guessed too low!");
  } else if(isNaN(ask) === true ){
    alert("Please enter a number!")
  } else if (ask === 7) {
    alertRight ();
    answersRight += 1;
    break;
  } else {
      break;
  }
} while ( i < 4)
getRightAnswers ();

//Question 5: Made an array of colors.. User has to guess what the favorite color is. Has 5 choices he can choose
var colors = ['red','green','blue','black','white']
var colorQuestion = prompt("Can you name one of my favorite colors!?");
logAnswer (colorQuestion);
var wrongAnswer = false;
for (var i=0;i < colors.length; i++){
  if (colorQuestion.toLowerCase() == colors[i]){
    alertRight ();
    answersRight += 1;
    wrongAnswer = true;
  }
};
if (!wrongAnswer){
  alertWrong ();
};
getRightAnswers ();

// This is the end of the game prompting user how many questions they got right.
userScore ();
};
