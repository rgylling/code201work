var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 == compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 == compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) == -1003); });

// Test the is even function
  it('should return true because 2 is even', function() { assert(true == compute.isEven(2)); });
  it('should return false because 5 is odd', function() { assert(false == compute.isEven(5)); });
// Test the isthree function
  it('should return true because 3 is a multiple of 3', function() { assert(true == compute.isThree(9)); });
  it('should return false because 10 is not a multiple of 3', function() { assert(false == compute.isThree(10)); });
// test the issix function
  it('should return true because 18 is a multiple of 6', function() { assert(true == compute.isSix(18)); });
  it('should return false because 10 is not a multiple of 6', function() { assert(false == compute.isSix(10)); });


});
