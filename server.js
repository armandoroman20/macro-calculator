const express = require('express');
const fs = require('fs');
const path = require('path'); // Ensure you import the path module
const app = express();
const port = process.env.PORT || 3000; // Define the port

const filePath = path.join(__dirname, 'foods.json'); // Use path to create the file path

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Define the Food class
class Food {
  constructor(itemName, servingSize, calories, protein, carbs, fats) {
    this.itemName = itemName;
    this.servingSize = servingSize;
    this.calories = calories;
    this.protein = protein;
    this.carbs = carbs;
    this.fats = fats;
  }
}

// Read foods data from JSON file
function readFoods() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Write foods data to JSON file
function writeFoods(foods) {
  fs.writeFileSync(filePath, JSON.stringify(foods, null, 2));
}

// Get foods
app.get('/api/foods', (req, res) => {
  res.json(readFoods());
});

// Load existing foods or initialize as empty object
let foods = {};
if (fs.existsSync(filePath)) {
  foods = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
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

  const newFood = new Food(itemName, servingSize, calories, protein, carbs, fats);

  // Use the item name as the key
  foods[itemName] = newFood;

  writeFoods(foods);
  res.json({ message: 'Food item added successfully' });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
