const books = require('../dia-3-javascript-es6-higher-order-functions-map-e-filter/books');

const maiorTitulo = (ab) => ab.map(a => a.name).reduce((a, b) => a.length > b.length ? a : b, [])

const abc = (A) => A.find(a => a.name === maiorTitulo(A))

console.log((abc(books)));
