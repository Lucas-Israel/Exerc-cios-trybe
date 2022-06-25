const books = require ('./books.js');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const bcd = /.\. .\. .\. \w*/g;

const abc = (a) => a.filter(a => a.author.name.match(bcd)).map(a => a.author.name)

console.log(abc(books));
