//? FIND HOW MANY CHILDREN WILL GET ENOUGH COOKIES
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let count = 0;
  let pointer1 = g.length - 1;
  let pointer2 = s.length - 1;
  for (let i = 0; i < (s.length && g.length); i++) {
    if (g[pointer1] > s[pointer2]) pointer1--;
    if (g[pointer1] <= s[pointer2]) {
      pointer1--;
      pointer2--;
      count++;
    }
  }
  return count;
};

console.log(findContentChildren(g, s));
