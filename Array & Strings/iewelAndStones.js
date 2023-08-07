//? JEWEL AND STONES (FIND JEWEL IN STONE)
var numJewelsInStones = function (jewels, stones) {
  let jewelMap = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    jewelMap[jewels[i]] = true;
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewelMap[stones[i]]) count++;
  }
  return count;
};

let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
