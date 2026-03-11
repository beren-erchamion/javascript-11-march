const prompt = require("prompt-sync")();

// 1. Phone Battery Drama
// Your phone battery percentage is given.
// Write a program that prints:
// • Battery > 80 → "Chill Plenty of battery"
// • Battery between 30 and 80 → "You're good "
// • Battery between 10 and 29 → "Low battery "
// • Battery < 10 → "Find a charger NOW! "
// Use if...else if.
let battery = prompt("Enter your phone battery percentage: ");
battery = Number (battery);
if (battery > 80) {
    console.log("Chill Plenty of battery :D");
}
else if (battery >= 30 && battery <= 80) {
    console.log("You're good :)");
}
else if (battery >= 10 && battery <= 29) {
    console.log("Low battery :(");
}
else if (battery < 10) {
    console.log("Phone battery low! Find a charger NOW! :'(");
}