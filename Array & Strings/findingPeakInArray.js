//? FINDING A PEAK IN AN ARRAY
var peakIndexInMountainArray = function (arr) {
  let max = 0;
  index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
};

let arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArray(arr));
