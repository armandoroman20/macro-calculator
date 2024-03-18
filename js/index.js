$(document).ready(function () {
  // Event handler for toggling between forms
  $("#showNewItemFormButton").on("click", function () {
    // Toggle visibility of forms
    $("#calculatorForm").addClass("hide").removeClass("show")
    $("#newItemForm").addClass("show").removeClass("hide");
    console.log("add new item form button clicked");

  });

    $("#showCalculatorFormButton").on("click", function () {
    // Toggle visibility of forms
    $("#calculatorForm").addClass("show").removeClass("hide")
    $("#newItemForm").addClass("hide").removeClass("show");
    console.log("calc form button clicked");
  });
});



