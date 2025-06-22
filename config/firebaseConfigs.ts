import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "Your Api key",
  authDomain: "Your AuthDomain",
  projectId: "Your projectid",
  storageBucket: "Your app storageBucket",
  messagingSenderId: "Your app messagingSenderID",
  appId: "Your ApiId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const  auth = getAuth(app);


// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };

