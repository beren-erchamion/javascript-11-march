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

// 3. Voting Eligibility
// Ask for a person's age and check:
// • If age ≥ 18, they can vote
// • Otherwise, they cannot vote
// Use if...else.

let num4 = prompt ("Enter your age to check if you are eligible to vote: ");
num4 = Number (num4);
if (num4>=18) {
    console.log("You are ",num4," years old and hence eligible to vote.");
}
else{
    console.log("You are ",num4," years old and hence ineligible to vote.");
}

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

// 5. Student Grade System
// Write a program that assigns grades based on marks:
// • 90–100 → Grade A
// • 75–89 → Grade B
// • 50–74 → Grade C
// • Below 50 → Fail
// Use if...else if.



// 6. Number Between Range
// Write a program to check if a number is between 10 and 50.
// Use logical operator &&.

// 7. Divisible by 3 and 5
// Write a program that checks:
// • If a number is divisible by both 3 and 5.
// Use && operator.

// 8. Login System
// Create a simple login check:
// • Username must be "admin"
// • Password must be "1234"
// If both are correct → Login Successful
// Otherwise → Invalid Credentials
// Use && operator.

// 9. Age Category
// Write a program that categorizes age:
// • 0–12 → Child
// • 13–19 → Teenager
// • 20–59 → Adult
// • 60+ → Senior Citizen
// Use if...else if.

// 10. Discount System
// Write a program for a shopping discount:
// • Price > 500 → 20% discount
// • Price > 200 → 10% discount
// • Otherwise → No discount
// Use if...else if.