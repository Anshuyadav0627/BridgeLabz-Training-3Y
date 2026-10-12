// Enter the purchase amount
let total = 7500;
let discount = 0;

// Calculate discount percentage
if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
}

// Calculate final price
let discountAmount = total * discount / 100;
let finalPrice = Math.round(total - discountAmount);

// Display results
console.log(`Original Total: ₹${total}`);
console.log(`Discount: ${discount}%`);
console.log(`Final Price: ₹${finalPrice}`);