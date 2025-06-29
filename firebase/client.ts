// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import  {getAuth } from 'firebase/auth'; 
import  {getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyC3_WRqzVgMZbcjIdlEPevlQzs6U0Q8F1c",
  authDomain: "prepai-3f410.firebaseapp.com",
  projectId: "prepai-3f410",
  storageBucket: "prepai-3f410.firebasestorage.app",
  messagingSenderId: "32968868146",
  appId: "1:32968868146:web:b6c8535351120f3106172b",
  measurementId: "G-PL0ED59HHF"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth =getAuth(app); 
export const db = getFirestore(app); 