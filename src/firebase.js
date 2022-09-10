// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUqYMfseFxC6mYcsMDbe7VLSItGUN2f2E",
  authDomain: "to-do-app-727f8.firebaseapp.com",
  projectId: "to-do-app-727f8",
  storageBucket: "to-do-app-727f8.appspot.com",
  messagingSenderId: "1098816225397",
  appId: "1:1098816225397:web:2b19af5fbd477f095ab83c",
  measurementId: "G-16Y9V4EEK4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(firebaseApp);

export { db };
