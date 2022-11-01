const express = require('express');
const cacau = require('./chocolates');

const app = express();

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const a = await cacau.chocoNameCheck(name);
  res.status(a.length === 0 ? 404 : 200).json(a);
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacau.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const b = req.body;
  const updatedChocolate = await cacau.updateChocolate(Number(id), b);

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});

module.exports = app;