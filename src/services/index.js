import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBiZPpokgL5QtR4RY5vdt2fgFGwEqP7XKg",
  authDomain: "tecnopak-c46ac.firebaseapp.com",
  projectId: "tecnopak-c46ac",
  storageBucket: "tecnopak-c46ac.appspot.com",
  messagingSenderId: "410413736110",
  appId: "1:410413736110:web:e86422e92e3aa11abdcd3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)