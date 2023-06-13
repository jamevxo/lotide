const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});

/* COMMENTING OUT THE OLD TEST ASSERTIONS

const assertArraysEqual = require('../assertArraysEqual');

let a = [1,2,3,4,5];
let b = [1,2,3,4,5,6,7,8];

assertArraysEqual(middle(a), [3]); // should return [3]
assertArraysEqual(middle(b), [4,5]); // should return [4,5]

*/
