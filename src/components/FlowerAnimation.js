import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import flowerImg from "../assets/flowers4.png";

const FlowerAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const totalFlowers = 15; // Number of falling flowers

    for (let i = 0; i < totalFlowers; i++) {
      const flower = document.createElement("img");
      flower.src = flowerImg;
      flower.className = "falling-flower";
      flower.style.position = "absolute";
      flower.style.width = `${Math.random() * 20 + 20}px`; // Random size
      flower.style.left = `${Math.random() * 100}vw`; // Random X position
      flower.style.top = `-${Math.random() * 100}px`; // Start above the screen
      containerRef.current.appendChild(flower);

      gsap.to(flower, {
        y: "100vh",
        x: `+=${Math.random() * 50 - 25}px`, // Slight side movement
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5, // Random fall duration
        repeat: -1,
        ease: "linear",
        delay: Math.random() * 5, // Stagger the falling
      });
    }
  }, []);

  return <div ref={containerRef} className="flower-container"></div>;
};

export default FlowerAnimation;
