// template literals -> way to emebed expressins in strings using string interpolation

const prompt = require('prompt-sync')();
let myname = prompt('What is your name? ')
console.log(`Hello my name is ${myname} nice to meet you !!`)
myname = "@"+ myname + myname.length
console.log(`Your Username is ${myname}`);

// String methdos ->
// let str = myname.toUpperCase()
// console.log(str)
// str = myname.toLowerCase()
// console.log(str);
// console.log(myname.replace('Shreyas','Singh'));
// console.log(myname.charAt(3));

