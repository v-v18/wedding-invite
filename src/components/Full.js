import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Full.css";

const events = [
    { title: "Ceremony Begins", imgSrc: require("../assets/ceremony.jpg") },
    { title: "Cocktail Hour", imgSrc: require("../assets/cocktail.jpg") },
    { title: "Dinner & Toasts", imgSrc: require("../assets/dinner.jpg") },
    { title: "Dancing & Music", imgSrc: require("../assets/dance.jpg") },
    { title: "Cake Cutting & Toast", imgSrc: require("../assets/cake.jpg") }
  ];

const Full = () => {
  const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0 });

  // Function to calculate time left
  const calculateTimeLeft = () => {
    const targetDate = new Date("June 21, 2025");
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) return { months: 0, days: 0 };

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;

    return { months, days };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, []);

  // 🔹 Scroll Animation Effect
  useEffect(() => {
    let lastScrollTop = window.scrollY;
    
    // Use GSAP quickSetter for performance
    const setOpacity = gsap.quickTo(".event-card", "opacity", { duration: 0.3 });
    const setX = gsap.quickTo(".event-card", "x", { duration: 0.5 });
  
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const images = document.querySelectorAll(".event-card");
  
      if (currentScroll > lastScrollTop) {
        // Scrolling Down → Smoothly fade in from left to right
        gsap.fromTo(
          images,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
        );
      } else {
        // Scrolling Up → Smoothly fade out to the left
        gsap.fromTo(
          images,
          { opacity: 1, x: 0 },
          { opacity: 0, x: -50, duration: 0.4, stagger: 0.1, ease: "power2.in" }
        );
      }
  
      lastScrollTop = currentScroll;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="full-container">
      <div className="full-content">
        <br /><br /><br /><br /><br /><br /><br />
        
        {/* 🔹 Countdown Timer */}
        <div className="countdown-time">
          {timeLeft.months > 2 ? (
            <p>In {timeLeft.months} months...</p>
          ) : (
            <p>In {timeLeft.days} days...</p>
          )}
        </div>

        {/* 🔹 Title */}
        <h3 className="program-title">Program</h3>

        {/* 🔹 Image Event Cards */}
        <div className="events-container">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.imgSrc} alt={event.title} className="event-image" />
              <p className="event-title">{event.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Full;
