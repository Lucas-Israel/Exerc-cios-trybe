const books = require('../dia-3-javascript-es6-higher-order-functions-map-e-filter/books');

const abc = (a) => a.map(a => a.author.name).reduce((a, b) => `${a}, ${b}`)

console.log(abc(books));
