//?CONTAINS DUPLICATE
var containsNearbyDuplicate = function (nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == undefined) hash[nums[i]] = i;
    else {
      let prevIndex = hash[nums[i]];
      hash[nums[i]] = i;
      if (Math.abs(prevIndex - i) <= k) return true;
    }
  }

  return false;
};
let nums = [1, 2, 3, 1];
let k = 3;
console.log(containsNearbyDuplicate(nums, k));
