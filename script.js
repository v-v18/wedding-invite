document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Targeting all .section elements
    gsap.utils.toArray(".section").forEach((section) => {
        const content = section.querySelector(".content");

        if (content) {
            // GSAP animation for each section's content
            gsap.fromTo(content,
                { opacity: 0, y: 50 },  // Start hidden and shifted down
                {
                    opacity: 1,
                    y: 0,  // Animate to visible and centered
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Trigger when top of section is at 80% of viewport
                        toggleActions: "play none none none", // Play animation only when in view
                    }
                }
            );
        }
    });
});
