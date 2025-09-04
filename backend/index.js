const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static images (covers)
app.use('/covers', express.static(path.join(__dirname, 'covers')));

// Books data (for now, in-memory, loaded from JSON)
const books = require('./books.json');

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET single book by ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b._id == req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
