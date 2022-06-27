const books = require ('./books.js');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const bcd = /(.\. ){3}/g;

const abc = (a) => a.find(a => a.author.name.match(bcd))

console.log(abc(books));
