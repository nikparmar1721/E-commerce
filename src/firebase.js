// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAknX6eEXiXNoq19MzgJVJjZFuyagjzhJ0",
  authDomain: "fir-7d56b.firebaseapp.com",
  projectId: "fir-7d56b",
  storageBucket: "fir-7d56b.appspot.com",
  messagingSenderId: "1009291775777",
  appId: "1:1009291775777:web:7cc75cdf09e8c24d043860",
  measurementId: "G-81V1RV0FLC",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
