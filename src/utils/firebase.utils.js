import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
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
export const createUserDocumentsFromAuth = async function (
  userAuth,
  additionalInformation = {}
) {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (err) {
      console.log("There was an error creating the user", err.message);
    }
  }

  return userDocRef;
};
export const addCollectionAndDocuments = async function (
  collectionKey,
  objectToAdd
) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Done");
};
export const createAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async function () {
  return await signOut(auth);
};
export const onAuthStateChangeListener = function (callback) {
  console.log(callback);
  return onAuthStateChanged(auth, callback);
};
export const getCategoriesAndDocuments = async function () {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnpashot) => {
    const { title, items } = docSnpashot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
