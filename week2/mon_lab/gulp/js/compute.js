/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/
var question = ['first', 'second', 'third'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../js/app');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;


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

function sum1 (a,b) {
  var answer = a + b;
  return answer
}

exports.sum1 = sum1;

function multiply1 (a,b) {
  var answer = a * b;
  return answer
}

exports.multiply1 = multiply1;

function sumAndMultiply (a,b,c) {
  var sum = sum1(a,b) + c;
  var multiply = multiply1(a,b) * c;
  var array = [sum , multiply];
  console.log (a + " and " + b + " and " + c + " sum to " + sum);
  console.log ("The numbers " + a + " and " + b + " and " + c + " have a product of " + multiply);
return array;
}

exports.sumAndMultiply = sumAndMultiply;


var array1 = [1,2,3]

function sumArray (a) {
  var sum = 0
  for (i=0; i < a.length ; i++) {
    sum = sum + a[i];
}
console.log (a + " was passed and the sum is " + sum);
return sum;
};

exports.sumArray = sumArray;


function multiplyArray (a) {
  var sum = 1
  for (i=0; i < a.length ; i++) {
    sum = sum * a[i];

}
console.log (a + " was passed and the sum is " + sum);
//console.table (array1);
return sum;
};


exports.multiplyArray = multiplyArray;
