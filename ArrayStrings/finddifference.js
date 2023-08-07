//? FIND THE DIFFERENCE IN TWO STRINGS [s minus t]

// var findTheDifference = function (s, t) {
//   let seen = {};
//   let frequencyS = {};
//   let frequencyT = {};
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     seen[s[i]] = true;
//   }
//   for (let i = 0; i < s.length; i++) {
//     frequencyS[s[i]] = (frequencyS[s[i]] || 0) + 1;
//   }
//   for (let i = 0; i < t.length; i++) {
//     frequencyT[t[i]] = (frequencyT[t[i]] || 0) + 1;
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (
//       (!seen[t[i]] || frequencyS[t[i]] !== frequencyT[t[i]]) && !res.includes(t[i])
//     )
//       res += t[i];
//   }
//   return res;
// };
// let s = "ae";
// let t = "aea";
// console.log(findTheDifference(s, t));

//?works [green in runtime, red in memory]

//? A better solution using one hash map
// var findTheDifference = function (s, t) {
//   let frequency = {};
//   for (let i of s) {
//     frequency[i] = (frequency[i] || 0) + 1;
//   }

//   for (let letter of t) {
//     if (!frequency[letter]) return letter;
//     frequency[letter]--;
//   }
// };
// let s = "ae";
// let t = "aea";
// console.log(findTheDifference(s, t));
