'use strict';
const fs = require('fs');
let dataInput;
fs.readFile('input2.txt', 'utf8', (err, data) => {
  if (err) throw err;

  dataInput = data.toString().split('\n');
  // console.log(dataInput);
});
// 12 red, 13 green, 14 blue

let games = [
  'Game 1: 3 blue, 2 green, 6 red; 17 green, 4 red, 8 blue; 2 red, 1 green, 10 blue; 1 blue, 5 green',
  'Game 2: 9 red, 2 green; 5 red, 1 blue, 6 green; 3 green, 13 red, 1 blue; 3 red, 6 green; 1 blue, 14 red, 6 green',
  // 'Game 3: 6 red, 3 blue, 8 green; 6 blue, 12 green, 15 red; 3 blue, 18 green, 4 red',
  // 'Game 4: 1 blue, 4 red; 2 blue, 6 red; 13 blue; 11 blue, 1 green, 8 red; 10 blue, 3 green, 2 red; 3 green, 7 blue',
  // 'Game 5: 2 red, 1 blue, 8 green; 2 blue, 7 green, 3 red; 1 blue, 7 green, 4 red; 2 blue, 1 green, 1 red; 13 green, 1 blue',
  // 'Game 6: 7 green, 1 red, 3 blue; 1 red, 4 blue; 6 green, 6 blue; 8 green, 1 red; 6 green, 1 red, 5 blue',
  // 'Game 7: 10 blue, 1 green; 5 red, 8 blue, 3 green; 11 blue, 5 red, 8 green; 2 blue, 8 red, 5 green; 7 blue, 9 green; 6 blue, 2 green, 7 red',
  // 'Game 8: 15 green, 8 blue, 3 red; 6 blue, 7 green, 5 red; 2 green, 1 red, 5 blue; 9 blue, 9 green, 5 red',
  // 'Game 9: 16 red; 5 blue, 6 red, 9 green; 7 blue, 6 green, 2 red; 15 red, 5 blue, 3 green; 1 red, 6 green, 6 blue; 3 blue, 7 red, 5 green'
 
];
// loop though input
function gameSet(arr) {
  for (let game = 0; game < arr.length -1; game++) {
    const element = arr[game];
    let gameInfo = element.split('');
    console.log(gameInfo , 'line 29');

  }
}
gameSet(games);
// split each index
// game id array to store id's
// set game id
//
// each set is separated by; convert each set to an array.
