const prompt = require("prompt-sync")();

// 5. Student Grade System
// Write a program that assigns grades based on marks:
// • 90–100 → Grade A
// • 75–89 → Grade B
// • 50–74 → Grade C
// • Below 50 → Fail
// Use if...else if.

let num = prompt ("Enter your total percentage to check your grades: ");
num = Number (num);
if (num>=90) {
    console.log("You have received A+ grade.");
}
else if (num<90 && num>=75) {
    console.log("You have received A grade.");
}
else if (num<75 && num>=65) {
    console.log("You have received B+ grade.");
}
else if (num<65 && num>=55) {
    console.log("You have received B grade.");
}
else if (num<55 && num>=45) {
    console.log("You have received C grade.");
}
else if (num<45 && num>=40) {
    console.log("You have received D grade.");
}
else{
    console.log("You have failed.");
}