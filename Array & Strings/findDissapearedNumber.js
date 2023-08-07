//? FIND DISAPPEARED NUMBER IN RANGE (1-N)
var findDisappearedNumbers = function (nums) {
  let hash = {};
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = true;
  }
  console.log(hash);
  for (let i = 0; i < nums.length; i++) {
    if (!hash[i + 1]) output.push(i + 1);
  }
  return output;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
