// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // Importing the inspect function for object formatting

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

/* test code - it works

const obj1 = { name: "James", age: 30 };
const obj2 = { age: 30, name: "James" };
const obj3 = { name: "James", age: 25 };

assertObjectsEqual(obj1, obj2); // Output: ✅✅✅ Assertion Passed: { name: 'James', age: 30 } === { age: 30, name: 'James' }
assertObjectsEqual(obj1, obj3); // Output: 🛑🛑🛑 Assertion Failed: { name: 'James', age: 30 } !== { name: 'James', age: 25 }

*/