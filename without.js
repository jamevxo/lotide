
//Function implementation of 'without' which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      output.push(source[i]);
    }
  }
  return output;
};

module.exports = without;

