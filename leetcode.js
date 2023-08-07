//? THREE SUM
// var threeSum = function (nums) {
//   let sum;
//   let pushArray = [];
//   let filteredArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       sum = nums[i] + nums[j + 1] + nums[j + 2];
//       if (sum === 0) {
//         pushArray.push([nums[i], nums[j + 1], nums[j + 2]]);
//       }
//     }
//   }
//   return pushArray;
// };

// let nums = [0, 0, 0];
// console.log(threeSum(nums));

//? PALINDROME
// var isPalindrome = function (x) {
//   let palindrome = 0;
//   let store = x;

//   let mod;
//   if (x < 0) {
//     return false;
//   } else {
//     while (x != 0) {
//       mod = x % 10;
//       palindrome += mod * Math.pow(10, x.toString().length - 1);
//       x = Math.floor(x / 10);
//     }

//     if (palindrome === store) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// let number = 121;
// console.log(isPalindrome(number));

//?LONGEST PREFIX
// var longestPrefix = function (arr) {
//   arr = arr.sort();
//   let str = "";
//   let i = 0;
//   for (let j = 0; j < arr[0].length; j++) {
//     if (arr[0][i] === arr[arr.length - 1][i]) {
//       str += arr[0][i];
//       i = i + 1;
//     }
//   }

//   return str;
// };
// let str = ["flower", "flow", "flight"];
// console.log(longestPrefix(str));

//?LENGTH OF LAST WORD
// var lengthOfLastWord = function (s) {
//   let arr = s.split(" ");
//   console.log(arr);
//   i = 1;
//   while (arr[arr.length - i].length === 0) {
//     i = i + 1;
//   }
//   return arr[arr.length - i].length;
// };
// let s = "   fly me   to   the moon";
// console.log(lengthOfLastWord(s));

//?plus one(not so sure about this)
// const plusOne = function (digits) {
//   let carry = 1;
//   const result = [];

//   for (let i = digits.length - 1; i >= 0; i--) {
//     const sum = digits[i] + carry;
//     result.unshift(sum % 10);
//     carry = Math.floor(sum / 10);
//   }
//   if (carry > 0) {
//     result.unshift(carry);
//   }

//   return result;
// };
// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// console.log(plusOne(digits));

//? ROMAN TO INT
// let romanToInt = function (s) {
//   let myMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     let first = myMap[s[i]];
//     let second = myMap[s[i + 1]];
//     if (first < second) {
//       sum += second - first;
//       i++;
//     } else {
//       sum += first;
//     }
//   }
//   return sum;
// };
// let s = "MCMXCIV"; //1994
// console.log(romanToInt(s));

//? PARENTHESIS VALID OR NOT
// var isValid = function (s) {
//   if (s.length % 2 !== 0) return false;
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let topOfStack = stack.length - 1;
//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       stack.push(s[i]);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }
//       if (
//         (s[i] === ")" && stack[topOfStack] === "(") ||
//         (s[i] === "}" && stack[topOfStack] === "{") ||
//         (s[i] === "]" && stack[topOfStack] === "[")
//       ) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// let s = "([}}])";
// console.log(isValid(s));

//? K LARGEST NUMBER IN ARRAY
// var findKthLargest = function (nums, k) {
//   nums = nums.sort((a, b) => a - b);
//   let kLargest = nums[nums.length - 1];
//   let count = 0;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] <= kLargest) {
//       kLargest = nums[i];
//       count++;
//     }

//     if (count === k) return kLargest;
//   }
// };
// let nums = [
//   3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
//   5, 6,
// ];
// let k = 2;
// console.log(findKthLargest(nums, k));

//? SEARCHING FOR NEEDLE IN STRING(HAYSTACK)
// var strStr = function (haystack, needle) {
//   let needleLength = needle.length;
//   for (let i = 0; i < haystack.length; i++) {
//     let check = "";
//     for (let j = i; j < i + needleLength; j++) {
//       check += haystack[j];
//     }

//     console.log(check);
//     if (check === needle) return i;
//   }
//   return -1;
// };

// let haystack = "hello";
// let needle = "ll";
// console.log(strStr(haystack, needle));

//?MOVING ZEROS TO THE LAST POSITION
// var moveZeroes = function (nums) {
//   let count = 0;
//   let newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       newArr.push(nums[i]);
//     } else {
//       count++;
//     }
//   }
//   for (let i = 0; i < count; i++) {
//     newArr.push(0);
//   }
//   return newArr;
// };
// let nums = [0, 1, 0, 3, 12];
// console.log(moveZeroes(nums));

