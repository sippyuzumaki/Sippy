document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    
    // Add event listener to the "Next: Skills" button
    nextButton.addEventListener('click', () => {
        window.location.href = 'index2.html'; // Navigate directly to index2.html without alert
    });
});

