// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnVwTmllKWfqz8_DlkYnm3LHIESH_TtHE",
  authDomain: "jobapplyapp-a8daf.firebaseapp.com",
  projectId: "jobapplyapp-a8daf",
  storageBucket: "jobapplyapp-a8daf.appspot.com",
  messagingSenderId: "711888184342",
  appId: "1:711888184342:web:afb31e5793497099d40137",
  measurementId: "G-T93GHVBZ8B",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// export { db };
export { auth, provider, db };
