const express = require('express');

const BooksController = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/books', BooksController.getAll);

app.get('/books/:id', BooksController.getById);

// app.get('/Book/search/:id', Book.getByIdAndEmail);

app.post('/books', BooksController.createBook);

app.put('/books/:id', BooksController.updateBook);

app.delete('/books/:id', BooksController.deleteBook);

module.exports = app;