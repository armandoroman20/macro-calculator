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

// creating new Food objects to be used in the dropdown for easier use
const chicken = new Food("Chicken", 85, 128, 26, 0, 2.7); 
const rice = new Food("Rice", 120, 160, 3, 35, 0);

// Function to populate form fields based on selected food
function populateFields(food) {
  $("#itemName").val(food.itemName);
  $("#servingSize").val(food.servingSize);
  $("#calories").val(food.calories);
  $("#protein").val(food.protein);
  $("#carbs").val(food.carbs);
  $("#fats").val(food.fats);
}

$(document).ready(function () {
  // Populate the form fields with chicken data when it's selected
  $("#foodSelect").on("change", function () {
    const selectedFood = $(this).val();
    if (selectedFood === "chicken") {
      populateFields(chicken);
    }
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
