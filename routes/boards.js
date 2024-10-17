const express = require('express');
const router = express.Router();
const Board = require('../models/Board');

// Get all boards
router.get('/', async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new board
router.post('/', async (req, res) => {
  const { name, columns } = req.body;
  try {
    const newBoard = new Board({
      name,
      columns,
    });
    await newBoard.save();
    res.json(newBoard);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update a board
router.put('/:id', async (req, res) => {
  const { name, columns } = req.body;
  try {
    let board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ msg: 'Board not found' });
    }

    board.name = name;
    board.columns = columns;

    await board.save();
    res.json(board);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a board
router.delete('/:id', async (req, res) => {
  try {
    await Board.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Board removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
