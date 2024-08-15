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

// Define food objects 
const foods = {
  chicken: new Food("Chicken", 85, 128, 26, 0, 2.7),
  rice: new Food("Rice", 120, 160, 3, 35, 0),
  beef: new Food("Lean Beef 96/4", 88, 140, 24, 0, 5),
  cajunPotatoes: new Food("Cajun Potatoes", 100, 90, 2, 18, 1),
  chickenPatty: new Food("Chicken Patty", 85, 170, 12, 15, 7),
  spicyKetchup: new Food("Spicy Ketchup", 17, 20, 0, 4, 0),
  optimumNutritionChocolate: new Food("Optimum Nutrition Exteme Milk Chocolate Protein", 32, 120, 24, 3, 2),
  borrachoBeans: new Food("H-E-B Borracho Beans", 130, 90, 5, 15, 1.5),
  blackBeans: new Food("H-E-B Black Beans", 130, 100, 7, 19, 0),
  crinkleCutFries: new Food("H-E-B Crinkle Cut Fries", 84, 100, 2, 16, 3),
  gardenSaladBlend: new Food("H-E-B Garden Salad", 85, 15, 1, 3, 0),
  lighBalsamic: new Food("H-E-B Light Balsamic", 30, 15, 0, 2, .5),
  gratedParmesan: new Food("H-E-B Grated Parmesan", 5, 20, 2, 0, 1.5),
  thickSalsaMedium: new Food("H-E-B Thick Salsa Medium", 32, 20, 0, 2, 0),
  regularCutFries: new Food("H-E-B Regular Cut Fries", 84, 130, 2, 21, 4),
  carbBalanceTortilla: new Food("Mission Carb Balance Tortillas", 71, 110, 10, 32, 6),
  hcfQuesdalliaCheese: new Food("Hill Country Fare Quesadilla Cheese", 28, 90, 7, 1, 7),
  flankSteak: new Food("Flank Steak", 85, 163, 24, 0, 7)

  // Add more food objects here as needed
};