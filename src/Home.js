import React from "react";
// import "./Home.css"; // Optional, for styling

function Home() {
  return (
    <div className="home">
      <div className="section" style={{ background: "rgba(255, 223, 223, 0.8)" }}>
        <h1>You're Invited to Our Wedding! 💍</h1>
      </div>
      <div className="section" style={{ background: "rgba(223, 255, 223, 0.8)" }}>
        <h2>Park & Park - June 21, 2025</h2>
      </div>
      <div className="section" style={{ background: "rgba(223, 223, 255, 0.8)" }}>
        <h2>Secret Location</h2>
      </div>
      <div className="section" style={{ background: "rgba(255, 255, 223, 0.8)" }}>
        <a href="https://v-v18.github.io/wedding-invite/" className="rsvp-button" target="_blank">RSVP Now</a>
      </div>
    </div>
  );
}

export default Home;
