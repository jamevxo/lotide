const map = require('../map');
const assertArraysEqual = require ('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);


// conversion to uppercase
const moreWords = ["hello", "world", "javascript"];
const expected2 = ["HELLO", "WORLD", "JAVASCRIPT"];

const results2 = map(moreWords, word => word.toUpperCase());

assertArraysEqual(results2, expected2);


// squaring numbers
const numbers = [1, 2, 3, 4, 5];
const expected3 = [1, 4, 9, 16, 25];

const results3 = map(numbers, num => num * num);

assertArraysEqual(results3, expected3);

// string length
const longWords = ['pterodactyl', 'embourgeoisement', 'antidisestablishmentarianism'];
const expected4 = [11, 16, 28];

const results4 = map(longWords, x => x.length);

assertArraysEqual(results4, expected4);

