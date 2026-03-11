const prompt = require("prompt-sync")();

// 10. Discount System
// Write a program for a shopping discount:
// • Price > 500 → 20% discount
// • Price > 200 → 10% discount
// • Otherwise → No discount
// Use if...else if.
let price = prompt ("Enter the price of the item to check for discount: ")
price = Number(price)
if (price>500) {
    let discount = price*0.20
    let finalPrice = price-discount
    console.log("You get a 20% discount. Final price: ",finalPrice)
}
else if (price>200) {
    let discount = price*0.10
    let finalPrice = price-discount
    console.log("You get a 10% discount. Final price: ",finalPrice)
}
else {
    console.log("No discount available.")
}