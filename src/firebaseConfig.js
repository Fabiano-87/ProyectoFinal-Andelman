import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgsThOjvjbjBlb41It9Y91fAQQSpcfPog",
  authDomain: "bioxcel-210e1.firebaseapp.com",
  projectId: "bioxcel-210e1",
  storageBucket: "bioxcel-210e1.firebasestorage.app",
  messagingSenderId: "47797997709",
  appId: "1:47797997709:web:50937a02f8384ddfa392c4",
  measurementId: "G-RR3F1E7985",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
