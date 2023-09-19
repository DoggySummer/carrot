// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: "carrotnext-5aa21",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig);

//  projectId:  "carrotnext-5aa21",

// apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
// appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
// measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
export default firebasedb;