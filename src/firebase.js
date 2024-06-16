// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3e893.firebaseapp.com",
  projectId: "mern-estate-3e893",
  storageBucket: "mern-estate-3e893.appspot.com",
  messagingSenderId: "504180297247",
  appId: "1:504180297247:web:0d5bb10c90eb17f3674f2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);