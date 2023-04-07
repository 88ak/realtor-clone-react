// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEqui6bjf5WYZAgb16XkbaSruqFurC3k8",
  authDomain: "realtor-clone-react-43209.firebaseapp.com",
  projectId: "realtor-clone-react-43209",
  storageBucket: "realtor-clone-react-43209.appspot.com",
  messagingSenderId: "998244429191",
  appId: "1:998244429191:web:074c8736a0d1f466fa3722",
  measurementId: "G-ZRFGZKKEL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()