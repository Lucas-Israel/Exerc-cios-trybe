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

const apo = (a) => a;

const check = (a, b) => {
  if (a === b) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

const tesouro = (a) => {
  let b = Math.floor(Math.random() * 6);
  return check(a, b);
}

console.log(tesouro(apo(5)));

// e2 /\