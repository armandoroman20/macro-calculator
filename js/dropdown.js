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