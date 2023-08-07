//? REVERSE WORDS
var reverseWords = function (s) {
  let split = s.split(" ");
  reverse = "";
  for (let i = 0; i < split.length; i++) {
    if (i > 0) reverse += " ";
    for (let j = split[i].length - 1; j >= 0; j--) {
      reverse += split[i][j];
    }
  }
  return reverse;
};
let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
