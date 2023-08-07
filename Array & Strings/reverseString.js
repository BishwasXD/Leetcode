//? REVERSE A STRING
var reverseString = function (s) {
  let firstPointer = 0;
  let secondPointer = s.length - 1;
  for (let i = 0; i < s.length / 2; i++) {
    [s[firstPointer], s[secondPointer]] = [s[secondPointer], s[firstPointer]];
    firstPointer++;
    secondPointer--;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
