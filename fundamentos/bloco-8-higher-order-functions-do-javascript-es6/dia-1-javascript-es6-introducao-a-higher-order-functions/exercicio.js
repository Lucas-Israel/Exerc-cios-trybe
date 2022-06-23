// const a = (b) => `${b.toLowerCase().replace(/ /, '_')}@trybe.com`

// const newEmployees = () => {
//   const employees = {
//     id1: a('Pedro Guerra'),
//     id2: a('Luiza Drumond'),
//     id3: a('Carla Paiva'),
//   }
//   return employees;
// };

// console.log(newEmployees().id1);

// e1 /\

// const apo = (a) => a;

// const check = (a, b) => {
//   if (a === b) return 'Parabéns você ganhou';
//   return 'Tente novamente';
// }

// const tesouro = (a) => {
//   let b = Math.floor(Math.random() * 5);
//   return check(a, b);
// }

// console.log(tesouro(apo(5)));

// e2 /\

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const che = (a, b) => {
  let cont = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (b[index] === 'N.A') cont += 0.5;
    if (a[index] === b[index]) cont += 1;
    if (a[index] !== b[index]) cont -= 0.5;
  }
  return cont;
}

const abc = (a, b, c) => console.log(a(b, c));

abc(che, RIGHT_ANSWERS, STUDENT_ANSWERS);
