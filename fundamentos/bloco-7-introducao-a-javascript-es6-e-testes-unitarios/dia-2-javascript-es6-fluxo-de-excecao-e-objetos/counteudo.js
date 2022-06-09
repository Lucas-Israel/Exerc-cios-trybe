// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       return error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
// //   console.log(customer1);
  
//   customer1.lastName = 'Faria';
// //   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
// //   console.log(customer2);
//   customer2['lastName'] = 'Silva';
// //   console.log(customer2);

//   customer1.teste = 'testando';
//   customer1.outroTeste = 'testado denovo'

// //   console.log(customer1);
// //   console.log(customer1.outroTeste);

//   customer2['teste2'] = 'testando2';
//   customer2['outroTeste2'] = 'testando denovo2'

//   console.log(customer2);
//   console.log(customer2['outroTeste2']);

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

// const teste = (obj, chave, valor) => {
//   obj = {}
//   obj[chave] = valor
//   return obj
// }

// console.log(teste('obj', 'huehue', 'br'));

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   author: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const a in coolestTvShow) {
//   console.log(a);
// }

// console.log(Object.keys(coolestTvShow));

// let an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(an_obj));

// var obj = { 3: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj));

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// // console.log(Object.keys(student2));

// const checkSkill = (arr) => {
//   let nomeSkill = Object.keys(arr);
//   let valorando = Object.values(arr);
//   for (const a in nomeSkill) {
//     console.log(`${nomeSkill[a]}, nível: ${valorando[a]}`);
//   }
// }
// checkSkill(student1);
// checkSkill(student2);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// coolestTvShow.teste = 'teste'

// coolestTvShow['testando'] = 'testado'
// console.log(Object.entries(coolestTvShow));
// console.log(coolestTvShow['name']);

// console.log(Object.keys(coolestTvShow));
// console.log(Object.values(coolestTvShow));

// const starships = {
//   option1: "Tardis",
//   option2: "Millennium Falcon",
//   option3: "Enterprise",
//   option4: "Heart of Gold"
// }

// console.log(Object.values(starships));

// const top3Albums = {
//   1: 'Nightfall in Middle-Earth',
//   2: 'Imaginations from the Other Side',
//   3: 'Somewhere Far Beyond',
//   };
  
// console.log(Object.entries(top3Albums));

// const getDayName = (number) => {
//   if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
//   const dayNumber = number - 1;
//   const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//   return days[dayNumber];
// };

// const printDayname = (dayNumber) => {
//   try {
//     console.log(getDayName(dayNumber));
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// printDayname(0);

// const band = {
//   name: 'Blind Guardian',
//   formedIn: 1986,
//   lastAlbum: 'Beyond the Red Mirror',
// };

// const info = {
//   genre: 'Power Metal',
//   lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
// };

// console.log(Object.assign(band, info));
