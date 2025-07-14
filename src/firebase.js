// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for Firestore
// import { getDatabase } from "firebase/database"; // for Realtime DB
import { getAuth } from "firebase/auth"; // for Auth
import { getStorage } from "firebase/storage"; // for Storage

const firebaseConfig = {
  apiKey: "AIzaSyDF90kkmCVvnGAAzH9RV9-PyNknlRJTn8M",
  authDomain: "pathpladge.firebaseapp.com",
  projectId: "pathpladge",
  storageBucket: "pathpladge.firebasestorage.app",
  messagingSenderId: "235627627996",
  appId: "1:235627627996:web:60c4477255f196654d3b19",
  measurementId: "G-KE9JNQNCCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you need
export const db = getFirestore(app); // or getDatabase(app)
export const auth = getAuth(app);
export const storage = getStorage(app);
