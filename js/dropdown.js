document.addEventListener('DOMContentLoaded', function () {
  // Function to populate food options in the select dropdown
  function populateFoodOptions() {
    const selectElement = document.getElementById('foodSelect');

    // Clear existing options
    selectElement.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select or Enter Food';
    selectElement.appendChild(defaultOption);

    // Add options for each food item
    for (const foodKey in foods) {
      if (foods.hasOwnProperty(foodKey)) {
        const food = foods[foodKey];
        const option = document.createElement('option');
        option.value = foodKey;
        option.textContent = food.itemName;
        selectElement.appendChild(option);
      }
    }
  }

  // Function to populate form fields based on selected food
  function populateFields(foodName) {
    const food = foods[foodName];
    if (food) {
      document.getElementById('itemName').value = food.itemName;
      document.getElementById('servingSize').value = food.servingSize;
      document.getElementById('calories').value = food.calories;
      document.getElementById('protein').value = food.protein;
      document.getElementById('carbs').value = food.carbs;
      document.getElementById('fats').value = food.fats;
    }
  }

  // Call the function to populate food options initially
  populateFoodOptions();

  // Event listener for food select dropdown
  document.getElementById('foodSelect').addEventListener('change', function () {
    const selectedFood = this.value;
    populateFields(selectedFood);
  });
});



  

/// Function to populate the dropdown menu with food options fetched from the database, this only works to put the name in the drop down and not the other data
// $(document).ready(function () {
//     // Populate the dropdown menu with items from the database
//     $.get('http://localhost:3000/api/foods', function(data) {
//         console.log('Received data from the server:', data);
//         // Clear existing options
//         $('#foodSelect').empty();
//         // Add default option
//         $('#foodSelect').append($('<option></option>').attr('value', '').text('Select Food'));
//         // Add options for each item retrieved from the server
//         data.forEach(function(name) {
//             console.log('Adding option:', name);
//             $('#foodSelect').append($('<option></option>').attr('value', name).text(name));
//         });
//     }).fail(function() {
//         console.error('Failed to fetch items from the database');
//     });
// });



