// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth animation for each section's content on scroll
    gsap.utils.toArray(".section").forEach((section) => {
        gsap.fromTo(
            section.querySelector(".content"),
            { opacity: 0, y: 50 }, // Initial state: hidden and slightly down
            {
                opacity: 1,
                y: 0, // Final state: fully visible and at normal position
                duration: 1.5, // Duration of the animation
                ease: "power2.out", // Easing for smooth animation
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Start the animation when section enters the viewport
                    toggleActions: "play none none none", // Play animation on scroll
                }
            }
        );
    });
});
