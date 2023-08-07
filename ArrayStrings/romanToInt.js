//? ROMAN TO INT
let romanToInt = function (s) {
  let myMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let first = myMap[s[i]];
    let second = myMap[s[i + 1]];
    if (first < second) {
      sum += second - first;
      i++;
    } else {
      sum += first;
    }
  }
  return sum;
};
let s = "MCMXCIV"; //1994
console.log(romanToInt(s));
