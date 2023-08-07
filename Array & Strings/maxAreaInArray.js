//? MAX AREA IN ARRAY
var maxArea = function (height) {
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[pointer1] > height[pointer2]) {
      area = height[pointer2] * (pointer2 - pointer1);

      pointer2--;
    } else {
      area = height[pointer1] * (pointer2 - pointer1);

      pointer1++;
    }
    if (area > max) {
      max = area;
    }
  }
  return max;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
