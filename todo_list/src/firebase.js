

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { update } from "firebase/database";
// import firebase from "firebase/compat/app";
// import { get } from "firebase/database";
import 'firebase/firestore';
import { addDoc, collection, collectionGroup, deleteDoc, doc, getDocs, getFirestore, query, serverTimestamp, updateDoc, where } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtmFmqjIesPq37O_wpZZED1GxLo-1Z9ZE",
  authDomain: "todoapp-28895.firebaseapp.com",
  projectId: "todoapp-28895",
  storageBucket: "todoapp-28895.appspot.com",
  messagingSenderId: "526759731809",
  appId: "1:526759731809:web:1bab48ab3f6ee3e23ec020",
  measurementId: "G-7B5Q2F3340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Fetch data from Firestore collection or collection group
export const fetchFBData = async ({ collectionPath = '', cateId = '', userName=''}) => {
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
      const categoriesCollection = collection(firestore, 'categories');
      const q = query(categoriesCollection, where('userName', '==', userName));
      const snapshot = await getDocs(q);
      // const snapshot = await getDocs(collectionGroup(firestore, collectionPath));
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

export const checkUser = async (user) => {
  const userRef = collection(firestore, 'users');
    const q = query(userRef, where('user', '==', user));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return false;
    } else {
      return true;
    }
}

export const addUser = async (user) => {
  console.log('user add method called');
  const userRef = await addDoc(collection(firestore, 'users'), {user:user});
  console.log('user added == ',userRef.id);
  return userRef.id;
}

// Add a document to Firestore collection
export const addDocument = async ({ collectionPath = '', name = '', date = '', cateId = '', userName=''}) => {
  try {
    const data = collectionPath === 'categories' ? { name:name , timestamp: serverTimestamp() , userName:userName} : { title: name, date: date, categoryId: cateId, isCompleted:false};
    const docRef = await addDoc(collection(firestore, collectionPath), data);
    console.log('Document added with ID:', docRef.id);
    return docRef.id; // Return the ID of the added document
  } catch (error) {
    console.error('Error adding document:', error);
    return null; // Return null in case of error
  }
}

export const deleteCategory = async (cateId = '') => {
  console.log('deletecate called');
  //deletes categories
  const documentRef = doc(firestore, 'categories', cateId);
  await deleteDoc(documentRef);
  console.log('wait ');

  //deletes tasks of that categories
  const tasksCollection = collection(firestore, 'tasks');
  const q = query(tasksCollection, where('categoryId', '==', cateId));
  const snapshot = await getDocs(q);
  snapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  })
  console.log('deletecate end');
}

// const snapDel = async (snap,updateData) => {
  
//   // updateData([]);
//   console.log('snapshot end2');
// }

export const deleteAll = async (updateData) => {
  console.log('deleteAll method called');
  const snapshot = await getDocs(collectionGroup(firestore, 'categories'));
  // await snapDel(snapshot,updateData);
  snapshot.forEach(async (doc) => {
    console.log('delete id ==== ',doc.id);
    console.log('snapshot called');
    await deleteCategory(doc.id);
    updateData([]);
    console.log('snapshot end');
  });
  console.log('deleteAll end');
}

export const deleteTask = async (taskId = '') => {

  const documentRef = doc(firestore, 'tasks', taskId);
  await deleteDoc(documentRef);
  console.log('deleted');
}

export const updateContent = async ({ collectionPath = '', name = '', date = '', cateId = '', taskId = '' }) => {

  if (collectionPath === 'categories') {
    console.log('update categories called');
    const categoriesCollection = doc(firestore, 'categories', cateId);
    await updateDoc(categoriesCollection, { name: name });
  } else {
    console.log('update tasks called');
    const tasksCollection = doc(firestore, 'tasks', taskId);
    await updateDoc(tasksCollection, { title: name, date: date });
  }
}

export const updateChecked = async ( {isCompleted = '' , taskId = ''}) => {

    console.log('update checked called');
    const tasksCollection = doc(firestore, 'tasks', taskId);
    await updateDoc(tasksCollection, { isCompleted: isCompleted });
  
}
