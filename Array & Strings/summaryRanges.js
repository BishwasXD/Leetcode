//? 228 SUMMARY RANGES
var summaryRanges = function (nums) {
  let res = [];
  let track = 0;
  let i = 0;
  while (track < nums.length) {
    let str = nums[track].toString();
    while (track + 1 < nums.length && nums[track] + 1 === nums[track + 1]) {
      str = nums[i] + "->" + nums[track + 1];
      track++;
    }

    res.push(str);
    track++;

    i = track;
  }

  return res;
};

let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
