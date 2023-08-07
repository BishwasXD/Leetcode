//? PASCAL'S TRIANGLE
var generate = function (numRows) {
  let output = [[1]];

  let sum;
  let pointer1;
  let pointer2;
  for (let i = 0; i < numRows - 1; i++) {
    let arr = [];
    pointer1 = -1;
    pointer2 = 0;
    while (pointer2 < output[i].length + 1) {
      sum = (output[i][pointer1] || 0) + (output[i][pointer2] || 0);
      arr.push(sum);
      pointer1++;
      pointer2++;
    }
    output.push(arr);
  }
  return output;
};
let rows = 5;
console.log(generate(rows));
