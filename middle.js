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

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array)  {
  let output = []; // empty string
  if (array.length < 3) {
    return output; //returns empty stirng if length less than 3
  }
  if ((array.length % 2) !== 0) {
    let x = Math.ceil(array.length / 2) - 1; // gives us the index of the middle value
    output.push(array[x]);
  } else {
    let x = array.length / 2 - 1; // Index of the first middle value
    let y = array.length / 2; // Index of the second middle value
    output.push(array[x], array[y]); // Push both middle values to the output array
  }
  return output;
};

console.log(middle([1,2,3,4,5])); // should return [3]

console.log(middle([1,2,3,4,5,6,7,8])); // should return [4,5]