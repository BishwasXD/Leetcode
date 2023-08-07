//?MOVING ZEROS TO THE LAST POSITION(BUT OPTIMIZED)
var moveZeroes = function (nums) {
  let trackZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[trackZero], nums[i]] = [nums[i], nums[trackZero]];
      console.log(nums);
      trackZero++;
    }
  }
  return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
