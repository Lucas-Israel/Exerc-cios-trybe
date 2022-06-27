const books = require ('./books.js');

const abc = (a) => a.map(e => `${e.name} - ${e.genre} - ${e.author.name}`);

console.log(abc(books));
