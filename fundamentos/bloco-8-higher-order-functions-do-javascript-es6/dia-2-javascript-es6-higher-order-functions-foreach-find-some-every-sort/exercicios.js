const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1921,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1975,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = (a, b) => a.find((c) => c.releaseYear === b);

// console.log(authorBornIn1947(books, 1928));

const smallerName = (a) => {
  a.forEach((c) => c.name.length < a.length ? a = c.name: 1 );
  return a;
};

// console.log(smallerName(books));

const getNamedBook = (a, b) => a.find((c) => c.name.length === b);

// console.log(getNamedBook(books, 26));

const booksOrderedByReleaseYearDesc = (a) => a.sort((b, c) => b.releaseYear < c.releaseYear ? 1 : -1);

// console.log(booksOrderedByReleaseYearDesc(books));

const everyoneWasBornOnSecXX = (a) => a.every((b) => b.author.birthYear < 2000);

// console.log(everyoneWasBornOnSecXX(books));

const someBookWasReleaseOnThe80s = (a) => a.some((b) => b.releaseYear > 1980 && b.releaseYear < 1990);

// console.log(someBookWasReleaseOnThe80s(books));

const authorUnique = (a) => {
  a.forEach(e => {
    a.push(e.author.birthYear); 
  });
  a.sort((a,b) => a - b)
  return !a.some((e, i) => e === a[i+1]);
};

console.log(authorUnique(books));
