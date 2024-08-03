$(document).ready(function () {
  $("#submitButton").on("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the function when the button is clicked
    performCalculations();
  });

  // Ensure form submission doesn't cause a page refresh
  $("#calculatorForm").on("submit", function (event) {
    event.preventDefault();
  });
});

function performCalculations() {
  var itemName = $("#itemName").val();
  var servingSize = $("#servingSize").val();
  var weighed = $("#weighed").val();
  var calories = $("#calories").val();
  var protein = $("#protein").val();
  var carbs = $("#carbs").val();
  var fats = $("#fats").val();

  console.log(itemName, servingSize, weighed, calories, protein, carbs, fats);

  var calculatedServing = weighed / servingSize;
  var totalCalories = Math.floor(calculatedServing * calories);
  var totalProtein = Math.floor(calculatedServing * protein);
  var totalCarbs = Math.floor(calculatedServing * carbs);
  var totalFat = Math.floor(calculatedServing * fats);

  $(".results").html(`<p>Item Name: ${itemName} (${weighed})</p>
                      <p>Total Calories: ${totalCalories}</p>
                      <p>Total Protein: ${totalProtein}</p>
                      <p>Total Carbs: ${totalCarbs}</p>
                      <p>Total Fats: ${totalFat}</p>`);

  var foodItem = new Food(itemName, servingSize, calories, protein, carbs, fats);
  console.log(foodItem);
}
