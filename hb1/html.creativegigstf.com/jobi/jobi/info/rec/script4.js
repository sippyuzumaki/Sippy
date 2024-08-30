document.addEventListener('DOMContentLoaded', function() {
    const budgetOptions = document.querySelectorAll('input[name="budgetType"]');
    budgetOptions.forEach(option => {
        option.addEventListener('change', function() {
            console.log(`Budget type selected: ${this.value}`);
        });
    });

    // Chart.js configuration
    const ctx = document.getElementById('rateChart').getContext('2d');
    const rateChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['$5', '$15', '$25', '$35', '$45', '$55', '$65', '$75', '$85'],
            datasets: [{
                label: '# of similar jobs',
                data: [10, 24, 36, 12, 6, 5, 3, 2, 1],
                backgroundColor: '#0077b6ff',
                borderColor: '#005f8f',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("back-button");
    const nextButton = document.querySelector(".next-btn");

    backButton.addEventListener("click", function() {
        // Navigate to index 3
        window.location.href = "index3.html";
    });

    nextButton.addEventListener("click", function() {
        // Navigate to index 5
        window.location.href = "index5.html";
    });
});
