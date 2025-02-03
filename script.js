// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Select all sections
    gsap.utils.toArray(".section").forEach((section) => {
        // Create GSAP animation for each section
        gsap.fromTo(
            section,
            {
                opacity: 0, // Start with opacity 0
                y: 50 // Start from below the screen
            },
            {
                opacity: 1, // Fade in to full opacity
                y: 0, // Move to the natural position
                duration: 1, // Duration of the animation
                ease: "power2.out", // Smooth easing
                scrollTrigger: {
                    trigger: section, // Trigger the animation on this section
                    start: "top 80%", // Start animation when section is 80% from top of viewport
                    toggleActions: "play none none none", // Trigger only once when it comes into view
                }
            }
        );
    });
});
