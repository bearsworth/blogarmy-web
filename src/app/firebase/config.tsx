// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCV2nokZ_WYclfwopeeeZRu6fZ_JF6PXw",
  authDomain: "app.blogarmy.com",
  projectId: "blogarmy-82425",
  storageBucket: "blogarmy-82425.firebasestorage.app",
  messagingSenderId: "17635041503",
  appId: "1:17635041503:web:77d13d3c9adc35cc7e096a",
  measurementId: "G-XEE627NS93",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
