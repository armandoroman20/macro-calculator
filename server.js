const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin',
  database: 'foods',
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Handle POST requests to store form data in the database
app.post('/processFormData', (req, res) => {
  const { itemName, servingSize, calories, protein, carbs, fats } = req.body;

  const sql = `INSERT INTO food (item_name, serving_size, calories, protein, carbs, fats)
               VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [itemName, servingSize, calories, protein, carbs, fats], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    console.log('Data inserted successfully');
    res.json({ message: 'Data inserted successfully' });
  });
});

// Handle GET requests to fetch food options from the database
app.get('/getFoodOptions', (req, res) => {
  const sql = 'SELECT item_name FROM food';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching food options:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const foodOptions = result.map(row => row.item_name);
    res.json(foodOptions);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
