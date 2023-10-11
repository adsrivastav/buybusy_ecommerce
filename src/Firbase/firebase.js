// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";


// Your web app's Firebase configuration
/* The `firebaseConfig` object contains the configuration settings for your Firebase project. It
includes various properties such as `apiKey`, `authDomain`, `projectId`, `storageBucket`,
`messagingSenderId`, and `appId`. These properties are used to authenticate and connect your web app
to the Firebase services. */
const firebaseConfig = {
  apiKey: "AIzaSyBoiSDStrxMsywLwIaixlaR4W9ttTRMGes",
  authDomain: "buyproduct-fab61.firebaseapp.com",
  projectId: "buyproduct-fab61",
  storageBucket: "buyproduct-fab61.appspot.com",
  messagingSenderId: "213259860429",
  appId: "1:213259860429:web:6e9aff8bb9cf9aba872c84"
};




// Initialize Firebase
/* The code is initializing the Firebase app using the provided configuration (`firebaseConfig`). It
then creates a Firestore instance (`db`) and an Auth instance (`auth`). The `setPersistence`
function is used to set the persistence type for the authentication session to be stored in the
browser's local storage. Finally, the `db` instance is exported for use in other parts of the code. */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
