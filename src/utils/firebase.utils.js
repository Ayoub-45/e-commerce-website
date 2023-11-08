import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAnVI-UmOTwocvMuMGcTLI9_dTcCPwA7AY",
  authDomain: "e-commerce-crown-532d5.firebaseapp.com",
  projectId: "e-commerce-crown-532d5",
  storageBucket: "e-commerce-crown-532d5.appspot.com",
  messagingSenderId: "967785273870",
  appId: "1:967785273870:web:f9d3c3057d8d2c7ad8fa5f",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInwithGooglePopup = function () {
  return signInWithPopup(auth, provider);
};
export const signInwithGoogleRedirect = function () {
  return signInWithRedirect(auth, provider);
};
export const db = getFirestore();
export const createUserDocumentsFromAuth = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  //If the user does not exist => we create a new document to store in our users collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("There was an error creating the user", err.message);
    }
  }

  return userDocRef;
};
