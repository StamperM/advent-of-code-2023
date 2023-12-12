'use strict';

const fs = require('fs');

let dataInput;
let numResults = NaN;
let claibrationNumber = NaN;
let newString = '';
let totalCalibration = 0;
fs.readFile('input1.txt', (err, data) => {
  if (err) throw err;

  dataInput = data.toString().split('\n');
    theCode(dataInput, calibrationValue);
});

// numberArr[1]
const arrayCal = ['1cat2', 'rac3c6', 'bird123', 'dfsadfasdgev'];
let calibrationValue = [];

function getCalibartion(arr) {
  //   numResultsToNum will convert the numResults to a number
  let numResultsToNum = NaN;
  // Loop through data to remove any non digits and convert the string to number
  for (let i = 0; i <= 3; i++) {
    newString = arr[i];
    getNewString(newString);
    // This will give a calibraion value that will need to be added to the total.
    
  }
  // get only numbers
  numResultsToNum = parseInt(claibrationNumber);
  console.log(numResultsToNum, 'line 43');
  // Create an array of calibrationValues that will be used to get the total.
  calibrationValue.push(numResultsToNum);

  // console.log(calibrationValue[-1]);

  return calibrationValue;
}


// need to set newString to zero if there are no numbers in the string. And any other create a string will all the digits.
function getNewString(arr3) {
  //  ^0-9 will find any char that is not a digit
  numResults = newString.replace(/[^0-9]/g, '');
  if (numResults === ''){
    numResults = "0";
  }
  console.log(numResults, typeof numResults);
  calNumber(numResults);
}

function calNumber(results) {
  let claibrationNumber = '';
  if (numResults.length === 1) {
    claibrationNumber = numResults.charAt(0);
    console.log(claibrationNumber, 'from callNumber function');
  } else {
    claibrationNumber =
      numResults.charAt(0) + numResults.charAt(numResults.length - 1);
  }

  console.log(claibrationNumber, 'from callNumber function');
}
function getTotalCalibration(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(totalCalibration, 'line 68');
    totalCalibration = totalCalibration + calibrationValue[i];
    // console.log(totalCalibration);
  }
}
function theCode(arr1, arr2) {
  getCalibartion(arr1);
  console.log(calibrationValue, 'is this working');
  getTotalCalibration(arr2);
  console.log(totalCalibration);
}

