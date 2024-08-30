document.addEventListener('DOMContentLoaded', function() {
    const skillsInput = document.getElementById('skills-search');
    const suggestedSkills = document.getElementById('suggested-skills');
    const selectedSkills = document.getElementById('selected-skills');

    // Add a skill from the suggestions
    suggestedSkills.addEventListener('click', function(event) {
        if (event.target.classList.contains('skill-tag')) {
            addSkill(event.target.textContent.trim());
        }
    });

    // Remove a selected skill
    selectedSkills.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-skill')) {
            event.target.parentElement.remove();
        }
    });

    // Listen for Enter key to add a new skill from the input
    skillsInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && skillsInput.value.trim() !== '') {
            addSkill(skillsInput.value.trim());
            skillsInput.value = ''; // Clear input field
            event.preventDefault(); // Prevent form submission
        }
    });

    // Function to add a skill
    function addSkill(skill) {
        // Check if skill already exists
        if (![...selectedSkills.children].some(child => child.textContent.trim().startsWith(skill))) {
            const skillSpan = document.createElement('span');
            skillSpan.classList.add('skill-tag');
            skillSpan.innerHTML = `${skill} <span class="remove-skill" aria-label="Remove skill">&times;</span>`;
            selectedSkills.appendChild(skillSpan);
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');

    // Navigate to index1.html when the "Back" button is clicked
    backButton.addEventListener('click', () => {
        window.location.href = 'index1.html';
    });

    // Navigate to index3.html when the "Next: Scope" button is clicked
    nextButton.addEventListener('click', () => {
        window.location.href = 'index3.html';
    });
});
