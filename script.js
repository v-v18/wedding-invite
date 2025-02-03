// Ensure GSAP and ScrollTrigger are loaded
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section").forEach((section) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 }, // Initial state: hidden, shifted down
            {
                opacity: 1, // End state: fully visible
                y: 0, // Move to original position
                duration: 1, // Duration of the animation
                ease: "power2.out", // Smooth easing
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Start animation when section reaches 80% of the viewport
                    toggleActions: "play none none none", // Only play the animation once
                },
            }
        );
    });
});
