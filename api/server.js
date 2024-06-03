const express = require('express');
const mysql = require('mysql');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'walter',
  password: 'walter',
  database: 'ballastlane'
});

// Connect to MySQL
db.connect(err => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});

const app = express();

// Define a GET endpoint to retrieve data
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
