import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});
export const CategoriesProvider = function ({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = {
    categoriesMap,
  };
  useEffect(function () {
    async function getCategoriesMap() {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    }
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
