'use strict';

const fs = require('fs');

let dataInput;
let numResults = NaN;
let newString = '';
let totalCalibration = 0;
let numResultsToNum = NaN;
fs.readFile('input1.txt', (err, data) => {
  if (err) throw err;

  dataInput = data.toString().split('\n');
  theCode(dataInput, calibrationValue);
});

let calibrationValue = [];
// pass in the the input data and to get each number that is needed the calibration value
function getCalibartion(arr) {
  //   numResultsToNum will convert the numResults to a number
  let numResultsToNum = NaN;
  // Loop through data to remove any non digits and convert the string to number
  for (let i = 0; i <= 10; i++) {
    newString = arr[i];
    getNewString(newString);
    // This will give a calibraion value that will need to be added to the total.
  }

  return calibrationValue;
}

// need to set newString to zero if there are no numbers in the string. And any other create a string will all the digits.
function getNewString(arr3) {
  //  ^0-9 will find any char that is not a digit
  numResults = newString.replace(/[^0-9]/g, '');
  if (numResults === '') {
    numResults = '0';
  }
  calNumber(numResults);
}
// to convert string to number and push to calibrationValue array
function calNumber(results) {
  let claibrationNumber = '';
  if (numResults.length === 1) {
    claibrationNumber = numResults.charAt(0);
  } else {
    claibrationNumber =
      numResults.charAt(0) + numResults.charAt(numResults.length - 1);
  }
  numResultsToNum = parseInt(claibrationNumber);
  calibrationValue.push(numResultsToNum);
}
// getting the sum of the each number in calibrationValue
function getTotalCalibration(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    totalCalibration = totalCalibration + calibrationValue[i];
  }
}
// function to call the two functions
function theCode(arr1, arr2) {
  getCalibartion(arr1);
  getTotalCalibration(arr2);
  console.log(totalCalibration);
}
