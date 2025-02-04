import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import './components/home.css';
import './components/Full.scss';

import Home from './components/Home';
import Full from './components/Full';

const App = () => {
  useEffect(() => {
    // Example of using GSAP for animations
    gsap.from('.home-text', { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <div className="app-container">
      <div className="background"> {/* This ensures background stays unchanged */}
        <Home />
        <Full />
      </div>
    </div>
  );
};

export default App;
