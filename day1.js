'use strict';

const fs = require('fs');

let dataInput;
let numResults = NaN;
let newString = '';
let totalCalibration = 0;
let numResultsToNum = NaN;
let calibrationValue = [];

fs.readFile('input1.txt', (err, data) => {
  if (err) throw err;

  dataInput = data.toString().split('\n');
  theCode(dataInput, calibrationValue);
});

// pass in the the input data and to get each number that is needed the calibration value
function getCalibartion(arr) {
  // Loop through data to remove any non digits and convert the string to number
  for (let i = 0; i <= arr.length - 1; i++) {
    newString = arr[i];
    console.log(newString, 'passed in');
    // I'm sure there is a better way to do this but i don't know how.
    newString = newString.replace('zero', '0');
    newString = newString.replace('one', '1');
    newString = newString.replace('two', '2');
    newString = newString.replace('three', '3');
    newString = newString.replace('four', '4');
    newString = newString.replace('five', '5');
    newString = newString.replace('six', '6');
    newString = newString.replace('seven', '7');
    newString = newString.replace('eight', '8');
    newString = newString.replace('nine', '9');

    getNewString(newString);
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
function calNumber(nums) {
  let claibrationNumber = '';
  if (nums.length === 1) {
    claibrationNumber = nums.charAt(0);
  } else {
    claibrationNumber = nums.charAt(0) + nums.charAt(nums.length - 1);
  }
  console.log(claibrationNumber, 'calibration number');
  numResultsToNum = parseInt(claibrationNumber);
  calibrationValue.push(numResultsToNum);
  console.log(calibrationValue);
}
// getting the sum of the each number in calibrationValue
function getTotalCalibration(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    totalCalibration += calibrationValue[i];
  }
}
// function to call the two functions
function theCode(arr1, arr2) {
  getCalibartion(arr1);
  getTotalCalibration(arr2);
  console.log(totalCalibration);
}
