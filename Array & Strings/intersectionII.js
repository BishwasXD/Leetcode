//? INTERSECTION II
//TODO: TRY WITH SINGLE HASH MAP
var intersect = function (nums1, nums2) {
  let hash1 = {};
  let hash2 = {};
  let output = [];
  for (let i = 0; i < nums1.length; i++) {
    if (hash1[nums1[i]] === undefined) hash1[nums1[i]] = 1;
    else hash1[nums1[i]] += 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hash2[nums2[i]] === undefined) hash2[nums2[i]] = 1;
    else hash2[nums2[i]] += 1;
  }
  console.log(hash1);
  console.log(hash2);
  for (let i = 0; i < nums1.length; i++) {
    if (hash2[nums1[i]] !== undefined && !output.includes(nums1[i])) {
      let nums1Frequency = hash1[nums1[i]];
      let nums2Frequency = hash2[nums1[i]];
      console.log(nums1Frequency);
      console.log(nums2Frequency);
      while (nums1Frequency && nums2Frequency > 0) {
        output.push(nums1[i]);
        nums1Frequency--;
        nums2Frequency--;
      }
    }
  }
  return output;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersect(nums1, nums2));
