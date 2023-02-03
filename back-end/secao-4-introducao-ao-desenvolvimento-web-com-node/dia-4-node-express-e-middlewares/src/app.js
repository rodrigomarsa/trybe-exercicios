const express = require('express');
const auth = require('./middlewares/auth');
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
auth,
(_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
})

app.post('/signup', (_req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;