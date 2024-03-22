const prompt = require('prompt-sync')();
let size = prompt('Enter the size of array')
// const arr = Array.from({length:size}, ()=> prompt('Enter your elements: '))
const arr = []
for (let i = 0; i < size; i++) {
    let n = prompt(`Enter your element: `)
    arr.push(n)
}
console.log(arr);

// console.log(arr.includes('Shreyas'))
// console.log(arr.indexOf('Shreyas'));
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }
// const newArr = [4, 5, 6, 7]
// const mergedArr = [...arr, ...newArr] // arr.concat(new_arr)
// console.log(mergedArr)
