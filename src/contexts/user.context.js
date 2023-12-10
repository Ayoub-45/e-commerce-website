import { createContext, useState, useEffect, useReducer } from "react";
import {
  createUserDocumentsFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase.utils";
import { USER_ACTiON_TYPES, userReducer } from "../reducers/user.reducer";
//Creating the actual context
const INITIAL_STATE = {
  currentUser: null,
};
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const Userprovider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTiON_TYPES.SET_CURRENT_USER, payload: user });
  };
  useEffect(function () {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) createUserDocumentsFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  //const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
