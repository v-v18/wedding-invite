// Ensure GSAP and ScrollTrigger are loaded
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Select all sections
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none"
                }
            }
        );
    });
});
