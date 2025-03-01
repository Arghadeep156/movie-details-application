// Import necessary functions from Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCFw87jH6WNseaUqzSfgvd_7SqYmehyvQ0",
  authDomain: "movie-application-72b03.firebaseapp.com",
  projectId: "movie-application-72b03",
  storageBucket: "movie-application-72b03.firebasestorage.app",
  messagingSenderId: "209656977675",
  appId: "1:209656977675:web:d2aad6d6e36284463aaa0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Get Firebase Authentication and provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
