const prompt = require("prompt-sync")();

// 1. Positive, Negative, or Zero
// Write a program that checks whether a number is:
// • Positive
// • Negative
// • Zero
// Use if...else if.

let num1 = prompt ("Enter your number to check if its a positive or negative number: ");
num1 = Number (num1);
if (num1>0) {
    console.log(num1, "is a positive number.");
}
else if (num1<0) {
    console.log(num1, "is a negative number.");
}
else{
    console.log(num1, "is neither negative nor positive.");
}