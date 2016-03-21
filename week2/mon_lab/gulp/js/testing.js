function sum (a,b) {
  var answer = a + b;
  console.log ("The sum of " + a + " and " + b + " is " + answer);
  return answer
}

function multiply (a,b) {
  var answer = a * b;
  console.log ("The product of " + a + " and " + b + " is " + answer);
  return answer
}

function sumAndMultiply (a,b,c) {
  var sum = a + b + c;
  var multiply = a * b * c;
  var array = [sum , multiply];
  console.log (a + " and " + b + " and " + c + " sum to " + sum);
  console.log ("The numbers " + a + " and " + b + " and " + c + " have a product of " + sum);
}

// --------------------------------------
var array1 = [1,2,3]

function sumArray (a) {
  var sum = 0
  for (i=0; i < a.length ; i++) {
    sum = sum + a[i];

}
console.log (a + " was passed and the sum is " + sum);
};

sumArray (array1);

// ------------------------------------

var array2 = [2,2,5]

function multiplyArray (a) {
  var sum = 1
  for (i=0; i < a.length ; i++) {
    sum = sum * a[i];

}
console.log (a + " was passed and the sum is " + sum);
};

multiplyArray (array2);
