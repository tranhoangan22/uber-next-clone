// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsZ_Mj6iZoAPMA8ARTmK2PM4s8KM4o86k",
  authDomain: "an-uber-clone.firebaseapp.com",
  projectId: "an-uber-clone",
  storageBucket: "an-uber-clone.appspot.com",
  messagingSenderId: "436506571099",
  appId: "1:436506571099:web:ea42c1c9755f5acba76a7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
