// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcuHKPaa0KG_hWiO9NvKKxMByKJheEWbE",
  authDomain: "phone-dbd6a.firebaseapp.com",
  projectId: "phone-dbd6a",
  storageBucket: "phone-dbd6a.appspot.com",
  messagingSenderId: "871792621264",
  appId: "1:871792621264:web:2f96c7507cef3cd92950d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
