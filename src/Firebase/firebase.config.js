// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnO7J4iDUoAqJYv9xn6iRqAULClJb1-aQ",
  authDomain: "conceptual-one-2e591.firebaseapp.com",
  projectId: "conceptual-one-2e591",
  storageBucket: "conceptual-one-2e591.firebasestorage.app",
  messagingSenderId: "986666460147",
  appId: "1:986666460147:web:50965191bd9f3e25126886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth