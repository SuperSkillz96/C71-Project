import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCznlARiQllNGouCoB5zq_sEXrP4rZdVdo",
    authDomain: "c71-project-760da.firebaseapp.com",
    projectId: "c71-project-760da",
    storageBucket: "c71-project-760da.appspot.com",
    messagingSenderId: "363485846362",
    appId: "1:363485846362:web:a73c165913129295153163"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
