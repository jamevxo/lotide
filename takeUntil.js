// Function Implementation
const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation for eqArrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// Function implementation for assertArraysEqual
const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

const faceBook = ['F', 'A', 'C', 'E', 'B', 'O', 'O', 'K', '.', 'C', 'O', 'M'];
const result1 = takeUntil(faceBook, item => item === '.');

const expected1 = ['F', 'A', 'C', 'E', 'B', 'O', 'O', 'K'];

assertArraysEqual(result1, expected1);

const oddNumbersOnly = [1, 3, 5, 7, 9, 10, 11];
const result2 = takeUntil(oddNumbersOnly, item => item % 2 === 0);

const expected2 = [1, 3, 5, 7, 9];

assertArraysEqual(result2, expected2);

