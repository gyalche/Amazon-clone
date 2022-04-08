// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/db";
// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAItj1FAM9UJEZI37ZMclWSyOFDlfA7ZVk",
  authDomain: "clone-f4eb9.firebaseapp.com",
  projectId: "clone-f4eb9",
  storageBucket: "clone-f4eb9.appspot.com",
  messagingSenderId: "629418171915",
  appId: "1:629418171915:web:ac46468bc3c8b347d8b10e"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};