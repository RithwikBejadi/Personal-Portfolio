document.querySelectorAll('.gallery').forEach((gallery) => {
    let scrollInterval; // To store the scrolling interval

    const startScrolling = () => {
        scrollInterval = setInterval(() => {
            gallery.scrollLeft += 1; // Adjust the speed by changing the value
            if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
                gallery.scrollLeft = 0; // Reset scroll to start
            }
        }, 10); // Scroll interval (lower for faster scrolling)
    };

    const stopScrolling = () => {
        clearInterval(scrollInterval); // Stops scrolling
    };

    gallery.addEventListener('mouseenter', stopScrolling); // Pause scrolling on hover
    gallery.addEventListener('mouseleave', startScrolling); // Resume scrolling after hover
    startScrolling(); // Start scrolling initially
});
