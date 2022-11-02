const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const is = require('./middlewares/validations');
const generateToken = require('./crypto/generateToken');
const auth = require('./middlewares/credentials');


const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.post('/activities',
auth,
is.nameValidation,
is.priceValidation,
is.descriptionValidation,
is.createdAtValidation,
is.ratingValidation,
is.dificultyValidation, 
(req, res) => {
  res.status(201).send({ message: "Atividade cadastrada com sucesso!" })
});

app.post('/signup', is.signupValidation, (req, res) => {
  res.status(201).send({ message: generateToken() })
});



app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;