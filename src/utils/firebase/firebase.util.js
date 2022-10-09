// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZrARLmxeX1rT8lLCelR6jaQhVnLrVpss",
  authDomain: "comfy-5c437.firebaseapp.com",
  projectId: "comfy-5c437",
  storageBucket: "comfy-5c437.appspot.com",
  messagingSenderId: "492427655179",
  appId: "1:492427655179:web:86064bf28c253cc57cef0e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);
