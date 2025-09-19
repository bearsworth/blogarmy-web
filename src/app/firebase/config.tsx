// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0eNVmRakprDjyk9zAHJUk2c9pyLYG54A",
  authDomain: "blogarmy-1b50f.firebaseapp.com",
  projectId: "blogarmy-1b50f",
  storageBucket: "blogarmy-1b50f.firebasestorage.app",
  messagingSenderId: "426432998696",
  appId: "1:426432998696:web:d403ce1c01c241ebee341d",
  measurementId: "G-6GJW268VDW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
