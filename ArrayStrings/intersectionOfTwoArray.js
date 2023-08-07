//? INTERSECTION SOLUTION USING HASH MAP
var intersection = function (nums1, nums2) {
  const output = [];
  const seen = {};
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    seen[num] = true;
  }
  console.log(seen);
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (seen[num] && !output.includes(num)) {
      output.push(num);
    }
  }
  console.log(seen);
  return output;
};
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
