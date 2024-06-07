const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Using mysql2 for promises

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createPool({
    host: "localhost",
    user: "test-user",
    password: "@test1.",
    database: "test",
    connectTimeout: 60000
});

// Routes
app.get('/languages', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages');
    const data = rows;
    res.json({data});
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add other routes for POST, PUT, DELETE as needed

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});