let totalLabel = document.getElementById("tp");

// Add an event listener to the "Order" button
document
  .querySelector("button[type='button']")
  .addEventListener("click", function () {
    // Get the selected values for CPU, GPU, etc.
    let cpuPrice = parseFloat(
      document.querySelector('input[name="CPU"]:checked').value
    );
    let gpuPrice = parseFloat(
      document.querySelector('input[name="GPU"]:checked').value
    );

    let RamPrice = parseFloat(
      document.querySelector('input[name="Ram"]:checked').value
    );
    let StoragePrice = parseFloat(
      document.querySelector('input[name="SSD"]:checked').value
    );
    let MBPrice = parseFloat(
      document.querySelector('input[name="MB"]:checked').value
    );
    let PsuPrice = parseFloat(
      document.querySelector('input[name="Psu"]:checked').value
    );
    let coolingPrice = parseFloat(
      document.querySelector('input[name="cooling"]:checked').value
    );

    // Calculate total price
    let totalPrice =
      cpuPrice +
      gpuPrice +
      RamPrice +
      StoragePrice +
      PsuPrice +
      coolingPrice +
      MBPrice;
    // Update the total label
    totalLabel.textContent = "$" + totalPrice.toFixed(2);
  });
