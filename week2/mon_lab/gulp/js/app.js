var exports = {};
var question1  = document.getElementById('question1');
var answer1 = document.getElementById('answer1');
var question2 = document.getElementById('question2');
var answer2 = document.getElementById('answer2');
var question3 = document.getElementById('question3');
var answer3 = document.getElementById('answer3');
var question4 = document.getElementById('question4');
var answer4 = document.getElementById('answer4');
var question5 = document.getElementById('question5');
var answer5 = document.getElementById('answer5');

document.addEventListener('DOMContentLoaded', function() {
  var p1 = sum1(2,3);
  var p2 = multiply1(10,15,10);
  var p3 = sumAndMultiply(9,5,15);
  var myArray = [3,6,5]
  var p4 = sumArray(myArray);
  var p5 = multiplyArray(myArray);
question1.textContent = 'Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.'
answer1.textContent = 'sum(2,3) returned ' + p1;
question2.textContent = 'Problem 2: Write a function called multiply() that takes in two numbers as arguments and then returns the product of those numbers.'
answer2.textContent = 'multiply(10,15,10) returned ' + p2;
question3.textContent = 'Problem 3: Write a function called sumAndMultiply() that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers.'
answer3.textContent = 'sumAndMultiply(9,5,15) returned ' + p3;
question4.textContent = 'Problem 4: Write a function called sumArray() that takes in an array of numbers as a single argument and then returns the sum of those numbers.'
answer4.textContent = 'sumArray([3,6,5]) returned ' + p4;
question5.textContent = 'Problem 5: Write a function called multiplyArray() that takes in an array of numbers as a single argument and then returns the product of those numbers.'
answer5.textContent = 'multiplyArray([3,6,5]) returned ' + p5;

});
