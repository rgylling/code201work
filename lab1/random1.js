var soMean   = document.getElementById('soMean');

var question1 = prompt('What is your first Name?');
console.log ("Users name is " + question1);
var question2 = prompt('What is your favorite color?');
console.log ("Users favorite color is " + question2);
var question3 = prompt('What is your favorite type of food?');
console.log ("Users favorite food is " + question3);
var question4 = prompt('What is your favorite band');
console.log ("Users favorite band is " + question4);
var question5 = prompt('How much money is in your wallet?');
console.log ("User has this many dollars $" + question5);
var question6 = prompt('What time is it right now');
console.log ("Users current time is " + question6);
soMean.textContent = "Once upon a time there was a person named " + question1 + ". " + question1 + "?? What an ugly name... Speaking of ugly names, you know what color I hate? " + question2 + ". You would like that color.. Anyways I heard you like " + question3 + " food..Disgusting...No wonder you only have " + question5 + " dollars in your wallet! Maybe a better way to spend your measely " + question5 + " dollars is to go buy a cd or something. Wait... you like " + question4 + " ? Nevermind on buying that cd, better luck just pirating the cd since " + question4 + " sucks and you only have " + question5 + " dollars in your wallet. Anyways it is " + question6 + " oclock so I am done making fun of you for now. Unless you want another round.. refresh the page jerk";
