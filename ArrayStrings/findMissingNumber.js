//? FIND MISSING NUMBER IN 0-N RANGE
var missingNumber = function (nums) {
  let n = nums.length + 1;
  let sumOfSeries = (n * (n - 1)) / 2;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sumOfSeries - sum;
};
let nums = [
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
];
console.log(missingNumber(nums));
