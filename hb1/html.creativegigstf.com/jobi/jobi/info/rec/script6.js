document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    const saveDraftButton = document.getElementById('save-draft-button');
    const postJobButton = document.getElementById('post-job-button');

    // Navigate to index5.html when the "Back" button is clicked
    backButton.addEventListener('click', () => {
        window.location.href = 'index5.html'; // Navigate to the description page
    });

    // Logic for "Save as a Draft" button
    saveDraftButton.addEventListener('click', () => {
        alert('Job saved as a draft!'); // Placeholder action for saving as draft
        // Logic to save job as a draft can be added here
    });

    // Logic for "Post this Job" button
    postJobButton.addEventListener('click', () => {
        alert('Job posted successfully!'); // Placeholder action for posting the job

        window.location.href = '../../dashboard/employer-dashboard-jobs.html';
    });
    

    // Additional functionality for editing sections can be added as needed
});
