//? NEXT GREATER ELEMENT IN ARRAY (given is array2 and subarray of array2 which is array1 for every element in array1 find the next
//? largest element in array 2 for that same element if not found push -1, output is array
var nextGreaterElement = function (nums1, nums2) {
  let hash1 = {};
  let hash2 = {};
  let output = [];

  for (let i = 0; i < nums1.length; i++) {
    hash1[nums1[i]] = i;
  }

  for (let i = 0; i < nums2.length; i++) {
    hash2[nums2[i]] = i;
  }

  for (let i = 0; i < nums1.length; i++) {
    let index_in_nums2 = hash2[nums1[i]];

    while (index_in_nums2 < nums2.length) {
      if (nums2[index_in_nums2] > nums1[i]) {
        output.push(nums2[index_in_nums2]);
        break;
      }
      index_in_nums2++;
      if (index_in_nums2 === nums2.length) output.push(-1);
    }
  }

  return output;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
