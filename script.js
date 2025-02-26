setTimeout(() => {
    // Pause all falling stars by targeting all 'span' elements
    document.querySelectorAll("span").forEach((star) => {
        star.style.animationPlayState = "paused"; // Pauses the animation
    });
}, 3000); // Pause after 3 seconds


//HIDE THE STARS once paused

window.onload = function() {
    // Wait for 5 seconds before stopping the animation
    setTimeout(function() {
        // Get all the falling star elements
        const stars = document.querySelectorAll('span');

        // Add the 'stopped' class to each star
        stars.forEach(star => {
            star.classList.add('stopped');
        });
    }, 2000); // 5000 milliseconds = 5 seconds
};


//  hide the rest of the stars 
setTimeout(function() {
    const stars = document.querySelectorAll('span');
    stars.forEach(star => {
        star.classList.add('hidden');
    });
}, 1000); // 5000 milliseconds = 5 seconds

// Wait for 5 seconds before hiding the stars
window.onload = function() {
    setTimeout(function() {
        const stars = document.querySelectorAll('span');
        stars.forEach(star => {
            // Add the 'hidden' class to all stars after 5 seconds
            star.classList.add('hidden');
        });
    }, 1000); // 5000 milliseconds = 5 seconds
};
