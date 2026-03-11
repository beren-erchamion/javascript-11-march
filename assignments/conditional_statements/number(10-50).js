const prompt = require("prompt-sync")();

// 6. Number Between Range
// Write a program to check if a number is between 10 and 50.
// Use logical operator &&.

let num = prompt ("Enter a number to check if it falls between 10 and 50: ")
num = Number(num)
if (num>=10 && num<=50) {
    console.log(num," falls between 10 and 50")
}
else{
    console.log(num," does not fall between 10 and 50")
}