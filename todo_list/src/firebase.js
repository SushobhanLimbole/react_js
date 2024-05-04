

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { update } from "firebase/database";
// import firebase from "firebase/compat/app";
// import { get } from "firebase/database";
import 'firebase/firestore';
import { addDoc, collection, collectionGroup, deleteDoc, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Fetch data from Firestore collection or collection group
export const fetchFBData = async ({ collectionPath = '', cateId = '' }) => {
  try {
    if (collectionPath === 'tasks') {
      const dataArray = [];
      const tasksCollection = collection(firestore, 'tasks');
      const q = query(tasksCollection, where('categoryId', '==', cateId));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        dataArray.push({ id: doc.id, ...doc.data() });
      });
      return dataArray;
    } else {
      const dataArray = [];
      const snapshot = await getDocs(collectionGroup(firestore, collectionPath));
      snapshot.forEach((doc) => {
        dataArray.push({ id: doc.id, ...doc.data() });
      });
      return dataArray;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return empty array in case of error
  }
}

// Add a document to Firestore collection
export const addDocument = async ({ collectionPath = '', name = '', date = '', cateId = '' }) => {
  try {
    const data = collectionPath === 'category' ? { name } : { title: name, date: date, categoryId: cateId };
    const docRef = await addDoc(collection(firestore, collectionPath), data);
    console.log('Document added with ID:', docRef.id);
    return docRef.id; // Return the ID of the added document
  } catch (error) {
    console.error('Error adding document:', error);
    return null; // Return null in case of error
  }
}

export const deleteCategory = async (cateId = '') => {
  //deletes category
  const documentRef = doc(firestore, 'category', cateId);
  await deleteDoc(documentRef);
  console.log('wait ');

  //deletes tasks of that category
  const tasksCollection = collection(firestore, 'tasks');
  const q = query(tasksCollection, where('categoryId', '==', cateId));
  const snapshot = await getDocs(q);
  snapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  })

}

export const deleteTask = async (taskId = '') => {

  const documentRef = doc(firestore, 'tasks', taskId);
  await deleteDoc(documentRef);
  console.log('deleted');
}

export const updateContent = async ({ collectionPath = '', name = '', date = '', cateId = '', taskId = '' }) => {

  if (collectionPath === 'category') {
    console.log('update category called');
    const categoryCollection = doc(firestore, 'category', cateId);
    await updateDoc(categoryCollection, { name: name });
  } else {
    console.log('update tasks called');
    const tasksCollection = doc(firestore, 'tasks', taskId);
    await updateDoc(tasksCollection, { title: name, date: date });
  }

}


