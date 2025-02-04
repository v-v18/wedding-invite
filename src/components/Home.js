import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./home.css";

const Home = () => {
  // const textRef = useRef(null);

  // // Set up the scroll-triggered animations
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY; // Get the scroll position
  //     const scaleValue = 1 + scrollY / 500; // Scale based on scroll position

  //     // Limit the scale value to prevent it from growing too large
  //     const limitedScale = scaleValue > 2 ? 2 : scaleValue;

  //     // Use GSAP to animate the scale
  //     gsap.to(textRef.current, {
  //       scale: limitedScale,
  //       duration: 0.5,
  //       ease: "power3.out",
  //     });
  //   };

  //   // Add the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="home-container">
      <div className="content">
        <div className="home-text">
          <h1><br/><br/><br/><br/>Our Wedding Invitation</h1>
          <p>We are so excited to invite you to our wedding!</p>
          <p>
            <br />
            <br />
            <strong>Date:</strong> June 21, 2025
          </p>
          <p>
            <strong>Location:</strong> Secret Location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
