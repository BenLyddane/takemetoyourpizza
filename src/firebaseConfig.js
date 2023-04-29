// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOiPonjI1uZWrsIFwf2TjqJ-uU6hZXeXc",
  authDomain: "takemetoyourpizza-fdd2d.firebaseapp.com",
  projectId: "takemetoyourpizza-fdd2d",
  storageBucket: "takemetoyourpizza-fdd2d.appspot.com",
  messagingSenderId: "43763848565",
  appId: "1:43763848565:web:8c883fae9c0285d034af3c",
  measurementId: "G-XLH6NGW5ZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

