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

//Function implementation for 'flatten' which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      output.push(array[i]);
    } else {
      output = output.concat(array[i]);
    }
  }
  return output;
};

const result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);
