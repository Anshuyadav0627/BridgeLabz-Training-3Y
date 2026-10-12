// Store monthly expenses
let expenses = [5000, 2000, 10000, 3000, 1500];

let total = 0;

// Calculate total expenses
for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;

// Add 10% tax
let tax = total * 0.10;
total += tax;

// Display the results
console.log(`Total Expenses Before Tax: ₹${(total - tax).toFixed(2)}`);
console.log(`Average Monthly Expense: ₹${average.toFixed(2)}`);
console.log(`Tax Amount: ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${total.toFixed(2)}`);