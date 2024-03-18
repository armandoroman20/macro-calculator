
$(document).ready(function () {

$("#saveNewItemButton").on("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values from the new item form
    const name = $("#newItemName").val();
    console.log(name);
    const servingSize = $("#newItemServingSize").val();
    console.log(servingSize);
    const calories = $("#newItemCalories").val();
    console.log(calories);
    const protein = $("#newItemProtein").val();
    console.log(protein);
    const carbs = $("#newItemCarbs").val();
    console.log(carbs);
    const fats = $("#newItemFats").val();
    console.log(fats);

    // Validate that the name field is not empty
    if (!name.trim()) {
        alert("Please enter a name for the food item.");
        return; // Exit the function early if the name field is empty
    }

    // Create a new Food object with the input values
    //const newItem = new Food(name, servingSize, calories, protein, carbs, fats);

    // Store the new Food object in the foods map
    //foods[name.toLowerCase().replace(/\s+/g, '')] = newItem; // Convert the name to lowercase and remove spaces for consistency

    // Optionally, reset the form fields after saving
    // $("#newItemForm")[0].reset();
    // Reset other fields as needed

    // $("#newItemForm").hide();
});
});
