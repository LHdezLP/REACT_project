// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2kPWL6ifjRhg6jEzznU3f2o2JdcJ7UGg",
  authDomain: "students-54648.firebaseapp.com",
  databaseURL: "https://students-54648-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "students-54648",
  storageBucket: "students-54648.appspot.com",
  messagingSenderId: "1005442943430",
  appId: "1:1005442943430:web:aeb1666d0690f4cd4bcac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db