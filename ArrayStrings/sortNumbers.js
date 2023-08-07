// //? SORT NUMBERS (RANGE=> 0-2)
var sortColors = function (nums) {
  let pointer0 = 0;
  let pointer1 = 0;
  let pointer2 = nums.length - 1;

  while (pointer1 <= pointer2) {
    if (nums[pointer1] === 0) {
      [nums[pointer0], nums[pointer1]] = [nums[pointer1], nums[pointer0]];
      pointer0++;
      pointer1++;
    } else if (nums[pointer1] === 2) {
      [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
      pointer2--;
    } else {
      pointer1++;
    }
    console.log(nums);
  }

  return nums;
};
let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
