//? FIBONACCI
var fib = function (n) {
  if (n <= 1) return n;
  let fibo = 0;
  fibo += fib(n - 1) + fib(n - 2);
  return fibo;
};

let n = 4;
console.log(fib(n));
