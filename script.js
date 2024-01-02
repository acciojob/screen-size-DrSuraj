//your JS code here. If required.
// script.js

function updateWindowSize() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Display or use the width and height as needed
    console.log(`Window Width: ${width}px, Window Height: ${height}px`);
}

// Initial call to set initial window size
updateWindowSize();

// Event listener for window resize
window.addEventListener('resize', updateWindowSize);
