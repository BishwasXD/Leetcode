//?LONGEST PREFIX
var longestPrefix = function (arr) {
  arr = arr.sort();
  let str = "";
  let i = 0;
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[0][i] === arr[arr.length - 1][i]) {
      str += arr[0][i];
      i = i + 1;
    }
  }

  return str;
};
let str = ["flower", "flow", "flight"];
console.log(longestPrefix(str));
