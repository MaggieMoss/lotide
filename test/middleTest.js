// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle')


// console.log(assertArraysEqual(middle([1]), []))
// console.log(assertArraysEqual(middle([1, 2]), []))
// console.log(assertArraysEqual(middle([1, 2, 3]), [2]))
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]))
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]))

const assert = require('chai').assert;
const middle = require('../middle');

describe("Middle should return middle num when given an array of numbers", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [5]", () => {
  	assert.deepEqual(middle([5]), [])
  })
});