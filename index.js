  function performCalculations() {
    var itemName = $("#itemName").val();
    var servingSize = $("#servingSize").val();
    var weighedServing = $("#weighed").val();
    var calories = $("#calories").val();
    var protein = $("#protein").val();
    var carbs = $("#carbs").val();
    var fats = $("#fats").val();

    var calculatedServing = (weighedServing / servingSize);
    var totalCalories = Math.floor(calculatedServing * calories);
    var totalProtein = Math.floor(calculatedServing * protein);
    var totalCarbs = Math.floor(calculatedServing * carbs);
    var totalFat = Math.floor(calculatedServing * fats);



    // Display the results in the "results" div
    $(".results").html("<p>Item Name: " + itemName + "</p>");
    $(".results").append("<p>Amount Weighed: " + weighedServing + "</p>");
    // $(".results").append("<p>Item Name: " + itemName + "</p>");
    $(".results").append("<p>Total Calories: " + totalCalories + "</p>");
    $(".results").append("<p>Total Protein: " + totalProtein + "</p>");
    $(".results").append("<p>Total Carbs: " + totalCarbs + "</p>"); 
    $(".results").append("<p>Total Fats: " + totalFat + "</p>");

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

  