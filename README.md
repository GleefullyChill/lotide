# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gleefullychill/lotide`

**Require it:**

`const _ = require('@gleefullychill/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:\
  'function1(head): returns first item in a given array  \
  'function2(tail): returns all but the first item in a given array  \
  'function3(middle): returns the middle item, or middle two items, of a given array \
  'function4(without): given an array and an item to remove from the array, it returns an array  \
  'function5(flatten): given a nested array, it returns a single level array, with all the items of the original array included  \
  'function6(findKey): given a object and a condition for the value, returns the key that fits the condition  \
  'function7(takeUntil): returns an array of the given array up to the given stopping condition  \
  'function8(findKeyByValue): given an object and a specific value, it returns the key  \
  'function9(map): a map clone, given an array and condition to put on each item, returns a new array with the changes to the array  \
  'function10(letterPositions): returns an array of the index postions of each letter of a string  \
  'function11(countLetters): returns an object of letters and the number of them in a string, given a string  \
  'function12(countOnly): given an object of names with a boolean value and an array, returned an object of the number of times a name with a true value appeared in the array  \
  'function13(eqArrays): given two arrays, compares whether they are equal, returning a boolean value  \
  'function14(eqObjects): given two objects, compares whether they are equal, returning a boolean value, calls eqArrays, if arrays are found  \
  'function15(assertEqual): given 2 primitive data types, compares whether they are equal, returning a boolean value  \
  'function16(assertArraysEqual): calls eqArrays on two given arrays, logs whether they are equal  \
  'function17(assertObjectEqual): calls eqObjects on two given objectss, logs whether they are equal  \