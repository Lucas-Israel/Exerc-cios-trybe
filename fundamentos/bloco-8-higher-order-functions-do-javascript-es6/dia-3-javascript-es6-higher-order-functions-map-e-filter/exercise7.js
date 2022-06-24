const books = require ('./books.js');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const abc = (a) => a.find(a => a.author.name.split(' ').filter(a => a.endsWith('.')).length === 3).name

console.log(abc(books));


// perguntar se esta tudo bem eu ter usado .mjs para exportar e importar no exercicio que pedia para colocar os exercicios em arquivos diferentes .js

// perguntar sobre o funcionamento do exercicio 7 a partir do split para ver se eu entendi corretamente.

// split da push em um array com o parametro passado, entao toda palavra que tiver o parametro no final é uma entrada nova no array e endsWith verifica se o final de cada string dentro da array termina com o parametro passado.