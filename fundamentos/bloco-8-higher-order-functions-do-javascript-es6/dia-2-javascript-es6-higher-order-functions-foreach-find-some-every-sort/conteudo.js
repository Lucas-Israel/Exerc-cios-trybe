// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];

//   function verifyGrades() {
//     students.forEach((student, index) => {
//       if (student.grade >= 60) {
//         students[index].approved = 'Aprovado';
//       } else {
//         students[index].approved = 'Recuperação';
//       }
//     });
//   }

//   verifyGrades();

//   console.log(students);

// c1 /\

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);
// // 50

// const numbers1 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5v2 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5v2);
// // 50

// c2/\

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
// console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// const abc = (a, b) => {
//   b.forEach(e => {
//     a(e);
//   });
// };

// abc(showEmailList, emailListInData);

// fixando 1 /\

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (a) => a.find((n) => n % 15 === 0);

// console.log(findDivisibleBy3And5(numbers))

// fixando find 1 /\

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (a) => a.find((b) => b.length === 5 );

// console.log(findNameWithFiveLetters(names));

// fixando find 2 /\

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// const findMusic = (a, b) => a.find((c) => c.id === b);

// console.log(findMusic(musicas, '31031686'))

// fixando find 3 /\

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((a) => a === name)

// console.log(hasName(names, 'Ana'))

// fixando some 1 /\

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => arr.every((a) => a.age >= minimumAge)

// console.log(verifyAges(people, 18));

// fixando every 1 /\

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const abc = (a) => a.sort((b, c) => b.age > c.age ? 1 : -1);
const cba = (a) => a.sort((b, c) => c.age > b.age ? 1 : -1);

console.log(abc(people));
console.log(cba(people));

// sort /\
