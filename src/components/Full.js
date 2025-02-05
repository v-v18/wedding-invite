import React, { useState, useEffect } from "react";
import "./Full.css";

const Full = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("June 21, 2025");
        const now = new Date();
      
        // If target date is in the past, return 0 months and 0 days
        if (now >= targetDate) {
          return { months: 0, days: 0 };
        }
      
        // Calculate the total difference in time
        const yearsLeft = targetDate.getFullYear() - now.getFullYear();
        const monthsLeft = targetDate.getMonth() - now.getMonth() + 12 * yearsLeft;
      
        // Set the target date to the same day in the current month to calculate the days
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const targetDateInCurrentMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
        const daysLeft = Math.floor((targetDateInCurrentMonth - now) / (1000 * 60 * 60 * 24));
      
        // If the day of the current month is greater than the target, subtract an extra month
        let monthsRemaining = monthsLeft;
        if (now.getDate() > targetDate.getDate()) {
          monthsRemaining--;
        }
      
        // If monthsRemaining is 0, return only the days left
        if (monthsRemaining === 0) {
          return { months: 0, days: daysLeft };
        }
      
        return { months: monthsRemaining, days: daysLeft };
      };
      
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000 * 60 * 60); // Update every hour
    
        return () => clearInterval(timer);
      }, []);

    return (
        <div className="full-container">
            <div className="full-content">
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="countdown-time">
                {timeLeft.months > 2 ? (
                <div>
                    <p>In {timeLeft.months} months...</p>
                </div>
                ) : (
                <div>
                    <p>In {timeLeft.days} days...</p>
                </div>
                )}
            </div>
            <br></br>
            <h3 className="program-title">Program</h3>
            <table className="program-table">
                <tbody>
                <tr>
                    
                </tr>
                <tr>
                    <td><strong>3:00 PM</strong></td>
                    <td>Ceremony Begins</td>
                </tr>
                <tr>
                    <td><strong>4:00 PM</strong></td>
                    <td>Cocktail Hour</td>
                </tr>
                <tr>
                    <td><strong>5:30 PM</strong></td>
                    <td>Dinner & Toasts</td>
                </tr>
                <tr>
                    <td><strong>7:00 PM</strong></td>
                    <td>Dancing & Music</td>
                </tr>
                <tr>
                    <td><strong>10:00 PM</strong></td>
                    <td>Cake Cutting & Final Toast</td>
                </tr>
                <tr>
                    <td><strong>10:00 PM</strong></td>
                    <td>TestTestInvitation</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Full;
