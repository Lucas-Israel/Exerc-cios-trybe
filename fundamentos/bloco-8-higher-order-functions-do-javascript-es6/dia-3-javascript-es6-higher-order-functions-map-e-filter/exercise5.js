const books = require ('./books.js');

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const abc = (a) => a.filter(e => e.genre === 'Ficção Científica' || e.genre === 'Fantasia').sort((a, b) => a.author.name < b.author.name ? -1 : 1).map(e => e.author.name);

console.log(abc(books));
