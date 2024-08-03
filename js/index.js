$(document).ready(function () {
  // Show calculator form by default
  $("#calculatorForm").show();
  $("#newItemForm").hide();

  $("#showNewItemFormButton").on("click", function () {
    $("#calculatorForm").hide(); // Hide calculator form
    $("#newItemForm").show(); // Show new item form
  });

  $("#showCalculatorFormButton").on("click", function () {
    $("#newItemForm").hide(); // Hide new item form
    $("#calculatorForm").show(); // Show calculator form
  });

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

  // Handle form submission for new food
$('#newItemForm').on('submit', function (event) {
    event.preventDefault();

    const newFood = {
        itemName: $('#newItemName').val().trim(),
        servingSize: parseFloat($('#newItemServingSize').val()),
        calories: parseFloat($('#newItemCalories').val()),
        protein: parseFloat($('#newItemProtein').val()),
        carbs: parseFloat($('#newItemCarbs').val()),
        fats: parseFloat($('#newItemFats').val())
    };

    // Ensure itemName is not empty
    if (!newFood.itemName) {
        alert('Item name is required');
        return;
    }

    $.ajax({
        url: '/api/foods',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newFood),
        success: function (response) {
            alert(response.message);
            $('#newItemForm')[0].reset(); // Clear form inputs
            $("#newItemForm").hide(); // Hide the form after submission
            $("#calculatorForm").show(); // Show calculator form again
            $.getJSON('/api/foods', function (updatedData) {
                updateDropdown(updatedData);
            });
        },
        error: function (xhr) {
            console.error('Error:', xhr.responseText);
            alert('Failed to save new food');
        }
    });
});


  // Function to update the dropdown with food data
  function updateDropdown(allFoods) {
    const foodSelect = $("#foodSelect");
    foodSelect.empty(); // Clear existing options

    Object.keys(allFoods).forEach((key) => {
      const food = allFoods[key];
      const option = $("<option></option>")
        .attr("value", key)
        .text(food.itemName);
      foodSelect.append(option);
    });
  }

  // Fetch and populate the dropdown on page load
  $.getJSON('/api/foods', function (data) {
    updateDropdown(data);
  });

  // Handle dropdown change event to populate form fields
  $("#foodSelect").on('change', function () {
    const selectedKey = $(this).val();
    if (selectedKey) {
      $.getJSON('/api/foods', function (data) {
        const selectedFood = data[selectedKey];
        if (selectedFood) {
          // Populate form fields with the selected food data
          $('#itemName').val(selectedFood.itemName);
          $('#servingSize').val(selectedFood.servingSize);
          $('#calories').val(selectedFood.calories);
          $('#protein').val(selectedFood.protein);
          $('#carbs').val(selectedFood.carbs);
          $('#fats').val(selectedFood.fats);
        }
      });
    }
  });
});
