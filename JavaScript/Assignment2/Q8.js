const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalBeforeDiscount = cart.reduce((total, product) => total + product.price, 0);
let totalAfterDiscount = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);
    totalAfterDiscount += finalPrice;

    console.log(`${product.item}: ₹${finalPrice.toFixed(2)}`);
}

if (totalBeforeDiscount > 50000) {
    totalAfterDiscount -= totalAfterDiscount * 0.05;
}

console.log(`Total Before Discount: ₹${totalBeforeDiscount.toFixed(2)}`);
console.log(`Final Cart Total: ₹${totalAfterDiscount.toFixed(2)}`);