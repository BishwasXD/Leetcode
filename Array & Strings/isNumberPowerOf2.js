//? IS 'n'  POWER OF 2?
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  let pow = 1;
  while (pow <= n) {
    pow = pow * 2;
    if (pow === n) return true;
  }
  return false;
};
let n = 1;
console.log(isPowerOfTwo(n));
