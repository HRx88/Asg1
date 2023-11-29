// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get all radio buttons
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  // Add event listener to each radio button
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
      // Call a function to update the total price
      updateTotalPrice();
    });
  });

  // Function to update the total price
  function updateTotalPrice() {
    // Get all selected radio buttons
    const selectedRadioButtons = document.querySelectorAll(
      'input[type="radio"]:checked'
    );

    // Calculate the total price
    let totalPrice = 0;
    selectedRadioButtons.forEach(function (selectedRadioButton) {
      totalPrice += parseFloat(selectedRadioButton.value);
    });

    // Update the total price in the HTML
    document.getElementById("tP").textContent = "$" + totalPrice.toFixed(2);
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all radio buttons
  const radioButtons = document.querySelectorAll("input[type='radio']");

  // Add a click event listener to each radio button
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
      // Get the name and value of the selected radio button
      const name = radioButton.name;
      const value = radioButton.value;

      // Save the selected value to local storage
      localStorage.setItem(name, value);
    });
  });
});

// script.js

// Event listener for Order button
document
  .querySelector('button[type="button"][value="Order"]')
  .addEventListener("click", function () {
    // Navigate to the next page (replace 'next_page.html' with the actual page URL)
    window.location.href = "Order Summary.html";
  });

// Event listener for Back button
document
  .querySelector('button[type="button"][value="back"]')
  .addEventListener("click", function () {
    // Navigate to the next page (replace 'next_page.html' with the actual page URL)
    window.location.href = "Products.html";
  });
