// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9ZVNmiQi2S9ZupyjjiidzbuE5IlEX-k",
  authDomain: "pantry-app-5f3d9.firebaseapp.com",
  projectId: "pantry-app-5f3d9",
  storageBucket: "pantry-app-5f3d9.appspot.com",
  messagingSenderId: "248944636341",
  appId: "1:248944636341:web:61ed1b001e3d9e328a29fc",
  measurementId: "G-TH5EJXW8S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Initialize Firestore

export { firestore }; // Export Firestore
