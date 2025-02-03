document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section").forEach((section) => {
        const content = section.querySelector(".content");
        console.log(content);  // Check if the content is found

        if (content) {
            gsap.fromTo(
                content,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }
    });
});
