// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Xm-tvVOw7uAeNZ_BZmK3_eLluzcKwZw",
  authDomain: "ai-trip-planner-25e10.firebaseapp.com",
  projectId: "ai-trip-planner-25e10",
  storageBucket: "ai-trip-planner-25e10.firebasestorage.app",
  messagingSenderId: "975285303597",
  appId: "1:975285303597:web:8e00cb2eaf162f9f873ba4",
  measurementId: "G-YGLYKEDP5J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();