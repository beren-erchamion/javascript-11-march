const prompt = require("prompt-sync")();

// 9. Age Category
// Write a program that categorizes age:
// • 0–12 → Child
// • 13–19 → Teenager
// • 20–59 → Adult
// • 60+ → Senior Citizen
// Use if...else if.
let age = prompt ("Enter your age to find out your age category: ")
age = Number(age)
if (age>=0 && age<=12) {
    console.log("You are a Child")
}
else if (age>=13 && age<=19) {
    console.log("You are a Teenager")
}
else if (age>=20 && age<=59) {
    console.log("You are an Adult")
}
else {
    console.log("You are a Senior Citizen")
}