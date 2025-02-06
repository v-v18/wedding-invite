// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrm3RW0oxqO9yhn8OQQyRYqJADyKuvSEs",
  authDomain: "park-wedding-77beb.firebaseapp.com",
  projectId: "park-wedding-77beb",
  storageBucket: "park-wedding-77beb.firebasestorage.app",
  messagingSenderId: "602759700555",
  appId: "1:602759700555:web:fbc32539c95f95e128adce",
  measurementId: "G-4FCDWJDXP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };