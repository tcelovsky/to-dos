// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMu69T_zJZH-IcUVBuVUEJZIkw54Fyctk",
  authDomain: "to-dos-e9402.firebaseapp.com",
  projectId: "to-dos-e9402",
  storageBucket: "to-dos-e9402.appspot.com",
  messagingSenderId: "894357078752",
  appId: "1:894357078752:web:6e14bfdde9b4c2f315c685",
  measurementId: "G-R75KBT9PE4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(firebaseApp);

export { db };
