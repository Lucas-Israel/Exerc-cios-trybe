const books = require ('./books.js');

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

const abc = (a) => a.filter(e => e.genre === 'Ficção Científica' || e.genre === 'Fantasia');

console.log(abc(books));
