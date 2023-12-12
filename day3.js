// add all the part numbers
const fs = require('fs');
let dataInput;
let dataIndex = NaN;
let symbolIndex = NaN;
fs.readFile('input3.txt', 'utf8', (err, data) => {
  if (err) throw err;

  dataInput = data.toString().split('\n');
  //   console.log(dataInput);
  //   findSymbols(dataInput);
});

// let dataInput = ['...................305.124................................432..............................................576..313.....514.................','.............113...-......&....................&...819...........654..../..........................&901................*....869.257.........' ,'
// ......*...........197.261.....817..336.759............&742......548.......&........748......844.............#.......&........254...169..*...'']
// cleanUpStr = dataInput.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');
console.log();
// find numbers adjacent to a symbol
function findSymbols() {
  for (let i = 0; i <= 5; i++) {
    dataInputSplit = dataInput[i].split('');
    console.log(dataInputSplit, 'line 22');
    dataIndex = i;
    // loop though dataInputSplit and replace all symbols with _
  }
}
// findSymbols(dataInput);
let symbolData = [
  '.',
  '.',
  '.',
  '2',
  '3',
  '3',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '*',
  '.',
  '.',
  '.',
  '.',
  '9',
  '0',
  '9',
  '.',
  '.',
  '6',
  '9',
  '8',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '4',
  '2',
  '7',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '1',
  '2',
  '7',
  '.',
  '*',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '*',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '4',
  '5',
  '0',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '.',
  '4',
  '8',
  '2',
  '.',
  '.',
];
function whereAreSymbols(data) {
  regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=_-]+$/g;
  for (let i = 0; i <= data.length - 1; i++) {
    if (
      data[i] === '#' ||
      data[i] === '$' ||
      data[i] === '%' ||
      data[i] === '@' ||
      data[i] === '*' ||
      data[i] === '&' ||
      data[i] === '/'
    ) {
      return (symbolIndex = i);
    }
  }
}

// are there any symbols
// what is the location of the symbol
// Are there any number within +1 or - 1 on the same line one above and one below

// before

// Are there numbers before or after that index
// add number to array
// sum array
