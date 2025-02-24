import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";
import Home from "./components/Home";
import Full from "./components/Full";
import FlowerAnimation from "./components/FlowerAnimation";

const sections = ["home", "program", "dress code", "dining", "photos", "donation"];

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 🔹 Listen for Firebase Authentication State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔹 Function to Change Sections ONLY When Clicking the Navbar
  const changeSection = (newSection) => {
    if (isTransitioning || newSection === currentSection) return;
    setIsTransitioning(true);

    // Fade out the current section first
    gsap.to(`.section-${currentSection}`, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setCurrentSection(newSection);

        // Fade in the new section
        gsap.to(`.section-${newSection}`, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsTransitioning(false),
        });
      },
    });
  };

  // 🔹 Handle Firebase Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  // 🔹 Handle Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Logout Error:", error));
  };

  return (
    <div className="app-container">
      <div className="background" />

      {/* 🔹 Banner at the Top */}
      <div className="banner">
        <p>To-Do: new section TRANSPORT, secure Photos, Food Menu, Photo Storage</p>
      </div>

      {/* 🔹 Fixed Navigation Menu */}
      <nav className="navbar">
        <ul>
          <li onClick={() => changeSection(0)}>Home</li>
          <li onClick={() => changeSection(1)}>Program</li>
          <li onClick={() => changeSection(2)}>Dress Code</li>
          <li onClick={() => changeSection(3)}>Dining</li>
          <li onClick={() => changeSection(4)}>Photos</li>
          <li onClick={() => changeSection(5)}>Donation</li>
          {user && <li onClick={handleLogout} className="logout-btn">Logout</li>}
        </ul>
      </nav>

      <div className="content">
        {!user ? (
          <div className="login-form">
            <h2>Login to Access</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <>
            <FlowerAnimation />
            {sections.map((section, index) => (
              <div
                key={index}
                className={`section section-${index} ${currentSection === index ? "active" : ""}`}
                style={{
                  opacity: currentSection === index ? 1 : 0,
                  visibility: currentSection === index ? "visible" : "hidden",
                  overflowY: "auto", // Allows scrolling inside sections
                }}
              >         
                {index === 0 && <Home />}
                {index === 1 && <Full />}
                {index === 2 && <h2>Dress Code</h2>}
                {index === 3 && <h2>Dining & Menu</h2>}
                {index === 4 && <h2>Photo Gallery</h2>}
                {index === 5 && <h2>Donation</h2>}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
