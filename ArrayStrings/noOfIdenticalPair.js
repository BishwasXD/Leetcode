//? NO OF IDENTICAL PAIR IN A GIVEN ARRAY
var numIdenticalPairs = function (nums) {
  let numberFrequency = {};
  let combination = 0;
  for (let i = 0; i < nums.length; i++) {
    if (numberFrequency[nums[i]] === undefined) numberFrequency[nums[i]] = 1;
    else {
      numberFrequency[nums[i]] += 1;
    }
  }
  const values = Object.values(numberFrequency); //returns array of values present in object

  for (const value of values) {
    if (value > 1) {
      combination += (value * (value - 1)) / 2;
    }
  }

  return combination;
};
nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));
