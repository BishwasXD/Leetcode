var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) count++;
    else if (nums[i] === nums[i + 1]) continue;
    else count = 0;
    if (count > max) max = count;
  }
  return max + 1;
};
let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
