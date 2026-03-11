const prompt = require("prompt-sync")();

// 7. Divisible by 3 and 5
// Write a program that checks:
// • If a number is divisible by both 3 and 5.
// Use && operator.

let num = prompt ("Enter a number to check if it is divisible by both 3 and 5: ")
num = Number(num)
if (num%3==0 && num%5==0) {
    console.log(num," is divisible by both 3 and 5")
}