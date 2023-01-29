// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBjoY7W3oCr2vYWtIo-GgZLpQZ8uZuqsQQ",
  authDomain: "gestion-des-rdv-medicaux.firebaseapp.com",
  projectId: "gestion-des-rdv-medicaux",
  storageBucket: "gestion-des-rdv-medicaux.appspot.com",
  messagingSenderId: "783171282233",
  appId: "1:783171282233:web:cf527250ff373d461934e8",
  measurementId: "G-M46VJ4WL6Q" 
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
