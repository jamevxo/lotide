const assertEqual = require('./assertEqual');


const head = function(array)  {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

