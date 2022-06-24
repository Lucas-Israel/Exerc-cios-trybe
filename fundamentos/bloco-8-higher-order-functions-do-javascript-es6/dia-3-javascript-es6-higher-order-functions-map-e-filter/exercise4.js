const books = require ('./books.js');

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const abc = (a) => a.filter(e => 2022 - e.releaseYear > 60).sort((a, b) => a.releaseYear < b.releaseYear ? -1 : 1);

console.log(abc(books));
