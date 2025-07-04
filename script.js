// Add event listener to the window object to handle the load event
window.addEventListener('load', function() {
    // Get all elements with the class 'manga-story'
    const mangaStories = document.querySelectorAll('.manga-story');

    // Add the 'fade-in' class to each manga story element
    mangaStories.forEach(function(mangaStory) {
        mangaStory.classList.add('fade-in');
    });

    // Get the hero overlay element
    const heroOverlay = document.querySelector('.hero-overlay');

    // Add the 'smooth-transition' class to the hero overlay element
    heroOverlay.classList.add('smooth-transition');

    // Add event listener to the window object to handle the scroll event
    window.addEventListener('scroll', function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Get the hero overlay element
        const heroOverlay = document.querySelector('.hero-overlay');

        // Check if the scroll position is greater than