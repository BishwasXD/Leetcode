//? PRODUCT EXCEPT SELF
var productExceptSelf = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let leftProduct = 1;
    let rightProduct = 1;
    while (leftPointer < i) {
      leftProduct *= nums[leftPointer];
      leftPointer++;
    }
    while (rightPointer > i) {
      rightProduct *= nums[rightPointer];
      rightPointer--;
    }
    output.push(leftProduct * rightProduct);
  }
  return output;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
