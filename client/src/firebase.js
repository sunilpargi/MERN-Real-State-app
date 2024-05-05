
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCerK-7T0N2II-O-0QTXP-Qjw1HuS4E2PM",
  authDomain: "mern-real-state-marketplace.firebaseapp.com",
  projectId: "mern-real-state-marketplace",
  storageBucket: "mern-real-state-marketplace.appspot.com",
  messagingSenderId: "384271313837",
  appId: "1:384271313837:web:b6b53323738de101240f24",
  measurementId: "G-PZ3V5G98WD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);