//?MOVING ZEROS TO THE LAST POSITION(BUT OPTIMIZED)
// var moveZeroes = function (nums) {
//   let trackZero = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[trackZero], nums[i]] = [nums[i], nums[trackZero]];
//       console.log(nums);
//       trackZero++;
//     }
//   }
//   return nums;
// };

// let nums = [0, 1, 0, 3, 12];
// console.log(moveZeroes(nums));

// [nums[0], nums[1]] = [nums[1], nums[0]];

// console.log(nums);

//? FINDING SQUARE ROOT.
// var mySqrt = function (x) {
//   for (let i = 0; i <= x; i++) {
//     if (x < i * i) return i - 1;
//   }
// };
// let x = 1;
// console.log(mySqrt(x));

// var isHappy = function (n) {
//   while (n.toString().length !== 0) {
//     if (n < 10) {
//       if (n === 1 || n === 7) return true;
//       return false;
//     }
//     let mod;
//     storeSquare = 0;
//     while (n != 0) {
//       mod = n % 10;
//       storeSquare += mod * mod;
//       n = Math.floor(n / 10);
//     }
//     console.log(storeSquare);
//     if (storeSquare === 1) return true;
//     n = storeSquare;
//   }
//   return false;
// };
// let n = 11;
// console.log(isHappy(n));

//? FIND SINGLE NUMBER IN ARRAY(NON REPEATING NUMBER)
// var singleNumber = function (nums) {
//   nums = nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] !== nums[i] && nums[i - 1] !== nums[i]) {
//       return nums[i];
//     }
//   }
// };
// let nums = [4, 1, 2, 1, 2];
// console.log(singleNumber(nums));

