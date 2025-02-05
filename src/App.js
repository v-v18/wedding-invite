import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./App.css";
import Home from "./components/Home";
import Full from "./components/Full";

const App = () => {
  useEffect(() => {
    gsap.from(".home-title", { opacity: 0, y: 100, duration: 1 });
    gsap.from(".home-text", { opacity: 0, y: 50, duration: 1.5 });
    gsap.from(".home-details", { opacity: 0, y: 50, duration: 1.5 });
  }, []);

  return (
    <div className="app-container">
      <div className="background" />
      <div className="content">
        <Home />
        <Full />
      </div>
    </div>
  );
};

export default App;
