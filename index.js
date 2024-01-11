  // Your function to handle calculations
  function performCalculations() {
    // Get input values
    var itemName = $("#itemName").val();
    var servingSize = $("#servingSize").val();
    var weighedServing = $("#weighed").val();
    var calories = $("#calories").val();
    var protein = $("#protein").val();
    var carbs = $("#carbs").val();
    var fats = $("#fats").val();

    // Perform your calculations here
    // Example: Calculate total calories based on serving size
    var calculatedServing = (weighedServing / servingSize);
    var totalCalories = Math.floor(calculatedServing * calories);
    var totalProtein = Math.floor(calculatedServing * protein);
    var totalCarbs = Math.floor(calculatedServing * carbs);
    var totalFat = Math.floor(calculatedServing * fats);



    // Display the results in the "results" div
    // $(".results").html("<p>Item Name: " + itemName + "</p>");
    // $(".results").append("<p>Calories per serving: " + calories + "</p>");
    // $(".results").append("<p>Protein per serving: " + protein + "</p>");
    // $(".results").append("<p>Carbs per serving: " + carbs + "</p>");
    // $(".results").append("<p>Fats per serving: " + fats + "</p>");
    // $(".results").append("<p>Amount Weighed: " + weighedServing + "</p>");



    $(".results").append("<p>Total Calories: " + totalCalories + "</p>");
    $(".results").append("<p>Total Protein: " + totalProtein + "</p>");
    $(".results").append("<p>Total Carbs: " + totalCarbs + "</p>"); 
    $(".results").append("<p>Total Fats: " + totalFat + "</p>");
    // Add more lines to display other calculated results
  }

  // Event handler for form submission
  $(document).ready(function () {
    $("#submitButton").on("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Call the function when the form is submitted
      performCalculations();
    });
  });
