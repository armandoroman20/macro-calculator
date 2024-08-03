const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const foodsFilePath = path.join(__dirname, 'foods.json');

// Serve static files from the root directory
app.use(express.static(__dirname));

// Middleware to parse JSON requests
app.use(express.json());

// Read foods data from JSON file
function readFoods() {
  const data = fs.readFileSync(foodsFilePath);
  return JSON.parse(data);
}

// Write foods data to JSON file
function writeFoods(foods) {
  fs.writeFileSync(foodsFilePath, JSON.stringify(foods, null, 2));
}

// Get foods
app.get('/api/foods', (req, res) => {
  res.json(readFoods());
});

// Load existing foods or initialize as empty object
let foods = {};
if (fs.existsSync(foodsFilePath)) {
  foods = JSON.parse(fs.readFileSync(foodsFilePath, 'utf-8'));
}

// Add new food
app.post('/api/foods', (req, res) => {
  const { itemName, servingSize, calories, protein, carbs, fats } = req.body;
  
  if (!itemName) {
    return res.status(400).json({ message: 'Item name is required' });
  }
  
  if (isNaN(servingSize) || isNaN(calories) || isNaN(protein) || isNaN(carbs) || isNaN(fats)) {
    return res.status(400).json({ message: 'Serving size, calories, protein, carbs, and fats must be numbers' });
  }

  const newFood = { itemName, servingSize, calories, protein, carbs, fats };

  // Use the item name as the key
  foods[itemName] = newFood;

  writeFoods(foods);
  res.json({ message: 'Food item added successfully' });
});

// Serve index.html for any request that does not match the API routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
