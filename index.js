const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoose');
const boardRoutes = require('./routes/boards');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/api/boards', boardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
