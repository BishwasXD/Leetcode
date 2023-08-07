//? PALINDROME
var isPalindrome = function (x) {
  let palindrome = 0;
  let store = x;

  let mod;
  if (x < 0) {
    return false;
  } else {
    while (x != 0) {
      mod = x % 10;
      palindrome += mod * Math.pow(10, x.toString().length - 1);
      x = Math.floor(x / 10);
    }

    if (palindrome === store) {
      return true;
    } else {
      return false;
    }
  }
};

let number = 121;
console.log(isPalindrome(number));
