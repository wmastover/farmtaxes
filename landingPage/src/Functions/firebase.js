import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdvujv07gE0lloXD-S-W9xMdHymlcrq60",
  authDomain: "calendarninja-14bce.firebaseapp.com",
  projectId: "calendarninja-14bce",
  storageBucket: "calendarninja-14bce.appspot.com",
  messagingSenderId: "1067981256614",
  appId: "1:1067981256614:web:a8c64ac528fa8b41f80167",
  measurementId: "G-YJESD8FN3P"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
