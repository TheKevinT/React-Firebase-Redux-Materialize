import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVj1xRYdgUDblK4wrgTwTWZ92ji2WTppk",
  authDomain: "react-presupuesto.firebaseapp.com",
  projectId: "react-presupuesto",
  storageBucket: "react-presupuesto.appspot.com",
  messagingSenderId: "779339301475",
  appId: "1:779339301475:web:ae7c788443731924502e56",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
