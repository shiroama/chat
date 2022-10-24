import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const app = initializeApp ({
    apiKey: "AIzaSyCrwQxXU138KPaXWQKDiBcvKiv35pmxEqA",
    authDomain: "message-e84a9.firebaseapp.com",
    projectId: "message-e84a9",
    storageBucket: "message-e84a9.appspot.com",
    messagingSenderId: "528705557617",
    appId: "1:528705557617:web:41fd0aa7832812215eb7d0"
  });

  export const auth = getAuth(app)
