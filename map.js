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

/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/* TEST
const results1 = map(words, word => word[0]);
console.log(results1);


// conversion to uppercase
const moreWords = ["hello", "world", "javascript"];
const expected2 = ["HELLO", "WORLD", "JAVASCRIPT"];

const results2 = map(moreWords, word => word.toUpperCase());

assertArraysEqual(results2, expected2);


// squaring numbers
const numbers = [1, 2, 3, 4, 5];
const expected3 = [1, 4, 9, 16, 25];

const results3 = map(numbers, num => num * num);

assertArraysEqual(results3, expected3);

// string length
const longWords = ['pterodactyl', 'embourgeoisement', 'antidisestablishmentarianism'];
const expected4 = [11, 16, 28];

const results4 = map(longWords, x => x.length);

assertArraysEqual(results4, expected4);

*/