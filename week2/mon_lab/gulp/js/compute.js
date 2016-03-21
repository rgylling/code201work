/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/
var question = ['first', 'second', 'third'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../js/app');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;

/***********************************************************
 * Example of TDD on a feature related to Week 2's labwork *
 ***********************************************************/
function addFive(num) {
  return num + 5;
}

// if(addFive(0) == 5) {
//   console.log("test 1 passed!");
// } else {
//   console.log("test 1 failed");
// }
// if(addFive(100) == 105) {
//   console.log("test 2 passed!");
// } else {
//   console.log("test 2 failed");
// }
// if(addFive(11) == 16) {
//   console.log("test 3 passed!");
// } else {
//   console.log("test 3 failed");
// }

exports.addFive = addFive;

function isEven(num) {
  return (num % 2) == 0;
}

exports.isEven = isEven;

function isThree(num) {
  return (num % 3) == 0;
}

exports.isThree= isThree;

function isSix(num) {
  return (isEven(num) && isThree(num));
}

exports.isSix = isSix;

function sum (a,b) {
  var answer = a + b;
  console.log ("The sum of " + a + " and " + b + " is " + answer);
  return answer
}

exports.sum = sum;

function multiply (a,b) {
  var answer = a * b;
  console.log ("The product of " + a + " and " + b + " is " + answer);
  return answer
}

exports.multiply = multiply;

function sumAndMultiply (a,b,c) {
  var sum = a + b + c;
  var multiply = a * b * c;
  var array = [sum , multiply];
  console.log (a + " and " + b + " and " + c + " sum to " + sum);
  console.log ("The numbers " + a + " and " + b + " and " + c + " have a product of " + sum);
return array;
}

exports.sumAndMultiply = sumAndMultiply;
