import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM6OVFl82otXNu8FQS3U8XXssiBdqc43s",
  authDomain: "afrotech-ea17c.firebaseapp.com",
  databaseURL: "https://afrotech-ea17c-default-rtdb.firebaseio.com",
  projectId: "afrotech-ea17c",
  storageBucket: "afrotech-ea17c.appspot.com",
  messagingSenderId: "134171575533",
  appId: "1:134171575533:web:c319ce92241e3fe5ffb8e4",
  measurementId: "G-E0NDY0WF83",
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);
