//? FIND SINGLE NUMBER IN ARRAY(NON REPEATING NUMBER)
var singleNumber = function (nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== nums[i] && nums[i - 1] !== nums[i]) {
      return nums[i];
    }
  }
};
let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
