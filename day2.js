'use strict';
const fs = require('fs');
let dataInput;
fs.readFile('input2.txt', 'utf8', (err, data) => {
  if (err) throw err;

  dataInput = data.toString().split('\n');
  console.log(dataInput);
});
// 12 red, 13 green, 14 blue

let games = {
  game1: [
    ['4 blue', '14 green'],
    ['6 red', '5 green', '6 blue'],
    ['7 red', '3 green', '6 blue'],
  ],
  game2: [
    ['4 blue', '2 green'],
    ['6 red', '9 green', '6 blue'],
    ['7 red', '3 green', '6 blue'],
  ],
  game3: [
    ['4 blue', '14 green'],
    ['6 red', '5 green', '6 blue'],
    ['13 red', '3 green', '6 blue'],
  ],
  game4: [
    ['4 blue', '14 green'],
    ['6 red', '5 green', '6 blue'],
    ['7 red', '3 green', '6 blue'],
  ],
};
// loop though input
// split each index
// game id array to store id's
// set game id
//
// each set is separated by; convert each set to an array.
