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

module.exports = middle;