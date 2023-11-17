import { createContext, useState } from "react";
//Creating the actual context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const Userprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
