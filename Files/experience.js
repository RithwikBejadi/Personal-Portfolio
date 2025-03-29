document.addEventListener("DOMContentLoaded", function () {
    const slideTrack = document.querySelector(".slide-track");

    slideTrack.addEventListener("mouseenter", () => {
        slideTrack.style.animationPlayState = "paused";
    });

    slideTrack.addEventListener("mouseleave", () => {
        slideTrack.style.animationPlayState = "running";
    });
});
