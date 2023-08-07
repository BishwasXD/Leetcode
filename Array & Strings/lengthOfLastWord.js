//?LENGTH OF LAST WORD
var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  console.log(arr);
  i = 1;
  while (arr[arr.length - i].length === 0) {
    i = i + 1;
  }
  return arr[arr.length - i].length;
};
let s = "   fly me   to   the moon";
console.log(lengthOfLastWord(s));
