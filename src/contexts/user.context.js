import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  signOutUser,
} from "../utils/firebase.utils";
//Creating the actual context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
e;
export const Userprovider = ({ children }) => {
  signOutUser();
  useEffect(function () {
    const unsubscribe = onAuthStateChangeListener((user) => console.log(user));
    return unsubscribe;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
