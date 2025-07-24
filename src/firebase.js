// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for Firestore
// import { getDatabase } from "firebase/database"; // for Realtime DB
import { getAuth } from "firebase/auth"; // for Auth
import { getStorage } from "firebase/storage"; // for Storage

const firebaseConfig = {
  apiKey: "AIzaSyAddDg5V_4A6M-gsBsY_BuLXfw7W6itjE0",
  authDomain: "pathpledgeacademy.firebaseapp.com",
  projectId: "pathpledgeacademy",
  storageBucket: "pathpledgeacademy.appspot.com", // ✅ FIXED
  messagingSenderId: "426962303657",
  appId: "1:426962303657:web:a6f40d6ead672379ec47b8",
  measurementId: "G-96WT8N9G92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you need
export const db = getFirestore(app); // or getDatabase(app)
export const auth = getAuth(app);
export const storage = getStorage(app);
