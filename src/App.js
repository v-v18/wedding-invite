// src/App.js

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./App.css";
import Home from "./components/Home";
import Full from "./components/Full";
import firebase from "./firebase";  // Import Firebase config

const App = () => {
  // State variables for handling email, password, error messages, and user state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Login function using email and password
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);  // Set the user object upon successful login
      })
      .catch((error) => {
        setError(error.message);  // Display error message if login fails
      });
  };

  // Signup function for new users
  const handleSignup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);  // Set the user object upon successful signup
      })
      .catch((error) => {
        setError(error.message);  // Display error message if signup fails
      });
  };

  // Logout function
  const handleLogout = () => {
    firebase.auth().signOut();
    setUser(null);  // Clear the user state upon logout
  };

  useEffect(() => {
    gsap.from(".home-title", { opacity: 0, y: 100, duration: 1 });
    gsap.from(".home-text", { opacity: 0, y: 50, duration: 1.5 });
    gsap.from(".home-details", { opacity: 0, y: 50, duration: 1.5 });
  }, []);

  const imageUrl = "https://drive.google.com/uc?export=view&id=1MdUx0DQzz50O_LNJ2lQHJPQzVZ-yJz0q";

  return (
    <div className="app-container">
      <div className="background" />
      <div className="content">
        <Home />
        <Full />

        {/* Conditional rendering based on whether user is authenticated */}
        {user ? (
          <div className="protected-content">
            <h1>Welcome, {user.email}!</h1>
            <button onClick={handleLogout}>Logout</button>
            <div className="image-container">
              <img src={imageUrl} alt="Special Image" className="bottom-image" />
            </div>
          </div>
        ) : (
          <div className="login-container">
            <h2>Please log in or sign up:</h2>
            <form onSubmit={handleLogin}>
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
              <button type="submit">Login</button>
            </form>
            <form onSubmit={handleSignup}>
              <h3>Or Sign Up:</h3>
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
              <button type="submit">Sign Up</button>
            </form>
            {error && <p>{error}</p>} {/* Display any error messages */}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
