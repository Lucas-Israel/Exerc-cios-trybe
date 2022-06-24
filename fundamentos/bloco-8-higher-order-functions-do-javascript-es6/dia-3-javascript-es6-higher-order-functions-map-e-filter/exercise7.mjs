import {books} from './books.mjs';

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const abc = (a) => a.find(a => a.author.name.split(' ').filter(a => a.endsWith('.')).length === 3).name

console.log(abc(books));
