const mongoose = require('mongoose');

const SubtaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  status: { type: String, required: true },
  subtasks: [SubtaskSchema],
});

const ColumnSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: [TaskSchema],
});

const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  columns: [ColumnSchema],
});

const Board = mongoose.model('Board', BoardSchema);
module.exports = Board;
