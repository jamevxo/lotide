const assertObjectsEqual = require('../assertObjectsEqual');

// test code - it works

const obj1 = { name: "James", age: 30 };
const obj2 = { age: 30, name: "James" };
const obj3 = { name: "James", age: 25 };

assertObjectsEqual(obj1, obj2); // Output: ✅✅✅ Assertion Passed: { name: 'James', age: 30 } === { age: 30, name: 'James' }
assertObjectsEqual(obj1, obj3); // Output: 🛑🛑🛑 Assertion Failed: { name: 'James', age: 30 } !== { name: 'James', age: 25 }

