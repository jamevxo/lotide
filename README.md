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

* `head(array)`: Function to return the first element of an input array. Takes an array as a param and returns element at index 0
* `tail(array)`: Function to return a new array with all elements except the first. Takes an array as a parameter and returns a new array starting from index 1 to the end.
* `middle(array)`: Function to return the middle element(s) of an array. Takes an array as a parameter and returns a new array with the middle element(s) of the input array. If the input array has an odd length, a single middle element is returned. If the input array has an even length, two middle elements are returned.
* `eqArrays(array1, array2)`:  Function to check if two arrays are equal. Takes two arrays as parameters and returns a boolean value indicating whether the two arrays are equal in terms of their elements and order.
* `assertEqual`: Asserts if two values are equal.
* `assertObjectsEqual`: Asserts if two objects are equal.
* `countLetters`: Counts the occurrences of each letter in a string.
* `countOnly`: Counts occurrences of specific elements in an array based on a given object.
* `assertArraysEqual`: Asserts if two arrays are equal.
* `eqObjects`: Checks if two objects are equal.
* `findKey`: Retrieves the key of a value in an object based on a callback function.
* `findKeyByValue`: Retrieves the key of a value in an object.
* `flatten`: Flattens a nested array into a single  level array.
* `letterPositions`: Returns the indices of each letter in a string.
* `map`: Transforms the elements of an array based on a callback function.
* `takeUntil`: Returns a new array with elements until a specified condition is met.
* `without`: Returns a new array with specified elements removed.