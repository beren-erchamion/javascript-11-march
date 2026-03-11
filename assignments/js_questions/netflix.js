const prompt = require("prompt-sync")();

// 2. Netflix Night
// A streaming app checks if the user can watch a movie.
// Conditions:
// • Age ≥ 18
// • Has subscription = true
// If both are true → "Enjoy your movie "
// Otherwise → "Access denied "
// Use && operator.

//option-1
let age = prompt("Enter your age: ")
age = Number(age)
let subscription = prompt("Do you have a subscription? (yes/no): ")
if (age >= 18 && subscription === "yes") {
    console.log("Welcome to Netflix! Enjoy your movie")
}  else {
    console.log("Access denied.")
}

//option-2
let subscription = prompt("Do you have a subscription? (yes/no): ")
if (subscription === "yes") {
    let age = prompt("Enter your age: ")
    age = Number(age)
    if (age >= 18) {
        console.log("Welcome to Netflix! Enjoy your movie")
    }
    else {
        console.log("Access denied. You need to be above 18 to watch this movie.")
    }
}
else {
    console.log("Access denied. You need a subscription to watch this movie.")
}