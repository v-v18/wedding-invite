import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./Full.css";

const events = [
  { id: 1, title: "Ceremony Begins", time: "1:00 PM - 2:00 PM", details: "A beautiful ceremony marking the start of our journey.", location: "Potsdam, Schloss Sanssouci", imgSrc: require("../assets/ceremony.jpg") },
  { id: 2, title: "Photo Session", time: "2:00 PM - 2:30 PM", details: "Capture beautiful moments with the newlyweds.", location: "Potsdam, Schloss Sanssouci", imgSrc: require("../assets/photo-session.jpg") },
  { id: 3, title: "Relocation", time: "2:30 PM - 4:30 PM", details: "Guests relocate to the reception venue. Please check your invitation for transport details.", location: "From Potsdam to Berlin", imgSrc: require("../assets/relocation.jpg") }, 
  { id: 4, title: "Welcome Reception", time: "4:30 PM - 5:00 PM", details: "Enjoy drinks and light appetizers before dinner.", location: "Berlin, martas Restaurant Alvis", imgSrc: require("../assets/cocktail.jpg") },
  { id: 5, title: "Dinner & Toasts", time: "5:00 PM - 6:30 PM", details: "A delicious meal followed by heartfelt speeches.", location: "Berlin, martas Restaurant Alvis", imgSrc: require("../assets/dinner.jpg") },
  { id: 6, title: "Cake Cutting & Toast", time: "6:30 - 7:00 PM", details: "A sweet ending with our wedding cake and toast.", location: "Berlin, martas Restaurant Alvis", imgSrc: require("../assets/dance.jpg") },
  { id: 7, title: "Dancing & Music", time: "7:00 PM - 10:00 PM", details: "Let’s hit the dance floor and celebrate!", location: "Berlin, martas Restaurant Alvis", imgSrc: require("../assets/cake.jpg") },
];

const Full = () => {
  const [selectedId, setSelectedId] = useState(null);

  // 🔹 Function to animate image size
  const animateImage = (element, scale) => {
    gsap.to(element, { scale: scale, duration: 0.3, ease: "power2.out" });
  };

  // 🔹 Function to fade in/out details
  const animateDetails = (element, show) => {
    gsap.to(element, {
      opacity: show ? 1 : 0,
      maxHeight: show ? "200px" : "0px",
      duration: 0.3,
      ease: "power2.out",
      display: show ? "block" : "none",
    });
  };

  // 🔹 Handle image click: Enlarges & shows details while keeping position fixed
  const handleImageClick = (id, event) => {
    const isSelected = selectedId === id;
    setSelectedId(isSelected ? null : id);

    const img = event.target.closest(".event-card").querySelector(".event-image");
    const detailsBox = event.target.closest(".event-card").querySelector(".event-details-container");

    if (img) {
      animateImage(img, isSelected ? 1 : 1.2);
    }
    if (detailsBox) {
      animateDetails(detailsBox, !isSelected);
    }
  };

  // 🔹 Keep Hover Effect While Allowing Click Expansion
  useEffect(() => {
    const images = document.querySelectorAll(".event-card img");

    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        if (!img.closest(".expanded")) animateImage(img, 1.1);
      });

      img.addEventListener("mouseleave", () => {
        if (!img.closest(".expanded")) animateImage(img, 1);
      });
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("mouseenter", () => animateImage(img, 1.1));
        img.removeEventListener("mouseleave", () => animateImage(img, 1));
      });
    };
  }, []);

  // 🔹 Close all expanded images when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".event-card")) {
        setSelectedId(null);
        document.querySelectorAll(".event-image").forEach((img) => animateImage(img, 1));
        document.querySelectorAll(".event-details-container").forEach((details) => animateDetails(details, false));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="full-container">
      <div className="full-content">
        <h3 className="program-title">Program</h3>

        <div className="events-container">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`event-card ${selectedId === event.id ? "expanded" : ""} ${event.title === "Relocation" ? "highlighted-event" : ""}`}
              onClick={(e) => handleImageClick(event.id, e)}
            >
              <div className="event-image-container">
                {event.imgSrc ? (
                  <img src={event.imgSrc} alt={event.title} className="event-image" />
                ) : (
                  <div className="event-placeholder">No Image</div>
                )}
              </div>
              <div className="event-info">
                <p className="event-time">{event.time}</p>
                <p className="event-title">{event.title}</p>
                <div className="event-details-container">
                  <br /><p className="event-location"><strong>Location: {event.location}</strong></p>
                  <p className="event-details">{event.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Full;
