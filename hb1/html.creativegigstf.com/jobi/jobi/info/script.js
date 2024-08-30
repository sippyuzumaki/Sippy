document.getElementById('profile-pic').addEventListener('change', function(event) {
    const dummyPic = document.getElementById('dummy-pic');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            dummyPic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
