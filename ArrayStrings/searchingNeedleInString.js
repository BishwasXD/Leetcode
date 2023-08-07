//? SEARCHING FOR NEEDLE IN STRING(HAYSTACK)
var strStr = function (haystack, needle) {
  let needleLength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let check = "";
    for (let j = i; j < i + needleLength; j++) {
      check += haystack[j];
    }

    console.log(check);
    if (check === needle) return i;
  }
  return -1;
};

let haystack = "hello";
let needle = "ll";
console.log(strStr(haystack, needle));
