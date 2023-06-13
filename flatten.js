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

module.exports = flatten;

