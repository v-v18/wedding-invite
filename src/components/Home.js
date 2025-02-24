import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  // 🔹 Calculate days until the wedding
  useEffect(() => {
    const weddingDate = new Date("June 21, 2025").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24)); // Convert to days
      setDaysLeft(days);
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24); // Update every day

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">JISU & VIET</h1>
      <br />
      <p className="home-invitation">
        invite you to celebrate our wedding ceremony on Saturday
      </p>
      <br />
      <h1 className="wedding-date">June 21, 2025</h1>
      <br />
  
      {/* Two Columns Section */}
      <div className="wedding-locations">
        <div className="location-left">
          <em>Join us for our civil wedding ceremony</em>
          <p></p>
          <br />
          <em>- at 1:00 PM -</em>
          <h1 className="small-title">
            <br /> BLAUE GALERIE <br /> NEUE KAMMERN <br /> IM PARK SANSSOUCI
          </h1>
          <br />
          <em>Maulbeerallee 1,<br /> 14469 Potsdam</em>
        </div>
        <div className="separator"></div>
        <div className="location-right">
          <em>Followed by a champagne reception and dinner</em>
          <p></p>
          <br />
          <em>- at 4:30 PM -</em>
          <h1 className="small-title">
            <br /> MARTA'S <br /> RESTAURANT <br /> ALVIS
          </h1>
          <br />
          <em>Albrechtsstraße 8,<br /> 10117 Berlin</em>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Additional Information Section */}
      <div className="additional-info">
        <p>
          After the wedding ceremony and quick photo session, <br />
          the newlyweds invite you to dinner.<br />
          <br />
          The celebration will continue into the evening, <br />concluding at 10 PM.<br />
          <br />
          More detailed information is available in digital<br />
          form. Please check the QR Code. :)
        </p>
      </div>
    </div>
  );
  
};

export default Home;
