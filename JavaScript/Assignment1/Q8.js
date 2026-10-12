// Declare salary and increment rate
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;
let projection = [];

// Calculate salary for five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    projection.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Display salary projection
console.table(projection);