const prompt = require("prompt-sync")();

// 4. Largest of Two Numbers
// Write a program that compares two numbers and prints which number is greater.
// Use if...else.

console.log("Enter two numbers to check which one is greater.");
let num5 = prompt ("Enter your first number: ");
let num6 = prompt ("Enter your second number: ");
num5 = Number(num5);
num6 = Number(num6);
if (num5<num6) {
    console.log(num6, " is greater")
}
else{
    console.log(num5, " is greater")
}