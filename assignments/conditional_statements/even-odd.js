const prompt = require("prompt-sync")();

// 2. Even or Odd
// Write a program that checks whether a number is even or odd.
// Use if...else.

let num2 = prompt ("Enter your number to check if its a odd or even number: ");
num2 = Number (num2);
let num3 = num2%2
if (num3=1) {
    console.log(num2, "is an odd number.");
}
else{
    console.log(num2, "is an even number.");
}