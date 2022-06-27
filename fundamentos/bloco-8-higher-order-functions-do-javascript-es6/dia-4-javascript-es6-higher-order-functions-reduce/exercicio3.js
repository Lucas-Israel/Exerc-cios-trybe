const books = require('../dia-3-javascript-es6-higher-order-functions-map-e-filter/books');

const abc = (a) => a.map(a => a.releaseYear - a.author.birthYear).reduce((a, b) => a + b)/a.length

console.log(abc(books));
