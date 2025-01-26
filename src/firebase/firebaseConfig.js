import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8BAdfvH6l6bpIJ8vJdly_IZvVaI2KFIA",
  authDomain: "studentpage-a6365.firebaseapp.com",
  projectId: "studentpage-a6365",
  storageBucket: "studentpage-a6365.appspot.com",
  messagingSenderId: "579552370311",
  appId: "1:579552370311:web:a3e30e60e41509572c6222",
  measurementId: "G-89PNLBQ3DW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
