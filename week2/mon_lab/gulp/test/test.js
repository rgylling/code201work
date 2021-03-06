var assert = require('assert');
var compute = require('../js/compute.js');

// Great job testing out your functions
describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });



// Test the is even function
  it('should return true because 2 is even', function() { assert(true == compute.isEven(2)); });
  it('should return false because 5 is odd', function() { assert(false == compute.isEven(5)); });
// Test the isthree function
  it('should return true because 3 is a multiple of 3', function() { assert(true == compute.isThree(9)); });
  it('should return false because 10 is not a multiple of 3', function() { assert(false == compute.isThree(10)); });
// test the issix function
  it('should return true because 18 is a multiple of 6', function() { assert(true == compute.isSix(18)); });
  it('should return false because 10 is not a multiple of 6', function() { assert(false == compute.isSix(10)); });
// test sum function
  it('should return 8 because 8 is the sum of 4 and 4', function() { assert(6 == compute.sum1(2,4)); });
  it('should return false because the sum of 5 and 4 is 9', function() { assert(9 == compute.sum1(4,5)); });
// test multiply function

  it('should return 16 because 16 is the product of 4 and 4', function() { assert(16 == compute.multiply1(4,4)); });
  it('should return 20 because 20 is the product of 5 and 4', function() { assert(20 == compute.multiply1(4,5)); });
// test sum and multiply function
  it('should return 9 because 9 is the sum of 2,3, and 4', function() { assert(9 == compute.sumAndMultiply(2,3,4)[0]); });
  it('should return 8 because 8 is the product of 2,2, and 2', function() { assert(8 == compute.sumAndMultiply(2,2,2)[1]); });

// test sumarray function
  var array1 = [1,2,3]
  it('should return 6 because 6 is the sum of 1,2, and 3', function() { assert(6 == compute.sumArray(array1)); });
// test multiplyarray function
  it('should return 9 because 9 is the product of 1,2, and 3', function() { assert(6 == compute.multiplyArray(array1)); });


});
