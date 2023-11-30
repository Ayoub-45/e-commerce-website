import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.utils";

export const ProductsContext = createContext({
  products: SHOP_DATA,
  setProducts: () => SHOP_DATA,
});
export const ProductsProvider = function ({ children }) {
  const [products, setProducts] = useState([]);
  const value = {
    products,
    setProducts,
  };
  useEffect(function () {
    async function getCategoriesMap() {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }
    console.log(getCategoriesMap());
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
