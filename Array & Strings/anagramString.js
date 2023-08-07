//? IS STRING ANAGRAM TO A GIVEN STRING?
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let smap = {};
  let tmap = {};
  for (let i = 0; i < s.length; i++) {
    if (smap[s[i]] === undefined) smap[s[i]] = 1;
    else smap[s[i]] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (tmap[t[i]] === undefined) tmap[t[i]] = 1;
    else tmap[t[i]] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (tmap[s[i]] !== smap[s[i]]) return false;
  }
  return true;
};
let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));
