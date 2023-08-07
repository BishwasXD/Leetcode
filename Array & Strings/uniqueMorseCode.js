//? UNIQUE MORSE CODE
var uniqueMorseRepresentations = function (words) {
  let tomorse = [];
  let myObj = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  for (let i = 0; i < words.length; i++) {
    let morse = "";
    for (let j = 0; j < words[i].length; j++) {
      morse += myObj[words[i][j]];
    }
    if (!tomorse.includes(morse)) {
      tomorse.push(morse);
    }
  }
  return tomorse.length;
};
let words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));
