//?shortest subarray that includes the maxm frq element(if 2 has freq 3 then 2 should be in subarray 3 times) by still maintaining every element in array
//?(if other element has > 1 freq then that element can be in subarray only once)
//! not exactly
var findShortestSubArray = function (nums) {
  let subarraylength = 0;
  let frequency = {};
  for (let element of nums) {
    frequency[element] = (frequency[element] || 0) + 1;
  }
  let values = Object.values(frequency);
  let max = Math.max(...values); //spread operator to pass in individual value of values arr.
  for (let element of values) {
    if (element === max) subarraylength += max;
    else subarraylength += 1;
  }
  return subarraylength;
};

let nums = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(nums));
