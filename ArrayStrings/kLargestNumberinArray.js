//? K LARGEST NUMBER IN ARRAY
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let kLargest = nums[nums.length - 1];
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= kLargest) {
      kLargest = nums[i];
      count++;
    }

    if (count === k) return kLargest;
  }
};
let nums = [
  3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
  5, 6,
];
let k = 2;
console.log(findKthLargest(nums, k));
