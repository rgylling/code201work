//This function loads my html and css before my javascript
window.onload = function() {

//Keeps users score
var answersRight = 0;

//Made functions to keep my programming more DRY ----------------------
function getElements(id, text) {
  var el = document.getElementById(id);
  el.textContent = text;
  return el;
}

function getRightAnswers () {
  // console.log ("Answers right: " + answersRight)
  getElements('p2', 'Answers right: ' + answersRight);
};

function alertWrong () {
  // alert ("Wrong!!!!!!!!!!!")
  getElements('p3', 'Wrong!!!!!!!!!!!');
};

function alertRight () {
  // alert ("You got the answer correct!")
  getElements('p3', 'You got the answer correct!');
};

function logAnswer (useranswer) {
  // console.log ("The users answer is: " + useranswer)
  getElements('p1', 'Your guess is: ' + useranswer);
};

function userScore () {
  alert("Wow " + user + ",You got " + answersRight + " out of 5 questions right !")
};

//End of function list ------------------------------------------------

//Question1-3:Loops through array asking questions
var user = prompt("Hello what is your name?");
console.log("The users name is " + user);


var questions = [
  ["Lets see how smart you really are.. what is 8 multiplied by 8 multiplied by 10",640],
  ["What is 2 plus 2 ", 4],
  ['What is 2 minus 0?', 2]
];


for (i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if (response == answer) {
    alertRight ();
    answersRight += 1;
      getRightAnswers ();
      logAnswer(response);
  } else {
    alertWrong ();
      getRightAnswers ();
      logAnswer(response);
  }
}

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
