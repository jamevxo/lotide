# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jamevxo/lotide`

**Require it:**

`const _ = require('@jamevxo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array.
* `tail`: Returns a new array with all elements except the first.
* `middle`: Returns the middle element(s) of an array.
* `eqArrays`: Checks if two arrays are equal.
* `assertEqual`: Asserts if two values are equal.
* `assertObjectsEqual`: Asserts if two objects are equal.
* `countLetters`: Counts the occurrences of each letter in a string.
* `countOnly`: Counts occurrences of specific elements in an array based on a given object.
* `assertArraysEqual`: Asserts if two arrays are equal.
* `eqObjects`: Checks if two objects are equal.
* `findKey`: Retrieves the key of a value in an object based on a callback function.
* `findKeyByValue`: Retrieves the key of a value in an object.
* `flatten`: Flattens a nested array into a single level array.
* `letterPositions`: Returns the indices of each letter in a string.
* `map`: Transforms the elements of an array based on a callback function.
* `takeUntil`: Returns a new array with elements until a specified condition is met.
* `without`: Returns a new array with specified elements removed.