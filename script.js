document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Loop through each section and animate the .content inside it
    gsap.utils.toArray(".section").forEach((section) => {
        const content = section.querySelector(".content");

        if (content) {
            // If content is found, apply animation
            gsap.fromTo(
                content,
                { opacity: 0, y: 50 },  // Initial state
                {
                    opacity: 1,
                    y: 0,  // Final state
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                }
            );
        } else {
            // Log a message for sections without .content
            console.log("No .content found for section: ", section);
        }
    });
});
