const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

// note que é importante declarar antes do endpoint GET `/chocolates/:id`
// para não haver conflito nas rotas
app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.post('/chocolates', async (req, res) => {
  // pegar o body requisição
  const { name, brandId} = req.body;
  // adicionar na lista
  const newChocolate = await cacauTrybe.createChocolate(name, brandId);
  // mandar o novo chocolate com status 201
  res.status(201).json(newChocolate);
})

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.findChocolateByName(name);
  res.status(chocolates.length === 0 ? 404 : 200)
    .json(chocolates);
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await cacauTrybe.updateChocolate(Number(id), { name, brandId });

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});

module.exports = app;