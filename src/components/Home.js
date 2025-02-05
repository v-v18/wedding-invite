import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title"><br></br>Our Wedding Invitation</h1>
      <p className="home-text">
        We are so excited to invite you to our wedding!
      </p>
      <div className="home-details">
        <p>
          <strong>Date:</strong> June 21, 2025
        </p>
        <p>
          <strong>Location:</strong> Secret Location
        </p>
      </div>
    </div>
  );
};

export default Home;
