document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener to the Save button
    const saveButton = document.querySelector('.btn-save'); // Use the correct class
    const form = document.getElementById('profileForm'); // Reference the form element (add this ID in HTML)

    if (saveButton) {
        saveButton.addEventListener('click', async function () {
            // Gather form data
            const formData = new FormData(form);

            // Convert form data to a JSON object
            const farmerDetails = {};
            formData.forEach((value, key) => {
                farmerDetails[key] = value;
            });

            try {
                // Simulate sending data to the server
                const response = await fetch('http://127.0.0.1:5501/saveFarmer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(farmerDetails),
                });

                if (response.ok) {
                    alert('Farmer details saved successfully!');
                    // Redirect to the main page
                    window.location.href = 'http://127.0.0.1:5501/index.html';
                } else {
                    console.error('Failed to save farmer details:', await response.text());
                    alert('Error: Unable to save farmer details. Please try again.');
                }
            } catch (error) {
                console.error('Error occurred while saving details:', error);
                alert('An error occurred. Please check your connection and try again.');
            }
        });
    } else {
        console.error('Save button not found!');
    }

    // Add an event listener to the Cancel button
    const cancelButton = document.querySelector('.btn-cancel');
    if (cancelButton) {
        cancelButton.addEventListener('click', function () {
            if (form) {
                form.reset(); // Clear form fields
            } else {
                console.error('Form not found for reset!');
            }
        });
    } else {
        console.error('Cancel button not found!');
    }
});
