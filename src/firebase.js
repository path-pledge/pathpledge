// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for Firestore
// import { getDatabase } from "firebase/database"; // for Realtime DB
import { getAuth } from "firebase/auth"; // for Auth
import { getStorage } from "firebase/storage"; // for Storage
import { getAnalytics } from "firebase/analytics"; // for Analytics

// Firebase configuration (new project)
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAddDg5V_4A6M-gsBsY_BuLXfw7W6itjE0",
  authDomain: "pathpledgeacademy.firebaseapp.com",
  projectId: "pathpledgeacademy",
  storageBucket: "pathpledgeacademy.appspot.com", // ✅ FIXED
  messagingSenderId: "426962303657",
  appId: "1:426962303657:web:a6f40d6ead672379ec47b8",
  measurementId: "G-96WT8N9G92"
=======
  apiKey: "AIzaSyD8x3ByNTuWtA5NZrX0YpUv46p7_AgvYbQ",
  authDomain: "thepathpledge.firebaseapp.com",
  projectId: "thepathpledge",
  storageBucket: "thepathpledge.firebasestorage.app",
  messagingSenderId: "946666569654",
  appId: "1:946666569654:web:14881545196d59bb6b8b17",
  measurementId: "G-D1QL9HEHC8"
>>>>>>> a9dd455 (fix: Footer Link, ScrollToTop, package updates)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the services you need
export const db = getFirestore(app); // or getDatabase(app)
export const auth = getAuth(app);
export const storage = getStorage(app);
export { analytics, app };
