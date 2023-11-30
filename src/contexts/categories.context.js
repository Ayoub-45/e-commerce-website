import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});
export const CategoriesProvider = function ({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = {
    categoriesMap,
    setCategoriesMap,
  };
  useEffect(function () {
    async function getCategoriesMap() {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    }
    console.log(getCategoriesMap());
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
