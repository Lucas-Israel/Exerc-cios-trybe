// const numbers = [1, 2, 3];

// const newArray = [4, 5, 6, ...numbers];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// const people = {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//   };

//   const about = {
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer',
//   };

//   const customer = { ...people, ...about };
//   console.log(customer); /* {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer'
//   } */

// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'maçã', 'pêra'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['1', '2', '3'];

// const fruitSalad = (a, b) => [...a, ...b];

// console.log(fruitSalad(specialFruit, additionalItens));

// const quantosParams = (...args) => `Parâmetros:, ${args}.
// Você passou ${args.length} parâmetros para a função.`;

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

//   const { name, price, seller } = product;
//   console.log(price); // Smart TV Crystal UHD

// definindo o objeto

// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };

//   const { name, age, description: { specieName, jedi }, homeWorld: { name: hname, population} } = character;

//   console.log(population);


// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// //   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// //   console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const student = {
//   A: 'Maria',
//   B: 'Turma B',
//   C: 'Matematica',
// };

// const { A: a, B: b, C: c } = student;

// console.log(a); // Maria
// console.log(b); // Turma B
// console.log(c); // Matemática

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// const name = student.a;
// console.log(name); // Maria

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const abc = ({name, age, nationality},{profession, squad, squadInitials}) => `Hi, my name is ${name}, I'm ${age} old, I'm from ${nationality}, I work as ${profession} and my squad is ${squadInitials}- ${squad}`;

// console.log(abc(user, jobInfos));

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [a, b, c, d] = arrayCountries;

// console.log(a); // Brazil
// console.log(b); // Japan
// console.log(c)  // China
// console.log(d); // Canada

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// const [a, b] = saudacoes

// b(a); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// const abc = (...a) => a;
// const [anima, bebid, comid] = abc(comida, animal, bebida);

// console.log(comid, anima, bebid); // arroz gato água

// // // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// const [a, b, c, d, e, f, g] = numerosPares;

// numerosPares = [d, e, f, g];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// person.nationality = 'Brazilian';

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// const newUser = (id, name, email) => ({ id, name, email});

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// const getPosition = (latitude, longitude) => ({latitude,longitude});

// console.log(getPosition(-19.8157, -43.9542));

// const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// const multiply = (number = 1, value = 1) => number * value; 

// console.log(multiply(8));