import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
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
