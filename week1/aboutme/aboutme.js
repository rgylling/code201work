window.onload = function() {
//Tracks how many questions user got right
var right = 0;
//Asks the users Name
var user = prompt("Hello what is your name?");
console.log("The users name is " + user);

alert("Hello " + user + ", honestly I already can tell that I don't like you so click ok so I can ask you some questions");

//Choose Jerk Phace's hair color
var question1 = prompt("What color is my hair? Pink or Black?");
console.log ("The users answer is " + question1);

//If answer is black return alert.. If answer is pink return alert
if (question1.toLowerCase() === "black"){
    alert("Well stupid.. You got it wrong.. Obviously my hair isn't " + question1 + ". Ready for an even harder question?")
  } else  if (question1.toLowerCase() === "pink"){
    alert("Well.. I still hate you.. But you got it the answer right...Ready for an even harder question?");
    var right = right + 1;
  } else {
    alert("Learn how to answer a question stupid! Ready for the next question?")
  };
  console.log ("User has " + right + " questions right");

//Asks the user to choose a number
var question2 = prompt("Give me a number.. Any number...");
console.log("The user supplied the number " + question2);

//Asks the user to choose another number
var question3 = prompt("Now give me another Number...");
console.log("The user supplied the number " + question3);

alert("Now lets see how good at math you are smarty pants. Your numbers were " + question2 + " and " + question3 + ". Multiply both numbers,subtract 2, and multiply that by 5!");

//Stores users answer
var question5 = prompt("What is your answer jerk!?");

//Multiplies the users answers subtracts 2 and multiplies 5
var answer = ((question2 * question3 - 2 ) * 5);
console.log("The answer to the question is " + answer);

/* If you answered right return alert, if user guessed too high return alert, if user guessed too low return alert */

if (question5 == answer ) {
  alert("Wow...You're ugly but you're smart.. Congrats you got the answer right!");
  var right = right + 1;
} else if (question5 > answer) {
  alert("You guessed too high !")
} else if (question5 < answer) {
  alert("You guessed too low !")
} else {
  alert("You guess sucks!")
};
console.log("User has " + right + " questions right");

//Asks a riddle to the user
var question6 = prompt("Next question " + user + ". How much wood could a woodchuck chuck if a woodchuck could chuck ______?" );
console.log("The user guessed " + question6);

//If riddle is correct alert else if the answer is wrong alert wrong
if (question6 == "wood") {
  alert("I thought the answer was 7 but apparently it is wood.. Congrats!");
  var right = right + 1;
} else {
  alert("Wrong answer dumbo!")
};
console.log("User has " + right + " questions right");

//Declares a variable as true for my while loop
var askAgain = true;

//Asks the user a question if the user doesnt answer correctly it loops again until answer is right.
while (askAgain) {
    var question7 = prompt("Hi " + user + ". What is 100 multiplied by 20.");
    console.log("The user answered " + question7);

    if (question7 == 2000 ) {
        askAgain = false;
        alert("You got the answer right jerk!");
        var right = right + 1;
        break;
    } else
       alert("Try again stupid!");
       askAgain = true;
    };

console.log("User has " + right + " questions right");

alert("Congrats " + user + ". You got " + right + " questions right out of 4! Now check out my resume jerk!")
};
