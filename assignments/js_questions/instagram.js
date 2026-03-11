const prompt = require("prompt-sync")();

// 3. Instagram Likes Check
// A post gets some likes.
// Write a program that prints:
// • Likes > 1000 → "Viral post "
// • Likes between 100 and 1000 → "Getting popular "
// • Likes < 100 → "Keep posting "
// Use if...else if.

let likes = prompt ("Enter the number of likes your post has received: ")
likes = Number(likes)

if (likes > 1000) {
    console.log("Your post is viral!")
} else if (likes >= 100) {
    console.log("Your post is getting popular!")
} else {
    console.log("Keep posting! You will get there!")
}