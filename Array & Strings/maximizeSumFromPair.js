//? Maximize the sum from min value of pairs
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    ans += nums[i];
  }
  return ans;
};

let nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));
