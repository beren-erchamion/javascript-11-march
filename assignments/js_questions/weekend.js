const prompt = require("prompt-sync")();

// 4. Weekend Mood
// Check if today is Saturday or Sunday.
// • If yes → "Party time "
// • Otherwise → "Back to work/study "
// Use || operator.

let day = prompt("Enter the day of the week: ")

if (day === "saturday" || day === "sunday" || day === "Saturday" || day === "Sunday") {
    console.log("It is ",day,"! Party time!")
} else {
    console.log("Back to work/study!")
}