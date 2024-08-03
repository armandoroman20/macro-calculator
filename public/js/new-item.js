// // Add event listener for the new item form submission
// document.getElementById('newItemForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get form values
//   const itemName = document.getElementById('newItemName').value;
//   const servingSize = parseFloat(document.getElementById('newItemServingSize').value);
//   const calories = parseFloat(document.getElementById('newItemCalories').value);
//   const protein = parseFloat(document.getElementById('newItemProtein').value);
//   const carbs = parseFloat(document.getElementById('newItemCarbs').value);
//   const fats = parseFloat(document.getElementById('newItemFats').value);

//   // Create the food object
//   const newFood = {
//     itemName,
//     servingSize,
//     calories,
//     protein,
//     carbs,
//     fats
//   };

//   // Send the data to the server
//   fetch('/api/foods', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newFood)
//   })
//   .then(response => {
//     if (!response.ok) throw new Error('Network response was not ok');
//     return response.text();
//   })
//   .then(() => {
//     // Update the dropdown after successfully adding the new food
//     populateFoodDropdown();
//     document.getElementById('newItemForm').reset(); // Clear the form
//   })
//   .catch(error => console.error('There was a problem with the fetch operation:', error));
// });

// // Function to populate the dropdown
// function populateFoodDropdown() {
//   fetch('/api/foods')
//     .then(response => response.json())
//     .then(foods => {
//       const foodSelect = document.getElementById('foodSelect');
//       foodSelect.innerHTML = '';
//       for (const key in foods) {
//         if (foods.hasOwnProperty(key)) {
//           const food = foods[key];
//           const option = document.createElement('option');
//           option.value = key;
//           option.textContent = food.itemName;
//           foodSelect.appendChild(option);
//         }
//       }
//     })
//     .catch(error => console.error('Error fetching foods:', error));
// }

// // Populate the dropdown on page load
// populateFoodDropdown();
