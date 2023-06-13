const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

const tail = require('../tail');

describe('#tail', () => {
  it("returns an array with two elements ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.lengthOf(result, 2); // ensure we get back two elements
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
  });
});

/* convert w/ Mocha and Chai

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
*/