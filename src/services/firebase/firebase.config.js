// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-3H2jykgJOLQuiOmlW7jW9cHCtuEOmgw",
  authDomain: "react-253c4.firebaseapp.com",
  databaseURL: "https://react-253c4-default-rtdb.europe-west1.firebasedatabase.app/",

  projectId: "react-253c4",
  storageBucket: "react-253c4.appspot.com",
  messagingSenderId: "731043556647",
  appId: "1:731043556647:web:0ffd29b2ff059267544d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db