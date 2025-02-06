import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./App.css";
import Home from "./components/Home";
import Full from "./components/Full";

// Import the Firebase Authentication functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Import your Firebase configuration (from firebase.js)
import { auth } from "./firebase";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Animation for initial page load
    gsap.from(".home-title", { opacity: 0, y: 100, duration: 1 });
    gsap.from(".home-text", { opacity: 0, y: 50, duration: 1.5 });
    gsap.from(".home-details", { opacity: 0, y: 50, duration: 1.5 });
    
    // If user is logged in, animate after login as well
    if (user) {
      gsap.from(".image-container", { opacity: 0, y: 50, duration: 1.5 });
      gsap.from(".bottom-image", { opacity: 0, scale: 0.5, duration: 1.5 });
    }
  }, [user]);  // Runs whenever the user changes (after login)

  // Handle user login with Firebase
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        setUser(user);
        console.log("User signed in:", user);
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode);
        console.error("Error message:", errorMessage);
      });
  };

  return (
    <div className="app-container">
      <div className="background" />
      <div className="content">
        {/* Show the content only after login */}
        {!user ? (
          <div className="login-form">
            <h2>Please log in to see the content</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <>
            {/* The entire page content */}
            <Home />
            <Full />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