//? MAX AREA IN ARRAY
// var maxArea = function (height) {
//   let pointer1 = 0;
//   let pointer2 = height.length - 1;
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     if (height[pointer1] > height[pointer2]) {
//       area = height[pointer2] * (pointer2 - pointer1);

//       pointer2--;
//     } else {
//       area = height[pointer1] * (pointer2 - pointer1);

//       pointer1++;
//     }
//     if (area > max) {
//       max = area;
//     }
//   }
//   return max;
// };
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// console.log(maxArea(height));

//? FIBONACCI
// var fib = function (n) {
//   if (n <= 1) return n;
//   let fibo = 0;
//   fibo += fib(n - 1) + fib(n - 2);
//   return fibo;
// };

// let n = 4;
// console.log(fib(n));

//? REVERSE A STRING
// var reverseString = function (s) {
//   let firstPointer = 0;
//   let secondPointer = s.length - 1;
//   for (let i = 0; i < s.length / 2; i++) {
//     [s[firstPointer], s[secondPointer]] = [s[secondPointer], s[firstPointer]];
//     firstPointer++;
//     secondPointer--;
//   }
//   return s;
// };

// let s = ["h", "e", "l", "l", "o"];
// console.log(reverseString(s));

//? FIND MISSING NUMBER IN 0-N RANGE
// var missingNumber = function (nums) {
//   let n = nums.length + 1;
//   let sumOfSeries = (n * (n - 1)) / 2;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sumOfSeries - sum;
// };
// let nums = [
//   45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
//   4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
//   25, 47, 0, 31, 42, 24, 10, 14,
// ];
// console.log(missingNumber(nums));

//? FIND ISLAND PERIMETER IN 2D ARRAY
// var islandPerimeter = function (grid) {
//   let perimeter = 0;
//   grid[-1] = 0;
//   grid[grid.length] = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         perimeter += 4;
//         if (grid[i - 1][j] === 1) perimeter--;

//         if (grid[i + 1][j] === 1) perimeter--;

//         if (grid[i][j - 1] === 1) perimeter--;

//         if (grid[i][j + 1] === 1) perimeter--;
//       }
//     }
//   }
//   return perimeter;
// };
// let grid = [
//   [0, 1, 0, 0],
//   [1, 1, 1, 0],
//   [0, 1, 0, 0],
//   [1, 1, 0, 0],
// ];
// console.log(islandPerimeter(grid));

//? INTERSECTION OF TWO ARRAY(WHATS COMMON IN BOTH ARRAY)
// var intersection = function (nums1, nums2) {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let intersection = [];
//   while (
//     typeof nums1[pointer1] !== "undefined" ||
//     typeof nums2[pointer2] !== "undefined"
//   ) {
//     if (nums1[pointer1] === nums2[pointer2]) {
//       intersection.push(nums1[pointer1]);
//     }
//     pointer1++;
//     pointer2++;
//   }
//   return intersection;
// };
// let nums1 = [4, 9, 5];
// let nums2 = [9, 4, 9, 8, 4];
// console.log(intersection(nums1, nums2));

//? FINDING A PEAK IN AN ARRAY
// var peakIndexInMountainArray = function (arr) {
//   let max = 0;
//   index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }
//   return index;
// };

// let arr = [0, 10, 5, 2];
// console.log(peakIndexInMountainArray(arr));

//? REVERSE WORDS
// var reverseWords = function (s) {
//   let split = s.split(" ");
//   reverse = "";
//   for (let i = 0; i < split.length; i++) {
//     if (i > 0) reverse += " ";
//     for (let j = split[i].length - 1; j >= 0; j--) {
//       reverse += split[i][j];
//     }
//   }
//   return reverse;
// };
// let s = "Let's take LeetCode contest";
// console.log(reverseWords(s));

//? INTERSECTION SOLUTION USING HASH MAP
// var intersection = function (nums1, nums2) {
//   const output = [];
//   const seen = {};
//   for (let i = 0; i < nums1.length; i++) {
//     const num = nums1[i];
//     seen[num] = true;
//   }
//   console.log(seen);
//   for (let i = 0; i < nums2.length; i++) {
//     const num = nums2[i];
//     if (seen[num] && !output.includes(num)) {
//       output.push(num);
//     }
//   }
//   console.log(seen);
//   return output;
// };
// let nums1 = [4, 9, 5];
// let nums2 = [9, 4, 9, 8, 4];
// console.log(intersection(nums1, nums2));

//? UNIQUE MORSE CODE
// var uniqueMorseRepresentations = function (words) {
//   let tomorse = [];
//   let myObj = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//   };

//   for (let i = 0; i < words.length; i++) {
//     let morse = "";
//     for (let j = 0; j < words[i].length; j++) {
//       morse += myObj[words[i][j]];
//     }
//     if (!tomorse.includes(morse)) {
//       tomorse.push(morse);
//     }
//   }
//   return tomorse.length;
// };
// let words = ["gin", "zen", "gig", "msg"];
// console.log(uniqueMorseRepresentations(words));

//? IS STRING ANAGRAM TO A GIVEN STRING?
// var isAnagram = function (s, t) {
// if (s.length !== t.length) return false;
//   let smap = {};
//   let tmap = {};
//   for (let i = 0; i < s.length; i++) {
//     if (smap[s[i]] === undefined) smap[s[i]] = 1;
//     else smap[s[i]] += 1;
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (tmap[t[i]] === undefined) tmap[t[i]] = 1;
//     else tmap[t[i]] += 1;
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (tmap[s[i]] !== smap[s[i]]) return false;
//   }
//   return true;
// };
// let s = "anagram";
// let t = "nagaram";
// console.log(isAnagram(s, t));

//? FIND HOW MANY CHILDREN WILL GET ENOUGH COOKIES
// var findContentChildren = function (g, s) {
//   g = g.sort((a, b) => a - b);
//   s = s.sort((a, b) => a - b);
//   let count = 0;
//   let pointer1 = g.length - 1;
//   let pointer2 = s.length - 1;
//   for (let i = 0; i < (s.length && g.length); i++) {
//     if (g[pointer1] > s[pointer2]) pointer1--;
//     if (g[pointer1] <= s[pointer2]) {
//       pointer1--;
//       pointer2--;
//       count++;
//     }
//   }
//   return count;
// };

// console.log(findContentChildren(g, s));

//? TWO SUM
// var twoSum = function (nums, target) {
//   let i = 0;
//   let difference;
//   while (true) {
//     difference = target - nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (difference === nums[j]) return [i, j]; //try with two pointer after sorting lot easier
//     }
//     i++;
//   }
// };
// let nums = [2, 7, 11, 15];
// let target = 9;
// console.log(twoSum(nums, target));

//?TWO SUM
// var twoSum = function (nums, target) {
//   let pointer1 = 0;
//   let pointer2 = nums.length - 1;

//   sortedNums = nums.sort((a, b) => a - b);
//   console.log(sortedNums);
//   for (let i = 0; i < sortedNums.length; i++) {
//     let sum = nums[pointer2] + nums[pointer1];
//     if (sum > target) pointer2--;
//     if (sum < target) pointer1++;
//     if (sum === target)
//       return [
//         nums.indexOf(sortedNums[pointer1]),
//         nums.indexOf(sortedNums[pointer2]),
//       ];
//   }
// };
// let nums = [3, 3];
// let target = 6;
// console.log(twoSum(nums, target));

//? MERGE TWO LISTS
// var mergeTwoLists = function (list1, list2) {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let output = [];
//   while (pointer1 < list1.length && pointer2 < list2.length) {
//     if (list1[pointer1] === list2[pointer2]) {
//       output.push(list1[pointer1]);
//       output.push(list2[pointer2]);
//       pointer1++;
//       pointer2++;
//     }
//     if (list1[pointer1] < list2[pointer2]) {
//       output.push(list1[pointer1]);
//       pointer1++;
//     }
//     if (list2[pointer2] < list1[pointer1]) {
//       output.push(list2[pointer2]);
//       pointer2++;
//     }
//   }

//   return output;
// };

// let list1 = [1, 2, 4];
// let list2 = [1, 3, 4];
// console.log(mergeTwoLists(list1, list2)); //works but f0r leetcode use linked list approach

//? IS 'n'  POWER OF 2?
// var isPowerOfTwo = function (n) {
//   if (n === 1) return true;
//   let pow = 1;
//   while (pow <= n) {
//     pow = pow * 2;
//     if (pow === n) return true;
//   }
//   return false;
// };
// let n = 1;
// console.log(isPowerOfTwo(n));

// //? SORT NUMBERS (RANGE=> 0-2)
// var sortColors = function (nums) {
//   let pointer0 = 0;
//   let pointer1 = 0;
//   let pointer2 = nums.length - 1;

//   while (pointer1 <= pointer2) {
//     if (nums[pointer1] === 0) {
//       [nums[pointer0], nums[pointer1]] = [nums[pointer1], nums[pointer0]];
//       pointer0++;
//       pointer1++;
//     } else if (nums[pointer1] === 2) {
//       [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
//       pointer2--;
//     } else {
//       pointer1++;
//     }
//     console.log(nums);
//   }

//   return nums;
// };

// let nums = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(nums));

//? PASCAL'S TRIANGLE
// var generate = function (numRows) {
//   let output = [[1]];

//   let sum;
//   let pointer1;
//   let pointer2;
//   for (let i = 0; i < numRows - 1; i++) {
//     let arr = [];
//     pointer1 = -1;
//     pointer2 = 0;
//     while (pointer2 < output[i].length + 1) {
//       sum = (output[i][pointer1] || 0) + (output[i][pointer2] || 0);
//       arr.push(sum);
//       pointer1++;
//       pointer2++;
//     }
//     output.push(arr);
//   }
//   return output;
// };
// let rows = 5;
// console.log(generate(rows));

//? INTERSECTION II
//TODO: TRY WITH SINGLE HASH MAP
// var intersect = function (nums1, nums2) {
//   let hash1 = {};
//   let hash2 = {};
//   let output = [];
//   for (let i = 0; i < nums1.length; i++) {
//     if (hash1[nums1[i]] === undefined) hash1[nums1[i]] = 1;
//     else hash1[nums1[i]] += 1;
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (hash2[nums2[i]] === undefined) hash2[nums2[i]] = 1;
//     else hash2[nums2[i]] += 1;
//   }
//   console.log(hash1);
//   console.log(hash2);
//   for (let i = 0; i < nums1.length; i++) {
//     if (hash2[nums1[i]] !== undefined && !output.includes(nums1[i])) {
//       let nums1Frequency = hash1[nums1[i]];
//       let nums2Frequency = hash2[nums1[i]];
//       console.log(nums1Frequency);
//       console.log(nums2Frequency);
//       while (nums1Frequency && nums2Frequency > 0) {
//         output.push(nums1[i]);
//         nums1Frequency--;
//         nums2Frequency--;
//       }
//     }
//   }
//   return output;
// };

// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2];
// console.log(intersect(nums1, nums2));

//? NEXT GREATER ELEMENT IN ARRAY (given is array2 and subarray of array2 which is array1 for every element in array1 find the next
//? largest element in array 2 for that same element if not found push -1, output is array
// var nextGreaterElement = function (nums1, nums2) {
//   let hash1 = {};
//   let hash2 = {};
//   let output = [];

//   for (let i = 0; i < nums1.length; i++) {
//     hash1[nums1[i]] = i;
//   }

//   for (let i = 0; i < nums2.length; i++) {
//     hash2[nums2[i]] = i;
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     let index_in_nums2 = hash2[nums1[i]];

//     while (index_in_nums2 < nums2.length) {
//       if (nums2[index_in_nums2] > nums1[i]) {
//         output.push(nums2[index_in_nums2]);
//         break;
//       }
//       index_in_nums2++;
//       if (index_in_nums2 === nums2.length) output.push(-1);
//     }
//   }

//   return output;
// };

// let nums1 = [4, 1, 2];
// let nums2 = [1, 3, 4, 2];
// console.log(nextGreaterElement(nums1, nums2));

//? FIND DISAPPEARED NUMBER IN RANGE (1-N)
// var findDisappearedNumbers = function (nums) {
//   let hash = {};
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     hash[nums[i]] = true;
//   }
//   console.log(hash);
//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[i + 1]) output.push(i + 1);
//   }
//   return output;
// };
// let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// console.log(findDisappearedNumbers(nums));

//? NO OF IDENTICAL PAIR IN A GIVEN ARRAY
// var numIdenticalPairs = function (nums) {
//   let numberFrequency = {};
//   let combination = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (numberFrequency[nums[i]] === undefined) numberFrequency[nums[i]] = 1;
//     else {
//       numberFrequency[nums[i]] += 1;
//     }
//   }
//   const values = Object.values(numberFrequency); //return array of values present in object

//   for (const value of values) {
//     if (value > 1) {
//       combination += (value * (value - 1)) / 2;
//     }
//   }

//   return combination;
// };
// nums = [1, 2, 3, 1, 1, 3];
// console.log(numIdenticalPairs(nums));

//? JEWEL AND STONES (FIND JEWEL IN STONE)
// var numJewelsInStones = function (jewels, stones) {
//   let jewelMap = {};
//   let count = 0;
//   for (let i = 0; i < jewels.length; i++) {
//     jewelMap[jewels[i]] = true;
//   }
//   for (let i = 0; i < stones.length; i++) {
//     if (jewelMap[stones[i]]) count++;
//   }
//   return count;
// };

// let jewels = "aA";
// let stones = "aAAbbbb";
// console.log(numJewelsInStones(jewels, stones));

//? RETURN TOP K FREQUENT ELEMENT
// var topKFrequent = function (nums, k) {
//   let frequencyMap = {};
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (frequencyMap[nums[i]] === undefined) frequencyMap[nums[i]] = 1;
//     else frequencyMap[nums[i]] += 1;
//   }
//   console.log(frequencyMap);
//   let values = Object.values(frequencyMap);

//   values = values.sort((a, b) => b - a);

//   function getKeyFromValue(obj, value) {
//     for (let key in obj) {
//       if (obj[key] === value) {
//         return key;
//       }
//     }
//   }
//   console.log(values);
//   for (let i = 0; i < k; i++) {
//     let key = getKeyFromValue(frequencyMap, values[i]);
//     frequencyMap[key] = 0;
//     output.push(+key);
//   }
//   return output;
// };

// let nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
// let k = 3;
// console.log(topKFrequent(nums, k));

//? PRODUCT EXCEPT SELF
// var productExceptSelf = function (nums) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;
//     let leftProduct = 1;
//     let rightProduct = 1;
//     while (leftPointer < i) {
//       leftProduct *= nums[leftPointer];
//       leftPointer++;
//     }
//     while (rightPointer > i) {
//       rightProduct *= nums[rightPointer];
//       rightPointer--;
//     }
//     output.push(leftProduct * rightProduct);
//   }
//   return output;
// };

// let nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums));

//? Maximize the sum from min value of pairs
// var arrayPairSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   let ans = 0;
//   for (let i = 0; i < nums.length; i = i + 2) {
//     ans += nums[i];
//   }
//   return ans;
// };

// let nums = [1, 4, 3, 2];
// console.log(arrayPairSum(nums));

//? 228 SUMMARY RANGES
// var summaryRanges = function (nums) {
//   let res = [];
//   let track = 0;
//   let i = 0;
//   while (track < nums.length) {
//     let str = nums[track].toString();
//     while (track + 1 < nums.length && nums[track] + 1 === nums[track + 1]) {
//       str = nums[i] + "->" + nums[track + 1];
//       track++;
//     }

//     res.push(str);
//     track++;

//     i = track;
//   }

//   return res;
// };

// let nums = [0, 1, 2, 4, 5, 7];
// console.log(summaryRanges(nums));
