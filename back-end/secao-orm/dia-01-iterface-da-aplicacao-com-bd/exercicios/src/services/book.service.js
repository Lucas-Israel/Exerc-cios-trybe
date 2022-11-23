const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll({ 
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = async (id) => {
  const bok = await book.findByPk(id);

  return bok;
};

const createbook = async ({title, author, pageQuantity, publisher}) => {
  const newbook = await book.create({ title, author, pageQuantity, publisher });

  return newbook;
};

const updatebook = async ({id, title, author, pageQuantity, publisher}) => {
  const [updatedbook] = await book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );

  console.log(updatedbook); // confira o que é retornado quando o book com o id é ou não encontrado;  
  return updatedbook;
};

const deletebook = async (id) => {
  const bok = await book.destroy(
    { where: { id } },
  );

  console.log(bok); // confira o que é retornado quando o book com o id é ou não encontrado;
  return bok;
};

const getByAuthor = async (author) => {
  const books = await book.findAll({ 
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

module.exports = {
  getAll,
  getById,
  createbook,
  updatebook,
  deletebook,
  getByAuthor,
};