//? PARENTHESIS VALID OR NOT
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let topOfStack = stack.length - 1;
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (
        (s[i] === ")" && stack[topOfStack] === "(") ||
        (s[i] === "}" && stack[topOfStack] === "{") ||
        (s[i] === "]" && stack[topOfStack] === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

let s = "([}}])";
console.log(isValid(s));
