// Function to populate the form with saved data from localStorage
function populateForm() {
    const savedDetails = JSON.parse(localStorage.getItem('farmerDetails'));
  
    if (savedDetails) {
      // Populate form fields with saved data
      document.getElementById('first-name').value = savedDetails['first-name'] || '';
      document.getElementById('last-name').value = savedDetails['last-name'] || '';
      document.getElementById('email').value = savedDetails['email'] || '';
      document.getElementById('phone').value = savedDetails['phone'] || '';
      document.getElementById('address').value = savedDetails['address'] || '';
    }
  }
  
  // Add an event listener to the Save button
  document.getElementById('saveButton').addEventListener('click', function () {
    // Get the form element
    const form = document.getElementById('profileForm');
  
    // Create an object to hold the form data
    const farmerDetails = {};
  
    // Get form data and save it into the farmerDetails object
    new FormData(form).forEach((value, key) => {
      farmerDetails[key] = value;
    });
  
    // Save the data to localStorage
    localStorage.setItem('farmerDetails', JSON.stringify(farmerDetails));
  
    // Show a confirmation message
    alert('Farmer details saved locally!');
  
    // Redirect to the main page (can be updated to your desired redirect)
    window.location.href = 'http://127.0.0.1:5501/index.html';
  });
  
  // Optional: Handle the cancel button to reset the form
  document.querySelector('.btn-cancel').addEventListener('click', function () {
    // Clear the form fields
    document.getElementById('profileForm').reset();
  });
  
  // Call the populateForm function when the page is loaded to auto-fill the form with saved data
  document.addEventListener('DOMContentLoaded', populateForm);
  
