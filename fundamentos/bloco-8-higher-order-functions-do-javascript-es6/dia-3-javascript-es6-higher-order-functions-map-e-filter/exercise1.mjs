import {books} from './books.mjs';

const abc = (a) => a.map(e => `Livro: ${e.name}, Genero: ${e.genre}, Autor: ${e.author.name}`);

console.log(abc(books));
