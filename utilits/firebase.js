// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM6OVFl82otXNu8FQS3U8XXssiBdqc43s",
  authDomain: "afrotech-ea17c.firebaseapp.com",
  databaseURL: "https://afrotech-ea17c-default-rtdb.firebaseio.com",
  projectId: "afrotech-ea17c",
  storageBucket: "afrotech-ea17c.appspot.com",
  messagingSenderId: "134171575533",
  appId: "1:134171575533:web:c319ce92241e3fe5ffb8e4",
  measurementId: "G-E0NDY0WF83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);