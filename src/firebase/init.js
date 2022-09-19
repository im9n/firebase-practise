// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnXmYXFU2RwwTvtkaITsNRlrbZGsQ9U80",
  authDomain: "fire-base-practise-2ee80.firebaseapp.com",
  projectId: "fire-base-practise-2ee80",
  storageBucket: "fire-base-practise-2ee80.appspot.com",
  messagingSenderId: "103895405589",
  appId: "1:103895405589:web:394d30593cfb70ab4d2a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()