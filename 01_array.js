const arr = [1, 2, 3, 'Shreyas', 'Javascript', 'Python']
// console.log(arr.includes('Shreyas'))
// console.log(arr.indexOf('Shreyas'));
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }
const newArr = [4, 5, 6, 7]
const mergedArr = [...arr, ...newArr] // arr.concat(new_arr)
console.log(mergedArr)
