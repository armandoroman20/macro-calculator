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

function performCalculations() {
  var itemName = $("#itemName").val();
  var servingSize = $("#servingSize").val();
  var weighedServing = $("#weighedServing").val();
  var calories = $("#calories").val();
  var protein = $("#protein").val();
  var carbs = $("#carbs").val();
  var fats = $("#fats").val();

  var calculatedServing = weighedServing / servingSize;
  var totalCalories = Math.floor(calculatedServing * calories);
  var totalProtein = Math.floor(calculatedServing * protein);
  var totalCarbs = Math.floor(calculatedServing * carbs);
  var totalFat = Math.floor(calculatedServing * fats);

  // Display the results in the "results" div
  $(".results").html(`<p>Item Name: ${itemName}</p>
                      <p>Amount Weighed: ${weighedServing}</p>
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

document.getElementById('newItemSubmitButton').addEventListener('click', function () {
  // Retrieve form input values
  var itemName = document.getElementById('newItemName').value;
  var servingSize = document.getElementById('newItemServingSize').value;
  var calories = document.getElementById('newItemCalories').value;
  var protein = document.getElementById('newItemProtein').value;
  var carbs = document.getElementById('newItemCarbs').value;
  var fats = document.getElementById('newItemFats').value;

  // Create a JavaScript object with the form data
  var foodData = {
    itemName: itemName,
    servingSize: servingSize,
    calories: calories,
    protein: protein,
    carbs: carbs,
    fats: fats
  };

  // Send the data to the server for processing
  fetch('/processFormData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(foodData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Fetch and populate dropdown options
  fetch('/getFoodOptions')
    .then(response => response.json())
    .then(data => {
      const foodDropdown = document.getElementById('foodDropdown');

      // Populate dropdown options
      data.forEach(food => {
        const option = document.createElement('option');
        option.value = food.itemName;
        option.textContent = food.itemName;
        foodDropdown.appendChild(option);
      });

      // Attach event listener to handle selection
      foodDropdown.addEventListener('change', function () {
        const selectedFood = foodDropdown.value;
        displayFoodDetails(selectedFood);
      });
    })
    .catch(error => {
      console.error('Error fetching food options:', error);
    });

  // Function to display food details
  function displayFoodDetails(selectedFood) {
    const selectedFoodDetails = document.getElementById('selectedFoodDetails');
    selectedFoodDetails.innerHTML = '';  // Clear previous details

    // Fetch and display details for the selected food
    fetch(`/getFoodDetails?itemName=${encodeURIComponent(selectedFood)}`)
      .then(response => response.json())
      .then(details => {
        const detailsList = document.createElement('ul');

        // Create list items for each detail
        Object.keys(details).forEach(key => {
          const listItem = document.createElement('li');
          listItem.textContent = `${key}: ${details[key]}`;
          detailsList.appendChild(listItem);
        });

        selectedFoodDetails.appendChild(detailsList);
      })
      .catch(error => {
        console.error('Error fetching food details:', error);
      });
  }
});
