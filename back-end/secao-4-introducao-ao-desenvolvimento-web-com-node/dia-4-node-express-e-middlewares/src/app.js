const express = require('express');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');

const app = express();

app.use(express.json());

app.post('/activities',
validateName,
validatePrice,
validateDescription,
validateCreatedAt,
validateRating,
validateDifficulty,
(_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
})

module.exports = app;