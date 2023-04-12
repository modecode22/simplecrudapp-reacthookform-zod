// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaJFFTsot-sANF0YLks-78lQ578CZYJ2I",
  authDomain: "tastapp-d6444.firebaseapp.com",
  projectId: "tastapp-d6444",
  storageBucket: "tastapp-d6444.appspot.com",
  messagingSenderId: "777577451418",
  appId: "1:777577451418:web:3c1d2b62058401fd0f3423",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
