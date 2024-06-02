import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8NFGU1dlm4xdbJ5PD424uv3VE0LQmjaQ",
    authDomain: "seminar-73fe0.firebaseapp.com",
    projectId: "seminar-73fe0",
    storageBucket: "seminar-73fe0.appspot.com",
    messagingSenderId: "1009430551982",
    appId: "1:1009430551982:web:5f04a803d5aac18f843c3f",
    measurementId: "G-X530XD7Q1D"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
