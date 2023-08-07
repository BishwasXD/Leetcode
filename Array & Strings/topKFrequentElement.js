//? RETURN TOP K FREQUENT ELEMENT
var topKFrequent = function (nums, k) {
  let frequencyMap = {};
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap[nums[i]] === undefined) frequencyMap[nums[i]] = 1;
    else frequencyMap[nums[i]] += 1;
  }
  console.log(frequencyMap);
  let values = Object.values(frequencyMap);

  values = values.sort((a, b) => b - a);

  function getKeyFromValue(obj, value) {
    for (let key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
  }
  console.log(values);
  for (let i = 0; i < k; i++) {
    let key = getKeyFromValue(frequencyMap, values[i]);
    frequencyMap[key] = 0;
    output.push(+key);
  }
  return output;
};

let nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
let k = 3;
console.log(topKFrequent(nums, k));
