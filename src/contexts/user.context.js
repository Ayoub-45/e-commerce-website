import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentsFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase.utils";
//Creating the actual context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const Userprovider = ({ children }) => {
  useEffect(function () { 
    const unsubscribe=onAuthStateChangeListener(user=>{
      if(user)
        createUserDocumentsFromAuth(user)
      setCurrentUser(user)
    })
    return unsubscribe
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
