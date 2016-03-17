window.onload = function() {

var answersRight = 0;

var user = prompt("Hello what is your name?");
console.log("The users name is " + user);

//Question1:Choose hair color If answer is black return alert.. If answer is pink return alert
var question1 = prompt("Greetings " + user + ". What color is my hair? Pink or Black?");
console.log ("The users answer is " + question1);

if (question1.toLowerCase() === "black"){
    alert("You got it wrong.. Obviously my hair isn't " + question1 + ".")
  } else  if (question1.toLowerCase() === "pink"){
    alert("You got it the answer right I guess....");
    var answersRight = answersRight + 1;
  } else {
    alert("Learn how to answer a question stupid!")
  };
  console.log ("User has " + answersRight + " question right");

//Question2: Asks a riddle to the user. If riddle is correct alert else if the answer is wrong alert wrong
var question6 = prompt("Next question " + user + ". How much wood could a woodchuck chuck if a woodchuck could chuck ______?" );
console.log("The user guessed " + question6);

if (question6 == "wood") {
    alert("I thought the answer was 7 but apparently it is wood.. Congrats!");
    var answersRight = answersRight + 1;
  } else {
    alert("Wrong answer dumbo!")
  };
  console.log("User has " + answersRight + " questions right");

//Declares a variable as true for my while loop
var askAgain = true;

//Question3:Asks the user a question if the user doesnt answer correctly it loops again until answer is right.
while (askAgain) {
      var question7 = prompt("Hi " + user + ". What is 100 multiplied by 20.");
      console.log("The user answered " + question7);

      if (question7 == 2000 ) {
          askAgain = false;
          alert("You got the answer right jerk!");
          var answersRight = answersRight + 1;
          break;
      } else
         alert("Try again stupid!");
         askAgain = true;
      };
  console.log("User has " + answersRight + " questions right");

//Question 4: Gives the user 4 tries to guess my favorite number used a do while loop to prompt atleast once
var i = 0;
do {
  var ask = parseInt(prompt("What is my favorite number? You get 4 tries!"));
  var i = i + 1;
  if (ask > 7){
    alert("You guessed too high!");
  } else if (ask < 7){
    alert("You guessed too low!");
  } else if(isNaN(ask) === true ){
    alert("Please enter a number!")
  } else if (ask === 7) {
    alert("You got the answer correct!");
    answersRight += 1;
    break;
  } else {
      break;
  }
} while ( i < 4)
console.log("User has " + answersRight + " question right");

//Question 5: Made an array of colors.. User has to guess what the favorite color is. Has 5 choices he can choose
var colors = ['red','green','blue','black','white']
var colorQuestion = prompt("Can you name one of my favorite colors!?");
var wrongAnswer = false;
for (var i=0;i < colors.length; i++){
  if (colorQuestion.toLowerCase() == colors[i]){
    alert("Congrats thats one of my favorite colors!");
    answersRight += 1;
    wrongAnswer = true;
  }
};
if (!wrongAnswer){
  alert("You can't even guess between 5 colors!?")
};
console.log("User has " + answersRight + " questions right");

// This is the end of the game prompting user how many questions they got right.
if (answersRight == 5){
  alert("Wow " + user + ", you got every question right you're a nerd!")
} else if (answersRight == 4 ) {
  alert("Wow " + user + ", you only got 4 out of 5 questions right. You suck.")
} else if (answersRight == 3) {
  alert("Wow " + user + ", you only got 3 out of 5 questions right. You suck.")
} else if (answersRight == 2) {
  alert("Wow " + user + ", you only got 2 out of 5 questions right. You suck.")
} else if (answersRight == 1) {
  alert("Wow " + user + ", you only got 1 out of 5 questions right. You suck.")
} else {
  alert("Wow " + user + ", You suck.")
};

};
