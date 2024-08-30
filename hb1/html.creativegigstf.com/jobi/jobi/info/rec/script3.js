document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');

    // Navigate to index2.html when the "Back" button is clicked
    backButton.addEventListener('click', () => {
        window.location.href = 'index2.html'; // Navigate to the previous page
    });

    // Navigate to index4.html when the "Next: Budget" button is clicked
    nextButton.addEventListener('click', () => {
        window.location.href = 'index4.html'; // Navigate to the next page
    });

    // Additional functionality can be added as needed
});
