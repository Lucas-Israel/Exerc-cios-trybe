const books = require ('./books.js');

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const abc = (a) => a.map(e => {
  let b = {};
  b.age = e.releaseYear - e.author.birthYear;
  b.name = e.author.name;
  return b;
}).sort((a, b) => a.age < b.age ? -1 : 1);

console.log(abc(books));
