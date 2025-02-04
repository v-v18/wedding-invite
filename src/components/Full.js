import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./Full.scss";

const Full = () => {
//   useEffect(() => {
//     gsap.fromTo(".full-container h1", {
//       opacity: 0,
//       y: -50,
//     }, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power3.out",
//     });
//   }, []);

  const calculateTimeLeft = () => {
    const targetDate = new Date("June 21, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate months remaining
    const targetDateObj = new Date("June 21, 2025");
    const currentDateObj = new Date();
    let monthsLeft = targetDateObj.getMonth() - currentDateObj.getMonth() + (12 * (targetDateObj.getFullYear() - currentDateObj.getFullYear()));

    // Calculate the difference in days
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Subtract the months' worth of days from the total days
    const daysInMonths = monthsLeft * 30; // Approximate the number of days in a month
    const remainingDays = daysLeft - daysInMonths;

    return {
      months: monthsLeft,
      days: remainingDays,
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="full-container">
      <div className="full-text">
        <h2>Countdown</h2>
        <div className="countdown">
          <span>{timeLeft.months} Months</span> and 
          <span>{timeLeft.days} Days</span> left
        </div>
      </div>
      <b />
      <b />
      {/* Schedule Section */}
      <div className="schedule">
        <h3>Our Wedding Schedule</h3>
        <ul>
          <li>
            <strong>3:00 PM:</strong> Ceremony Begins
          </li>
          <li>
            <strong>4:00 PM:</strong> Cocktail Hour
          </li>
          <li>
            <strong>5:30 PM:</strong> Dinner & Toasts
          </li>
          <li>
            <strong>7:00 PM:</strong> Dancing & Music
          </li>
          <li>
            <strong>10:00 PM:</strong> Cake Cutting & Final Toast
          </li>
          <li>
            <strong>10:00 PM:</strong> TestTestInvitation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Full;