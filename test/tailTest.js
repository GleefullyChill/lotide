const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = [1];
assertEqual(words.length, 1);
const result = tail(words).length;
assertEqual(result, 0);
