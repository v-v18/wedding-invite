document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Loop through each section and animate the .content inside it
    gsap.utils.toArray(".section").forEach((section) => {
        const content = section.querySelector(".content");
        
        // Check if the content is found
        if (content) {
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
            console.error("Content not found for section: ", section);
        }
    });
});
