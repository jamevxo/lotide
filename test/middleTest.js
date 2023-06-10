const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let a = [1,2,3,4,5]
let b = [1,2,3,4,5,6,7,8]

assertArraysEqual((middle(a)),[3]); // should return [3]
assertArraysEqual((middle(b)), [4,5]); // should return [4,5]

