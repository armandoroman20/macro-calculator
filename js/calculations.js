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
  // <p>Amount Weighed: ${weighed}</p> 
  $(".results").html(`<p>Item Name: ${itemName} (${weighed})</p>
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