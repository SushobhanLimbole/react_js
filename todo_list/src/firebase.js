// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmQ9nTGIvMrFFBeWcO0gb9QSpbvBD_CX8",
  authDomain: "todoweb-fb3c7.firebaseapp.com",
  projectId: "todoweb-fb3c7",
  storageBucket: "todoweb-fb3c7.appspot.com",
  messagingSenderId: "395653716623",
  appId: "1:395653716623:web:3165380a9f7fad48eeeefa",
  measurementId: "G-JDWPDZ37FY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fetchData = async (collection = '',ref = '') => {
    const firestore = firebase.firebase();
    const data = await firestore.collection("your_collection").get();
    data.forEach(doc => {
      console.log(doc.data());
    });
  }
  