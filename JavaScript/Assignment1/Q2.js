// Declare variables of different data types
let userName = "Anshu";
let age = 20;
let isStudent = true;
let subjects = ["Java", "HTML", "CSS"];
let student = { name: "Anshu", age: 20 };
let address = null;
let result;

let data = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: student, Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

// Display the report
console.table(data);