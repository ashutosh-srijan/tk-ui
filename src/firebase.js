import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZFFNH7Q05kskBPQFxK0QypqnJjH1r7_g",
  authDomain: "reels-app-b45f4.firebaseapp.com",
  databaseURL: "https://reels-app-b45f4-default-rtdb.firebaseio.com",
  projectId: "reels-app-b45f4",
  storageBucket: "reels-app-b45f4.appspot.com",
  messagingSenderId: "949991100586",
  appId: "1:949991100586:web:4f8dc1f0221e1f762b40d3",
  measurementId: "G-9F0HK37BEG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
