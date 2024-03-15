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

// Define food objects in a map
const foods = {
  chicken: new Food("Chicken", 85, 128, 26, 0, 2.7),
  rice: new Food("Rice", 120, 160, 3, 35, 0),
  beef: new Food("Lean Beef 96/4", 88, 140, 24, 0, 5),
  cajunPotatoes: new Food("Cajun Potatoes", 100, 90, 2, 18, 1),
  chickenPatty: new Food("Chicken Patty", 85, 170, 12, 15, 7),
  spicyKetchup: new Food("Spicy Ketchup", 17, 20, 0, 4, 0),

  // Add more food objects here as needed
};

// Function to populate the dropdown menu with food options
function populateDropdown() {
  const foodSelect = $("#foodSelect");
  foodSelect.empty(); // Clear existing options
  
  // Add default option
  foodSelect.append($("<option></option>").attr("value", "").text("Select Food"));
  
  // Add options for each food object
  Object.keys(foods).forEach(key => {
    foodSelect.append($("<option></option>").attr("value", key).text(foods[key].itemName));
  });
}

// Function to populate form fields based on selected food
function populateFields(selectedFood) {
  const food = foods[selectedFood];
  if (food) {
    $("#itemName").val(food.itemName);
    $("#servingSize").val(food.servingSize);
    $("#calories").val(food.calories);
    $("#protein").val(food.protein);
    $("#carbs").val(food.carbs);
    $("#fats").val(food.fats);
  } else {
    // Clear fields if no food selected
    $("#itemName, #servingSize, #calories, #protein, #carbs, #fats").val('');
  }
}

$(document).ready(function () {
  // Populate the dropdown menu with food options
  populateDropdown();
  
  // Populate the form fields with the selected food data when it's changed
  $("#foodSelect").on("change", function () {
    const selectedFood = $(this).val();
    populateFields(selectedFood);
  });
});




function performCalculations() {
  var itemName = $("#itemName").val();
  var servingSize = $("#servingSize").val();
  var weighed = $("#weighed").val(); // Corrected ID here
  var calories = $("#calories").val();
  var protein = $("#protein").val();
  var carbs = $("#carbs").val();
  var fats = $("#fats").val();

  var calculatedServing = weighed / servingSize; // Changed variable name to weighed
  var totalCalories = Math.floor(calculatedServing * calories);
  var totalProtein = Math.floor(calculatedServing * protein);
  var totalCarbs = Math.floor(calculatedServing * carbs);
  var totalFat = Math.floor(calculatedServing * fats);

  // Display the results in the "results" div
  $(".results").html(`<p>Item Name: ${itemName}</p>
                      <p>Amount Weighed: ${weighed}</p> <!-- Changed variable name to weighed -->
                      <p>Total Calories: ${totalCalories}</p>
                      <p>Total Protein: ${totalProtein}</p>
                      <p>Total Carbs: ${totalCarbs}</p>
                      <p>Total Fats: ${totalFat}</p>`);

  var foodItem = new Food(itemName, servingSize, calories, protein, carbs, fats);
  console.log(foodItem);
}

$(document).ready(function () {
  $("#submitButton").on("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the function when the form is submitted
    performCalculations();
  });
});


$(document).ready(function () {
  // Event handler for toggling between forms
  $("#showNewItemFormButton, #showCalculatorFormButton").on("click", function () {
    // Toggle visibility of forms
    $("#currentForm, #newItemForm").toggle();
  });
});


    // Event handler for saving the new item
  $("#saveNewItemButton").on("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values from the new item form
    const newItemName = $("#newItemName").val();
    const newItemServingSize = $("#newItemServingSize").val();
    const newItemCalories = $("#newItemCalories").val();
    const newItemProtein = $("#newItemProtein").val();
    const newItemCarbs = $("#newItemCarbs").val();
    const newItemFats = $("#newItemFats").val();


    // Create a new Food object with the input values
  const newItem = new Food(newItemName, newItemServingSize, newItemCalories, newItemProtein, newItemCarbs, newItemFats);
  // Store the new Food object in the foods map
  foods[newItemName.toLowerCase().replace(/\s+/g, '')] = newItem; // Convert the name to lowercase and remove spaces for consistency

    // Optionally, reset the form fields after saving
    $("#newItemForm")[0].reset();
    // Reset other fields as needed

      $("#newItemForm").hide();

  });
