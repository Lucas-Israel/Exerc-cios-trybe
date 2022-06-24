import {books} from './books.mjs';

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const abc = (a) => a.filter(e => e.author.name === 'J. R. R. Tolkien').map(e => e.name)[0]

console.log(abc(books));
