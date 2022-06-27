const students = require('./students.js');
const grades = require('./grades.js');

const abc = (A, B) => A.map((a, i) => ({Nome: a, Nota: B[i].reduce((a, b) => a + b)/B[i].length}));

console.log(abc(students, grades));
