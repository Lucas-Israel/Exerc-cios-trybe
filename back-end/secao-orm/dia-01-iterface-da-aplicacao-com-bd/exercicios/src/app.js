// src/app.js

const express = require('express');

const book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/books', book.getAll);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/books/:id', book.getById);

// // Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// // URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
// app.get('/user/search/:id', User.getByIdAndEmail);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/books', book.createBook);

// // Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/books/:id', book.updateBook);

// // Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/books/:id', book.deleteBook);

module.exports = app;