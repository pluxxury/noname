import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB3ov0QELButXUQIaBpHG6uehBUDL5sREo",
  authDomain: "noname-2e383.firebaseapp.com",
  projectId: "noname-2e383",
  storageBucket: "noname-2e383.appspot.com",
  messagingSenderId: "96369643727",
  appId: "1:96369643727:web:1b328c371821040d1c27ba",
  measurementId: "G-J501MNNG6H",
});

export const database = getFirestore(firebaseApp);

const addData = async () => {
  await setDoc(doc(database, "products", "LA"), {
    id: 6,
    title: "CA",
    description: "USA",
  });
};

addData();
