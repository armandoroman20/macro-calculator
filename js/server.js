const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

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

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint to add a new food item
app.post('/api/foods', function(req, res, next) {
    var name = req.body.newItemName;
    var servingSize = req.body.newItemServingSize;
    var calories = req.body.newItemCalories;
    var protein = req.body.newItemProtein;
    var carbs = req.body.newItemCarbs;
    var fats = req.body.newItemFats;

    // Use pool.query() to execute the SQL query
    var sql = `INSERT INTO foods (name, servingSize, calories, protein, carbs, fats) VALUES (?, ?, ?, ?, ?, ?)`;
    pool.query(sql, [name, servingSize, calories, protein, carbs, fats], function(err, result) {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Record inserted');
        res.send('Data added successfully!');
    });
});

// API endpoint to fetch food options from the database
app.get('/api/foods/options', (req, res) => {
    // Query the database to get all food options
    pool.query('SELECT itemName FROM foods', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Extract the item names from the query results
        const foodOptions = results.map(row => row.itemName);
        res.json(foodOptions);
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
