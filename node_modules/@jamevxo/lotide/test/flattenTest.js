const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

const result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);
