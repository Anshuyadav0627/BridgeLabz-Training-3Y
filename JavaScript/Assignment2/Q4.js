let scores = [];

for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;
let passedStudents = scores.filter(score => score >= 50);
let formattedScores = scores.map(score => `Score: ${score}`);

console.log("Student Scores:", scores);
console.log("Formatted Scores:", formattedScores);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents.length}`);
