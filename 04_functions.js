// function countVowel(value) {      //without arrow function

//     var count=0;
//     let vowels=['a','e','i','o','u']
//     for (const char of value) {
//         if(vowels.includes(char,0)){
//             count++;
//         }

//     }
//     console.log(count);
// }

// let result=(value)=>{            //with arrow function
//     var count=0;
//     let vowels=['a','e','i','o','u']
//     for (const char of value) {
//         if(vowels.includes(char,0)){
//             count++;
//         }

//     }
//     return count;
// }
// const prompt = require('prompt-sync')();
// let value = prompt('Enter the String ')
// let count = result(value)
// console.log(count);

//QFor a given array of nmbers print its square using foreach()

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//   console.log(val * val);
// });
// arr.forEach()

//Q Find largest element using reduce method in array
// let arr = [32, 41, 1, 101, 6, 1000];

// const result = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });
// console.log(result);

//Q Given an array with marks of students filter out marks which is greater than 90

// let marks = [82, 93, 97, 43, 45, 69, 96, 100, 95, 32];

// const result = marks.filter((val) => {
//   return val > 90;
// });
// console.log(result);

//IIFE O/P QUESTION
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

//Closures
