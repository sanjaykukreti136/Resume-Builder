// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import auth from "firebase/auth"
import firestore from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBoFoJquv4Y3jy6UCW2NuNcjENYN6wG9GE",
    authDomain: "resume-builder-7fccc.firebaseapp.com",
    projectId: "resume-builder-7fccc",
    storageBucket: "resume-builder-7fccc.appspot.com",
    messagingSenderId: "676938079863",
    appId: "1:676938079863:web:15691e2a394083032df072"
};

firebase.initializeApp(firebaseConfig);

export const autha = firebase.auth();
export const firestorea = firebase.firestore();