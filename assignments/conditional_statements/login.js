const prompt = require("prompt-sync")();

// 8. Login System
// Create a simple login check:
// • Username must be "admin"
// • Password must be "1234"
// If both are correct → Login Successful
// Otherwise → Invalid Credentials
// Use && operator.
let name = prompt ("Enter your username: ")
let pass = prompt ("Enter your password: ")
if (name=="admin" && pass=="1234") {
    console.log("Login Successful")
}
else {
    console.log("Invalid Credentials")
}