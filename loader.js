window.addEventListener("load", () => {
    const loadingPage = document.getElementById("loading-page");

    // Ensure the loading page stays for at least 2 seconds
    setTimeout(() => {
        loadingPage.style.opacity = "0"; // Smooth fade-out
        setTimeout(() => {
            loadingPage.style.display = "none"; // Remove from DOM completely
        }, 500); // Match fade-out duration for smooth transition
    }, 1000); // Minimum 2-second delay before hiding the loader
});

