// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmHp1G6jMof-7Q1QicigNgJ7lVdDJDGB0",
  authDomain: "assignment-11-project-2d757.firebaseapp.com",
  projectId: "assignment-11-project-2d757",
  storageBucket: "assignment-11-project-2d757.appspot.com",
  messagingSenderId: "48205077537",
  appId: "1:48205077537:web:e34fc599ef5d8fed80d760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;