// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhJ9mFUZRkrHSkS5StKWaD4dDVYvBfZds",
  authDomain: "resume-builder-2b5d4.firebaseapp.com",
  projectId: "resume-builder-2b5d4",
  storageBucket: "resume-builder-2b5d4.firebasestorage.app",
  messagingSenderId: "983290740188",
  appId: "1:983290740188:web:cb03874b164c72e193a319",
  measurementId: "G-E9FTT341CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);