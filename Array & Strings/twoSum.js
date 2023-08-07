//? TWO SUM
var twoSum = function (nums, target) {
  let i = 0;
  let difference;
  while (true) {
    difference = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (difference === nums[j]) return [i, j]; //try with two pointer after sorting lot easier
    }
    i++;
  }
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
