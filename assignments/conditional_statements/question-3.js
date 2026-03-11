const prompt = require("prompt-sync")();

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