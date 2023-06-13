const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

const faceBook = ['F', 'A', 'C', 'E', 'B', 'O', 'O', 'K', '.', 'C', 'O', 'M'];
const result1 = takeUntil(faceBook, item => item === '.');

const expected1 = ['F', 'A', 'C', 'E', 'B', 'O', 'O', 'K'];

assertArraysEqual(result1, expected1);

const oddNumbersOnly = [1, 3, 5, 7, 9, 10, 11];
const result2 = takeUntil(oddNumbersOnly, item => item % 2 === 0);

const expected2 = [1, 3, 5, 7, 9];

assertArraysEqual(result2, expected2);
