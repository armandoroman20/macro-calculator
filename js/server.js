const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a MySQL database connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Hoopha210',
    database: 'macro_calculator'
});

// API endpoint to add a new food item
app.post('/api/foods', (req, res) => {
    const { name, servingSize, calories, protein, carbs, fats } = req.body;
    pool.query(`INSERT INTO foods (name, servingSize, calories, protein, carbs, fats) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, servingSize, calories, protein, carbs, fats],
        (err, results) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Error adding food item');
                console.log("error sending food item");
            } else {
                res.status(201).send('Food item added successfully');
                console.log("food item sent");
            }
        });
});

// API endpoint to fetch all food items
app.get('/api/foods', (req, res) => {
    pool.query(`SELECT * FROM foods`, (err, results) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error fetching food items');
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
