const without = require('../without');
const assert = require('chai').assert;

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

describe("#without", () => {
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse']", () => {
    assert.strictEqual(without(['hello, world', 'lighthouse']), ['hello', 'world']);
  });