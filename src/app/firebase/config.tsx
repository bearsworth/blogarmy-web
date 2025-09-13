// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDJAdeRijZ2XYkurKFn_BSvnv07nkZ0xyQ",
  authDomain: "app.myaffiliatebay.com",
  projectId: "myaffiliatebay-b6e67",
  storageBucket: "myaffiliatebay-b6e67.firebasestorage.app",
  messagingSenderId: "640184749457",
  appId: "1:640184749457:web:efd4fa07c40f99c2ae5e30",
  measurementId: "G-KC6PS7WPYJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
