// const firebaseConfig = {
//   apiKey: "AIzaSyB2oSseUJ6ck0XT7jp5vI3nipZsC_aO0c4",
//   authDomain: "todo-93d3b.firebaseapp.com",
//   projectId: "todo-93d3b",
//   storageBucket: "todo-93d3b.appspot.com",
//   messagingSenderId: "73233321346",
//   appId: "1:73233321346:web:9ee639ee75a02bf5a9d39b",
//   measurementId: "G-3W5RW6FQ49",
// };

import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyB2oSseUJ6ck0XT7jp5vI3nipZsC_aO0c4",
  authDomain: "todo-93d3b.firebaseapp.com",
  projectId: "todo-93d3b",
  storageBucket: "todo-93d3b.appspot.com",
  messagingSenderId: "73233321346",
  appId: "1:73233321346:web:9ee639ee75a02bf5a9d39b",
  measurementId: "G-3W5RW6FQ49",
});

const db = firebaseapp.firestore();
export default db;
