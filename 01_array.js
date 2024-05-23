// const prompt = require("prompt-sync")();
// let size = prompt("Enter the size of array");
// const arr = Array.from({length:size}, ()=> prompt('Enter your elements: '))
// const arr = ["1", "33", "48", "21", "18", "16", "19", "69", "70", "44"];
// for (let i = 0; i < size; i++) {
//   let n = prompt(`Enter your element: `);
//   arr.push(n);
// }
// console.log(arr);

// console.log(arr.includes('Shreyas'))
// console.log(arr.indexOf('Shreyas'));
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }
// const newArr = [4, 5, 6, 7]
// const mergedArr = [...arr, ...newArr] // arr.concat(new_arr)
// console.log(mergedArr)

//FindIndex()
// console.log(
//   arr.findIndex((value) => {
//     return value > 18;
//   })
// );
// const arr = [21, 100, 10, 45, 17];
// arr.sort((a, b) => {
//   let c = a - b;
//   return c;
// });
// console.log(arr);

//Q1 Find the second largest number in an array
//Input : [12,35,1,10,34,1,34] --O/P: 34
// INput : [10,5,10] O/P : 5

// function secondLargest(arr) {
//   //arr.sort((a,b)=> b-a)
//   let largest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;
//   if (arr.length <= 1) {
//     return "Not Applicable";
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }
// console.log(secondLargest([21, 100, 10, 45, 17]));
// let arr = [21, 100, 10, 45, 17];
// arr.sort((a, b) => a - b);
// console.log(arr);
// let a = BigInt(
//   "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
// );
// let b = BigInt(
//   "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998"
// );
// let result = a - b;
// console.log(result.toString());

//Q2 Rotate Array by K
//Given an integer array nums rotate it right by k steps
//Input : [1,2,3,4,5,6,7] k=3 ----> Output: [7,1,2,3,4,5,6] k=1 - > [6,7,1,2,3,4,5] k=2 -> [5,6,7,1,2,3,4] k=3

// function rotateArray(nums, k) {
//   let size = nums.length;
//   if (k > size) {
//     k = k % size;
//   }
//   if (k == size) {
//     console.log("Resultant array will be the same");
//     return nums;
//   }
//   let temp = nums.splice(size - k, size);
//   nums.unshift(...temp);
//   return nums;
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//Q3 - Remove Duplicates Given an integer array nums sorted in non-decreasing order, your task is to remove the duplicates in-place.
//Each unique element should appear only once, and the relative order of the elements should be preserved.
//After removing the duplicates, return the number of unique elements in nums.
//Input [0,0,1,1,1,2,2,3,3,4] --> output [0,1,2,3,4]

// function removeDuplicates(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] == nums[i + 1]) {
//       nums.splice(i + 1, 1);
//       --i;
//     }
//   }
//   return nums;
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//Q4 Maximum subarray problem
//input [-2,1,-3,4,-1,2,1,-5,4] --> Output :6 [4,-1,2,1]
//Input [5,4,-1,7,8] --> output : 23 [5,4,-1,7,8]

//Brute Force :
// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let start = 0;
//   let end = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currSum = currSum + nums[j];
//       if (currSum > maxSum) {
//         maxSum = currSum;
//         start = i;
//         end = j;
//       }
//     }
//   }
//   return {
//     "Maximum Sum": maxSum,
//     Array: nums.slice(start, end + 1),
//   };
// }
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//Using Kadane Algorithm :
function kadaneAlgo(nums) {
  let maxSum = nums[0];
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
  maxSum.map();
}
console.log(kadaneAlgo([5, 4, -1, 7, 8]));
