import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./Full.css";

const events = [
  { id: 1, title: "Ceremony Begins", time: "1:00 PM - 2:00 PM", details: "A beautiful ceremony marking the start of our journey.", location: "Potsdam, Schloß Sanssouci", imgSrc: require("../assets/ceremony.jpg") },
  { id: 2, title: "Welcome Reception", time: "4:00 PM - 5:00 PM", details: "Enjoy drinks and light appetizers before dinner.", location: "Berlin, Hotel Albrechtshof Berlin", imgSrc: require("../assets/cocktail.jpg") },
  { id: 3, title: "Dinner & Toasts", time: "5:00 PM - 7:00 PM", details: "A delicious meal followed by heartfelt speeches.", location: "Hotel Albrechtshof Berlin", imgSrc: require("../assets/dinner.jpg") },
  { id: 4, title: "Cake Cutting & Toast", time: "7:00 PM", details: "Let’s hit the dance floor and celebrate!", location: "Hotel Albrechtshof Berlin", imgSrc: require("../assets/dance.jpg") },
  { id: 5, title: "Dancing & Music", time: "7:30 PM - 10:00 PM", details: "A sweet ending with our wedding cake and toast.", location: "Hotel Albrechtshof Berlin", imgSrc: require("../assets/cake.jpg") },
];

const Full = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  // Function to check if Full section is active
  const isFullSectionActive = () => {
    return document.querySelector(".section-1")?.classList.contains("active");
  };

  // // 🔹 Trigger GSAP Animations When Full Section Becomes Active
  // useEffect(() => {
  //   if (isFullSectionActive()) {
  //     gsap.fromTo(
  //       ".event-card",
  //       { opacity: 0, y: 50 },
  //       { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
  //     );
  //   }
  // }, [isFullSectionActive()]);

  // Handle click to expand/collapse image
  const handleImageClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  // 🔹 Fix Hover Animation for Images
  useEffect(() => {
    const images = document.querySelectorAll(".event-card img");

    const handleMouseEnter = (event) => {
      gsap.to(event.target, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (event) => {
      gsap.to(event.target, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    images.forEach((img) => {
      img.addEventListener("mouseenter", handleMouseEnter);
      img.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("mouseenter", handleMouseEnter);
        img.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="full-container">
      <div className="full-content">
        <h3 className="program-title">Program</h3>

        <div className="events-container">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`event-card ${selectedId === event.id ? "expanded" : ""}`}
              onClick={() => handleImageClick(event.id)}
            >
              <img src={event.imgSrc} alt={event.title} className="event-image" />
              <p className="event-time">{event.time}</p>
              <p className="event-title">{event.title}</p>
              {selectedId === event.id && (
                <div className="event-details-container">
                  <p className="event-location">Location: {event.location}</p>
                  <p className="event-details">{event.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Full;
