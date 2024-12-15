// Add an event listener to the Save button
document.getElementById('saveButton').addEventListener('click', async function () {
    // Gather form data
    const form = document.getElementById('profileForm'); // Form element
    const formData = new FormData(form); // Collect form data

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
            body: JSON.stringify(farmerDetails), // Send JSON to the server
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

// Add an event listener to the Cancel button
document.querySelector('.btn-cancel').addEventListener('click', function () {
    // Clear the form fields
    document.getElementById('profileForm').reset();
});
