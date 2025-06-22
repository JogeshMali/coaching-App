import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC_VGJcF1uP2_TQZs-LMVbmDrTROQcsFPo",
  authDomain: "attendance-aa556.firebaseapp.com",
  projectId: "attendance-aa556",
  storageBucket: "attendance-aa556.firebasestorage.app",
  messagingSenderId: "163391693729",
  appId: "1:163391693729:web:e8e1d79f98d78b3f64e1e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const  auth = getAuth(app);


// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };

