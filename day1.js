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
    newString = newString.replaceAll('zero', '0');
    newString = newString.replaceAll('one', '1');
    newString = newString.replaceAll('two', '2');
    newString = newString.replaceAll('three', '3');
    newString = newString.replaceAll('four', '4');
    newString = newString.replaceAll('five', '5');
    newString = newString.replaceAll('six', '6');
    newString = newString.replaceAll('seven', '7');
    newString = newString.replaceAll('eight', '8');
    newString = newString.replaceAll('nine', '9');
    console.log(newString);
    getNewString(newString);
  }
  return calibrationValue;
}

// need to set newString to zero if there are no numbers in the string. And any other create a string will all the digits.
function getNewString(arr3) {
  //  ^0-9 will find any char that is not a digit
  numResults = newString.replace(/[^0-9]/g, '');
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
  if (claibrationNumber.length <= 1) {
    claibrationNumber += claibrationNumber;
  }
  console.log(claibrationNumber);
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
