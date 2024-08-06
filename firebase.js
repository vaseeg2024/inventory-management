// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv3jtVetKcGq4-Fa15Vk43wEA-1nYR5y0",
  authDomain: "inventory-management-c0997.firebaseapp.com",
  projectId: "inventory-management-c0997",
  storageBucket: "inventory-management-c0997.appspot.com",
  messagingSenderId: "475644828623",
  appId: "1:475644828623:web:f126ebeecfa02d02fa50ba",
  measurementId: "G-GKBLYZDFER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore }