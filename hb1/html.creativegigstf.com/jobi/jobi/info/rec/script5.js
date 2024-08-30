document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button'); // Changed from reviewButton to nextButton

    // Navigate to index4.html when the "Back" button is clicked
    backButton.addEventListener('click', () => {
        window.location.href = 'index4.html'; // Navigate to the Budget page
    });

    // Navigate to index6.html when the "Next" button is clicked
    nextButton.addEventListener('click', () => {
        window.location.href = 'index6.html'; // Navigate to the next page
    });
});
