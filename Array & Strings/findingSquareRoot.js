//? FINDING SQUARE ROOT.
var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (x < i * i) return i - 1;
  }
};
let x = 1;
console.log(mySqrt(x));
