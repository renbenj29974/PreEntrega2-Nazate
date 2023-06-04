// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO2yRZs8mHhLhq8cagqGF3lh6BpxKU5_s",
    authDomain: "defhelp.firebaseapp.com",
    projectId: "defhelp",
    storageBucket: "defhelp.appspot.com",
    messagingSenderId: "38529159187",
    appId: "1:38529159187:web:198adc1033c1df08282fe6",
    measurementId: "G-VSM3YKS6M8"
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: "G-VSM3YKS6M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);